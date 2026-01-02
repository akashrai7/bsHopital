// /app/api/admin/parents/[id]/route.ts
import { connectMongo } from "@/lib/mongoose";
import ParentMaster from "@/models/ParentMaster";
import ParentAuditLog from "@/models/ParentAuditLog";
import { success, error } from "@/lib/response";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { verifyAccessToken } from "@/lib/jwt";
import { diffChanges } from "@/lib/parentAudit";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";
const SALT_ROUNDS = 10;

/* ================= helpers ================= */

function parseCookies(cookieHeader: string) {
  return Object.fromEntries(
    cookieHeader.split(";").map((c) => {
      const [k, ...v] = c.trim().split("=");
      return [k, decodeURIComponent(v.join("="))];
    })
  );
}

function getAuthHeader(req: Request) {
  const headerAuth = req.headers.get("authorization") || "";
  if (headerAuth.startsWith("Bearer ")) return headerAuth;

  const cookieHeader = req.headers.get("cookie") || "";
  if (!cookieHeader) return "";

  const cookies = parseCookies(cookieHeader);
  const token = cookies.accessToken || cookies.access_token || cookies.jwt || "";
  return token ? `Bearer ${token}` : "";
}

async function requireAdmin(req: Request) {
  const auth = getAuthHeader(req);
  if (!auth.startsWith("Bearer ")) {
    throw { status: 401, message: "Unauthorized." };
  }

  try {
    const payload: any = await verifyAccessToken(auth.split(" ")[1]);
    if (!payload || payload.role !== "admin") {
      throw { status: 403, message: "Forbidden. Admins only." };
    }
    return payload;
  } catch {
    throw { status: 401, message: "Invalid token." };
  }
}

/* ================= GET ================= */

export async function GET(req: Request, { params }: any) {
  try {
    await connectMongo();
    await requireAdmin(req);

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return error("Invalid ID.", {}, 400);
    }

    const doc = await ParentMaster.findById(id)
      .select("-password")
      .populate("preferred_language", "name code")
      .populate("relationship_to_child", "name code")
      .populate("address.country", "name code")
      .populate("address.state", "name code")
      .populate("address.district", "name code")
      .lean();

    if (!doc) return error("Not found.", {}, 404);
    return success("Parent fetched.", doc);
  } catch (err: any) {
    return error(err.message || "Server error.", {}, err.status || 500);
  }
}

/* ================= PUT ================= */
/*
export async function PUT(req: Request, { params }: any) {
  try {
    await connectMongo();
    const payload = await requireAdmin(req);

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return error("Invalid ID.", {}, 400);
    }

    const body = await req.json();

    // fetch OLD parent (for audit)
    const oldParent = await ParentMaster.findById(id).lean();
    if (!oldParent) return error("Not found.", {}, 404);

    const updates: any = {};

    if (typeof body.first_name === "string") updates.first_name = body.first_name.trim();
    if (typeof body.middle_name === "string") updates.middle_name = body.middle_name.trim();
    if (typeof body.last_name === "string") updates.last_name = body.last_name.trim();
    if (typeof body.email === "string") updates.email = body.email.trim().toLowerCase() || undefined;
    if (typeof body.phone === "string") updates.phone = body.phone.replace(/\D/g, "");
    if (typeof body.aadhaar === "string") updates.aadhaar = body.aadhaar || undefined;

    if (mongoose.Types.ObjectId.isValid(body.preferred_language))
      updates.preferred_language = body.preferred_language;

    if (mongoose.Types.ObjectId.isValid(body.relationship_to_child))
      updates.relationship_to_child = body.relationship_to_child;

    if (body.address && typeof body.address === "object") {
      updates.address = {
        line1: body.address.line1,
        line2: body.address.line2,
        city: body.address.city,
        pincode: body.address.pincode,
        country: mongoose.Types.ObjectId.isValid(body.address.country) ? body.address.country : undefined,
        state: mongoose.Types.ObjectId.isValid(body.address.state) ? body.address.state : undefined,
        district: mongoose.Types.ObjectId.isValid(body.address.district) ? body.address.district : undefined,
      };
    }

    if (typeof body.national_id === "string") updates.national_id = body.national_id || undefined;
    if (typeof body.profile_photo === "string") updates.profile_photo = body.profile_photo || undefined;

    if (typeof body.consent_whatsapp === "boolean") {
      updates.consent_whatsapp = body.consent_whatsapp;
      updates.consent_whatsapp_ts = body.consent_whatsapp ? new Date() : null;
    }

    if (typeof body.terms_accepted === "boolean") {
      updates.terms_accepted = body.terms_accepted;
      updates.terms_accepted_at = body.terms_accepted ? new Date() : null;
    }

    if (typeof body.admin_notes === "string") updates.admin_notes = body.admin_notes;
    if (typeof body.is_active === "boolean") updates.is_active = body.is_active;

    if (typeof body.password === "string" && body.password.trim()) {
      updates.password = await bcrypt.hash(body.password, SALT_ROUNDS);
    }

    // UPDATE once
    const updatedParent = await ParentMaster.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true }
    )
      .select("-password")
      .lean();

    const formData = await req.formData();

    const profilePhoto = formData.get("profile_photo") as File | null;
    console.log(profilePhoto?.name, profilePhoto?.size);

    // AUDIT LOG
    const changes = diffChanges(oldParent, updates);
    if (Object.keys(changes).length) {
      await ParentAuditLog.create({
        parent_id: id,
        action: "UPDATE",
        changes,
        actor_id: payload.sub,
        actor_role: "admin",
        ip: req.headers.get("x-forwarded-for") || "",
      });
    }

    return success("Parent updated.", updatedParent);
  } catch (err: any) {
    if (err?.code === 11000) {
      return error("Duplicate entry.", err.keyValue || {}, 409);
    }
    return error(err.message || "Server error.", {}, err.status || 500);
  }
}
*/
/* ================= PUT ================= */

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectMongo();
  const payload = await requireAdmin(req);

  const { id } = await params;

  const formData = await req.formData(); // ✅ IMPORTANT

  const updates: any = {};

  updates.first_name = formData.get("first_name")?.toString().trim();
  updates.middle_name = formData.get("middle_name")?.toString().trim();
  updates.last_name = formData.get("last_name")?.toString().trim();
  updates.email = formData.get("email")?.toString().toLowerCase();
  updates.phone = formData.get("phone")?.toString();
  updates.aadhaar = formData.get("aadhaar")?.toString() || undefined;

  const preferredLanguage = formData.get("preferred_language");

