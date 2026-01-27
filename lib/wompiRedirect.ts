// lib/wompiRedirect.ts

export function goToWompiCheckout() {
  if (typeof window === "undefined") return;

  const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;

  if (!publicKey) {
    alert("Error: Wompi public key no configurada");
    return;
  }

  const amountInCents = 5000 * 100; // $5.000 COP
  const reference = `viaja-justo-${Date.now()}`;

  const redirectUrl = `${window.location.origin}/pago-exitoso`;

  const url =
    "https://checkout.wompi.co/p/?" +
    `public-key=${publicKey}` +
    `&currency=COP` +
    `&amount-in-cents=${amountInCents}` +
    `&reference=${reference}` +
    `&redirect-url=${encodeURIComponent(redirectUrl)}`;

  window.location.href = url;
}
