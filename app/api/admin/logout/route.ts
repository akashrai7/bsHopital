// /app/api/admin/logout/route.ts
/*
import { error, success } from "@/lib/response";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    // clear the refreshToken cookie by setting Max-Age=0
    const cookieParts = [
      `refreshToken=deleted`,
      `HttpOnly`,
      `Path=/`,
      `SameSite=Strict`,
      `Max-Age=0`
    ];
    if (process.env.NODE_ENV === "production") cookieParts.push("Secure");

    const headers = new Headers({
      "Content-Type": "application/json",
      "Set-Cookie": cookieParts.join("; ")
    });

    return new Response(JSON.stringify({
      status: true,
      message: "Logged out."
    }), { status: 200, headers });

  } catch (err: any) {
    console.error("Logout error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}

*/

// /app/api/admin/logout/route.ts
import { connectMongo } from "@/lib/mongoose";
import { findValidRefreshTokenByRaw, revokeRefreshToken } from "@/lib/refreshToken";
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

export async function POST(req: Request) {
  try {
    await connectMongo();
    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = parseCookies(cookieHeader);
    const rawRefresh = cookies["refreshToken"];

    if (rawRefresh) {
      const tokenDoc: any = await findValidRefreshTokenByRaw(rawRefresh);
      if (tokenDoc) {
        await revokeRefreshToken(tokenDoc._id, null);
      }
    }

    // clear cookies
    const cookieParts = [
      `refreshToken=deleted; HttpOnly; Path=/; SameSite=Strict; Max-Age=0`,
      `accessToken=deleted; HttpOnly; Path=/; SameSite=Strict; Max-Age=0`,
    ];
    if (process.env.NODE_ENV === "production") cookieParts.forEach(p => p.concat("; Secure"));

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.append("Set-Cookie", cookieParts[0]);
    headers.append("Set-Cookie", cookieParts[1]);

    return new Response(JSON.stringify({ status: true, message: "Logged out." }), { status: 200, headers });
  } catch (err: any) {
    console.error("Logout error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}
