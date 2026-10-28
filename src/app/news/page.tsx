import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { newsItems } from "@/lib/news";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCard } from "@/components/news/NewsCard";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "News & Updates — Company, Operational Notes and Perspectives",
  description:
    "Company announcements, operational notes, partnership updates and perspectives from Greenics Enterprises across waste, logistics, trading and cybersecurity. Clearly labelled as representative updates.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "News & Updates — Greenics Enterprises",
    description:
      "Company announcements, operational notes and perspectives across our four verticals.",
    images: [{ url: "/images/hero-city.webp", width: 1200, height: 630, alt: "Greenics News" }],
  },
};

export default function NewsPage() {
  const [featured, ...rest] = newsItems;

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
                News & Updates
              </span>
            </span>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Company announcements, operational notes &amp; perspectives
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Updates from across our four verticals — capacity expansions,
              engagement milestones, operational notes and the occasional
              perspective. Clearly labelled as representative updates until
              replaced with real, dated items.
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
              <span className="font-semibold text-foreground">A note on dating — </span>
              The updates below are representative items with placeholder dates (month/year only).
              We do not publish real dates, named third parties or financials without permission.
              Replace with real, dated, permissioned news items before launch.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured update */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Latest"
            title="The most recent update"
            className="reveal max-w-2xl"
          />
          <div className="reveal reveal-delay-1 mt-10">
            <NewsCard item={featured} variant="featured" />
          </div>
        </Container>
      </section>

      {/* All updates grid */}
      <section className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              label="Archive"
              title="All updates"
              className="reveal"
            />
            <p className="reveal reveal-delay-1 text-sm text-muted-foreground">
              {newsItems.length} updates · sorted newest first
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {rest.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        label="Have a question about an update?"
        title="Ask us directly — we answer within one business day."
        description="If an update here is relevant to your operations, or you want context we haven't published, reach out. We're straightforward about what we can and can't share."
        primaryLabel="Get in Touch"
        secondaryLabel="Our Services"
      />
    </>
  );
}
