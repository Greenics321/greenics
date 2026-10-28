import { WHY_GREENICS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="relative border-b border-hairline bg-background py-20 lg:py-28">
      <Container>
        <SectionHeading
          label="Why Greenics"
          title="A partner engineered for reliability, scale & sustainability"
          description="We combine operational discipline across four verticals with a technology backbone and a genuine commitment to a cleaner, safer future."
          align="center"
          className="reveal"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {WHY_GREENICS.map((item, i) => {
            const Icon = item.icon;
            const isWide = i === 0; // first card spans 2 cols on lg for visual rhythm
            return (
              <div
                key={item.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-lg border border-hairline bg-surface p-7 transition-colors hover:border-brand/40 ${
                  isWide ? "lg:col-span-2" : ""
                }`}
              >
                {/* Decorative corner accent */}
                <div
                  className="absolute right-0 top-0 h-16 w-16 -translate-y-8 translate-x-8 rounded-full bg-brand/5 blur-2xl transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                    <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Filler CTA card */}
          <div className="reveal reveal-delay-3 group relative flex flex-col justify-between overflow-hidden rounded-lg border border-brand/30 bg-gradient-to-br from-brand/10 via-surface to-surface p-7">
            <div>
              <h3 className="font-display text-base font-bold tracking-tight text-foreground">
                Ready to work with Greenics?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Talk to our team about your waste, logistics, trading or
                cybersecurity requirements.
              </p>
            </div>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              Start a conversation →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
