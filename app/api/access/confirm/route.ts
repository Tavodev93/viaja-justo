import { NextResponse } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"
import { signAccess } from "@/lib/accessToken"

export const runtime = "nodejs"

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const paymentId = searchParams.get("payment_id")

  if (!paymentId) {
    return NextResponse.redirect(
      new URL("/paywall?error=payment", process.env.NEXT_PUBLIC_BASE_URL!)
    )
  }

  const payment = new Payment(client)
  const result = await payment.get({ id: paymentId })

  if (result.status !== "approved") {
    return NextResponse.redirect(
      new URL("/paywall?error=payment", process.env.NEXT_PUBLIC_BASE_URL!)
    )
  }

  const expiresAt = Date.now() + 24 * 60 * 60 * 1000
  const token = signAccess(expiresAt)

  const res = NextResponse.redirect(
    new URL("/cartagena", process.env.NEXT_PUBLIC_BASE_URL!)
  )

  res.cookies.set("viajajusto_access", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  })

  return res
}
