import CategoryCard from "../components/CategoryCard";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-600 via-sky-500 to-cyan-400 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Te están cobrando de más en Cartagena?
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Consulta precios justos antes de pagar taxis, playas y tours. Evita
          abusos y viaja con tranquilidad.
        </p>

        <button className="bg-yellow-400 text-black font-semibold px-10 py-4 rounded-xl text-lg hover:bg-yellow-300 transition shadow-lg">
          Ver precios justos ahora
        </button>

        <p className="mt-6 text-sm opacity-90">
          Acceso por 24 horas · Sin registro · Pago único de $5.000 COP
        </p>

        <p className="mt-2 text-xs opacity-80">
          Menos que una cerveza · Te ahorra más de lo que cuesta
        </p>
      </section>

      {/* BENEFICIOS */}
      {/* BENEFICIOS */}
      <section className="py-20 px-6 bg-sky-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-sky-900">
            Lo que obtienes con Viaja Justo
          </h2>

          <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto text-left">
            <li className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-md text-gray-800">
              <span className="text-green-500 text-xl">✅</span>
              <span>Rangos de precios reales usados por turistas</span>
            </li>

            <li className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-md text-gray-800">
              <span className="text-green-500 text-xl">✅</span>
              <span>Referencias claras para negociar sin miedo</span>
            </li>

            <li className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-md text-gray-800">
              <span className="text-green-500 text-xl">✅</span>
              <span>Acceso por 24 horas a todos los precios</span>
            </li>

            <li className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-md text-gray-800">
              <span className="text-green-500 text-xl">✅</span>
              <span>Sin crear cuenta, sin correos, sin spam</span>
            </li>
          </ul>

          <p className="mt-10 text-sm text-sky-700">
            Proyecto independiente · Información basada en experiencias reales
          </p>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Qué precio quieres consultar?
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <CategoryCard
              title="Taxi aeropuerto"
              description="Evita cobros inflados al llegar."
              href="/precio-taxi-aeropuerto-cartagena"
            />

            <CategoryCard
              title="Playas"
              description="Paga lo justo por sillas y carpas."
              href="/precio-playas-cartagena"
            />

            <CategoryCard
              title="Tours"
              description="No más precios “especial turista”."
              href="/precio-tours-cartagena"
            />

            <CategoryCard
              title="Precios comunes"
              description="Agua, cerveza y básicos sin sorpresas."
              href="/precio-comunes-cartagena"
            />
          </div>
        </div>
      </section>

      {/* BLOQUE FINAL — PROPÓSITO + APORTE */}
      <section className="py-24 px-6 bg-gradient-to-b from-amber-200 via-orange-200 to-yellow-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-orange-900">
            ¿Por qué existe Viaja Justo?
          </h2>

          <ul className="space-y-4 text-lg text-orange-900 mb-16">
            <li>💸 Falta de referencias claras de precios</li>
            <li>😕 Turistas pagando de más sin saberlo</li>
            <li>🧭 Información dispersa o inexistente</li>
          </ul>

          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              ¿Para qué sirve tu aporte de $5.000?
            </h3>

            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li>📊 Mantener la plataforma activa</li>
              <li>🧾 Recopilar y actualizar precios reales</li>
              <li>📍 Crear guías claras por zonas</li>
              <li>🌎 Expandir el proyecto a más ciudades</li>
            </ul>

            <p className="text-sm text-gray-500">
              No es una suscripción. No es una donación eterna. Es un aporte
              único para construir algo útil.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
