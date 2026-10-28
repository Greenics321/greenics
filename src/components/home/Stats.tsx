import { STATS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { StatValue } from "@/components/ui/StatValue";
import { clsx } from "clsx";

export function Stats() {
  return (
    <section className="border-b border-hairline bg-background pb-16 pt-2 lg:pb-20">
      <Container>
        <dl className="grid grid-cols-2 rounded-lg border border-white/15 bg-surface/75 py-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={clsx(
                "flex flex-col-reverse items-center justify-center gap-2 px-4 py-6 text-center",
                i % 2 === 1 && "border-l border-white/15",
                i > 0 && "lg:border-l lg:border-white/15"
              )}
            >
              <dt className="text-xs font-medium uppercase tracking-wider text-foreground/90">
                {stat.label}
              </dt>
              <dd className="font-display text-3xl font-semibold uppercase leading-none tracking-wide tabular-nums text-brand lg:text-4xl">
                <StatValue value={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export default Stats;
