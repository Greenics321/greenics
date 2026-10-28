import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/services";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(140,198,63,0.10)_0%,transparent_60%)]"
          aria-hidden="true"
        />
      </div>
      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <span className="font-display text-7xl font-bold tracking-tight text-gradient-brand sm:text-9xl">
          404
        </span>
        <h1 className="mt-6 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Try one of the links below to get back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg" withArrow>
            Back to Home
          </Button>
          <Button href="/services" size="lg" variant="outline">
            Browse Services
          </Button>
        </div>

        {/* Quick links */}
        <div className="mt-14 w-full max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Our services
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between rounded-md border border-hairline bg-surface px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                {s.shortTitle}
                <FaArrowRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brand"
        >
          <FaArrowLeft className="h-3 w-3" aria-hidden="true" />
          Greenics Enterprises
        </Link>
      </Container>
    </section>
  );
}
