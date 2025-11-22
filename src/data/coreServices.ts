import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Gauge,
  Handshake,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export type CoreService = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  outcomes: string[];
  metric: string;
};

export const coreServices: CoreService[] = [
  {
    id: "infrastructure-cloud-operations",
    name: "Infrastructure & Cloud Operations",
    description: "24/7 cloud infrastructure management with 99.99% uptime SLA across AWS, Azure, and GCP.",
    icon: Server,
    href: "/services/infrastructure-cloud-operations",
    outcomes: [
      "99.99% uptime with proactive monitoring",
      "Unified telemetry across hybrid clouds",
      "Continuous optimization and automation",
    ],
    metric: "99.99% Uptime",
  },
  {
    id: "system-oversight-event-reduction",
    name: "System Oversight & Event Reduction",
    description: "AI-powered monitoring that reduces alert noise by 82% while surfacing critical issues in under two minutes.",
    icon: Activity,
    href: "/services/system-oversight-event-reduction",
    outcomes: [
      "82% reduction in alert fatigue",
      "Real-time event correlation with AI routing",
      "Executive-ready reliability scorecards",
    ],
    metric: "−82% Noise",
  },
  {
    id: "automated-corrective-actions",
    name: "AI Business Automation & Agent Services",
    description: "Autonomous agents and corrective automations that triage, resolve, and verify changes with audit-grade governance.",
    icon: Workflow,
    href: "/services/automated-corrective-actions",
    outcomes: [
      "95% faster MTTR via agent-run playbooks",
      "615+ automated runbooks with human oversight",
      "Policy, approvals, and audit trails baked in",
    ],
    metric: "95% MTTR Drop",
  },
  {
    id: "reliability-performance-engineering",
    name: "Reliability & Performance Engineering",
    description: "SRE disciplines and performance tuning that align engineering velocity with 99.99% uptime goals.",
    icon: Gauge,
    href: "/services/reliability-performance-engineering",
    outcomes: [
      "SLOs mapped end-to-end",
      "90% improvement in downtime",
      "Architectural assessments with automation",
    ],
    metric: "99.99% Reliability",
  },
  {
    id: "security-identity-assurance",
    name: "Cybersecurity & Identity Assurance",
    description: "Zero-trust security with automated detection and policy enforcement that meets compliance requirements.",
    icon: ShieldCheck,
    href: "/services/security-identity-assurance",
    outcomes: [
      "Sub-10-minute detection",
      "99.8% compliance success",
      "Zero-trust identity governance",
    ],
    metric: "<10min Threat Detection",
  },
  {
    id: "cost-efficiency-capacity-strategy",
    name: "Cloud Cost Efficiency & Capacity Strategy",
    description: "AI-driven FinOps paired with predictive capacity planning to reduce spend while increasing control.",
    icon: BarChart3,
    href: "/services/cost-efficiency-capacity-strategy",
    outcomes: [
      "35-40% cost reduction",
      "Real-time workload visibility",
      "Predictive capacity guardrails",
    ],
    metric: "40% Cost Savings",
  },
  {
    id: "strategic-technology-partnership",
    name: "Strategic Technology Partnership",
    description: "Executive-aligned leadership embed that guides technology decisions and transformation cadence.",
    icon: Handshake,
    href: "/services/strategic-technology-partnership",
    outcomes: [
      "Quarterly strategy summits",
      "Embedded CXO-level advisors",
      "Transformation roadmapping",
    ],
    metric: "Executive Partnership",
  },
  {
    id: "rapid-prototyping",
    name: "Rapid Prototyping & Development",
    description: "AI-accelerated innovation that delivers production-ready MVPs in 4-8 weeks with rigorous control.",
    icon: Sparkles,
    href: "/services/rapid-prototyping",
    outcomes: [
      "4-8 week MVP velocity",
      "60% development savings",
      "Operational-ready prototypes",
    ],
    metric: "4-8 Week MVP",
  },
];
