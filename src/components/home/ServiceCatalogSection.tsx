import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { coreServices, type CoreService } from "@/data/coreServices";

const initialServicesToShow = 3;

const focusMap: Record<string, string> = {
  "infrastructure-cloud-operations": "Operations Control",
  "system-oversight-event-reduction": "Signal Intelligence",
  "automated-corrective-actions": "Automation",
  "reliability-performance-engineering": "SLO Delivery",
  "security-identity-assurance": "Identity Trust",
  "cost-efficiency-capacity-strategy": "Financial Clarity",
  "strategic-technology-partnership": "Executive Alignment",
  "rapid-prototyping": "Rapid Innovation",
};

const refinedHighlights = [
  "Intentional sequencing meets every stage of reliability maturity",
  "Embedded leadership ties initiatives directly to business outcomes",
  "Automation-first discipline makes every repetitive task programmatic",
];

type ServiceCatalogSectionProps = {
  services?: CoreService[];
  anchorId?: string;
};

export function ServiceCatalogSection({ services = coreServices, anchorId }: ServiceCatalogSectionProps) {
  const [catalogExpanded, setCatalogExpanded] = useState(false);
  const visibleServices = catalogExpanded ? services : services.slice(0, initialServicesToShow);
  const hiddenServices = services.slice(initialServicesToShow);

  const renderServiceTrack = (service: CoreService) => (
    <article
      key={service.id}
      id={service.id}
      className="group rounded-[20px] border border-slate-200/80 bg-white/90 p-4 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent-blue))]/40"
    >
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,240px)_minmax(0,280px)_minmax(0,180px)] lg:items-start lg:gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))]">
              <service.icon className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[hsl(var(--navy))]">{service.name}</h4>
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-slate-400">{focusMap[service.id]}</p>
            </div>
          </div>
          <p className="text-xs text-slate-600">{service.description}</p>
        </div>

        <div className="rounded-xl border border-slate-100/80 bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Key Outcomes</p>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
            {service.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-1 w-1 rounded-full bg-[hsl(var(--accent-blue))]" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-100/80 bg-slate-50/60 p-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Signature Metric</p>
            <p className="mt-1 text-lg font-semibold text-[hsl(var(--navy))]">{service.metric}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Engagement Model</p>
            <p className="mt-1 text-xs font-semibold text-[hsl(var(--accent-blue))]">Executive-led partnership</p>
          </div>
          <Button asChild size="sm" className="w-full rounded-full text-xs">
            <Link to={service.href}>View Capability</Link>
          </Button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-3 border-t border-slate-100 pt-3">
        <Link
          to={service.href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))]"
        >
          Learn more
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <span className="text-xs text-slate-500">Comprehensive engagement assessment included.</span>
      </div>
    </article>
  );

  return (
    <section id={anchorId} className="section-space bg-white relative z-30">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_1fr] items-start">
          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--accent-blue))]/30 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[hsl(var(--accent-blue))]">
                Service Catalog
              </span>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-[hsl(var(--navy))] leading-tight">
                Every Pillar Mapped to Clear, Measurable Outcomes
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Each managed discipline layers governance rituals, automation coverage, and strategic reporting aligned to your operating model.
              </p>
            </div>

            <div className="grid gap-2 text-xs text-slate-600">
              {refinedHighlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-blue))]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-[hsl(var(--accent-blue))]/20 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-white p-4 text-xs text-slate-600">
              <p className="font-semibold text-[hsl(var(--navy))]">Delivery Tooling</p>
              <p className="mt-1">
                Scorecards, automation catalogs, and executive readouts live inside the HiTechLogic Control Center platform.
              </p>
              <a
                href="/platform"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(var(--accent-blue))] hover:text-[hsl(var(--navy))]"
              >
                Explore delivery tooling
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg" className="rounded-full px-5 text-sm shadow-lg shadow-[hsl(var(--accent-blue))]/20">
                <Link to="/contact">Plan a Reliability Program</Link>
              </Button>
              <a
                href="/services#overview"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(var(--accent-blue))] transition hover:border-[hsl(var(--accent-blue))]/40 hover:text-[hsl(var(--navy))]"
              >
                Download overview
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4">
              {visibleServices.map((service) => renderServiceTrack(service))}
            </div>

            {hiddenServices.length > 0 && (
              <div
                className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
                  catalogExpanded ? "opacity-100 max-h-[2000px]" : "opacity-0 max-h-0"
                }`}
              >
                <div className="grid gap-4">
                  {hiddenServices.map((service) => renderServiceTrack(service))}
                </div>
              </div>
            )}

            {services.length > initialServicesToShow && (
              <button
                type="button"
                onClick={() => setCatalogExpanded((prev) => !prev)}
                className="group flex w-full items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm font-semibold text-[hsl(var(--navy))] transition-all hover:border-[hsl(var(--accent-blue))]/40"
              >
                <span>{catalogExpanded ? "Show First 3 Services Only" : `View All ${services.length} Services`}</span>
                <ChevronDown className={`h-5 w-5 text-[hsl(var(--accent-blue))] transition-transform ${catalogExpanded ? "-rotate-180" : ""}`} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="inline-flex flex-col items-center gap-2 rounded-3xl border border-[hsl(var(--accent-blue))]/30 bg-white/90 px-8 py-6 text-center text-sm text-[hsl(var(--navy))] shadow-lg">
          <p className="font-semibold text-[hsl(var(--navy))]">Need a purpose-built program?</p>
          <p className="text-xs text-slate-500">
            Tell us where you need focus and we will design a managed services portfolio around your operating model.
          </p>
          <Button asChild size="lg" className="rounded-full px-6 text-sm">
            <Link to="/contact">Request Strategy Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
