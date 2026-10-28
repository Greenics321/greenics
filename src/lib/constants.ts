import type { IconType } from "react-icons";
import {
  FaTruck,
  FaRecycle,
  FaGlobeAsia,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaLeaf,
  FaNetworkWired,
  FaShieldVirus,
  FaDatabase,
  FaClipboardCheck,
  FaExclamationTriangle,
  FaSearch,
  FaUserShield,
  FaRoute,
  FaWarehouse,
  FaShippingFast,
  FaHandshake,
  FaCoins,
  FaMapMarkedAlt,
  FaClock,
  FaBoxOpen,
  FaFileImport,
  FaPassport,
} from "react-icons/fa";

export const COMPANY = {
  name: "Greenics Enterprises Pvt Ltd",
  shortName: "Greenics",
  legalName: "GREENICS ENTERPRISES PVT LTD",
  tagline: "Building Solutions. Delivering Excellence. Creating Impact.",
  description:
    "Integrated services in Waste Management, Logistics, Trading & Cybersecurity for a sustainable future.",
  address: {
    line1: "Plot No 230/A, MLA's Colony Road No.12",
    line2: "Banjara Hills, Hyderabad",
    city: "Telangana",
    country: "India",
  },
  email: "info@greenics.co",
  phone: "+91 95154 44050",
  phoneAlt: "+91 96763 94455",
  whatsapp: "+91 95154 44050",
  serviceDesk: "1800-000-0000",
  website: "https://www.greenics.co",
  foundedYear: 2024,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;

/**
 * Social profiles. Fill in a full URL to show the icon in the footer and on
 * the contact page; entries left empty are hidden so no dead links render.
 */
const ALL_SOCIAL_LINKS: { label: string; href: string; icon: "linkedin" | "twitter" | "facebook" | "instagram" }[] = [
  { label: "LinkedIn", href: "", icon: "linkedin" },
  { label: "X", href: "", icon: "twitter" },
  { label: "Facebook", href: "", icon: "facebook" },
  { label: "Instagram", href: "", icon: "instagram" },
];

export const SOCIAL_LINKS = ALL_SOCIAL_LINKS.filter((s) => s.href.startsWith("http"));

export const STATS = [
  { value: "120+", label: "Total Fleet", highlight: true },
  { value: "20", label: "Existing Vehicles", highlight: false },
  { value: "100", label: "Vehicles on Order", highlight: false },
  { value: "India & Global", label: "Network", highlight: false },
] as const;

export const WHY_GREENICS = [
  {
    title: "Integrated Solutions",
    description:
      "Four specialised business verticals under one corporate roof — engineered to work together.",
    icon: FaNetworkWired,
  },
  {
    title: "Pan-India & Global Reach",
    description:
      "Operations spanning the length of India with select international trade partnerships.",
    icon: FaGlobeAsia,
  },
  {
    title: "Reliable & Timely Delivery",
    description:
      "A disciplined logistics backbone that keeps commitments, schedules and SLAs intact.",
    icon: FaClock,
  },
  {
    title: "Technology Driven",
    description:
      "Real-time tracking, cybersecurity and modern systems power every service we deliver.",
    icon: FaShieldAlt,
  },
  {
    title: "Commitment to Excellence",
    description:
      "From sanitation workers to security engineers — a culture of doing things properly.",
    icon: FaLeaf,
  },
] as const;

export const CONTACT_CARDS = [
  {
    title: "Call Us",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
    icon: FaHandshake,
    description: "Mon–Sat, 9:00 AM – 7:00 PM IST",
  },
  {
    title: "Email Us",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    icon: FaRoute,
    description: "We reply within one business day",
  },
  {
    title: "WhatsApp Us",
    value: COMPANY.whatsapp,
    href: `https://wa.me/${COMPANY.whatsapp.replace(/[^\d]/g, "")}`,
    icon: FaArrowRight,
    description: "Quick queries & instant responses",
  },
  {
    title: "Service Desk",
    value: COMPANY.serviceDesk,
    href: `tel:${COMPANY.serviceDesk}`,
    icon: FaShieldAlt,
    description: "24×7 enterprise support line",
  },
] as const;

export const SERVICE_INTERESTS = [
  "Waste Management",
  "Logistics",
  "Trading",
  "Software / Cybersecurity",
  "Multiple Services",
  "Partnership Enquiry",
] as const;

// Re-export the icons used by individual services so pages can import a single module.
export const ICONS = {
  FaTruck,
  FaRecycle,
  FaGlobeAsia,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaLeaf,
  FaNetworkWired,
  FaShieldVirus,
  FaDatabase,
  FaClipboardCheck,
  FaExclamationTriangle,
  FaSearch,
  FaUserShield,
  FaRoute,
  FaWarehouse,
  FaShippingFast,
  FaHandshake,
  FaCoins,
  FaMapMarkedAlt,
  FaClock,
  FaBoxOpen,
  FaFileImport,
  FaPassport,
};

export type IconName = keyof typeof ICONS;
