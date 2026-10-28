import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/about.webp"
          alt="Greenics corporate headquarters at dusk"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,17,31,0.97)_0%,rgba(3,17,31,0.85)_50%,rgba(3,17,31,0.6)_100%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" aria-hidden="true" />
      </div>

      <Container className="relative py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="reveal flex items-center gap-3">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
              Let&apos;s build together
            </span>
          </span>
          <h2 className="reveal reveal-delay-1 mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Building solutions.
            <br />
            <span className="text-brand">Delivering excellence.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Partner with an integrated enterprise that takes sustainability,
            reliability and security seriously — across every service line we
            deliver.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg" withArrow>
              Get in Touch
            </Button>
            <Button href="/services" size="lg" variant="outline">
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" aria-hidden="true" />
    </section>
  );
}

export default CTASection;
