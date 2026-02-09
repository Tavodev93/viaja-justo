export const runtime = "nodejs"

import { NextResponse } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"
import { signAccess } from "@/lib/accessToken"

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (body.type !== "payment") {
      return NextResponse.json({ ok: true })
    }

    const paymentId = body.data.id

    const payment = new Payment(client)
    const result = await payment.get({ id: paymentId })

    if (result.status !== "approved") {
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
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ ok: true })
  }
}
