import type { IconType } from "react-icons";
import {
  FaRecycle,
  FaTruck,
  FaGlobeAsia,
  FaShieldAlt,
  FaLeaf,
  FaRoute,
  FaFileImport,
  FaNetworkWired,
} from "react-icons/fa";

export type ArticleCategory =
  | "Waste Management"
  | "Logistics"
  | "Trading"
  | "Cybersecurity"
  | "Sustainability";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  date: string; // ISO date
  readingTime: string;
  author: string;
  authorRole: string;
  image: string;
  icon: IconType;
  /** Optional accent label shown as a kicker on the card. */
  tag?: string;
  /** Article body — rendered as plain paragraphs. */
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "swachh-bharat-urban-waste-playbook",
    title: "The Swachh Bharat urban waste playbook: what actually moves the needle",
    excerpt:
      "Door-to-door collection is the visible part of Swachh Bharat. The harder work — segregation at source, processing capacity and sanitation-worker dignity — is where cities win or lose.",
    category: "Waste Management",
    date: "2025-01-14",
    readingTime: "6 min read",
    author: "Greenics Editorial",
    authorRole: "Waste Management Practice",
    image: "/images/waste-management.webp",
    icon: FaRecycle,
    tag: "Field notes",
    content: [
      "The Swachh Bharat Mission is often measured by tonnage collected and wards covered. Those numbers matter, but they describe inputs, not outcomes. A ward can be 'covered' and still send 80% of its waste to a landfill.",
      "The first real lever is segregation at source. Wet, dry and hazardous streams need to be separated before they ever reach a collection vehicle — not at a distant processing plant. This is unglamorous, repetitive work that depends on household behaviour, not machinery.",
      "The second lever is processing capacity that matches the segregated stream. Segregated wet waste is only valuable if there is a composting or biogas facility within a sensible haul radius. Segregated dry waste is only valuable if there is a material recovery facility that can actually sort and bale it.",
      "The third — and most under-discussed — lever is the sanitation workforce. Gloves, training, fixed hours, safety gear and a written grievance channel are not perks. They are the operating conditions that determine whether a waste program survives its first political transition.",
      "When Greenics scopes a municipal engagement, we design against all three levers together. A collection route that does not connect to processing capacity is theatre. Processing capacity without a trained workforce is a liability. And a trained workforce without source segregation is, frankly, wasted.",
    ],
  },
  {
    slug: "fleet-utilisation-hidden-logistics-cost",
    title: "Fleet utilisation is the hidden logistics cost nobody audits",
    excerpt:
      "Most logistics bills are negotiated on per-km rates. The real cost driver is empty miles, idle assets and routes planned by habit instead of data.",
    category: "Logistics",
    date: "2025-01-09",
    readingTime: "5 min read",
    author: "Greenics Editorial",
    authorRole: "Logistics Practice",
    image: "/images/logistics.webp",
    icon: FaTruck,
    tag: "Operations",
    content: [
      "A truck that moves is not a truck that earns. The economics of road freight are determined by what happens between paid legs — the dead miles, the waiting hours, the routes planned around a dispatcher's memory rather than actual demand.",
      "Per-kilometre rate negotiation gets all the attention because it is easy to benchmark. But a 5% improvement in fleet utilisation — measured as loaded-km divided by total-km — almost always beats a 5% rate concession. The first compounds. The second is a one-time saving that gets re-negotiated away.",
      "The diagnostic is simple. Pull three months of GPS and consignment data. Compute loaded-km as a share of total-km. Most pan-India operators are shocked to discover they are below 55%. The benchmark for a well-run mid-mile network is 70–78%.",
      "The fixes are rarely glamorous: consolidated dispatch windows, back-haul matching, depot repositioning, and route optimisation that respects driver hours-of-service. The technology is commodity. The discipline is not.",
      "When we take on a logistics engagement, the first 30 days are spent on this diagnostic. Clients come in expecting a fleet problem and leave with a planning problem — which is good news, because planning problems are cheaper to fix than fleet problems.",
    ],
  },
  {
    slug: "import-readiness-checklist-trading",
    title: "An import readiness checklist before you sign the first PO",
    excerpt:
      "Most import failures happen before the shipment leaves the origin port. A 12-point readiness checklist that separates a smooth first consignment from a customs nightmare.",
    category: "Trading",
    date: "2025-01-05",
    readingTime: "7 min read",
    author: "Greenics Editorial",
    authorRole: "Trading Desk",
    image: "/images/trading.webp",
    icon: FaFileImport,
    tag: "Checklist",
    content: [
      "First-time importers almost always focus on the product and the price. The paperwork is treated as a downstream concern — something the customs broker will handle. This is how consignments get stranded.",
      "Before a purchase order is signed, the importer should be able to answer twelve questions honestly. The first four are about classification: what is the exact HS code, what is the country of origin, does the product attract any specific duty, and is there an anti-dumping duty in force.",
      "The next four are about documentation: is the supplier able to provide a compliant commercial invoice, packing list, certificate of origin and — where required — a pre-shipment inspection certificate? If the supplier hesitates on any of these, the price is not the problem.",
      "The last four are about logistics and cash flow: what is the Incoterm, who arranges and pays for ocean freight, how long is the transit, and what is the working-capital cycle from PO to goods-in-warehouse. Many importers discover they cannot afford the order only after the container has sailed.",
      "Trading desks that survive their first year do so because they treat this checklist as a gate, not a formality. We run it with every new client engagement — even when they have already chosen the supplier and the price.",
    ],
  },
  {
    slug: "cybersecurity-baseline-five-controls",
    title: "The cybersecurity baseline: five controls that prevent most breaches",
    excerpt:
      "Most successful attacks exploit the same five gaps. Get these right before you spend on advanced tooling — they are unglamorous, cheap, and disproportionately effective.",
    category: "Cybersecurity",
    date: "2025-01-02",
    readingTime: "6 min read",
    author: "Greenics Editorial",
    authorRole: "Cybersecurity Practice",
    image: "/images/cybersecurity.webp",
    icon: FaShieldAlt,
    tag: "Hardening",
    content: [
      "The cybersecurity market sells complexity. Vendors have a commercial incentive to make breaches sound exotic, because exotic threats require expensive tooling. The data tells a different story.",
      "The vast majority of successful intrusions exploit one of five gaps: phished credentials, unpatched internet-facing systems, exposed remote desktop, weak multi-factor authentication, and excessive privilege on service accounts. None of these require an advanced persistent threat to exploit. All of them are cheap to fix.",
      "Control one is phishing-resistant MFA on every identity that touches email, finance or infrastructure. SMS is not phishing-resistant. Hardware keys or passkeys are. This single control closes a disproportionate share of account-takeover incidents.",
      "Control two is a credible patch SLA on internet-facing systems — measured in days, not quarters. Control three is the elimination of exposed RDP, full stop. If remote access is required, use a zero-trust gateway with device posture checks.",
      "Control four is privileged access management for service accounts — because a service account with domain privileges that is never rotated is, functionally, a permanent backdoor. Control five is tested, offsite, offline backup. Ransomware is a backup problem dressed up as a security problem.",
      "We start every cybersecurity engagement with these five. Clients who want to skip ahead to threat intelligence or red-teaming almost always have one of the five broken. Fix the baseline first.",
    ],
  },
  {
    slug: "circular-economy-not-a-marketing-word",
    title: "Circular economy is not a marketing word — here is how we measure it",
    excerpt:
      "If your sustainability claim cannot survive an audit, it is not a claim. How Greenics defines and measures circularity across waste, logistics and procurement.",
    category: "Sustainability",
    date: "2024-12-28",
    readingTime: "5 min read",
    author: "Greenics Editorial",
    authorRole: "Sustainability Practice",
    image: "/images/hero-city.webp",
    icon: FaLeaf,
    tag: "Principles",
    content: [
      "'Circular economy' has become a marketing word. It shows up in pitch decks and annual reports without a definition, a metric, or an audit trail. This is a problem, because the underlying concept is genuinely useful — and the only way to defend it from marketing dilution is to measure it.",
      "We define circularity as the share of material, by weight, that is recovered for reuse, recycling or energy recovery before it reaches a landfill. This is not a perfect definition. It does not capture embedded emissions, water use, or social impact. But it is auditable, comparable across sites, and hard to game.",
      "For a waste-management engagement, the metric is direct: tonnes diverted divided by tonnes collected. For a logistics engagement, the proxy is fuel and empty-mile reduction against a baseline. For a trading engagement, it is the share of suppliers that meet documented environmental and labour norms.",
      "The point is not the metric itself. The point is that every circularity claim should resolve to a number, a baseline, and a method. If a vendor cannot produce all three, the claim is aspirational, not operational.",
      "This is the standard we hold ourselves to. When we report on a Greenics engagement, the numbers are auditable by the client's own team. Sustainability claims that cannot survive an audit should not be made.",
    ],
  },
  {
    slug: "last-mile-delivery-india-realities",
    title: "Last-mile delivery in India: the three realities nobody puts in the pitch",
    excerpt:
      "Indian last-mile is not a smaller version of Western last-mile. Pincode density, road class and cash-on-delivery economics change the operating model completely.",
    category: "Logistics",
    date: "2024-12-22",
    readingTime: "6 min read",
    author: "Greenics Editorial",
    authorRole: "Logistics Practice",
    image: "/images/logistics.webp",
    icon: FaRoute,
    tag: "Market reality",
    content: [
      "International logistics playbooks tend to get imported into India with minor adjustments. This works for some layers of the stack — warehouse management software, for instance. It fails badly for last-mile.",
      "The first reality is pincode density. A single Indian pincode can contain more households than a Western suburb. Route planning models built around Western address density either over-resource or under-resource Indian pincode areas, sometimes by a factor of three.",
      "The second reality is road class. A route that looks direct on a map can include stretches that are simply not passable for a 17-tonne truck during monsoon. Driver knowledge, not routing software, is often the only reliable source of truth — and that knowledge lives in heads, not databases.",
      "The third reality is cash-on-delivery economics. A meaningful share of Indian e-commerce last-mile is still settled in cash at the doorstep. This changes the cost structure, the fraud model, and the working-capital requirements of the delivery operation in ways that pure card-market playbooks do not account for.",
      "None of these realities are problems to be solved. They are constraints to be designed around. The operators who win in Indian last-mile are the ones who treat driver knowledge, road reality and cash flow as first-class design inputs — not exceptions to a Western template.",
    ],
  },
];

export type ArticleCategoryMeta = {
  name: ArticleCategory;
  icon: IconType;
  description: string;
};

export const articleCategories: ArticleCategoryMeta[] = [
  {
    name: "Waste Management",
    icon: FaRecycle,
    description: "Collection, segregation, processing and the circular economy.",
  },
  {
    name: "Logistics",
    icon: FaTruck,
    description: "Fleet economics, last-mile realities and pan-India operations.",
  },
  {
    name: "Trading",
    icon: FaGlobeAsia,
    description: "Import readiness, customs and global sourcing discipline.",
  },
  {
    name: "Cybersecurity",
    icon: FaNetworkWired,
    description: "Baseline controls, hardening and breach prevention.",
  },
  {
    name: "Sustainability",
    icon: FaLeaf,
    description: "Measurement, reporting and the circular economy in practice.",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 2): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return articles.slice(0, limit);
  return articles
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      // Prefer same category, then by date.
      const aSame = a.category === current.category ? 1 : 0;
      const bSame = b.category === current.category ? 1 : 0;
      if (aSame !== bSame) return bSame - aSame;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
}
