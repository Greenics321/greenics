import { NextResponse } from "next/server";
import { z } from "zod";
import { deliver, isRateLimited, jsonError } from "@/lib/submissions";

const schema = z.object({
  email: z.string().trim().email().max(200),
  website: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  if (isRateLimited(req)) return jsonError("Too many requests. Please try again later.", 429);

  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return jsonError("Please enter a valid email address.", 400);
  if (parsed.data.website) return NextResponse.json({ ok: true });

  try {
    await deliver("newsletter", { email: parsed.data.email });
  } catch (err) {
    console.error("[form:newsletter] delivery failed", err);
    return jsonError("Subscription failed. Please try again.", 502);
  }
  return NextResponse.json({ ok: true });
}
