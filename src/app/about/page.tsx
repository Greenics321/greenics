import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { ABOUT } from "@/lib/about";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "About Us — Integrated Enterprise for a Sustainable Future",
  description:
    "Greenics Enterprises Pvt Ltd is an integrated B2B enterprise operating across Waste Management, Logistics, Trading and Cybersecurity — engineered for sustainability, reliability and security.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/about.webp"
            alt="Greenics corporate headquarters at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,17,31,0.97)_0%,rgba(3,17,31,0.82)_45%,rgba(3,17,31,0.45)_100%)]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" aria-hidden="true" />
        </div>
        <Container className="relative py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-3">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
                {ABOUT.intro.label}
              </span>
            </span>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {ABOUT.intro.title}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              An integrated B2B enterprise across Waste Management, Logistics,
              Trading &amp; Cybersecurity — built on discipline, technology and
              a genuine commitment to sustainability.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" size="lg" withArrow>
                Work With Us
              </Button>
              <Button href="/services" size="lg" variant="outline">
                Our Services
              </Button>
            </div>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Intro */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                label="Who We Are"
                title="One enterprise, four specialised verticals"
                className="reveal"
              />
              <div className="mt-8 space-y-5">
                {ABOUT.intro.paragraphs.map((p, i) => (
                  <p  
                    key={i}
                    className="reveal reveal-delay-1 text-base leading-relaxed text-muted-foreground sm:text-lg"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="reveal reveal-delay-2 overflow-hidden rounded-lg border border-hairline bg-surface">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-hairline">
                  <Image
                    src="/images/about.webp"
                    alt="Greenics corporate headquarters"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.1)_0%,rgba(3,17,31,0.6)_100%)]"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                    Headquartered in
                  </p>
                  <p className="mt-2 font-display text-lg font-bold text-foreground">
                    Hyderabad, Telangana
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Plot No 230/A, MLA&apos;s Colony Road No.12, Banjara Hills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
            <div className="reveal relative overflow-hidden rounded-lg border border-hairline bg-surface p-8 lg:p-10">
              <div
                className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-brand/10 blur-3xl"
                aria-hidden="true"
              />
              <span className="relative text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Mission
              </span>
              <h2 className="relative mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {ABOUT.mission.title}
              </h2>
              <p className="relative mt-4 text-base leading-relaxed text-muted-foreground">
                {ABOUT.mission.body}
              </p>
            </div>
            <div className="reveal reveal-delay-2 relative overflow-hidden rounded-lg border border-hairline bg-surface p-8 lg:p-10">
              <div
                className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-cyan-accent/10 blur-3xl"
                aria-hidden="true"
              />
              <span className="relative text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Vision
              </span>
              <h2 className="relative mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {ABOUT.vision.title}
              </h2>
              <p className="relative mt-4 text-base leading-relaxed text-muted-foreground">
                {ABOUT.vision.body}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Core Values"
            title="The principles behind every service we deliver"
            description="These values are not marketing copy — they are the operating standard our teams are measured against."
            align="center"
            className="reveal"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {ABOUT.values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-lg border border-hairline bg-surface p-7 transition-colors hover:border-brand/40`}
                >
                  <div
                    className="absolute right-0 top-0 h-16 w-16 -translate-y-8 translate-x-8 rounded-full bg-brand/5 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-5 font-display text-base font-bold tracking-tight text-foreground">
                    {value.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Industries & Capabilities"
            title="Four specialised verticals, one accountable partner"
            description="Each capability is run as its own disciplined business line — with shared standards of safety, reporting and execution."
            className="reveal max-w-2xl"
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {ABOUT.capabilities.map((cap, i) => {
              const Icon = cap.icon;
              const slug =
                cap.title === "Waste Management"
                  ? "waste-management"
                  : cap.title === "Logistics"
                  ? "logistics"
                  : cap.title === "Trading"
                  ? "trading"
                  : "software";
              return (
                <Link
                  key={cap.title}
                  href={`/services/${slug}`}
                  className={`reveal reveal-delay-${(i % 4) + 1} group relative flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 lg:p-7`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold tracking-tight text-foreground">
                    {cap.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-brand">
                    Explore
                    <FaArrowRight
                      className="h-3 w-3 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Greenics */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                label="Why Greenics"
                title="Reasons businesses choose to partner with us"
                className="reveal"
              />
              <p className="reveal reveal-delay-1 mt-6 text-base leading-relaxed text-muted-foreground">
                We combine operational discipline across four verticals with a
                technology backbone and a genuine commitment to a cleaner,
                safer, more secure future.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ABOUT.why.map((item, i) => (
                  <li
                    key={item}
                    className={`reveal reveal-delay-${(i % 4) + 1} flex items-start gap-3 rounded-lg border border-hairline bg-surface p-4`}
                  >
                    <FaCheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        label="Let's build together"
        title="Partner with an enterprise that takes sustainability, reliability & security seriously."
        description="Tell us about your operations and the outcomes you need — we'll come back with a clear, accountable proposal."
        primaryLabel="Get in Touch"
        secondaryLabel="Our Services"
      />
    </>
  );
}
