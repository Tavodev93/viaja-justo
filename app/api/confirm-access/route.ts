import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accessCookie = req.cookies.get("viaja_justo_access");
  const { pathname } = req.nextUrl;

  // Solo protegemos rutas de precios
  if (pathname.startsWith("/precio")) {
    if (!accessCookie) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    try {
      const access = JSON.parse(accessCookie.value);

      // ejemplo: proteger Cartagena
      if (
        pathname.includes("cartagena") &&
        !access.cities.includes("cartagena")
      ) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } catch {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/precio/:path*"],
};
