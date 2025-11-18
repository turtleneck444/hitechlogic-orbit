import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight, Target, Zap, ShieldCheck, Clock } from "lucide-react";

export default function AutomatedCorrectiveActions() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "HiTechLogic",
    },
    serviceType: "Automated Corrective Actions",
    name: "Automated Corrective Actions",
    description: "AI-driven remediation, self-healing runbooks, and automated workflows that resolve incidents within minutes.",
  };

  const highlights = [
    "AI learns from every incident to improve responses",
    "Built-in governance, approvals, and audit trails",
    "Human-in-the-loop controls for critical flows",
    "Confidence scoring that powers executive oversight",
  ];

  const implementation = [
    {
      step: "01",
      title: "Assess & Instrument",
      description: "Map critical workflows, define failure modes, and instrument telemetry for full visibility.",
    },
    {
      step: "02",
      title: "Model & Automate",
      description: "Craft AI-driven runbooks with safety nets, approvals, and rollback controls.",
    },
    {
      step: "03",
      title: "Operationalize",
      description: "Deploy self-healing playbooks, align incident response, and orchestrate automation governance.",
    },
    {
      step: "04",
      title: "Optimize Continuously",
      description: "Deliver analytics, reliability reports, and executive-ready dashboards for every automation.",
    },
  ];

  return (
    <>
      <SEO
        title="Automated Corrective Actions & Self-Healing Infrastructure | HiTechLogic"
        description="Automated remediation that resolves incidents in minutes with AI-powered workflows, runbooks, and governance for enterprise operations."
        keywords="automated corrective actions, self-healing infrastructure, runbooks, incident automation, MTTR reduction, AI remediation"
        canonical="https://hitechlogic.com/services/automated-corrective-actions"
        schema={schema}
      />
      <Layout>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
              <Zap className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
            </div>
            <span className="text-sm font-medium text-white/90 tracking-wide">Automated Corrective Actions</span>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Self-Healing Infrastructure
            <span className="text-[hsl(var(--accent-blue))] block">Powered by AI Automation</span>
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">
            Intelligent remediation that resolves incidents before stakeholders even notice. Built for enterprises that cannot tolerate downtime.
          </p>
          <div className="mt-10">
              <Button asChild size="xl" className="bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/90">
                <Link to="/contact" className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Schedule Automation Assessment
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white/40 text-white hover:border-white hover:bg-white/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/80">
              {[
                { label: "MTTR Improvement", value: "95%" },
                { label: "Automation Outcomes", value: "615+ runbooks" },
                { label: "Detection Time", value: "<90s" },
                { label: "Availability", value: "99.99%" },
              ].map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/20 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-white/60">{metric.label}</p>
                  <p className="text-3xl font-bold mt-2">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr,400px]">
              <div className="space-y-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  HiTechLogic automates corrective actions with enterprise-grade safety nets. We combine AI-driven remediation, runbook libraries, and executive-ready reporting to resolve incidents before business stakeholders are impacted.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  {highlights.map((item) => (
                    <Card key={item} className="p-6 border border-slate-200 bg-white shadow-sm">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Capability</p>
                      <p className="text-slate-700">{item}</p>
                    </Card>
                  ))}
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-xl font-semibold text-[hsl(var(--navy))] mb-3">Executive Impact</h3>
                  <p className="text-slate-600 mb-4">
                    Automations execute with human governance, delivering measurable MTTR, reliability, and confidence at the CXO level.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Real-time remediation scorecards and dashboards</li>
                    <li>• Auditable runbooks with approvals and rollback options</li>
                    <li>• Confidence scoring so leadership trusts every automation</li>
                  </ul>
                </div>
              </div>

              <aside className="space-y-6">
                <Card className="p-6 border border-slate-200 bg-white">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 mb-4">Approach</h3>
                  <div className="space-y-4">
                    {implementation.map((phase) => (
                      <div key={phase.step} className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg font-bold text-[hsl(var(--navy))]">
                          {phase.step}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[hsl(var(--navy))]">{phase.title}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{phase.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card className="p-6 border border-slate-200 bg-[hsl(var(--accent-blue))]/10">
                  <h3 className="text-base font-semibold text-[hsl(var(--navy))] mb-4">Ready for autonomous operations?</h3>
                  <p className="text-sm text-slate-600 mb-6">
                    We build self-healing controls that harmonize with your engineering practices—no disruption, only measurable downtime reduction.
                  </p>
                  <Button variant="primary" size="lg" asChild className="w-full">
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      Discuss Automation Partnership
                    </Link>
                  </Button>
                </Card>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-space bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))]">
          <div className="mx-auto w-full max-w-4xl px-6 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Master your infrastructure operations with automated remediation</h2>
            <p className="text-lg text-white/80 mb-8">
              Stop reacting to alerts and start orchestrating reliability. Our experts will build the corrective actions that keep you ahead of disruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-white text-[hsl(var(--navy))] hover:bg-slate-50">
                <Link to="/contact" className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Request Automation Workshop
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white/60 text-white hover:border-white">
                <Link to="/services">View Service Catalog</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
