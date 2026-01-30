export const runtime = "nodejs";

import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const amount_in_cents: number = body.amount_in_cents;
    const reference: string = body.reference;

    if (!amount_in_cents || !reference) {
      return NextResponse.json(
        { error: "amount_in_cents and reference are required" },
        { status: 400 }
      );
    }

    const currency = "COP";

    const integrityKey = process.env.WOMPI_INTEGRITY_KEY;
    const privateKey = process.env.WOMPI_PRIVATE_KEY;

    if (!integrityKey || !privateKey) {
      return NextResponse.json(
        { error: "Wompi keys not configured" },
        { status: 500 }
      );
    }

    // 🔐 Firma de integridad
    const stringToSign =
      reference + amount_in_cents + currency + integrityKey;

    const signature = crypto
      .createHash("sha256")
      .update(stringToSign)
      .digest("hex");

    // 💳 Crear Payment Link (SANDBOX / TEST)
    const wompiResponse = await fetch(
      "https://sandbox.wompi.co/v1/payment_links",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${privateKey}`,
        },
        body: JSON.stringify({
          name: "Viaja Justo Acceso",
          description: "Pago único Viaja Justo",
          single_use: true,
          collect_shipping: false,
          amount_in_cents,
          currency,
          reference,
          signature,
          redirect_url: "https://viaja-justo.vercel.app/gracias",
        }),
      }
    );

    const data = await wompiResponse.json();

    if (!wompiResponse.ok) {
      console.error("❌ WOMPI ERROR:", data);
      return NextResponse.json(data, { status: wompiResponse.status });
    }

    // 🔑 ESTA ES LA URL REAL DEL CANAL DE PAGOS
    const checkoutUrl = data?.data?.permalink;

    if (!checkoutUrl) {
      console.error("❌ No checkout URL from Wompi:", data);
      return NextResponse.json(
        { error: "No checkout URL returned by Wompi" },
        { status: 500 }
      );
    }

    // ✅ RESPUESTA LIMPIA AL FRONTEND
    return NextResponse.json(
      { checkout_url: checkoutUrl },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ SERVER ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
