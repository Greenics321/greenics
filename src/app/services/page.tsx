import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { clsx } from "clsx";
import { services } from "@/lib/services";
import { WHY_GREENICS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceComparisonTable } from "@/components/services/ServiceComparisonTable";
import { ServiceTabs } from "@/components/services/ServiceTabs";
import { FaqAccordion } from "@/components/contact/FaqAccordion";
import { SERVICES_FAQS } from "@/lib/services-faqs";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Our Services — Waste Management, Logistics, Trading & Cybersecurity",
  description:
    "End-to-end solutions across key sectors to drive sustainability, efficiency & growth. Explore Greenics' waste management, logistics, trading and cybersecurity services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Heading, service cards and the why-us strip share one backdrop */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_10%,rgba(56,189,248,0.08)_0%,transparent_60%)]"
            aria-hidden="true"
          />
        </div>

        <Container className="relative pb-14 pt-16 lg:pb-16 lg:pt-20">
          <div className="max-w-md">
            <p className="text-sm font-medium uppercase tracking-wider text-brand">What We Do</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-wide text-foreground sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-5 text-base leading-relaxed text-foreground/90">
              End-to-end solutions across key sectors to drive sustainability,
              efficiency &amp; growth.
            </p>
          </div>

          {/* Service cards — photo on top, pale body below */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col overflow-hidden rounded-lg border border-white/25 bg-[linear-gradient(180deg,#F3F5F6_0%,#CDD3D8_100%)] text-[#0B1B2B] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.9)]"
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-navy">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span
                    className={clsx(
                      "relative z-10 mx-auto -mt-8 flex h-16 w-16 items-center justify-center rounded-full text-white ring-4 ring-[#EEF1F3]",
                      i === 0 ? "bg-[#4E8F23]" : "bg-[#0D2A4A]"
                    )}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="flex flex-1 flex-col items-center px-6 pb-7 pt-4 text-center">
                    <h2 className="font-display text-xl font-semibold">{service.shortTitle}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#0B1B2B]/80">
                      {service.shortDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#4E8F23]">
                      Explore
                      <FaArrowRight
                        className="h-3 w-3 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Why Greenics strip */}
          <ul className="mt-6 grid grid-cols-2 gap-y-5 rounded-lg border border-white/15 bg-surface/75 px-4 py-5 sm:grid-cols-3 lg:grid-cols-5">
            {WHY_GREENICS.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className={clsx(
                    "flex items-center gap-3 px-3",
                    i > 0 && "lg:border-l lg:border-white/15"
                  )}
                >
                  <Icon className="h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-sm leading-snug text-foreground">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Compare"
            title="Which vertical does what"
            description="A side-by-side view of capabilities across our four practice areas. Green checks are core capabilities; standard checks are supported."
            align="center"
            className="reveal"
          />
          <div className="reveal reveal-delay-1 mt-12">
            <ServiceComparisonTable />
          </div>
        </Container>
      </section>

      {/* Tabbed deep-dive */}
      <section className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Deep dive"
            title="Explore each vertical in detail"
            description="Pick a vertical and a lens — overview, capabilities, or process. The full service pages have even more depth."
            align="center"
            className="reveal"
          />
          <div className="reveal reveal-delay-1 mt-12">
            <ServiceTabs />
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
                title="What clients ask before engaging"
                description="The practical questions we hear most often across our four verticals. If yours isn't here, ask us directly — we answer within one business day."
                className="reveal"
              />
            </div>
            <div className="lg:col-span-7">
              <FaqAccordion items={SERVICES_FAQS} />
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        label="Need a custom scope?"
        title="Tell us what you need delivered, secured or moved."
        description="Our team responds to every enquiry within one business day. Tell us your sector and scope — we'll put together a proposal."
      />
    </>
  );
}
