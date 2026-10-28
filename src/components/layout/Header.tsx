"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { clsx } from "clsx";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Sticky shadow after a small scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeDrawer = () => setOpen(false);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full border-b border-hairline bg-background/85 backdrop-blur-md transition-colors duration-300",
        scrolled && "bg-background/95 border-hairline-strong shadow-[0_8px_30px_-20px_rgba(0,0,0,0.9)]"
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${COMPANY.name} home`}
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-brand/30 lg:h-12 lg:w-12">
            <Image
              src="/images/greenics-icon.png"
              alt=""
              width={512}
              height={512}
              priority
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-wide text-foreground sm:text-xl">
              GREENICS
            </span>
            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.14em] text-foreground/80">
              Enterprises Pvt Ltd
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "nav-underline text-sm font-medium tracking-wide transition-colors",
                isActive(link.href)
                  ? "is-active text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Get in Touch
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline-strong text-foreground transition-colors hover:border-brand/50 hover:text-brand lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
        </button>
      </Container>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "fixed inset-x-0 top-16 z-40 origin-top border-b border-hairline bg-background/98 backdrop-blur-lg transition-all duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
        id="mobile-nav"
        aria-hidden={!open}
      >
        <Container className="flex flex-col gap-1 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              className={clsx(
                "flex items-center justify-between rounded-md px-4 py-3 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "bg-brand/10 text-brand"
                  : "text-foreground hover:bg-surface-light"
              )}
            >
              {link.label}
              <span
                className={clsx(
                  "h-1.5 w-1.5 rounded-full",
                  isActive(link.href) ? "bg-brand" : "bg-transparent"
                )}
                aria-hidden="true"
              />
            </Link>
          ))}
          <div className="mt-4 px-1">
            <Button href="/contact" size="md" withArrow className="w-full">
              Get in Touch
            </Button>
          </div>
        </Container>
      </div>

      {/* Backdrop */}
      {open && (
        <button
          type="button"
          aria-label="Close menu backdrop"
          className="fixed inset-0 top-16 z-30 bg-background/75 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          tabIndex={-1}
        />
      )}
    </header>
  );
}

export default Header;
