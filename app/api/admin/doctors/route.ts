import { connectMongo } from "@/lib/mongoose";
import DoctorMaster from "@/models/DoctorMaster";
import { success, error } from "@/lib/response";
import bcrypt from "bcrypt";
import crypto from "crypto"; // <<< ADDED
import { sendWelcomeEmail } from "@/lib/email";
import { generateDoctorUID } from "@/lib/utils";
import mongoose from "mongoose";
import { verifyAccessToken } from "@/lib/jwt";

export const runtime = "nodejs";
const SALT_ROUNDS = 10;

export async function POST(req: Request) {
  try {
    await connectMongo();

    // Admin auth: Expect Authorization: Bearer <token>
    // const auth = req.headers.get("authorization") || "";
    // if (!auth.startsWith("Bearer ")) {
    //   return error("Unauthorized.", {}, 401);
    // }
    // const token = auth.split(" ")[1];

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


    let payload: any = null;
    try {
      payload = await verifyAccessToken(token);
    } catch (e) {
      return error("Invalid token.", {}, 401);
    }
    if (!payload || payload.role !== "admin") {
      return error("Forbidden. Admins only.", {}, 403);
    }

    const body = await req.json();

    // fields same as public
    const first_name = (body.first_name || "").toString().trim();
    const middle_name = (body.middle_name || "").toString().trim();
    const last_name = (body.last_name || "").toString().trim();
    const email = body.email ? body.email.toString().trim().toLowerCase() : "";
    const phone = (body.phone || "").toString().trim();
    const aadhaar = body.aadhaar ? body.aadhaar.toString().trim() : "";
    const passwordRaw = body.password ? body.password.toString() : cryptoRandomPassword();
    const preferred_language = body.preferred_language || null;
    const medical_registration_number = (body.medical_registration_number || "").trim();
    const registration_council = (body.registration_council || "").trim();
    const qualifications = (body.qualifications || "").trim();
    const years_experience = (body.years_experience || "").trim();
    const clinic_id = (body.clinic_id || "").trim();
    const specialty = body.specialty || null;
    const address = body.address || {};
    const profile_photo = body.profile_photo || null;
    const consent_whatsapp = !!body.consent_whatsapp;
    const terms_accepted = !!body.terms_accepted;

    const v: Record<string, string> = {};
    if (!first_name || !/^[A-Za-z\- ]{1,80}$/.test(first_name)) v.first_name = "First name required (1-80 letters/hyphen).";
    if (!last_name || !/^[A-Za-z\- ]{1,80}$/.test(last_name)) v.last_name = "Last name required (1-80 letters/hyphen).";
    if (!phone) v.phone = "Phone is required.";

    if (email && !/^\S+@\S+\.\S+$/.test(email)) v.email = "Invalid email format.";
    if (aadhaar && !/^\d{12}$/.test(aadhaar)) v.aadhaar = "Aadhaar must be 12 digits.";

    if (Object.keys(v).length) return error("Validation failed.", v, 422);

    // Uniqueness
    if (email) {
      const e = await DoctorMaster.findOne({ email }).select("_id").lean();
      if (e) return error("Email already registered.", { email: "Email already registered" }, 409);
    }

    const p = await DoctorMaster.findOne({ phone }).select("_id").lean();
    if (p) return error("Phone already registered.", { phone: "Phone already registered" }, 409);

    if (aadhaar) {
      const a = await DoctorMaster.findOne({ aadhaar }).select("_id").lean();
      if (a) return error("Aadhaar already registered.", { aadhaar: "Aadhaar already registered" }, 409);
    }
    if (!medical_registration_number) v.medical_registration_number = "Medical registration number is required.";
    if (!registration_council) v.registration_council = "Registration council is required.";
    if (!qualifications) v.qualifications = "Qualifications is required.";
    if (!years_experience) v.years_experience = "Experience is required.";
    if (!clinic_id) v.clinic_id = "Clinic id is required.";

    const hashed = await bcrypt.hash(passwordRaw, SALT_ROUNDS);

    let doctor_uid = generateDoctorUID();
    while (await DoctorMaster.findOne({ doctor_uid }).select("_id").lean()) {
      doctor_uid = generateDoctorUID();
    }

    const doc = await DoctorMaster.create({
      doctor_uid,
      first_name,
      middle_name,
      last_name,
      email: email || undefined,
      phone,
      aadhaar: aadhaar || undefined,
      password: hashed,
      preferred_language: mongoose.Types.ObjectId.isValid(preferred_language) ? preferred_language : undefined,
      specialty: mongoose.Types.ObjectId.isValid(specialty) ? specialty : undefined,
      medical_registration_number,
      registration_council,
      qualifications,
      years_experience,
      clinic_id,
      address: address || {},
      profile_photo: profile_photo || undefined,
      consent_whatsapp,
      consent_whatsapp_ts: consent_whatsapp ? new Date() : null,
      terms_accepted,
      terms_accepted_at: terms_accepted ? new Date() : null,
      created_by: "admin",
    });

    try {
      await sendWelcomeEmail({
        to: email || undefined,
        name: `${first_name} ${last_name}`,
        uid: doctor_uid,
        password: passwordRaw,
        createdBy: "admin",
      });
    } catch (mailErr) {
      console.error("sendWelcomeEmail admin create error:", mailErr);
    }

    const out = doc.toObject();
    delete (out as any).password;

    return success("Doctor created by admin.", out);
  } catch (err: any) {
    console.error("POST /api/admin/doctors error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

/* helper used above */
function cryptoRandomPassword(length = 10) {
  return crypto.randomBytes(Math.ceil(length * 0.75)).toString("base64").slice(0, length);
}

export async function GET() {
  await connectMongo();
  const doctors = await DoctorMaster.find().sort({ createdAt: -1 }).lean();
  return success("Doctors list", doctors);
}