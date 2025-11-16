import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Rocket, Lightbulb, Code2, Shield, TrendingUp, Clock, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import { rapidPrototypingSteps } from "@/data/rapidPrototypingSteps";

export function RapidPrototyping() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const processSteps = rapidPrototypingSteps;

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
                    <Link
                      to={`/services/rapid-prototyping/${process.slug}`}
                      className="block group"
                      onMouseEnter={() => setActiveStep(index)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      <div className={`absolute -inset-2 bg-gradient-to-br ${process.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 ${isActive ? "opacity-60" : ""} transition-opacity duration-500`} />
                      <Card className={`relative p-6 bg-white border ${isActive ? "border-slate-300" : "border-slate-200"} shadow-lg shadow-slate-900/5 transition-all duration-500 h-full hover:shadow-xl hover:border-[hsl(var(--accent-blue))]/30 hover:-translate-y-1`}>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${process.color} mb-4 shadow-lg`}>
                          <span className="text-lg font-black text-white">{process.step}</span>
                        </div>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${process.color} flex items-center justify-center mb-4 shadow-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h4>
                        <p className="text-sm text-slate-600 mb-4">{process.description}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="text-xs uppercase tracking-widest text-slate-500">{process.specialty}</div>
                          <div className="flex items-center gap-1 text-sm font-semibold text-[hsl(var(--accent-blue))] group-hover:translate-x-1 transition-transform">
                            <span>View details</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </div>
                );
              })}
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
