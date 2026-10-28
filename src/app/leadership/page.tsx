import type { Metadata } from "next";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { LEADERSHIP } from "@/lib/leadership";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Leadership & Governance — Principles Over Personalities",
  description:
    "Greenics operates against documented standards and leadership pillars — not invented bios. Read the principles our leadership is held to, and the governance you can hold us to.",
  alternates: { canonical: "/leadership" },
  openGraph: {
    title: "Leadership & Governance — Greenics Enterprises",
    description:
      "Principles, not personalities — the operating standards our leadership is held to.",
    images: [{ url: "/images/hero-city.webp", width: 1200, height: 630, alt: "Greenics Leadership" }],
  },
};

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-city.webp"
            alt="Industrial operations leadership context"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,17,31,0.97)_0%,rgba(3,17,31,0.82)_45%,rgba(3,17,31,0.45)_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.5)_0%,rgba(3,17,31,0.2)_40%,rgba(3,17,31,0.88)_100%)]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" aria-hidden="true" />
        </div>
        <Container className="relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-3">
              <span className="brand-dot h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
                {LEADERSHIP.hero.label}
              </span>
            </span>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {LEADERSHIP.hero.title}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {LEADERSHIP.hero.description}
            </p>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Operating principles */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Operating principles"
            title="The four principles behind every leadership decision"
            description="These principles govern how Greenics leaders make calls — from a roster change to a new vertical. They are documented so they can be challenged."
            align="center"
            className="reveal"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {LEADERSHIP.principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.number}
                  className={`reveal reveal-delay-${(i % 2) + 1} card-accent group relative overflow-hidden rounded-lg border border-hairline bg-surface p-7 transition-colors hover:border-brand/40 lg:p-8`}
                >
                  <div
                    className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-brand/5 blur-3xl"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                      <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                    </div>
                    <span className="font-display text-3xl font-bold text-brand/20">
                      {p.number}
                    </span>
                  </div>
                  <h3 className="relative mt-5 font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
                    {p.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Leadership pillars */}
      <section className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Leadership pillars"
            title="What we expect our leaders to embody"
            description="These are the six pillars our leadership team is reviewed against — both by their peers and, where appropriate, by clients."
            align="center"
            className="reveal"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {LEADERSHIP.pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} card-accent group relative overflow-hidden rounded-lg border border-hairline bg-surface p-7 transition-colors hover:border-brand/40 lg:p-8`}
                >
                  <div
                    className="absolute right-0 top-0 h-16 w-16 -translate-y-8 translate-x-8 rounded-full bg-brand/5 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-5 font-display text-base font-bold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Governance commitments */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                label="Governance"
                title="Commitments you can verify"
                description="Governance is only real if it produces evidence. These are the operational commitments every Greenics engagement produces — and that clients can audit."
                className="reveal"
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {LEADERSHIP.governance.map((g, i) => (
                  <li
                    key={g}
                    className={`reveal reveal-delay-${(i % 4) + 1} flex items-start gap-3 rounded-lg border border-hairline bg-surface p-4 transition-colors hover:border-brand/40`}
                  >
                    <FaCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    <span className="text-sm font-medium leading-relaxed text-foreground">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing statement */}
      <section className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <div className="reveal relative mx-auto max-w-3xl overflow-hidden rounded-lg border border-brand/30 bg-gradient-to-br from-brand/10 via-surface to-surface p-8 text-center lg:p-12">
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
              aria-hidden="true"
            />
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              <span className="brand-dot h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Open challenge
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              {LEADERSHIP.closing.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {LEADERSHIP.closing.body}
            </p>
          </div>
        </Container>
      </section>

      <CTABand
        label="Talk to our leadership team"
        title="Engagements start with a conversation, not a pitch."
        description="If you are evaluating Greenics for a multi-year or multi-vertical engagement, ask to speak with the executive who will own the outcome. We will introduce them before the contract."
        primaryLabel="Get in Touch"
        secondaryLabel="Our Services"
      />
    </>
  );
}
