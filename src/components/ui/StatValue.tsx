"use client";

import { CountUp } from "./CountUp";

type StatValueProps = {
  value: string;
  className?: string;
};

/**
 * Parses a stat value and renders an animated count-up for numeric values,
 * or plain text for non-numeric values like "India & Global".
 *
 * Supports values like: "120+", "20", "100", "India & Global", "₹50Cr+".
 */
export function StatValue({ value, className }: StatValueProps) {
  // Match an optional prefix (currency/symbol), digits, optional suffix.
  const match = value.match(/^([^0-9]*)([\d,]+)([^0-9]*)$/);

  if (!match) {
    // Non-numeric value (e.g. "India & Global") — render plainly.
    return <span className={className}>{value}</span>;
  }

  const [, prefix, digits, suffix] = match;
  const target = Number(digits.replace(/,/g, ""));

  if (Number.isNaN(target)) {
    return <span className={className}>{value}</span>;
  }

  return (
    <CountUp
      to={target}
      prefix={prefix}
      suffix={suffix}
      className={className}
    />
  );
}

export default StatValue;
