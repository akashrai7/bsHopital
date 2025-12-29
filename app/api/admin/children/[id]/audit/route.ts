import { connectMongo } from "@/lib/mongoose";
import { success, error } from "@/lib/response";
import { verifyAccessToken } from "@/lib/jwt";
import ChildAuditLog from "@/models/ChildAuditLog";
import mongoose from "mongoose";

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
  return verifyAccessToken(token);
}

/* ================= GET AUDIT LOGS ================= */

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectMongo();
    await requireAuth(req);

    const { id } = await context.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return error("Invalid child id", {}, 400);

    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 10);

    const [logs, total] = await Promise.all([
      ChildAuditLog.find({ child_id: id })
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),

      ChildAuditLog.countDocuments({ child_id: id }),
    ]);

    return success("Audit history", {
      data: logs,
      page,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (e: any) {
    return error(e.message || "Server error", {}, e.status || 500);
  }
}
