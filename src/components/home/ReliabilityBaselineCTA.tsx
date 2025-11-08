import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function ReliabilityBaselineCTA() {
  return (
    <section className="section-space bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Card className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--navy))] to-slate-900 p-12 md:p-16">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
          <div className="relative text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Get Your Free Reliability Baseline Assessment
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Understand your current operational maturity, identify reliability gaps, and receive a customized roadmap to operational excellence.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-start gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-300">30-minute assessment call</span>
              </div>
              <div className="flex items-start gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-300">Customized maturity report</span>
              </div>
              <div className="flex items-start gap-2 text-left">
                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-300">Actionable recommendations</span>
              </div>
            </div>

            <div className="mt-10">
              <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(46,107,255,0.8)]">
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Request Your Assessment</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
