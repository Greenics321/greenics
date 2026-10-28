import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { PROCESS_PAGE } from "@/lib/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { FaqAccordion } from "@/components/contact/FaqAccordion";

export const metadata: Metadata = {
  title: "How We Work — From Diagnostic to Delivery & Reporting",
  description:
    "Every Greenics engagement follows the same disciplined four-phase arc: diagnostic, proposal, delivery and reporting. One named owner, documented SLAs, auditable metrics, no scope-creep theatre.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "How We Work — Greenics Enterprises",
    description:
      "From diagnostic to delivery — and the reporting that follows. A disciplined four-phase engagement model.",
    images: [{ url: "/images/about.webp", width: 1200, height: 630, alt: "Greenics Process" }],
  },
};

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/about.webp"
            alt="Greenics corporate operations"
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
                {PROCESS_PAGE.hero.label}
              </span>
            </span>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {PROCESS_PAGE.hero.title}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {PROCESS_PAGE.hero.description}
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" size="lg" withArrow>
                Start a Diagnostic
              </Button>
              <Button href="/case-studies" size="lg" variant="outline">
                See It In Practice
              </Button>
            </div>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Phases — vertical timeline */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="The four phases"
            title="A disciplined arc, not a pick-and-mix"
            description="Every engagement — waste, logistics, trading or cybersecurity — runs through these four phases. The depth scales to the scope; the discipline does not."
            className="reveal max-w-2xl"
          />

          <div className="mt-16 space-y-4 lg:space-y-5">
            {PROCESS_PAGE.phases.map((phase, i) => {
              const Icon = phase.icon;
              const isLast = i === PROCESS_PAGE.phases.length - 1;
              return (
                <div
                  key={phase.number}
                  className={`reveal reveal-delay-${(i % 3) + 1} card-accent group relative grid grid-cols-1 gap-6 rounded-lg border border-hairline bg-surface p-6 transition-colors hover:border-brand/40 lg:grid-cols-[auto_1fr_1fr] lg:gap-10 lg:p-8`}
                >
                  {/* Phase number + icon */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                    <span className="font-display text-4xl font-bold text-gradient-brand lg:text-5xl">
                      {phase.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                      <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title + description */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                        {phase.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline-strong px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        <FaArrowRight className="h-2 w-2 text-brand" aria-hidden="true" />
                        {phase.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {phase.description}
                    </p>
                    {/* Activities */}
                    <ul className="mt-5 space-y-2">
                      {phase.activities.map((act) => (
                        <li
                          key={act}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverable */}
                  <div className="lg:border-l lg:border-hairline lg:pl-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
                      What you get
                    </p>
                    <div className="mt-3 rounded-md border border-brand/20 bg-brand/5 p-4">
                      <p className="text-sm leading-relaxed text-foreground">
                        {phase.deliverable}
                      </p>
                    </div>
                  </div>

                  {/* Connector (desktop) */}
                  {!isLast && (
                    <div
                      className="absolute -bottom-3 left-12 hidden h-6 w-px bg-gradient-to-b from-brand/40 to-transparent lg:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Commitments */}
      <section className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Operating commitments"
            title="What we promise, in writing, on every engagement"
            description="These are not aspirational values — they are the operating commitments documented in every Greenics proposal."
            align="center"
            className="reveal"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {PROCESS_PAGE.commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
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
                    {c.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                label="Common questions"
                title="How engagements actually run"
                description="The practical questions clients ask before signing. If yours isn't here, ask us directly — we answer within one business day."
                className="reveal"
              />
              <div className="reveal reveal-delay-2 mt-8">
                <Button href="/contact" size="md" withArrow>
                  Ask your question
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <FaqAccordion items={PROCESS_PAGE.faqs} />
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        label="Ready to start?"
        title="Tell us the problem you're trying to solve."
        description="We'll tell you honestly whether a diagnostic makes sense — and if not, what would. No obligation, no sales theatre."
        primaryLabel="Start a Diagnostic"
        secondaryLabel="See Case Studies"
      />
    </>
  );
}
