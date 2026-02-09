"use client"

import { useEffect } from "react"

export default function ReturnPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const paymentId = params.get("payment_id")

    if (!paymentId) {
      window.location.href = "/paywall?error=payment"
      return
    }

    window.location.href = `/api/access/confirm?payment_id=${paymentId}`
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="inline-block mb-6 rounded-full bg-emerald-500/10 text-emerald-400 px-4 py-1 text-sm">
          Viaja Justo
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">
          Confirmando tu pago
        </h1>

        <p className="text-slate-300">
          Estamos validando la transacción y activando tu acceso.
          <br />
          Esto puede tardar unos segundos…
        </p>

        <div className="mt-6 text-emerald-400 animate-pulse text-sm">
          Procesando de forma segura 🔒
        </div>
      </div>
    </main>
  )
}
