export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.SUPABASE_SERVICE_ROLE_KEY
  ) {
    return NextResponse.json(
      { error: 'Supabase env vars not set' },
      { status: 500 }
    )
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  try {
    const { data, error } = await supabase
      .from('price_checks')
      .select('zone, result')

    if (error) throw error

    const summary: Record<string, { total: number; caro: number }> = {}

    data.forEach(item => {
      if (!summary[item.zone]) {
        summary[item.zone] = { total: 0, caro: 0 }
      }
      summary[item.zone].total++
      if (item.result === 'caro') summary[item.zone].caro++
    })

    const insights = Object.entries(summary).map(([zone, v]) => ({
      zone,
      total: v.total,
      caroPercent: Math.round((v.caro / v.total) * 100),
    }))

    return NextResponse.json({ insights })
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}
