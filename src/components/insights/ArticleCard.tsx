import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegClock } from "react-icons/fa";
import type { Article } from "@/lib/articles";
import { clsx } from "clsx";

type ArticleCardProps = {
  article: Article;
  variant?: "default" | "compact" | "featured";
  className?: string;
  priority?: boolean;
};

export function ArticleCard({
  article,
  variant = "default",
  className,
  priority = false,
}: ArticleCardProps) {
  const Icon = article.icon;
  const href = `/insights/${article.slug}`;

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className={clsx(
          "card-accent group flex items-center gap-4 rounded-lg border border-hairline bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40",
          className
        )}
      >
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border border-hairline">
          <Image
            src={article.image}
            alt=""
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
            {article.category}
          </span>
          <h3 className="mt-1 line-clamp-2 font-display text-sm font-bold leading-snug text-foreground">
            {article.title}
          </h3>
        </div>
        <FaArrowRight
          className="h-3 w-3 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand"
          aria-hidden="true"
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        "card-accent group relative flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.95)]",
        variant === "featured" && "lg:flex-row",
        className
      )}
    >
      <div
        className={clsx(
          "relative overflow-hidden border-b border-hairline",
          variant === "featured" ? "aspect-[16/10] lg:aspect-auto lg:w-1/2 lg:border-b-0 lg:border-r" : "aspect-[16/10]"
        )}
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority={priority}
          sizes={
            variant === "featured"
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.1)_0%,rgba(3,17,31,0.7)_100%)]"
          aria-hidden="true"
        />
        {/* Category chip */}
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-brand/30 bg-background/80 px-3 py-1 backdrop-blur-sm">
          <Icon className="h-3 w-3 text-brand" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
            {article.category}
          </span>
        </div>
        {article.tag && (
          <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/90">
            {article.tag}
          </span>
        )}
      </div>

      <div className={clsx("flex flex-1 flex-col p-6", variant === "featured" && "lg:p-8")}>
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" aria-hidden="true" />
          <span className="flex items-center gap-1.5">
            <FaRegClock className="h-2.5 w-2.5" aria-hidden="true" />
            {article.readingTime}
          </span>
        </div>
        <h3
          className={clsx(
            "mt-3 font-display font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand",
            variant === "featured" ? "text-xl lg:text-2xl" : "text-base lg:text-lg"
          )}
        >
          {article.title}
        </h3>
        <p
          className={clsx(
            "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
            variant === "featured" ? "line-clamp-4" : "line-clamp-3"
          )}
        >
          {article.excerpt}
        </p>
        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand/25 bg-brand/10 text-[11px] font-bold text-brand">
              {article.author.split(" ").map((w) => w[0]).slice(0, 2).join("")}
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-foreground">{article.author}</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {article.authorRole}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-brand">
            Read
            <FaArrowRight
              className="h-3 w-3 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
