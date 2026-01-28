"use client";

export default function PreciosComunesClient() {
  console.log("CLIENT ACTIVO");

  return (
    <div style={{ padding: 40 }}>
      <h1>DEBUG CLIENT</h1>

      <button
        onClick={() => alert("CLICK FUNCIONA")}
        style={{ padding: 20, background: "yellow" }}
      >
        BOTÓN DEBUG
      </button>
    </div>
  );
}