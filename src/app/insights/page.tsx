import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { articles, articleCategories } from "@/lib/articles";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Insights — Field Notes on Waste, Logistics, Trading & Cybersecurity",
  description:
    "Practical, audit-ready field notes from Greenics Enterprises across waste management, logistics, trading and cybersecurity — written by the teams that deliver the work.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights — Greenics Enterprises",
    description:
      "Field notes on waste, logistics, trading and cybersecurity — written by the teams that deliver the work.",
    images: [{ url: "/images/hero-city.webp", width: 1200, height: 630, alt: "Greenics Insights" }],
  },
};

export default function InsightsPage() {
  const [featured, ...rest] = articles;

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
                Insights
              </span>
            </span>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Field notes from the teams that deliver the work.
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Practical, audit-ready perspectives on waste, logistics, trading
              and cybersecurity — written by the people who run the engagements,
              not the marketing team.
            </p>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Featured article */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <SectionHeading
            label="Featured"
            title="The latest from our practice leads"
            className="reveal max-w-2xl"
          />
          <div className="reveal reveal-delay-1 mt-10">
            <ArticleCard article={featured} variant="featured" priority />
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="border-b border-hairline bg-navy py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {articleCategories.map((cat, i) => {
              const Icon = cat.icon;
              const count = articles.filter((a) => a.category === cat.name).length;
              return (
                <div
                  key={cat.name}
                  className={`reveal reveal-delay-${(i % 5) + 1} group relative flex flex-col gap-3 rounded-lg border border-hairline bg-surface p-5 transition-colors hover:border-brand/40 lg:p-6`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                    <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold tracking-tight text-foreground">
                      {cat.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                  <span className="mt-auto text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                    {count} {count === 1 ? "article" : "articles"}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* All articles grid */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              label="All articles"
              title="Browse the full archive"
              className="reveal"
            />
            <p className="reveal reveal-delay-1 text-sm text-muted-foreground">
              {articles.length} articles · sorted newest first
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {rest.map((article, i) => (
              <ArticleCard
                key={article.slug}
                article={article}
                priority={i === 0}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        label="Want this in your inbox?"
        title="Get the Sustainability digest — occasionally, never spammy."
        description="Field notes and operational lessons from across our four practice areas. No automated round-ups, no sales emails."
        primaryLabel="Subscribe via Footer"
        primaryHref="/#footer"
        secondaryLabel="Talk to Us"
        secondaryHref="/contact"
      />
    </>
  );
}
