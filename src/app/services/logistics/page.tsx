import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/services";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceKeyTerms } from "@/components/services/ServiceKeyTerms";

const service = getServiceBySlug("logistics")!;

export const metadata: Metadata = {
  title: "Logistics — Pan-India Transport & Fleet Network",
  description:
    "Robust pan-India logistics network with a strong fleet, real-time tracking and reliable on-time delivery. 120+ total fleet, 20 existing vehicles, 100 on order.",
  alternates: { canonical: "/services/logistics" },
  openGraph: {
    title: "Logistics — Greenics Enterprises",
    description:
      "Strong fleet. Nationwide reach. Seamless delivery across India with real-time tracking.",
    images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
  },
};

export default function LogisticsPage() {
  if (!service) notFound();
  return (
    <>
      <ServiceDetail service={service} />
      <ServiceKeyTerms categories={["Logistics", "Governance"]} />
    </>
  );
}
