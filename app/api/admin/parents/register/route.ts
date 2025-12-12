// /app/api/parent/register/route.ts
import { connectMongo } from "@/lib/mongoose";
import ParentMaster from "@/models/ParentMaster";
import { success, error } from "@/lib/response";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { sendWelcomeEmail } from "@/lib/email"; // will show helper below
import { generateParentUID } from "@/lib/utils"; // helper shown below
import mongoose from "mongoose";

export const runtime = "nodejs";

const SALT_ROUNDS = 10;

export async function POST(req: Request) {
  try {
    await connectMongo();
    const body = await req.json();

    // Extract/normalize fields
    const first_name = (body.first_name || "").toString().trim();
    const middle_name = (body.middle_name || "").toString().trim();
    const last_name = (body.last_name || "").toString().trim();
    const email = body.email ? body.email.toString().trim().toLowerCase() : "";
    const phone = (body.phone || "").toString().trim();
    const aadhaar = body.aadhaar ? body.aadhaar.toString().trim() : "";
    const passwordRaw = body.password ? body.password.toString() : "";
    const preferred_language = body.preferred_language || null;
    const relationship_to_child = body.relationship_to_child || null;
    const address = body.address || {};
    const national_id = body.national_id || null;
    const profile_photo = body.profile_photo || null;
    const consent_whatsapp = !!body.consent_whatsapp;
    const terms_accepted = !!body.terms_accepted;

    // Basic validation
    const v: Record<string, string> = {};
    if (!first_name || !/^[A-Za-z\- ]{1,80}$/.test(first_name)) v.first_name = "First name required (1-80 letters/hyphen).";
    if (!last_name || !/^[A-Za-z\- ]{1,80}$/.test(last_name)) v.last_name = "Last name required (1-80 letters/hyphen).";
    if (!phone) v.phone = "Phone is required.";
    // phone format validation should be done client-side (E.164). We still check uniqueness below.

    if (!passwordRaw || passwordRaw.length < 8 || !/[A-Z]/.test(passwordRaw) || !/[a-z]/.test(passwordRaw) || !/[0-9]/.test(passwordRaw)) {
      v.password = "Password must be minimum 8 chars and include uppercase, lowercase and a digit.";
    }

    // email conditional recommended: if provided, basic format
    if (email && !/^\S+@\S+\.\S+$/.test(email)) v.email = "Invalid email format.";

    if (aadhaar && !/^\d{12}$/.test(aadhaar)) v.aadhaar = "Aadhaar must be 12 digits.";

    if (Object.keys(v).length) return error("Validation failed.", v, 422);

    // Uniqueness checks
    if (email) {
      const e = await ParentMaster.findOne({ email }).select("_id").lean();
      if (e) return error("Email already registered.", { email: "Email already registered" }, 409);
    }

    const p = await ParentMaster.findOne({ phone }).select("_id").lean();
    if (p) return error("Phone already registered.", { phone: "Phone already registered" }, 409);

    if (aadhaar) {
      const a = await ParentMaster.findOne({ aadhaar }).select("_id").lean();
      if (a) return error("Aadhaar already registered.", { aadhaar: "Aadhaar already registered" }, 409);
    }

    // Create hashed password
    const hashed = await bcrypt.hash(passwordRaw, SALT_ROUNDS);

    // Generate unique parent uid (ensure uniqueness)
    let parent_uid = generateParentUID();
    // ensure unique in db
    while (await ParentMaster.findOne({ parent_uid }).select("_id").lean()) {
      parent_uid = generateParentUID();
    }

    const doc = await ParentMaster.create({
      parent_uid,
      first_name,
      middle_name,
      last_name,
      email: email || undefined,
      phone,
      aadhaar: aadhaar || undefined,
      password: hashed,
      preferred_language: mongoose.Types.ObjectId.isValid(preferred_language) ? preferred_language : undefined,
      relationship_to_child: mongoose.Types.ObjectId.isValid(relationship_to_child) ? relationship_to_child : undefined,
      address: address || {},
      national_id: national_id || undefined,
      profile_photo: profile_photo || undefined,
      consent_whatsapp,
      consent_whatsapp_ts: consent_whatsapp ? new Date() : null,
      consent_whatsapp_ip: req ? (req as any).ip || null : null,
      terms_accepted,
      terms_accepted_at: terms_accepted ? new Date() : null,
      created_by: "self",
    });

    // Send welcome email (non-blocking ideally; await to know result)
    try {
      await sendWelcomeEmail({
        to: email || undefined,
        name: `${first_name} ${last_name}`,
        uid: parent_uid,
        password: passwordRaw,
        createdBy: "self",
      });
    } catch (mailErr) {
      console.error("sendWelcomeEmail error:", mailErr);
      // don't fail registration due to email
    }

    // remove password in response
    const out = doc.toObject();
    delete (out as any).password;

    return success("Registered successfully.", out);
  } catch (err: any) {
    console.error("POST /api/parent/register error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}