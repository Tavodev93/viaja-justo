export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold mb-6">
          ¿Qué es Viaja Justo?
        </h1>

        <p className="text-gray-700 mb-4">
          Viaja Justo es una herramienta creada para ayudar a turistas a
          identificar si el precio que les están cobrando en Cartagena es
          justo o exagerado.
        </p>

        <p className="text-gray-700 mb-4">
          Sabemos que cuando visitas una ciudad nueva es difícil saber cuánto
          deberías pagar por un taxi, una silla en la playa o un tour básico.
          Esa incertidumbre genera ansiedad y malas experiencias.
        </p>

        <p className="text-gray-700 mb-6">
          Por eso creamos Viaja Justo: una guía sencilla con rangos de precios
          reales, basada en experiencias de turistas, para que tomes decisiones
          con tranquilidad.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h2 className="font-semibold mb-2">Lo que Viaja Justo SÍ hace</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Mostrar rangos de precios justos y razonables</li>
            <li>Ayudar a evitar cobros excesivos</li>
            <li>Reducir la ansiedad al momento de pagar</li>
          </ul>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="font-semibold mb-2">Lo que Viaja Justo NO hace</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>No vende tours ni servicios</li>
            <li>No tiene acuerdos con taxis o vendedores</li>
            <li>No obliga a pagar ningún precio</li>
          </ul>
        </div>

        <p className="text-gray-600 text-sm">
          Proyecto independiente en fase beta. Los precios se actualizan
          constantemente según experiencias reales de turistas.
        </p>
      </div>
    </main>
  );
}
