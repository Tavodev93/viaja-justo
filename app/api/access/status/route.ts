import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { verifyAccess } from "@/lib/accessToken"

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get("viajajusto_access")

  if (!token) {
    return NextResponse.json({ active: false })
  }

  const expiresAt = verifyAccess(token.value)

  if (!expiresAt) {
    return NextResponse.json({ active: false })
  }

  return NextResponse.json({
    active: true,
    remainingMs: expiresAt - Date.now(),
  })
}
