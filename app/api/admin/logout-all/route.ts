// /app/api/admin/logout-all/route.ts
import { connectMongo } from "@/lib/mongoose";
import { revokeAllTokensForUser, findValidRefreshTokenByRaw } from "@/lib/refreshToken";
import { error } from "@/lib/response";

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

export async function POST(req: Request) {
  try {
    await connectMongo();
    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = parseCookies(cookieHeader);
    const rawRefresh = cookies["refreshToken"];
    if (!rawRefresh) return error("No refresh token.", { auth: "No token" }, 401);

    const tokenDoc: any = await findValidRefreshTokenByRaw(rawRefresh);
    if (!tokenDoc) return error("Invalid refresh token.", { auth: "Invalid token" }, 401);

    const userId = tokenDoc.user._id;
    await revokeAllTokensForUser(userId);

    // clear cookies like logout
    const cookieParts = [
      `refreshToken=deleted; HttpOnly; Path=/; SameSite=Strict; Max-Age=0`,
      `accessToken=deleted; HttpOnly; Path=/; SameSite=Strict; Max-Age=0`,
    ];
    if (process.env.NODE_ENV === "production") cookieParts.forEach(p => p.concat("; Secure"));

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.append("Set-Cookie", cookieParts[0]);
    headers.append("Set-Cookie", cookieParts[1]);

    return new Response(JSON.stringify({ status: true, message: "Logged out from all devices." }), { status: 200, headers });
  } catch (err: any) {
    console.error("Logout-all error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}
