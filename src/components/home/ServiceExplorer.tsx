import { ActionSearchBar } from "@/components/ui/action-search-bar";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Gauge,
  Handshake,
  Server,
  ShieldCheck,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

type ServiceTrack = {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  icon: LucideIcon;
  href: string;
  focus: string;
  metric: string;
};

const trustIndicators = [
  {
    icon: ShieldCheck,
    label: "Proven Reliability",
    description: "Fortune 500 environments stabilized and governed",
  },
  {
    icon: Target,
    label: "Clear Methodology",
    description: "Structured playbooks mapped to every maturity stage",
  },
  {
    icon: Zap,
    label: "Rapid Response",
    description: "24/7 command desk with executive visibility",
  },
];

const highlightStats = [
  { label: "Alert Noise Reduced", value: "−82%", detail: "within 120 days" },
  { label: "Automation Coverage", value: "65+ playbooks", detail: "per client" },
  { label: "Critical MTTR", value: "↓ 58%", detail: "avg. incident recovery" },
  { label: "Cost Transparency", value: "Real-time", detail: "capacity scorecards" },
];

const industryFocus = [
  "Healthcare",
  "SaaS",
  "Finance",
  "Logistics & Supply Chain",
  "Public Sector",
  "Energy & Utilities",
  "Media & Communications",
];

const serviceTracks: ServiceTrack[] = [
  {
    id: "service-infrastructure",
    title: "Continuous Infrastructure & Cloud Operations",
    description:
      "Hybrid, multi-cloud, and on-prem estates managed with disciplined change, capacity, and lifecycle controls.",
    outcomes: [
      "Unified telemetry across regions",
      "Predictive capacity plans every quarter",
      "Runbook-driven change governance",
    ],
    icon: Server,
    href: "/services#infrastructure",
    focus: "Operations Control",
    metric: "4 dedicated pods",
  },
  {
    id: "service-oversight",
    title: "Intelligent System Oversight & Event Reduction",
    description:
      "Noise-calmed monitoring and automated correlation that keeps executive dashboards clear and actionable.",
    outcomes: [
      "Tiered escalation aligned to business impact",
      "Event deduplication with AI-assisted routing",
      "Weekly reliability scorecards",
    ],
    icon: Activity,
    href: "/services#oversight",
    focus: "Signal Intelligence",
    metric: "−82% avg. noise",
  },
  {
    id: "service-automation",
    title: "Automated Corrective Actions & Stabilization Workflows",
    description:
      "Self-healing frameworks that remediate known failure modes before teams are paged.",
    outcomes: [
      "Service catalog of verified workflows",
      "Compliance-grade audit trails",
      "Executive-ready readiness testing",
    ],
    icon: Workflow,
    href: "/services#automation",
    focus: "Automation",
    metric: "65+ runbooks",
  },
  {
    id: "service-reliability",
    title: "Reliability & Performance Engineering",
    description:
      "Architectural tuning, load assurance, and SLO management for mission-critical systems.",
    outcomes: [
      "Architectural assessments with SLO mapping",
      "Performance testing integrated into delivery",
      "Operational debt backlog cleared systematically",
    ],
    icon: Gauge,
    href: "/services#reliability",
    focus: "SLO Delivery",
    metric: "SLOs mapped 100%",
  },
  {
    id: "service-security",
    title: "Security & Identity Assurance",
    description:
      "Identity governance, access fidelity, and threat monitoring embedded into every operational routine.",
    outcomes: [
      "Zero-trust aligned access reviews",
      "Co-managed detection and response",
      "Resilience drills for critical paths",
    ],
    icon: ShieldCheck,
    href: "/services#security",
    focus: "Identity Trust",
    metric: "Zero-trust ready",
  },
  {
    id: "service-cost",
    title: "Cost Efficiency & Capacity Strategy",
    description:
      "Financial observability and optimization programs that keep spend predictable and accountable.",
    outcomes: [
      "Unit economics reporting per workload",
      "Rightsizing and reservation coverage actions",
      "Capacity guardrails tied to demand cycles",
    ],
    icon: BarChart3,
    href: "/services#cost",
    focus: "Financial Clarity",
    metric: "Weekly scorecards",
  },
  {
    id: "service-partnership",
    title: "Strategic Technology Partnership",
    description:
      "Executive alignment, roadmap facilitation, and embedded leadership that extends your operating capacity.",
    outcomes: [
      "Quarterly strategy summits with CXO dashboards",
      "Joint hiring and capability planning",
      "Embedded leaders for transformation programs",
    ],
    icon: Handshake,
    href: "/services#partnership",
    focus: "Executive Alignment",
    metric: "Quarterly summits",
  },
];

