"use client"
import { useEffect, useState } from "react"

export default function AccessTimer() {
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    const fetchStatus = async () => {
      const res = await fetch("/api/access/status")
      const data = await res.json()
      if (data.active) {
        setRemaining(data.remainingMs)
      }
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 60000)

    return () => clearInterval(interval)
  }, [])

  if (!remaining) return null

  const hours = Math.floor(remaining / 3600000)
  const minutes = Math.floor((remaining % 3600000) / 60000)

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg text-sm">
      ⏳ Acceso activo: {hours}h {minutes}m
    </div>
  )
}
