import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function middleware(req: NextRequest) {
  // Aquí asumes que ya tienes una forma real de identificar al usuario
  // (por ahora, email llega por header o sesión; no cookies manuales)
  const userEmail = req.headers.get('x-user-email')

  if (!userEmail) {
    return NextResponse.redirect(new URL('/paywall', req.url))
  }

  const { data: user } = await supabase
    .from('users')
    .select('id')
    .eq('email', userEmail)
    .single()

  if (!user) {
    return NextResponse.redirect(new URL('/paywall', req.url))
  }

  const { data: access } = await supabase
    .from('access_passes')
    .select('id')
    .eq('user_id', user.id)
    .gt('access_until', new Date().toISOString())
    .limit(1)

  if (!access || access.length === 0) {
    return NextResponse.redirect(new URL('/paywall', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/compare/:path*',
    '/dashboard/:path*',
    '/api/compare/:path*',
  ],
}
