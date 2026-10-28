import { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa";
import type { Service } from "@/lib/services";
import { Container } from "@/components/ui/Container";

type ServiceProcessProps = {
  service: Service;
};

/** The trade cycle as a single bordered row of steps joined by arrows. */
export function ServiceProcess({ service }: ServiceProcessProps) {
  if (!service.process || service.process.length === 0) return null;

  return (
    <section className="bg-background pt-12 lg:pt-14">
      <Container>
        <ol className="flex flex-col items-center gap-6 rounded-lg border border-white/15 bg-surface/75 px-6 py-8 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
          {service.process.map((step, i) => {
            const Icon = step.icon;
            return (
              <Fragment key={step.title}>
                {i > 0 && (
                  <li className="flex items-center text-brand sm:mt-3" aria-hidden="true">
                    <FaArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" />
                  </li>
                )}
                <li
                  className="group flex flex-1 flex-col items-center text-center"
                  title={step.description}
                >
                  <Icon
                    className="h-10 w-10 text-brand transition-transform duration-300 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                  <span className="mt-4 max-w-[7rem] text-xs font-medium uppercase leading-snug tracking-wide text-foreground">
                    {step.title}
                  </span>
                </li>
              </Fragment>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export default ServiceProcess;
