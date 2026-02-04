import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Solo proteger rutas de precios
  const isPricePage =
    pathname.startsWith("/precio-comunes") ||
    pathname.startsWith("/precio-playas") ||
    pathname.startsWith("/precio-taxi") ||
    pathname.startsWith("/precio-tours");

  if (!isPricePage) {
    return NextResponse.next();
  }

  const accessCookie = req.cookies.get("viaja_justo_access");

  if (!accessCookie) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    const access = JSON.parse(accessCookie.value);

    if (!access.cities?.includes("cartagena")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } catch {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
