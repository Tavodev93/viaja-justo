import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function middleware(req: NextRequest) {
  const userEmail = req.cookies.get('user_email')?.value

  // Si no hay usuario, mandamos al paywall
  if (!userEmail) {
    return NextResponse.redirect(new URL('/paywall', req.url))
  }

  // Buscar usuario
  const { data: user } = await supabase
    .from('users')
    .select('id')
    .eq('email', userEmail)
    .single()

  if (!user) {
    return NextResponse.redirect(new URL('/paywall', req.url))
  }

  // Verificar acceso activo
  const { data: access } = await supabase
    .from('access_passes')
    .select('id')
    .eq('user_id', user.id)
    .gt('access_until', new Date().toISOString())
    .limit(1)

  if (!access || access.length === 0) {
    return NextResponse.redirect(new URL('/paywall', req.url))
  }

  // Tiene acceso → deja pasar
  return NextResponse.next()
}

export const config = {
  matcher: ['/premium-test'],
}
