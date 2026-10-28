import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { partnerCategories, PARTNERS_PAGE } from "@/lib/partners";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Partners & Ecosystem — Accountable Relationships Across Four Verticals",
  description:
    "The types of partners Greenics works with across waste, logistics, trading and cybersecurity — municipal bodies, industrial clients, operators, vendors, facilities and auditors. Permissioned, not promotional.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Partners & Ecosystem — Greenics Enterprises",
    description:
      "An ecosystem of accountable relationships across our four verticals.",
    images: [{ url: "/images/hero-city.webp", width: 1200, height: 630, alt: "Greenics Partners" }],
  },
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-city.webp"
            alt="Industrial ecosystem of partners and operations"
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
                {PARTNERS_PAGE.hero.label}
              </span>
            </span>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {PARTNERS_PAGE.hero.title}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {PARTNERS_PAGE.hero.description}
            </p>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Principles */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="How we partner"
            title="Four principles behind every relationship"
            description="These principles govern how Greenics engages with partners — and how partners can expect to be treated."
            align="center"
            className="reveal"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {PARTNERS_PAGE.principles.map((p, i) => {
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

      {/* Honesty banner */}
      <section className="border-b border-hairline bg-background py-6">
        <Container>
          <div className="reveal flex items-start gap-3 rounded-lg border border-brand/30 bg-brand/5 p-4 lg:p-5">
            <FaInfoCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <span className="font-semibold text-foreground">A note on naming — </span>
              The categories below describe the *type* of partner we work with. We do not
              publish named partners or clients without written permission. If you want a
              named reference in your sector, ask us — we will make an introduction under NDA.
            </p>
          </div>
        </Container>
      </section>

      {/* Partner categories */}
      <section className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="The ecosystem"
            title="Eight categories of working relationship"
            description="Each category describes a type of partner — not a named partner. Engagement models vary by vertical and scope."
            className="reveal max-w-2xl"
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {partnerCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className={`reveal reveal-delay-${(i % 2) + 1} card-accent group relative flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface p-7 transition-colors hover:border-brand/40 lg:p-8`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                      <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  {/* Examples */}
                  <div className="mt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                      Typical engagements
                    </p>
                    <ul className="mt-3 space-y-2">
                      {cat.examples.map((ex) => (
                        <li
                          key={ex}
                          className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Engagement model */}
                  <div className="mt-5 border-t border-hairline pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      How we engage
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {cat.engagement}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Become a partner */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <div className="reveal relative mx-auto max-w-3xl overflow-hidden rounded-lg border border-brand/30 bg-gradient-to-br from-brand/10 via-surface to-surface p-8 text-center lg:p-12">
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
              aria-hidden="true"
            />
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              <span className="brand-dot h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              For prospective partners
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
              Want to work with Greenics?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We are always open to structured conversations with municipal bodies,
              industrial clients, technology vendors, processing facilities and independent
              auditors who share our operating standards. Tell us about your organisation
              and the category of engagement you have in mind.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-brand px-6 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-dark"
              >
                Introduce your organisation
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-hairline-strong px-6 text-sm font-semibold text-foreground transition-colors hover:border-brand/50 hover:text-brand"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        label="Need a named reference?"
        title="Ask us for a partner or client introduction in your sector."
        description="We will introduce you to a relevant contact — under NDA, on a call, no salespeople present."
        primaryLabel="Get in Touch"
        secondaryLabel="Our Services"
      />
    </>
  );
}
