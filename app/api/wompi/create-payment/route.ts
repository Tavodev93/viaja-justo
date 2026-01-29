export const runtime = "nodejs";

import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount_in_cents, reference } = body;

    const currency = "COP";
    const integrityKey = process.env.WOMPI_INTEGRITY_KEY!;
    const publicKey = process.env.WOMPI_PUBLIC_KEY!;

    const stringToSign =
      reference + amount_in_cents + currency + integrityKey;

    const signature = crypto
      .createHash("sha256")
      .update(stringToSign)
      .digest("hex");

    const wompiResponse = await fetch(
      "https://production.wompi.co/v1/transactions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${publicKey}`,
        },
        body: JSON.stringify({
          amount_in_cents,
          currency,
          reference,
          signature,
          customer_email: "test@viajajusto.co",
          payment_method: {
            type: "CARD",
            installments: 1,
          },
        }),
      }
    );

    const data = await wompiResponse.json();

    if (!wompiResponse.ok) {
      console.error("WOMPI 422 DETAIL:", data);
      return NextResponse.json(data, { status: wompiResponse.status });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
