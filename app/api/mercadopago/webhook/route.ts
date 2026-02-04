import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST() {
  console.log("🔥 WEBHOOK MERCADOPAGO HIT");
  return NextResponse.json({ received: true });
}
