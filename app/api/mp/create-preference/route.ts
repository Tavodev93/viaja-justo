import { NextResponse } from "next/server"
import MercadoPago from "mercadopago"

const client = new MercadoPago({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

export async function POST() {
  try {
    const preference = await client.preferences.create({
      items: [
        {
          title: "Acceso completo Viaja Justo (24 horas)",
          quantity: 1,
          unit_price: 5000,
          currency_id: "COP",
        },
      ],
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_BASE_URL}/api/access/grant`,
        failure: `${process.env.NEXT_PUBLIC_BASE_URL}/paywall?error=payment`,
      },
      auto_return: "approved",
    })

    return NextResponse.json({ init_point: preference.init_point })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Error creando preferencia" },
      { status: 500 }
    )
  }
}
