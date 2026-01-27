"use client";

import { useEffect } from "react";
import Link from "next/link";
import { grantAccess24h } from "@/lib/access";

export default function PagoExitosoPage() {
  useEffect(() => {
    grantAccess24h();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow text-center">
        <h1 className="text-3xl font-bold mb-4">¡Listo! Ya tienes acceso 🎉</h1>

        <p className="mb-6">
          Durante las próximas 24 horas podrás consultar todos los precios
          justos y evitar sobrecobros en tu viaje.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Volver a consultar precios
        </Link>
      </div>
    </main>
  );
}
