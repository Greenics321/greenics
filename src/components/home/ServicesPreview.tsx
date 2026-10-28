import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { services } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesPreview() {
  return (
    <section className="relative border-b border-hairline bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            label="What We Do"
            title={
              <>
                Four verticals.
                <br className="hidden sm:block" /> One integrated enterprise.
              </>
            }
            description="From sustainable waste management and pan-India logistics to global trading and cybersecurity — Greenics delivers end-to-end solutions across the sectors that matter."
            className="max-w-2xl"
          />
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            View all services
            <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`card-accent reveal reveal-delay-${i + 1} group relative flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)]`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-hairline">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.1)_0%,rgba(3,17,31,0.65)_100%)]"
                    aria-hidden="true"
                  />
                  {/* Icon chip */}
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-md border border-brand/30 bg-background/80 backdrop-blur-sm">
                    <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                  </div>
                  {/* Label */}
                  <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                    {service.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-brand">
                    Explore
                    <FaArrowRight
                      className="h-3 w-3 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ServicesPreview;
