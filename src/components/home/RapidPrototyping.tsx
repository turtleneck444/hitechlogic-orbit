import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Rocket, Lightbulb, Code2, Shield, TrendingUp, Clock, CheckCircle2, Sparkles, Zap, ArrowRight } from "lucide-react";
import { rapidPrototypingSteps } from "@/data/rapidPrototypingSteps";

export function RapidPrototyping() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const processSteps = rapidPrototypingSteps;

  return (
    <section className="py-20 bg-white relative overflow-hidden border-y border-slate-100">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:80px_80px] opacity-70" />

      {/* Floating Orbs */}
      <div className="absolute top-10 right-10 w-60 h-60 bg-[hsl(var(--signal-purple))]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-16 left-8 w-80 h-80 bg-[hsl(var(--accent-blue))]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--signal-purple))]/20 to-[hsl(var(--accent-blue))]/20 border border-white/20 mb-6 backdrop-blur-xl">
            <Rocket className="h-4 w-4 text-[hsl(var(--signal-purple))]" />
            <span className="text-sm font-bold text-white">Transform Ideas Into Reality</span>
            <Sparkles className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Rapid Prototyping & App Development
          </h2>
          <p className="text-lg text-slate-600 mb-4">
            Bring your ideas to life in record time. Our Rapid Prototyping Studio combines human-centered design,
            AI-assisted development, and MSP-grade infrastructure to deliver production-ready prototypes in weeks.
          </p>
          <p className="text-base text-slate-500">
            Backed by enterprise managed services—built for scale from day one.
          </p>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto mt-4">
            People usually die on ideation. We mobilize your squad, evaluate each concept, and move into prototyping within days so momentum never stalls.
          </p>
        </div>

        {/* Main Content Grid with Glass morphism */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Value Proposition with stunning card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--signal-purple))]/30 to-[hsl(var(--accent-blue))]/30 rounded-3xl blur-2xl opacity-15" />

            <div className="relative bg-white shadow-lg shadow-slate-900/10 rounded-3xl border border-slate-200 p-8 transition-all duration-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                From Whiteboard to Production—Fast
              </h3>
              <p className="text-slate-600 mb-8">
                Whether you need a mobile app, custom workflow tool, or investor-ready MVP,
                we deliver secure, scalable applications ready for enterprise use.
              </p>

              {/* Features with enhanced design */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: Lightbulb,
                    title: "Idea Refinement & UX Design",
                    description: "Collaborative workshops to define goals, user journeys, and key features",
                    gradient: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: Code2,
                    title: "AI-Accelerated Development",
                    description: "Leverage generative AI and reusable components to build 3-5x faster",
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: Shield,
                    title: "MSP-Grade Architecture",
                    description: "Enterprise reliability, security, and compliance built-in from day one",
                    gradient: "from-emerald-500 to-teal-500"
                  },
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="group flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 transition-all duration-300">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button
                variant="primary"
                size="lg"
                asChild
                className="w-full bg-gradient-to-r from-[hsl(var(--signal-purple))] to-[hsl(var(--accent-blue))] hover:from-[hsl(var(--signal-purple))]/90 hover:to-[hsl(var(--accent-blue))]/90 shadow-2xl hover:shadow-[hsl(var(--signal-purple))]/50 hover:scale-105 transition-all duration-300"
              >
                <Link to="/services/rapid-prototyping" className="group">
                  Explore Rapid Prototyping
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Metrics & Benefits with stunning cards */}
          <div className="space-y-6">
            {/* Benefits Card */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--signal-purple))]/10 rounded-2xl blur-xl opacity-40" />
              <Card className="relative p-6 bg-white border border-slate-200 shadow-lg shadow-slate-900/5 hover:border-slate-300 transition-all duration-500">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                  <h4 className="text-lg font-bold text-slate-900">
                    Why HiTechLogic for Prototyping?
                  </h4>
                </div>
                <div className="space-y-3">
                  {[
                    "MSP DNA: Production-ready with built-in security, reliability & compliance",
                    "AI-Powered Speed: 3-5x faster development with generative AI",
                    "Seamless Hand-off: Transition to 24/7 managed services for scaling",
                    "Iterative Delivery: Sprint-based releases with continuous feedback",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-600">{benefit}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Metrics Grid with stunning design */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Clock,
                  value: "4-8 Weeks",
                  label: "MVP Launch",
                  gradient: "from-purple-500 to-pink-500",
                  glow: "shadow-purple-500/50"
                },
                {
                  icon: TrendingUp,
                  value: "60%",
                  label: "Cost Reduction",
                  gradient: "from-blue-500 to-cyan-500",
                  glow: "shadow-blue-500/50"
                }
              ].map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="relative group">
                    <div className={`absolute -inset-1 bg-gradient-to-br ${metric.gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity`} />
                    <Card className="relative p-6 text-center bg-white border border-slate-200 shadow-sm shadow-slate-900/5 hover:border-slate-300 hover:shadow-lg hover:scale-105 transition-all duration-500">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${metric.gradient} mb-3 shadow-lg ${metric.glow} group-hover:scale-110 transition-transform`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className={`text-3xl font-black bg-gradient-to-br ${metric.gradient} bg-clip-text text-transparent mb-2`}>
                        {metric.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {metric.label}
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Process Steps with Animated Flow */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Our Rapid Prototyping Process
            </h3>
            <p className="text-slate-600">
              A proven 4-phase approach to transform your idea into production reality
            </p>
          </div>

          <div className="relative">
            {/* Animated connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0 opacity-60">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-full" />
            </div>

            {/* Process Cards */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 z-10">
              {processSteps.map((process, index) => {
                const Icon = process.icon;
                const isActive = activeStep === index;

                return (
                  <div key={index} className="relative">
                    {/* Connector Arrow */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-3 z-20 -translate-y-1/2">
                        <ArrowRight className={`h-6 w-6 text-slate-300 ${isActive ? "animate-pulse text-[hsl(var(--accent-blue))]" : ""}`} />
                      </div>
                    )}

                    {/* Card with stunning hover effects */}
                    <div
                      className="relative group"
                      onMouseEnter={() => setActiveStep(index)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      {/* Glow effect */}
                      <div className={`absolute -inset-2 bg-gradient-to-br ${process.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 ${isActive ? "opacity-60" : ""} transition-opacity duration-500`} />

                      <Card
                        className={`relative p-6 bg-white border ${isActive ? "border-slate-300" : "border-slate-200"} shadow-lg shadow-slate-900/5 hover:border-slate-300 transition-all duration-500 h-full`}
                      >
                        {/* Step number badge */}
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${process.color} mb-4 shadow-lg group-hover:scale-110 ${isActive ? "scale-110" : ""} transition-all duration-300`}>
                          <span className="text-lg font-black text-white">{process.step}</span>
                        </div>

                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${process.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 ${isActive ? "scale-110" : ""} transition-all duration-300`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold text-slate-900 mb-3 transition-colors">
                          {process.title}
                        </h4>

                        {/* Description */}
                        <p className={`text-sm text-slate-600 transition-colors ${isActive ? "text-slate-700" : ""}`}>
                          {process.description}
                        </p>

                        {/* Animated pulse dot */}
                        <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-[hsl(var(--accent-blue))] ${isActive ? "animate-pulse" : "opacity-0"} transition-opacity`} />
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              Ready to accelerate your next big idea?
            </p>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300"
            >
              <Link to="/contact" className="group">
                Schedule Discovery Call
                <ArrowRight className="h-4 w-4 ml-2 text-slate-900 group-hover:text-[hsl(var(--accent-blue))] transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 border-t border-slate-100 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">
              Rapid Prototyping Specialties
            </p>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">
              Every phase has a specialty team
            </h3>
            <p className="text-slate-600">
              We split the journey into focused pods—evaluation, engineering, launch, and operations—so your concept never dies on the backlog.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <Card key={step.slug} className="border border-slate-200 shadow-sm bg-white h-full flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">{step.specialty}</div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 mt-3 text-xs font-semibold text-slate-700">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mt-4">{step.title}</h4>
                  <p className="text-sm text-slate-600 mt-3">{step.overview}</p>
                </div>
                <Link
                  to={`/services/rapid-prototyping/${step.slug}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))] group"
                >
                  See the specialty page
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
