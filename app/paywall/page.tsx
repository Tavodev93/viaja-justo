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

      const res = await fetch("/api/mp/create-preference", {
        method: "POST",
      })

      if (!res.ok) throw new Error("Error iniciando pago")

      const data = await res.json()
      if (!data.init_point) throw new Error("Respuesta inválida")

      window.location.href = data.init_point
    } catch (e) {
      alert("Error iniciando el pago. Intenta de nuevo.")
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        {expired && (
          <div className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-700">
            ⏳ Tu acceso de 24 horas terminó. Puedes renovarlo cuando quieras.
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-lg bg-yellow-100 px-4 py-3 text-sm text-yellow-700">
            No se pudo completar el pago. Intenta nuevamente.
          </div>
        )}

        <h1 className="text-3xl font-bold mb-4">
          Evita pagar de más en Cartagena
        </h1>

        <p className="text-gray-600 mb-6">
          Compara precios reales de tours, transporte y actividades.
          <br />
          <strong>Acceso completo por 24 horas.</strong>
        </p>

        <div className="mb-6 rounded-xl bg-gray-100 p-6">
          <p className="text-3xl font-bold">$5.000 COP</p>
          <p className="text-sm text-gray-500">
            Pago único · Sin suscripciones
          </p>
        </div>

        <button
          onClick={pagar}
          disabled={loading}
          className={`w-full rounded-xl px-6 py-3 text-lg font-semibold text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-900"
          }`}
        >
          {loading ? "Redirigiendo…" : "Desbloquear acceso"}
        </button>

        <p className="mt-4 text-xs text-gray-400">
          El acceso se activa automáticamente después del pago.
        </p>
      </div>
    </main>
  )
}
