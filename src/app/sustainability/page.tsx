import type { Metadata } from "next";
import Image from "next/image";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { SUSTAINABILITY } from "@/lib/sustainability";
import { COMPANY } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { GlossaryTooltip } from "@/components/ui/GlossaryTooltip";

export const metadata: Metadata = {
  title: "Sustainability — Cleaner, Safer, More Accountable Operations",
  description:
    "How Greenics Enterprises builds sustainability into waste management, logistics, trading and cybersecurity — aligned with the Swachh Bharat Mission and circular-economy principles.",
  alternates: { canonical: "/sustainability" },
  openGraph: {
    title: "Sustainability — Greenics Enterprises",
    description:
      "Sustainability as an operating standard, not a marketing layer — across waste, logistics, trading and cybersecurity.",
    images: [
      {
        url: "/images/waste-management.webp",
        width: 1200,
        height: 630,
        alt: "Sustainable waste management operations",
      },
    ],
  },
};

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/waste-management.webp"
            alt="Sustainable waste management and recycling facility"
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
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
                {SUSTAINABILITY.hero.label}
              </span>
            </span>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {SUSTAINABILITY.hero.title}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sustainability at Greenics is not a marketing layer — it is the
              operating standard behind every service line. From waste that
              does not reach a landfill, to logistics that minimises empty
              miles, to cybersecurity that prevents the waste of breached
              systems, we measure ourselves against environmental and social
              impact, not just commercial output. Our waste vertical is built
              around the{" "}
              <GlossaryTooltip
                term="Swachh Bharat Mission"
                definition="The Government of India's flagship cleanliness and sanitation program, launched in 2014, which sets the framework for urban waste management, source segregation and processing across Indian cities."
              />{" "}
              and every vertical is measured against{" "}
              <GlossaryTooltip
                term="Circular Economy"
                definition="An economic system designed to keep materials in use through recovery, reuse and recycling, minimising waste and landfill — as opposed to a linear 'take-make-dispose' model."
              />{" "}
              principles.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/services/waste-management" size="lg" withArrow>
                Waste Management
              </Button>
              <Button href="/about" size="lg" variant="outline">
                About Greenics
              </Button>
            </div>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Pillars */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Six pillars"
            title="Where sustainability shows up in our work"
            description="Sustainability is not a single program — it is woven across how we collect, move, source and secure."
            align="center"
            className="reveal"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {SUSTAINABILITY.pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-lg border border-hairline bg-surface p-7 transition-colors hover:border-brand/40 lg:p-8`}
                >
                  <div
                    className="absolute right-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full bg-brand/5 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-5 font-display text-base font-bold tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Operating principles — split layout */}
      <section className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                label="Operating principles"
                title="The rules behind every claim"
                className="reveal"
              />
              <p className="reveal reveal-delay-1 mt-6 text-base leading-relaxed text-muted-foreground">
                Sustainability claims are easy to make and hard to honour. These
                four principles govern how {COMPANY.shortName} actually operates
                — and how we let clients verify our work.
              </p>
              <div className="reveal reveal-delay-2 mt-8">
                <Button href="/contact" size="md" variant="secondary">
                  Ask about our reporting
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SUSTAINABILITY.principles.map((p, i) => (
                  <div
                    key={p.title}
                    className={`reveal reveal-delay-${(i % 2) + 1} relative rounded-lg border border-hairline bg-surface p-6`}
                  >
                    <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand">
                      Principle {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-base font-bold tracking-tight text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Commitments checklist */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                label="Commitments"
                title="What we commit to, in practice"
                description="Not aspirations — these are the operational choices clients can hold us to during an engagement."
                className="reveal"
              />
              <div className="reveal reveal-delay-2 mt-8 overflow-hidden rounded-lg border border-hairline bg-surface">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-hairline">
                  <Image
                    src="/images/hero-city.webp"
                    alt="Sustainable city operations at dusk"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.1)_0%,rgba(3,17,31,0.7)_100%)]"
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                    Operations, not optics
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SUSTAINABILITY.commitments.map((c, i) => (
                  <li
                    key={c}
                    className={`reveal reveal-delay-${(i % 4) + 1} flex items-start gap-3 rounded-lg border border-hairline bg-surface p-4 transition-colors hover:border-brand/40`}
                  >
                    <FaCheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium leading-relaxed text-foreground">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* SDG alignment */}
      <section className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Global context"
            title="How our work maps to the UN Sustainable Development Goals"
            description="Our four verticals contribute — in measurable ways — to six of the UN SDGs most relevant to industrial services in India."
            align="center"
            className="reveal"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {SUSTAINABILITY.sdgAlignment.map((sdg, i) => {
              const Icon = sdg.icon;
              return (
                <div
                  key={sdg.code}
                  className={`reveal reveal-delay-${(i % 5) + 1} group relative flex flex-col items-center justify-center gap-3 rounded-lg border border-hairline bg-surface p-5 text-center transition-colors hover:border-brand/40 lg:p-6`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/25 bg-brand/10 transition-colors group-hover:bg-brand/15">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
                      {sdg.code}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {sdg.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Related service — waste management deep-link */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="reveal overflow-hidden rounded-lg border border-hairline bg-surface">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline">
                  <Image
                    src="/images/waste-management.webp"
                    alt="Waste management operations aligned with Swachh Bharat"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.1)_0%,rgba(3,17,31,0.6)_100%)]"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <SectionHeading
                label="Our most direct sustainability lever"
                title="Waste Management, aligned with Swachh Bharat"
                description="Door-to-door collection, segregation, processing and disposal — engineered around cleaner cities, healthier communities and the circular economy."
                className="reveal"
              />
              <div className="reveal reveal-delay-2 mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/services/waste-management" size="md" withArrow>
                  Explore the service
                </Button>
                <Button href="/services" size="md" variant="outline">
                  All services
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        label="Build sustainability into your operations"
        title="Tell us how your operations need to change."
        description="Whether it is diverting waste from landfill, optimising freight routes, or securing systems against breach — we can scope it, deliver it and report on it."
        primaryLabel="Get in Touch"
        secondaryLabel="Our Services"
      />
    </>
  );
}
