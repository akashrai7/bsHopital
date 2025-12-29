// // /app/api/admin/create-parent/route.ts
// import { connectMongo } from "@/lib/mongoose";
// import ParentMaster from "@/models/ParentMaster";
// import { success, error } from "@/lib/response";
// import bcrypt from "bcrypt";
// import crypto from "crypto"; // <<< ADDED
// import { sendWelcomeEmail } from "@/lib/email";
// import { generateParentUID } from "@/lib/utils";
// import mongoose from "mongoose";
// import { verifyAccessToken } from "@/lib/jwt";

// export const runtime = "nodejs";
// const SALT_ROUNDS = 10;

// export async function POST(req: Request) {
//   try {
//     await connectMongo();

//     // Admin auth: Expect Authorization: Bearer <token>
//     // const auth = req.headers.get("authorization") || "";
//     // if (!auth.startsWith("Bearer ")) {
//     //   return error("Unauthorized.", {}, 401);
//     // }
//     // const token = auth.split(" ")[1];

// const cookieHeader = req.headers.get("cookie") || "";
// let tokenFromCookie = "";
// if (cookieHeader) {
//   const cookies = Object.fromEntries(cookieHeader.split(';').map(s => s.trim().split('=')));
//   tokenFromCookie = cookies['accessToken'] || cookies['access_token'] || cookies['jwt'] || "";
// }
// const authHeader = req.headers.get("authorization") || (tokenFromCookie ? `Bearer ${tokenFromCookie}` : "");
// // then use authHeader same as before:
// if (!authHeader.startsWith("Bearer ")) {
//   return error("Unauthorized.", {}, 401);
// }
// const token = authHeader.split(" ")[1];


//     let payload: any = null;
//     try {
//       payload = await verifyAccessToken(token);
//     } catch (e) {
//       return error("Invalid token.", {}, 401);
//     }
//     if (!payload || payload.role !== "admin") {
//       return error("Forbidden. Admins only.", {}, 403);
//     }

//     const body = await req.json();

//     // fields same as public
//     const first_name = (body.first_name || "").toString().trim();
//     const middle_name = (body.middle_name || "").toString().trim();
//     const last_name = (body.last_name || "").toString().trim();
//     const email = body.email ? body.email.toString().trim().toLowerCase() : "";
//     const phone = (body.phone || "").toString().trim();
//     const aadhaar = body.aadhaar ? body.aadhaar.toString().trim() : "";
//     const passwordRaw = body.password ? body.password.toString() : cryptoRandomPassword();
//     const preferred_language = body.preferred_language || null;
//     const relationship_to_child = body.relationship_to_child || null;
//     const address = body.address || {};
//     const profile_photo = body.profile_photo || null;
//     const consent_whatsapp = !!body.consent_whatsapp;
//     const terms_accepted = !!body.terms_accepted;

//     const v: Record<string, string> = {};
//     if (!first_name || !/^[A-Za-z\- ]{1,80}$/.test(first_name)) v.first_name = "First name required (1-80 letters/hyphen).";
//     if (!last_name || !/^[A-Za-z\- ]{1,80}$/.test(last_name)) v.last_name = "Last name required (1-80 letters/hyphen).";
//     if (!phone) v.phone = "Phone is required.";

//     if (email && !/^\S+@\S+\.\S+$/.test(email)) v.email = "Invalid email format.";
//     if (aadhaar && !/^\d{12}$/.test(aadhaar)) v.aadhaar = "Aadhaar must be 12 digits.";

//     if (Object.keys(v).length) return error("Validation failed.", v, 422);

//     // Uniqueness
//     if (email) {
//       const e = await ParentMaster.findOne({ email }).select("_id").lean();
//       if (e) return error("Email already registered.", { email: "Email already registered" }, 409);
//     }

//     const p = await ParentMaster.findOne({ phone }).select("_id").lean();
//     if (p) return error("Phone already registered.", { phone: "Phone already registered" }, 409);

//     if (aadhaar) {
//       const a = await ParentMaster.findOne({ aadhaar }).select("_id").lean();
//       if (a) return error("Aadhaar already registered.", { aadhaar: "Aadhaar already registered" }, 409);
//     }

