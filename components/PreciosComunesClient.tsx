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

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let data: any;
      try {
        data = JSON.parse(text);
      } catch {
        console.error("La respuesta no es JSON válido");
        alert("Respuesta inválida del servidor");
        return;
      }

      console.log("STATUS:", response.status);
      console.log("RESPONSE DATA:", data);

      if (!response.ok) {
        alert("Error creando el pago");
        return;
      }

      // 🔑 Obtener URL real de pago (según estructura de Wompi)
      const paymentUrl =
        data?.data?.redirect_url ||
        data?.data?.payment_link?.url;

      if (!paymentUrl) {
        console.error("No se recibió URL de pago", data);
        alert("No se pudo obtener el enlace de pago");
        return;
      }

      // 🚀 Redirección segura
      window.location.href = paymentUrl;

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
