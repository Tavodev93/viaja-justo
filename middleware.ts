import { NextRequest, NextResponse } from "next/server"
import { verifyAccess } from "@/lib/accessToken"

export function middleware(req: NextRequest) {
  const token = req.cookies.get("viajajusto_access")

  if (!token) {
    return NextResponse.redirect(new URL("/paywall", req.url))
  }

  const valid = verifyAccess(token.value)

  if (!valid) {
    const res = NextResponse.redirect(new URL("/paywall?expired=1", req.url))
    res.cookies.delete("viajajusto_access")
    return res
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/cartagena/:path*"],
}
