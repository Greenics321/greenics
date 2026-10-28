import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/services";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceKeyTerms } from "@/components/services/ServiceKeyTerms";

const service = getServiceBySlug("software")!;

export const metadata: Metadata = {
  title: "Software & Cybersecurity Solutions",
  description:
    "Comprehensive cybersecurity solutions: network security, monitoring, data protection, compliance, threat detection, incident response, risk assessment and consulting.",
  alternates: { canonical: "/services/software" },
  openGraph: {
    title: "Software / Cybersecurity — Greenics Enterprises",
    description:
      "Cybersecurity solutions for a secure tomorrow. Defence-in-depth across people, process and technology.",
    images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
  },
};

export default function SoftwarePage() {
  if (!service) notFound();
  return (
    <>
      <ServiceDetail service={service} />
      <ServiceKeyTerms categories={["Cybersecurity", "Governance"]} />
    </>
  );
}
