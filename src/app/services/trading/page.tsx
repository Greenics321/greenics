import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/services";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceKeyTerms } from "@/components/services/ServiceKeyTerms";

const service = getServiceBySlug("trading")!;

export const metadata: Metadata = {
  title: "Trading — Import & Export Solutions",
  description:
    "End-to-end import & export solutions with complete logistics support, from global sourcing to on-time delivery at your doorstep in India.",
  alternates: { canonical: "/services/trading" },
  openGraph: {
    title: "Trading — Greenics Enterprises",
    description:
      "Global sourcing. Local delivery. A single accountable partner across the full trade cycle.",
    images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
  },
};

export default function TradingPage() {
  if (!service) notFound();
  return (
    <>
      <ServiceDetail service={service} />
      <ServiceKeyTerms categories={["Trading", "Logistics", "Governance"]} />
    </>
  );
}
