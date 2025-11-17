import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Accordion05 } from "@/components/ui/accordion-05";

export function ValuePillars() {
  return (
    <section className="relative bg-[hsl(var(--accent-blue))] py-16 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[hsl(var(--signal-purple))]/5 to-transparent opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 gradient-premium-dark opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-tech-circuit opacity-30 pointer-events-none"></div>

      <div className="w-full px-4 sm:px-6 lg:px-12">
        {/* Centered Single Column Layout */}
        <div className="flex flex-col items-center space-y-12">
          {/* Centered Header */}
          <div className="text-center max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/90">
              Strategic Disciplines
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight font-['Inter']">
              Four pillars that turn your technology operations into measurable business advantage.
            </h2>

            <p className="text-xl lg:text-2xl leading-relaxed text-white/95 font-light">
              HiTechLogic pairs deep operational experience with modern tooling to keep infrastructure resilient, efficient, and aligned with enterprise priorities.
            </p>
          </div>

          {/* Centered Pillars Accordion */}
          <div className="w-full flex justify-center">
            <Accordion05 />
          </div>
        </div>

        {/* Professional CTA */}
        <div className="mt-16">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-flex items-center justify-center w-full max-w-lg mx-auto">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>

            <p className="text-2xl lg:text-3xl font-semibold text-white leading-tight">
              Ready to transform your technology operations?
            </p>

            <div>
              <Button
                variant="hero"
                size="lg"
                asChild={false}
                onClick={() => (window.location.href = '/services')}
                className="bg-white text-slate-900 hover:bg-white/95 shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-[1.02] px-10 py-4 text-xl font-semibold group cursor-pointer"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>

            <p className="text-base text-white/80 font-light">
              Join leading enterprises who have transformed their operations with HiTechLogic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
