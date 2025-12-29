// // /app/api/admin/parents/[id]/route.ts
// import { connectMongo } from "@/lib/mongoose";
// import ParentMaster from "@/models/ParentMaster";
// import { success, error } from "@/lib/response";
// import bcrypt from "bcrypt";
// import mongoose from "mongoose";
// import { verifyAccessToken } from "@/lib/jwt";

// export const runtime = "nodejs";
// const SALT_ROUNDS = 10;

// /* helper to read auth token either from header or cookie (cookie fallback) */
// function getAuthHeaderFromRequest(req: Request) {
//   const headerAuth = req.headers.get("authorization") || "";
//   if (headerAuth && headerAuth.startsWith("Bearer ")) return headerAuth;

//   const cookieHeader = req.headers.get("cookie") || "";
//   if (cookieHeader) {
//     const cookies = Object.fromEntries(
//       cookieHeader.split(";").map((s) => {
//         const [k, ...rest] = s.trim().split("=");
//         return [k, rest.join("=")];
//       })
//     );
//     const tokenFromCookie = cookies["accessToken"] || cookies["access_token"] || cookies["jwt"] || "";
//     if (tokenFromCookie) return `Bearer ${tokenFromCookie}`;
//   }
//   return "";
// }

// /* require admin guard, throws structured error on failure */
// async function requireAdmin(req: Request) {
//   const auth = getAuthHeaderFromRequest(req);
//   if (!auth.startsWith("Bearer ")) {
//     throw { status: 401, message: "Unauthorized." };
//   }
//   const token = auth.split(" ")[1];
//   try {
//     const payload: any = await verifyAccessToken(token);
//     if (!payload || payload.role !== "admin") {
//       throw { status: 403, message: "Forbidden. Admins only." };
//     }
//     return payload;
//   } catch (err: any) {
//     throw { status: 401, message: "Invalid token." };
//   }
// }

// /**
//  * GET: fetch single parent by id
//  * Note: context.params may be a Promise in newer Next versions — await it.
//  */
// export async function GET(req: Request, context: { params: any }) {
//   try {
//     await connectMongo();

//     // unwrap params (context.params may be a Promise)
//     const params = await context.params;
//     const id = params?.id;
//     if (!id || !mongoose.Types.ObjectId.isValid(id)) {
//       return error("Invalid ID.", {}, 400);
//     }

//     // optional: enforce admin-only to view (keep consistent)
//     const auth = getAuthHeaderFromRequest(req);
//     if (!auth.startsWith("Bearer ")) {
//       return error("Unauthorized.", {}, 401);
//     }
//     try {
//       const token = auth.split(" ")[1];
//       const payload: any = await verifyAccessToken(token);
//       if (!payload || payload.role !== "admin") {
//         return error("Forbidden. Admins only.", {}, 403);
//       }
//     } catch (e) {
//       return error("Invalid token.", {}, 401);
//     }

//     const doc = await ParentMaster.findById(id)
//       .populate("preferred_language", "name code")
//       .populate("relationship_to_child", "name code")
//       .populate("address.country", "name code")
//       .populate("address.state", "name code")
//       .populate("address.district", "name code")
//       .lean();

//     if (!doc) return error("Not found.", {}, 404);

//     if ((doc as any).password) delete (doc as any).password;

//     return success("Parent fetched.", doc);
//   } catch (err: any) {
//     console.error("GET /api/admin/parents/[id] error:", err);
//     return error("Server error.", { server: err.message || String(err) }, err.status || 500);
//   }
// }

// /**
//  * PUT: update parent (admin only)
//  */
// export async function PUT(req: Request, context: { params: any }) {
//   try {
//     await connectMongo();

//     const params = await context.params;
//     const id = params?.id;
//     if (!id || !mongoose.Types.ObjectId.isValid(id)) {
//       return error("Invalid ID.", {}, 400);
//     }

//     // require admin
//     try {
//       await requireAdmin(req);
//     } catch (authErr: any) {
//       return error(authErr.message || "Unauthorized.", {}, authErr.status || 401);
//     }

//     const body = await req.json();

