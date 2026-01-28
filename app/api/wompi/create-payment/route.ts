import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const amountInCents = 500000; // $5.000 COP
    const currency = "COP";
    const reference = `viaja-justo-${Date.now()}`;

    const publicKey = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
    const privateKey = process.env.WOMPI_PRIVATE_KEY;

    if (!publicKey || !privateKey) {
      return NextResponse.json(
        { error: "Wompi keys not configured" },
        { status: 500 }
      );
    }

    /**
     * Firma de integridad Wompi (SHA256)
     * concatenación exacta requerida por Wompi:
     * amount-in-cents + currency + reference + private_key
     */
    const signatureString = `${amountInCents}${currency}${reference}${privateKey}`;

    const signature = crypto
      .createHash("sha256")
      .update(signatureString)
      .digest("hex");

    const redirectUrl =
      "https://viaja-justo.vercel.app/pago-exitoso";

    const checkoutUrl =
      "https://checkout.wompi.co/p/?" +
      `public-key=${publicKey}` +
      `&currency=${currency}` +
      `&amount-in-cents=${amountInCents}` +
      `&reference=${reference}` +
      `&signature=${signature}` +
      `&redirect-url=${encodeURIComponent(redirectUrl)}`;

    return NextResponse.json({
      checkoutUrl,
    });
  } catch (error) {
    console.error("Error creando pago Wompi:", error);
    return NextResponse.json(
      { error: "Error creating payment" },
      { status: 500 }
    );
  }
}
