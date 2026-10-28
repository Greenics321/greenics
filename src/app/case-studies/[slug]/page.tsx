import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaLayerGroup } from "react-icons/fa";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { Container } from "@/components/ui/Container";
import { CTABand } from "@/components/ui/CTABand";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return {
      title: "Case study not found",
      alternates: { canonical: `/case-studies/${slug}` },
    };
  }
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      type: "article",
      title: study.title,
      description: study.summary,
      url: `/case-studies/${study.slug}`,
      images: [
        {
          url: study.image,
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.summary,
      images: [study.image],
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const Icon = study.icon;
  const others = caseStudies.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <div className="absolute inset-0 -z-10">
          <Image
            src={study.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,17,31,0.97)_0%,rgba(3,17,31,0.85)_45%,rgba(3,17,31,0.5)_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.4)_0%,rgba(3,17,31,0.2)_40%,rgba(3,17,31,0.9)_100%)]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-25" aria-hidden="true" />
        </div>
        <Container className="relative py-14 lg:py-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="reveal flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
          >
            <Link href="/case-studies" className="transition-colors hover:text-brand">
              Case Studies
            </Link>
            <FaArrowRight className="h-2.5 w-2.5" aria-hidden="true" />
            <span className="text-brand">{study.category}</span>
          </nav>

          {/* Category + framing */}
          <div className="reveal reveal-delay-1 mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-background/80 px-3 py-1 backdrop-blur-sm">
              <Icon className="h-3 w-3 text-brand" aria-hidden="true" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                {study.category}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline-strong bg-background/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
              <FaLayerGroup className="h-2.5 w-2.5" aria-hidden="true" />
              {study.framing}
            </span>
          </div>

          {/* Title */}
          <h1 className="reveal reveal-delay-1 mt-5 max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {study.title}
          </h1>

          {/* Verticals */}
          <div className="reveal reveal-delay-2 mt-6 flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Verticals involved
            </span>
            {study.verticals.map((v) => (
              <span
                key={v}
                className="inline-flex items-center rounded-full border border-hairline-strong bg-background/60 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-foreground backdrop-blur-sm"
              >
                {v}
              </span>
            ))}
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Body — Situation / Approach / Outcome */}
      <section className="border-b border-hairline bg-background py-16 lg:py-20">
        <Container className="max-w-3xl">
          <p className="reveal font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            {study.summary}
          </p>

          {/* Situation */}
          <div className="reveal mt-12">
            <div className="flex items-center gap-3">
              <span className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
                01 — Situation
              </span>
              <span className="h-px flex-1 bg-hairline-strong" aria-hidden="true" />
            </div>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.75]">
              {study.situation}
            </p>
          </div>

          {/* Approach */}
          <div className="reveal mt-10">
            <div className="flex items-center gap-3">
              <span className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
                02 — Approach
              </span>
              <span className="h-px flex-1 bg-hairline-strong" aria-hidden="true" />
            </div>
            <ul className="mt-4 space-y-3">
              {study.approach.map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-md border border-hairline bg-surface p-4"
                >
                  <FaCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground sm:text-[0.9375rem]">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className="reveal mt-10">
            <div className="flex items-center gap-3">
              <span className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand">
                03 — Outcome
              </span>
              <span className="h-px flex-1 bg-hairline-strong" aria-hidden="true" />
            </div>
            <div className="mt-4 rounded-lg border border-brand/30 bg-gradient-to-br from-brand/10 via-surface to-surface p-6 lg:p-7">
              <p className="text-base leading-relaxed text-foreground sm:text-[1.0625rem] sm:leading-[1.75]">
                {study.outcome}
              </p>
            </div>
          </div>

          {/* Back */}
          <div className="reveal mt-12 border-t border-hairline pt-6">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              <FaArrowLeft className="h-3 w-3" aria-hidden="true" />
              Back to all case studies
            </Link>
          </div>
        </Container>
      </section>

      {/* Other scenarios */}
      {others.length > 0 && (
        <section className="border-b border-hairline bg-navy py-16 lg:py-20">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <h2 className="reveal font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Other scenarios
              </h2>
              <Link
                href="/case-studies"
                className="reveal reveal-delay-1 group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                All scenarios
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  href={`/case-studies/${c.slug}`}
                  className="card-accent group flex flex-col rounded-lg border border-hairline bg-surface p-6 transition-colors hover:border-brand/40"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                    {c.category}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-brand">
                    Read
                    <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABand
        label="Sound familiar?"
        title={`If this scenario resembles your situation, talk to our ${study.category} team.`}
        description="We will tell you honestly whether we can help, and if not, who can. No sales theatre."
        primaryLabel="Get in Touch"
        secondaryLabel="All Services"
      />
    </>
  );
}