//     const hashed = await bcrypt.hash(passwordRaw, SALT_ROUNDS);

//     let parent_uid = generateParentUID();
//     while (await ParentMaster.findOne({ parent_uid }).select("_id").lean()) {
//       parent_uid = generateParentUID();
//     }

//     const doc = await ParentMaster.create({
//       parent_uid,
//       first_name,
//       middle_name,
//       last_name,
//       email: email || undefined,
//       phone,
//       aadhaar: aadhaar || undefined,
//       password: hashed,
//       preferred_language: mongoose.Types.ObjectId.isValid(preferred_language) ? preferred_language : undefined,
//       relationship_to_child: mongoose.Types.ObjectId.isValid(relationship_to_child) ? relationship_to_child : undefined,
//       address: address || {},
//       profile_photo: profile_photo || undefined,
//       consent_whatsapp,
//       consent_whatsapp_ts: consent_whatsapp ? new Date() : null,
//       terms_accepted,
//       terms_accepted_at: terms_accepted ? new Date() : null,
//       created_by: "admin",
//     });

//     try {
//       await sendWelcomeEmail({
//         to: email || undefined,
//         name: `${first_name} ${last_name}`,
//         uid: parent_uid,
//         password: passwordRaw,
//         createdBy: "admin",
//       });
//     } catch (mailErr) {
//       console.error("sendWelcomeEmail admin create error:", mailErr);
//     }

//     const out = doc.toObject();
//     delete (out as any).password;

//     return success("Parent created by admin.", out);
//   } catch (err: any) {
//     console.error("POST /api/admin/create-parent error:", err);
//     return error("Server error.", { server: err.message }, 500);
//   }
// }

// /* helper used above */
// function cryptoRandomPassword(length = 10) {
//   return crypto.randomBytes(Math.ceil(length * 0.75)).toString("base64").slice(0, length);
// }

// export async function GET() {
//   await connectMongo();
//   const parents = await ParentMaster.find().sort({ createdAt: -1 }).lean();
//   return success("Parents list", parents);
// }

// /app/api/admin/create-parent/route.ts
import { connectMongo } from "@/lib/mongoose";
import ParentMaster from "@/models/ParentMaster";
import { success, error } from "@/lib/response";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { sendWelcomeEmail } from "@/lib/email";
import { generateParentUID } from "@/lib/utils";
import mongoose from "mongoose";
import { verifyAccessToken } from "@/lib/jwt";
import ParentAuditLog from "@/models/ParentAuditLog";

export const runtime = "nodejs";
const SALT_ROUNDS = 10;

/* ================= helpers ================= */

function parseCookies(cookieHeader: string) {
  return Object.fromEntries(
    cookieHeader.split(";").map(c => {
      const [k, ...v] = c.trim().split("=");
      return [k, decodeURIComponent(v.join("="))];
    })
  );
}

function cryptoRandomPassword(length = 10) {
  return crypto
    .randomBytes(Math.ceil(length * 0.75))
    .toString("base64")
    .slice(0, length);
}

/* ================= POST ================= */

