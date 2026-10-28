"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { FaArrowRight, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { clsx } from "clsx";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Footer newsletter signup. Validates email, shows loading + success states.
 * Posts to /api/newsletter.
 */
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "failed">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-brand">
        <FaCheckCircle className="h-3.5 w-3.5" aria-hidden="true" />
        Subscribed. Thank you.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error" || status === "failed") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? "newsletter-error" : undefined}
          className="h-11 min-w-0 flex-1 rounded-md border border-hairline-strong bg-background px-3 text-base md:text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/40"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          aria-label="Subscribe to newsletter"
          className={clsx(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-brand/40 bg-brand/10 text-brand transition-colors hover:bg-brand hover:text-brand-foreground disabled:opacity-60"
          )}
        >
          {status === "submitting" ? (
            <FaSpinner className="h-3 w-3 animate-spin" aria-hidden="true" />
          ) : (
            <FaArrowRight className="h-3 w-3" aria-hidden="true" />
          )}
        </button>
      </div>
      {status === "error" && (
        <span id="newsletter-error" className="text-[11px] text-red-400">
          Please enter a valid email address.
        </span>
      )}
      {status === "failed" && (
        <span role="alert" className="text-[11px] text-red-400">
          Subscription failed. Please try again.
        </span>
      )}
    </form>
  );
}

export default NewsletterSignup;
