import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/services";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ServiceKeyTerms } from "@/components/services/ServiceKeyTerms";

const service = getServiceBySlug("waste-management")!;

export const metadata: Metadata = {
  title: "Waste Management — Swachh Bharat Aligned Services",
  description:
    "End-to-end waste management services aligned with the Swachh Bharat Abhiyan: door-to-door collection, segregation, processing, disposal, waste-to-energy and community programs.",
  alternates: { canonical: "/services/waste-management" },
  openGraph: {
    title: "Waste Management — Greenics Enterprises",
    description:
      "Door-to-door collection, segregation, processing & disposal aligned with the Swachh Bharat Mission.",
    images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
  },
};

export default function WasteManagementPage() {
  if (!service) notFound();
  return (
    <>
      <ServiceDetail service={service} />
      <ServiceKeyTerms categories={["Waste Management", "Governance"]} />
    </>
  );
}
