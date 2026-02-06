import { NextResponse } from 'next/server'
import MercadoPagoConfig, { Preference } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

const BASE_URL = 'https://viaja-justo.vercel.app'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email requerido' }, { status: 400 })
    }

    const preference = new Preference(client)

    const result = await preference.create({
      body: {
        items: [
          {
            title: 'Acceso 24h – Viaja Justo',
            quantity: 1,
            unit_price: 5000,
            currency_id: 'COP',
            id: ''
          },
        ],
        payer: { email },
        back_urls: {
          success: `${BASE_URL}/pago-exitoso`,
          failure: `${BASE_URL}/pago-fallido`,
          pending: `${BASE_URL}/pago-pendiente`,
        },
        auto_return: 'approved',
        notification_url: `${BASE_URL}/api/webhook/mercadopago`,
      },
    })

    return NextResponse.json({
      checkoutUrl: result.init_point,
    })
  } catch (error) {
    console.error('CREATE PAYMENT ERROR:', error)
    return NextResponse.json(
      { error: 'Error iniciando el pago' },
      { status: 500 }
    )
  }
}
