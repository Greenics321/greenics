"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaSpinner } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { SERVICE_INTERESTS } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

type FormErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [values, setValues] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!values.fullName.trim()) e.fullName = "Please enter your full name.";
    if (!values.email.trim()) e.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(values.email)) e.email = "Please enter a valid email address.";
    if (values.phone && !/^[+\d\s()-]{6,20}$/.test(values.phone))
      e.phone = "Please enter a valid phone number.";
    if (!values.service) e.service = "Please select a service.";
    if (!values.message.trim()) e.message = "Please tell us how we can help.";
    else if (values.message.trim().length < 10)
      e.message = "Please provide a few more details (10+ characters).";
    return e;
  }

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const honeypot = (ev.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      setValues({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  function field(
    name: keyof typeof values,
    label: string,
    opts?: { type?: string; placeholder?: string; required?: boolean; autoComplete?: string }
  ) {
    const error = errors[name as keyof FormErrors];
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={name}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
        >
          {label}
          {opts?.required && <span className="ml-1 text-brand">*</span>}
        </label>
        <input
          id={name}
          name={name}
          type={opts?.type ?? "text"}
          required={opts?.required}
          placeholder={opts?.placeholder}
          autoComplete={opts?.autoComplete}
          value={values[name]}
          onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className="h-11 rounded-md border border-hairline-strong bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/40"
        />
        {error && (
          <span id={`${name}-error`} className="flex items-center gap-1.5 text-xs text-red-400">
            <FaExclamationTriangle className="h-3 w-3" aria-hidden="true" />
            {error}
          </span>
        )}
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-brand/30 bg-surface p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/15">
          <FaCheckCircle className="h-7 w-7 text-brand" aria-hidden="true" />
        </div>
        <h3 className="mt-5 font-display text-xl font-bold text-foreground">
          Enquiry received
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out to Greenics Enterprises. Our team will
          review your enquiry and respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-hairline bg-surface p-6 sm:p-8"
    >
      {/* Honeypot: hidden from people, filled by bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {field("fullName", "Full Name", { required: true, placeholder: "Your name", autoComplete: "name" })}
        {field("company", "Company Name", { placeholder: "Company (optional)", autoComplete: "organization" })}
        {field("email", "Email", { type: "email", required: true, placeholder: "you@company.com", autoComplete: "email" })}
        {field("phone", "Phone", { type: "tel", placeholder: "+91 90000 00000", autoComplete: "tel" })}
      </div>

      {/* Service */}
      <div className="mt-5 flex flex-col gap-2">
        <label
          htmlFor="service"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
        >
          Service Interested In<span className="ml-1 text-brand">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={values.service}
          onChange={(e) => setValues((v) => ({ ...v, service: e.target.value }))}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          className="h-11 rounded-md border border-hairline-strong bg-surface px-3 text-sm text-foreground transition-colors focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/40"
        >
          <option value="" disabled>
            Select a service…
          </option>
          {SERVICE_INTERESTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <span id="service-error" className="flex items-center gap-1.5 text-xs text-red-400">
            <FaExclamationTriangle className="h-3 w-3" aria-hidden="true" />
            {errors.service}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="mt-5 flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
        >
          Message<span className="ml-1 text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your requirements, scope, geography and timeline…"
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="rounded-md border border-hairline-strong bg-surface p-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/40"
        />
        {errors.message && (
          <span id="message-error" className="flex items-center gap-1.5 text-xs text-red-400">
            <FaExclamationTriangle className="h-3 w-3" aria-hidden="true" />
            {errors.message}
          </span>
        )}
      </div>

      {status === "error" && Object.keys(errors).length === 0 && (
        <div className="mt-5 flex items-center gap-2 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          <FaExclamationTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <FaSpinner className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send Enquiry
              <FaArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </>
          )}
        </Button>
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to be contacted about your enquiry. We
          respond within one business day.
        </p>
      </div>
    </form>
  );
}

export default ContactForm;
