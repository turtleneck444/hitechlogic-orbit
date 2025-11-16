import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

        {/* Placeholder for content - import undone */}
        <div className="text-center py-16">
          <p className="text-white/70 text-lg">Content section</p>
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
