import PayButton from "@/components/PayButton";

export default function ToursCartagena() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #ffe8cc 0%, #fff3e0 60%, #ffffff 100%)",
      color: "#3a2d00",
      padding: "80px 20px",
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{ maxWidth: 760, textAlign: "center" }}>

        <h1 style={{ fontSize: 42 }}>Tours en Cartagena</h1>
        <h2 style={{ color: "#e36414", fontWeight: 400, marginBottom: 36 }}>
          Disfruta experiencias sin pagar de más.
        </h2>

        <p style={{ fontSize: 19, lineHeight: 1.7 }}>
          Los tours son una de las mayores fuentes de sobreprecio en Cartagena.
          Viaja Justo te da referencias reales para comparar y decidir mejor.
        </p>

        <section style={{
          background: "#ffffff",
          borderRadius: 16,
          padding: 32,
          margin: "40px 0",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
            <li>🚤 Islas del Rosario</li>
            <li>🏙️ City tours</li>
            <li>🌅 Paseos al atardecer</li>
          </ul>
        </section>

        <PayButton />
      </div>
    </main>
  );
}
