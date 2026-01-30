import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const signature = req.headers.get("x-wompi-signature");

    if (!signature) {
      console.error("❌ Firma no enviada");
      return NextResponse.json(
        { error: "Signature missing" },
        { status: 401 }
      );
    }

    const rawBody = await req.text();

    const secret = process.env.WOMPI_WEBHOOK_SECRET;
    if (!secret) {
      console.error("❌ WOMPI_WEBHOOK_SECRET no configurado");
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 }
      );
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    if (signature !== expectedSignature) {
      console.error("❌ Firma inválida");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    const body = JSON.parse(rawBody);

    console.log("🔔 WEBHOOK WOMPI VERIFICADO");
    console.log(JSON.stringify(body, null, 2));

    // ⏭️ aquí va la lógica de negocio (siguiente paso)

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("❌ Error en webhook:", error);
    return NextResponse.json(
      { error: "Webhook error" },
      { status: 400 }
    );
  }
}
