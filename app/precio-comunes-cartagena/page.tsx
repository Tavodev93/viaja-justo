import { cookies } from "next/headers";
import crypto from "crypto";
import Link from "next/link";

const SECRET = process.env.ACCESS_COOKIE_SECRET!;

/**
 * Verifica la firma HMAC del payload
 */
function verifySignature(payload: string, signature: string) {
  const expected = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex");

  return expected === signature;
}

export default function PrecioComunesCartagenaPage() {
  const cookieStore = cookies();
  const accessCookie = cookieStore.get("viaja_justo_access");

  let hasAccess = false;

  if (accessCookie) {
    try {
      const { payload, signature } = JSON.parse(accessCookie.value);

      if (verifySignature(payload, signature)) {
        const data = JSON.parse(payload);
        hasAccess = data.cities?.includes("cartagena");
      }
    } catch {
      hasAccess = false;
    }
  }

  /* =========================================================
     🔒 SIN ACCESO → TEASER / LANDING
     ========================================================= */
  if (!hasAccess) {
    return (
      <main style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
        <h1>Precios reales en Cartagena (sin abusos)</h1>

        <p style={{ marginTop: "1rem" }}>
          En Cartagena los precios pueden variar mucho según la zona y quién
          pregunte. Viaja Justo recopila referencias reales para ayudarte a pagar
          lo justo.
        </p>

        <section
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            borderRadius: "8px",
            background: "#f6f6f6",
          }}
        >
          <h3>🔒 Contenido completo bloqueado</h3>

          <p style={{ marginTop: "0.5rem" }}>
            Al desbloquear obtienes:
          </p>

          <ul style={{ marginTop: "0.5rem" }}>
            <li>🍽️ Precios reales de comidas comunes</li>
            <li>🚕 Tarifas justas de transporte</li>
            <li>🏖️ Costos habituales en zonas turísticas</li>
            <li>❌ Sin precios inflados para turistas</li>
          </ul>

          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/" style={{ fontWeight: "bold" }}>
              👉 Desbloquear acceso por $5.000
            </Link>
            <p style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>
              Acceso inmediato. No es suscripción.
            </p>
          </div>

          <p style={{ fontSize: "0.75rem", marginTop: "1rem", color: "#666" }}>
            Pago seguro con MercadoPago · Proyecto independiente
          </p>
        </section>
      </main>
    );
  }

  /* =========================================================
     ✅ CON ACCESO → PRECIOS REALES
     ========================================================= */
  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1>Precios reales en Cartagena</h1>

      <ul style={{ marginTop: "1.5rem", lineHeight: 1.8 }}>
        <li>🍽️ Almuerzo corriente: $15.000 – $30.000 COP</li>
        <li>🚕 Taxi aeropuerto – centro: $15.000 – $25.000 COP</li>
        <li>🏖️ Agua en playa: $3.000 – $5.000 COP</li>
        <li>🍺 Cerveza nacional: $5.000 – $8.000 COP</li>
      </ul>

      <p style={{ marginTop: "2rem", color: "#777", fontSize: "0.9rem" }}>
        Datos recopilados y actualizados por Viaja Justo.
      </p>
    </main>
  );
}
