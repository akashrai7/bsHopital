// /app/api/settings/genders/[id]/route.ts
import { connectMongo } from "@/lib/mongoose";
import SettingGender from "@/models/SettingGender";
import { success, error } from "@/lib/response";

export const runtime = "nodejs";

function isValidObjectId(id: string) {
  // lightweight check
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
    const name = (body.name || "").toString().trim();

    const validationErrors: Record<string, string> = {};
    if (!name) validationErrors.name = "Name is required.";
    if (Object.keys(validationErrors).length) {
      return error("Validation failed.", validationErrors, 422);
    }

    // check duplicate name on other records
    const dup = await SettingGender.findOne({ _id: { $ne: id }, name: { $regex: `^${name}$`, $options: "i" } });
    if (dup) {
      return error("Duplicate entry.", { name: "Another record with same name exists." }, 409);
    }

    const updated = await SettingGender.findByIdAndUpdate(id, { name }, { new: true });
    if (!updated) return error("Not found.", { id: "Not found." }, 404);

    return success("Updated successfully.", updated);
  } catch (err: any) {
    console.error("PUT /api/settings/genders/[id] error:", err);
    if (err?.code === 11000) {
      return error("Duplicate entry.", { name: "This gender already exists." }, 409);
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

    const removed = await SettingGender.findByIdAndDelete(id);
    if (!removed) return error("Not found.", { id: "Not found." }, 404);

    return success("Deleted successfully.", { id });
  } catch (err: any) {
    console.error("DELETE /api/settings/genders/[id] error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}
