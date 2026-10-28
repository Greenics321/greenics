import type { Service } from "@/lib/services";
import { ServiceHero } from "./ServiceHero";
import { ServiceFeatures } from "./ServiceFeatures";
import { ServiceProcess } from "./ServiceProcess";
import { ServiceChecklist } from "./ServiceChecklist";
import { CTABand } from "@/components/ui/CTABand";
import { Container } from "@/components/ui/Container";
import { ServiceRelatedLinks } from "./ServiceRelatedLinks";

type ServiceDetailProps = {
  service: Service;
};

/**
 * Renders a complete service detail page from the centralised service data.
 * Individual routes simply pass their service object — no duplication.
 */
export function ServiceDetail({ service }: ServiceDetailProps) {
  const isSoftware = service.slug === "software";

  return (
    <>
      <ServiceHero service={service} />

      {service.checklist && service.checklist.length > 0 && (
        <ServiceChecklist items={service.checklist} title="Our Services Include:" />
      )}

      {/* Cybersecurity lists its capabilities as a checklist rather than cards */}
      {isSoftware && (
        <ServiceChecklist items={service.features.map((f) => f.title)} tone="blue" />
      )}

      {service.process && service.process.length > 0 && <ServiceProcess service={service} />}

      {!isSoftware && (
        <ServiceFeatures
          features={service.features}
          variant={service.slug === "logistics" ? "light" : "strip"}
        />
      )}

      {service.bottomCta && (
        <section className="bg-background py-12 lg:py-14">
          <Container>
            <p className="rounded-lg border border-white/15 bg-surface-light/80 px-6 py-8 text-center font-display text-xl font-medium text-foreground sm:text-2xl">
              {service.bottomCta}
            </p>
          </Container>
        </section>
      )}

      <CTABand
        label="Work with Greenics"
        title={`Ready to engage our ${service.shortTitle} team?`}
        description="Tell us your scope, geography and timeline — we'll come back with a clear proposal within one business day."
        primaryLabel="Get in Touch"
        secondaryLabel="All Services"
      />

      <ServiceRelatedLinks current={service.slug} />
    </>
  );
}

export default ServiceDetail;
