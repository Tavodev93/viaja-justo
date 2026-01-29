"use client";

export default function ClientePreciosComunes() {
  const crearPago = async () => {
    console.log("👉 CLICK DETECTADO: crearPago ejecutándose");

    try {
      console.log("👉 Antes del fetch");

      const response = await fetch("/api/wompi/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount_in_cents: 500000,
          reference: "viaja-justo-001",
        }),
      });

      console.log("👉 Después del fetch");

      const text = await response.text();
      console.log("RAW RESPONSE:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        console.error("No es JSON válido");
        alert("Respuesta inválida del servidor");
        return;
      }

      console.log("STATUS:", response.status);
      console.log("RESPONSE DATA:", data);

      if (!response.ok) {
        alert("Error creando el pago");
        return;
      }

      console.log("✅ PAGO CREADO CORRECTAMENTE");

      // window.location.href = data.data.payment_link;
    } catch (error) {
      console.error("❌ ERROR FRONTEND:", error);
      alert("Error creando el pago");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <button
        type="button"
        onClick={crearPago}
        style={{
          padding: "12px 20px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Pagar $5.000
      </button>
    </div>
  );
}
