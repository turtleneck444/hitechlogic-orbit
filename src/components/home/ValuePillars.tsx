import { Link } from "react-router-dom";
import { PillarsAccordionDemo } from "@/components/blocks/pillars-accordion-demo";

export function ValuePillars() {
  return (
    <section className="relative bg-[hsl(var(--accent-blue))] py-10 text-white sm:py-12">
      <div className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="space-y-2 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/80">
              Strategic Disciplines
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl font-['Inter']">
              Four pillars that turn your technology operations into measurable business advantage.
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

        <div className="text-center mt-4">
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
