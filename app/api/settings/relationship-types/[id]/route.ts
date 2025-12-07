// /app/api/settings/relationship-types/[id]/route.ts
import { connectMongo } from "@/lib/mongoose";
import RelationshipTypeMaster from "@/models/RelationshipTypeMaster";
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
    const codeRaw = (body.code || "").toString().trim().toUpperCase();
    const nameRaw = (body.name || "").toString().trim();

    const validationErrors: Record<string, string> = {};

    if (!codeRaw) {
      validationErrors.code = "Code is required.";
    } else if (!/^[A-Za-z]{1,10}$/.test(codeRaw)) {
      validationErrors.code = "Code must be 1-10 letters (e.g., F, M, GF).";
    }

    if (!nameRaw) {
      validationErrors.name = "Name is required.";
    } else if (nameRaw.length < 2) {
      validationErrors.name = "Name must be at least 2 characters.";
    }

    if (Object.keys(validationErrors).length) {
      return error("Validation failed.", validationErrors, 422);
    }

    // check duplicate code on other records
    const dup = await RelationshipTypeMaster.findOne({
      _id: { $ne: id },
      code: codeRaw,
    });
    if (dup) {
      return error(
        "Duplicate entry.",
        { code: "Another record with same code exists." },
        409
      );
    }

    const updated = await RelationshipTypeMaster.findByIdAndUpdate(
      id,
      { code: codeRaw, name: nameRaw },
      { new: true }
    );
    if (!updated) return error("Not found.", { id: "Not found." }, 404);

    return success("Updated successfully.", updated);
  } catch (err: any) {
    console.error("PUT /api/settings/relationship-types/[id] error:", err);
    if (err?.code === 11000) {
      return error("Duplicate entry.", { code: "This code already exists." }, 409);
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

    const removed = await RelationshipTypeMaster.findByIdAndDelete(id);
    if (!removed) return error("Not found.", { id: "Not found." }, 404);

    return success("Deleted successfully.", { id });
  } catch (err: any) {
    console.error("DELETE /api/settings/relationship-types/[id] error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}
