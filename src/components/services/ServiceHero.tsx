import Image from "next/image";
import type { Service } from "@/lib/services";
import { Container } from "@/components/ui/Container";

type ServiceHeroProps = {
  service: Service;
  priority?: boolean;
};

export function ServiceHero({ service, priority = true }: ServiceHeroProps) {
  const subtitle = service.heroHighlight ?? service.heroSubheadline;
  const figures = service.stats?.filter((s) => !s.highlight) ?? [];
  const total = service.stats?.find((s) => s.highlight);

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {/* Image fills the right side and dissolves into the navy on the left */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[68%]">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 68vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,29,44,0.95),rgba(8,29,44,0.8))] lg:bg-[linear-gradient(90deg,#081D2C_0%,rgba(8,29,44,0.88)_22%,rgba(8,29,44,0.25)_62%,rgba(8,29,44,0.1)_100%)]"
          aria-hidden="true"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,29,44,0.35)_0%,rgba(8,29,44,0)_30%,rgba(8,29,44,0)_70%,#03111F_100%)]"
        aria-hidden="true"
      />

      {service.slug === "waste-management" && (
        <svg
          className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden h-full w-[68%] lg:block"
          viewBox="0 0 680 480"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M210 0C150 150 200 330 520 400 590 415 640 440 680 480"
            stroke="#8CC63F"
            strokeWidth="10"
          />
          <path
            d="M232 0C176 146 226 314 536 384 600 398 648 420 680 452"
            stroke="#5E9426"
            strokeWidth="4"
          />
        </svg>
      )}

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-xl">
          <h1 className="max-w-md font-display text-4xl font-semibold uppercase leading-[1.12] tracking-wide text-foreground sm:text-5xl sm:leading-[1.12]">
            {service.heroHeadline}
          </h1>

          {subtitle && (
            <p className="mt-4 max-w-sm font-display text-xl font-medium leading-snug text-brand sm:text-2xl sm:leading-snug">
              {subtitle}
            </p>
          )}

          <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/90">
            {service.heroDescription}
          </p>

          {figures.length > 0 && (
            <dl className="mt-8 flex items-stretch">
              {figures.map((stat, i) => (
                <div
                  key={stat.label}
                  className={
                    i > 0
                      ? "flex flex-col-reverse gap-1 border-l border-white/30 pl-8"
                      : "flex flex-col-reverse gap-1 pr-8"
                  }
                >
                  <dt className="text-sm text-foreground/85">{stat.label}</dt>
                  <dd className="font-display text-4xl font-semibold leading-none text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {total && (
            <div className="mt-7 inline-flex min-w-[15rem] flex-col rounded-md bg-[linear-gradient(135deg,#7DB733_0%,#5E9426_100%)] px-6 py-5 text-white shadow-[0_18px_40px_-20px_rgba(0,0,0,0.8)]">
              <span className="text-sm font-medium uppercase tracking-wide">{total.label}</span>
              <span className="mt-1 font-display text-5xl font-semibold leading-none">
                {total.value}
              </span>
              <span className="mt-2 text-sm">Vehicles</span>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default ServiceHero;
