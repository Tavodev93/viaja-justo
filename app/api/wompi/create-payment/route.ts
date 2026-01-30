export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const amount_in_cents = body.amount_in_cents;
    const reference = body.reference;
    const customer_email =
      body.customer_email || "cliente@viaja-justo.com";

    if (!amount_in_cents || !reference) {
      return NextResponse.json(
        { error: "amount_in_cents and reference are required" },
        { status: 400 }
      );
    }

    const privateKey = process.env.WOMPI_PRIVATE_KEY;

    if (!privateKey) {
      return NextResponse.json(
        { error: "Wompi private key not configured" },
        { status: 500 }
      );
    }

    const wompiResponse = await fetch(
      "https://sandbox.wompi.co/v1/checkout/sessions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${privateKey}`,
        },
        body: JSON.stringify({
          amount_in_cents,
          currency: "COP",
          reference,
          customer_email,
          redirect_url: "https://viaja-justo.vercel.app/gracias",
          payment_method_types: ["CARD"],
        }),
      }
    );

    const data = await wompiResponse.json();

    if (!wompiResponse.ok) {
      console.error("❌ WOMPI ERROR:", data);
      return NextResponse.json(data, { status: wompiResponse.status });
    }

    const checkout_url = data?.data?.checkout_url;

    if (!checkout_url) {
      console.error("❌ No checkout URL from Wompi:", data);
      return NextResponse.json(
        { error: "No checkout URL returned by Wompi" },
        { status: 500 }
      );
    }

    return NextResponse.json({ checkout_url });
  } catch (error) {
    console.error("❌ SERVER ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
