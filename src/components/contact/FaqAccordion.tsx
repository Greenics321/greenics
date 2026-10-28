"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { clsx } from "clsx";

export type FaqItem = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

/**
 * Accessible, dependency-free FAQ accordion. One item open at a time.
 * Keyboard: Enter/Space toggles; the header is a real <button>.
 */
export function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[rgba(168,180,190,0.12)] overflow-hidden rounded-lg border border-hairline bg-surface">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.q} className="reveal">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-navy-light lg:px-6 lg:py-6"
              >
                <span
                  className={clsx(
                    "font-display text-sm font-bold tracking-tight transition-colors sm:text-base",
                    isOpen ? "text-brand" : "text-foreground"
                  )}
                >
                  {item.q}
                </span>
                <span
                  className={clsx(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-180 border-brand/40 bg-brand/10 text-brand"
                      : "border-hairline-strong text-muted-foreground"
                  )}
                  aria-hidden="true"
                >
                  <FaChevronDown className="h-3 w-3" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground lg:px-6 lg:pb-6"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaqAccordion;
