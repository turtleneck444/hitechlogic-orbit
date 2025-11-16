import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight, Zap, Clock, Sparkles, Activity, ShieldCheck, Workflow, Target, Globe, Phone, MessageCircle } from "lucide-react";

const phases = [
  {
    id: "phase-01",
    title: "Rapid Design & Prototyping",
    metric: "3-5× faster ideation",
    detail:
      "AI-powered design agents accelerate ideation with automated wireframes, user journeys, and concept validation so interactive prototypes land in days.",
    action: "Explore this phase",
  },
  {
    id: "phase-02",
    title: "AI-Accelerated Development",
    metric: "50% faster development",
    detail:
      "Intelligent coding agents lean on reusable components, MSP-grade architecture, and security guardrails so production-ready experiences launch in weeks.",
    action: "Explore this phase",
  },
  {
    id: "phase-03",
    title: "24/7 Autonomous Operations",
    metric: "99.99% uptime",
    detail:
      "Operate agents inherit validated concepts and hardened releases, delivering continuous reliability with intelligent detection, triage, and automated remediation.",
    action: "Explore this phase",
  },
];

const benefits = [
  "MSP DNA: production-ready with security, reliability, and compliance built in",
  "AI-powered speed: 3-5× faster development with generative tooling",
  "Seamless handoff from prototyping to 24/7 managed operations",
  "Iterative delivery with continuous feedback loops",
];

export default function AutonomousAgentSwarm() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Autonomous Agent Swarm",
    description: "AI agent library powering rapid prototyping, development, and autonomous operations.",
    provider: {
      "@type": "Organization",
      name: "HiTechLogic",
    },
  };

  return (
    <>
      <SEO
        title="Autonomous Agent Swarm | AI Agents for Rapid Prototyping & Operations"
        description="HiTechLogic's Autonomous Agent Swarm unifies AI-driven prototyping, MSP-grade development, and 24/7 autonomous observations so ideas ship faster and stay resilient."
        canonical="https://hitechlogic.com/services/autonomous-agent-swarm"
        schema={schema}
      />
      <Layout>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f6f8ff] via-white to-blue-50 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff80,transparent_65%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(37,99,235,0.08),transparent_70%)]" />
          <div className="relative mx-auto max-w-6xl px-6 text-slate-900">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-blue))]/40 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.4em] text-[hsl(var(--accent-blue))]">
                <Sparkles className="h-4 w-4" />
                Autonomous Agent Swarm
              </div>
              <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                How our AI agent library powers rapid prototyping, development, and operations into one seamless experience.
              </h1>
              <p className="text-lg text-slate-600">
                Connect Rapid Design & Prototyping, AI-Accelerated Development, and Autonomous Operations with agent-driven automation that inherits validated concepts and enforces reliability from day one.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Talk to an Agent Architect
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:contact@hitechlogic.com?subject=Autonomous%20Agent%20Swarm%20Inquiry" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Request a Callback
                  </a>
                </Button>
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {phases.map((phase) => (
                <Card key={phase.id} className="relative overflow-hidden border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-900/10">
                  <div className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">{phase.title}</div>
                  <div className="mt-3 text-2xl font-black text-[hsl(var(--accent-blue))]">{phase.metric}</div>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{phase.detail}</p>
                  <Button variant="link" size="sm" asChild className="mt-6 text-[hsl(var(--accent-blue))]">
                    <Link to="/services/rapid-prototyping">
                      {phase.action}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-4xl font-black text-[hsl(var(--navy))]">Our Rapid Prototyping Process</h2>
            <p className="mt-3 text-lg text-slate-600">
              A proven three-phase approach that eliminates the gap between prototype and production with agent teams owning each transition.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
            {phases.map((phase, index) => (
              <Card key={`process-${phase.id}`} className="p-6 border border-slate-200 bg-slate-50 shadow-lg">
                <div className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Phase {String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 text-xl font-bold text-[hsl(var(--navy))]">{phase.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{phase.detail}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-[hsl(var(--accent-blue))]">
                  <span>{phase.action}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
                <div className="mt-6 text-3xl font-black text-[hsl(var(--accent-blue))]">{phase.metric}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-900 via-[#111827] to-[#0b1220] text-white">
          <div className="mx-auto max-w-5xl px-6 text-center space-y-6">
            <h2 className="text-4xl font-black">The Business Impact</h2>
            <p className="text-lg text-white/80">
              HiTechLogic’s Autonomous Agent Swarm makes prototyping production-ready with MSP DNA, AI speed, and seamless operational hand-offs.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">Weeks to MVP Launch</div>
                <div className="mt-3 text-4xl font-black">4-8</div>
                <div className="text-sm text-white/70">Weeks to production-ready release</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">Cost Reduction</div>
                <div className="mt-3 text-4xl font-black">60%</div>
                <div className="text-sm text-white/70">Compared to traditional development</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">Availability</div>
                <div className="mt-3 text-4xl font-black">99.99%</div>
                <div className="text-sm text-white/70">24/7 autonomous operations</div>
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-white/80">
                  <div className="flex items-center gap-4 text-white">
                    <Zap className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                    <span className="text-sm font-semibold">{benefit}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-6 text-center space-y-4">
            <h2 className="text-4xl font-black text-[hsl(var(--navy))]">Ready to activate the swarm?</h2>
            <p className="text-lg text-slate-600">
              Book a strategy call, join a live demo, or message our ops desk to see how the Autonomous Agent Swarm powers your next product launch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Request Strategy Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+18884483244" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Operations Desk
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
