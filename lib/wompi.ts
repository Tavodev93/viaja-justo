export function openWompiCheckout() {
  if (typeof window === "undefined") return;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const WidgetCheckout = window.WidgetCheckout;

  if (!WidgetCheckout) {
    alert("Wompi no ha cargado correctamente");
    return;
  }

  const checkout = new WidgetCheckout(
    {
      publicKey: process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY!,
      currency: "COP",
      amountInCents: 500000,
      reference: "viaja-justo-24h",
      redirectUrl: "https://viaja-justo.vercel.app/pago-exitoso",
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (result: any) {
      console.log("Respuesta Wompi:", result);

      const transaction = result?.transaction;

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
