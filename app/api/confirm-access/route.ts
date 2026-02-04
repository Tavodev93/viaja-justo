import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { city } = body;

  if (!city) {
    return NextResponse.json(
      { error: "city is required" },
      { status: 400 }
    );
  }

  const response = NextResponse.json({ ok: true });

  response.cookies.set({
    name: "viaja_justo_access",
    value: JSON.stringify({
      cities: [city],
      createdAt: Date.now(),
    }),
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
