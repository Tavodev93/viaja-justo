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
    <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <div className="bg-white border border-zinc-200 rounded-2xl p-8 text-center shadow-sm max-w-md w-full">
        <div className="mb-4 text-3xl">🔒</div>

        <h1 className="text-xl font-semibold text-zinc-900 mb-2">
          Confirmando tu pago
        </h1>

        <p className="text-zinc-600 text-sm">
          Estamos validando la operación con nuestro sistema.
          <br />
          Esto puede tardar unos segundos…
        </p>
      </div>
    </main>
  )
}
