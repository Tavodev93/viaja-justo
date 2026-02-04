import { NextRequest, NextResponse } from "next/server";
import MercadoPagoConfig, { Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.type !== "payment") {
      return NextResponse.json({ received: true });
    }

    const paymentId = body.data?.id;
    if (!paymentId) {
      return NextResponse.json({ error: "missing payment id" }, { status: 400 });
    }

    const payment = await new Payment(client).get({ id: paymentId });

    console.log("💰 PAGO RECIBIDO:", {
      id: payment.id,
      status: payment.status,
      amount: payment.transaction_amount,
      email: payment.payer?.email,
    });

    if (payment.status === "approved") {
      // aquí luego conectamos DB / acceso / email
      console.log("✅ PAGO APROBADO");
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("❌ Error webhook MercadoPago", err);
    return NextResponse.json({ error: "webhook error" }, { status: 500 });
  }
}
