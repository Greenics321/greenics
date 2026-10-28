import type { CSSProperties } from "react";
import { FaCheck } from "react-icons/fa";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";

type ServiceChecklistProps = {
  items: string[];
  title?: string;
  /** Check colour: green for waste management, blue for cybersecurity. */
  tone?: "green" | "blue";
};

export function ServiceChecklist({ items, title, tone = "green" }: ServiceChecklistProps) {
  if (items.length === 0) return null;
  const rows = Math.ceil(items.length / 2);

  return (
    <section className="bg-background pt-12 lg:pt-14">
      <Container>
        {title && <h2 className="font-display text-2xl font-medium text-brand">{title}</h2>}
        {/* Reads down the first column, then the second */}
        <ul
          className={clsx(
            "grid max-w-4xl grid-cols-1 gap-x-12 gap-y-4 sm:grid-flow-col sm:grid-cols-2 sm:[grid-template-rows:repeat(var(--rows),auto)]",
            title && "mt-7"
          )}
          style={{ "--rows": rows } as CSSProperties}
        >
          {items.map((item) => (
            <li key={item} className="flex items-center gap-4 text-base text-foreground">
              <span
                className={clsx(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white ring-2",
                  tone === "blue" ? "bg-[#1E88E5] ring-[#1E88E5]/30" : "bg-[#6FA62C] ring-brand/30"
                )}
              >
                <FaCheck className="h-2.5 w-2.5" aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default ServiceChecklist;
