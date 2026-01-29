"use client";

export default function ClientePreciosComunes() {
  const crearPago = async () => {
    try {
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

      const text = await response.text();
      console.log("RAW RESPONSE:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        console.error("Respuesta no es JSON");
        return;
      }

      console.log("STATUS:", response.status);
      console.log("RESPONSE DATA:", data);

      if (!response.ok) {
        alert("Error creando el pago");
        return;
      }

      window.location.href = data.data.payment_link;
    } catch (error) {
      console.error("FRONTEND ERROR:", error);
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
        }}
      >
        Pagar $5.000
      </button>
    </div>
  );
}
