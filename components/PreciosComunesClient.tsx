"use client";

import { useAccess } from "../hooks/useAccess";
import { redirectToWompi } from "../lib/wompiRedirect";

export default function PreciosComunesClient() {
  console.log("SOY PRECIOS COMUNES CLIENT");
  const { hasAccess } = useAccess();

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-sm">
        {/* TÍTULO */}
        <h1 className="text-3xl font-bold mb-4 text-center">
          Precios comunes en Cartagena
        </h1>

        {/* DESCRIPCIÓN */}
        <p className="text-gray-600 mb-8 text-center">
          Estos son los rangos de precios que usan turistas y locales. Pagar de
          más es opcional.
        </p>

        {/* BLOQUE DE PRECIO */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 text-center">
          <p className="text-lg">
            <strong>Rango justo:</strong>{" "}
            {hasAccess
              ? "Agua: $3.000 – $5.000 · Cerveza: $5.000 – $8.000"
              : "Contenido bloqueado"}
          </p>
        </div>

        {/* PASO 4 · BENEFICIOS */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            ¿Por qué confiar en este precio?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ul className="space-y-3 text-gray-700">
              <li>✓ Datos reales, no estimaciones</li>
              <li>✓ Precios usados por locales y viajeros</li>
              <li>✓ Actualizado constantemente</li>
            </ul>

            <ul className="space-y-3 text-gray-700">
              <li>✕ No somos agencia</li>
              <li>✕ No vendemos transporte</li>
              <li>✕ No cobramos comisiones</li>
            </ul>
          </div>
        </section>

        {/* PASO 5 · REFUERZO DE CONFIANZA */}
        <section className="mt-10 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Viaja Justo es un proyecto independiente creado para ayudar a
            viajeros a evitar abusos comunes y tomar decisiones informadas.
          </p>
        </section>

        {/* PASO 6 · CTA FINAL */}
        <section className="mt-8 text-center">
          {!hasAccess ? (
            <>
              <button
                onClick={redirectToWompi}
                className="w-full bg-yellow-400 text-black font-semibold py-4 rounded-lg text-lg hover:bg-yellow-300 transition"
              >
                Pagar $5.000 y desbloquear precios por 24 horas
              </button>

              <p className="mt-3 text-sm text-gray-600">
                Acceso inmediato · Sin registro · Menos que una cerveza
              </p>
            </>
          ) : (
            <>
              <p className="text-green-600 font-medium text-lg">
                ✅ Acceso activo por 24 horas
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Puedes consultar todos los precios cuando lo necesites.
              </p>
            </>
          )}
        </section>

        {/* PASO 7 · NAVEGACIÓN POST-ACCESO */}
        {hasAccess && (
          <section className="mt-10 text-center">
            <h3 className="text-xl font-semibold mb-2">
              ¿Qué más puedes consultar ahora?
            </h3>
            <p className="text-gray-600 mb-6">
              Tu acceso aplica para todas las categorías durante 24 horas.
            </p>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              <a
                href="/precio-playas-cartagena"
                className="border rounded-lg p-4 hover:bg-gray-50"
              >
                🏖️ Precios de playas
              </a>
              <a
                href="/precio-tours-cartagena"
                className="border rounded-lg p-4 hover:bg-gray-50"
              >
                🚤 Precios de tours
              </a>
              <a
                href="/precio-comunes-cartagena"
                className="border rounded-lg p-4 hover:bg-gray-50 sm:col-span-2"
              >
                🛒 Precios comunes
              </a>
            </div>
          </section>
        )}

        {/* PASO 9 · CIERRE EMOCIONAL */}
        <section className="mt-14 text-center">
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Cartagena es una ciudad increíble. <br />
            Viajar informado hace la experiencia aún mejor.
          </p>
        </section>
      </div>
    </main>
  );
}
