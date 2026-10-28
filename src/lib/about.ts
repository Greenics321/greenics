import type { IconType } from "react-icons";
import {
  FaLeaf,
  FaShieldAlt,
  FaHandshake,
  FaBalanceScale,
  FaLightbulb,
  FaUsers,
  FaRecycle,
  FaTruck,
  FaGlobeAsia,
  FaNetworkWired,
  FaBullseye,
  FaEye,
} from "react-icons/fa";

export const ABOUT = {
  intro: {
    label: "About Greenics",
    title: "An integrated enterprise built for a sustainable, reliable & secure future",
    paragraphs: [
      "Greenics Enterprises Pvt Ltd is an integrated B2B enterprise operating across four specialised verticals — Waste Management, Logistics, Trading and Software / Cybersecurity. We exist to bring operational discipline, modern technology and a genuine sustainability mindset to sectors that shape everyday life.",
      "From keeping cities cleaner under the Swachh Bharat Mission, to moving goods reliably across India, to sourcing globally and delivering locally, to securing our clients' digital assets — every Greenics service line is engineered against the same standard: do the work properly, on time, and with full accountability.",
    ],
  },
  mission: {
    title: "Our Mission",
    body: "To deliver integrated, technology-driven services across waste management, logistics, trading and cybersecurity that create measurable value for our clients, dignity for our workforce and a cleaner, safer environment for the communities we serve.",
  },
  vision: {
    title: "Our Vision",
    body: "To be a trusted enterprise partner that businesses across India and select global markets turn to for sustainable, reliable and secure operations — recognised for the discipline of our execution and the integrity of our people.",
  },
  values: [
    {
      title: "Integrity",
      description: "We do what we say. Documentation, reporting and commitments are honoured without shortcuts.",
      icon: FaBalanceScale,
    },
    {
      title: "Sustainability",
      description: "Every vertical is measured against its environmental impact — not just its commercial output.",
      icon: FaLeaf,
    },
    {
      title: "Reliability",
      description: "Schedules, safety standards and SLAs are non-negotiable. We keep our commitments.",
      icon: FaShieldAlt,
    },
    {
      title: "Partnership",
      description: "We work as an extension of our clients' operations, not just an outside vendor.",
      icon: FaHandshake,
    },
    {
      title: "Innovation",
      description: "Modern systems, real-time tracking and cybersecurity are embedded into every service line.",
      icon: FaLightbulb,
    },
    {
      title: "People First",
      description: "From sanitation workers to security engineers, our people are trained, protected and respected.",
      icon: FaUsers,
    },
  ],
  capabilities: [
    {
      title: "Waste Management",
      description: "Door-to-door collection, segregation, processing, disposal and waste-to-energy — aligned with Swachh Bharat.",
      icon: FaRecycle,
    },
    {
      title: "Logistics",
      description: "Pan-India transport network with a growing fleet, real-time tracking and reliable on-time delivery.",
      icon: FaTruck,
    },
    {
      title: "Trading",
      description: "Import & export solutions with end-to-end logistics support and global supplier partnerships.",
      icon: FaGlobeAsia,
    },
    {
      title: "Software / Cybersecurity",
      description: "Network security, monitoring, data protection, compliance and incident response capabilities.",
      icon: FaNetworkWired,
    },
  ],
  why: [
    "Four specialised verticals under one accountable enterprise",
    "Pan-India operations with select global trade partnerships",
    "Technology-driven execution across every service line",
    "A genuine, measurable commitment to sustainability",
    "Trained, protected and respected workforce",
    "Transparent processes, documentation and reporting",
  ],
};

export const VALUE_ICONS = { FaBullseye, FaEye };
