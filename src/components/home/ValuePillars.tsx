import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PinContainer } from "@/components/ui/3d-pin";
import {
  ArrowRight,
  Cloud,
  Eye,
  Zap,
  TrendingUp,
} from "lucide-react";

const coreDisciplines = [
  {
    icon: Cloud,
    title: "Infrastructure & Cloud Operations",
    description:
      "Hybrid, multi-cloud, and on-prem estates managed with disciplined change, capacity, and lifecycle controls.",
    detail: "4 dedicated operational pods",
    tone: "from-sky-500/60 via-slate-900/20 to-slate-950/20",
    href: "/services/infrastructure-cloud-operations",
  },
  {
    icon: Eye,
    title: "System Oversight & Event Reduction",
    description:
      "Noise-calmed monitoring and automated correlation that keeps executive dashboards clear and actionable.",
    detail: "82% average noise reduction",
    tone: "from-indigo-500/60 via-slate-900/20 to-slate-950/20",
    href: "/services/system-oversight-event-reduction",
  },
  {
    icon: Zap,
    title: "Automated Corrective Actions",
    description:
      "Self-healing frameworks that remediate known failure modes before teams are paged during incidents.",
    detail: "65+ automated runbooks deployed",
    tone: "from-emerald-400/60 via-slate-900/10 to-slate-950/20",
    href: "/services/automated-corrective-actions",
  },
  {
    icon: TrendingUp,
    title: "Cost Efficiency & Capacity Strategy",
    description:
      "Financial observability and optimization programs that keep spend predictable and accountable.",
    detail: "40-60% cloud spend reduction",
    tone: "from-rose-500/60 via-slate-900/20 to-slate-950/20",
    href: "/services/cost-efficiency-capacity-strategy",
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
              size="sm"
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {coreDisciplines.map((discipline) => (
            <div key={discipline.title} className="h-[400px] xl:h-[450px]">
              <PinContainer
                title={`Explore ${discipline.title}`}
                href={discipline.href}
                containerClassName="h-full p-6 rounded-[28px] overflow-hidden"
                className="space-y-4 h-full flex flex-col"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white shadow-lg transition-all group-hover:scale-110">
                  <discipline.icon className="h-6 w-6" />
                </div>

                <div className="flex-1 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {discipline.title}
                    </h3>
                    <p className="text-sm text-white/85 leading-relaxed">
                      {discipline.description}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                      {discipline.detail}
                    </p>
                  </div>

                  {/* Interactive elements specific to each pillar */}
                  <div className="grid grid-cols-2 gap-3 text-xs text-white/60">
                    <div className="space-y-1 text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/10 hover:border-white/20">
                      <div className="font-bold text-white text-sm">24/7</div>
                      <div className="text-xs">Monitoring</div>
                    </div>
                    <div className="space-y-1 text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/10 hover:border-white/20">
                      <div className="font-bold text-white text-sm">AI</div>
                      <div className="text-xs">Powered</div>
                    </div>
                  </div>
                </div>

                {/* Animated connector line */}
                <div className="flex items-center justify-center space-x-2 text-white/60">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"></div>
                  <div className="text-sm text-white/70 font-medium">→</div>
                </div>
              </PinContainer>
            </div>
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
