import type { IconType } from "react-icons";
import {
  FaHandshake,
  FaTruck,
  FaRecycle,
  FaGlobeAsia,
  FaShieldAlt,
  FaFileImport,
  FaUsers,
  FaUniversity,
  FaBuilding,
  FaHospital,
  FaIndustry,
  FaShoppingCart,
  FaNetworkWired,
  FaClipboardCheck,
  FaBalanceScale,
  FaSeedling,
} from "react-icons/fa";

export type PartnerCategory = {
  title: string;
  description: string;
  icon: IconType;
  /** Types of partners in this category — clearly representative, not named. */
  examples: string[];
  /** What Greenics brings to / needs from this category. */
  engagement: string;
};

/**
 * NOTE: These are representative partner-category descriptions, not named
 * partners. We do not list real partners without written permission. Each
 * category describes the *type* of relationship Greenics maintains across
 * its four verticals.
 */
export const partnerCategories: PartnerCategory[] = [
  {
    title: "Municipal & Government Bodies",
    description:
      "Urban local bodies, municipal corporations and state-level sanitation missions engaged under the Swachh Bharat framework.",
    icon: FaBuilding,
    examples: [
      "Municipal corporations (waste collection + processing)",
      "State sanitation missions (Swachh Bharat alignment)",
      "Urban development authorities (ward-level programs)",
    ],
    engagement:
      "We operate as an execution partner — collection, segregation, processing and reporting — under the municipal framework, with the ULB retaining accountability.",
  },
  {
    title: "Industrial & Manufacturing Clients",
    description:
      "Manufacturing campuses, industrial estates and multi-site operators needing integrated waste, logistics and compliance support.",
    icon: FaIndustry,
    examples: [
      "Manufacturing campuses (campus-wide waste + logistics)",
      "Industrial estates (shared collection + processing)",
      "Multi-site operators (integrated reporting across sites)",
    ],
    engagement:
      "One named owner across multiple verticals, one monthly report, one escalation path — even when four service lines are in scope.",
  },
  {
    title: "Logistics & Fleet Operators",
    description:
      "Mid-mile and last-mile operators needing fleet diagnostics, route optimisation and back-haul matching support.",
    icon: FaTruck,
    examples: [
      "Mid-mile distribution operators (fleet utilisation)",
      "Last-mile e-commerce clusters (route redesign)",
      "Warehouse operators (dispatch + back-haul)",
    ],
    engagement:
      "Typically starts with a 30-day diagnostic, then moves to an ongoing planning partnership where we own loaded-km as a metric.",
  },
  {
    title: "Importers & Exporters",
    description:
      "First-time and experienced importers needing readiness checks, documentation and customs support across corridors.",
    icon: FaGlobeAsia,
    examples: [
      "First-time importers (readiness checklist + documentation)",
      "Experienced importers (new product categories)",
      "Exporters (origin documentation + compliance)",
    ],
    engagement:
      "Engagement usually begins pre-PO with the 12-point readiness checklist, then continues as consignment-level support.",
  },
  {
    title: "Financial & Regulated Firms",
    description:
      "Banks, NBFCs and regulated entities needing cybersecurity baseline hardening, SOC support and compliance mapping.",
    icon: FaUniversity,
    examples: [
      "Financial services firms (baseline hardening + SOC)",
      "Regulated entities (DPDP, ISO 27001, sector norms)",
      "Fintech and payments (incident response readiness)",
    ],
    engagement:
      "Begins with the five-control baseline, then matures into ongoing monitoring and compliance reporting against the relevant framework.",
  },
  {
    title: "Technology & Security Vendors",
    description:
      "Security tooling, platform and infrastructure vendors we integrate with on client engagements — not resellers, technical partners.",
    icon: FaNetworkWired,
    examples: [
      "Identity & MFA providers (phishing-resistant auth)",
      "SIEM and monitoring platforms (SOC integration)",
      "Cloud and infrastructure providers (secure baselines)",
    ],
    engagement:
      "We are tool-agnostic. When a client already has a vendor, we integrate with it. When they don't, we recommend based on fit, not commission.",
  },
  {
    title: "Processing & Recovery Facilities",
    description:
      "Material recovery facilities, composting units and waste-to-energy plants that handle the downstream of segregated waste streams.",
    icon: FaRecycle,
    examples: [
      "Material recovery facilities (dry waste sorting + baling)",
      "Composting and biogas units (wet waste processing)",
      "Waste-to-energy plants (residual processing)",
    ],
    engagement:
      "We connect segregated streams to the right facility within a sensible haul radius — the facility remains an independent operator.",
  },
  {
    title: "Compliance & Audit Advisors",
    description:
      "Independent compliance, audit and ESG advisors we coordinate with on client engagements requiring third-party verification.",
    icon: FaBalanceScale,
    examples: [
      "Environmental compliance advisors (waste + emissions)",
      "Cybersecurity audit firms (ISO 27001, SOC 2)",
      "ESG and sustainability auditors (metric verification)",
    ],
    engagement:
      "We produce the evidence; the independent advisor verifies it. This separation keeps sustainability claims auditable.",
  },
];

export const PARTNERS_PAGE = {
  hero: {
    label: "Partners & Ecosystem",
    title: "An ecosystem of accountable relationships",
    description:
      "Greenics does not work in isolation. Across our four verticals we maintain structured relationships with municipal bodies, industrial clients, logistics operators, importers, financial firms, technology vendors, processing facilities and independent auditors. What follows is the *type* of partner we work with — not named partners. We do not publish client or partner names without written permission.",
  },
  principles: [
    {
      title: "Permissioned, not promotional",
      description:
        "We do not name partners or clients without written permission. A logo wall without consent is not partnership — it is extraction.",
      icon: FaClipboardCheck,
    },
    {
      title: "Independent, not captive",
      description:
        "Processing facilities, audit firms and technology vendors we work with remain independent operators. We recommend based on fit, not commission.",
      icon: FaBalanceScale,
    },
    {
      title: "One accountable owner",
      description:
        "When an engagement involves multiple partners, Greenics remains the single accountable owner. Partners advise and deliver; we own the outcome.",
      icon: FaHandshake,
    },
    {
      title: "Aligned on sustainability",
      description:
        "Partners in waste, logistics and procurement are evaluated against documented environmental and labour norms — not just commercial terms.",
      icon: FaSeedling,
    },
  ],
};
