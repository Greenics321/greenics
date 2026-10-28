import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaRegClock } from "react-icons/fa";
import { newsItems, getNewsBySlug } from "@/lib/news";
import { Container } from "@/components/ui/Container";
import { NewsCard } from "@/components/news/NewsCard";
import { CTABand } from "@/components/ui/CTABand";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) {
    return {
      title: "Update not found",
      alternates: { canonical: `/news/${slug}` },
    };
  }
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/news/${item.slug}` },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.excerpt,
      url: `/news/${item.slug}`,
      publishedTime: item.date,
      images: [{ url: "/images/hero-city.webp", width: 1200, height: 630, alt: item.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.excerpt,
    },
  };
}

export default async function NewsDetailPage({ params }: Params) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const Icon = item.icon;
  const others = newsItems.filter((n) => n.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(140,198,63,0.10)_0%,transparent_60%)]"
            aria-hidden="true"
          />
        </div>
        <Container className="relative py-14 lg:py-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="reveal flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
          >
            <Link href="/news" className="transition-colors hover:text-brand">
              News
            </Link>
            <FaArrowRight className="h-2.5 w-2.5" aria-hidden="true" />
            <span className="text-brand">{item.category}</span>
          </nav>

          {/* Category + type */}
          <div className="reveal reveal-delay-1 mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-background/80 px-3 py-1 backdrop-blur-sm">
              <Icon className="h-3 w-3 text-brand" aria-hidden="true" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                {item.category}
              </span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {item.type} · {item.framing}
            </span>
          </div>

          {/* Title */}
          <h1 className="reveal reveal-delay-1 mt-5 max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {item.title}
          </h1>

          {/* Meta */}
          <div className="reveal reveal-delay-2 mt-6 flex flex-wrap items-center gap-4 border-t border-hairline pt-6 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <time dateTime={item.date}>
              {new Date(item.date + "-01").toLocaleDateString("en-IN", {
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="flex items-center gap-1.5">
              <FaRegClock className="h-2.5 w-2.5" aria-hidden="true" />
              {item.type}
            </span>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Body */}
      <section className="border-b border-hairline bg-background py-16 lg:py-20">
        <Container className="max-w-3xl">
          <article>
            <p className="reveal font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              {item.excerpt}
            </p>
            <div className="reveal reveal-delay-1 mt-8 space-y-6">
              {item.body.map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.75]"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Back */}
            <div className="reveal mt-12 border-t border-hairline pt-6">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                <FaArrowLeft className="h-3 w-3" aria-hidden="true" />
                Back to all updates
              </Link>
            </div>
          </article>
        </Container>
      </section>

      {/* Other updates */}
      {others.length > 0 && (
        <section className="border-b border-hairline bg-navy py-16 lg:py-20">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <h2 className="reveal font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Other updates
              </h2>
              <Link
                href="/news"
                className="reveal reveal-delay-1 group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                All updates
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
              {others.map((n) => (
                <NewsCard key={n.slug} item={n} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABand
        label="Relevant to your operations?"
        title={`Talk to our ${item.category} team.`}
        description="If an update here is relevant to a problem you're trying to solve, our team can scope it into an engagement."
        primaryLabel="Get in Touch"
        secondaryLabel="All Services"
      />
    </>
  );
}
