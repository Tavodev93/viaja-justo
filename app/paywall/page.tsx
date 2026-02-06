'use client'

export default function PaywallPage() {

  async function pagar() {
    const res = await fetch('/api/create-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'test@viajajusto.com', // provisional
      }),
    })

    const data = await res.json()

    if (data.checkoutUrl) {
      window.location.href = data.checkoutUrl
    } else {
      alert('Error iniciando el pago')
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Desbloquea la comparación de precios por 24 horas</h1>
      <p>Accede a precios reales y compara opciones en tiempo real.</p>
      <h2>$5.000 COP · acceso por 24 horas</h2>

      <button
        onClick={pagar}
        style={{
          padding: '12px 20px',
          fontSize: 16,
          marginTop: 20,
          cursor: 'pointer',
        }}
      >
        Desbloquear acceso
      </button>
    </div>
  )
}
