// /app/api/settings/vaccine-manufacturers/[id]/route.ts
import { connectMongo } from "@/lib/mongoose";
import VaccineManufacturerMaster from "@/models/VaccineManufacturerMaster";
import { success, error } from "@/lib/response";

export const runtime = "nodejs";

function isValidObjectId(id: string) {
  const mongoose = require("mongoose");
  return mongoose.Types.ObjectId.isValid(id);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectMongo();
    const id = params.id;

    if (!isValidObjectId(id)) {
      return error("Invalid id.", { id: "Invalid id." }, 400);
    }

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

    // duplicate check on other records
    const dup = await VaccineManufacturerMaster.findOne({
      _id: { $ne: id },
      name: { $regex: `^${nameRaw}$`, $options: "i" },
    });
    if (dup) {
      return error(
        "Duplicate entry.",
        { name: "Another record with same name exists." },
        409
      );
    }

    const updated = await VaccineManufacturerMaster.findByIdAndUpdate(
      id,
      { name: nameRaw, description: descRaw },
      { new: true }
    );
    if (!updated) return error("Not found.", { id: "Not found." }, 404);

    return success("Updated successfully.", updated);
  } catch (err: any) {
    console.error("PUT /api/settings/vaccine-manufacturers/[id] error:", err);
    if (err?.code === 11000) {
      return error("Duplicate entry.", { name: "This manufacturer already exists." }, 409);
    }
    return error("Server error.", { server: err.message }, 500);
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectMongo();
    const id = params.id;

    if (!isValidObjectId(id)) {
      return error("Invalid id.", { id: "Invalid id." }, 400);
    }

    const removed = await VaccineManufacturerMaster.findByIdAndDelete(id);
    if (!removed) return error("Not found.", { id: "Not found." }, 404);

    return success("Deleted successfully.", { id });
  } catch (err: any) {
    console.error("DELETE /api/settings/vaccine-manufacturers/[id] error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}