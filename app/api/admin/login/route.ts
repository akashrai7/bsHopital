// // /app/api/admin/login/route.ts

// import { connectMongo } from "@/lib/mongoose";
// import Admin from "@/models/Admin";
// import bcrypt from "bcrypt";
// import { signAccessToken, signRefreshToken } from "@/lib/jwt";
// import { success, error } from "@/lib/response";

// export const runtime = "nodejs"; // required for bcrypt & cookies

// export async function POST(req: Request) {
//   try {
//     await connectMongo();

//     const body = await req.json();
//     const { email, password } = body;

//     // 1) Basic validation
//     const validationErrors: Record<string, string> = {};

//     if (!email) validationErrors.email = "Email is required.";
//     if (!password) validationErrors.password = "Password is required.";

//     if (Object.keys(validationErrors).length > 0) {
//       return error("Validation failed.", validationErrors, 422);
//     }

//     // 2) Find admin
//     const admin = await Admin.findOne({ email: email.toLowerCase() });

//     if (!admin) {
//       return error("Invalid credentials.", {
//         auth: "Invalid email or password.",
//       }, 401);
//     }

//     // 3) Compare password
//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) {
//       return error("Invalid credentials.", {
//         auth: "Invalid email or password.",
//       }, 401);
//     }

//     // 4) Create JWTs
//     const accessToken = signAccessToken({ id: admin._id, role: "admin" });
//     const refreshToken = signRefreshToken({ id: admin._id, role: "admin" });

//     // 5) Set refresh token as secure HttpOnly cookie
//     const cookieParts = [
//       `refreshToken=${refreshToken}`,
//       `HttpOnly`,
//       `Path=/`,
//       `SameSite=Strict`,
//       `Max-Age=${7 * 24 * 60 * 60}` // 7 days
//     ];

//     if (process.env.NODE_ENV === "production") {
//       cookieParts.push("Secure");
//     }

//     const headers = new Headers({
//       "Content-Type": "application/json",
//       "Set-Cookie": cookieParts.join("; ")
//     });

//     // 6) Final success response
//     return new Response(
//       JSON.stringify({
//         status: true,
//         message: "Login successful.",
//         data: {
//           accessToken,
//           admin: {
//             id: admin._id,
//             first_name: admin.first_name,
//             last_name: admin.last_name,
//             email: admin.email,
//             phone: admin.phone,
//             photo: admin.photo
//           }
//         }
//       }),
//       { status: 200, headers }
//     );

//   } catch (err: any) {
//     console.error("Login API Error:", err);
//     return error("Server error.", { server: err.message }, 500);
//   }
// }

// /app/api/admin/login/route.ts
/*
import { connectMongo } from "@/lib/mongoose";
import Admin from "@/models/Admin";
import bcrypt from "bcrypt";
import { signAccessToken, signRefreshToken } from "@/lib/jwt";
import { success, error } from "@/lib/response";

export const runtime = "nodejs"; // required for bcrypt & cookies

export async function POST(req: Request) {
  try {
    await connectMongo();

    const body = await req.json();
    const { email, password } = body;

    // 1) Basic validation
    const validationErrors: Record<string, string> = {};

    if (!email) validationErrors.email = "Email is required.";
    if (!password) validationErrors.password = "Password is required.";

    if (Object.keys(validationErrors).length > 0) {
      return error("Validation failed.", validationErrors, 422);
    }

    // 2) Find admin
    const admin = await Admin.findOne({ email: email.toLowerCase() });

    if (!admin) {
      return error(
        "Invalid credentials.",
        {
          auth: "Invalid email or password.",
        },
        401
      );
    }

    // 3) Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return error(
        "Invalid credentials.",
        {
          auth: "Invalid email or password.",
        },
        401
      );
    }

    // 4) Create JWTs
    const accessToken = signAccessToken({ id: admin._id, role: "admin" });
    const refreshToken = signRefreshToken({ id: admin._id, role: "admin" });

    // 5) Build cookie strings for refresh and access tokens
    const baseCookieOptions = ["HttpOnly", "Path=/", "SameSite=Strict"];
    const refreshCookieParts = [
      `refreshToken=${refreshToken}`,
      ...baseCookieOptions,
      `Max-Age=${7 * 24 * 60 * 60}`, // 7 days
    ];
    const accessCookieParts = [
      `accessToken=${accessToken}`,
      ...baseCookieOptions,
      `Max-Age=${15 * 60}`, // 15 minutes
    ];

    if (process.env.NODE_ENV === "production") {
      refreshCookieParts.push("Secure");
      accessCookieParts.push("Secure");
    }

    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    // Append two Set-Cookie headers (one for refresh, one for access)
    headers.append("Set-Cookie", refreshCookieParts.join("; "));
    headers.append("Set-Cookie", accessCookieParts.join("; "));

    // 6) Final success response (do NOT include raw tokens in data if you prefer more secure)
    return new Response(
      JSON.stringify({
        status: true,
        message: "Login successful.",
        data: {
          // We keep admin info in response; access token is also set as cookie
          admin: {
            id: admin._id,
            first_name: admin.first_name,
            last_name: admin.last_name,
            email: admin.email,
            phone: admin.phone,
            photo: admin.photo,
          },
        },
      }),
      { status: 200, headers }
    );
  } catch (err: any) {
    console.error("Login API Error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}
*/

// /app/api/admin/login/route.ts
import { connectMongo } from "@/lib/mongoose";
import Admin from "@/models/Admin";
import bcrypt from "bcrypt";
import { signAccessToken } from "@/lib/jwt";
import { success, error } from "@/lib/response";
import { createRefreshTokenForUser } from "@/lib/refreshToken";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    await connectMongo();

    const body = await req.json();
    const { email, password } = body;

    // basic validation omitted for brevity (keep as earlier)

    const admin = await Admin.findOne({ email: email.toLowerCase() });
    if (!admin) return error("Invalid credentials.", { auth: "Invalid email or password." }, 401);

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return error("Invalid credentials.", { auth: "Invalid email or password." }, 401);

    const accessToken = signAccessToken({ id: admin._id, role: "admin" });

    // Create refresh token record in DB
    const ip = (req as any).headers?.get?.("x-forwarded-for") || "";
    const userAgent = (req as any).headers?.get?.("user-agent") || "";
    const { raw: refreshRaw, expiresAt } = await createRefreshTokenForUser(admin._id, { ip, userAgent });

    // Build cookies
    const baseOptions = ["HttpOnly", "Path=/", "SameSite=Strict"];
    const refreshParts = [`refreshToken=${refreshRaw}`, ...baseOptions, `Max-Age=${7 * 24 * 60 * 60}`];
    const accessParts = [`accessToken=${accessToken}`, ...baseOptions, `Max-Age=${15 * 60}`];

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
      message: "Login successful.",
      data: {
        admin: {
          id: admin._id,
          first_name: admin.first_name,
          email: admin.email
        }
      }
    }), { status: 200, headers });
  } catch (err: any) {
    console.error("Login error:", err);
    return error("Server error.", { server: err.message }, 500);
  }
}
