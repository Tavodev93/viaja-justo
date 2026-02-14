"use client";

import { trackEvent } from "@/lib/gtag";

export default function InternetColombia() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Internet para turistas en Colombia
        </h1>

        <p className="mt-6 text-gray-300 text-center max-w-2xl mx-auto">
          Evita pagar hasta $100 USD en roaming durante tu viaje. Activa tu eSIM
          antes de salir y llega a Colombia con internet funcionando desde el
          primer minuto.
        </p>

        <div className="mt-8 text-center">
          <a
            href="https://airalo.pxf.io/c/698165/2071037/15608"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("click_esim", {
                location: "internet_colombia",
              })
            }
            className="inline-block bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-lg text-lg"
          >
            Activar mi internet antes de viajar
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Instalación en minutos. Sin filas. Sin sorpresas en tu factura.
        </p>

        {/* Problema */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">
            El problema al llegar sin datos
          </h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>• No puedes pedir Uber</li>
            <li>• No puedes usar Google Maps</li>
            <li>• Dependencia de WiFi público</li>
            <li>
              • Roaming puede costar $10–15 USD por día (más de $100 USD en una
              semana)
            </li>
          </ul>
        </section>

        {/* Solución */}
        <section className="mt-16 bg-[#111827] p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-semibold">
            La forma más fácil y económica de tener internet en Colombia
          </h2>

          <p className="mt-4 text-gray-400">
            Actívala antes de salir de tu país y tendrás internet funcionando
            apenas aterrices en Colombia.
          </p>

          <ul className="mt-6 space-y-2 text-gray-300">
            <li>✔ Activación 100% digital</li>
            <li>✔ No necesitas chip físico</li>
            <li>✔ Mantienes tu número de WhatsApp</li>
            <li>✔ Planes desde pocos dólares</li>
          </ul>

          <div className="mt-8 text-center">
            <a
              href="https://airalo.pxf.io/c/698165/2071037/15608"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("click_esim", {
                  location: "internet_colombia",
                })
              }
              className="inline-block bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-lg text-lg"
            >
              Activar mi internet antes de viajar
            </a>
          </div>
        </section>

        {/* FAQ breve */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>

          <div className="mt-6 space-y-6 text-gray-400">
            <div>
              <p className="font-semibold text-white">
                ¿Funciona en iPhone y Android?
              </p>
              <p>Sí, siempre que tu dispositivo sea compatible con eSIM.</p>
            </div>

            <div>
              <p className="font-semibold text-white">
                ¿Cuándo debo activarla?
              </p>
              <p>Puedes instalarla antes del viaje y activarla al aterrizar.</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg mb-6">
              Si ya tienes tu vuelo, lo único que falta es asegurarte de tener
              internet al aterrizar.
            </p>
            <a
              href="https://airalo.pxf.io/c/698165/2071037/15608"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("click_esim", {
                  location: "internet_colombia",
                })
              }
              className="inline-block bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-lg text-lg"
            >
              Activar mi internet antes de viajar
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
