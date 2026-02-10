import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight, Target, Zap, ShieldCheck, Clock } from "lucide-react";

export default function AIBusinessAutomation() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://hitechlogic.com/services/automated-corrective-actions#service",
        name: "AI Business Automation",
        description: "Intelligent AI agents that proactively manage infrastructure, predict issues, and execute intelligent remediation with human oversight and governance.",
        provider: { "@type": "Organization", "@id": "https://hitechlogic.com/#organization", name: "HiTechLogic" },
        serviceType: "AI Business Automation",
        areaServed: "Worldwide",
        audience: { "@type": "Audience", audienceType: "CTOs, VP Engineering, IT Operations Leaders" },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://hitechlogic.com/services/automated-corrective-actions",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://hitechlogic.com/services/automated-corrective-actions#webpage",
        url: "https://hitechlogic.com/services/automated-corrective-actions",
        name: "AI Business Automation & AI Agent Services | HiTechLogic",
        description: "Intelligent AI agents that proactively manage infrastructure, predict issues, and execute intelligent remediation with human oversight for enterprise operations.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://hitechlogic.com/#website" },
        about: { "@id": "https://hitechlogic.com/#organization" },
        datePublished: "2024-01-01",
        dateModified: "2025-02-10",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://hitechlogic.com/services/automated-corrective-actions#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hitechlogic.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://hitechlogic.com/services" },
          { "@type": "ListItem", position: 3, name: "AI Business Automation", item: "https://hitechlogic.com/services/automated-corrective-actions" },
        ],
      },
    ],
  };

  const highlights = [
    "Autonomous AI agents that learn and adapt continuously",
    "Human-AI collaboration with intelligent oversight",
    "Predictive analytics and proactive issue prevention",
    "Enterprise-grade governance and audit capabilities",
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
        title="AI Business Automation & AI Agent Services | HiTechLogic"
        description="Intelligent AI agents that proactively manage infrastructure, predict issues, and execute intelligent remediation with human oversight for enterprise operations."
        keywords="AI business automation, AI agent services, autonomous infrastructure, AI agents, predictive maintenance, intelligent automation, autonomous operations"
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
            <span className="text-sm font-medium text-white/90 tracking-wide">AI Business Automation</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white text-balance max-w-5xl">
            AI Business Automation{" "}
            <span className="text-[hsl(var(--accent-blue))] block sm:inline md:block lg:inline">& AI Agent Services</span>
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">
            Intelligent AI agents that proactively manage infrastructure, predict issues, and execute autonomous remediation with human oversight. The future of operations is here.
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
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: "MTTR Improvement", value: "95%" },
                { label: "Automation Outcomes", value: "615+ runbooks" },
                { label: "Detection Time", value: "<90s" },
                { label: "Availability", value: "99.99%" },
              ].map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/5 p-4 md:p-5 text-center shadow-lg shadow-black/10">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{metric.value}</div>
                  <div className="mt-1 text-xs md:text-sm font-medium text-white/70 uppercase tracking-[0.3em]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1fr,400px]">
              <div className="space-y-8 order-2 lg:order-1">
                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                  HiTechLogic deploys autonomous AI agents that continuously learn from your infrastructure patterns, predict potential issues before they occur, and execute intelligent remediation with human oversight. Our agentic AI systems transform reactive operations into proactive, self-optimizing infrastructure management.
                </p>
                <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                  {highlights.map((item) => (
                    <Card key={item} className="p-4 md:p-6 border border-slate-200 bg-white shadow-sm">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">Capability</p>
                      <p className="text-sm md:text-base text-slate-700">{item}</p>
                    </Card>
                  ))}
                </div>
                <div className="rounded-2xl md:rounded-3xl border border-slate-200 bg-slate-50 p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-[hsl(var(--navy))] mb-3">Executive Impact</h3>
                  <p className="text-sm md:text-base text-slate-600 mb-4">
                    AI agents operate with human oversight, delivering predictive insights, autonomous remediation, and measurable operational excellence at the CXO level.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Predictive issue prevention and autonomous resolution</li>
                    <li>• Real-time AI agent performance dashboards and analytics</li>
                    <li>• Human-AI collaboration with intelligent escalation protocols</li>
                  </ul>
                </div>
              </div>

              <aside className="space-y-6 order-1 lg:order-2">
                <Card className="p-4 md:p-6 border border-slate-200 bg-white">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 mb-4">Approach</h3>
                  <div className="space-y-4">
                    {implementation.map((phase) => (
                      <div key={phase.step} className="flex gap-3 md:gap-4">
                        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-base md:text-lg font-bold text-[hsl(var(--navy))]">
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
                <Card className="p-4 md:p-6 border border-slate-200 bg-[hsl(var(--accent-blue))]/10">
                  <h3 className="text-sm md:text-base font-semibold text-[hsl(var(--navy))] mb-4">Ready for autonomous operations?</h3>
                  <p className="text-sm text-slate-600 mb-6">
                    We build self-healing controls that harmonize with your engineering practices—no disruption, only measurable downtime reduction.
                  </p>
                  <Button variant="primary" size="lg" asChild className="w-full h-12 text-base font-semibold">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform operations with autonomous AI agents</h2>
            <p className="text-lg text-white/80 mb-8">
              Move beyond reactive monitoring to proactive, self-optimizing infrastructure. Our AI agents continuously learn and adapt to keep your operations ahead of every potential issue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-white text-[hsl(var(--accent-blue))] hover:bg-slate-50">
                <Link to="/contact" className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
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
