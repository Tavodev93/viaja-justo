export default function Hero() {
  return (
    <section className="py-24 text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Viaja a Colombia con información real y decisiones inteligentes.
      </h1>

      <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
        Evita abusos, conoce precios de referencia y llega preparado antes de aterrizar.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/antes-de-viajar"
          className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-lg"
        >
          Ver checklist antes de viajar
        </a>

        <a
          href="/precios"
          className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg"
        >
          Consultar precios reales
        </a>
      </div>
    </section>
  )
}
