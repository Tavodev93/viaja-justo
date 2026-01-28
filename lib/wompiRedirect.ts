export function redirectToWompi() {
  const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;

  if (!publicKey) {
    alert("Error: Wompi public key no encontrada");
    return;
  }

  const amountInCents = 500000; // $5.000 COP
  const reference = `viaja-justo-${Date.now()}`;
  const redirectUrl = "https://viaja-justo.vercel.app/pago-exitoso";

  const wompiUrl =
    "https://checkout.wompi.co/p/?" +
    `public-key=${publicKey}` +
    `&currency=COP` +
    `&amount-in-cents=${amountInCents}` +
    `&reference=${reference}` +
    `&redirect-url=${encodeURIComponent(redirectUrl)}`;

  window.location.href = wompiUrl;
}
