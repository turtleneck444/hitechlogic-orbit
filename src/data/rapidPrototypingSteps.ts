import { IconType } from "lucide-react";
import { Lightbulb, Code2, Rocket, Shield } from "lucide-react";

export type RapidPrototypingStep = {
  step: string;
  slug: string;
  title: string;
  description: string;
  specialty: string;
  overview: string;
  focus: string;
  deliverables: string[];
  outcomes: string[];
  icon: IconType;
  color: string;
  bgGlow: string;
  heroTagline: string;
};

export const rapidPrototypingSteps: RapidPrototypingStep[] = [
  {
    step: "01",
    slug: "rapid-design-prototyping",
    title: "Rapid Design & Prototyping",
    description: "Align vision, user journeys, and experience prototypes so the right idea survives ideation.",
    specialty: "Concept acceleration",
    overview:
      "People usually die on ideation because they never test it fast enough. We mobilize the right team, evaluate your context, and validate the highest-value concepts in days so you can make confident decisions.",
    focus: "Situation mapping, hypothesis validation, and human-centered prototyping before any code is committed.",
    deliverables: [
      "Situation intelligence briefing",
      "Validated personas, customer journeys, and side-by-side concepts",
      "Interactive experience prototypes ready for stakeholder input",
    ],
    outcomes: [
      "Decision-ready concept scoring",
      "Plot for the build sprint that follows",
      "Executive alignment and resource confidence",
    ],
    icon: Lightbulb,
    color: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/20",
    heroTagline: "Keep ideation alive with fast validation and clarity",
  },
  {
    step: "02",
    slug: "build-launch",
    title: "Build & Launch Production MVPs",
    description: "Sprint-based development that turns validated concepts into working experiences and launches them with hardened infrastructure.",
    specialty: "AI-accelerated engineering",
    overview:
      "Once the winning concept is chosen, we sprint with AI-assisted coding, reusable components, and enterprise scaffolding to ship a production-ready prototype and release it safely.",
    focus: "Collaboration pods that pair designers, engineers, and automation experts for fast iteration.",
    deliverables: [
      "Working experience with production-ready architecture",
      "Automated CI/CD, observability, and security hardening",
      "Release-ready environment with rollback and monitoring",
    ],
    outcomes: [
      "Prototype that feels like the final product",
      "Release playbook with guardrails",
      "Automated QA, monitoring, and go-live confidence",
    ],
    icon: Code2,
    color: "from-indigo-500 to-purple-500",
    bgGlow: "bg-indigo-500/20",
    heroTagline: "Ship something tangible while you still own the idea",
  },
  {
    step: "04",
    slug: "operate",
    title: "Operate & Elevate",
    description: "Transition to 24/7 reliability, FinOps oversight, and continuous improvements.",
    specialty: "Live operations",
    overview:
      "We activate managed operations with FinOps guardrails so your prototype evolves into a resilient product, with cost transparency and reliability engineering baked in.",
    focus: "Operational readiness reviews, FinOps dashboards, and reliability-focused retrospectives.",
    deliverables: [
      "24/7 monitoring and incident protocols",
      "FinOps dashboards with spend vs outcome correlation",
      "Reliability retros and automation roadmaps",
    ],
    outcomes: [
      "Reduced MTTR and predictable spend",
      "Regular optimization sprints",
      "Clear path from prototype to platform",
    ],
    icon: Shield,
    color: "from-sky-500 to-blue-500",
    bgGlow: "bg-sky-500/20",
    heroTagline: "Operate like a platform from day one",
  },
];
