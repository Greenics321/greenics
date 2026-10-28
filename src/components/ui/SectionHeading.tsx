import { clsx } from "clsx";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {label && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          <span className="brand-dot h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          <span className="h-px w-6 bg-brand/70" aria-hidden="true" />
          {label}
        </span>
      )}
      <Heading
        className={clsx(
          "font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]",
          align === "center" && "mx-auto max-w-3xl"
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={clsx(
            "max-w-2xl text-base leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
