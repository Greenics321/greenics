import type { IconType } from "react-icons";
import {
  FaRecycle,
  FaTruck,
  FaGlobeAsia,
  FaShieldAlt,
  FaCheckCircle,
  FaLeaf,
  FaBalanceScale,
  FaCity,
  FaHandshake,
  FaSearch,
  FaShieldVirus,
  FaDatabase,
  FaClipboardCheck,
  FaExclamationTriangle,
  FaUserShield,
  FaRoute,
  FaShippingFast,
  FaFileImport,
  FaPassport,
  FaWarehouse,
  FaCoins,
  FaClock,
  FaNetworkWired,
  FaBoxOpen,
} from "react-icons/fa";

export type ServiceFeature = {
  title: string;
  description: string;
  icon: IconType;
};

export type ServiceStat = {
  value: string;
  label: string;
  highlight?: boolean;
};

export type Service = {
  slug: "waste-management" | "logistics" | "trading" | "software";
  title: string;
  shortTitle: string;
  label: string;
  shortDescription: string;
  description: string;
  heroHeadline: string;
  heroHighlight?: string;
  heroSubheadline?: string;
  heroDescription: string;
  image: string;
  heroImage: string;
  icon: IconType;
  accentIcon: IconType;
  features: ServiceFeature[];
  checklist?: string[];
  process?: { title: string; description: string; icon: IconType }[];
  stats?: ServiceStat[];
  bottomCta?: string;
};

