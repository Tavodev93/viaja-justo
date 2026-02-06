import { NextRequest, NextResponse } from 'next/server'

const SECRET = process.env.ACCESS_COOKIE_SECRET!

function hexToUint8Array(hex: string) {
  return new Uint8Array(
    hex.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16))
  )
}

async function verify(payload: string, signature: string) {
  const encoder = new TextEncoder()

  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify']
  )

  return crypto.subtle.verify(
    'HMAC',
    key,
    hexToUint8Array(signature),
    encoder.encode(payload)
  )
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 🔒 RUTAS PROTEGIDAS
  if (!pathname.startsWith('/cartagena')) {
    return NextResponse.next()
  }

  const cookie = request.cookies.get('viaja_justo_access')

  if (!cookie) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  try {
    const { payload, signature } = JSON.parse(cookie.value)

    // 1️⃣ Verificar firma
    const valid = await verify(payload, signature)
    if (!valid) throw new Error('Invalid signature')

    const data = JSON.parse(payload)
    const now = Date.now()

    // 2️⃣ Verificar expiración real
    if (data.expiresAt && now > data.expiresAt) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // 3️⃣ Verificar ciudad
    if (!data.cities?.includes('cartagena')) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // ✅ Todo OK → acceso permitido
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/cartagena/:path*'],
}
