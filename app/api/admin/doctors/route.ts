// import { NextRequest } from "next/server";
// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import DoctorMaster from "@/models/DoctorMaster";
// import { connectMongo } from "@/lib/mongoose";
// import { verifyAccessToken } from "@/lib/jwt";

// /*------------------------*/
// async function requireAdmin(req: NextRequest) {
// const cookieHeader = req.headers.get("cookie") || "";
// let tokenFromCookie = "";
// if (cookieHeader) {
//   const cookies = Object.fromEntries(cookieHeader.split(';').map(s => s.trim().split('=')));
//   tokenFromCookie = cookies['accessToken'] || cookies['access_token'] || cookies['jwt'] || "";
// }
// const authHeader = req.headers.get("authorization") || (tokenFromCookie ? `Bearer ${tokenFromCookie}` : "");
// // then use authHeader same as before:
// if (!authHeader.startsWith("Bearer ")) {
//      throw { status: 401, message: "Unauthorized" };
// }

//  const payload: any = await verifyAccessToken(authHeader.replace("Bearer ", ""));
//   if (!payload || payload.role !== "admin") {
//     throw { status: 403, message: "Admin access only" };
//   }

//   return payload;
// }
// // const token = authHeader.split(" ")[1];

// /* ---------------- AUTH ---------------- *
// async function requireAdmin(req: NextRequest) {
//   const auth =
//     req.headers.get("authorization") ||
//     (req.headers.get("cookie") || "").includes("accessToken")
//       ? `Bearer ${(req.headers.get("cookie") || "").split("accessToken=")[1]}`
//       : "";

//   if (!auth.startsWith("Bearer ")) {
//     throw { status: 401, message: "Unauthorized" };
//   }

//   const payload: any = await verifyAccessToken(auth.replace("Bearer ", ""));
//   if (!payload || payload.role !== "admin") {
//     throw { status: 403, message: "Admin access only" };
//   }

//   return payload;
// }

// /* ---------------- GET : LIST ---------------- */
// export async function GET(req: NextRequest) {
//   try {
//     await connectMongo();
//     await requireAdmin(req);

//     const { searchParams } = new URL(req.url);

//     const page = Number(searchParams.get("page") || 1);
//     const limit = Number(searchParams.get("limit") || 10);
//     const search = (searchParams.get("search") || "").trim();
//     const sortBy = searchParams.get("sortBy") || "createdAt";
//     const sortDir = searchParams.get("sortDir") === "asc" ? 1 : -1;

//     const filter: any = {};
//     if (search) {
//       const re = new RegExp(search, "i");
//       filter.$or = [
//         { first_name: re },
//         { last_name: re },
//         { email: re },
//         { phone: re },
//         { medical_registration_number: re },
//       ];
//     }

//     const skip = (page - 1) * limit;

//     const [total, rows] = await Promise.all([
//       DoctorMaster.countDocuments(filter),
//       DoctorMaster.find(filter)
//         .sort({ [sortBy]: sortDir })
//         .skip(skip)
//         .limit(limit)
//         .lean(),
//     ]);

//     return Response.json({
//       status: true,
//       message: "Doctors list",
//       data: { total, page, limit, rows },
//     });
//   } catch (e: any) {
//     return Response.json(
//       { status: false, message: e.message || "Server error" },
//       { status: e.status || 500 }
//     );
//   }
// }

// /* ---------------- POST : CREATE ---------------- */
// export async function POST(req: NextRequest) {
//   try {
//     await connectMongo();
//     await requireAdmin(req);

//     const payload = await req.json();

//     const errors: Record<string, string> = {};

//     if (!payload.first_name) errors.first_name = "First name is required";
//     if (!payload.last_name) errors.last_name = "Last name is required";
//     if (!payload.email) errors.email = "Email is required";
//     if (!payload.phone) errors.phone = "Phone is required";
//     if (!payload.aadhaar) errors.aadhaar = "Aadhaar is required";
//     if (!payload.password) errors.password = "Password is required";

//     if (!payload.medical_registration_number)
//       errors.medical_registration_number = "Medical registration number is required";

//     if (!payload.registration_council)
//       errors.registration_council = "Registration council is required";

//     if (!payload.qualifications)
//       errors.qualifications = "Qualifications are required";

//     // if (!payload.specialty)
//     //   errors.specialty = "Specialty is required";

//     if (!payload.license_document)
//       errors.license_document = "License document is required";

//     if (Object.keys(errors).length > 0) {
//       return Response.json(
//         { status: false, message: "Validation failed", errors },
//         { status: 422 }
//       );
//     }

//     const exists = await DoctorMaster.findOne({
//       $or: [
//         { email: payload.email },
//         { phone: payload.phone },
//         { aadhaar: payload.aadhaar },
//         { medical_registration_number: payload.medical_registration_number },
//       ],
//     });

//     if (exists) {
//       return Response.json(
//         { status: false, message: "Doctor already exists" },
//         { status: 409 }
//       );
//     }

//     const hashed = await bcrypt.hash(payload.password, 10);

//     const doc = await DoctorMaster.create({
//       ...payload,
//       password: hashed,
//       verified: "Pending",
//       is_active: payload.is_active !== false,
//     });

//     return Response.json({
//       status: true,
//       message: "Doctor created successfully",
//       data: doc,
//     });
//   } catch (e: any) {
//     console.error("POST /doctors error", e);
//     return Response.json(
//       { status: false, message: e.message || "Server error" },
//       { status: 500 }
//     );
//   }
// }

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