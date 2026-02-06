import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privateRoutes = ["/private", "/dashboard", "/secret"];
const adminRoute = ["/dashboard"];
// This function can be marked `async` if using `await` inside
export async function proxy(req) {
  const token = await getToken({ req });
  const reqPath = req.nextUrl.pathname;
  const isAuthenticated = Boolean(token);
  const isUser = token?.role === "user";
  const isAdmin = token?.role === "admin";

  const isPrivate = privateRoutes.some((route) => reqPath.startsWith(route));
  const isAdminRoute = adminRoute.some((route) => reqPath.startsWith(route));

  // logic for private route
  if (!isAuthenticated && isPrivate) {
    const loginUrl = new URL("/api/auth/signin", req.url);
    loginUrl.searchParams.set("callbackUrl", reqPath);
    return NextResponse.redirect(loginUrl);
  }

  // logic for admin
  if (isAuthenticated && !isAdmin && isAdminRoute) {
    return NextResponse.redirect(new URL("/forbidden", req.url));
  }

  console.log(isAuthenticated, reqPath, isUser, isPrivate);
  //   return NextResponse.redirect(new URL("/home", request.url));
  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  matcher: ["/private:path*", "/dashboard:path*", "/secret:path*"],
};
