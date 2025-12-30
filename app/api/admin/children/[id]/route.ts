// app/api/admin/children/[id]/route.ts
import { connectMongo } from "@/lib/mongoose";
import ChildMaster from "@/models/ChildMaster";
import ParentMaster from "@/models/ParentMaster";
import { success, error } from "@/lib/response";
import mongoose from "mongoose";
import { verifyAccessToken } from "@/lib/jwt";
import ChildAuditLog from "@/models/ChildAuditLog";
import { diffChanges } from "@/lib/audit";

export const runtime = "nodejs";

/* ================= AUTH ================= */

async function requireAuth(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split(";").map(c => c.trim().split("="))
  );

  const token =
    req.headers.get("authorization")?.replace("Bearer ", "") ||
    cookies.accessToken ||
    cookies.access_token ||
    cookies.jwt;

  if (!token) throw { status: 401, message: "Unauthorized" };

  try {
    return await verifyAccessToken(token);
  } catch {
    throw { status: 401, message: "Invalid token" };
  }
}

/* ================= GET ================= */

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectMongo();
    await requireAuth(req);

    const { id } = await context.params; // ✅ FIX HERE

    if (!mongoose.Types.ObjectId.isValid(id))
      return error("Invalid id", {}, 400);

    const doc = await ChildMaster.findById(id)
      .populate("parent_ids", "first_name last_name phone email parent_uid")
      .lean();
      

    if (!doc) return error("Not found", {}, 404);
    return success("Child fetched", doc);
  } catch (e: any) {
    return error(e.message || "Server error", {}, e.status || 500);
  }
}

/* ================= PUT ================= */

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectMongo();

    const user = await requireAuth(req);
    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return error("Invalid id", {}, 400);

    const oldDoc = await ChildMaster.findById(id).lean();
    if (!oldDoc) return error("Not found", {}, 404);

    const body = await req.json();

    // 🔐 Parent can edit only own child
    if (user.role === "parent") {
      const allowed = await ChildMaster.exists({
        _id: id,
        parent_ids: user.id,
      });
      if (!allowed) return error("Forbidden", {}, 403);
    }

    // ================= SAFE UPDATE NORMALIZATION =================

    const updates: any = {};

    [
      "full_name",
      "gender_code",
      "blood_group_code",
      "place_of_birth",
      "hospital_name",
      "photo",
      "primary_contact",
      "notes",
    ].forEach((f) => {
      if (typeof body[f] === "string" && body[f].trim() !== "") {
        updates[f] = body[f].trim();
      }
    });

    if (body.dob) updates.dob = new Date(body.dob);

    if (body.birth_weight_kg !== "" && body.birth_weight_kg !== undefined)
      updates.birth_weight_kg = Number(body.birth_weight_kg);

    if (body.birth_length_cm !== "" && body.birth_length_cm !== undefined)
      updates.birth_length_cm = Number(body.birth_length_cm);

    if (Array.isArray(body.parent_ids) && body.parent_ids.length > 0) {
      const count = await ParentMaster.countDocuments({
        _id: { $in: body.parent_ids },
      });
      if (count !== body.parent_ids.length)
        return error("Invalid parent id(s)", {}, 422);

      updates.parent_ids = body.parent_ids;
    }

    if (
      body.preferred_clinic_id &&
      mongoose.Types.ObjectId.isValid(body.preferred_clinic_id)
    ) {
      updates.preferred_clinic_id = body.preferred_clinic_id;
    }

    if (typeof body.consent_data_sharing === "boolean") {
      updates.consent_data_sharing = body.consent_data_sharing;
    }

    // ================= UPDATE =================

    const updatedDoc = await ChildMaster.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true }
    )
      .populate("parent_ids", "first_name last_name phone email parent_uid")
      .lean();

    if (!updatedDoc) return error("Not found", {}, 404);

    // ================= AUDIT LOG =================

    const changes = diffChanges(oldDoc, updates, [
      "full_name",
      "dob",
      "gender_code",
      "blood_group_code",
      "birth_weight_kg",
      "birth_length_cm",
      "place_of_birth",
      "hospital_name",
      "parent_ids",
      "primary_contact",
      "notes",
      "consent_data_sharing",
    ]);

    if (Object.keys(changes).length > 0) {
      await ChildAuditLog.create({
        child_id: id,
        action: "UPDATE",
        changed_by: user.id,
        changed_by_role: user.role,
        changes,
        ip: req.headers.get("x-forwarded-for") || "",
        user_agent: req.headers.get("user-agent") || "",
      });
    }

    // ================= RESPONSE =================

    return success("Child updated", updatedDoc);
  } catch (e: any) {
    console.error("PUT CHILD ERROR:", e);
    return error("Server error", { server: e.message }, 500);
  }
}


/* ================= DELETE ================= */

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectMongo();
    const user = await requireAuth(req);

    if (user.role !== "admin" && user.role !== "super_admin")
      return error("Forbidden", {}, 403);

    const { id } = await context.params; // ✅ FIX HERE

    if (!mongoose.Types.ObjectId.isValid(id))
      return error("Invalid id", {}, 400);

    const doc = await ChildMaster.findByIdAndDelete(id).lean();
    if (!doc) return error("Not found", {}, 404);

    return success("Child deleted", doc);
  } catch (e: any) {
    return error(e.message || "Server error", {}, e.status || 500);
  }
}
