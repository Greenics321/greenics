"use client";

import { GlossaryTooltip } from "@/components/ui/GlossaryTooltip";
import { glossaryEntries, glossaryCategoryIcons } from "@/lib/glossary";
import type { GlossaryCategory } from "@/lib/glossary";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

type ServiceKeyTermsProps = {
  /** The categories relevant to this service page. */
  categories: GlossaryCategory[];
};

/**
 * Renders a compact "Key terms for this engagement" section with inline
 * GlossaryTooltips for the terms relevant to the given categories. Used on
 * service detail pages to surface jargon definitions in-context.
 */
export function ServiceKeyTerms({ categories }: ServiceKeyTermsProps) {
  const terms = glossaryEntries.filter((e) => categories.includes(e.category));

  if (terms.length === 0) return null;

  return (
    <section className="border-b border-hairline bg-background py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-3">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            <span className="brand-dot h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            <span className="h-px w-6 bg-brand/70" aria-hidden="true" />
            Key terms
          </span>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Jargon you&apos;ll hear in this engagement
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Hover or focus any underlined term for a plain-English definition.
            The full glossary covers all four verticals.
          </p>
        </div>

        <div className="reveal reveal-delay-1 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {terms.map((entry) => {
            const Icon = glossaryCategoryIcons[entry.category];
            return (
              <div
                key={entry.term}
                className="card-accent rounded-lg border border-hairline bg-surface p-5 transition-colors hover:border-brand/40 lg:p-6"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                    <Icon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  </span>
                  <GlossaryTooltip term={entry.term} definition={entry.definition} />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {entry.definition}
                </p>
                {entry.why && (
                  <p className="mt-2 border-t border-hairline pt-2 text-[11px] leading-relaxed text-muted-foreground/80">
                    <span className="font-semibold text-foreground">Why — </span>
                    {entry.why}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="reveal mt-8">
          <Link
            href="/glossary"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            <FaBookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            View the full glossary
            <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceKeyTerms;
