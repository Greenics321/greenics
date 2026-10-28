import Link from "next/link";
import { FaArrowRight, FaRegClock } from "react-icons/fa";
import type { NewsItem } from "@/lib/news";
import { clsx } from "clsx";

type NewsCardProps = {
  item: NewsItem;
  variant?: "default" | "featured";
  className?: string;
};

const TYPE_COLORS: Record<NewsItem["type"], string> = {
  Announcement: "text-brand",
  "Operational Note": "text-cyan-accent",
  Partnership: "text-brand",
  Perspective: "text-foreground",
};

export function NewsCard({ item, variant = "default", className }: NewsCardProps) {
  const Icon = item.icon;
  const href = `/news/${item.slug}`;

  return (
    <Link
      href={href}
      className={clsx(
        "card-accent group relative flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.95)]",
        variant === "featured" && "lg:flex-row",
        className
      )}
    >
      {/* Accent strip instead of image — news is text-first */}
      <div
        className={clsx(
          "relative border-b border-hairline bg-navy",
          variant === "featured" ? "lg:w-2/5 lg:border-b-0 lg:border-r" : ""
        )}
      >
        <div className="flex h-32 items-center justify-center lg:h-40">
          <Icon className="h-10 w-10 text-brand/40" aria-hidden="true" />
        </div>
        {/* Category + type chip */}
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-background/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand backdrop-blur-sm">
            {item.category}
          </span>
        </div>
        <span
          className={clsx(
            "absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.2em]",
            TYPE_COLORS[item.type]
          )}
        >
          {item.type}
        </span>
      </div>

      {/* Content */}
      <div className={clsx("flex flex-1 flex-col p-6", variant === "featured" && "lg:p-8")}>
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          <time dateTime={item.date}>
            {new Date(item.date + "-01").toLocaleDateString("en-IN", {
              month: "short",
              year: "numeric",
            })}
          </time>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" aria-hidden="true" />
          <span>{item.framing}</span>
        </div>
        <h3
          className={clsx(
            "mt-3 font-display font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand",
            variant === "featured" ? "text-xl lg:text-2xl" : "text-base lg:text-lg"
          )}
        >
          {item.title}
        </h3>
        <p
          className={clsx(
            "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
            variant === "featured" ? "line-clamp-4" : "line-clamp-3"
          )}
        >
          {item.excerpt}
        </p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-brand">
          Read update
          <FaArrowRight
            className="h-3 w-3 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
