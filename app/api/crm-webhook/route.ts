import { NextResponse } from "next/server";

interface CrmPayload {
  formName: string;
  slug: string;
  niche: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  sourcePath: string;
  submittedAt: string;
}

export async function POST(request: Request) {
  let payload: CrmPayload;

  try {
    payload = (await request.json()) as CrmPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
  }

  const crmWebhookUrl = process.env.CRM_WEBHOOK_URL;
  const crmWebhookSecret = process.env.CRM_WEBHOOK_SECRET;

  if (!crmWebhookUrl) {
    return NextResponse.json({ ok: true, forwarded: false, reason: "CRM_WEBHOOK_URL not configured" }, { status: 202 });
  }

  try {
    const response = await fetch(crmWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(crmWebhookSecret ? { "x-webhook-secret": crmWebhookSecret } : {}),
      },
      body: JSON.stringify({
        source: "template-showcase",
        lead: payload,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          forwarded: false,
          status: response.status,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, forwarded: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, forwarded: false, error: "Failed to reach CRM webhook" }, { status: 502 });
  }
}
