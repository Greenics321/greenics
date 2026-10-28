import type { IconType } from "react-icons";
import {
  FaSearch,
  FaFileContract,
  FaTruckLoading,
  FaChartLine,
  FaHandshake,
  FaClipboardCheck,
  FaUsers,
  FaShieldAlt,
  FaArrowRight,
  FaClock,
  FaFileAlt,
  FaBullhorn,
} from "react-icons/fa";

export type ProcessPhase = {
  number: string;
  title: string;
  duration: string;
  description: string;
  /** What we actually do in this phase. */
  activities: string[];
  /** What you get at the end of this phase. */
  deliverable: string;
  icon: IconType;
};

export const PROCESS_PAGE = {
  hero: {
    label: "How We Work",
    title: "From diagnostic to delivery — and the reporting that follows",
    description:
      "Every Greenics engagement follows the same disciplined four-phase arc: a short diagnostic, a written proposal, structured delivery, and ongoing reporting. No mystery, no scope-creep theatre, no surprise invoices. Here is exactly how an engagement runs.",
  },
  phases: [
    {
      number: "01",
      title: "Diagnostic",
      duration: "2–4 weeks",
      description:
        "Before we propose anything, we understand the actual operating reality. We pull data, talk to your team on the ground, and identify the real constraint — which is rarely the one you first assumed.",
      activities: [
        "Stakeholder interviews (operations, finance, field)",
        "Data pull and baseline measurement",
        "Site or system walkthroughs",
        "Constraint identification — the one thing blocking the most value",
      ],
      deliverable:
        "A written diagnostic note naming the real constraint, the baseline metric, and the proposed scope.",
      icon: FaSearch,
    },
    {
      number: "02",
      title: "Proposal",
      duration: "1 week",
      description:
        "We turn the diagnostic into a written proposal — scope, SLA, reporting cadence, named owner, and a documented pay band. No verbal commitments; everything you need to evaluate is on paper.",
      activities: [
        "Scoped statement of work with measurable outcomes",
        "Documented SLA (uptime, response time, reporting cadence)",
        "Named engagement owner + escalation path",
        "Transparent pricing against a documented pay band",
      ],
      deliverable:
        "A signed proposal document with scope, SLA, owner, pricing and exit terms.",
      icon: FaFileContract,
    },
    {
      number: "03",
      title: "Delivery",
      duration: "Ongoing",
      description:
        "Delivery against the signed SLA, with one accountable owner and a published escalation path. Field, ops and engineering teams execute; the owner holds the whole thing together.",
      activities: [
        "Execution against the SLA by the relevant vertical(s)",
        "Weekly operational check-ins (not status theatre)",
        "Published escalation path to a Greenics executive",
        "Quarterly outcome review against baseline metrics",
      ],
      deliverable:
        "Measurable progress against the baseline — reported monthly, reviewed quarterly.",
      icon: FaTruckLoading,
    },
    {
      number: "04",
      title: "Reporting",
      duration: "Monthly + quarterly",
      description:
        "A monthly client-facing report against agreed metrics, and a quarterly outcome review. No vanity numbers — every metric is auditable and tied to the original diagnostic baseline.",
      activities: [
        "Monthly metric report (diversion rate, loaded-km, on-time clearance, incidents prevented)",
        "Quarterly outcome review with the engagement owner",
        "Annual scope review — adjust, expand, or wind down",
        "Evidence pack available for your internal audit",
      ],
      deliverable:
        "An auditable monthly report + a quarterly review with the named owner.",
      icon: FaChartLine,
    },
  ] as ProcessPhase[],
  commitments: [
    {
      title: "One named owner",
      description:
        "Every engagement has one named Greenics owner — visible to you on day one, reachable directly, accountable for the integrated outcome.",
      icon: FaUsers,
    },
    {
      title: "No scope creep without a change note",
      description:
        "If the scope changes, we write a change note and re-sign it. No quiet expansion, no surprise line items on the invoice.",
      icon: FaFileAlt,
    },
    {
      title: "Exit terms in the proposal",
      description:
        "The proposal includes how the engagement ends — transition support, data handover, notice period. You are never locked in.",
      icon: FaHandshake,
    },
    {
      title: "Auditable claims",
      description:
        "Every sustainability or performance claim in our reporting resolves to a metric, a baseline and a method. No marketing numbers.",
      icon: FaClipboardCheck,
    },
  ],
  faqs: [
    {
      q: "Do you always run a diagnostic, even for small engagements?",
      a: "For engagements below a certain size we run a lightweight 2–3 day diagnostic instead of the full 2–4 week version. The principle is the same — we do not propose without understanding the operating reality — but the depth scales to the scope.",
    },
    {
      q: "Who owns the data and reporting during an engagement?",
      a: "You do. All data generated during an engagement — operational, financial or security — belongs to you. We produce the reports; we do not hold your data hostage at the end of an engagement.",
    },
    {
      q: "What happens if the engagement isn't working?",
      a: "The proposal includes exit terms. If the engagement is not meeting the agreed outcomes, either party can trigger a structured transition — with handover support and a documented notice period. No lock-in, no penalty theatre.",
    },
    {
      q: "Can you run engagements across multiple verticals at once?",
      a: "Yes — that is the core of the integrated model. One named owner coordinates across waste, logistics, trading and cybersecurity, with one monthly report and one escalation path. The verticals share standards; the owner owns the outcome.",
    },
    {
      q: "How do you handle pricing?",
      a: "Pricing is against a documented pay band per role and level, reviewed annually. For specific engagements we quote a fixed scope price or a transparent unit rate (per tonne, per km, per consignment, per monitored endpoint). No opaque 'market' surprises.",
    },
  ],
};
