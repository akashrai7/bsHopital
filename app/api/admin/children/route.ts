// app/api/admin/children/route.ts
import { connectMongo } from "@/lib/mongoose";
import ChildMaster from "@/models/ChildMaster";
import ParentMaster from "@/models/ParentMaster";
import { success, error } from "@/lib/response";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { verifyAccessToken } from "@/lib/jwt";

export const runtime = "nodejs";

// // auth helper (allow admin/doctor/parent)
// async function requireAuth(req: Request) {
//   const auth = req.headers.get("authorization") || "";
//   if (!auth.startsWith("Bearer ")) throw { status: 401, message: "Unauthorized" };
//   const token = auth.split(" ")[1];
//   const payload: any = await verifyAccessToken(token);
//   if (!payload) throw { status: 401, message: "Invalid token" };
//   // payload should contain role and id
//   return payload;
// }

async function requireAuth(req: Request) {
const cookieHeader = req.headers.get("cookie") || "";
let tokenFromCookie = "";
if (cookieHeader) {
  const cookies = Object.fromEntries(cookieHeader.split(';').map(s => s.trim().split('=')));
  tokenFromCookie = cookies['accessToken'] || cookies['access_token'] || cookies['jwt'] || "";
}
const authHeader = req.headers.get("authorization") || (tokenFromCookie ? `Bearer ${tokenFromCookie}` : "");
// then use authHeader same as before:
if (!authHeader.startsWith("Bearer ")) {
  return error("Unauthorized.", {}, 401);
}
const token = authHeader.split(" ")[1];
const payload: any = await verifyAccessToken(token);
  if (!payload) throw { status: 401, message: "Invalid token" };
  // payload should contain role and id
   return payload;
}

function pad(num: number, len = 5) {
  return String(num).padStart(len, "0");
}

async function generateChildId() {
  // CHD00001 etc.
  // find latest child_id numeric suffix
  const last = await ChildMaster.findOne({}).sort({ created_at: -1 }).select("child_id").lean();
  if (!last || !last.child_id) return `CHD${pad(1)}`;
  const m = last.child_id.match(/CHD0*([0-9]+)$/);
  if (!m) return `CHD${pad(1)}`;
  const n = Number(m[1]) + 1;
  return `CHD${pad(n)}`;
}

export async function GET(req: Request) {
  try {
    await connectMongo();
    // require auth
    try { await requireAuth(req); } catch (e: any) { return error(e.message || "Unauthorized", {}, e.status || 401); }

    const url = new URL(req.url);
    const page = Math.max(1, Number(url.searchParams.get("page") || "1"));
    const limit = Math.min(200, Number(url.searchParams.get("limit") || "20"));
    const search = (url.searchParams.get("search") || "").trim();

    const filter: any = {};
    if (search) {
      const re = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      filter.$or = [{ full_name: re }, { child_id: re }, { primary_contact: re }];
    }

    const skip = (page - 1) * limit;
    const [total, rows] = await Promise.all([
      ChildMaster.countDocuments(filter),
      ChildMaster.find(filter)
        .sort({ created_at: -1 })
        .skip(skip)
        .limit(limit)
        .populate("parent_ids", "first_name last_name phone email parent_uid")
        .lean(),
    ]);

    return success("Children list", { total, page, limit, data: rows });
  } catch (err: any) {
    console.error("GET /api/admin/children error:", err);
    return error("Server error", { server: err.message }, 500);
  }
}

export async function POST(req: Request) {
  try {
    await connectMongo();
    const payload = await req.json();

    // require auth
    let payloadUser: any = null;
    try { payloadUser = await requireAuth(req); } catch (e: any) { return error(e.message || "Unauthorized", {}, e.status || 401); }

    // ensure parent_ids exists and at least one
    const parentIds = Array.isArray(payload.parent_ids) ? payload.parent_ids : (payload.parent_ids ? [payload.parent_ids] : []);
    if (!parentIds.length) return error("At least one parent required.", { parent_ids: "required" }, 422);

    // If user is a parent, ensure they are one of the parent_ids
    if (payloadUser.role === "parent") {
      const tokenParentId = String(payloadUser.id);
      const included = parentIds.some((p: any) => String(p) === tokenParentId);
      if (!included) return error("Parents can only add children for themselves.", {}, 403);
    }

    // Basic validation
    const v: Record<string, string> = {};
    const full_name = (payload.full_name || "").toString().trim();
    const dobRaw = payload.dob;
    const gender_code = (payload.gender_code || "").toString().trim();

    if (!full_name || full_name.length > 100) v.full_name = "Full name required (1-100 chars)";
    const dob = dobRaw ? new Date(dobRaw) : null;
    if (!dob || isNaN(dob.getTime())) v.dob = "Invalid date";
    else {
      const today = new Date();
      if (dob > today) v.dob = "DOB cannot be in the future";
    }
    if (!gender_code) v.gender_code = "Gender required";

    if (Object.keys(v).length) return error("Validation failed.", v, 422);

    // parent existence checks: ensure all parent ids exist
    for (const pid of parentIds) {
      if (!mongoose.Types.ObjectId.isValid(pid)) return error("Invalid parent id", {}, 422);
      const pp = await ParentMaster.findById(pid).select("_id phone").lean();
      if (!pp) return error("Parent not found: " + pid, {}, 422);
    }

    // generate child_id
    const child_id = await generateChildId();

    const doc = await ChildMaster.create({
      child_id,
      full_name,
      dob,
      gender_code,
      blood_group_code: payload.blood_group_code || undefined,
      birth_weight_kg: payload.birth_weight_kg || undefined,
      birth_length_cm: payload.birth_length_cm || undefined,
      place_of_birth: payload.place_of_birth || undefined,
      hospital_name: payload.hospital_name || undefined,
      birth_registration_id: payload.birth_registration_id || undefined,
      parent_ids: parentIds,
      photo: payload.photo || undefined,
      primary_contact: payload.primary_contact || undefined,
      preferred_clinic_id: mongoose.Types.ObjectId.isValid(payload.preferred_clinic_id) ? payload.preferred_clinic_id : undefined,
      notes: payload.notes || undefined,
      consent_data_sharing: !!payload.consent_data_sharing,
    });

    const out = doc.toObject();
    return success("Child created.", out);
  } catch (err: any) {
    console.error("POST /api/admin/children error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}