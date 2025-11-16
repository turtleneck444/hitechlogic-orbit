import { ActionSearchBar } from "@/components/ui/action-search-bar";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Gauge,
  Handshake,
  Server,
  ShieldCheck,
  Sparkles,
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
  pageHref: string;
  focus: string;
  metric: string;
};

const trustIndicators = [
  {
    icon: ShieldCheck,
    label: "Proven Reliability",
    description: "Fortune 500 environments stabilized",
  },
  {
    icon: Target,
    label: "Clear Methodology",
    description: "Structured playbooks mapped to maturity",
  },
  {
    icon: Zap,
    label: "Rapid Response",
    description: "24/7 command desk with visibility",
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
  "Logistics",
  "Public Sector",
  "Energy",
  "Media",
];

const serviceTracks: ServiceTrack[] = [
  {
    id: "service-infrastructure",
    title: "Continuous Infrastructure & Cloud Operations",
    description:
      "Hybrid, multi-cloud, and on-prem estates managed with disciplined change, capacity, and lifecycle controls.",
    outcomes: [
      "Unified telemetry across regions",
      "Predictive capacity plans",
      "Runbook-driven governance",
    ],
    icon: Server,
    pageHref: "/services/infrastructure-cloud-operations",
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
      "Event deduplication with AI routing",
      "Weekly reliability scorecards",
    ],
    icon: Activity,
    pageHref: "/services/system-oversight-event-reduction",
    focus: "Signal Intelligence",
    metric: "−82% avg. noise",
  },
  {
    id: "service-automation",
    title: "Automated Corrective Actions & Stabilization",
    description:
      "Self-healing frameworks that remediate known failure modes before teams are paged.",
    outcomes: [
      "Service catalog of verified workflows",
      "Compliance-grade audit trails",
      "Executive-ready readiness testing",
    ],
    icon: Workflow,
    pageHref: "/services/automated-corrective-actions",
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
      "Performance testing integrated",
      "Operational debt backlog cleared",
    ],
    icon: Gauge,
    pageHref: "/services/reliability-performance-engineering",
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
    pageHref: "/services/security-identity-assurance",
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
      "Rightsizing and reservation coverage",
      "Capacity guardrails tied to demand",
    ],
    icon: BarChart3,
    pageHref: "/services/cost-efficiency-capacity-strategy",
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
      "Embedded leaders for transformation",
    ],
    icon: Handshake,
    pageHref: "/services/strategic-technology-partnership",
    focus: "Executive Alignment",
    metric: "Quarterly summits",
  },
  {
    id: "service-rapid-prototyping",
    title: "Rapid Prototyping & App Development",
    description:
      "Human-centered design sprints that validate concepts, build production-ready prototypes, and prepare apps for reliable operations.",
    outcomes: [
      "Product vision validated with research-led discovery",
      "MVP builds accelerated with AI-assisted development",
      "Operational-ready prototypes with embedded guardrails",
    ],
    icon: Sparkles,
    pageHref: "/services/rapid-prototyping",
    focus: "Rapid Innovation",
    metric: "MVPs in 4-8 weeks",
  },
];

const catalogHighlights = [
  "Intentional sequencing meets every stage of reliability maturity",
  "Embedded leadership ties initiatives to business outcomes",
  "Automation-first mindset makes every repetitive task programmatic",
];

const serviceQuickLinks = serviceTracks.map((track) => ({
  id: track.id,
  label: track.title,
  href: `#${track.id}`,
  externalHref: track.pageHref,
}));

