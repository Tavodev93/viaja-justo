import { NextResponse } from "next/server";
import crypto from "crypto";

const SECRET = process.env.ACCESS_COOKIE_SECRET!;

function sign(data: string) {
  return crypto
    .createHmac("sha256", SECRET)
    .update(data)
    .digest("hex");
}

export async function POST(request: Request) {
  const { city } = await request.json();

  if (!city) {
    return NextResponse.json({ error: "city required" }, { status: 400 });
  }

  const payload = JSON.stringify({
    cities: [city],
    issuedAt: Date.now(),
  });

  const signature = sign(payload);

  const value = JSON.stringify({ payload, signature });

  const res = NextResponse.json({ ok: true });

  res.cookies.set({
    name: "viaja_justo_access",
    value,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return res;
}
