import type { IconType } from "react-icons";
import {
  FaBalanceScale,
  FaShieldAlt,
  FaLeaf,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaEye,
  FaBullseye,
  FaChartLine,
  FaNetworkWired,
  FaClipboardCheck,
  FaGlobeAsia,
} from "react-icons/fa";

export type OperatingPrinciple = {
  number: string;
  title: string;
  description: string;
  icon: IconType;
};

export type LeadershipPillar = {
  title: string;
  description: string;
  icon: IconType;
};

export const LEADERSHIP = {
  hero: {
    label: "Leadership & Governance",
    title: "Principles, not personalities",
    description:
      "Greenics is built around documented operating principles and leadership pillars rather than the personal reputation of any individual. We deliberately do not publish invented leadership bios, photos or titles. What you can read here is the standard our leadership team is held to — and the standard you can hold us to.",
  },
  principles: [
    {
      number: "01",
      title: "Documented standards over opinion",
      description:
        "Decisions are made against documented standards — pay bands, safety norms, escalation paths, reporting cadences. Opinion is welcome, but it does not override the standard.",
      icon: FaClipboardCheck,
    },
    {
      number: "02",
      title: "One accountable owner",
      description:
        "Every engagement, every incident, every deliverable has one named owner. Committees advise; one person is accountable. That name is visible to the client.",
      icon: FaBalanceScale,
    },
    {
      number: "03",
      title: "Bad news travels fast",
      description:
        "Field staff, drivers, analysts and engineers are all expected to escalate problems immediately. We do not shoot messengers. We promote the ones who escalate early.",
      icon: FaShieldAlt,
    },
    {
      number: "04",
      title: "Sustainability is non-negotiable",
      description:
        "Commercial pressure does not override environmental, safety or compliance standards. If a deal requires breaking those, we walk away from the deal.",
      icon: FaLeaf,
    },
  ] as OperatingPrinciple[],
  pillars: [
    {
      title: "Operational discipline",
      description:
        "We run rosters, fleets, processing chains and security operations to documented SLAs. Discipline is not glamorous, but it is what makes the numbers move.",
      icon: FaBullseye,
    },
    {
      title: "Long-horizon thinking",
      description:
        "We plan in years, not quarters. Multi-year municipal and enterprise engagements are structured to survive political and commercial transitions.",
      icon: FaEye,
    },
    {
      title: "Measured growth",
      description:
        "We grow only where we can sustain the standard. A new vertical or geography is opened only when the operational backbone for it is already in place.",
      icon: FaChartLine,
    },
    {
      title: "People development",
      description:
        "Sanitation workers, drivers, analysts and engineers all have a documented learning path. Promotion is internal-first; lateral moves across verticals are encouraged.",
      icon: FaUsers,
    },
    {
      title: "Integrated accountability",
      description:
        "When a client works with two or more verticals, one executive is accountable for the integrated outcome — not just their slice of it.",
      icon: FaNetworkWired,
    },
    {
      title: "Partnership over vendor-ship",
      description:
        "We position ourselves as an extension of the client's operations, not an outside vendor. That changes how we scope, how we report, and how we escalate.",
      icon: FaHandshake,
    },
  ] as LeadershipPillar[],
  governance: [
    "Engagement-level SLAs documented and signed before work starts",
    "Monthly client reporting against agreed metrics — not vanity numbers",
    "Internal audit of safety, compliance and sustainability claims quarterly",
    "Named owner for every engagement visible to the client on day one",
    "Escalation path to a Greenics executive published in every engagement",
    "No sustainability claim published without a backing metric and method",
  ],
  closing: {
    title: "Hold us to this standard",
    body: "If we are not living up to the principles and pillars documented here, we want to hear about it — from clients, from staff, from the communities we operate in. The standard is only real if someone is willing to enforce it.",
  },
};
