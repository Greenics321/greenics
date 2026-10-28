"use client";

import { useState } from "react";
import type { Service } from "@/lib/services";
import { services } from "@/lib/services";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { clsx } from "clsx";

type Tab = "overview" | "capabilities" | "process";

const TABS: { id: Tab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "process", label: "Process" },
];

/**
 * A tabbed view of the four service verticals. Users pick a vertical (left
 * rail on desktop, select on mobile) and a tab (overview / capabilities /
 * process). Fully keyboard accessible.
 */
export function ServiceTabs() {
  const [activeSlug, setActiveSlug] = useState<Service["slug"]>(services[0].slug);
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const service = services.find((s) => s.slug === activeSlug)!;

  return (
    <div className="overflow-hidden rounded-lg border border-hairline bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left rail — vertical selector (desktop) */}
        <div className="border-b border-hairline lg:col-span-3 lg:border-b-0 lg:border-r">
          <div role="tablist" aria-label="Select a service" className="flex flex-row lg:flex-col">
            {services.map((s) => {
              const Icon = s.icon;
              const active = s.slug === activeSlug;
              return (
                <button
                  key={s.slug}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`tabpanel-${s.slug}`}
                  id={`tab-${s.slug}`}
                  onClick={() => setActiveSlug(s.slug)}
                  className={clsx(
                    "group flex flex-1 items-center gap-3 px-5 py-4 text-left transition-colors lg:flex-none lg:py-5",
                    active
                      ? "bg-brand/10 text-foreground"
                      : "text-muted-foreground hover:bg-navy-light hover:text-foreground"
                  )}
                >
                  <span
                    className={clsx(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition-colors",
                      active
                        ? "border-brand/40 bg-brand/15 text-brand"
                        : "border-hairline-strong text-muted-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className={clsx("text-sm font-bold", active ? "text-foreground" : "text-foreground")}>
                      {s.shortTitle}
                    </span>
                    <span className="hidden text-[10px] uppercase tracking-[0.16em] text-muted-foreground lg:block">
                      {s.label}
                    </span>
                  </span>
                  {active && (
                    <span className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-brand lg:block" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right panel — tabbed content */}
        <div className="lg:col-span-9">
          {/* Tab strip */}
          <div className="flex items-center gap-1 border-b border-hairline px-3 pt-3">
            {TABS.map((tab) => {
              const active = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`tabpanel-content-${service.slug}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    "relative px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
                    active ? "text-brand" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 bg-brand" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Panel content */}
          <div
            role="tabpanel"
            id={`tabpanel-content-${service.slug}`}
            className="p-6 lg:p-8"
          >
            {activeTab === "overview" && (
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {service.description}
                </p>
                {service.heroHighlight && (
                  <p className="mt-5 font-display text-sm font-semibold text-brand sm:text-base">
                    {service.heroHighlight}
                  </p>
                )}
                <Link
                  href={`/services/${service.slug}`}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Open full service page
                  <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            )}

            {activeTab === "capabilities" && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="flex items-start gap-3 rounded-md border border-hairline bg-background p-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
                        <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wide text-foreground">
                          {f.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {f.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === "process" && (
              <div>
                {service.process ? (
                  <ol className="relative space-y-4 border-l border-hairline-strong pl-6">
                    {service.process.map((step, i) => {
                      const Icon = step.icon;
                      return (
                        <li key={step.title} className="relative">
                          <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full border border-brand/30 bg-background">
                            <Icon className="h-3 w-3 text-brand" aria-hidden="true" />
                          </span>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                            Step {String(i + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-1 text-sm font-bold uppercase tracking-wide text-foreground">
                            {step.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                        </li>
                      );
                    })}
                  </ol>
                ) : service.checklist ? (
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {service.checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 rounded-md border border-hairline bg-background p-3"
                      >
                        <FaCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                        <span className="text-xs font-medium text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    This vertical does not have a defined process chain —
                    engagements are scoped individually.{" "}
                    <Link href="/contact" className="text-brand hover:underline">
                      Talk to us
                    </Link>{" "}
                    about your requirements.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceTabs;
