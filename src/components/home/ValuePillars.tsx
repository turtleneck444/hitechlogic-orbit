import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Zap,
  Target,
} from "lucide-react";

const coreDisciplines = [
  {
    icon: ShieldCheck,
    title: "Reliability Engineering",
    description:
      "Predictive monitoring, AI-assisted playbooks, and automated remediation that keep critical operations online.",
    detail: "99.99% uptime goal across multi-cloud workloads",
    tone: "from-sky-500/60 via-slate-900/20 to-slate-950/20",
    href: "/services/reliability-performance-engineering",
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    description:
      "FinOps telemetry, rightsizing, and reserved capacity programs that cut needless spend while boosting efficiency.",
    detail: "40-60% spend reduction secured through transparency",
    tone: "from-emerald-400/60 via-slate-900/10 to-slate-950/20",
    href: "/services/cost-efficiency-capacity-strategy",
  },
  {
    icon: Zap,
    title: "Automation-First",
    description:
      "Self-healing systems and automation libraries resolve repetitive incidents so engineers can focus on innovation.",
    detail: "85% of incidents resolved automatically",
    tone: "from-indigo-500/60 via-slate-900/20 to-slate-950/20",
    href: "/services/automated-corrective-actions",
  },
  {
    icon: Target,
    title: "Executive Visibility",
    description:
      "Real-time dashboards that map infrastructure health to KPIs, enabling confident decision making at the C-suite level.",
    detail: "Live dashboards aligned with boardroom metrics",
    tone: "from-rose-500/60 via-slate-900/20 to-slate-950/20",
    href: "/services/strategic-technology-partnership",
  },
];

export function ValuePillars() {
  return (
    <section className="relative bg-[hsl(var(--accent-blue))] py-14 text-white sm:py-16">
      <div className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/80">
              Strategic Disciplines
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Four pillars that turn your technology operations into measurable business advantage.
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-white/80 drop-shadow-[0_10px_35px_rgba(2,6,23,0.35)]">
              HiTechLogic pairs deep operational experience with modern tooling to keep infrastructure resilient, efficient, and aligned with enterprise priorities.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-slate-200/70 bg-white/90 p-4 text-sm text-slate-900 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.9)]">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Executive Snapshot</p>
            <p className="text-base font-semibold text-slate-900">
              120+ engagements, avg. 58% faster incident recovery, 35% lower TCO.
            </p>
            <Button
              variant="ghost"
              size="md"
              asChild
              className="text-xs font-semibold uppercase tracking-[0.4em] text-[hsl(var(--accent-blue))] transition hover:text-cyan-300"
            >
              <Link to="/services">
                Explore the full catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreDisciplines.map((discipline) => (
            <article
              key={discipline.title}
            className="group relative overflow-hidden rounded-[28px] border border-white/30 bg-gradient-to-br from-[hsl(var(--accent-blue))]/90 via-[hsl(var(--accent-blue))]/70 to-[hsl(var(--accent-blue))]/40 p-6 shadow-[0_40px_120px_rgba(2,6,23,0.85)] transition hover:-translate-y-1 hover:border-white/40"
            >
              <Link
                to={discipline.href}
                className="absolute inset-0 z-20"
                aria-label={`Learn more about ${discipline.title}`}
              >
                <span className="sr-only">{discipline.title}</span>
              </Link>
              <div className="absolute -inset-2 z-0 rounded-[30px] border border-transparent bg-gradient-to-br from-[rgba(14,165,233,0.25)] via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-[hsl(var(--accent-blue))]/40 via-transparent to-transparent opacity-80 mix-blend-screen rotate-2 pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white shadow-lg transition-all ${discipline.tone}`}
                >
                  <discipline.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {discipline.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/85">{discipline.description}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  {discipline.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/50 p-6 text-sm text-slate-300 shadow-2xl sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white">
            Need something tailored? We weave these disciplines into a cohesive operating model with measurable KPIs and transparent governance.
          </p>
          <Button variant="outline" size="lg" asChild className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
            <Link to="/contact">Request a tailored program</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