//     const updates: any = {};
//     if (typeof body.first_name === "string") updates.first_name = body.first_name.trim();
//     if (typeof body.middle_name === "string") updates.middle_name = body.middle_name.trim();
//     if (typeof body.last_name === "string") updates.last_name = body.last_name.trim();
//     if (typeof body.email === "string") updates.email = body.email.trim().toLowerCase() || undefined;
//     if (typeof body.phone === "string") updates.phone = body.phone.trim();
//     if (typeof body.aadhaar === "string") updates.aadhaar = body.aadhaar.trim() || undefined;
//     if (typeof body.preferred_language === "string" && mongoose.Types.ObjectId.isValid(body.preferred_language)) updates.preferred_language = body.preferred_language;
//     if (typeof body.relationship_to_child === "string" && mongoose.Types.ObjectId.isValid(body.relationship_to_child)) updates.relationship_to_child = body.relationship_to_child;
//     if (body.address && typeof body.address === "object") updates.address = body.address;
//     if (typeof body.national_id === "string") updates.national_id = body.national_id || undefined;
//     if (typeof body.profile_photo === "string") updates.profile_photo = body.profile_photo || undefined;
//     if (typeof body.consent_whatsapp === "boolean") {
//       updates.consent_whatsapp = body.consent_whatsapp;
//       updates.consent_whatsapp_ts = body.consent_whatsapp ? new Date() : null;
//     }
//     if (typeof body.terms_accepted === "boolean") {
//       updates.terms_accepted = body.terms_accepted;
//       updates.terms_accepted_at = body.terms_accepted ? new Date() : null;
//     }
//     if (typeof body.admin_notes === "string") updates.admin_notes = body.admin_notes;
//     if (typeof body.is_active === "boolean") updates.is_active = body.is_active;

//     if (body.password && typeof body.password === "string" && body.password.trim().length) {
//       const hashed = await bcrypt.hash(body.password, SALT_ROUNDS);
//       updates.password = hashed;
//     }

//     const v: Record<string, string> = {};
//     if (updates.email && !/^\S+@\S+\.\S+$/.test(updates.email)) v.email = "Invalid email format.";
//     if (updates.aadhaar && !/^\d{12}$/.test(updates.aadhaar)) v.aadhaar = "Aadhaar must be 12 digits.";
//     if (updates.phone && !/^\+?[0-9]{7,15}$/.test(updates.phone)) v.phone = "Invalid phone format.";

//     if (Object.keys(v).length) return error("Validation failed.", v, 422);

//     // uniqueness checks
//     if (updates.email) {
//       const ex = await ParentMaster.findOne({ email: updates.email, _id: { $ne: id } }).select("_id").lean();
//       if (ex) return error("Email already in use.", { email: "Email already registered" }, 409);
//     }
//     if (updates.phone) {
//       const ex = await ParentMaster.findOne({ phone: updates.phone, _id: { $ne: id } }).select("_id").lean();
//       if (ex) return error("Phone already in use.", { phone: "Phone already registered" }, 409);
//     }
//     if (updates.aadhaar) {
//       const ex = await ParentMaster.findOne({ aadhaar: updates.aadhaar, _id: { $ne: id } }).select("_id").lean();
//       if (ex) return error("Aadhaar already in use.", { aadhaar: "Aadhaar already registered" }, 409);
//     }

//     updates.updated_at = new Date();
//     updates.updated_by = "admin";

//     const doc = await ParentMaster.findByIdAndUpdate(id, { $set: updates }, { new: true })
//       .populate("preferred_language", "name code")
//       .populate("relationship_to_child", "name code")
//       .populate("address.country", "name code")
//       .populate("address.state", "name code")
//       .populate("address.district", "name code")
//       .lean();

//     if (!doc) return error("Not found.", {}, 404);
//     if ((doc as any).password) delete (doc as any).password;

//     return success("Parent updated.", doc);
//   } catch (err: any) {
//     console.error("PUT /api/admin/parents/[id] error:", err);
//     return error("Server error.", { server: err.message || String(err) }, err.status || 500);
//   }
// }

// /**
//  * DELETE: remove parent (admin only)
//  */
// export async function DELETE(req: Request, context: { params: any }) {
//   try {
//     await connectMongo();

//     const params = await context.params;
//     const id = params?.id;
//     if (!id || !mongoose.Types.ObjectId.isValid(id)) {
//       return error("Invalid ID.", {}, 400);
//     }

//     try {
//       await requireAdmin(req);
//     } catch (authErr: any) {
//       return error(authErr.message || "Unauthorized.", {}, authErr.status || 401);
//     }

//     const doc = await ParentMaster.findByIdAndDelete(id).lean();
//     if (!doc) return error("Not found.", {}, 404);
//     if ((doc as any).password) delete (doc as any).password;

//     return success("Parent deleted.", doc);
//   } catch (err: any) {
//     console.error("DELETE /api/admin/parents/[id] error:", err);
//     return error("Server error.", { server: err.message || String(err) }, err.status || 500);
//   }
// }

// /app/api/admin/parents/[id]/route.ts
import { connectMongo } from "@/lib/mongoose";
import ParentMaster from "@/models/ParentMaster";
import ParentAuditLog from "@/models/ParentAuditLog";
import { success, error } from "@/lib/response";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { verifyAccessToken } from "@/lib/jwt";
import { diffChanges } from "@/lib/parentAudit";

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
