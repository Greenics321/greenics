/**
 * JSON-LD structured data for Greenics Enterprises.
 * Only includes verifiable facts from the brief (legal name + registered
 * office address). Placeholder contact details and social links are omitted
 * to avoid publishing invented schema data.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Greenics Enterprises Pvt Ltd",
    legalName: "GREENICS ENTERPRISES PVT LTD",
    description:
      "Integrated services in Waste Management, Logistics, Trading & Cybersecurity for a sustainable future.",
    areaServed: ["India", "Global"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No 230/A, MLA's Colony Road No.12, Banjara Hills",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Waste Management",
      "Logistics",
      "Import and Export Trading",
      "Cybersecurity",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default OrganizationJsonLd;
