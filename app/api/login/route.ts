import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { identifier } = await request.json().catch(() => ({ identifier: "" }));
  if (!identifier || typeof identifier !== "string") {
    return NextResponse.json({ ok: false, error: "invalid_identifier" }, { status: 400 });
  }
  // R?ponse simul?e (aucune authentification r?elle)
  return NextResponse.json({ ok: true });
}
