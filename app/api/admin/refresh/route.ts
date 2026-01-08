// /app/api/admin/refresh/route.ts
/*
import { NextRequest } from "next/server";
import { verifyRefreshToken, signAccessToken, signRefreshToken } from "@/lib/jwt";
import { connectMongo } from "@/lib/mongoose";
import Admin from "@/models/Admin";
import { error, success } from "@/lib/response";

export const runtime = "nodejs";

function parseCookies(cookieHeader: string | null) {
  const obj: Record<string, string> = {};
  if (!cookieHeader) return obj;
  cookieHeader.split(";").forEach((c) => {
    const [name, ...v] = c.trim().split("=");
    obj[name] = decodeURIComponent(v.join("="));
  });
  return obj;
}

export async function GET(req: Request) {
  try {
    // parse cookie
    const cookieHeader = req.headers.get("cookie");
    const cookies = parseCookies(cookieHeader);
    const refreshToken = cookies["refreshToken"];

    if (!refreshToken) {
      return error("No refresh token provided.", { auth: "No refresh token" }, 401);
    }

    // verify refresh token
    const payload: any = verifyRefreshToken(refreshToken);
    if (!payload) {
      return error("Invalid refresh token.", { auth: "Invalid refresh token" }, 401);
    }

    // optional: ensure user still exists
    await connectMongo();
    const admin = await Admin.findById(payload.id).select("+password");
    if (!admin) {
      return error("User not found.", { auth: "User not found" }, 401);
    }

    // issue new tokens (rotate refresh token)
    const newAccess = signAccessToken({ id: admin._id, role: "admin" });
    const newRefresh = signRefreshToken({ id: admin._id, role: "admin" });

    // set refresh cookie (HttpOnly)
    const cookieParts = [
      `refreshToken=${newRefresh}`,
      `HttpOnly`,
      `Path=/`,
      `SameSite=Strict`,
      `Max-Age=${7 * 24 * 60 * 60}`
    ];
    if (process.env.NODE_ENV === "production") cookieParts.push("Secure");

    const headers = new Headers({
      "Content-Type": "application/json",
      "Set-Cookie": cookieParts.join("; ")
    });

    return new Response(JSON.stringify({
      status: true,
      message: "Tokens refreshed.",
      data: { accessToken: newAccess }
    }), { status: 200, headers });

  } catch (err: any) {
    console.error("Refresh token error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

*/

// /app/api/admin/refresh/route.ts
import { connectMongo } from "@/lib/mongoose";
import Admin from "@/models/Admin";
import { verifyRefreshToken as verifyJwtRefresh, signAccessToken } from "@/lib/jwt";
import { findValidRefreshTokenByRaw, createRefreshTokenForUser, revokeRefreshToken } from "@/lib/refreshToken";
import { error, success } from "@/lib/response";

export const runtime = "nodejs";

function parseCookies(cookieHeader: string | null) {
  const obj: Record<string, string> = {};
  if (!cookieHeader) return obj;
  cookieHeader.split(";").forEach((c)=> {
    const [name, ...v] = c.trim().split("=");
    obj[name] = decodeURIComponent(v.join("="));
  });
  return obj;
}

export async function GET(req: Request) {
  try {
    await connectMongo();

    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = parseCookies(cookieHeader);
    const rawRefresh = cookies["refreshToken"];
    if (!rawRefresh) {
      return error("No refresh token provided.", { auth: "No refresh token" }, 401);
    }

    // find DB token and ensure valid(not revoked/expired)
    const tokenDoc: any = await findValidRefreshTokenByRaw(rawRefresh);
    if (!tokenDoc) {
      return error("Invalid or revoked refresh token.", { auth: "Invalid refresh token" }, 401);
    }

    // rotate: create new refresh token for this user
    const userId = tokenDoc.user._id;
    const { raw: newRaw, expiresAt } = await createRefreshTokenForUser(userId, {
      ip: req.headers.get("x-forwarded-for") || "",
      userAgent: req.headers.get("user-agent") || ""
    });

    // revoke old token and mark replacedBy = new token id
    // await revokeRefreshToken(tokenDoc._id, /* replacedByTokenId */ null); // we can store replacedBy tokenId if needed

    // create new access token
    const newAccess = signAccessToken({ id: userId, role: "admin" });

    // set new cookies
    const baseOptions = ["HttpOnly", "Path=/", "SameSite=Lax"];
    const refreshParts = [`refreshToken=${newRaw}`, ...baseOptions, `Max-Age=${7 * 24 * 60 * 60}`];
    const accessParts = [`accessToken=${newAccess}`, ...baseOptions, `Max-Age=${15 * 60}`];
    
    if (process.env.NODE_ENV === "production") {
      refreshParts.push("Secure");
      accessParts.push("Secure");
    }

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.append("Set-Cookie", refreshParts.join("; "));
    headers.append("Set-Cookie", accessParts.join("; "));

    return new Response(JSON.stringify({
      status: true,
      message: "Tokens refreshed.",
      data: { accessToken: newAccess }
    }), { status: 200, headers });
  } catch (err: any) {
    console.error("Refresh error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}
