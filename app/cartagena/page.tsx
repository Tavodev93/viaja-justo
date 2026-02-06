'use client'

import { useState } from 'react'

type Category = 'comida' | 'taxi' | 'tour'
type Zone = 'centro' | 'bocagrande' | 'playa' | 'getsemani'
type Season = 'baja' | 'media' | 'alta'

const BASE_PRICES = {
  comida: { min: 15000, max: 20000 },
  taxi: { min: 8000, max: 12000 },
  tour: { min: 30000, max: 45000 },
}

const SEASON_MULTIPLIER: Record<Season, number> = {
  baja: 1,
  media: 1.25,
  alta: 1.5,
}

function getSeasonByDate(): Season {
  const month = new Date().getMonth() + 1
  if ([12, 1, 6, 7].includes(month)) return 'alta'
  if ([3, 4, 8, 9].includes(month)) return 'media'
  return 'baja'
}

export default function CartagenaPage() {
  const [zone, setZone] = useState<Zone>('centro')
  const [category, setCategory] = useState<Category>('comida')
  const [price, setPrice] = useState('')
  const [result, setResult] = useState<null | {
    status: 'barato' | 'justo' | 'caro'
    min: number
    max: number
  }>(null)

  const analyzePrice = async () => {
    const value = Number(price)
    if (!value || value <= 0) return

    const season = getSeasonByDate()
    const base = BASE_PRICES[category]
    const factor = SEASON_MULTIPLIER[season]

    const min = Math.round(base.min * factor)
    const max = Math.round(base.max * factor)

    let status: 'barato' | 'justo' | 'caro'
    if (value < min) status = 'barato'
    else if (value <= max) status = 'justo'
    else status = 'caro'

    setResult({ status, min, max })

    await fetch('/api/save-price-check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        city: 'cartagena',
        zone,
        category,
        season,
        price: value,
        result: status,
      }),
    })
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-xl mx-auto">

        {/* HERO UX */}
        <h1 className="text-3xl font-extrabold mb-2">
          ¿Te están cobrando de más en Cartagena?
        </h1>
        <p className="text-slate-300 mb-6">
          En 10 segundos sabrás si un precio es justo o inflado para turistas.
        </p>

        {/* ONBOARDING 3 PASOS */}
        <div className="mb-8 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
          <ol className="list-decimal list-inside space-y-1">
            <li>Elige la zona</li>
            <li>Ingresa el precio</li>
            <li>Decide si aceptas o no</li>
          </ol>
        </div>

        {/* ZONA */}
        <label className="block text-xs text-slate-400 mb-1">
          Zona donde te están cobrando
        </label>
        <select
          value={zone}
          onChange={e => setZone(e.target.value as Zone)}
          className="w-full mb-4 rounded-lg bg-[#020617] border border-white/20 px-4 py-3"
        >
          <option value="centro">🏰 Centro Histórico</option>
          <option value="bocagrande">🏖️ Bocagrande</option>
          <option value="playa">🌊 Playa Blanca / Islas</option>
          <option value="getsemani">🏘️ Getsemaní</option>
        </select>

        {/* CATEGORÍA */}
        <label className="block text-xs text-slate-400 mb-1">
          ¿Qué estás pagando?
        </label>
        <select
          value={category}
          onChange={e => setCategory(e.target.value as Category)}
          className="w-full mb-4 rounded-lg bg-[#020617] border border-white/20 px-4 py-3"
        >
          <option value="comida">🍽️ Comida</option>
          <option value="taxi">🚕 Taxi</option>
          <option value="tour">🏖️ Tour / Servicio</option>
        </select>

        {/* PRECIO */}
        <label className="block text-xs text-slate-400 mb-1">
          Precio que te dijeron (en pesos colombianos)
        </label>
        <input
          type="number"
          placeholder="Ej: 45000"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="w-full mb-6 rounded-lg bg-[#020617] border border-white/20 px-4 py-3"
        />

        <button
          onClick={analyzePrice}
          className="w-full rounded-xl bg-green-500 py-4 text-lg font-semibold text-black hover:bg-green-400 transition"
        >
          Analizar precio
        </button>

        {/* RESULTADO */}
        {result && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p
              className={`text-2xl font-extrabold mb-2 ${
                result.status === 'barato'
                  ? 'text-green-400'
                  : result.status === 'justo'
                  ? 'text-blue-400'
                  : 'text-red-400'
              }`}
            >
              {result.status.toUpperCase()}
            </p>

            <p className="text-sm text-slate-400">
              Referencia local: ${result.min.toLocaleString()} – ${result.max.toLocaleString()} COP
            </p>
          </div>
        )}

        {/* CONFIANZA */}
        <p className="mt-12 text-xs text-slate-500 text-center">
          Acceso válido por 24 horas · Precios basados en referencias locales reales ·
          Pueden variar según zona y temporada.
        </p>

      </div>
    </main>
  )
}
