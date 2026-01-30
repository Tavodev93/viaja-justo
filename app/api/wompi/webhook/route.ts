import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const signature = req.headers.get("x-wompi-signature");
    if (!signature) {
      return NextResponse.json({ error: "Signature missing" }, { status: 401 });
    }

    const rawBody = await req.text();
    const secret = process.env.WOMPI_WEBHOOK_SECRET!;

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const body = JSON.parse(rawBody);
    const transaction = body?.data?.transaction;

    if (!transaction) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const payment = {
      wompi_id: transaction.id,
      reference: transaction.reference,
      status: transaction.status,
      amount_in_cents: transaction.amount_in_cents,
      created_at: transaction.created_at,
    };

    console.log("💾 PAGO REGISTRADO:", payment);

    // 🔓 Aquí decidimos acceso (siguiente paso)
    if (payment.status === "APPROVED") {
      console.log("✅ PAGO APROBADO — habilitar acceso");
    } else {
      console.log("⏳ PAGO NO APROBADO:", payment.status);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}
