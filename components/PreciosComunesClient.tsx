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

      const data = await response.json();

      if (!response.ok) {
        console.error("ERROR:", data);
        alert("Error creando el pago");
        return;
      }

      // 🔥 REDIRECCIÓN AL CHECKOUT WOMPI
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
          fontSize: "16px",
        }}
      >
        Pagar $5.000
      </button>
    </div>
  );
}
