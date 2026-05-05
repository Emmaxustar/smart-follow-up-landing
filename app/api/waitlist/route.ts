import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const sheetsWebhookUrl = process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL;

  if (!sheetsWebhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Missing NEXT_PUBLIC_SHEETS_WEBHOOK_URL" },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const submittedAt =
      typeof body.submittedAt === "string"
        ? body.submittedAt
        : new Date().toISOString();

    const payload = new URLSearchParams();
    payload.append("email", email);
    payload.append("submittedAt", submittedAt);

    const response = await fetch(sheetsWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: payload.toString(),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: `Apps Script returned ${response.status}`,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown waitlist error";

    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 },
    );
  }
}
