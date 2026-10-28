import type { IconType } from "react-icons";
import {
  FaUsers,
  FaShieldAlt,
  FaLeaf,
  FaHandshake,
  FaLightbulb,
  FaTruck,
  FaRecycle,
  FaGlobeAsia,
  FaNetworkWired,
  FaGraduationCap,
  FaHeartbeat,
  FaHome,
  FaCoins,
  FaClock,
  FaUserShield,
} from "react-icons/fa";

export type CulturePillar = {
  title: string;
  description: string;
  icon: IconType;
};

export type Benefit = {
  title: string;
  description: string;
  icon: IconType;
};

export type CareerStream = {
  title: string;
  description: string;
  icon: IconType;
  /** Departments / teams that fall under this stream. */
  teams: string[];
};

export const CAREERS = {
  hero: {
    label: "Careers",
    title: "Build a career that does the work properly.",
    description:
      "Greenics hires across four specialised verticals — from sanitation field staff and logistics planners to trade desk analysts and cybersecurity engineers. We look for people who take the work seriously, treat colleagues fairly, and want to be measured against outcomes that matter.",
  },
  pillars: [
    {
      title: "Outcomes over optics",
      description:
        "We measure roles against measurable outcomes — tonnes diverted, fleet utilisation, on-time clearance, incidents prevented — not hours logged or decks produced.",
      icon: FaLightbulb,
    },
    {
      title: "Dignity for every role",
      description:
        "A sanitation worker in the field and a security engineer in the SOC are both treated as professionals. Training, gear, fixed hours and a written grievance channel apply to everyone.",
      icon: FaUserShield,
    },
    {
      title: "Sustainability is the brief",
      description:
        "Every role at Greenics connects, directly or indirectly, to a cleaner, safer or more accountable way of operating. If that does not appeal to you, this is not the right place.",
      icon: FaLeaf,
    },
    {
      title: "Integrated, not siloed",
      description:
        "Our four verticals share standards, reporting and escalation. You will work alongside people from other practices — that cross-pollination is intentional, not incidental.",
      icon: FaHandshake,
    },
  ] as CulturePillar[],
  benefits: [
    {
      title: "Health & insurance",
      description:
        "Group medical cover for staff and dependants, plus role-appropriate accident insurance for field and operations roles.",
      icon: FaHeartbeat,
    },
    {
      title: "Learning & upskilling",
      description:
        "Sponsored certifications, on-the-job cross-training across verticals, and a documented learning budget per employee per year.",
      icon: FaGraduationCap,
    },
    {
      title: "Fair, fixed hours",
      description:
        "No arbitrary overtime. Field and shift roles are rostered transparently; office roles respect sane working hours.",
      icon: FaClock,
    },
    {
      title: "Hybrid & field-flexible",
      description:
        "Engineering and analyst roles are hybrid-friendly. Operations, logistics and waste roles are field-based by design — and equipped accordingly.",
      icon: FaHome,
    },
    {
      title: "Transparent compensation",
      description:
        "Pay bands are documented per role and level, reviewed annually. There are no opaque 'market' surprises during appraisals.",
      icon: FaCoins,
    },
    {
      title: "Safe workplace",
      description:
        "Written anti-harassment policy, a named internal committee, and a confidential channel — for everyone from drivers to designers.",
      icon: FaShieldAlt,
    },
  ] as Benefit[],
  streams: [
    {
      title: "Waste & Field Operations",
      description:
        "Sanitation workers, supervisors, route leads, processing-facility staff and community program coordinators.",
      icon: FaRecycle,
      teams: ["Collection", "Processing", "Community Programs", "Compliance"],
    },
    {
      title: "Logistics & Fleet",
      description:
        "Drivers, fleet supervisors, dispatch planners, route optimisers and warehouse operations staff.",
      icon: FaTruck,
      teams: ["Dispatch", "Fleet Operations", "Planning", "Warehouse"],
    },
    {
      title: "Trading Desk",
      description:
        "Sourcing analysts, documentation specialists, customs coordinators and vendor-management leads.",
      icon: FaGlobeAsia,
      teams: ["Sourcing", "Documentation", "Customs", "Vendor Mgmt"],
    },
    {
      title: "Software & Cybersecurity",
      description:
        "Security engineers, SOC analysts, GRC consultants, platform engineers and incident responders.",
      icon: FaNetworkWired,
      teams: ["SOC", "GRC", "Engineering", "Incident Response"],
    },
  ] as CareerStream[],
  process: [
    {
      step: "01",
      title: "Application",
      description:
        "Send your CV and a short note on why Greenics, via the form on this page or by email.",
    },
    {
      step: "02",
      title: "Conversation",
      description:
        "A first call with the hiring lead — practical, not performative. We talk through the role, your work, and mutual fit.",
    },
    {
      step: "03",
      title: "Work sample",
      description:
        "A short, paid work sample or case discussion relevant to the role. No whiteboard riddles, no take-home marathons.",
    },
    {
      step: "04",
      title: "Team & offer",
      description:
        "Meet 1–2 future teammates, then a written offer with the documented pay band for the role and level.",
    },
  ],
  applicationNote:
    "We do not list open roles publicly until they are confirmed and budgeted. If a vertical above matches your background, send a note and we will reach out when a relevant opening is live. We do not invent job titles to look busy.",
};