export function ServiceExplorer() {
  const [catalogExpanded, setCatalogExpanded] = useState(false);
  const initialServicesToShow = 3;

  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-16">
      <div className="absolute top-12 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[hsl(var(--accent-blue))]/5 blur-[120px]" />
      <div className="absolute bottom-[-80px] right-[-60px] h-24rem w-24rem rounded-full bg-[hsl(var(--navy))]/3 blur-[160px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_420px] items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-blue))]/30 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent-blue))]">
              Core Services
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-[2.2rem] font-semibold leading-tight text-[hsl(var(--navy))]">
              Find the Right Solution for Your Team
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              HiTechLogic designs every managed service to remove operational noise, accelerate responsible change, and keep executives confident in the technology landscape.
            </p>

            <div className="mt-3 space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Industry Focus
              </span>
              <div className="flex flex-wrap gap-1.5">
                {industryFocus.map((industry) => (
                  <span
                    key={industry}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-[hsl(var(--navy))]"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-[hsl(var(--accent-blue))]/20 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 via-white to-white/90 p-4 shadow-lg shadow-[rgba(46,107,255,0.15)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--accent-blue))]">
                    Guided Discovery
                  </p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Search by capability, outcome, or operational need.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-blue))] animate-pulse" />
                  Live filtering
                </div>
              </div>
              <div className="mt-3">
                <ActionSearchBar />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator.label}
                  className="group relative overflow-hidden rounded-xl border border-[hsl(var(--accent-blue))]/15 bg-white/95 p-3.5 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent-blue))]/40"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[hsl(var(--accent-blue))]/30 bg-[hsl(var(--accent-blue))]/5 text-[hsl(var(--accent-blue))]">
                      <indicator.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[hsl(var(--navy))]">{indicator.label}</p>
                      <p className="text-xs text-slate-600">{indicator.description}</p>
                    </div>
                  </div>
                  <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-[hsl(var(--accent-blue))]/20 to-transparent" />
                  <a
                    href="/services"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))]"
                  >
                    View proof
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 text-sm shadow-lg shadow-[hsl(var(--accent-blue))]/20"
              >
                <a href="/contact">Plan a Reliability Program</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-[hsl(var(--accent-blue))]/40 px-6 text-sm"
              >
                <a href="/services">
                  View Service Catalog
                </a>
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[20px] border border-[hsl(var(--accent-blue))]/20 bg-white p-4 shadow-xl shadow-slate-900/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 via-transparent to-white opacity-90" />
            <div className="relative space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(var(--accent-blue))]">
                  Engagement Overview
                </p>
                <h3 className="mt-2 text-[1.4rem] font-semibold text-[hsl(var(--navy))]">
                  Operational Programs Built Around Your Priorities
                </h3>
                <div className="mt-2 space-y-2 text-xs text-slate-600">
                  <p>
                    Reliability pods stand up in under 48 hours with a systems baseline delivered inside the first business week so leadership has actionable visibility immediately.
                  </p>
                  <div className="rounded-xl border border-slate-100 bg-white p-3 space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                      <span>Kickoff</span>
                      <span>Week 1</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Telemetry workspace + executive scorecard provisioned alongside the systems baseline.
                    </p>
                    <div className="h-px bg-slate-200/70" />
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-[hsl(var(--accent-blue))]" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                          Ongoing Cadence
                        </p>
                        <p className="text-xs">
                          Weekly telemetry + automation briefs with a 30-day executive working session to recalibrate priorities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {highlightStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-slate-100 bg-white p-2.5">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-slate-500">{stat.label}</p>
                    <p className="mt-0.5 text-lg font-bold text-[hsl(var(--navy))]">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-slate-200/80 bg-white p-4 shadow-2xl shadow-slate-900/5 lg:p-6">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-8">
            <div className="space-y-3">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-blue))]/30 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[hsl(var(--accent-blue))]">
                  Service Catalog
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[hsl(var(--navy))]">
                  Every Pillar Mapped to Clear, Measurable Outcomes
                </h3>
                <p className="mt-2 text-xs text-slate-600">
                  Each managed discipline includes governance rituals, automation coverage, and reporting aligned to your operating model.
                </p>
              </div>

              <div className="space-y-2">
                {catalogHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-blue))]" />
                    <p className="text-xs text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Jump to discipline
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {serviceQuickLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-semibold text-[hsl(var(--navy))] shadow-sm transition-colors hover:border-[hsl(var(--accent-blue))]/40 hover:text-[hsl(var(--accent-blue))]"
                    >
                      {link.label}
                      <ArrowRight className="h-3 w-3 text-[hsl(var(--accent-blue))]" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[hsl(var(--accent-blue))]/20 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-white p-3">
                <p className="text-xs font-semibold text-[hsl(var(--navy))]">Delivery Tooling</p>
                <p className="mt-1 text-xs text-slate-600">
                  Scorecards, automation catalogs, and executive readouts live inside the HiTechLogic Control Center platform.
                </p>
                <a
                  href="/platform"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))]"
                >
                  Explore delivery tooling
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <a
                  href="/services#overview"
                  className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-xs font-semibold text-[hsl(var(--navy))] shadow-sm transition hover:border-[hsl(var(--accent-blue))]/40"
                >
                  Download overview
                  <ArrowRight className="h-3.5 w-3.5 text-[hsl(var(--accent-blue))]" />
                </a>
                <a
                  href="/case-studies"
                  className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-xs font-semibold text-[hsl(var(--navy))] shadow-sm transition hover:border-[hsl(var(--accent-blue))]/40"
                >
                  View proof points
                  <ArrowRight className="h-3.5 w-3.5 text-[hsl(var(--accent-blue))]" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              {/* Initial services shown */}
              {serviceTracks.slice(0, initialServicesToShow).map((track) => (
                <article
                  key={track.title}
                  id={track.id}
                  className="group rounded-[20px] border border-slate-200/80 bg-white/90 p-4 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent-blue))]/40"
                >
                  <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,240px)_minmax(0,280px)_minmax(0,180px)] lg:items-start lg:gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))]">
                          <track.icon className="h-4 w-4" />
                        </div>
                        <h4 className="text-sm font-semibold text-[hsl(var(--navy))]">
                          {track.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600">
                        {track.description}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100/80 bg-white p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Key Outcomes
                      </p>
                      <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                        {track.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2">
                            <span className="mt-1 inline-flex h-1 w-1 rounded-full bg-[hsl(var(--accent-blue))]" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 rounded-xl border border-slate-100/80 bg-slate-50/60 p-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Signature Metric
                        </p>
                        <p className="mt-1 text-lg font-semibold text-[hsl(var(--navy))]">
                          {track.metric}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Engagement Model
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[hsl(var(--accent-blue))]">
                          Executive-led partnership
                        </p>
                      </div>
                      <Button
                        asChild
                        size="sm"
                        className="w-full rounded-full text-xs"
                      >
                        <a href={track.pageHref}>View Capability</a>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3 border-t border-slate-100 pt-3">
                    <a
                      href={track.pageHref}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))]"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <span className="text-xs text-slate-500">
                      Includes readiness assessment and 90-day roadmap.
                    </span>
                  </div>
                </article>
              ))}

              {/* Expandable services section */}
              <div
                className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                  catalogExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-3">
                  {serviceTracks.slice(initialServicesToShow).map((track) => (
                    <article
                      key={track.title}
                      id={track.id}
                      className="group rounded-[20px] border border-slate-200/80 bg-white/90 p-4 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent-blue))]/40"
                    >
                      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,240px)_minmax(0,280px)_minmax(0,180px)] lg:items-start lg:gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))]">
                              <track.icon className="h-4 w-4" />
                            </div>
                            <h4 className="text-sm font-semibold text-[hsl(var(--navy))]">
                              {track.title}
                            </h4>
                          </div>
                          <p className="text-xs text-slate-600">
                            {track.description}
                          </p>
                        </div>

                        <div className="rounded-xl border border-slate-100/80 bg-white p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            Key Outcomes
                          </p>
                          <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                            {track.outcomes.map((outcome) => (
                              <li key={outcome} className="flex items-start gap-2">
                                <span className="mt-1 inline-flex h-1 w-1 rounded-full bg-[hsl(var(--accent-blue))]" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3 rounded-xl border border-slate-100/80 bg-slate-50/60 p-3">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Signature Metric
                            </p>
                            <p className="mt-1 text-lg font-semibold text-[hsl(var(--navy))]">
                              {track.metric}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Engagement Model
                            </p>
                            <p className="mt-1 text-xs font-semibold text-[hsl(var(--accent-blue))]">
                              Executive-led partnership
                            </p>
                          </div>
                          <Button
                            asChild
                            size="sm"
                            className="w-full rounded-full text-xs"
                          >
                            <a href={track.pageHref}>View Capability</a>
                          </Button>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-3 border-t border-slate-100 pt-3">
                        <a
                          href={track.pageHref}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))]"
                        >
                          Learn more
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                        <span className="text-xs text-slate-500">
                          Includes readiness assessment and 90-day roadmap.
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Expand/Collapse button */}
              {serviceTracks.length > initialServicesToShow && (
                <button
                  onClick={() => setCatalogExpanded(!catalogExpanded)}
                  className="group w-full text-left px-4 py-3 rounded-lg border border-slate-200/60 bg-[hsl(var(--accent-blue))]/5 hover:bg-[hsl(var(--accent-blue))]/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-[hsl(var(--navy))] mb-1">
                        {catalogExpanded ? 'Show Fewer Services' : `View ${serviceTracks.length - initialServicesToShow} More Services`}
                      </h4>
                      <p className="text-xs text-slate-600">
                        {catalogExpanded ? 'Click to collapse the service catalog' : 'Discover additional managed service offerings'}
                      </p>
                    </div>
                    <div className={`transition-transform duration-300 ${catalogExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown className={`h-5 w-5 text-[hsl(var(--accent-blue))] group-hover:text-[hsl(var(--navy))] transition-colors duration-300`} />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex flex-col items-center gap-2 rounded-2xl border border-[hsl(var(--accent-blue))]/30 bg-white/90 px-8 py-6 shadow-xl shadow-slate-900/5">
            <p className="text-sm font-semibold text-[hsl(var(--navy))]">
              Need a purpose-built program?
            </p>
            <p className="text-xs text-slate-600">
              We'll design a managed services portfolio that mirrors your operating model.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-6 text-sm"
            >
              <a href="/contact">Request Strategy Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
