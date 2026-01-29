export const runtime = "nodejs";

import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  return NextResponse.json({ ok: true }, { status: 200 });
  try {
    const body = await request.json();

    const { amount_in_cents, reference } = body;

    if (!amount_in_cents || !reference) {
      return NextResponse.json(
        { error: "amount_in_cents and reference are required" },
        { status: 400 }
      );
    }

    const currency = "COP";

    const integrityKey = process.env.WOMPI_INTEGRITY_KEY;

    if (!integrityKey) {
      return NextResponse.json(
        { error: "WOMPI_INTEGRITY_KEY not configured" },
        { status: 500 }
      );
    }

    const stringToSign =
      reference + amount_in_cents + currency + integrityKey;

    const signature = crypto
      .createHash("sha256")
      .update(stringToSign)
      .digest("hex");

    const response = await fetch(
      "https://sandbox.wompi.co/v1/transactions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.WOMPI_PRIVATE_KEY}`,
        },
        body: JSON.stringify({
          amount_in_cents,
          currency,
          reference,
          signature,
          customer_email: "cliente@correo.com",
          payment_method: {
            type: "CARD",
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("CREATE PAYMENT ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}