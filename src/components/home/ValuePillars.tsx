import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ValuePillars() {
  return (
    <section className="bg-[#2E6BFF] py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:flex lg:items-end lg:justify-between gap-12">
          <div className="absolute -top-6 -left-6 hidden lg:block w-28 h-28 rounded-full bg-white/10 blur-2xl" />
          <div className="space-y-6 max-w-4xl relative">
            <span className="inline-flex px-4 py-1 text-[11px] font-semibold text-[#2E6BFF] bg-white rounded-full uppercase tracking-[0.3em] shadow-[0_6px_18px_-10px_rgba(8,12,40,0.5)]">
              Core Disciplines
            </span>
            <h2 className="text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] text-white font-semibold tracking-tight">
              Your Next-Gen MSP for{" "}
              <span className="relative inline-flex">
                <span className="relative z-10">Strategic Growth</span>
                <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-white/25 blur-[2px]" />
              </span>
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              HiTechLogic operates like an extension of your executive team—owning reliability, signal intelligence, security, and scale-readiness
              so technology investments move from firefighting to strategic growth.
            </p>
          </div>
          <div className="mt-6 flex items-start gap-6 text-white text-sm">
            <p className="max-w-lg text-white/90">
              Disciplined scorecards keep global stakeholders aligned on reliability posture, automation coverage, identity health, and financial
              outlook—ensuring the managed services layer keeps pace with strategic ambitions.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.32em] text-white/70 font-mono">Ready when you are</p>
            <h3 className="text-2xl font-semibold text-white">
              Assign strategic ownership to each discipline with an executive working session.
            </h3>
            <p className="text-sm text-white/80">
              We’ll benchmark every discipline, prioritize the highest-value changes, and deliver the first 90 days of your Next-Gen MSP roadmap.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="primary" size="lg" asChild className="text-sm font-semibold shadow-[0_15px_30px_-18px_rgba(1,6,30,0.65)]">
              <Link to="/contact">Request Strategy Consultation</Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="text-sm border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-[#0B1220]"
            >
              <Link to="/services">Review Full Service Framework</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
