"use client"

import { useEffect, useState } from "react"

export default function PaywallPage() {
  const [expired, setExpired] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
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
      alert("Ocurrió un error iniciando el pago. Intenta de nuevo.")
    }
  }

  return (
    <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white border border-zinc-200 rounded-2xl p-8 text-center shadow-sm">
          {/* ALERTAS */}
          {expired && (
            <div className="mb-4 rounded-lg bg-red-50 text-red-700 px-4 py-2 text-sm">
              ⏳ Tu acceso de 24 horas terminó. Puedes renovarlo cuando quieras.
            </div>
          )}

          {error && (
            <div className="mb-4 rounded-lg bg-yellow-50 text-yellow-700 px-4 py-2 text-sm">
              No se pudo completar el pago. Intenta nuevamente.
            </div>
          )}

          {/* TEXTO */}
          <h1 className="text-2xl font-semibold text-zinc-900 mb-3">
            Evita pagar de más en Cartagena
          </h1>

          <p className="text-zinc-600 text-sm leading-relaxed mb-6">
            Compara precios reales de tours, transporte y actividades.
            <br />
            <strong className="text-zinc-800">
              Acceso completo por 24 horas.
            </strong>
          </p>

          {/* PRECIO */}
          <div className="rounded-xl bg-zinc-50 border border-zinc-200 py-5 mb-6">
            <p className="text-3xl font-bold text-zinc-900">$5.000 COP</p>
            <p className="text-xs text-zinc-500 mt-1">
              Pago único · Sin suscripciones
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={pagar}
            disabled={loading}
            className={`w-full rounded-xl py-3 text-base font-medium text-white transition ${
              loading
                ? "bg-zinc-400 cursor-not-allowed"
                : "bg-zinc-900 hover:bg-zinc-800"
            }`}
          >
            {loading ? "Redirigiendo…" : "Desbloquear acceso"}
          </button>

          <p className="text-xs text-zinc-400 mt-4">
            El acceso se activa automáticamente después del pago.
          </p>
        </div>
      </div>
    </main>
  )
}
