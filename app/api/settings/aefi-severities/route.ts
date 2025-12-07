// /app/api/settings/aefi-severities/route.ts
import { connectMongo } from "@/lib/mongoose";
import AefiSeverityMaster from "@/models/AefiSeverityMaster";
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
        { description: { $regex: q, $options: "i" } },
      ];
    }

    const docs = await AefiSeverityMaster.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    return success("Fetched AEFI severities.", docs);
  } catch (err: any) {
    console.error("GET /api/settings/aefi-severities error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();
    const codeRaw = (body.code || "").toString().trim().toUpperCase();
    const nameRaw = (body.name || "").toString().trim();
    const descRaw = (body.description || "").toString().trim();

    const validationErrors: Record<string, string> = {};

    if (!codeRaw) {
      validationErrors.code = "Code is required.";
    } else if (!/^[A-Z0-9_-]{2,20}$/.test(codeRaw)) {
      validationErrors.code =
        "Code must be 2–20 chars (uppercase letters/numbers/_/-).";
    }

    if (!nameRaw) {
      validationErrors.name = "Name is required.";
    } else if (nameRaw.length < 2) {
      validationErrors.name = "Name must be at least 2 characters.";
    }

    if (!descRaw) {
      validationErrors.description = "Description is required.";
    } else if (descRaw.length < 5) {
      validationErrors.description =
        "Description must be at least 5 characters.";
    }

    if (Object.keys(validationErrors).length) {
      return error("Validation failed.", validationErrors, 422);
    }

    const existing = await AefiSeverityMaster.findOne({ code: codeRaw });
    if (existing) {
      return error("Duplicate entry.", { code: "This code already exists." }, 409);
    }

    const doc = await AefiSeverityMaster.create({
      code: codeRaw,
      name: nameRaw,
      description: descRaw,
    });

    return success("AEFI severity created.", doc);
  } catch (err: any) {
    console.error("POST /api/settings/aefi-severities error:", err);
    if (err?.code === 11000) {
      return error("Duplicate entry.", { code: "This code already exists." }, 409);
    }
    return error("Server error.", { server: err.message }, 500);
  }
}