import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { TbRecycle, TbShieldLock, TbTruckDelivery, TbWorld } from "react-icons/tb";
import { clsx } from "clsx";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";
import { services } from "@/lib/services";
import type { Service } from "@/lib/services";

const CARD_META: Record<Service["slug"], { icon: IconType; tagline: string; accent?: boolean }> = {
  "waste-management": {
    icon: TbRecycle,
    tagline: "Cleaner Communities, Greener Tomorrow",
    accent: true,
  },
  logistics: { icon: TbTruckDelivery, tagline: "Nationwide Reach. Seamless Delivery." },
  trading: { icon: TbWorld, tagline: "Global Sourcing. Local Delivery." },
  software: { icon: TbShieldLock, tagline: "Cybersecurity Solutions for a Secure Future" },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* Skyline sits behind the headline and fades into the cards below */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] lg:h-[38rem]">
        <Image
          src="/images/hero-city.webp"
          alt="City skyline at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,17,31,0.97)_0%,rgba(3,17,31,0.8)_36%,rgba(3,17,31,0.08)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.25)_0%,rgba(3,17,31,0)_30%,rgba(3,17,31,0)_55%,#03111F_100%)]"
          aria-hidden="true"
        />
      </div>

      <Container className="pb-6 pt-16 sm:pt-20 lg:pt-24">
        <div className="max-w-2xl">
          <h1 className="font-display text-[1.75rem] font-semibold uppercase leading-[1.25] tracking-wide text-foreground sm:text-4xl sm:leading-[1.25] lg:text-[2.875rem] lg:leading-[1.25]">
            Building Solutions.
            <br />
            Delivering Excellence.
            <br />
            <span className="text-brand">Creating Impact.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/90">
            {COMPANY.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/services" size="lg" className="min-w-[9.5rem]">
              Our Services
            </Button>
            <Button href="/contact" size="lg" variant="outline" className="min-w-[9.5rem]">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-20 lg:grid-cols-4">
          {services.map((service) => {
            const meta = CARD_META[service.slug];
            const Icon = meta.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col items-center rounded-lg border border-white/15 bg-surface/75 px-4 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/70 hover:bg-surface-light sm:px-6 sm:py-10"
              >
                <Icon
                  className={clsx(
                    "h-14 w-14 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16",
                    meta.accent ? "text-brand" : "text-foreground"
                  )}
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <h2 className="mt-6 font-display text-base font-semibold uppercase tracking-wide text-foreground sm:text-lg">
                  {service.shortTitle}
                </h2>
                <p className="mt-3 max-w-[11rem] text-sm leading-relaxed text-foreground/75">
                  {meta.tagline}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Hero;
