import { connectMongo } from "@/lib/mongoose";
import DistrictMaster from "@/models/DistrictMaster";
import { success, error } from "@/lib/response";
import mongoose from "mongoose";

export const runtime = "nodejs";

// GET /api/settings/districts?countryId=...&stateId=...&activeOnly=true
export async function GET(req: Request) {
  try {
    await connectMongo();

    const url = new URL(req.url);
    const countryId = url.searchParams.get("countryId");
    const stateId = url.searchParams.get("stateId");
    const activeOnly = url.searchParams.get("activeOnly") === "true";

    const filter: any = {};
    if (countryId && mongoose.Types.ObjectId.isValid(countryId)) {
      filter.country = countryId;
    }
    if (stateId && mongoose.Types.ObjectId.isValid(stateId)) {
      filter.state = stateId;
    }
    if (activeOnly) {
      filter.is_active = true;
    }

    const docs = await DistrictMaster.find(filter)
      .populate("country", "name code is_active")
      .populate("state", "name code is_active")
      .sort({ name: 1 })
      .lean();

    return success("Fetched districts.", docs);
  } catch (err: any) {
    console.error("GET /api/settings/districts error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

// POST /api/settings/districts
export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();

    const countryId = (body.countryId || "").toString();
    const stateId = (body.stateId || "").toString();
    const code = (body.code || "").toString().trim().toUpperCase();
    const name = (body.name || "").toString().trim();
    const is_active =
      typeof body.is_active === "boolean" ? body.is_active : true;

    const validationErrors: Record<string, string> = {};

    if (!countryId || !mongoose.Types.ObjectId.isValid(countryId)) {
      validationErrors.countryId = "Valid country is required.";
    }
    if (!stateId || !mongoose.Types.ObjectId.isValid(stateId)) {
      validationErrors.stateId = "Valid state is required.";
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

    const dup = await DistrictMaster.findOne({
      state: stateId,
      code,
    });

    if (dup) {
      return error(
        "Duplicate entry.",
        { code: "This code already exists for this state." },
        409
      );
    }

    const doc = await DistrictMaster.create({
      country: countryId,
      state: stateId,
      code,
      name,
      is_active,
    });

    return success("District created.", doc);
  } catch (err: any) {
    console.error("POST /api/settings/districts error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}