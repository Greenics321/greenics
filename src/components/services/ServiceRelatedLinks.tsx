import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { services } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServiceRelatedLinksProps = {
  current: string;
};

export function ServiceRelatedLinks({ current }: ServiceRelatedLinksProps) {
  const related = services.filter((s) => s.slug !== current);
  return (
    <section className="border-b border-hairline bg-background py-20 lg:py-24">
      <Container>
        <SectionHeading
          label="Explore More"
          title="Other Greenics services"
          description="One enterprise, four specialised verticals — discover how our other business lines can support your operations."
          className="reveal max-w-2xl"
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
          {related.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`reveal reveal-delay-${i + 1} group relative flex flex-col justify-between overflow-hidden rounded-lg border border-hairline bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 lg:p-7`}
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-brand">
                  Explore
                  <FaArrowRight
                    className="h-3 w-3 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ServiceRelatedLinks;
