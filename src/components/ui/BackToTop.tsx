"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { clsx } from "clsx";

/**
 * Floating "back to top" button. Appears after the user scrolls past
 * `threshold` pixels. Smooth-scrolls to the top. Respects reduced motion.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = 600;
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll back to top"
      className={clsx(
        "fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-brand/40 bg-background/80 text-brand backdrop-blur-md transition-all duration-300 hover:border-brand hover:bg-brand hover:text-brand-foreground hover:shadow-[0_12px_40px_-12px_rgba(140,198,63,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <FaArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

export default BackToTop;
