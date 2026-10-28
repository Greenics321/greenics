import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { CAREERS } from "@/lib/careers";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Careers — Build a Career That Does the Work Properly",
  description:
    "Open roles and career streams at Greenics Enterprises across waste management, logistics, trading and cybersecurity. Dignity, fair hours, transparent pay bands and a genuine sustainability brief.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers — Greenics Enterprises",
    description:
      "Build a career that does the work properly — across waste, logistics, trading and cybersecurity.",
    images: [{ url: "/images/about.webp", width: 1200, height: 630, alt: "Greenics Careers" }],
  },
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/about.webp"
            alt="Greenics corporate operations at dusk"
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
                {CAREERS.hero.label}
              </span>
            </span>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {CAREERS.hero.title}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {CAREERS.hero.description}
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" size="lg" withArrow>
                Apply / Introduce Yourself
              </Button>
              <Button href="#streams" size="lg" variant="outline">
                Explore Streams
              </Button>
            </div>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Culture pillars */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="How we work"
            title="Four principles every role is measured against"
            description="These are not poster values — they are the operating standards our teams are held to, from field staff to engineers."
            align="center"
            className="reveal"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {CAREERS.pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`reveal reveal-delay-${(i % 4) + 1} card-accent group relative overflow-hidden rounded-lg border border-hairline bg-surface p-7 transition-colors hover:border-brand/40 lg:p-8`}
                >
                  <div
                    className="absolute right-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full bg-brand/5 blur-2xl"
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

      {/* Career streams */}
      <section id="streams" className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Career streams"
            title="Four verticals, four families of roles"
            description="Each stream runs its own discipline — collection, dispatch, documentation, security — with shared standards across the enterprise."
            className="reveal max-w-2xl"
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {CAREERS.streams.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className={`reveal reveal-delay-${(i % 2) + 1} card-accent group relative flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface p-7 transition-colors hover:border-brand/40 lg:p-8`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                      <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.teams.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-hairline-strong px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Application note */}
          <div className="reveal mt-10 rounded-lg border border-brand/30 bg-gradient-to-br from-brand/10 via-surface to-surface p-7 lg:p-8">
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold text-brand">A note on open roles — </span>
              {CAREERS.applicationNote}
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="What you get"
            title="Benefits that apply to every role"
            description="From field staff to engineers — the baseline is the same. Differentiated only where the role genuinely requires it."
            align="center"
            className="reveal"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {CAREERS.benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} card-accent group relative overflow-hidden rounded-lg border border-hairline bg-surface p-6 transition-colors hover:border-brand/40 lg:p-7`}
                >
                  <div
                    className="absolute right-0 top-0 h-16 w-16 -translate-y-8 translate-x-8 rounded-full bg-brand/5 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-5 font-display text-base font-bold tracking-tight text-foreground">
                    {b.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="How we hire"
            title="A four-step process, designed to be respectful"
            description="No whiteboard riddles, no unpaid take-home marathons, no ghosting. A practical conversation and a paid work sample."
            className="reveal max-w-2xl"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {CAREERS.process.map((step, i) => (
              <div
                key={step.step}
                className={`reveal reveal-delay-${(i % 4) + 1} relative rounded-lg border border-hairline bg-surface p-6 lg:p-7`}
              >
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  Step {step.step}
                </span>
                <h3 className="mt-4 font-display text-base font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                {i < CAREERS.process.length - 1 && (
                  <FaArrowRight
                    className="absolute -right-2 top-10 hidden h-3 w-3 text-brand/40 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Checklist */}
          <div className="reveal mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Send a CV and a short note — no cover-letter theatre",
              "First call is a conversation, not a screening",
              "Work sample is paid and time-boxed",
              "You meet future teammates before deciding",
              "Pay band is documented before the offer",
              "No ghosting — we close every loop",
            ].map((item, i) => (
              <div
                key={item}
                className={`reveal reveal-delay-${(i % 3) + 1} flex items-start gap-3 rounded-lg border border-hairline bg-surface p-4`}
              >
                <FaCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-sm font-medium leading-relaxed text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        label="Ready to apply?"
        title="Tell us which stream fits your background."
        description="Send a short note and your CV via the contact form, or email us directly. We review every introduction — and we close every loop, even when there is no current opening."
        primaryLabel="Introduce Yourself"
        secondaryLabel="Explore Services"
      />
    </>
  );
}
