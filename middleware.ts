// // middleware.ts
// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const url = req.nextUrl.clone();
//   const { pathname } = req.nextUrl;

//   // केवल इनके लिए guard लगाएं — जरूरत अनुसार paths जोड़ें/घटा दें
//   const protectedPaths = ["/dashboards", "/admin"];

//   const matches = protectedPaths.some(p => pathname.startsWith(p));
//   if (!matches) return NextResponse.next();

//   // Check Authorization header
//   const authHeader = req.headers.get("authorization") || "";
//   if (authHeader.startsWith("Bearer ")) {
//     return NextResponse.next();
//   }

//   // Check cookies for common token names: bs_access_token, accessToken, refreshToken
//   const cookieHeader = req.headers.get("cookie") || "";
//   const hasAccessCookie =
//     cookieHeader.includes("bs_access_token=") ||
//     cookieHeader.includes("accessToken=") ||
//     cookieHeader.includes("refreshToken=");

//   if (hasAccessCookie) {
//     return NextResponse.next();
//   }

//   // अगर न मिले तो login पर redirect करें (original path को query में भेज दें)
//   url.pathname = "/authentication/sign-in";
//   url.search = `from=${encodeURIComponent(pathname)}`;
//   return NextResponse.redirect(url);
// }

// // matcher: apply middleware to these path patterns
// export const config = {
//   matcher: ["/dashboards/:path*", "/admin/:path*"]
// };


// middleware.ts (Option B - calls /api/admin/verify)
// middleware.ts
import { NextRequest, NextResponse } from "next/server";

// console.log('🚦 middleware loaded — pathname:', typeof globalThis === 'undefined' ? '' : '');

export async function middleware(req: NextRequest) {

 // console.log('⚡ middleware: incoming path =', req.nextUrl.pathname);
  
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;

  // paths to protect — change as needed
  const protectedPaths = ["/dashboards", "/admin", "/settings"];

  const matches = protectedPaths.some((p) => pathname.startsWith(p));
  if (!matches) return NextResponse.next();

  try {
    // Build absolute URL for internal verify route
    const verifyUrl = new URL("/api/admin/verify", req.url);

    // Forward authentication headers and cookies to the verify endpoint
    const headers: Record<string, string> = {
      authorization: req.headers.get("authorization") || "",
      cookie: req.headers.get("cookie") || "",
    };

    const res = await fetch(verifyUrl.toString(), {
      method: "GET",
      headers,
      // keep default caching/fetch options
    });

    if (res.ok) {
      // Token verified; allow request
      return NextResponse.next();
    } else {
      // Not authorized — redirect to sign-in with original path as `from`
      url.pathname = "/authentication/sign-in/cover";
      url.search = `from=${encodeURIComponent(pathname)}`;
      return NextResponse.redirect(url);
    }
  } catch (err) {
   // console.error("Middleware verify error:", err);
    // On unexpected error, redirect to sign-in (fail closed)
    url.pathname = "/authentication/sign-in/cover";
    url.search = `from=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/dashboards/:path*", "/admin/:path*"],
};
