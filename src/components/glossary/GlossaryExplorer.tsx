"use client";

import { useMemo, useState } from "react";
import { glossaryEntries, glossaryCategoryIcons } from "@/lib/glossary";
import type { GlossaryCategory } from "@/lib/glossary";
import { FaSearch, FaTimes } from "react-icons/fa";
import { clsx } from "clsx";

const CATEGORIES: (GlossaryCategory | "All")[] = [
  "All",
  "Waste Management",
  "Logistics",
  "Trading",
  "Cybersecurity",
  "Governance",
];

export function GlossaryExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<GlossaryCategory | "All">("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossaryEntries.filter((e) => {
      const matchesCat = category === "All" || e.category === category;
      const matchesQuery =
        !q ||
        [e.term, e.definition, e.why ?? "", e.category]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      {/* Search + filter */}
      <div className="reveal flex flex-col gap-4">
        <div className="flex items-center gap-3 rounded-lg border border-hairline-strong bg-surface px-4">
          <FaSearch className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms…"
            aria-label="Search glossary terms"
            className="h-12 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
            >
              <FaTimes className="h-3 w-3" />
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={category === cat}
              onClick={() => setCategory(cat)}
              className={clsx(
                "rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                category === cat
                  ? "border-brand/40 bg-brand/15 text-brand"
                  : "border-hairline-strong text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "term" : "terms"}
          {category !== "All" && ` in ${category}`}
          {query && ` matching "${query}"`}
        </p>
      </div>

      {/* Terms */}
      <div className="reveal reveal-delay-1 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
        {filtered.map((entry) => {
          const Icon = glossaryCategoryIcons[entry.category];
          return (
            <div
              key={entry.term}
              className="card-accent group rounded-lg border border-hairline bg-surface p-6 transition-colors hover:border-brand/40 lg:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                  <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                  {entry.category}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold tracking-tight text-foreground">
                {entry.term}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {entry.definition}
              </p>
              {entry.why && (
                <p className="mt-3 border-t border-hairline pt-3 text-xs leading-relaxed text-muted-foreground/80">
                  <span className="font-semibold text-foreground">Why it matters — </span>
                  {entry.why}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-lg border border-hairline bg-surface p-10 text-center">
          <p className="text-sm text-muted-foreground">
            No terms match your search.{" "}
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="text-brand hover:underline"
            >
              Reset
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default GlossaryExplorer;
