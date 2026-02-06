import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET() {
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
      if (item.result === 'caro') {
        summary[item.zone].caro++
      }
    })

    const insights = Object.entries(summary).map(([zone, values]) => ({
      zone,
      total: values.total,
      caroPercent: Math.round((values.caro / values.total) * 100),
    }))

    return NextResponse.json({ insights })
  } catch {
    return NextResponse.json(
      { error: 'Failed to generate insights' },
      { status: 500 }
    )
  }
}
