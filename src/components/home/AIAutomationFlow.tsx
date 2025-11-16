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
};

const automationSteps: Step[] = [
  {
    id: "design",
    title: "Rapid Design & Prototyping",
    description: "AI-powered design agents accelerate ideation with automated wireframes, user journey mapping, and concept validation. Transform ideas into interactive prototypes in days, not months.",
    icon: Lightbulb,
    metrics: "3-5x faster ideation",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    link: "/services/rapid-prototyping/rapid-design-prototyping"
  },
  {
    id: "build",
    title: "AI-Accelerated Development",
    description: "Intelligent coding agents leverage generative AI and reusable components to build applications 3-5x faster with MSP-grade architecture and security built-in from day one.",
    icon: Code2,
    metrics: "50% faster development",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    link: "/services/rapid-prototyping/build-launch"
  },
  {
    id: "operate",
    title: "24/7 Autonomous Operations",
    description: "Operate agents inherit validated concepts and hardened releases, bringing continuous reliability with intelligent detection, triage, and automated remediation.",
    icon: Zap,
    metrics: "99.99% uptime",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    link: "/services/rapid-prototyping/operate"
  },
];

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
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200 -translate-y-1/2 z-0" />

            {/* Steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
              {automationSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;

                return (
                  <div key={step.id} className="relative">
                    <Link to={step.link || "#"} className="block">
                      <Card
                        className={`group cursor-pointer transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-xl hover:scale-105 ${
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

                          {/* Click to explore */}
                          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[hsl(var(--accent-blue))] group-hover:translate-x-1 transition-transform">
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

        {/* Rapid Prototyping Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--navy))] mb-4">
              Our Rapid Prototyping Process
            </h3>
            <p className="text-lg text-slate-600">
              A proven 3-phase approach that eliminates the gap between prototype and production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rapidPrototypingSteps.map((process, index) => {
              const Icon = process.icon;
              return (
                <Link key={process.slug} to={`/services/rapid-prototyping/${process.slug}`} className="block group">
                  <Card className="h-full p-6 bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[hsl(var(--accent-blue))]/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${process.color} flex items-center justify-center shadow-lg`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-xs font-bold text-[hsl(var(--accent-blue))] uppercase tracking-wide">
                            Phase {process.step}
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-[hsl(var(--accent-blue))] group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h4>
                      <p className="text-sm text-slate-600 flex-grow">{process.description}</p>
                      
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-500">{process.specialty}</span>
                          <span className="text-xs font-semibold text-[hsl(var(--accent-blue))]">View details →</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Benefits Column */}
            <Card className="p-6 bg-gradient-to-br from-white to-blue-50/30 border-2 border-[hsl(var(--accent-blue))]/20">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                <h4 className="text-lg font-bold text-[hsl(var(--navy))]">Why HiTechLogic for Prototyping?</h4>
              </div>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Metrics Columns */}
            <div className="text-center p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-blue-50 mb-4">
                <Rocket className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
              </div>
              <div className="text-4xl font-black bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent mb-2">
                4-8
              </div>
              <div className="text-sm font-semibold text-slate-700">
                Weeks to MVP Launch
              </div>
              <p className="text-xs text-slate-600 mt-2">
                From concept to production-ready application
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--signal-purple))]/10 to-purple-50 mb-4">
                <Zap className="h-7 w-7 text-[hsl(var(--signal-purple))]" />
              </div>
              <div className="text-4xl font-black bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent mb-2">
                60%
              </div>
              <div className="text-sm font-semibold text-slate-700">
                Cost Reduction
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Compared to traditional development approaches
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
