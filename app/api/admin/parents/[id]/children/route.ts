// /app/api/admin/parents/[id]/children/route.ts

import { connectMongo } from "@/lib/mongoose";
import ChildMaster from "@/models/ChildMaster";
import { success, error } from "@/lib/response";
import { verifyAccessToken } from "@/lib/jwt";
import mongoose from "mongoose";

export const runtime = "nodejs";

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
  const token =
    cookies.accessToken || cookies.access_token || cookies.jwt || "";

  return token ? `Bearer ${token}` : "";
}

async function requireAdmin(req: Request) {
  const auth = getAuthHeader(req);
  if (!auth.startsWith("Bearer ")) {
    throw { status: 401, message: "Unauthorized" };
  }

  const payload: any = await verifyAccessToken(auth.split(" ")[1]);
  if (!payload || payload.role !== "admin") {
    throw { status: 403, message: "Admins only" };
  }

  return payload;
}

/* ================= GET ================= */

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectMongo();
    await requireAdmin(req);

    const { id } = await context.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return error("Invalid parent ID", {}, 400);
    }

    const children = await ChildMaster.find({
      parent_ids: id,
    })
      .sort({ createdAt: -1 })
      .select("child_id full_name dob gender_code photo")
      .lean();

    return success("Children fetched", children);
  } catch (err: any) {
    console.error("GET /parents/[id]/children error:", err);
    return error(err.message || "Server error", {}, err.status || 500);
  }
}
