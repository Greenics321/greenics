import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { caseStudies } from "@/lib/case-studies";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Case Studies — Representative Engagement Scenarios",
  description:
    "Representative engagement scenarios across Greenics' four verticals — waste management, logistics, trading and cybersecurity. Clearly labelled as scenarios, not named clients.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies — Greenics Enterprises",
    description:
      "Representative engagement scenarios across our four practice areas.",
    images: [{ url: "/images/hero-city.webp", width: 1200, height: 630, alt: "Greenics Case Studies" }],
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(140,198,63,0.10)_0%,transparent_60%),radial-gradient(50%_60%_at_20%_90%,rgba(56,189,248,0.07)_0%,transparent_60%)]"
            aria-hidden="true"
          />
        </div>
        <Container className="relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-3">
              <span className="brand-dot h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
                Case Studies
              </span>
            </span>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Representative engagement scenarios
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The engagements below describe the kind of work Greenics takes on
              across our four verticals. They are clearly labelled as
              representative scenarios — not named clients — and do not cite
              invented metrics. Real, permissioned case studies replace these as
              they become available.
            </p>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Honesty banner */}
      <section className="border-b border-hairline bg-background py-6">
        <Container>
          <div className="reveal flex items-start gap-3 rounded-lg border border-brand/30 bg-brand/5 p-4 lg:p-5">
            <FaInfoCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <span className="font-semibold text-foreground">A note on framing — </span>
              Every scenario below is a composite of the engagements we typically take on.
              We do not name clients without written permission, and we do not publish
              metrics we cannot audit. If you want a named, permissioned reference, ask
              us — we will introduce you to a client in your sector directly.
            </p>
          </div>
        </Container>
      </section>

      {/* Case studies grid */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              label="The archive"
              title="Browse all scenarios"
              className="reveal"
            />
            <p className="reveal reveal-delay-1 text-sm text-muted-foreground">
              {caseStudies.length} scenarios · sorted by category
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {caseStudies.map((study, i) => (
              <CaseStudyCard
                key={study.slug}
                study={study}
                priority={i === 0}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        label="Want a named reference?"
        title="Ask us for a client introduction in your sector."
        description="We do not publish named case studies without permission, but we will happily introduce you to a relevant client — under NDA, on a call, no salespeople present."
        primaryLabel="Get in Touch"
        secondaryLabel="Our Services"
      />
    </>
  );
}
