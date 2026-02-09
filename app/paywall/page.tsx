"use client"

import { useEffect, useState } from "react"

export default function PaywallPage() {
  const [expired, setExpired] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("expired")) setExpired(true)
    if (params.get("error")) setError(true)
  }, [])

  const pagar = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/mp/create-preference", { method: "POST" })
      const data = await res.json()
      window.location.href = data.init_point
    } catch {
      setLoading(false)
      alert("Error iniciando el pago")
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        {/* ALERTAS */}
        {expired && (
          <div className="mb-4 text-sm text-red-400">
            ⏳ Tu acceso de 24 horas terminó. Puedes renovarlo.
          </div>
        )}
        {error && (
          <div className="mb-4 text-sm text-yellow-400">
            No se pudo completar el pago. Intenta nuevamente.
          </div>
        )}

        {/* BADGE */}
        <div className="inline-block mb-6 rounded-full bg-emerald-500/10 text-emerald-400 px-4 py-1 text-sm">
          Precios reales verificados en Cartagena
        </div>

        {/* TITULO */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Evita precios inflados para turistas.
          <br />
          <span className="text-emerald-400">
            Paga como local, no como visitante.
          </span>
        </h1>

        {/* SUB */}
        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          Acceso completo por <strong>24 horas</strong> a precios reales de
          transporte, tours y actividades en Cartagena pagando solo{" "}
          <span className="text-emerald-400 font-semibold">$5.000 COP</span>.
        </p>

        {/* CTA */}
        <button
          onClick={pagar}
          disabled={loading}
          className={`w-full md:w-auto px-8 py-4 rounded-xl font-semibold text-slate-900 transition ${
            loading
              ? "bg-emerald-300 cursor-not-allowed"
              : "bg-emerald-400 hover:bg-emerald-300"
          }`}
        >
          {loading ? "Redirigiendo…" : "Acceder a precios reales por 24 horas"}
        </button>

        <p className="mt-4 text-sm text-slate-400">
          Sin suscripciones · Pago único · Acceso inmediato
        </p>
      </div>
    </main>
  )
}
