import { NextResponse } from 'next/server'
import MercadoPagoConfig, { Preference } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

const BASE_URL = 'https://viaja-justo.vercel.app'

export async function POST() {
  try {
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
      init_point: result.init_point,
    })
  } catch (error) {
    console.error('CREATE PAYMENT ERROR:', error)
    return NextResponse.json(
      { error: 'Error iniciando el pago' },
      { status: 500 }
    )
  }
}
