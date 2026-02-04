import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("🔥 WEBHOOK HIT");
  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
