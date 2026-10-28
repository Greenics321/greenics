"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Numeric target value to animate towards. */
  to: number;
  /** Optional suffix appended after the number (e.g. "+"). */
  suffix?: string;
  /** Optional prefix prepended before the number (e.g. "₹"). */
  prefix?: string;
  /** Duration of the animation in milliseconds. */
  duration?: number;
  /** Class applied to the wrapper span. */
  className?: string;
};

/**
 * Animates a number from 0 to `to` when the element scrolls into view.
 * Respects prefers-reduced-motion (renders the final value immediately).
 */
export function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1600,
  className,
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      // Defer to a rAF so setState is not synchronous in the effect body.
      const raf = requestAnimationFrame(() => {
        setValue(to);
        setDone(true);
      });
      return () => cancelAnimationFrame(raf);
    }

    let raf = 0;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * to));
              if (progress < 1) {
                raf = requestAnimationFrame(tick);
              } else {
                setDone(true);
              }
            };
            raf = requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={`${prefix}${to}${suffix}`}
    >
      {prefix}
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default CountUp;
