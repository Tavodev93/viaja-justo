import { NextResponse } from "next/server"

export async function GET() {
  const expiresAt = Date.now() + 24 * 60 * 60 * 1000

  const response = NextResponse.redirect(
    new URL("/precios-comunes-cartagena", process.env.NEXT_PUBLIC_BASE_URL!)
  )

  response.cookies.set("viajajusto_access", expiresAt.toString(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  })

  return response
}
