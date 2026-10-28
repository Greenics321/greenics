import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { articles } from "@/lib/articles";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/insights/ArticleCard";

export function HomeInsightsPreview() {
  const featured = articles.slice(0, 3);

  return (
    <section className="border-b border-hairline bg-navy py-20 lg:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            label="Insights"
            title="Field notes from our practice leads"
            description="Practical, audit-ready perspectives from the teams that deliver the work — not the marketing team."
            className="reveal max-w-2xl"
          />
          <Link
            href="/insights"
            className="reveal reveal-delay-1 group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            All articles
            <FaArrowRight
              className="h-3 w-3 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {featured.map((article, i) => (
            <ArticleCard
              key={article.slug}
              article={article}
              priority={i === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HomeInsightsPreview;
