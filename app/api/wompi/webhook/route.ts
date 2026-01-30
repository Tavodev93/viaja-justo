import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("🔔 WEBHOOK WOMPI RECIBIDO:");
    console.log(JSON.stringify(body, null, 2));

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("❌ Error en webhook:", error);
    return NextResponse.json(
      { error: "Invalid webhook" },
      { status: 400 }
    );
  }
}
