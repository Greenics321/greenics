import type { IconType } from "react-icons";
import {
  FaRecycle,
  FaLeaf,
  FaTruck,
  FaHandshake,
  FaClipboardCheck,
  FaUsers,
  FaCity,
  FaBolt,
  FaTree,
  FaWater,
  FaShieldAlt,
  FaGlobeAsia,
} from "react-icons/fa";

export type Pillar = {
  title: string;
  description: string;
  icon: IconType;
};

export type Principle = {
  title: string;
  description: string;
};

export const SUSTAINABILITY = {
  hero: {
    label: "Sustainability",
    title: "A cleaner, safer, more accountable way of doing business",
    description:
      "Sustainability at Greenics is not a marketing layer — it is the operating standard behind every service line. From waste that does not reach a landfill, to logistics that minimises empty miles, to cybersecurity that prevents the waste of breached systems, we measure ourselves against environmental and social impact, not just commercial output.",
  },
  pillars: [
    {
      title: "Aligned with Swachh Bharat",
      description:
        "Our waste vertical is built around the Swachh Bharat Mission — door-to-door collection, segregation at source, safe processing and dignity for sanitation workers.",
      icon: FaRecycle,
    },
    {
      title: "Circular over linear",
      description:
        "We design collection-to-processing chains that recover material and energy instead of sending waste straight to landfill. Circularity is the default, not the upgrade.",
      icon: FaLeaf,
    },
    {
      title: "Efficient logistics",
      description:
        "Route optimisation, fleet utilisation and consolidated dispatch reduce empty miles, fuel burn and emissions across our pan-India transport network.",
      icon: FaTruck,
    },
    {
      title: "Responsible trade",
      description:
        "Our trading desk favours suppliers and product categories that meet environmental and labour norms, and avoids categories linked to ecological harm.",
      icon: FaHandshake,
    },
    {
      title: "Secure systems, less waste",
      description:
        "Cybersecurity prevents the enormous material and human cost of breaches — every incident avoided is infrastructure, time and trust preserved.",
      icon: FaShieldAlt,
    },
    {
      title: "Compliance & reporting",
      description:
        "Documentation, audit trails and transparent reporting are built into every engagement — sustainability claims must be evidence-backed.",
      icon: FaClipboardCheck,
    },
  ] as Pillar[],
  principles: [
    {
      title: "Reduce first, recover second, dispose last",
      description:
        "We follow the waste hierarchy in the order that creates the least environmental harm — reduction at source, then reuse, then recovery, then controlled disposal.",
    },
    {
      title: "Dignity for the workforce",
      description:
        "Sanitation workers, drivers and field staff are trained, equipped and protected. Sustainability includes the people who actually deliver the work.",
    },
    {
      title: "Measure, then report",
      description:
        "Tonnes diverted, fleet utilisation, recovery rates — we work with clients to define metrics that make sustainability claims auditable, not aspirational.",
    },
    {
      title: "Local context, global standards",
      description:
        "We operate to Indian regulatory norms and align with international best practice, so clients operating across borders get one consistent standard.",
    },
  ] as Principle[],
  commitments: [
    "Design every collection route to minimise fuel and emissions",
    "Maximise material recovery before any residual goes to landfill",
    "Protect sanitation workers with training, gear and fair treatment",
    "Optimise fleet utilisation to cut empty miles across India",
    "Build audit trails and reporting into every engagement",
    "Treat cybersecurity as material sustainability — breaches waste resources",
  ],
  sdgAlignment: [
    { code: "SDG 11", label: "Sustainable Cities & Communities", icon: FaCity },
    { code: "SDG 12", label: "Responsible Consumption & Production", icon: FaRecycle },
    { code: "SDG 13", label: "Climate Action", icon: FaBolt },
    { code: "SDG 8", label: "Decent Work & Economic Growth", icon: FaUsers },
    { code: "SDG 6", label: "Clean Water & Sanitation", icon: FaWater },
    { code: "SDG 17", label: "Partnerships for the Goals", icon: FaGlobeAsia },
  ],
};
