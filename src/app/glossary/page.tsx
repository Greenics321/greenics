import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";
import { glossaryEntries } from "@/lib/glossary";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlossaryExplorer } from "@/components/glossary/GlossaryExplorer";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Glossary — Key Terms Across Waste, Logistics, Trading & Cybersecurity",
  description:
    "A practical, plain-English glossary of the terms Greenics uses across its four verticals — from Swachh Bharat and circular economy to Incoterms, HS codes, zero trust and SLAs.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "Glossary — Greenics Enterprises",
    description:
      "Key terms across waste, logistics, trading and cybersecurity — defined and explained.",
    images: [{ url: "/images/hero-city.webp", width: 1200, height: 630, alt: "Greenics Glossary" }],
  },
};

export default function GlossaryPage() {
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
                Glossary
              </span>
            </span>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The terms we use, explained properly
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A practical, plain-English glossary of the terms that show up
              across our four verticals — waste, logistics, trading and
              cybersecurity. Filter by category or search for a specific term.
              Every definition includes a short note on why it matters.
            </p>
            <div className="reveal reveal-delay-3 mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <FaBookOpen className="h-4 w-4 text-brand" aria-hidden="true" />
              <span>
                {glossaryEntries.length} terms across {5} categories
              </span>
            </div>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Explorer */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <GlossaryExplorer />
        </Container>
      </section>

      <CTABand
        label="Need a term that isn't here?"
        title="Tell us what's missing — we'll add it."
        description="This glossary grows with every engagement. If a term you need defined isn't here, send a note and we'll write a proper entry for it."
        primaryLabel="Suggest a Term"
        secondaryLabel="Our Services"
      />
    </>
  );
}
