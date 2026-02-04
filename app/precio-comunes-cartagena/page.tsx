import { cookies } from "next/headers";
import Link from "next/link";

export default async function PrecioComunesCartagenaPage() {
  const cookieStore = cookies();
  const accessCookie = (await cookieStore).get("viaja_justo_access");

  let hasAccess = false;

  if (accessCookie) {
    try {
      const parsed = JSON.parse(accessCookie.value);
      hasAccess = parsed.cities?.includes("cartagena");
    } catch {
      hasAccess = false;
    }
  }

  // 🔒 SIN ACCESO → LANDING / TEASER
  if (!hasAccess) {
    return (
      <main style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
        <h1>Precios comunes en Cartagena</h1>

        <p>
          En Cartagena los precios pueden variar mucho según la zona y quién
          pregunte. Viaja Justo muestra referencias reales para evitar abusos.
        </p>

        <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#f6f6f6" }}>
          <h3>🔒 Contenido completo bloqueado</h3>
          <p>
            Accede a precios reales de comida, transporte y servicios por un
            aporte único.
          </p>

          <Link href="/">
            👉 Desbloquear acceso por $5.000
          </Link>
        </div>
      </main>
    );
  }

  // ✅ CON ACCESO → PRECIOS REALES
  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1>Precios reales en Cartagena</h1>

      <ul>
        <li>🍽️ Almuerzo corriente: $15.000 – $30.000 COP</li>
        <li>🚕 Taxi aeropuerto – centro: $15.000 – $25.000 COP</li>
        <li>🏖️ Agua en playa: $3.000 – $5.000 COP</li>
        <li>🍺 Cerveza nacional: $5.000 – $8.000 COP</li>
      </ul>

      <p style={{ marginTop: "2rem", color: "#666" }}>
        Datos recopilados y actualizados por Viaja Justo.
      </p>
    </main>
  );
}
