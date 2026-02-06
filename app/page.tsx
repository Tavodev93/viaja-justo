"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#0f172a] to-[#020617] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-block mb-6 rounded-full bg-green-600/10 px-4 py-1 text-sm text-green-400 border border-green-500/20">
            Precios reales verificados en Cartagena
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Evita precios inflados para turistas.
            <br />
            <span className="text-green-400">
              Paga como local, no como visitante.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
            Compara precios reales de comida, transporte y servicios en
            Cartagena. Acceso completo por{" "}
            <strong className="text-white">24 horas</strong> pagando solo
            <strong className="text-green-400"> $5.000 COP</strong>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={async () => {
                const res = await fetch("/api/create-payment", {
                  method: "POST",
                });

                const data = await res.json();

                if (data?.init_point) {
                  window.location.href = data.init_point;
                }
              }}
              className="inline-flex items-center justify-center rounded-xl bg-green-500 px-8 py-4 text-lg font-semibold text-black hover:bg-green-400 transition"
            >
              Acceder a precios reales por 24 horas
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Sin suscripciones · Pago único · Acceso inmediato
          </p>
        </div>
      </section>
      {/* SECCIÓN COMPARACIÓN DE PRECIOS */}
      <section className="bg-[#020617] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              ¿Cuánto te pueden cobrar de más en un solo día?
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Esto es lo que muchos turistas pagan sin saberlo en Cartagena.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="font-semibold text-lg mb-4">🍽️ Almuerzo típico</h3>
              <p className="text-red-400 text-xl font-bold">Turista: $45.000</p>
              <p className="text-green-400 text-xl font-bold mt-1">
                Local: $18.000
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Mismo plato, distinto precio.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="font-semibold text-lg mb-4">🚕 Trayecto corto</h3>
              <p className="text-red-400 text-xl font-bold">Turista: $25.000</p>
              <p className="text-green-400 text-xl font-bold mt-1">
                Local: $10.000
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Sin taxímetro, sin referencia.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="font-semibold text-lg mb-4">
                🏖️ Servicio turístico
              </h3>
              <p className="text-red-400 text-xl font-bold">Turista: $80.000</p>
              <p className="text-green-400 text-xl font-bold mt-1">
                Local: $35.000
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Precio cambia al oír el acento.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-slate-300">
              Con solo <strong className="text-green-400">$5.000 COP</strong>{" "}
              evitas perder
              <strong className="text-white"> decenas de miles</strong> en un
              día.
            </p>

            <div className="mt-8">
              <button
                onClick={async () => {
                  const res = await fetch("/api/create-payment", {
                    method: "POST",
                  });

                  const data = await res.json();

                  if (data?.init_point) {
                    window.location.href = data.init_point;
                  }
                }}
                className="inline-flex items-center justify-center rounded-xl bg-green-500 px-8 py-4 text-lg font-semibold text-black hover:bg-green-400 transition"
              >
                Acceder a precios reales por 24 horas
              </button>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Pago único · Acceso inmediato · Sin registros innecesarios
            </p>
          </div>
        </div>
      </section>
      {/* SECCIÓN CÓMO FUNCIONA */}
      <section className="bg-[#020617] text-white py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              ¿Cómo funciona Viaja Justo?
            </h2>
            <p className="mt-4 text-slate-400">
              Tres pasos simples. Sin registros largos. Sin complicaciones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-green-400 text-4xl font-extrabold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Paga $5.000 COP</h3>
              <p className="text-slate-400">
                Un solo pago para acceder durante 24 horas completas.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-green-400 text-4xl font-extrabold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Desbloquea los precios
              </h3>
              <p className="text-slate-400">
                Consulta precios reales de comida, transporte y servicios.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="text-green-400 text-4xl font-extrabold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Paga como local</h3>
              <p className="text-slate-400">
                Evita cobros inflados y decide con información real.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={async () => {
                const res = await fetch("/api/create-payment", {
                  method: "POST",
                });

                const data = await res.json();

                if (data?.init_point) {
                  window.location.href = data.init_point;
                }
              }}
              className="inline-flex items-center justify-center rounded-xl bg-green-500 px-8 py-4 text-lg font-semibold text-black hover:bg-green-400 transition"
            >
              Acceder a precios reales por 24 horas
            </button>
            <p className="mt-4 text-sm text-slate-400">
              Acceso inmediato · Pago único · Sin suscripciones
            </p>
          </div>
        </div>
      </section>
      ;{/* SECCIÓN FAQ */}
      <section className="bg-[#020617] text-white py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-slate-400">
              Resolvemos las dudas más comunes antes de pagar.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg">¿El pago es seguro?</h3>
              <p className="mt-2 text-slate-400">
                Sí. Usamos plataformas de pago confiables y no almacenamos datos
                bancarios.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                ¿Esto es una suscripción?
              </h3>
              <p className="mt-2 text-slate-400">
                No. Es un pago único de $5.000 COP. No hay cobros automáticos ni
                renovaciones.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                ¿Qué incluye el acceso por 24 horas?
              </h3>
              <p className="mt-2 text-slate-400">
                Acceso completo a precios reales de comida, transporte y
                servicios turísticos en Cartagena durante 24 horas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                ¿Puedo consultar los precios varias veces?
              </h3>
              <p className="mt-2 text-slate-400">
                Sí. Durante las 24 horas puedes consultar los precios cuantas
                veces quieras.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                ¿Funciona solo en Cartagena?
              </h3>
              <p className="mt-2 text-slate-400">
                Por ahora sí. Preferimos calidad y datos confiables antes de
                abrir nuevas ciudades.
              </p>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}
