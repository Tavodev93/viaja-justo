import PayButton from "@/components/PayButton";

export default function PrecioComunesCartagena() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #cce7ff 0%, #fef6e4 60%, #ffffff 100%)",
        color: "#0b2545",
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Header */}
        <h1
          style={{
            fontSize: "44px",
            marginBottom: "12px",
            fontWeight: "700",
          }}
        >
          Viaja Justo
        </h1>

        <h2
          style={{
            fontSize: "22px",
            fontWeight: "400",
            color: "#1b4965",
            marginBottom: "36px",
          }}
        >
          Precios reales, sin abusos, para turistas y locales.
        </h2>

        {/* Intro */}
        <p
          style={{
            fontSize: "19px",
            lineHeight: "1.7",
            marginBottom: "24px",
          }}
        >
          Viaja Justo es un proyecto que busca visibilizar{" "}
          <strong>precios justos en destinos turísticos</strong>, empezando por
          Cartagena, para reducir cobros excesivos y malas experiencias.
        </p>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "1.7",
            marginBottom: "48px",
          }}
        >
          En muchos lugares, los precios cambian según quién pregunta, no según
          lo que vale. Viaja Justo existe para{" "}
          <strong>poner claridad y confianza</strong> en cada viaje.
        </p>

        {/* Why */}
        <section
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "32px",
            marginBottom: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              fontSize: "26px",
              marginBottom: "16px",
              color: "#1b4965",
            }}
          >
            ¿Por qué existe Viaja Justo?
          </h3>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            <li>💸 Falta de referencias claras de precios</li>
            <li>😕 Turistas pagando de más sin saberlo</li>
            <li>🧭 Información dispersa o inexistente</li>
          </ul>
        </section>

        {/* Contribution */}
        <section
          style={{
            background: "linear-gradient(135deg, #ffd166, #fcbf49)",
            borderRadius: "16px",
            padding: "36px 32px",
            marginBottom: "48px",
            color: "#3a2d00",
          }}
        >
          <h3
            style={{
              fontSize: "26px",
              marginBottom: "16px",
            }}
          >
            ¿Para qué sirve tu aporte de $5.000?
          </h3>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            <li>📊 Mantener la plataforma activa</li>
            <li>🧾 Recopilar y actualizar precios reales</li>
            <li>📍 Crear guías claras por zonas</li>
            <li>🌎 Expandir el proyecto a más ciudades</li>
          </ul>

          <p style={{ fontSize: "16px", opacity: 0.9 }}>
            No es una suscripción. No es una donación eterna.  
            Es un aporte único para construir algo útil.
          </p>
        </section>

        {/* CTA */}
        <div style={{ marginBottom: "56px" }}>
          <PayButton />
          <p
            style={{
              fontSize: "14px",
              marginTop: "10px",
              color: "#1b4965",
            }}
          >
            Pago seguro con MercadoPago
          </p>
        </div>

        {/* FAQ */}
        <section
          style={{
            textAlign: "left",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "32px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              fontSize: "26px",
              marginBottom: "20px",
              color: "#1b4965",
              textAlign: "center",
            }}
          >
            Preguntas frecuentes
          </h3>

          <p>
            <strong>¿Es obligatorio pagar?</strong>
            <br />
            No. El aporte es totalmente voluntario.
          </p>

          <p>
            <strong>¿Qué obtengo a cambio?</strong>
            <br />
            Acceso a información clara sobre precios comunes y apoyo al proyecto.
          </p>

          <p>
            <strong>¿El pago es seguro?</strong>
            <br />
            Sí. Se realiza a través de MercadoPago.
          </p>

          <p>
            <strong>¿Es una suscripción?</strong>
            <br />
            No. Es un único aporte.
          </p>
        </section>
      </div>
    </main>
  );
}
