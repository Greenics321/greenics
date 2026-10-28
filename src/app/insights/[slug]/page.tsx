import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaRegClock, FaShareAlt } from "react-icons/fa";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { Container } from "@/components/ui/Container";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { ContentTableOfContents } from "@/components/insights/ContentTableOfContents";
import { ArticleShareBar } from "@/components/insights/ArticleShareBar";
import { CTABand } from "@/components/ui/CTABand";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {
      title: "Article not found",
      alternates: { canonical: `/insights/${slug}` },
    };
  }
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/insights/${article.slug}`,
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const Icon = article.icon;
  const related = getRelatedArticles(slug, 2);
  const articleUrl = `/insights/${article.slug}`;

  return (
    <>
      {/* Breadcrumb + header */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <div className="absolute inset-0 -z-10">
          <Image
            src={article.image}
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
            <Link href="/insights" className="transition-colors hover:text-brand">
              Insights
            </Link>
            <FaArrowRight className="h-2.5 w-2.5" aria-hidden="true" />
            <span className="text-brand">{article.category}</span>
          </nav>

          {/* Category + tag */}
          <div className="reveal reveal-delay-1 mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-background/80 px-3 py-1 backdrop-blur-sm">
              <Icon className="h-3 w-3 text-brand" aria-hidden="true" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                {article.category}
              </span>
            </span>
            {article.tag && (
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {article.tag}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="reveal reveal-delay-1 mt-5 max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="reveal reveal-delay-2 mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-hairline pt-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/25 bg-brand/10 text-xs font-bold text-brand">
                {article.author.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-foreground">{article.author}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {article.authorRole}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="flex items-center gap-1.5">
                <FaRegClock className="h-2.5 w-2.5" aria-hidden="true" />
                {article.readingTime}
              </span>
            </div>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      </section>

      {/* Body */}
      <section className="border-b border-hairline bg-background py-16 lg:py-20">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[3rem_1fr_16rem] xl:gap-10">
            {/* Share bar (XL only) */}
            <aside className="hidden xl:block">
              <ArticleShareBar url={articleUrl} title={article.title} />
            </aside>

            <article className="prose-article max-w-3xl">
              <p className="reveal font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                {article.excerpt}
              </p>
              <div className="reveal reveal-delay-1 mt-8 space-y-6">
                {article.content.map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.75]"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Share + back */}
            <div className="reveal mt-12 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                <FaArrowLeft className="h-3 w-3" aria-hidden="true" />
                Back to all insights
              </Link>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `https://www.greenicsenterprises.com${articleUrl}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-hairline-strong px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
              >
                <FaShareAlt className="h-3 w-3" aria-hidden="true" />
                Share on LinkedIn
              </a>
            </div>
            </article>

            {/* Sticky TOC (XL only) */}
            <aside className="hidden xl:block">
              <ContentTableOfContents />
            </aside>
          </div>
        </Container>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-b border-hairline bg-navy py-16 lg:py-20">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <h2 className="reveal font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Related reading
              </h2>
              <Link
                href="/insights"
                className="reveal reveal-delay-1 group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                All articles
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABand
        label="Bring this thinking to your operations"
        title={`Talk to our ${article.category} team.`}
        description="If a perspective here resonates with a problem you are trying to solve, our team can scope it into an engagement."
        primaryLabel="Get in Touch"
        secondaryLabel="All Services"
      />
    </>
  );
}
