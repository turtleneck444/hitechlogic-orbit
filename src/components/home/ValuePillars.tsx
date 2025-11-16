import { Link } from "react-router-dom";
import { PillarsAccordionDemo } from "@/components/blocks/pillars-accordion-demo";

export function ValuePillars() {
  return (
    <section className="relative bg-[hsl(var(--accent-blue))] py-14 text-white sm:py-16">
      <div className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="space-y-3 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/80">
              Strategic Disciplines
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              We Engineer Your<br />
              <span className="bg-gradient-to-r from-white via-white to-cyan-200 bg-clip-text text-transparent">
                Competitive Advantage
              </span>
            </h2>
            <p className="max-w-5xl mx-auto text-base leading-relaxed text-white/80 drop-shadow-[0_10px_35px_rgba(2,6,23,0.35)]">
              HiTechLogic pairs deep operational experience with modern tooling to keep infrastructure resilient, efficient, and aligned with enterprise priorities.
            </p>
          </div>
        </div>

        {/* Interactive Accordion Showcase */}
        <div className="relative">
          <PillarsAccordionDemo />
        </div>

        <div className="text-center mt-6">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 text-lg font-medium group"
          >
            Need a tailored solution?
            <span className="font-semibold transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
