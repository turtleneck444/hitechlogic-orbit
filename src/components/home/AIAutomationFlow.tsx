import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Activity, Zap, CheckCircle2, Brain, Filter, ArrowRight, Bell, Shield, TrendingDown, Rocket, Code2, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { rapidPrototypingSteps } from "@/data/rapidPrototypingSteps";

type Step = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  metrics: string;
  color: string;
  bgColor: string;
  link?: string;
  metricsLabel?: string;
  phase?: string;
  accentBorder?: string;
  accentText?: string;
};

const accentStyles: Record<string, { border: string; text: string; bg: string }> = {
  "rapid-design-prototyping": { border: "border-slate-200", text: "text-[hsl(var(--navy))]", bg: "bg-slate-50" },
  "build-launch": { border: "border-slate-200", text: "text-[hsl(var(--navy))]", bg: "bg-slate-50" },
  operate: { border: "border-slate-200", text: "text-[hsl(var(--navy))]", bg: "bg-slate-50" },
};

const automationSteps: Step[] = rapidPrototypingSteps.map((step) => ({
  id: step.slug,
  title: step.title,
  description: step.description,
  icon: step.icon,
  metrics:
    step.slug === "rapid-design-prototyping"
      ? "3-5x faster ideation"
      : step.slug === "build-launch"
      ? "50% faster deployment"
      : "24/7 reliability",
  color: "text-white",
  bgColor: accentStyles[step.slug].bg,
  link: `/services/rapid-prototyping/${step.slug}`,
  metricsLabel: step.specialty,
  phase: step.step,
  accentBorder: accentStyles[step.slug].border,
  accentText: accentStyles[step.slug].text,
}));

const benefits = [
  "MSP DNA: production-ready with built-in security, reliability & compliance",
  "AI-powered speed: 3-5x faster development with generative tools",
  "Seamless hand-off to 24/7 managed services",
  "Iterative delivery with continuous feedback",
];

export function AIAutomationFlow() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-[hsl(var(--accent-blue))]/20 mb-6">
            <Zap className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
            <span className="text-sm font-bold text-[hsl(var(--navy))]">Autonomous Agent Swarm</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--navy))] mb-6">
            How Our AI Agent Library Powers Rapid Prototyping & Development
          </h2>
          <p className="text-lg text-slate-600 mb-4">
            The agent library that connects Rapid Design & Prototyping, Build & Launch, and 24/7 Operations into one seamless experience.
          </p>
          <p className="text-base text-slate-500">
            Here is where we extend the third phase: our operate agents inherit validated concepts, hardened releases, and bring <span className="font-semibold text-[hsl(var(--accent-blue))]">24/7 reliability</span> with intelligent detection, triage, and remediation.
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-[hsl(var(--accent-blue))]/30 to-slate-200 -translate-y-1/2 z-0" />

            {/* Steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
              {automationSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;

                return (
                  <div key={step.id} className="relative">
                    <Link to={step.link || "#"} className="block">
                      <Card
                        className={`group cursor-pointer transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/50 hover:shadow-xl hover:scale-[1.02] bg-white ${
                          isActive ? "border-[hsl(var(--accent-blue))] shadow-2xl scale-[1.02]" : "border-slate-200"
                        }`}
                        onMouseEnter={() => setActiveStep(step.id)}
                        onMouseLeave={() => setActiveStep(null)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />

                        <div className="relative p-6">
                          {/* Step Number */}
                          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[hsl(var(--accent-blue))] text-white font-bold text-sm flex items-center justify-center shadow-lg">
                            {index + 1}
                          </div>

                          {/* Icon */}
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/50 border-2 border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:border-[hsl(var(--accent-blue))]/30">
                            <Icon className="h-8 w-8 text-[hsl(var(--navy))]" />
                          </div>

                          {/* Phase label */}
                          <div className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 mb-1">
                            Phase {step.phase}
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-2">
                            {step.title}
                          </h3>

                          {/* Metrics Badge */}
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-slate-50 border border-[hsl(var(--accent-blue))]/20 mb-3">
                            <TrendingDown className="h-3 w-3 text-[hsl(var(--accent-blue))]" />
                            <span className="text-xs font-semibold text-[hsl(var(--navy))]">
                              {step.metrics}
                            </span>
                          </div>

                          {/* Description */}
                          <p className={`text-sm text-slate-600 transition-all duration-300 ${
                            isActive ? "line-clamp-none" : "line-clamp-3"
                          }`}>
                            {step.description}
                          </p>

                          {/* Specialty Label */}
                          {step.metricsLabel && (
                            <div className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                              {step.metricsLabel}
                            </div>
                          )}

                          <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-[hsl(var(--accent-blue))] group-hover:translate-x-1 transition-transform">
                            <span>Explore this phase</span>
                            <ArrowRight className="h-3 w-3" />
                          </div>
                        </div>
                      </Card>
                    </Link>

                    {/* Arrow */}
                    {index < automationSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-3 z-20 -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Business Impact Section - Single Row 3 Columns */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--navy))] mb-4">
              The Business Impact
            </h3>
            <p className="text-lg text-slate-600">
              Why HiTechLogic for Prototyping?
            </p>
          </div>

        <div className="grid">
          <Card className="p-8 bg-gradient-to-br from-white to-blue-50/30 border-2 border-[hsl(var(--accent-blue))]/30 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
              <h4 className="text-2xl font-bold text-[hsl(var(--navy))]">Why HiTechLogic for Prototyping?</h4>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
      </div>
    </section>
  );
}
