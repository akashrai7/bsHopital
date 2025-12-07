// /app/api/settings/blood-groups/route.ts
import { connectMongo } from "@/lib/mongoose";
import BloodGroupMaster from "@/models/BloodGroupMaster";
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
        { code: { $regex: q, $options: "i" } },
        { name: { $regex: q, $options: "i" } },
      ];
    }

    const docs = await BloodGroupMaster.find(filter).sort({ createdAt: -1 }).lean();
    return success("Fetched blood groups.", docs);
  } catch (err: any) {
    console.error("GET /api/settings/blood-groups error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();
    const codeRaw = (body.code || "").toString().trim().toUpperCase();
    const nameRaw = (body.name || "").toString().trim();

    const validationErrors: Record<string, string> = {};

    if (!codeRaw) {
      validationErrors.code = "Code is required.";
    } else if (!/^[ABO]{1,2}[+-]$/i.test(codeRaw)) {
      validationErrors.code = "Invalid code (e.g., O+, AB-).";
    }

    if (!nameRaw) {
      validationErrors.name = "Name is required.";
    } else if (nameRaw.length < 2) {
      validationErrors.name = "Name must be at least 2 characters.";
    }

    if (Object.keys(validationErrors).length) {
      return error("Validation failed.", validationErrors, 422);
    }

    const existing = await BloodGroupMaster.findOne({ code: codeRaw });
    if (existing) {
      return error("Duplicate entry.", { code: "This code already exists." }, 409);
    }

    const doc = await BloodGroupMaster.create({ code: codeRaw, name: nameRaw });
    return success("Blood group created.", doc);
  } catch (err: any) {
    console.error("POST /api/settings/blood-groups error:", err);
    if (err?.code === 11000) {
      return error("Duplicate entry.", { code: "This code already exists." }, 409);
    }
    return error("Server error.", { server: err.message }, 500);
  }
}