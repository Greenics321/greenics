import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaSeedling,
} from "react-icons/fa6";
import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { services } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { NewsletterSignup } from "@/components/layout/NewsletterSignup";

const socialIconMap = {
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
} as const;

const CONTACT_EMAIL = COMPANY.email;
const CONTACT_PHONES = [COMPANY.phone, COMPANY.phoneAlt];

const linkClass =
  "inline-flex items-center gap-1.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-brand";
const headingClass =
  "text-xs font-semibold uppercase tracking-[0.2em] text-foreground";

type FooterLink = { label: string; href: string; icon?: IconType };

const COMPANY_LINKS: FooterLink[] = [
  ...NAV_LINKS,
  { label: "Leadership", href: "/leadership" },
  { label: "Careers", href: "/careers" },
];

const EXPLORE_LINKS: FooterLink[] = [
  { label: "Sustainability", href: "/sustainability", icon: FaSeedling },
  { label: "Insights", href: "/insights" },
  { label: "News", href: "/news" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "How We Work", href: "/process" },
  { label: "Partners", href: "/partners" },
  { label: "Glossary", href: "/glossary" },
];

const LINK_GROUPS: { title: string; links: FooterLink[] }[] = [
  { title: "Company", links: COMPANY_LINKS },
  { title: "Explore", links: EXPLORE_LINKS },
  {
    title: "Services",
    links: services.map((s) => ({
      label: s.shortTitle,
      href: `/services/${s.slug}`,
    })),
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { line1, line2, city, country } = COMPANY.address;

  return (
    <footer className="mt-auto bg-navy">
      <Container className="py-12 lg:py-16">
        {/* Newsletter signup */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="max-w-md">
            <h3 className={headingClass}>Sustainability digest</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Occasional updates on waste, logistics, trade &amp; cybersecurity.
              No spam.
            </p>
          </div>
          <div className="w-full md:max-w-sm">
            <NewsletterSignup />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-12 lg:gap-12">
          {/* Brand & contact */}
          <div className="grid gap-8 md:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div>
              <Link href="/" className="group inline-flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-brand/30">
                  <Image
                    src="/images/greenics-icon.png"
                    alt=""
                    width={512}
                    height={512}
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-display text-lg font-bold tracking-tight text-foreground">
                    GREENICS
                  </span>
                  <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                    Enterprises Pvt Ltd
                  </span>
                </span>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Integrated services across Waste Management, Logistics, Trading
                &amp; Cybersecurity — engineered for a sustainable, reliable and
                secure future.
              </p>
              {SOCIAL_LINKS.length > 0 && (
                <div className="mt-6 flex items-center gap-3">
                  {SOCIAL_LINKS.map((s) => {
                    const Icon = socialIconMap[s.icon];
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-hairline-strong text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <div>
              <h3 className={headingClass}>Contact</h3>
              <ul className="mt-4 max-w-sm space-y-3.5 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <FaLocationDot
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <address className="not-italic leading-relaxed">
                    {line1}, {line2}, {city}, {country}.
                  </address>
                </li>
                <li className="flex gap-3">
                  <FaPhone
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span className="flex flex-wrap items-center gap-x-2">
                    {CONTACT_PHONES.map((phone, i) => (
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
                  <FaEnvelope
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="min-w-0 break-words transition-colors hover:text-brand"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:gap-x-8"
          >
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className={headingClass}>{group.title}</h3>
                <ul className="mt-3">
                  {group.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.href}>
                        <Link href={link.href} className={linkClass}>
                          {Icon && (
                            <Icon
                              className="h-3 w-3 text-brand"
                              aria-hidden="true"
                            />
                          )}
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar — right padding keeps the links clear of BackToTop */}
        <div className="mt-10 flex flex-col gap-3 pr-14 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
          <p className="text-xs leading-relaxed text-muted-foreground">
            &copy; {year} {COMPANY.legalName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="py-1 text-xs text-muted-foreground transition-colors hover:text-brand"
            >
              Privacy Policy
            </Link>
            <Link
              href="/about"
              className="py-1 text-xs text-muted-foreground transition-colors hover:text-brand"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
