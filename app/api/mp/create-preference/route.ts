import { NextResponse } from "next/server"
import { MercadoPagoConfig, Preference } from "mercadopago"

export const runtime = "nodejs"

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

export async function POST() {
  try {
    const preference = new Preference(client)

    const result = await preference.create({
      body: {
        items: [
          {
            title: "Acceso completo Viaja Justo (24 horas)",
            quantity: 1,
            unit_price: 5000,
            currency_id: "COP",
            id: ""
          },
        ],
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_BASE_URL}/cartagena`,
          failure: `${process.env.NEXT_PUBLIC_BASE_URL}/paywall?error=payment`,
        },
        auto_return: "approved",
      },
    })

    return NextResponse.json({
      init_point: result.init_point,
    })
  } catch (error) {
    console.error("MercadoPago error:", error)
    return NextResponse.json(
      { error: "Error creando preferencia" },
      { status: 500 }
    )
  }
}
