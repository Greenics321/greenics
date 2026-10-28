"use client";

import { useId, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { clsx } from "clsx";

type GlossaryTooltipProps = {
  term: string;
  definition: string;
};

/**
 * Inline glossary tooltip. Renders the term as a dotted-underlined button;
 * on hover or focus it shows a small popover with the definition.
 * Fully keyboard accessible (focus + hover), and the popover is positioned
 * via CSS (absolute, below the term).
 */
export function GlossaryTooltip({ term, definition }: GlossaryTooltipProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <span className="relative inline-block">
      <button
        type="button"
        className="inline-flex items-center gap-1 text-foreground underline decoration-dotted decoration-brand/60 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
        aria-describedby={open ? id : undefined}
        aria-expanded={open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {term}
        <FaInfoCircle className="h-2.5 w-2.5 text-brand/70" aria-hidden="true" />
      </button>
      {open && (
        <span
          id={id}
          role="tooltip"
          className={clsx(
            "absolute bottom-full left-1/2 z-30 mb-2 w-64 -translate-x-1/2 rounded-md border border-hairline-strong bg-background p-3 text-xs leading-relaxed text-muted-foreground shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)]",
            "pointer-events-none"
          )}
        >
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
            {term}
          </span>
          {definition}
          <span
            className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 border-b border-r border-hairline-strong bg-background"
            aria-hidden="true"
          />
        </span>
      )}
    </span>
  );
}

export default GlossaryTooltip;
