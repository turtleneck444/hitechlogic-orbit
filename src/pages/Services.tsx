import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Server, Activity, Workflow, ShieldCheck, BarChart3, Handshake, Gauge } from "lucide-react";
import { SEO } from "@/components/SEO";

const services = [
  {
    icon: Server,
    title: "Continuous Infrastructure & Cloud Operations",
    overview: "Daily stewardship of your environments with capacity management, change governance, and steady-state care.",
    outcomes: ["24/7 oversight across cloud + on-prem", "Change windows coordinated and documented", "Capacity signals surfaced early"],
  },
  {
    icon: Activity,
    title: "Intelligent System Oversight & Event Reduction",
    overview: "Signal-to-noise refinement, incident pattern analysis, and proactive monitoring that reduces alert fatigue.",
    outcomes: ["Noise reduced through correlation", "Event patterns identified and addressed", "Intelligent filtering and escalation"],
  },
  {
    icon: Workflow,
    title: "Automated Corrective Actions & Stabilization Workflows",
    overview: "Codified runbooks, safe automation, and self-healing workflows that prevent repeat work and stabilize systems.",
    outcomes: ["Critical scenarios scripted", "Approvals and guardrails baked in", "Automated recovery workflows deployed"],
  },
  {
    icon: Gauge,
    title: "Reliability & Performance Engineering",
    overview: "Continuous reliability improvement, performance optimization, and engineering practices that prevent issues.",
    outcomes: ["MTTR tracked and improved", "Performance baselines established", "Reliability briefings delivered"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Identity Assurance",
    overview: "Access hygiene, identity lifecycle management, and operationalized security controls that protect your environment.",
    outcomes: ["Access reviews enforced", "Privileged actions audited", "Threat monitoring embedded"],
  },
  {
    icon: BarChart3,
    title: "Cost Efficiency & Capacity Strategy",
    overview: "Financial transparency, usage forecasting, and optimization recommendations aligned to finance partners.",
    outcomes: ["Spend modeled vs. plan", "Right-sizing playbooks deployed", "Capacity buffers defined"],
  },
  {
    icon: Handshake,
    title: "Strategic Technology Partnership",
    overview: "Dedicated leadership, roadmap planning, and cultural support so teams embrace structured reliability.",
    outcomes: ["Quarterly strategy reviews", "Embedded reliability coaching", "Executive-ready communications"],
  },
];

export default function Services() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "HiTechLogic"
    },
    "serviceType": "Managed Infrastructure Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Infrastructure Management Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.overview
        }
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Managed Services - Full-Spectrum Infrastructure Reliability | HiTechLogic"
        description="Seven service pillars for complete infrastructure management: 24/7 operations, intelligent monitoring, automation, reliability engineering, security, cost optimization, and strategic partnership."
        keywords="managed infrastructure services, cloud operations, monitoring services, automation services, reliability engineering, security management, cost optimization, DevOps services"
        canonical="https://hitechlogic.com/services"
        schema={schema}
      />
      <Layout>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-5xl px-6 pt-12 pb-24 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 text-center">
          <span className="eyebrow text-electric-blue/70">Service pillars</span>
          <h1 className="mt-4 text-4xl md:text-5xl leading-tight text-foreground">Full-spectrum managed reliability.</h1>
          <p className="mt-4 text-lg text-slate-600">
            Seven pillars that work together to build stable, efficient, and secure technology environments.
          </p>
        </div>
      </section>

      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="flex h-full flex-col gap-4 p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[hsl(var(--border))] bg-white">
                    <service.icon className="h-5 w-5 text-electric-blue" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">{service.title}</h2>
                </div>
                <p className="text-sm text-slate-600">{service.overview}</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-electric-blue" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Not sure where to begin?</h2>
          <p className="mt-4 text-lg text-slate-600">
            We’ll benchmark your current state, recommend the right service mix, and build a roadmap that balances risk,
            reliability, and investment.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" size="xl" asChild>
              <Link to="/contact">Request Strategy Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
