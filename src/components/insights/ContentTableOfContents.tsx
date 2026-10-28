"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";

/**
 * A sticky table-of-contents for article detail pages.
 *
 * Builds a TOC from the article's paragraphs (each paragraph's first
 * sentence becomes a "section" anchor). Highlights the section currently
 * in the viewport. Clicking a TOC item smooth-scrolls to that section.
 *
 * Reduced-motion: smooth-scroll is replaced with instant jump.
 */
export function ContentTableOfContents() {
  const [sections, setSections] = useState<
    { id: string; label: string }[]
  >([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // Build TOC entries from the article's <p> children.
    const article = document.querySelector("article");
    if (!article) return;
    const paragraphs = Array.from(
      article.querySelectorAll<HTMLParagraphElement>("div > p")
    );
    if (paragraphs.length === 0) return;

    const entries = paragraphs.map((p, i) => {
      const id = `article-section-${i}`;
      p.id = id;
      const text = p.textContent?.trim() ?? "";
      const words = text.split(/\s+/).slice(0, 8).join(" ");
      const label = words.length < text.length ? `${words}…` : words;
      return { id, label };
    });

    // Defer setState into a rAF so it's not synchronous in the effect body.
    let raf = requestAnimationFrame(() => {
      setSections(entries.slice(0, 6));
    });

    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    paragraphs.slice(0, 6).forEach((p) => observer.observe(p));
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
  }

  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="Article contents"
      className="sticky top-24 hidden xl:block"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
        On this page
      </p>
      <ol className="mt-4 space-y-1 border-l border-hairline-strong">
        {sections.map((s, i) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => handleClick(s.id)}
              aria-current={activeId === s.id ? "true" : undefined}
              className={clsx(
                "-ml-px flex w-full items-start gap-2 border-l-2 py-1.5 pl-3 text-left text-xs leading-relaxed transition-colors",
                activeId === s.id
                  ? "border-brand text-foreground"
                  : "border-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              )}
            >
              <span className={clsx("font-bold tabular-nums", activeId === s.id ? "text-brand" : "text-muted-foreground/60")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="line-clamp-2">{s.label}</span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default ContentTableOfContents;
