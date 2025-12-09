import { connectMongo } from "@/lib/mongoose";
import DistrictMaster from "@/models/DistrictMaster";
import { success, error } from "@/lib/response";
import mongoose from "mongoose";

export const runtime = "nodejs";

// PUT /api/settings/districts/:id
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongo();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return error("Invalid id.", { id: "Invalid id" }, 400);
    }

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
      _id: { $ne: id },
      state: stateId,
      code,
    });

    if (dup) {
      return error(
        "Duplicate entry.",
        { code: "Another district with this code exists for this state." },
        409
      );
    }

    const updated = await DistrictMaster.findByIdAndUpdate(
      id,
      {
        country: countryId,
        state: stateId,
        code,
        name,
        is_active,
      },
      { new: true }
    );

    if (!updated) {
      return error("Not found.", { id: "Record not found" }, 404);
    }

    return success("District updated.", updated);
  } catch (err: any) {
    console.error("PUT /api/settings/districts/[id] error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

// DELETE /api/settings/districts/:id
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongo();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return error("Invalid id.", { id: "Invalid id" }, 400);
    }

    const deleted = await DistrictMaster.findByIdAndDelete(id);
    if (!deleted) {
      return error("Not found.", { id: "Record not found" }, 404);
    }

    return success("District deleted.", { id });
  } catch (err: any) {
    console.error("DELETE /api/settings/districts/[id] error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}
