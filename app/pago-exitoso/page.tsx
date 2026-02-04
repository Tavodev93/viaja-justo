"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PagoExitosoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const confirmAccess = async () => {
      try {
        await fetch("/api/confirm-access", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ city: "cartagena" }),
        });
      } catch (err) {
        console.error("Error confirmando acceso", err);
      } finally {
        setLoading(false);
      }
    };

    confirmAccess();
  }, []);

  if (loading) {
    return <p>Cargando acceso…</p>;
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>✅ Acceso activado</h1>
      <p>
        Ya tienes acceso completo a los precios reales de <b>Cartagena</b>.
      </p>

      <button
        style={{ marginTop: "1rem" }}
        onClick={() => router.push("/precio-comunes-cartagena")}
      >
        👉 Ver precios de Cartagena
      </button>
    </main>
  );
}
