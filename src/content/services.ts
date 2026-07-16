import {
  Compass,
  Users,
  Target,
  Mic2,
  Brain,
  BarChart3,
  Cpu,
  Sparkles,
  Code2,
  Smartphone,
  Layers,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export type Pillar = "leadership" | "ai" | "dev";

export const pillarMeta: Record<
  Pillar,
  { label: string; colorVar: string; textClass: string; bgClass: string; borderClass: string }
> = {
  ai: {
    label: "AI Consulting",
    colorVar: "var(--pillar-ai)",
    textClass: "text-pillar-ai",
    bgClass: "bg-pillar-ai",
    borderClass: "border-pillar-ai",
  },
  leadership: {
    label: "Leadership Coaching",
    colorVar: "var(--pillar-leadership)",
    textClass: "text-pillar-leadership",
    bgClass: "bg-pillar-leadership",
    borderClass: "border-pillar-leadership",
  },
  dev: {
    label: "App & Web Development",
    colorVar: "var(--pillar-dev)",
    textClass: "text-pillar-dev",
    bgClass: "bg-pillar-dev",
    borderClass: "border-pillar-dev",
  },
};

export interface ServiceOffering {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceContent {
  slug: string;
  pillar: Pillar;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  offerings: ServiceOffering[];
  process: { title: string; description: string }[];
  idealFor: string[];
  outcomes: string[];
}

export const services: ServiceContent[] = [
  {
    slug: "ai-consulting",
    pillar: "ai",
    name: "AI Consulting",
    tagline: "Practical AI fluency, not just theory.",
    summary:
      "Hands-on consulting to help builders and leaders actually use AI/ML - not just talk about it.",
    description:
      "We teach the applied side of AI and machine learning: how to reason about models, evaluate tools, and ship real features - for engineers going deeper technically, and for leaders who need enough fluency to make good calls.",
    icon: Brain,
    image: "/images/ai-ml-coaching.png",
    imageAlt: "A person working at night with a neural network visualization glowing on screen",
    offerings: [
      {
        title: "Applied ML Fundamentals",
        description:
          "A practical grounding in how modern ML and LLM systems actually work, for engineers and technical PMs.",
        icon: Cpu,
      },
      {
        title: "AI Product Strategy",
        description:
          "Consulting for founders and leaders on where AI genuinely fits your product and where it doesn't.",
        icon: Sparkles,
      },
      {
        title: "Team Upskilling",
        description:
          "Structured workshops to bring an entire team to a shared, practical baseline in weeks, not months.",
        icon: BarChart3,
      },
    ],
    process: [
      {
        title: "Fluency Audit",
        description:
          "We assess current skill level and goals - individual or team-wide - before designing anything.",
      },
      {
        title: "Applied Curriculum",
        description:
          "A consulting plan built around your actual stack and use cases, not generic slides.",
      },
      {
        title: "Build Sessions",
        description:
          "Hands-on sessions where we build, evaluate, and ship something real together.",
      },
      {
        title: "Independent Capability",
        description:
          "We measure success by how much you no longer need us - a team that can evaluate and adopt AI on its own.",
      },
    ],
    idealFor: [
      "Engineering teams adopting AI/ML into their product",
      "Founders deciding where AI belongs on the roadmap",
      "Individual builders wanting real, applied fluency",
    ],
    outcomes: [
      "A working mental model of how modern ML/LLM systems behave",
      "Confidence evaluating AI tools, vendors, and approaches",
      "At least one real feature or workflow shipped during coaching",
    ],
  },
  {
    slug: "leadership-coaching",
    pillar: "leadership",
    name: "Leadership Coaching",
    tagline: "Lead with clarity. Grow with intention.",
    summary:
      "One-on-one and team coaching for leaders navigating growth, change, and high-stakes decisions.",
    description:
      "We work with founders, executives, and rising managers to build the judgment, self-awareness, and communication range that titles alone don't teach. Coaching is structured, candid, and grounded in your actual day-to-day decisions - not generic frameworks.",
    icon: Compass,
    image: "/images/leadership-coaching.png",
    imageAlt: "Two professionals in a focused one-on-one coaching conversation",
    offerings: [
      {
        title: "Executive Coaching",
        description:
          "1:1 coaching for founders and senior leaders on decision-making, delegation, and influence.",
        icon: Target,
      },
      {
        title: "Team & Manager Development",
        description:
          "Coaching for first-time and mid-level managers building the skills to lead people, not just tasks.",
        icon: Users,
      },
      {
        title: "Communication & Presence",
        description:
          "Sharpening how leaders communicate under pressure - in rooms, in writing, and on stage.",
        icon: Mic2,
      },
    ],
    process: [
      {
        title: "Discovery",
        description:
          "A structured conversation to understand your context, blind spots, and what 'better' actually looks like for you.",
      },
      {
        title: "Coaching Cadence",
        description:
          "Regular 1:1 sessions grounded in real situations you're facing, not hypotheticals.",
      },
      {
        title: "Feedback Loops",
        description:
          "Lightweight check-ins with your team or peers, when useful, to track how change is actually landing.",
      },
      {
        title: "Recalibration",
        description:
          "Periodic reviews to adjust focus as your role, team, or challenges evolve.",
      },
    ],
    idealFor: [
      "Founders navigating their first 10-100 hires",
      "Newly promoted managers and team leads",
      "Executives preparing for a bigger mandate",
    ],
    outcomes: [
      "Clearer decision-making under ambiguity",
      "Stronger 1:1s, feedback, and delegation habits",
      "A communication style that scales with your team",
    ],
  },
  {
    slug: "app-web-development",
    pillar: "dev",
    name: "App & Web Development",
    tagline: "Products, designed and shipped.",
    summary:
      "End-to-end design and engineering for web and mobile products - from first prototype to production.",
    description:
      "We design and build web and app products for founders and teams who need senior-level execution without hiring a full in-house team first. Every engagement is built to be handed off cleanly: readable code, sane architecture, no black boxes.",
    icon: Code2,
    image: "/images/app-web-development.png",
    imageAlt: "Two software engineers collaborating at a standing desk with code on screen",
    offerings: [
      {
        title: "Product Design & Prototyping",
        description:
          "Turning a rough idea into a clickable, validated prototype fast.",
        icon: Layers,
      },
      {
        title: "Web & App Engineering",
        description:
          "Production-grade web apps and mobile apps built on modern, maintainable stacks.",
        icon: Smartphone,
      },
      {
        title: "Launch & Scale Support",
        description:
          "Shipping v1, then iterating with you as real users and load come in.",
        icon: Rocket,
      },
    ],
    process: [
      {
        title: "Scoping",
        description:
          "We define the smallest version of the product that proves the core value, and what comes after.",
      },
      {
        title: "Design",
        description:
          "Interface and interaction design that's simple to use and consistent to build on.",
      },
      {
        title: "Build",
        description:
          "Iterative engineering with regular checkpoints - you see working software early and often.",
      },
      {
        title: "Handoff & Support",
        description:
          "Clean documentation, readable code, and a clear path for your team to take over or scale up.",
      },
    ],
    idealFor: [
      "Founders who need a v1 product built right the first time",
      "Teams needing senior engineering bandwidth for a defined project",
      "Companies modernizing or rebuilding an existing product",
    ],
    outcomes: [
      "A production-ready web or mobile product",
      "Codebase your future team can actually read and extend",
      "A clear roadmap for what to build next",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
