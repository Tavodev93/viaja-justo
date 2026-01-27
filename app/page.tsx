import CategoryCard from "../components/CategoryCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ¿Te están cobrando de más en Cartagena?
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Consulta precios justos antes de pagar taxis, playas y tours. Evita
          abusos y viaja con tranquilidad.
        </p>

        <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg text-lg hover:bg-yellow-300 transition">
          Ver precios justos ahora
        </button>

        <p className="mt-4 text-sm opacity-90">
          Acceso por 24 horas · Sin registro · Pago único de $5.000 COP
        </p>

        <p className="mt-2 text-xs opacity-80">
          Menos que una cerveza · Te ahorra más de lo que cuesta
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">
          Lo que obtienes con Viaja Justo
        </h2>

        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto text-left">
          <li>✅ Rangos de precios reales usados por turistas</li>
          <li>✅ Referencias claras para negociar sin miedo</li>
          <li>✅ Acceso por 24 horas a todos los precios</li>
          <li>✅ Sin crear cuenta, sin correos, sin spam</li>
        </ul>
      </section>
      <p className="mt-6 text-sm text-white opacity-90 text-center">
        Proyecto independiente · Información basada en experiencias reales
      </p>

      {/* CATEGORÍAS */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
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
    </main>
  );
}
