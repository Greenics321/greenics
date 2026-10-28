import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { SERVICE_INTERESTS } from "@/lib/constants";
import { isRateLimited, jsonError } from "@/lib/submissions";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  fullName: z.string().trim().min(1).max(120),
  company: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email().max(200),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^[+\d\s()-]*$/)
    .optional()
    .default(""),
  service: z.enum(
    SERVICE_INTERESTS as unknown as [string, ...string[]]
  ),
  message: z.string().trim().min(10).max(5000),
  website: z.string().optional(),
});

export async function POST(req: Request) {
  if (isRateLimited(req)) {
    return jsonError(
      "Too many requests. Please try again later.",
      429
    );
  }

  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return jsonError("Invalid submission.", 400);
  }

  const { website, ...data } = parsed.data;

  // Ignore bot submissions that fill the hidden honeypot field.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (
    !process.env.RESEND_API_KEY ||
    !process.env.CONTACT_TO_EMAIL ||
    !process.env.CONTACT_FROM_EMAIL
  ) {
    console.error("Contact form email configuration is missing.");

    return jsonError(
      "Email service is not configured.",
      500
    );
  }

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: data.email,
      subject: `New Website Enquiry: ${data.service}`,
      text: [
        "New enquiry received from the Greenics website.",
        "",
        `Name: ${data.fullName}`,
        `Company: ${data.company || "Not provided"}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not provided"}`,
        `Service: ${data.service}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("[form:contact] Resend error:", error);

      return jsonError(
        "Could not send your enquiry. Please try again later.",
        502
      );
    }

    console.info("[form:contact] Email sent:", emailData?.id);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[form:contact] Delivery failed:", err);

    return jsonError(
      "Could not send your enquiry. Please try again later.",
      502
    );
  }
}