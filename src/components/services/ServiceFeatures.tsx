import type { ServiceFeature } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { clsx } from "clsx";

type ServiceFeaturesProps = {
  features: ServiceFeature[];
  /**
   * "strip" — a bordered navy bar of icon + title cells.
   * "light" — a pale band with round navy icons, titles and descriptions.
   */
  variant?: "strip" | "light";
};

export function ServiceFeatures({ features, variant = "strip" }: ServiceFeaturesProps) {
  if (variant === "light") {
    return (
      <section className="bg-[linear-gradient(180deg,#F1F3F5_0%,#DCE0E4_100%)] py-12 text-[#0B1B2B] lg:py-14">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className={clsx(
                    "group flex flex-col items-center px-6 text-center",
                    i > 0 && "sm:border-l sm:border-[#0B1B2B]/15"
                  )}
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0D2A4A] text-white ring-4 ring-[#0D2A4A]/10 transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold uppercase tracking-wide">
                    {f.title}
                  </h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-[#0B1B2B]/80">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }

  const four = features.length === 4;

  return (
    <section className="bg-background py-12 lg:py-14">
      <Container>
        <div
          className={clsx(
            "grid grid-cols-1 rounded-lg border border-white/15 bg-surface/75",
            four ? "sm:grid-cols-2 lg:grid-cols-4" : "lg:grid-cols-3"
          )}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={clsx(
                  "group flex items-center gap-4 px-6 py-7",
                  four && "lg:flex-col lg:px-4 lg:text-center",
                  i > 0 && "border-t border-white/15 lg:border-l lg:border-t-0",
                  four && i === 1 && "sm:border-l sm:border-t-0",
                  four && i === 3 && "sm:border-l"
                )}
              >
                <Icon
                  className="h-9 w-9 shrink-0 text-brand transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="max-w-[11rem] text-base leading-snug text-foreground">{f.title}</h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ServiceFeatures;
