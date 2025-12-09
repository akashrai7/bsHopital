// /app/api/settings/vaccine-manufacturers/route.ts
import { connectMongo } from "@/lib/mongoose";
import VaccineManufacturerMaster from "@/models/VaccineManufacturerMaster";
import { success, error } from "@/lib/response";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    await connectMongo();

    const url = new URL(req.url);
    const q = (url.searchParams.get("q") || "").trim();

    const filter: any = {};
    if (q) {
      filter.$or = [
        { name: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ];
    }

    const docs = await VaccineManufacturerMaster.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    return success("Fetched vaccine manufacturers.", docs);
  } catch (err: any) {
    console.error("GET /api/settings/vaccine-manufacturers error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();
    const nameRaw = (body.name || "").toString().trim();
    const descRaw = (body.description || "").toString().trim();

    const validationErrors: Record<string, string> = {};

    if (!nameRaw) {
      validationErrors.name = "Name is required.";
    } else if (nameRaw.length < 2) {
      validationErrors.name = "Name must be at least 2 characters.";
    }

    if (descRaw && descRaw.length < 3) {
      validationErrors.description =
        "Description must be at least 3 characters if provided.";
    }

    if (Object.keys(validationErrors).length) {
      return error("Validation failed.", validationErrors, 422);
    }

    // duplicate check (case-insensitive by regex)
    const existing = await VaccineManufacturerMaster.findOne({
      name: { $regex: `^${nameRaw}$`, $options: "i" },
    });
    if (existing) {
      return error("Duplicate entry.", { name: "This manufacturer already exists." }, 409);
    }

    const doc = await VaccineManufacturerMaster.create({
      name: nameRaw,
      description: descRaw,
    });

    return success("Vaccine manufacturer created.", doc);
  } catch (err: any) {
    console.error("POST /api/settings/vaccine-manufacturers error:", err);
    if (err?.code === 11000) {
      return error("Duplicate entry.", { name: "This manufacturer already exists." }, 409);
    }
    return error("Server error.", { server: err.message }, 500);
  }
}