if (
  typeof preferredLanguage === "string" &&
  mongoose.Types.ObjectId.isValid(preferredLanguage)
) {
  updates.preferred_language = preferredLanguage;
}

  const rel = formData.get("relationship_to_child") as string;

if (mongoose.Types.ObjectId.isValid(rel)) {
  updates.relationship_to_child = rel;
}

  updates.address = {
    line1: formData.get("address[line1]")?.toString(),
    line2: formData.get("address[line2]")?.toString(),
    city: formData.get("address[city]")?.toString(),
    pincode: formData.get("address[pincode]")?.toString(),
    country: formData.get("address[country]")?.toString(),
    state: formData.get("address[state]")?.toString(),
    district: formData.get("address[district]")?.toString(),
  };

  updates.is_active = formData.get("is_active") === "true";
  updates.consent_whatsapp = formData.get("consent_whatsapp") === "true";
  updates.terms_accepted = formData.get("terms_accepted") === "true";

  // 🔥 PROFILE PHOTO
  const file = formData.get("profile_photo") as File | null;
  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `parent_${id}_${Date.now()}.jpg`;

    // example: save locally / cloudinary / s3
    await fs.writeFile(`./public/uploads/parents/${filename}`, buffer);

    const uploadDir = path.join(process.cwd(), "public/uploads/parents");

// ensure folder exists
await fs.mkdir(uploadDir, { recursive: true });

const filePath = path.join(uploadDir, filename);
await fs.writeFile(filePath, buffer);

updates.profile_photo = `/uploads/parents/${filename}`;
  }

// AUDIT LOG
 // fetch OLD parent (for audit)
    const oldParent = await ParentMaster.findById(id).lean();
    if (!oldParent) return error("Not found.", {}, 404);

    const changes = diffChanges(oldParent, updates);
    if (Object.keys(changes).length) {
      await ParentAuditLog.create({
        parent_id: id,
        action: "UPDATE",
        changes,
        actor_id: payload.sub,
        actor_role: "admin",
        ip: req.headers.get("x-forwarded-for") || "",
      });
    }

  const updated = await ParentMaster.findByIdAndUpdate(
    id,
    { $set: updates },
    { new: true }
  ).select("-password");

  return success("Parent updated", updated);
}


/* ================= DELETE ================= */

export async function DELETE(req: Request, { params }: any) {
  try {
    await connectMongo();
    const payload = await requireAdmin(req);

    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return error("Invalid ID.", {}, 400);
    }

    const doc = await ParentMaster.findByIdAndDelete(id).lean();
    if (!doc) return error("Not found.", {}, 404);

    await ParentAuditLog.create({
      parent_id: id,
      action: "DELETE",
      changes: {},
      actor_id: payload.sub,
      actor_role: "admin",
      ip: req.headers.get("x-forwarded-for") || "",
    });

    return success("Parent deleted.", doc);
  } catch (err: any) {
    return error(err.message || "Server error.", {}, err.status || 500);
  }
}