export const services: Service[] = [
  {
    slug: "waste-management",
    title: "Waste Management",
    shortTitle: "Waste Management",
    label: "Swachh Bharat Aligned",
    shortDescription:
      "Door-to-door collection, segregation, processing & disposal aligned with the Swachh Bharat Mission.",
    description:
      "End-to-end waste management services in alignment with the Swachh Bharat Abhiyan, ensuring cleaner cities, healthier communities and a sustainable environment.",
    heroHeadline: "WASTE MANAGEMENT",
    heroSubheadline: "Supporting Swachh Bharat Mission",
    heroDescription:
      "We deliver end-to-end waste management services in alignment with the Swachh Bharat Abhiyan, ensuring cleaner cities, healthier communities and a sustainable environment.",
    image: "/images/waste-management.webp",
    heroImage: "/images/waste-management.webp",
    icon: FaRecycle,
    accentIcon: FaLeaf,
    checklist: [
      "Door-to-Door Collection",
      "Segregation & Transportation",
      "Processing & Disposal",
      "Sanitation Worker Support",
      "Awareness & Community Programs",
      "Waste to Energy Solutions",
      "Compliance & Reporting",
      "Eco-friendly Practices",
    ],
    features: [
      {
        title: "Focused on Sustainability",
        description:
          "Every step of the chain — from collection to processing — is engineered to minimise environmental impact and maximise recovery.",
        icon: FaLeaf,
      },
      {
        title: "Aligned with Government Norms",
        description:
          "Operations, reporting and worker safety follow Swachh Bharat and municipal solid waste management rules.",
        icon: FaClipboardCheck,
      },
      {
        title: "Building a Cleaner Tomorrow",
        description:
          "Community awareness, worker dignity and circular practices that keep cities cleaner, one ward at a time.",
        icon: FaCity,
      },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    shortTitle: "Logistics",
    label: "Pan-India Network",
    shortDescription:
      "Pan-India transport network with a strong fleet, real-time tracking and reliable on-time delivery.",
    description:
      "A robust logistics network with a strong fleet of vehicles to deliver your goods safely, on time, anywhere in India.",
    heroHeadline: "LOGISTICS",
    heroHighlight: "Strong Fleet. Nationwide Reach. Seamless Delivery.",
    heroDescription:
      "We have a robust logistics network with a strong fleet of vehicles to deliver your goods safely, on time, anywhere in India.",
    image: "/images/logistics.webp",
    heroImage: "/images/logistics.webp",
    icon: FaTruck,
    accentIcon: FaRoute,
    stats: [
      { value: "20", label: "Existing Vehicles", highlight: false },
      { value: "100", label: "Vehicles on Order", highlight: false },
      { value: "120+", label: "Total Fleet", highlight: true },
    ],
    features: [
      {
        title: "PAN-INDIA DELIVERY",
        description:
          "From any location to any destination across India, we ensure safe and timely delivery of every consignment.",
        icon: FaShippingFast,
      },
      {
        title: "REAL-TIME TRACKING",
        description:
          "Advanced tracking systems monitor your shipments in real time, giving you end-to-end visibility.",
        icon: FaSearch,
      },
      {
        title: "SAFE & SECURE",
        description:
          "Committed to safety, on-time delivery and customer satisfaction on every single route.",
        icon: FaShieldAlt,
      },
    ],
  },
  {
    slug: "trading",
    title: "Trading",
    shortTitle: "Trading",
    label: "Import & Export",
    shortDescription:
      "End-to-end import & export solutions with complete logistics support and global partnerships.",
    description:
      "Comprehensive import & export solutions with complete logistics support, from global markets to your doorstep in India.",
    heroHeadline: "TRADING",
    heroHighlight: "Global Sourcing. Local Delivery.",
    heroDescription:
      "We provide end-to-end import & export solutions with complete logistics support, from global markets to your doorstep in India.",
    image: "/images/trading.webp",
    heroImage: "/images/trading.webp",
    icon: FaGlobeAsia,
    accentIcon: FaFileImport,
    process: [
      {
        title: "GLOBAL SOURCING",
        description: "Identifying reliable suppliers and quality goods across international markets.",
        icon: FaGlobeAsia,
      },
      {
        title: "IMPORT HANDLING",
        description: "Documentation, quality checks and consolidated shipments into India.",
        icon: FaFileImport,
      },
      {
        title: "CUSTOMS CLEARANCE",
        description: "Licensed clearance procedures with full compliance and minimal dwell time.",
        icon: FaPassport,
      },
      {
        title: "DOMESTIC LOGISTICS",
        description: "Last-mile delivery via our own fleet to any destination across India.",
        icon: FaTruck,
      },
      {
        title: "ON-TIME DELIVERY",
        description: "Tracked, safe and timely delivery to your warehouse or customer doorstep.",
        icon: FaWarehouse,
      },
    ],
    features: [
      {
        title: "Extensive Global Network",
        description:
          "Trusted supplier and partner relationships across multiple continents and product categories.",
        icon: FaNetworkWired,
      },
      {
        title: "End-to-End Trade Solutions",
        description:
          "From sourcing to customs to delivery — a single accountable partner for the full trade cycle.",
        icon: FaHandshake,
      },
      {
        title: "Reliable & Transparent Processes",
        description:
          "Clear documentation, live status updates and complete visibility at every stage.",
        icon: FaClipboardCheck,
      },
      {
        title: "Competitive & Cost Effective",
        description:
          "Optimised routing, consolidation and fleet utilisation keep landed costs under control.",
        icon: FaCoins,
      },
    ],
  },
  {
    slug: "software",
    title: "Software / Cybersecurity",
    shortTitle: "Software",
    label: "Cybersecurity",
    shortDescription:
      "Advanced cybersecurity solutions to protect your business, data and digital assets.",
    description:
      "Comprehensive cybersecurity solutions to protect your business, data and digital assets.",
    heroHeadline: "SOFTWARE",
    heroHighlight: "Cybersecurity Solutions for a Secure Tomorrow",
    heroDescription:
      "We provide comprehensive cybersecurity solutions to protect your business, data and digital assets.",
    image: "/images/cybersecurity.webp",
    heroImage: "/images/cybersecurity.webp",
    icon: FaShieldAlt,
    accentIcon: FaShieldVirus,
    features: [
      {
        title: "Network Security",
        description: "Perimeter, segmentation and zero-trust controls that harden your network edge.",
        icon: FaNetworkWired,
      },
      {
        title: "Security Monitoring",
        description: "24×7 SOC monitoring with rapid detection of anomalies and intrusions.",
        icon: FaSearch,
      },
      {
        title: "Data Protection",
        description: "Encryption, backup and DLP strategies that keep sensitive data sovereign.",
        icon: FaDatabase,
      },
      {
        title: "Compliance Support",
        description: "Mapping and evidence for ISO 27001, DPDP, GDPR and sector regulations.",
        icon: FaClipboardCheck,
      },
      {
        title: "Threat Detection",
        description: "Behavioural analytics and threat intelligence that surface attacks early.",
        icon: FaShieldVirus,
      },
      {
        title: "Incident Response",
        description: "Defined playbooks and rapid containment when an incident is confirmed.",
        icon: FaExclamationTriangle,
      },
      {
        title: "Risk Assessment",
        description: "Structured risk reviews across people, process and technology layers.",
        icon: FaBalanceScale,
      },
      {
        title: "Security Consulting",
        description: "Architecture reviews, vCISO advisory and roadmap-led security programs.",
        icon: FaUserShield,
      },
    ],
    bottomCta: "Secure Systems. Protected Data. Stronger Future.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = services.map((s) => s.slug);
