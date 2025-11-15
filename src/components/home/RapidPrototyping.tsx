import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Rocket, Lightbulb, Code2, Shield, TrendingUp, Clock, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import { rapidPrototypingSteps } from "@/data/rapidPrototypingSteps";

export function RapidPrototyping() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const processSteps = rapidPrototypingSteps;

  const featureList = [
    {
      icon: Lightbulb,
      title: "Idea Refinement & UX Design",
      description: "Collaborative workshops to define goals, user journeys, and key features",
    },
    {
      icon: Code2,
      title: "AI-Accelerated Development",
      description: "Leverage generative AI and reusable components to build 3-5x faster",
    },
    {
      icon: Shield,
      title: "MSP-Grade Architecture",
      description: "Enterprise reliability, security, and compliance built-in from day one",
    },
  ];

  const benefits = [
    "MSP DNA: production-ready with built-in security, reliability & compliance",
    "AI-powered speed: 3-5x faster development with generative tools",
    "Seamless hand-off to 24/7 managed services",
    "Iterative delivery with continuous feedback",
  ];

  const metrics = [
    {
      icon: Clock,
      value: "4-8 Weeks",
      label: "MVP Launch",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      value: "60%",
      label: "Cost Reduction",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <>
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[hsl(var(--signal-purple))]/20 to-[hsl(var(--accent-blue))]/20 border border-slate-200">
              <Rocket className="h-4 w-4 text-[hsl(var(--signal-purple))]" />
              <span className="text-sm font-semibold text-slate-700">Transform Ideas Into Reality</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Rapid Prototyping & App Development
            </h2>
            <p className="text-lg text-slate-600">
              Bring your ideas to life faster. Our studio blends human-centered design, AI-assisted engineering, and MSP-grade reliability so prototypes hit production-ready quality in weeks.
            </p>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              People usually die on ideation. We evaluate your squad, assess the situation, and move into prototyping within days so momentum never stalls.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button variant="primary" size="lg" asChild className="bg-gradient-to-r from-[hsl(var(--signal-purple))] to-[hsl(var(--accent-blue))] shadow-lg">
                <Link to="/services/rapid-prototyping" className="flex items-center gap-2">
                  Explore Rapid Prototyping
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-slate-300 text-slate-900">
                <Link to="/contact" className="flex items-center gap-2">
                  Talk to a prototyping specialist
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-3">Our Rapid Prototyping Process</h3>
            <p className="text-slate-600">A proven 3-phase approach to move from concept to launch without stalling on ideation.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0 opacity-50">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {processSteps.map((process, index) => {
                const Icon = process.icon;
                const isActive = activeStep === index;
                return (
                  <div key={process.slug} className="relative">
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-0 right-[-1.5rem] h-full items-center">
                        <ArrowRight className={`h-6 w-6 text-slate-300 ${isActive ? "animate-pulse text-[hsl(var(--accent-blue))]" : ""}`} />
                      </div>
                    )}
                    <div
                      className="relative group"
                      onMouseEnter={() => setActiveStep(index)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      <div className={`absolute -inset-2 bg-gradient-to-br ${process.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 ${isActive ? "opacity-60" : ""} transition-opacity duration-500`} />
                      <Card className={`relative p-6 bg-white border ${isActive ? "border-slate-300" : "border-slate-200"} shadow-lg shadow-slate-900/5 transition-all duration-500 h-full`}>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${process.color} mb-4 shadow-lg`}>
                          <span className="text-lg font-black text-white">{process.step}</span>
                        </div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${process.color} flex items-center justify-center mb-4 shadow-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h4>
                        <p className="text-sm text-slate-600">{process.description}</p>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Rapid Prototyping & App Development</p>
            <h3 className="text-3xl font-bold text-slate-900 mb-3">Every phase has a specialty team</h3>
            <p className="text-slate-600">Evaluation, engineering, and operations pods keep your concept alive, moving, and delivered with clarity.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step) => (
              <Card key={step.slug} className="flex flex-col h-full border border-slate-200 shadow-sm bg-white p-6">
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-widest text-slate-500">{step.specialty}</div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 mt-3 text-xs font-semibold text-slate-700">{step.step}</div>
                  <h4 className="text-2xl font-semibold text-slate-900 mt-4">{step.title}</h4>
                  <p className="text-sm text-slate-600 mt-3">{step.overview}</p>
                </div>
                <div className="mt-auto">
                  <Link
                    to={`/services/rapid-prototyping/${step.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))]"
                  >
                    See the specialty page
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--signal-purple))]/20 to-[hsl(var(--accent-blue))]/20 rounded-3xl blur-3xl opacity-60 pointer-events-none" />
              <Card className="relative bg-white shadow-lg shadow-slate-900/10 border border-slate-200 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">From Whiteboard to Production—Fast</h3>
                <p className="text-slate-600 mb-6">
                  Whether you need a mobile app, custom workflow tool, or investor-ready MVP, we deliver secure, scalable applications ready for enterprise use.
                </p>
                <div className="space-y-4">
                  {featureList.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center shadow">
                        <feature.icon className="h-6 w-6 text-slate-800" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-slate-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button variant="primary" size="lg" asChild className="w-full bg-gradient-to-r from-[hsl(var(--signal-purple))] to-[hsl(var(--accent-blue))] shadow-lg">
                    <Link to="/services/rapid-prototyping" className="flex items-center justify-center gap-2">
                      Review Rapid Prototyping
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--signal-purple))]/10 rounded-2xl blur-xl opacity-40" />
                <Card className="relative p-6 bg-white border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                    <h4 className="text-lg font-bold text-slate-900">Why HiTechLogic for Prototyping?</h4>
                  </div>
                  <div className="space-y-3">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-600">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <Card key={index} className="relative p-6 text-center bg-white border border-slate-200 shadow-sm">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${metric.gradient} mb-3 shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className={`text-3xl font-black bg-gradient-to-br ${metric.gradient} bg-clip-text text-transparent mb-2`}>{metric.value}</div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{metric.label}</div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-base text-slate-600 mb-4">Ready to accelerate your next big idea?</p>
          <Button variant="outline" size="lg" asChild className="border-slate-200 text-slate-900 hover:bg-slate-50">
            <Link to="/contact" className="flex items-center justify-center gap-2">
              Schedule Discovery Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
