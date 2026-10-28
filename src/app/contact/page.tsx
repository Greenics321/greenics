import type { Metadata } from "next";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaHeadset,
} from "react-icons/fa6";
import { FaArrowRight, FaHandshake, FaRoute } from "react-icons/fa";
import { COMPANY, CONTACT_CARDS, SOCIAL_LINKS } from "@/lib/constants";
import { CONTACT_FAQS } from "@/lib/faqs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqAccordion } from "@/components/contact/FaqAccordion";
import { MiniMapWidget } from "@/components/contact/MiniMapWidget";
import { CTABand } from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "Contact Us — Talk to the Greenics Team",
  description:
    "Get in touch with Greenics Enterprises Pvt Ltd for waste management, logistics, trading or cybersecurity services. Plot No 230/A, Banjara Hills, Hyderabad, Telangana, India.",
  alternates: { canonical: "/contact" },
};

const socialIcons = {
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};
// Icons for the four contact cards, in CONTACT_CARDS order.
const cardIcons = [FaPhone, FaEnvelope, FaWhatsapp, FaHeadset];
const socials = SOCIAL_LINKS.map((s) => ({ ...s, Icon: socialIcons[s.icon] }));

export default function ContactPage() {
  return (
    <>
      {/* Heading, contact cards and address */}
      <section className="relative isolate overflow-hidden border-b border-hairline bg-navy">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(55%_60%_at_90%_85%,rgba(56,189,248,0.14)_0%,transparent_60%)]"
            aria-hidden="true"
          />
        </div>
        <Container className="relative py-16 lg:py-20">
          <div className="max-w-4xl">
            <h1 className="font-display text-4xl font-semibold uppercase tracking-wide text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-5 text-base leading-relaxed text-foreground/90">
              We&apos;re here to help you.
              <br />
              Get in touch for any of our services.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {CONTACT_CARDS.map((card, i) => {
                const Icon = cardIcons[i] ?? card.icon;
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    className="group flex flex-col items-center rounded-lg border border-white/15 bg-surface-light/60 px-3 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/70"
                  >
                    <Icon
                      className="h-9 w-9 text-foreground transition-colors group-hover:text-brand"
                      aria-hidden="true"
                    />
                    <h2 className="mt-5 text-sm font-medium text-foreground">{card.title}</h2>
                    <p className="mt-2 text-xs leading-relaxed [overflow-wrap:anywhere] text-foreground/75">
                      {card.value}
                    </p>
                  </a>
                );
              })}
            </div>

            <div className="mt-5 flex items-start gap-5 rounded-lg border border-white/15 bg-surface/75 p-6 sm:p-7">
              <FaLocationDot className="mt-1 h-8 w-8 shrink-0 text-foreground" aria-hidden="true" />
              <address className="text-sm not-italic leading-relaxed text-foreground/90">
                <span className="block text-base font-medium text-foreground">{COMPANY.name}</span>
                {COMPANY.address.line1},
                <br />
                {COMPANY.address.line2},
                <br />
                {COMPANY.address.city}, {COMPANY.address.country}.
              </address>
            </div>

            {socials.length > 0 && (
              <div className="mt-10">
                <p className="text-sm text-foreground/80">Follow Us</p>
                <div className="mt-4 flex items-center gap-4">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-foreground transition-colors hover:border-brand hover:text-brand"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Form + address */}
      <section className="border-b border-hairline bg-background py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <SectionHeading
                label="Send an Enquiry"
                title="Tell us about your requirements"
                description="Fill in the form and our team will get back to you within one business day. Fields marked with * are required."
                className="reveal"
              />
              <div className="reveal reveal-delay-1 mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar — address + socials */}
            <div className="lg:col-span-5">
              <div className="reveal reveal-delay-2 flex flex-col gap-5">
                {/* Mini map */}
                <MiniMapWidget />
                {/* Address card */}
                <div className="relative overflow-hidden rounded-lg border border-hairline bg-surface p-7">
                  <div
                    className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-brand/10 blur-3xl"
                    aria-hidden="true"
                  />
                  <span className="relative text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                    Registered Office
                  </span>
                  <h3 className="relative mt-3 font-display text-lg font-bold text-foreground">
                    {COMPANY.legalName}
                  </h3>
                  <ul className="relative mt-5 space-y-4 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <FaLocationDot className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span className="leading-relaxed">
                        Plot No 230/A, MLA&apos;s Colony Road No.12,
                        <br />
                        Banjara Hills, Hyderabad,
                        <br />
                        Telangana, India.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <FaPhone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span className="flex flex-wrap items-center gap-x-2">
                        {[COMPANY.phone, COMPANY.phoneAlt].map((phone, i) => (
                          <span key={phone} className="inline-flex items-center gap-x-2">
                            {i > 0 && (
                              <span className="text-muted-foreground/50" aria-hidden="true">
                                /
                              </span>
                            )}
                            <a
                              href={`tel:${phone.replace(/\s/g, "")}`}
                              className="whitespace-nowrap tabular-nums transition-colors hover:text-brand"
                            >
                              {phone}
                            </a>
                          </span>
                        ))}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <FaEnvelope className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="transition-colors hover:text-brand"
                      >
                        {COMPANY.email}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Follow us */}
                {socials.length > 0 && (
                <div className="rounded-lg border border-hairline bg-surface p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                    Follow Us
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Stay connected for updates, insights and announcements from
                    across our four service lines.
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    {socials.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-hairline-strong text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
                )}

                {/* Response promise */}
                <div className="relative overflow-hidden rounded-lg border border-brand/30 bg-gradient-to-br from-brand/10 via-surface to-surface p-7">
                  <FaHandshake className="h-6 w-6 text-brand" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">
                    A commitment to response time
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Every enquiry is reviewed by a human and answered within one
                    business day — no auto-responders, no ticket queues.
                  </p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
                    Email us directly
                    <FaArrowRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-hairline bg-navy py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                label="Good to know"
                title="Frequently asked questions"
                description="Quick answers to the things clients ask most. Can't find your question? Use the form above and we'll respond within one business day."
                className="reveal"
              />
              <div className="reveal reveal-delay-2 mt-8 flex flex-col gap-3">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center justify-between rounded-lg border border-hairline bg-surface px-5 py-4 text-sm font-medium text-foreground transition-colors hover:border-brand/40"
                >
                  Email the team
                  <FaArrowRight className="h-3 w-3 text-brand" aria-hidden="true" />
                </a>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-between rounded-lg border border-hairline bg-surface px-5 py-4 text-sm font-medium text-foreground transition-colors hover:border-brand/40"
                >
                  Call during business hours
                  <FaArrowRight className="h-3 w-3 text-brand" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <FaqAccordion items={CONTACT_FAQS} />
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        label="Still deciding?"
        title="Talk to a Greenics advisor today."
        description="One conversation is often enough to know if we're the right partner. No obligation, no jargon — just a clear answer."
        primaryLabel="Get in Touch"
        secondaryLabel="Our Services"
      />
    </>
  );
}
