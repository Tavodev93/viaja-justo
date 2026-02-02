import { NextResponse } from "next/server";
import MercadoPago from "mercadopago";
import { Preference } from "mercadopago";

const mp = new MercadoPago({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

const preferenceClient = new Preference(mp);

export async function POST() {
  try {
    const preference = {
      items: [
        {
          title: "Aporte Viaja Justo",
          quantity: 1,
          currency_id: "COP",
          unit_price: 5000,
        },
      ],
      back_urls: {
        success: "https://viaja-justo.vercel.app/success",
        failure: "https://viaja-justo.vercel.app/failure",
        pending: "https://viaja-justo.vercel.app/pending",
      },
      // 🔴 auto_return QUITADO
    };

    const response = await preferenceClient.create({ body: preference });

    return NextResponse.json({
      id: response.id,
      init_point: response.init_point,
    });
  } catch (error) {
    console.error("ERROR MERCADOPAGO:", error);
    return NextResponse.json(
      { error: error?.message || "Error creando el pago" },
      { status: 500 }
    );
  }
}
