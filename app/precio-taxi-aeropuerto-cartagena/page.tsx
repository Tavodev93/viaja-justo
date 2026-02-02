import PayButton from "@/components/PayButton";

export default function TaxiAeropuertoCartagena() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #d8f3dc 0%, #f1faee 60%, #ffffff 100%)",
      color: "#1b4332",
      padding: "80px 20px",
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{ maxWidth: 760, textAlign: "center" }}>

        <h1 style={{ fontSize: 42 }}>Taxi desde el aeropuerto</h1>
        <h2 style={{ color: "#2d6a4f", fontWeight: 400, marginBottom: 36 }}>
          Llega a tu destino sin estrés ni sobreprecios.
        </h2>

        <p style={{ fontSize: 19, lineHeight: 1.7 }}>
          El trayecto desde el aeropuerto es uno de los puntos donde más abusos
          se presentan. Viaja Justo te da rangos de precios claros para moverte
          con confianza.
        </p>

        <section style={{
          background: "#ffffff",
          borderRadius: 16,
          padding: 32,
          margin: "40px 0",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li>🚕 Tarifas comunes por zonas</li>
            <li>📍 Recomendaciones prácticas</li>
            <li>🛡️ Consejos de seguridad</li>
          </ul>
        </section>

        <PayButton />
      </div>
    </main>
  );
}
