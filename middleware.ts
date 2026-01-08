// // middleware.ts
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(req: NextRequest) {

//   const url = req.nextUrl.clone();
//   const { pathname } = req.nextUrl;

//   // paths to protect — change as needed
//   const protectedPaths = ["/dashboards", "/admin", "/settings"];

//   const matches = protectedPaths.some((p) => pathname.startsWith(p));
//   if (!matches) return NextResponse.next();

//   try {
//     // Build absolute URL for internal verify route
//     const verifyUrl = new URL("/api/admin/verify", req.url);

//     // Forward authentication headers and cookies to the verify endpoint
//     const headers: Record<string, string> = {
//       authorization: req.headers.get("authorization") || "",
//       cookie: req.headers.get("cookie") || "",
//     };

//     const res = await fetch(verifyUrl.toString(), {
//       method: "GET",
//       headers,
//       // keep default caching/fetch options
//     });

//     if (res.ok) {
//       // Token verified; allow request
//       return NextResponse.next();
//     } else {
//       // Not authorized — redirect to sign-in with original path as `from`
//       url.pathname = "/authentication/sign-in/cover";
//       url.search = `from=${encodeURIComponent(pathname)}`;
//       return NextResponse.redirect(url);
//     }
//   } catch (err) {
//     // On unexpected error, redirect to sign-in (fail closed)
//     url.pathname = "/authentication/sign-in/cover";
//     url.search = `from=${encodeURIComponent(pathname)}`;
//     return NextResponse.redirect(url);
//   }
// }

// export const config = {
//   matcher: ["/dashboards/:path*", "/admin/:path*"],
// };

// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect only these routes
  const protectedPaths = ["/admin", "/dashboards", "/settings"];
  const isProtected = protectedPaths.some((p) => pathname.startsWith(p));

  if (!isProtected) {
    return NextResponse.next();
  }

  // ONLY check presence of accessToken cookie
  const accessToken = req.cookies.get("accessToken")?.value;

  if (!accessToken) {
    const url = req.nextUrl.clone();
    url.pathname = "/authentication/sign-in/cover";
    url.search = `from=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }

  // token exists → allow request
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboards/:path*"],
};



// // proxy.ts
// import { NextRequest, NextResponse } from "next/server";

// export function proxy(req: NextRequest) {
//   const { pathname } = req.nextUrl;

//   // protect only these routes
//   const protectedPaths = ["/admin", "/dashboards", "/settings"];
//   const isProtected = protectedPaths.some((p) =>
//     pathname.startsWith(p)
//   );

//   if (!isProtected) {
//     return NextResponse.next();
//   }

//   // ONLY check token presence
//   const accessToken = req.cookies.get("accessToken")?.value;

//   if (!accessToken) {
//     const url = req.nextUrl.clone();
//     url.pathname = "/authentication/sign-in/cover";
//     url.search = `from=${encodeURIComponent(pathname)}`;
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*", "/dashboards/:path*"],
// };
