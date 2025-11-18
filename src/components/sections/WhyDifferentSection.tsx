import { Card } from "@/components/ui/card";
import { BarChart3, Brain, Link as LinkIcon, Shield, Zap } from "lucide-react";

const differentiators = [
  {
    icon: Brain,
    title: "Adaptive AI",
    description: "Learns your unique infrastructure and flags issues before they reach production.",
  },
  {
    icon: BarChart3,
    title: "Executive intelligence",
    description: "Board-ready dashboards surface the KPIs and predictive insights leaders need.",
  },
  {
    icon: Shield,
    title: "Onshore SOC + AI co-pilot",
    description: "24/7 American-based operations with AI assistance for detection and response.",
  },
  {
    icon: LinkIcon,
    title: "Seamless integration",
    description: "Plugs into Datadog, Dynatrace, NewRelic, Splunk, Grafana with no rip-and-replace.",
  },
  {
    icon: Zap,
    title: "Zero-disruption delivery",
    description: "In-place implementation finishes in under 8 weeks so your teams stay productive.",
  },
];

export default function WhyDifferentSection() {
  return (
    <section className="section-space bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="eyebrow text-[hsl(var(--accent-blue))]">Why HiTechLogic Is Different</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[hsl(var(--navy))]">
            Enterprise-grade infrastructure, simplified and intentional.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We marry context-aware AI with proven enterprise operating models so your observability stack keeps pace with change.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 border border-slate-200 bg-white/80 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white shadow-lg">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-[hsl(var(--navy))] mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-[hsl(var(--accent-blue))]/20 bg-white/80 p-8 text-left shadow-xl md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="text-lg font-semibold text-[hsl(var(--navy))]">Not just another MSP</div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Intelligent infrastructure optimization with real human oversight, zero disruption deployment, and 24/7 onshore response.
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 text-[hsl(var(--accent-blue))]">
            <div className="text-4xl font-black">99.99%</div>
            <div className="text-xs font-semibold text-slate-500">Sustained uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
