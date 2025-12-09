import { connectMongo } from "@/lib/mongoose";
import StateMaster from "@/models/StateMaster";
import { success, error } from "@/lib/response";
import mongoose from "mongoose";

export const runtime = "nodejs";

// GET /api/settings/states?countryId=...&activeOnly=true
export async function GET(req: Request) {
  try {
    await connectMongo();

    const url = new URL(req.url);
    const countryId = url.searchParams.get("countryId");
    const activeOnly = url.searchParams.get("activeOnly") === "true";

    const filter: any = {};
    if (countryId && mongoose.Types.ObjectId.isValid(countryId)) {
      filter.country = countryId;
    }
    if (activeOnly) {
      filter.is_active = true;
    }

    const docs = await StateMaster.find(filter)
      .populate("country", "name code is_active")
      .sort({ name: 1 })
      .lean();

    return success("Fetched states.", docs);
  } catch (err: any) {
    console.error("GET /api/settings/states error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

// POST /api/settings/states
export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();

    const countryId = (body.countryId || "").toString();
    const code = (body.code || "").toString().trim().toUpperCase();
    const name = (body.name || "").toString().trim();
    const is_active =
      typeof body.is_active === "boolean" ? body.is_active : true;

    const validationErrors: Record<string, string> = {};

    if (!countryId || !mongoose.Types.ObjectId.isValid(countryId)) {
      validationErrors.countryId = "Valid country is required.";
    }
    if (!code) {
      validationErrors.code = "Code is required.";
    } else if (!/^[A-Za-z0-9_-]{1,10}$/.test(code)) {
      validationErrors.code =
        "Code must be 1–10 chars (letters/numbers/-/_).";
    }
    if (!name) {
      validationErrors.name = "Name is required.";
    } else if (name.length < 2) {
      validationErrors.name = "Name must be at least 2 characters.";
    }

    if (Object.keys(validationErrors).length) {
      return error("Validation failed.", validationErrors, 422);
    }

    const dup = await StateMaster.findOne({
      country: countryId,
      code,
    });

    if (dup) {
      return error(
        "Duplicate entry.",
        { code: "This code already exists for this country." },
        409
      );
    }

    const doc = await StateMaster.create({
      country: countryId,
      code,
      name,
      is_active,
    });

    return success("State created.", doc);
  } catch (err: any) {
    console.error("POST /api/settings/states error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

