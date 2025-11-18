import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <section className="pt-12 lg:pt-16 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
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

        {/* AI Agent Library Showcase */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-[hsl(var(--accent-blue))]/20 mb-6">
              <Brain className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
              <span className="text-sm font-bold text-[hsl(var(--accent-blue))] tracking-wide uppercase">AI-Powered Innovation</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--navy))] mb-6 leading-tight">
              Enterprise-Grade Prototyping Powered by AI
            </h3>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Our autonomous agent ecosystem transforms traditional development workflows into intelligent, accelerated prototyping experiences.
            </p>
          </div>

          {/* Creative Flow Layout */}
          <div className="relative mb-12">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 via-transparent to-[hsl(var(--signal-purple))]/5 rounded-3xl" />

            {/* Main Content */}
            <div className="relative grid lg:grid-cols-3 gap-8 p-8 lg:p-12">
              {/* Left Column - Intelligent Code */}
              <div className="group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
                  <div className="relative bg-white rounded-2xl p-6 border-2 border-slate-200 group-hover:border-[hsl(var(--accent-blue))]/40 transition-all">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--signal-purple))]/5 mb-4 group-hover:scale-110 transition-transform">
                      <Code2 className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <h4 className="text-xl font-bold text-[hsl(var(--navy))] mb-3">Intelligent Code Generation</h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      AI agents automatically generate production-ready code patterns with enterprise architecture standards built-in.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[hsl(var(--accent-blue))]">
                      <span>3-5x faster development</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column - Testing */}
              <div className="group lg:mt-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--signal-purple))] to-[hsl(var(--accent-blue))] rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
                  <div className="relative bg-white rounded-2xl p-6 border-2 border-slate-200 group-hover:border-[hsl(var(--accent-blue))]/40 transition-all">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--signal-purple))]/10 to-[hsl(var(--accent-blue))]/5 mb-4 group-hover:scale-110 transition-transform">
                      <Activity className="h-7 w-7 text-[hsl(var(--signal-purple))]" />
                    </div>
                    <h4 className="text-xl font-bold text-[hsl(var(--navy))] mb-3">Automated Testing Orchestration</h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Comprehensive test suites run continuously with intelligent failure analysis and automated remediation suggestions.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[hsl(var(--signal-purple))]">
                      <span>99.9% code coverage</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Security */}
              <div className="group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-[hsl(var(--accent-blue))] rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-500" />
                  <div className="relative bg-white rounded-2xl p-6 border-2 border-slate-200 group-hover:border-[hsl(var(--accent-blue))]/40 transition-all">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/10 to-[hsl(var(--accent-blue))]/5 mb-4 group-hover:scale-110 transition-transform">
                      <Shield className="h-7 w-7 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-[hsl(var(--navy))] mb-3">Security-First Architecture</h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Every prototype includes enterprise-grade security controls, compliance frameworks, and zero-trust patterns from day one.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                      <span>Zero vulnerabilities</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--accent-blue))]/30 to-transparent -translate-y-1/2" />
          </div>

          {/* Powerful CTA Section */}
          <div className="text-center bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-[hsl(var(--signal-purple))]/5 rounded-2xl p-8 border border-[hsl(var(--accent-blue))]/20">
            <h4 className="text-2xl font-bold text-[hsl(var(--navy))] mb-4">
              Experience AI-Powered Prototyping
            </h4>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Transform your development process with our intelligent agent ecosystem. From concept validation to production deployment in record time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                variant="hero"
                size="lg"
                asChild
                className="bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Link to="/services/rapid-prototyping" className="flex items-center gap-2 group">
                  <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <span>Explore Rapid Prototyping</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  <span>Discuss Your Project</span>
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-slate-200/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--accent-blue))] mb-1">3-5x</div>
                <div className="text-xs text-slate-600">Faster Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--accent-blue))] mb-1">99.9%</div>
                <div className="text-xs text-slate-600">Production Ready</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[hsl(var(--accent-blue))] mb-1">24/7</div>
                <div className="text-xs text-slate-600">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
