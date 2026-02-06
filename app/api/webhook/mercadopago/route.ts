import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabaseServer'

export async function POST(req: Request) {
  const body = await req.json()

  // ⚠️ Esto depende del formato exacto de MercadoPago
  const payment = body.data

  if (!payment || payment.status !== 'approved') {
    return NextResponse.json({ ok: true })
  }

  // VALIDACIONES CLAVE
  const amount = payment.transaction_amount
  const providerPaymentId = payment.id
  const email = payment.payer?.email

  if (amount !== 5000 || !email) {
    return NextResponse.json({ error: 'Pago inválido' }, { status: 400 })
  }

  // 1️⃣ Obtener usuario
  const { data: user } = await supabaseServer
    .from('users')
    .select('id')
    .eq('email', email)
    .single()

  if (!user) {
    return NextResponse.json({ error: 'Usuario no existe' }, { status: 404 })
  }

  // 2️⃣ Registrar pago
  const { data: paymentRow, error: paymentError } =
    await supabaseServer.from('payments').insert({
      user_id: user.id,
      provider: 'mercadopago',
      provider_payment_id: providerPaymentId,
      amount: 5000,
      currency: 'COP',
      status: 'approved',
      paid_at: new Date().toISOString()
    }).select().single()

  if (paymentError) {
    console.error(paymentError)
    return NextResponse.json({ error: 'Error guardando pago' }, { status: 500 })
  }

  // 3️⃣ Crear acceso 24h
  const now = new Date()
  const expires = new Date(now.getTime() + 24 * 60 * 60 * 1000)

  await supabaseServer.from('access_passes').insert({
    user_id: user.id,
    payment_id: paymentRow.id,
    access_from: now.toISOString(),
    access_until: expires.toISOString()
  })

  return NextResponse.json({ ok: true })
}
