import { NextResponse } from "next/server"
import MercadoPago from "mercadopago"
import { signAccess } from "@/lib/accessToken"

const client = new MercadoPago({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

export async function POST(req: Request) {
  const body = await req.json()

  if (body.type !== "payment") {
    return NextResponse.json({ ok: true })
  }

  const paymentId = body.data.id

  const payment = await client.payment.get(paymentId)

  if (payment.status !== "approved") {
    return NextResponse.json({ ok: true })
  }

  const expiresAt = Date.now() + 24 * 60 * 60 * 1000
  const token = signAccess(expiresAt)

  const response = NextResponse.json({ ok: true })

  response.cookies.set("viajajusto_access", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  })

  return response
}
