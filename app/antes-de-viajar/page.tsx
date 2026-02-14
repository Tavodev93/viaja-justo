export default function AntesDeViajar() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Checklist inteligente antes de viajar a Colombia
        </h1>

        <p className="mt-6 text-gray-300 text-center">
          Prepárate antes de aterrizar y evita errores comunes del turista.
        </p>

        {/* Internet */}
        <section className="mt-16 bg-[#111827] p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-semibold">
            📱 Llega con internet funcionando desde que aterrizas
          </h2>

          <p className="mt-4 text-gray-400">
            Muchos turistas pagan roaming excesivo o pierden tiempo buscando una
            SIM en el aeropuerto. Activar una eSIM antes de viajar te permite
            usar Uber, Google Maps y avisar que llegaste apenas el avión toque
            tierra.
          </p>

          <ul className="mt-6 space-y-2 text-gray-300">
            <li>✔ Activación digital en minutos</li>
            <li>✔ Sin cambiar tu número de WhatsApp</li>
            <li>✔ Funciona apenas aterrizas en Colombia</li>
          </ul>

          <div className="mt-8">
            <a
              href="AQUI_VA_TU_LINK_AFILIADO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-lg"
            >
              Activar internet antes de viajar
            </a>
          </div>
        </section>

        {/* Apps */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">
            📲 Descarga apps necesarias
          </h2>
          <p className="mt-4 text-gray-400">
            Uber, Google Maps y apps locales facilitan tu movilidad.
          </p>
        </section>

        {/* Cambio de moneda */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">
            💵 Conoce precios de referencia
          </h2>
          <p className="mt-4 text-gray-400">
            Evita pagar precios inflados por desconocimiento.
          </p>
        </section>
      </div>
    </main>
  );
}
