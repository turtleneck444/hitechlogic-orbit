import { ActionSearchBar } from "@/components/ui/action-search-bar";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, ChevronDown, Gauge, Server, Target } from "lucide-react";
import { ServiceCatalogSection } from "@/components/home/ServiceCatalogSection";
import { coreServices } from "@/data/coreServices";

const trustIndicators = [
  {
    icon: Server,
    label: "Enterprise Scale",
    description: "Comprehensive services for production environments",
  },
  {
    icon: Activity,
    label: "AI Intelligence",
    description: "Smart automation transforming operational efficiency",
  },
  {
    icon: Gauge,
    label: "Proven Results",
    description: "Significant cost savings and performance improvements",
  },
  {
    icon: Target,
    label: "24/7 Coverage",
    description: "Dedicated teams with executive-level partnership",
  },
];

const industryFocus = [
  "Healthcare",
  "SaaS",
  "Finance",
  "Logistics",
  "Public Sector",
  "Energy",
  "Media",
];

export function ServiceExplorer() {
  return (
    <section className="relative overflow-hidden bg-white pb-8 lg:pb-12 texture-grid-fine gradient-premium-light">
      <div className="absolute top-12 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[hsl(var(--accent-blue))]/5 blur-[120px]" />
      <div className="absolute bottom-[-80px] right-[-60px] h-24rem w-24rem rounded-full bg-[hsl(var(--navy))]/3 blur-[160px]" />
      <div className="absolute inset-0 bg-neural-connections opacity-30" />

      <div className="relative z-10">
        {/* Blended Top Transition */}
        <div className="w-full bg-white relative">
          <div className="absolute inset-0 z-[1] opacity-15 rotate-180">
            <BackgroundPaths />
          </div>
          <div className="absolute inset-0 z-[2] bg-white/20" />
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-50/30 to-slate-50/0 z-[3]" />
          <div className="mx-auto w-full max-w-[1360px] 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-12 py-8 lg:py-12 relative z-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_420px] items-stretch">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-blue))]/30 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent-blue))]">
                  Core Services
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl lg:text-[2.2rem] font-semibold leading-tight text-[hsl(var(--navy))]">
                  Find the Right Solution for Your Team
                </h2>
                <p className="mt-3 max-w-2xl text-base text-slate-600">
                  HiTechLogic designs every managed service to remove operational noise, accelerate responsible change, and keep executives confident in the technology landscape.
                </p>

                <div className="mt-3 space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Industry Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {industryFocus.map((industry) => (
                      <span
                        key={industry}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-[hsl(var(--navy))]"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-[hsl(var(--accent-blue))]/20 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 via-white to-white/90 p-4 shadow-lg shadow-[rgba(46,107,255,0.15)]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--accent-blue))]">
                      Guided Discovery
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600">
                      Search by capability, outcome, or operational need.
                    </p>
                  </div>
                  <div className="mt-3">
                    <ActionSearchBar />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full px-6 text-sm shadow-lg shadow-[hsl(var(--accent-blue))]/20"
                  >
                    <a href="/contact">Plan a Reliability Program</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-2 border-[hsl(var(--accent-blue))]/40 px-6 text-sm"
                  >
                    <a href="/services">View Service Catalog</a>
                  </Button>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[20px] border border-[hsl(var(--accent-blue))]/20 bg-white p-4 shadow-xl shadow-slate-900/10 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 via-transparent to-white opacity-90" />
                <div className="relative space-y-4">
                  <div className="grid gap-2">
                    {trustIndicators.map((indicator) => (
                      <div key={indicator.label} className="rounded-xl border border-slate-100 bg-white p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[hsl(var(--accent-blue))]/30 bg-[hsl(var(--accent-blue))]/5 text-[hsl(var(--accent-blue))]">
                            <indicator.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-[hsl(var(--navy))]">{indicator.label}</p>
                            <p className="text-xs text-slate-600">{indicator.description}</p>
                            <a
                              href="/services"
                              className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))]"
                            >
                              Explore Now
                              <ArrowRight className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 mb-4">
          <div
            className="group flex flex-col items-center gap-2 cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => {
              const catalogSection = document.querySelector('#service-catalog-section');
              if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <span className="text-lg font-bold text-[hsl(var(--accent-blue))] group-hover:text-[hsl(var(--navy))] transition-colors duration-300">
              Browse Service Catalog
            </span>
            <div className="relative">
              <ChevronDown className="h-6 w-6 text-[hsl(var(--accent-blue))] group-hover:text-[hsl(var(--navy))] group-hover:translate-y-1 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>

      <ServiceCatalogSection anchorId="service-catalog-section" services={coreServices} />
    </section>
  );
}
