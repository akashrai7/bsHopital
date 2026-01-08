// // /app/api/admin/verify/route.ts
// import { verifyAccessToken } from "@/lib/jwt";
// import { success, error } from "@/lib/response";

// export const runtime = "nodejs";

// function parseCookies(cookieHeader: string | null) {
//   const obj: Record<string, string> = {};
//   if (!cookieHeader) return obj;
//   cookieHeader.split(";").forEach((c) => {
//     const [name, ...v] = c.trim().split("=");
//     obj[name] = decodeURIComponent(v.join("="));
//   });
//   return obj;
// }

// export async function GET(req: Request) {
//   try {
//     // 1) Try Authorization header first
//     const authHeader = req.headers.get("authorization") || "";
//     let token = "";

//     if (authHeader.startsWith("Bearer ")) {
//       token = authHeader.slice(7);
//     } else {
//       // 2) fallback to cookies (common cookie names)
//       const cookieHeader = req.headers.get("cookie") || "";
//       const cookies = parseCookies(cookieHeader);
//       token = cookies["accessToken"] || cookies["bs_access_token"] || "";
//     }

//     if (!token) {
//       return error("No token provided.", { auth: "No token" }, 401);
//     }

//     const payload = verifyAccessToken(token as string);
//     if (!payload) {
//       return error("Invalid or expired token.", { auth: "Invalid token" }, 401);
//     }

//     // token valid — return payload (don’t include sensitive fields)
//     return success("Token valid.", { payload });
//   } catch (err: any) {
//     console.error("Verify route error:", err);
//     return error("Server error.", { server: err.message }, 500);
//   }
// }


// /app/api/admin/verify/route.ts
import { verifyAccessToken } from "@/lib/jwt";
import { success, error } from "@/lib/response";

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
    // ONLY cookie based (stable)
    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = parseCookies(cookieHeader);
    const token = cookies["accessToken"];

    if (!token) {
      // ❌ logout mat karo
      return error("Access token missing.", { code: "TOKEN_MISSING" }, 401);
    }

    const payload = verifyAccessToken(token);

    if (!payload) {
      // ❌ logout mat karo
      // frontend should call /refresh now
      return error("Access token expired.", { code: "TOKEN_EXPIRED" }, 401);
    }

    return success("Token valid.", {
      user: {
        id: payload.id,
        role: payload.role
      }
    });
  } catch (err: any) {
    console.error("Verify route error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}
