import PayButton from "@/components/PayButton";

export default function PlayasCartagena() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #cce7ff 0%, #e0f7fa 60%, #ffffff 100%)",
      color: "#0b2545",
      padding: "80px 20px",
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{ maxWidth: "760px", width: "100%", textAlign: "center" }}>

        <h1 style={{ fontSize: "42px" }}>Playas de Cartagena</h1>
        <h2 style={{ color: "#1b6ca8", fontWeight: 400, marginBottom: 36 }}>
          Precios comunes para disfrutar el mar sin sorpresas.
        </h2>

        <p style={{ fontSize: 19, lineHeight: 1.7 }}>
          En muchas playas de Cartagena, los precios no están claros y cambian
          según quién pregunte. Viaja Justo te muestra referencias reales para
          sillas, carpas, bebidas y servicios básicos.
        </p>

        <section style={{
          background: "#ffffff",
          borderRadius: 16,
          padding: 32,
          margin: "40px 0",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}>
          <h3>¿Qué encuentras aquí?</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li>🏖️ Precio común de sillas y carpas</li>
            <li>🥤 Bebidas y alimentos sin sobrecostos</li>
            <li>⚠️ Alertas de cobros irregulares</li>
          </ul>
        </section>

        <PayButton />
      </div>
    </main>
  );
}
