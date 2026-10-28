"use client";

import { useState } from "react";
import { FaCheck, FaMinus, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { services } from "@/lib/services";
import { clsx } from "clsx";

/**
 * Comparison matrix for the four service verticals.
 * Each row is a capability; each column is a vertical.
 * Values: "yes" (check), "core" (highlighted check), "no" (dash), or a string.
 */
type Row = {
  capability: string;
  values: (boolean | "core" | string)[];
};

const rows: Row[] = [
  {
    capability: "Pan-India operations",
    values: ["core", "core", true, true],
  },
  {
    capability: "International reach",
    values: [false, true, "core", true],
  },
  {
    capability: "Real-time tracking",
    values: [true, "core", true, true],
  },
  {
    capability: "Compliance & audit reporting",
    values: ["core", true, "core", "core"],
  },
  {
    capability: "Sustainability-aligned",
    values: ["core", true, false, false],
  },
  {
    capability: "Government / municipal ready",
    values: ["core", false, false, true],
  },
  {
    capability: "24×7 SOC / monitoring",
    values: [false, false, false, "core"],
  },
  {
    capability: "Own fleet / assets",
    values: [true, "core", false, false],
  },
];

export function ServiceComparisonTable() {
  const [highlightCol, setHighlightCol] = useState<number | null>(null);

  return (
    <div className="reveal overflow-hidden rounded-lg border border-hairline bg-surface">
      {/* Desktop table */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-hairline bg-navy">
              <th className="px-6 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Capability
              </th>
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <th
                    key={s.slug}
                    className={clsx(
                      "px-4 py-5 text-center transition-colors",
                      highlightCol === i && "bg-brand/5"
                    )}
                    onMouseEnter={() => setHighlightCol(i)}
                    onMouseLeave={() => setHighlightCol(null)}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                        <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                      </span>
                      <span className="font-display text-sm font-bold tracking-tight text-foreground">
                        {s.shortTitle}
                      </span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={row.capability}
                className={clsx(
                  "border-b border-hairline transition-colors last:border-b-0 hover:bg-navy/40",
                  ri % 2 === 1 && "bg-navy/20"
                )}
              >
                <td className="px-6 py-4 text-sm font-medium text-foreground">
                  {row.capability}
                </td>
                {row.values.map((v, ci) => (
                  <td
                    key={ci}
                    className={clsx(
                      "px-4 py-4 text-center transition-colors",
                      highlightCol === ci && "bg-brand/5"
                    )}
                    onMouseEnter={() => setHighlightCol(ci)}
                    onMouseLeave={() => setHighlightCol(null)}
                  >
                    <Cell value={v} />
                  </td>
                ))}
              </tr>
            ))}
            {/* CTA row */}
            <tr className="border-t-2 border-brand/30 bg-navy/40">
              <td className="px-6 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Explore
              </td>
              {services.map((s, i) => (
                <td
                  key={s.slug}
                  className={clsx(
                    "px-4 py-5 text-center transition-colors",
                    highlightCol === i && "bg-brand/10"
                  )}
                  onMouseEnter={() => setHighlightCol(i)}
                  onMouseLeave={() => setHighlightCol(null)}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-brand"
                  >
                    Open
                    <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 lg:hidden">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.slug}
              className="card-accent rounded-lg border border-hairline bg-background p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                  <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                </span>
                <h3 className="font-display text-sm font-bold tracking-tight text-foreground">
                  {s.shortTitle}
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {rows.map((row) => {
                  const idx = services.findIndex((x) => x.slug === s.slug);
                  return (
                    <li key={row.capability} className="flex items-start justify-between gap-3 text-xs">
                      <span className="text-muted-foreground">{row.capability}</span>
                      <Cell value={row.values[idx]} compact />
                    </li>
                  );
                })}
              </ul>
              <Link
                href={`/services/${s.slug}`}
                className="group mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand"
              >
                Open service
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Cell({
  value,
  compact = false,
}: {
  value: boolean | "core" | string;
  compact?: boolean;
}) {
  if (value === true) {
    return (
      <span className={clsx("inline-flex items-center justify-center", compact ? "h-4 w-4" : "h-6 w-6")}>
        <FaCheck className="h-3 w-3 text-foreground/70" aria-hidden="true" />
      </span>
    );
  }
  if (value === "core") {
    return (
      <span
        className={clsx(
          "inline-flex items-center justify-center rounded-full border border-brand/40 bg-brand/15",
          compact ? "h-4 w-4" : "h-6 w-6"
        )}
      >
        <FaCheck className="h-3 w-3 text-brand" aria-hidden="true" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className={clsx("inline-flex items-center justify-center", compact ? "h-4 w-4" : "h-6 w-6")}>
        <FaMinus className="h-3 w-3 text-muted-foreground/40" aria-hidden="true" />
      </span>
    );
  }
  return (
    <span className="text-xs font-medium text-foreground">{String(value)}</span>
  );
}

export default ServiceComparisonTable;
