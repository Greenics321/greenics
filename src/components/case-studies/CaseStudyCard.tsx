import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { CaseStudy } from "@/lib/case-studies";
import { clsx } from "clsx";

type CaseStudyCardProps = {
  study: CaseStudy;
  className?: string;
  priority?: boolean;
};

export function CaseStudyCard({
  study,
  className,
  priority = false,
}: CaseStudyCardProps) {
  const Icon = study.icon;
  const href = `/case-studies/${study.slug}`;

  return (
    <Link
      href={href}
      className={clsx(
        "card-accent group relative flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.95)]",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-hairline">
        <Image
          src={study.image}
          alt={study.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.1)_0%,rgba(3,17,31,0.75)_100%)]"
          aria-hidden="true"
        />
        {/* Category chip */}
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-brand/30 bg-background/80 px-3 py-1 backdrop-blur-sm">
          <Icon className="h-3 w-3 text-brand" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
            {study.category}
          </span>
        </div>
        {/* Framing label */}
        <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/80">
          {study.framing}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-base font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand lg:text-lg">
          {study.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {study.summary}
        </p>
        {/* Vertical tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {study.verticals.map((v) => (
            <span
              key={v}
              className="inline-flex items-center rounded-full border border-hairline-strong px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
            >
              {v}
            </span>
          ))}
        </div>
        <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-brand">
          Read engagement
          <FaArrowRight
            className="h-3 w-3 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}

export default CaseStudyCard;
