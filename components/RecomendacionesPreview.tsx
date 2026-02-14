import Link from "next/link"

export default function RecomendacionesPreview() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold">
        Recomendaciones verificadas por Viaja Justo
      </h2>

      <div className="mt-12 max-w-xl mx-auto bg-[#111827] p-8 rounded-2xl border border-gray-800">

        <h3 className="text-xl font-semibold">
          📶 Internet móvil en Colombia
        </h3>

        <p className="mt-4 text-gray-400">
          Llega con datos funcionando desde que aterrizas y evita pagar roaming excesivo.
        </p>

        <Link
          href="/internet-colombia"
          className="inline-block mt-6 bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-lg"
        >
          Ver opción recomendada
        </Link>

      </div>
    </section>
  )
}
