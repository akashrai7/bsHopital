import { connectMongo } from "@/lib/mongoose";
import LanguageMaster from "@/models/LanguageMaster";
import { success, error } from "@/lib/response";
import mongoose from "mongoose";

export const runtime = "nodejs";

// UPDATE language
export async function PUT(req: Request, { params }: any) {
  try {
    await connectMongo();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return error("Invalid ID.", { id: "Invalid ID." }, 400);
    }

    const body = await req.json();
    const code = (body.code || "").trim().toUpperCase();
    const name = (body.name || "").trim();
    const is_active =
      typeof body.is_active === "boolean" ? body.is_active : true;

    const validationErrors: any = {};
    if (!code) validationErrors.code = "Code is required.";
    if (!name) validationErrors.name = "Name is required.";

    if (Object.keys(validationErrors).length > 0) {
      return error("Validation failed.", validationErrors, 422);
    }

    const duplicate = await LanguageMaster.findOne({
      _id: { $ne: id },
      code,
    });
    if (duplicate) {
      return error("Duplicate code.", { code: "Code already exists." }, 409);
    }

    const updated = await LanguageMaster.findByIdAndUpdate(
      id,
      { code, name, is_active },
      { new: true }
    );

    return success("Language updated.", updated);
  } catch (err: any) {
    console.error("PUT /languages error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

// DELETE language
export async function DELETE(req: Request, { params }: any) {
  try {
    await connectMongo();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return error("Invalid ID.", { id: "Invalid ID" }, 400);
    }

    await LanguageMaster.findByIdAndDelete(id);

    return success("Language deleted.", { id });
  } catch (err: any) {
    console.error("DELETE /languages error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}