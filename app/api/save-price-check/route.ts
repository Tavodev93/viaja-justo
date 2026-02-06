export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { city, zone, category, season, price, result } = body

    if (!city || !zone || !category || !price || !result) {
      return NextResponse.json(
        { error: 'Missing fields', body },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('price_checks')
      .insert({
        city,
        zone,
        category,
        season,
        price,
        result,
      })

    if (error) {
      console.error('SUPABASE INSERT ERROR:', error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true, data })
  } catch (err: any) {
    console.error('API ERROR:', err)
    return NextResponse.json(
      { error: 'Unexpected error' },
      { status: 500 }
    )
  }
}
