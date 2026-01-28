export function goToWompiCheckout() {
  const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;

  if (!publicKey) {
    alert("Wompi no está configurado");
    return;
  }

  const amountInCents = 500000; // $5.000 COP
  const reference = "viaja-justo-24h";
  const redirectUrl = "https://viaja-justo.vercel.app/pago-exitoso";

  const url =
    "https://checkout.wompi.co/p/?" +
    `public-key=${publicKey}` +
    `&currency=COP` +
    `&amount-in-cents=${amountInCents}` +
    `&reference=${reference}` +
    `&redirect-url=${redirectUrl}`;

  window.location.href = url;
}