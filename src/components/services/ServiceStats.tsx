import type { ServiceStat } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { StatValue } from "@/components/ui/StatValue";
import { clsx } from "clsx";

type ServiceStatsProps = {
  stats: ServiceStat[];
  title?: string;
  label?: string;
};

export function ServiceStats({ stats, title, label }: ServiceStatsProps) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-navy">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-25" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,rgba(140,198,63,0.08)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
      <Container className="relative py-16 lg:py-20">
        {(title || label) && (
          <div className="reveal mb-10 flex flex-col gap-3">
            {label && (
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                <span className="h-px w-6 bg-brand/70" aria-hidden="true" />
                {label}
              </span>
            )}
            {title && (
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {title}
              </h2>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${i + 1} group relative flex flex-col items-center justify-center bg-surface px-6 py-10 text-center transition-colors hover:bg-navy-light lg:py-12`}
            >
              <span
                className={clsx(
                  "absolute inset-x-0 top-0 h-px scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                  stat.highlight ? "bg-brand" : "bg-brand/50"
                )}
                aria-hidden="true"
              />
              <span
                className={clsx(
                  "font-display text-4xl font-bold tracking-tight tabular-nums sm:text-5xl lg:text-6xl",
                  stat.highlight ? "text-gradient-brand" : "text-foreground"
                )}
              >
                <StatValue value={stat.value} />
              </span>
              <span className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServiceStats;
