import type { IconType } from "react-icons";
import {
  FaBullhorn,
  FaHandshake,
  FaRecycle,
  FaTruck,
  FaShieldAlt,
  FaGlobeAsia,
  FaLeaf,
  FaUsers,
  FaFileImport,
  FaNetworkWired,
} from "react-icons/fa";

export type NewsCategory =
  | "Company"
  | "Waste Management"
  | "Logistics"
  | "Trading"
  | "Cybersecurity"
  | "Sustainability";

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  /** ISO date string. */
  date: string;
  /** Short body — a few paragraphs. */
  body: string[];
  icon: IconType;
  /** Type of update — announcement, partnership note, operational note, etc. */
  type: "Announcement" | "Operational Note" | "Partnership" | "Perspective";
  /** Clearly-labelled placeholder — no real dates or named third parties. */
  framing: string;
};

/**
 * NOTE: All items below are clearly-labelled REPRESENTATIVE news items used to
 * demonstrate the news section. They do not cite real dates, named third
 * parties, or invented financials. Replace with real, dated, permissioned
 * news items before any production launch.
 */
export const newsItems: NewsItem[] = [
  {
    slug: "expanding-pan-india-logistics-footprint",
    title: "Expanding our pan-India logistics footprint",
    excerpt:
      "Additional vehicles on order to deepen coverage across south and east India — a planned capacity expansion, not a speculative one.",
    category: "Logistics",
    date: "2025-02",
    type: "Announcement",
    framing: "Representative update",
    icon: FaTruck,
    body: [
      "We are expanding our pan-India logistics footprint with additional vehicles on order, focused on deepening coverage across south and east India. This is a planned capacity expansion tied to committed engagement pipelines — not a speculative fleet build.",
      "The expansion follows the fleet-utilisation diagnostic discipline we apply to every logistics engagement: capacity follows measured demand, not the other way around. Vehicles enter service only when the lane economics and back-haul matching are already worked out.",
      "Clients with existing logistics engagements will see expanded lane availability as the new vehicles come online. Prospective clients evaluating a pan-India logistics partner can request a lane-availability check via the contact form.",
    ],
  },
  {
    slug: "swachh-bharat-aligned-waste-program-new-cluster",
    title: "Swachh Bharat-aligned waste program — new ward cluster in scope",
    excerpt:
      "A structured expansion of a municipal waste engagement to an additional ward cluster, with source-segregation and processing capacity already linked.",
    category: "Waste Management",
    date: "2025-01",
    type: "Operational Note",
    framing: "Representative update",
    icon: FaRecycle,
    body: [
      "A municipal waste engagement has expanded to an additional ward cluster, bringing the program's source-segregation, collection and processing chain to a wider urban area.",
      "The expansion follows the operating standard we hold for every waste engagement: segregated streams are connected to processing capacity within a sensible haul radius before collection begins. Capacity-first, not coverage-first.",
      "Sanitation-worker training, kit and rostering extend to the new cluster on day one — the same standards apply across the full engagement, not just the original wards.",
    ],
  },
  {
    slug: "cybersecurity-baseline-engagement-financial-services",
    title: "Cybersecurity baseline engagement with a financial services firm",
    excerpt:
      "A baseline-first engagement that paused a SIEM procurement to close the five most common breach vectors first — the right order of operations.",
    category: "Cybersecurity",
    date: "2024-12",
    type: "Partnership",
    framing: "Representative update",
    icon: FaShieldAlt,
    body: [
      "A financial services firm has engaged Greenics for a cybersecurity baseline hardening program. The engagement begins with the five-control baseline — phishing-resistant MFA, patch SLA on internet-facing systems, elimination of exposed RDP, privileged-access management for service accounts, and tested offline backup.",
      "The client had initially planned to procure a SIEM before hardening the baseline. We recommended — and the client agreed — to pause the SIEM procurement until the baseline controls are in place. A SIEM is more useful against a hardened environment than a porous one.",
      "The engagement will report against the five baseline controls quarterly, with the SIEM procurement decision revisited once the baseline is stable.",
    ],
  },
  {
    slug: "trading-desk-import-readiness-workshop",
    title: "Trading desk runs import-readiness workshop for first-time importers",
    excerpt:
      "A pre-PO readiness workshop that caught three documentation gaps before a container sailed — the checklist as a gate, not a formality.",
    category: "Trading",
    date: "2024-11",
    type: "Operational Note",
    framing: "Representative update",
    icon: FaFileImport,
    body: [
      "Our trading desk ran an import-readiness workshop for a group of first-time importers preparing to bring a new product category into India. The workshop walks through the 12-point readiness checklist against the chosen supplier, product and Incoterm.",
      "Across the workshop, three documentation gaps were caught before any purchase order was signed — a certificate-of-origin ambiguity, an HS-classification question, and a missing pre-shipment inspection requirement. Each would have caused customs detention had the consignment sailed as originally planned.",
      "The checklist is now the participants' internal gate for all future imports — which is exactly the outcome we design the workshop around.",
    ],
  },
  {
    slug: "integrated-engagement-manufacturing-campus",
    title: "Integrated engagement with a manufacturing campus",
    excerpt:
      "One named owner across waste, logistics, trade documentation and cybersecurity for a multi-site manufacturer — the integrated model in practice.",
    category: "Company",
    date: "2024-10",
    type: "Partnership",
    framing: "Representative update",
    icon: FaHandshake,
    body: [
      "Greenics has begun an integrated engagement with a manufacturing campus, consolidating four previously-separate vendor relationships — waste collection, fleet logistics, import documentation and IT security — under one named Greenics owner.",
      "The engagement follows the integrated model: one monthly report across all four verticals, one escalation path, one accountable executive. The client's audit committee has adopted the integrated report as its primary source of operational truth.",
      "The first quarterly outcome review is scheduled against baseline metrics established during the diagnostic phase — diversion rate, loaded-km, on-time customs clearance, and security-baseline compliance.",
    ],
  },
  {
    slug: "sustainability-metric-audit-framework-published",
    title: "Sustainability metric audit framework published internally",
    excerpt:
      "A documented framework defining how every sustainability claim resolves to a metric, a baseline and a method — auditable, not aspirational.",
    category: "Sustainability",
    date: "2024-09",
    type: "Perspective",
    framing: "Representative update",
    icon: FaLeaf,
    body: [
      "We have published an internal framework defining how every sustainability claim Greenics makes — in proposals, reports or public materials — must resolve to a metric, a baseline and a method. Claims that cannot produce all three are not made.",
      "The framework covers waste-diversion rate, fleet-utilisation improvement, supplier environmental screening, and cybersecurity breach-prevention (a material sustainability outcome that is often overlooked). Each metric has a documented calculation method and an evidence requirement.",
      "The framework is shared with clients on request and forms the basis of the monthly reporting we produce during engagements. Sustainability claims that cannot survive an audit should not be made — this framework is how we hold ourselves to that.",
    ],
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
