import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Activity, Zap, CheckCircle2, Brain, Filter, ArrowRight, Bell, Shield, TrendingDown } from "lucide-react";
import { rapidPrototypingSteps } from "@/data/rapidPrototypingSteps";

type Step = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  metrics: string;
  color: string;
  bgColor: string;
};

const automationSteps: Step[] = [
  {
    id: "detect",
    title: "Agent Detection",
    description: "Autonomous monitoring agents continuously analyze infrastructure metrics, logs, and traces using ML algorithms to detect anomalies and potential issues before they impact operations.",
    icon: Brain,
    metrics: "Detects issues 80% faster",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "filter",
    title: "Agent Triage",
    description: "Intelligent filtering agents correlate alerts across systems, suppress duplicates, and eliminate noise – surfacing only actionable incidents that require attention.",
    icon: Filter,
    metrics: "Reduces alert noise by 90%",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "analyze",
    title: "Agent Analysis",
    description: "Diagnostic agents perform root cause analysis by tracing service dependencies, examining historical patterns, and correlating signals across your entire stack.",
    icon: Activity,
    metrics: "Identifies root cause in minutes",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    id: "respond",
    title: "Agent Remediation",
    description: "Self-healing agents execute automated runbooks to remediate issues – restarting services, scaling resources, routing traffic, or optimizing configurations.",
    icon: Zap,
    metrics: "Resolves 75% of issues automatically",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    id: "verify",
    title: "Agent Learning",
    description: "Verification agents validate fixes, monitor for recurrence, and continuously refine runbooks using machine learning to improve future incident responses.",
    icon: CheckCircle2,
    metrics: "Prevents recurring incidents",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
];

export function AIAutomationFlow() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const highlightSteps = rapidPrototypingSteps.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-[hsl(var(--accent-blue))]/20 mb-6">
            <Zap className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
            <span className="text-sm font-bold text-[hsl(var(--navy))]">Autonomous Agent Swarm</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--navy))] mb-6">
            How Our AI Agent Library Powers Operate
          </h2>
          <p className="text-lg text-slate-600 mb-4">
            The agent library that keeps the Rapid Design & Prototyping, Build & Launch, and Operate phases connected.
          </p>
          <p className="text-base text-slate-500">
            Here is where we extend the third phase: our operate agents inherit validated concepts, hardened releases, and bring 24/7 reliability with intelligent detection, triage, and remediation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-widest text-slate-500">
            {highlightSteps.map((step) => (
              <span key={step.slug} className="px-3 py-1 rounded-full border border-slate-200 bg-white/60 shadow-sm">
                {step.title}
              </span>
            ))}
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200 -translate-y-1/2 z-0" />

            {/* Steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 z-10">
              {automationSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;

                return (
                  <div key={step.id} className="relative">
                    <Card
                      className={`group cursor-pointer transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-xl ${
                        isActive ? "border-[hsl(var(--accent-blue))] shadow-2xl scale-105" : ""
                      }`}
                      onMouseEnter={() => setActiveStep(step.id)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      <div className={`absolute inset-0 ${step.bgColor} opacity-0 group-hover:opacity-50 transition-opacity rounded-lg`} />

                      <div className="relative p-6">
                        {/* Step Number */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[hsl(var(--accent-blue))] text-white font-bold text-sm flex items-center justify-center shadow-lg">
                          {index + 1}
                        </div>

                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-xl ${step.bgColor} border-2 border-${step.color.split('-')[1]}-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className={`h-8 w-8 ${step.color}`} />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-2">
                          {step.title}
                        </h3>

                        {/* Metrics Badge */}
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${step.bgColor} border border-${step.color.split('-')[1]}-200 mb-3`}>
                          <TrendingDown className={`h-3 w-3 ${step.color}`} />
                          <span className={`text-xs font-semibold ${step.color}`}>
                            {step.metrics}
                          </span>
                        </div>

                        {/* Description */}
                        <p className={`text-sm text-slate-600 transition-all duration-300 ${
                          isActive ? "line-clamp-none" : "line-clamp-3"
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </Card>

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

        {/* Impact Metrics */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-white to-blue-50/30 border-2 border-[hsl(var(--accent-blue))]/20">
            <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6 text-center">
              The Business Impact
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-white border border-slate-200">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-blue-50 mb-4">
                  <Bell className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
                </div>
                <div className="text-4xl font-black bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent mb-2">
                  90%
                </div>
                <div className="text-sm font-semibold text-slate-700">
                  Reduction in Alert Noise
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Focus on what matters with intelligent filtering
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-white border border-slate-200">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--signal-purple))]/10 to-purple-50 mb-4">
                  <Zap className="h-7 w-7 text-[hsl(var(--signal-purple))]" />
                </div>
                <div className="text-4xl font-black bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent mb-2">
                  75%
                </div>
                <div className="text-sm font-semibold text-slate-700">
                  Faster Incident Resolution
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Automated remediation accelerates MTTR
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-white border border-slate-200">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500/10 to-green-50 mb-4">
                  <Shield className="h-7 w-7 text-green-600" />
                </div>
                <div className="text-4xl font-black bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent mb-2">
                  99.99%
                </div>
                <div className="text-sm font-semibold text-slate-700">
                  Uptime Achieved
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  Self-healing prevents outages before they happen
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
