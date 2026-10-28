import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { Service } from "@/lib/services";
import { clsx } from "clsx";

type ServiceCardProps = {
  service: Service;
  variant?: "default" | "wide";
  className?: string;
  priority?: boolean;
};

export function ServiceCard({
  service,
  variant = "default",
  className,
  priority = false,
}: ServiceCardProps) {
  const Icon = service.icon;
  const AccentIcon = service.accentIcon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={clsx(
        "card-accent group relative flex flex-col overflow-hidden rounded-lg border border-hairline bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.95)]",
        variant === "wide" && "lg:flex-row",
        className
      )}
    >
      {/* Image */}
      <div
        className={clsx(
          "relative overflow-hidden border-b border-hairline lg:border-b-0 lg:border-r",
          variant === "wide"
            ? "aspect-[16/10] lg:aspect-auto lg:w-[44%]"
            : "aspect-[16/10]"
        )}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority={priority}
          sizes={
            variant === "wide"
              ? "(max-width: 1024px) 100vw, 44vw"
              : "(max-width: 768px) 100vw, 50vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,31,0.15)_0%,rgba(3,17,31,0.7)_100%)]"
          aria-hidden="true"
        />
        {/* Icon chip */}
        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-md border border-brand/30 bg-background/85 backdrop-blur-sm">
          <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
        </div>
        <span className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
          {service.label}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <div className="flex items-center gap-3">
          <AccentIcon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Service
          </span>
        </div>
        <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-foreground lg:text-2xl">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {variant === "wide" ? service.description : service.shortDescription}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-brand">
          Explore
          <FaArrowRight
            className="h-3 w-3 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;
