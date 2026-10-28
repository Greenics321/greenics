import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type CTABandProps = {
  label?: string;
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTABand({
  label,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Get in Touch",
  secondaryHref = "/services",
  secondaryLabel = "Explore Services",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-navy">
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(140,198,63,0.10)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-25" aria-hidden="true" />
      {/* Decorative corner bracket — top right */}
      <svg
        className="pointer-events-none absolute right-0 top-0 h-24 w-24 text-brand/20"
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden="true"
      >
        <path d="M96 1H1V96" stroke="currentColor" strokeWidth="1" />
        <path d="M96 24H24V96" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
      {/* Decorative corner bracket — bottom left */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 text-brand/20"
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 95H95V0" stroke="currentColor" strokeWidth="1" />
        <path d="M0 72H72V0" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
      <Container className="relative py-16 lg:py-20">
        <div className="reveal flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            {label && (
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                <span className="brand-dot h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                <span className="h-px w-6 bg-brand/70" aria-hidden="true" />
                {label}
              </span>
            )}
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref} size="lg" withArrow>
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} size="lg" variant="outline">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
    </section>
  );
}

export default CTABand;