export async function POST(req: Request) {
  try {
    await connectMongo();

    /* ---------- AUTH ---------- */
    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = cookieHeader ? parseCookies(cookieHeader) : {};

    const authHeader =
      req.headers.get("authorization") ||
      (cookies.accessToken || cookies.access_token || cookies.jwt
        ? `Bearer ${cookies.accessToken || cookies.access_token || cookies.jwt}`
        : "");

    if (!authHeader.startsWith("Bearer ")) {
      return error("Unauthorized.", {}, 401);
    }

    let payload: any;
    try {
      payload = await verifyAccessToken(authHeader.split(" ")[1]);
    } catch {
      return error("Invalid token.", {}, 401);
    }

    if (payload?.role !== "admin") {
      return error("Forbidden. Admins only.", {}, 403);
    }

    /* ---------- BODY ---------- */
    const body = await req.json();

    const first_name = String(body.first_name || "").trim();
    const middle_name = String(body.middle_name || "").trim();
    const last_name = String(body.last_name || "").trim();
    const email = body.email ? String(body.email).trim().toLowerCase() : "";
    const phone = String(body.phone || "").replace(/\D/g, "");
    const aadhaar = body.aadhaar ? String(body.aadhaar).trim() : "";
    const passwordRaw = body.password ? String(body.password) : cryptoRandomPassword();

    const preferred_language = body.preferred_language;
    const relationship_to_child = body.relationship_to_child;

    const consent_whatsapp = !!body.consent_whatsapp;
    const terms_accepted = !!body.terms_accepted;

    /* ---------- VALIDATION ---------- */
    const v: Record<string, string> = {};

    if (!first_name || !/^[A-Za-z\- ]{1,80}$/.test(first_name))
      v.first_name = "First name required (1–80 letters).";

    if (!last_name || !/^[A-Za-z\- ]{1,80}$/.test(last_name))
      v.last_name = "Last name required (1–80 letters).";

    if (!phone) v.phone = "Phone is required.";

    if (email && !/^\S+@\S+\.\S+$/.test(email))
      v.email = "Invalid email format.";

    if (aadhaar && !/^\d{12}$/.test(aadhaar))
      v.aadhaar = "Aadhaar must be 12 digits.";

    if (Object.keys(v).length) {
      return error("Validation failed.", v, 422);
    }

    /* ---------- UNIQUENESS ---------- */
    if (email && (await ParentMaster.findOne({ email }).lean()))
      return error("Email already registered.", { email }, 409);

    if (await ParentMaster.findOne({ phone }).lean())
      return error("Phone already registered.", { phone }, 409);

    if (aadhaar && (await ParentMaster.findOne({ aadhaar }).lean()))
      return error("Aadhaar already registered.", { aadhaar }, 409);

    /* ---------- ADDRESS (SANITIZED) ---------- */
    const address = {
      line1: body.address?.line1,
      line2: body.address?.line2,
      city: body.address?.city,
      pincode: body.address?.pincode,
      country: mongoose.Types.ObjectId.isValid(body.address?.country)
        ? body.address.country
        : undefined,
      state: mongoose.Types.ObjectId.isValid(body.address?.state)
        ? body.address.state
        : undefined,
      district: mongoose.Types.ObjectId.isValid(body.address?.district)
        ? body.address.district
        : undefined,
    };

    /* ---------- CREATE ---------- */
    const hashed = await bcrypt.hash(passwordRaw, SALT_ROUNDS);

    let parent_uid = generateParentUID();
    while (await ParentMaster.findOne({ parent_uid }).lean()) {
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
      preferred_language: mongoose.Types.ObjectId.isValid(preferred_language)
        ? preferred_language
        : undefined,
      relationship_to_child: mongoose.Types.ObjectId.isValid(relationship_to_child)
        ? relationship_to_child
        : undefined,
      address,
      consent_whatsapp,
      consent_whatsapp_ts: consent_whatsapp ? new Date() : null,
      terms_accepted,
      terms_accepted_at: terms_accepted ? new Date() : null,
      created_by: "admin",
    });
   
    await ParentAuditLog.create({
  parent_id: doc._id,
  action: "CREATE",
  changes: {},
  actor_id: payload.sub,
  actor_role: "admin",
  ip: req.headers.get("x-forwarded-for") || "",
});

    /* ---------- EMAIL ---------- */
    if (email) {
      try {
        await sendWelcomeEmail({
          to: email,
          name: `${first_name} ${last_name}`,
          uid: parent_uid,
          password: passwordRaw,
          createdBy: "admin",
        });
      } catch (e) {
        console.error("sendWelcomeEmail error:", e);
      }
    }

    const out = doc.toObject();
    delete (out as any).password;

    return success("Parent created by admin.", out);
  } catch (err: any) {
    if (err?.code === 11000) {
      return error("Duplicate entry.", err.keyValue || {}, 409);
    }

    console.error("POST /api/admin/create-parent error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

/* ================= GET ================= */

export async function GET() {
  await connectMongo();
  const parents = await ParentMaster.find()
    .select("-password")
    .sort({ createdAt: -1 })
    .lean();

  return success("Parents list", parents);
}
