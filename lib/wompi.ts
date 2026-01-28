export function openWompiCheckout() {
  if (typeof window === "undefined") return;

  const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;

  if (!publicKey) {
    alert("Error: Wompi public key no encontrada");
    return;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const WidgetCheckout = window.WidgetCheckout;

  if (!WidgetCheckout) {
    alert("Wompi aún no ha cargado");
    return;
  }

  const checkout = new WidgetCheckout(
    {
      publicKey,
      currency: "COP",
      amountInCents: 500000,
      reference: "viaja-justo-24h",
      redirectUrl: "https://viaja-justo.vercel.app/pago-exitoso",
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (result: any) => {
      const { transaction } = result;

      if (transaction?.status === "APPROVED") {
        console.log("Pago aprobado");
      }

      if (transaction?.status === "DECLINED") {
        console.log("Pago rechazado");
      }
    }
  );

  checkout.open();
}