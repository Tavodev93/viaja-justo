import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log("📩 Webhook Wompi recibido:", body);

  const transaction = body?.data?.transaction;

  if (!transaction) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (transaction.status === "APPROVED") {
    // 👉 aquí confirmamos pago real
    // más adelante guardaremos acceso (DB / token)
    console.log("✅ Pago aprobado:", transaction.reference);
  }

  return NextResponse.json({ received: true });
}