const catalogHighlights = [
  "Intentional sequencing that meets every stage of your reliability maturity",
  "Embedded leadership ensures initiatives stay tied to business outcomes",
  "Automation-first mindset so every repetitive task becomes programmatic",
];

const serviceQuickLinks = serviceTracks.map((track) => ({
  id: track.id,
  label: track.title,
  href: `#${track.id}`,
  externalHref: track.href,
}));

export function ServiceExplorer() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--background))] py-20 lg:py-24">
      <div className="absolute top-16 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[hsl(var(--accent-blue))]/10 blur-[160px]" />
      <div className="absolute bottom-[-120px] right-[-80px] h-[32rem] w-[32rem] rounded-full bg-[hsl(var(--navy))]/5 blur-[200px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_420px] items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-blue))]/30 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent-blue))]">
              Core Services
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-[2.9rem] font-semibold leading-tight text-[hsl(var(--navy))]">
              Find the Right Solution for Your Team
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              HiTechLogic designs every managed service to remove operational noise, accelerate responsible change, and keep executives confident in the technology landscape.
            </p>

            <div className="mt-4 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Industry Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {industryFocus.map((industry) => (
                  <span
                    key={industry}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-[hsl(var(--navy))]"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-[hsl(var(--accent-blue))]/20 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 via-white to-white/90 p-6 shadow-lg shadow-[rgba(46,107,255,0.15)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--accent-blue))]">
                    Guided Discovery
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Search by capability, outcome, or operational need.
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-white/50 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--accent-blue))] animate-pulse" />
                  Live filtering enabled
                </div>
              </div>
              <div className="mt-5">
                <ActionSearchBar />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator.label}
                  className="group relative overflow-hidden rounded-2xl border border-[hsl(var(--accent-blue))]/15 bg-white/95 p-5 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent-blue))]/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[hsl(var(--accent-blue))]/30 bg-[hsl(var(--accent-blue))]/5 text-[hsl(var(--accent-blue))]">
                      <indicator.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[hsl(var(--navy))]">{indicator.label}</p>
                      <p className="text-xs text-slate-600">{indicator.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-[hsl(var(--accent-blue))]/20 to-transparent" />
                  <a
                    href="/services"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))]"
                  >
                    View proof
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base shadow-lg shadow-[hsl(var(--accent-blue))]/20"
              >
                <a href="/contact">Plan a Reliability Program</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-[hsl(var(--accent-blue))]/40 px-8 text-base"
              >
                <a href="/services">
                  View Service Catalog
                </a>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[24px] border border-[hsl(var(--accent-blue))]/20 bg-white p-5 shadow-xl shadow-slate-900/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 via-transparent to-white opacity-90" />
            <div className="relative space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(var(--accent-blue))]">
                  Engagement Overview
                </p>
                <h3 className="mt-3 text-[1.65rem] font-semibold text-[hsl(var(--navy))]">
                  Operational Programs Built Around Your Priorities
                </h3>
                <div className="mt-3 space-y-3 text-sm text-slate-600">
                  <p className="text-sm">
                    Reliability pods stand up in under 48 hours with a systems baseline delivered inside the first business week so leadership has actionable visibility immediately.
                  </p>
                  <div className="rounded-2xl border border-slate-100 bg-white p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                      <span>Kickoff</span>
                      <span>Week 1</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Telemetry workspace + executive scorecard provisioned alongside the systems baseline.
                    </p>
                    <div className="h-px bg-slate-200/70" />
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-blue))]" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                          Ongoing Cadence
                        </p>
                        <p className="text-sm">
                          Weekly telemetry + automation briefs with a 30-day executive working session to recalibrate priorities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {highlightStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-100 bg-white p-3.5">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-500">{stat.label}</p>
                    <p className="mt-1 text-xl font-bold text-[hsl(var(--navy))]">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[32px] border border-slate-200/80 bg-white p-5 shadow-2xl shadow-slate-900/5 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-10">
            <div className="space-y-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-blue))]/30 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[hsl(var(--accent-blue))]">
                  Service Catalog
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-[hsl(var(--navy))]">
                  Every Pillar Is Mapped to Clear, Measurable Outcomes
                </h3>
                <p className="mt-4 text-sm text-slate-600">
                  Each managed discipline includes governance rituals, automation coverage, and reporting aligned to your operating model.
                </p>
              </div>

              <div className="space-y-3.5">
                {catalogHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[hsl(var(--accent-blue))]" />
                    <p className="text-sm text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Jump to a discipline
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {serviceQuickLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-xs font-semibold text-[hsl(var(--navy))] shadow-sm transition-colors hover:border-[hsl(var(--accent-blue))]/40 hover:text-[hsl(var(--accent-blue))]"
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5 text-[hsl(var(--accent-blue))]" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[hsl(var(--accent-blue))]/20 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-white p-4">
                <p className="text-sm font-semibold text-[hsl(var(--navy))]">Delivery Tooling</p>
                <p className="mt-2 text-sm text-slate-600">
                  Scorecards, automation catalogs, and executive readouts live inside the HiTechLogic Control Center platform.
                </p>
                <a
                  href="/platform"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))]"
                >
                  Explore delivery tooling
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="/services#overview"
                  className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-semibold text-[hsl(var(--navy))] shadow-sm transition hover:border-[hsl(var(--accent-blue))]/40"
                >
                  Download service overview
                  <ArrowRight className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
                </a>
                <a
                  href="/case-studies"
                  className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-semibold text-[hsl(var(--navy))] shadow-sm transition hover:border-[hsl(var(--accent-blue))]/40"
                >
                  View proof points
                  <ArrowRight className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {serviceTracks.map((track) => (
                <article
                  key={track.title}
                  id={track.id}
                  className="group rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent-blue))]/40 lg:p-6"
                >
                  <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,280px)_minmax(0,340px)_minmax(0,210px)] lg:items-start lg:gap-6">
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))]">
                          <track.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                            {track.focus}
                          </p>
                          <h4 className="text-lg font-semibold text-[hsl(var(--navy))]">
                            {track.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600">
                        {track.description}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-100/80 bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Key Outcomes
                      </p>
                      <ul className="mt-3 space-y-2.5 text-sm text-slate-600">
                        {track.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-3">
                            <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-blue))]" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4 rounded-2xl border border-slate-100/80 bg-slate-50/60 p-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Signature Metric
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-[hsl(var(--navy))]">
                          {track.metric}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Engagement Model
                        </p>
                        <p className="mt-2 text-sm font-semibold text-[hsl(var(--accent-blue))]">
                          Executive-led partnership
                        </p>
                      </div>
                      <Button
                        asChild
                        size="sm"
                        className="w-full rounded-full text-xs"
                      >
                        <a href={track.href}>View Capability</a>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-4 border-t border-slate-100 pt-4">
                    <a
                      href={track.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))]"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <span className="text-sm text-slate-500">
                      Includes readiness assessment and 90-day roadmap.
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-3 rounded-3xl border border-[hsl(var(--accent-blue))]/30 bg-white/90 px-10 py-8 shadow-xl shadow-slate-900/5">
            <p className="text-base font-semibold text-[hsl(var(--navy))]">
              Need a purpose-built program?
            </p>
            <p className="text-sm text-slate-600">
              We’ll design a managed services portfolio that mirrors your operating model.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-base"
            >
              <a href="/contact">Request Strategy Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
