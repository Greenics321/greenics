import { NextResponse } from "next/server";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

/** Simple in-memory per-IP rate limit (per server instance). */
export function isRateLimited(req: Request): boolean {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

/**
 * Delivers a submission to FORM_WEBHOOK_URL (Zapier, Make, Slack, Formspree,
 * Google Apps Script, etc.). Always logged server-side so nothing is lost.
 */
export async function deliver(kind: "contact" | "newsletter", data: Record<string, string>) {
  const payload = { kind, submittedAt: new Date().toISOString(), ...data };
  console.info(`[form:${kind}]`, JSON.stringify(payload));

  const url = process.env.FORM_WEBHOOK_URL;
  if (!url) return;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
}

export function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}
