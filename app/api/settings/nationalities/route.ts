// /app/api/settings/nationalities/route.ts
import { connectMongo } from "@/lib/mongoose";
import NationalityMaster from "@/models/NationalityMaster";
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

    const docs = await NationalityMaster.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    return success("Fetched nationalities.", docs);
  } catch (err: any) {
    console.error("GET /api/settings/nationalities error:", err);
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
    } else if (!/^[A-Z]{2,5}$/.test(codeRaw)) {
      validationErrors.code = "Invalid code (use 2–5 uppercase letters, e.g., IN).";
    }

    if (!nameRaw) {
      validationErrors.name = "Name is required.";
    } else if (nameRaw.length < 2) {
      validationErrors.name = "Name must be at least 2 characters.";
    }

    if (Object.keys(validationErrors).length) {
      return error("Validation failed.", validationErrors, 422);
    }

    const existing = await NationalityMaster.findOne({ code: codeRaw });
    if (existing) {
      return error("Duplicate entry.", { code: "This code already exists." }, 409);
    }

    const doc = await NationalityMaster.create({
      code: codeRaw,
      name: nameRaw,
    });

    return success("Nationality created.", doc);
  } catch (err: any) {
    console.error("POST /api/settings/nationalities error:", err);
    if (err?.code === 11000) {
      return error("Duplicate entry.", { code: "This code already exists." }, 409);
    }
    return error("Server error.", { server: err.message }, 500);
  }
}