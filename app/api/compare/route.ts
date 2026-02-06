import { NextResponse } from 'next/server'
import { requireActiveAccess } from '@/lib/requireAccess'

export async function GET(req: Request) {
  const userId = req.headers.get('x-user-id')

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const hasAccess = await requireActiveAccess(userId)

  if (!hasAccess) {
    return NextResponse.json(
      { error: 'Pago requerido' },
      { status: 402 }
    )
  }

  // lógica premium real
  return NextResponse.json({
    ok: true,
    data: 'comparación de precios'
  })
}
