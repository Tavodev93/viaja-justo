"use client";

export default function PayButton() {
  const handlePay = async () => {
    try {
      const res = await fetch("/api/create-payment", {
        method: "POST",
      });

      const data = await res.json();

      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert("No se pudo iniciar el pago");
      }
    } catch (error) {
      console.error("Error iniciando pago:", error);
      alert("Error iniciando el pago");
    }
  };

  return (
    <button
      onClick={handlePay}
      style={{
        padding: "14px 24px",
        backgroundColor: "#009ee3",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
      }}
    >
      Aportar $5.000
    </button>
  );
}
