'use client'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function PagoExitosoPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const status = searchParams.get('status')
  const paymentId = searchParams.get('payment_id')

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [accessGranted, setAccessGranted] = useState(false)

  useEffect(() => {
    const confirmAccess = async () => {
      try {
        const res = await fetch('/api/confirm-access', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ city: 'cartagena' }),
        })

        if (!res.ok) {
          throw new Error('Access confirmation failed')
        }

        setAccessGranted(true)

        // ⏱️ REDIRECT AUTOMÁTICO (2.5s)
        setTimeout(() => {
          router.replace('/cartagena')
        }, 2500)

      } catch {
        setError('Tuvimos un problema confirmando tu acceso.')
      } finally {
        setLoading(false)
      }
    }

    if (status === 'approved' && paymentId) {
      confirmAccess()
    } else {
      setError('El pago no fue aprobado.')
      setLoading(false)
    }
  }, [status, paymentId, router])

  return (
    <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">

        {loading && (
          <>
            <h1 className="text-3xl font-extrabold mb-4">
              Confirmando tu acceso…
            </h1>
            <p className="text-slate-400">
              Estamos activando tu acceso a Viaja Justo.
            </p>
          </>
        )}

        {!loading && accessGranted && (
          <>
            <h1 className="text-3xl font-extrabold mb-4 text-green-400">
              ✅ Pago confirmado
            </h1>
            <p className="text-slate-300 mb-6">
              Tu acceso por 24 horas ya está activo.
            </p>
            <p className="text-slate-400 text-sm">
              Te estamos redirigiendo automáticamente…
            </p>
          </>
        )}

        {!loading && error && (
          <>
            <h1 className="text-3xl font-extrabold mb-4 text-red-400">
              ⚠️ Algo salió mal
            </h1>
            <p className="text-slate-300">
              {error}
            </p>
          </>
        )}

      </div>
    </main>
  )
}
