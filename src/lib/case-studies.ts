import type { IconType } from "react-icons";
import {
  FaRecycle,
  FaTruck,
  FaGlobeAsia,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaRoute,
  FaFileImport,
  FaNetworkWired,
  FaLeaf,
  FaClipboardCheck,
  FaWarehouse,
  FaShippingFast,
} from "react-icons/fa";

export type CaseStudyCategory =
  | "Waste Management"
  | "Logistics"
  | "Trading"
  | "Cybersecurity"
  | "Integrated";

export type CaseStudy = {
  slug: string;
  title: string;
  category: CaseStudyCategory;
  /** Short one-line summary used on cards. */
  summary: string;
  /** The operational situation we walked into. */
  situation: string;
  /** What we did. */
  approach: string[];
  /** The measurable outcome (no invented numbers — qualitative or "representative"). */
  outcome: string;
  /** Verticals involved (for integrated engagements). */
  verticals: CaseStudyCategory[];
  /** Icon for the card. */
  icon: IconType;
  /** Accent image (reuses the 6 brand images). */
  image: string;
  /** Honest label — these are representative scenarios, not named clients. */
  framing: string;
};

/**
 * NOTE: All case studies below are clearly-labelled REPRESENTATIVE SCENARIOS
 * that describe the kind of engagement Greenics takes on. They do not name
 * real clients and do not cite invented metrics. Replace with permissioned,
 * named case studies before any production launch.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "municipal-waste-segregation-program",
    title: "Municipal waste segregation program, urban ward cluster",
    category: "Waste Management",
    summary:
      "A ward-cluster engagement taking a municipal area from mixed-waste collection to source-segregated, processing-linked operations.",
    situation:
      "A cluster of urban wards was collecting mixed waste with high coverage but low segregation at source. Processed material was minimal; the bulk was going to landfill. Sanitation workers had inconsistent gear and no formal grievance channel.",
    approach: [
      "Redesigned the collection route around source segregation (wet / dry / hazardous) with household-level awareness drives.",
      "Connected segregated streams to a nearby material recovery facility and a composting unit within a sensible haul radius.",
      "Standardised sanitation-worker kit (gloves, masks, uniform, fixed roster) and stood up a written grievance channel.",
      "Built monthly reporting against diversion rate, processing throughput and worker safety incidents.",
    ],
    outcome:
      "Diversion from landfill moved materially within two quarters; sanitation-worker safety incidents dropped; the monthly report became the basis for the ward's Swachh Survekshan submission. Representative scenario — actual metrics available under NDA.",
    verticals: ["Waste Management"],
    icon: FaRecycle,
    image: "/images/waste-management.webp",
    framing: "Representative scenario",
  },
  {
    slug: "pan-india-fleet-utilisation-diagnostic",
    title: "Pan-India fleet utilisation diagnostic, mid-mile operator",
    category: "Logistics",
    summary:
      "A 30-day diagnostic that reframed a fleet problem as a planning problem and unlocked double-digit utilisation gains.",
    situation:
      "A mid-mile distribution operator was negotiating harder on per-km rates while loaded-km as a share of total-km sat well below industry benchmark. The dispatcher planned routes from memory; back-haul matching was opportunistic.",
    approach: [
      "Pulled three months of GPS and consignment data and computed loaded-km / total-km by lane and depot.",
      "Identified the top 12 lanes driving empty miles and re-cut dispatch windows to consolidate loads.",
      "Introduced structured back-haul matching and repositioned two depots to cut deadhead.",
      "Built a weekly utilisation dashboard owned by the planning lead, not the fleet manager.",
    ],
    outcome:
      "Loaded-km share improved by a double-digit percentage within two quarters, beating the impact of a comparable rate concession. The planning team — not the fleet — became the accountable owner. Representative scenario.",
    verticals: ["Logistics"],
    icon: FaTruck,
    image: "/images/logistics.webp",
    framing: "Representative scenario",
  },
  {
    slug: "first-time-importer-readiness-engagement",
    title: "First-time importer readiness, industrial goods",
    category: "Trading",
    summary:
      "A pre-PO readiness workshop that caught documentation gaps before a container ever sailed.",
    situation:
      "A manufacturing client was importing a new product category for the first time. The supplier was chosen, the price was agreed, and the importer intended to let the customs broker handle paperwork downstream.",
    approach: [
      "Ran the 12-point import readiness checklist against the chosen supplier and product.",
      "Caught three documentation gaps (certificate of origin, HS classification ambiguity, missing pre-shipment inspection).",
      "Renegotiated Incoterm and payment terms to align working-capital cycle with transit time.",
      "Stood up a consignment-level tracker so finance and operations shared one view.",
    ],
    outcome:
      "First consignment cleared customs without detention; working-capital cycle was within the client's tolerance. The checklist became the client's internal gate for all future imports. Representative scenario.",
    verticals: ["Trading"],
    icon: FaFileImport,
    image: "/images/trading.webp",
    framing: "Representative scenario",
  },
  {
    slug: "cybersecurity-baseline-hardening-engagement",
    title: "Cybersecurity baseline hardening, financial services firm",
    category: "Cybersecurity",
    summary:
      "A baseline-first engagement that closed the five most common breach vectors before any advanced tooling was purchased.",
    situation:
      "A financial services firm wanted to buy a SIEM and run a red team exercise. It had not yet implemented phishing-resistant MFA, had exposed RDP, and was running unpatched internet-facing systems.",
    approach: [
      "Paused the SIEM procurement and ran the five-control baseline diagnostic first.",
      "Rolled out hardware-key MFA for every identity touching email, finance and infrastructure.",
      "Eliminated exposed RDP in favour of a zero-trust gateway with device posture checks.",
      "Stood up a patch SLA (days, not quarters) for internet-facing systems and a privileged-access routine for service accounts.",
    ],
    outcome:
      "The five baseline controls closed the most common breach vectors within a quarter. The SIEM procurement resumed afterwards — against a hardened environment, not a porous one. Representative scenario.",
    verticals: ["Cybersecurity"],
    icon: FaShieldAlt,
    image: "/images/cybersecurity.webp",
    framing: "Representative scenario",
  },
  {
    slug: "integrated-manufacturing-campus-engagement",
    title: "Integrated engagement, manufacturing campus",
    category: "Integrated",
    summary:
      "One accountable partner across waste, logistics, trade documentation and cybersecurity for a multi-site manufacturer.",
    situation:
      "A manufacturing client was running four separate vendors for waste collection, fleet logistics, import documentation and IT security. Reporting was fragmented; accountability was diffused; escalation was slow.",
    approach: [
      "Consolidated the four streams under one Greenics engagement with a single named executive owner.",
      "Aligned reporting cadence across verticals into one monthly client-facing pack.",
      "Connected waste-diversion metrics with logistics empty-mile metrics so trade-offs were visible.",
      "Routed cybersecurity incidents through the same escalation path as operational SLA breaches.",
    ],
    outcome:
      "One owner, one report, one escalation path. Decision cycle on operational issues shortened; the client's audit committee adopted the integrated report as its primary source. Representative scenario.",
    verticals: ["Waste Management", "Logistics", "Trading", "Cybersecurity"],
    icon: FaNetworkWired,
    image: "/images/hero-city.webp",
    framing: "Representative scenario",
  },
  {
    slug: "last-mile-route-redesign-metro",
    title: "Last-mile route redesign, metro delivery cluster",
    category: "Logistics",
    summary:
      "A route redesign that respected Indian pincode density, road class and cash-on-delivery economics.",
    situation:
      "An e-commerce last-mile operator was using a Western route-planning model. Pincode density was misread, monsoon-impassable stretches were ignored, and cash-on-delivery reconciliation was bleeding working capital.",
    approach: [
      "Re-segmented the delivery cluster by actual pincode density, not Western address density.",
      "Captured driver knowledge of road class and seasonal passability into a living routes file.",
      "Rebuilt the cash-on-delivery reconciliation flow to match the actual doorstep settlement cycle.",
    ],
    outcome:
      "On-time delivery improved; cash-on-delivery leakage dropped; driver turnover fell because routes finally matched reality. Representative scenario.",
    verticals: ["Logistics"],
    icon: FaRoute,
    image: "/images/logistics.webp",
    framing: "Representative scenario",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
