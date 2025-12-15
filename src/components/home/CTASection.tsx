import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, Download, GaugeCircle, ShieldCheck, Timer } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="bg-[hsl(var(--accent-blue))] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1420px] px-4 sm:px-6 lg:px-14">
        <div className="relative overflow-hidden rounded-[24px] border border-[hsl(var(--border))]/70 bg-white px-6 sm:px-8 py-8 shadow-[0_24px_60px_-48px_rgba(11,18,32,0.35)]">
          <div className="absolute inset-0 bg-node-field [background-size:22px_22px] opacity-5" />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-blue))]/30 bg-[hsl(var(--accent-blue))]/10 px-3.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-[hsl(var(--accent-blue))]">
                Reliability Baseline
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Executive briefing
                </p>
                <h2 className="mt-3 text-[2.05rem] md:text-[2.3rem] leading-tight text-foreground">
                  Schedule a Strategy Call to Baseline Your Operations Roadmap
                </h2>
              </div>
              <p className="text-sm text-slate-600">
                A 45-minute session with our architects to map your telemetry, automation lift, and cost posture into a first 90-day plan—aligned to the Stage 1–4 maturity model.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: Timer,
                    title: "Fast Kickoff",
                    detail: "Reliability pod spins up in under 48 hours with Day-5 baselines."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Executive Clarity",
                    detail: "Scorecards unify reliability, automation, and FinOps signals."
                  },
                  {
                    icon: GaugeCircle,
                    title: "Actionable Metrics",
                    detail: "Stage placement and MTTR deltas benchmarked per service."
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Roadmap Ready",
                    detail: "Tailored 90-day action plan with automation + governance milestones."
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 rounded-2xl border border-slate-100 bg-white/90 p-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm text-slate-600 space-y-1">
                      <p className="font-semibold text-[hsl(var(--navy))]">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="lg" asChild className="rounded-full px-7">
                  <Link to="/contact" className="group">
                    Request Strategy Consultation
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="rounded-full px-7">
                  <a href="#" download className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Executive Brief PDF
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-[20px] border border-slate-200 bg-slate-50/80 p-4 sm:p-5 shadow-inner shadow-white/30 order-1 lg:order-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Quick Request
              </h4>
              <p className="text-xs text-slate-500 mb-3">
                Share your details for a tailored strategy session
              </p>
              <form 
                name="quick-request" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                className="space-y-3"
              >
                <input type="hidden" name="form-name" value="quick-request" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs focus:border-[hsl(var(--accent-blue))] focus:ring-1 focus:ring-[hsl(var(--accent-blue))]/20 outline-none transition"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs focus:border-[hsl(var(--accent-blue))] focus:ring-1 focus:ring-[hsl(var(--accent-blue))]/20 outline-none transition"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="role"
                    placeholder="Role / Title"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs focus:border-[hsl(var(--accent-blue))] focus:ring-1 focus:ring-[hsl(var(--accent-blue))]/20 outline-none transition"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs focus:border-[hsl(var(--accent-blue))] focus:ring-1 focus:ring-[hsl(var(--accent-blue))]/20 outline-none transition"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    name="cloud-stack"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 focus:border-[hsl(var(--accent-blue))] focus:ring-1 focus:ring-[hsl(var(--accent-blue))]/20 outline-none transition"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Primary cloud / stack</option>
                    <option value="AWS">AWS</option>
                    <option value="GCP">GCP</option>
                    <option value="Azure">Azure</option>
                    <option value="Multi-cloud">Multi-cloud</option>
                    <option value="Hybrid / On-prem">Hybrid / On-prem</option>
                  </select>
                  <select
                    name="urgency"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 focus:border-[hsl(var(--accent-blue))] focus:ring-1 focus:ring-[hsl(var(--accent-blue))]/20 outline-none transition"
                    defaultValue=""
                  >
                    <option value="" disabled>Urgency / timeline</option>
                    <option value="Immediate (0-4 weeks)">Immediate (0-4 weeks)</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="Quarter (3-6 months)">Quarter (3-6 months)</option>
                    <option value="Exploring options">Exploring options</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    name="focus"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 focus:border-[hsl(var(--accent-blue))] focus:ring-1 focus:ring-[hsl(var(--accent-blue))]/20 outline-none transition"
                    defaultValue=""
                  >
                    <option value="" disabled>Top focus</option>
                    <option value="Reduce alert noise">Reduce alert noise</option>
                    <option value="Improve MTTR / SRE">Improve MTTR / SRE</option>
                    <option value="Cost optimization / FinOps">Cost optimization / FinOps</option>
                    <option value="Platform reliability / scaling">Platform reliability / scaling</option>
                    <option value="Security & compliance">Security & compliance</option>
                    <option value="AI automation use cases">AI automation use cases</option>
                  </select>
                  <input
                    type="text"
                    name="tooling"
                    placeholder="Key tooling (Datadog, PagerDuty, Jira, etc.)"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs focus:border-[hsl(var(--accent-blue))] focus:ring-1 focus:ring-[hsl(var(--accent-blue))]/20 outline-none transition"
                  />
                </div>
                <textarea
                  name="context"
                  placeholder="Context we should know (pain points, environments, success criteria)"
                  rows={3}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs focus:border-[hsl(var(--accent-blue))] focus:ring-1 focus:ring-[hsl(var(--accent-blue))]/20 outline-none transition resize-none"
                />
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Button type="submit" variant="primary" size="sm" className="rounded-full text-xs h-8">
                    Request Session
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                  <Button type="button" variant="outline" size="sm" className="rounded-full text-xs h-8">
                    Request Callback
                  </Button>
                </div>
                <p className="text-[10px] text-slate-500 text-center">
                  We reply within 1 business day with a tailored plan and times to meet.
                </p>
              </form>
              <p className="mt-2 text-[10px] text-slate-400 text-center">
                Response within 1 business day
              </p>
            </div>
          </div>
          <div className="relative mt-6 text-xs font-medium tracking-wide text-slate-500 text-center">
            Includes current-state assessment, automation opportunities, and governance plan.
          </div>
        </div>
      </div>
    </section>
  );
}
