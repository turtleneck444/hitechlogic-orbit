import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  Activity,
  BarChart3,
  Gauge,
  Handshake,
  Server,
  ShieldCheck,
  Workflow,
  ArrowRight,
  Sparkles,
  Target,
  Globe,
  Phone,
  MessageCircle,
  Clock,
  Zap,
  Users,
  Award,
} from "lucide-react";

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  slug: string;
  overview: string;
  tagline: string;
  outcomes: string[];
  kpis: { label: string; value: string }[];
  color: string;
  gradient: string;
};

const services: Service[] = [
  {
    icon: Server,
    title: "Infrastructure & Cloud Operations",
    slug: "/services/infrastructure-cloud-operations",
    tagline: "Always-on infrastructure with zero surprises",
    overview:
      "Unified command of hybrid estates with disciplined change management, capacity planning, and production stewardship.",
    outcomes: [
      "Co-managed runbooks for every environment",
      "Capacity signals surfaced quarterly",
      "Change execution tracked and reported",
      "24/7 monitoring across all cloud platforms",
      "Proactive capacity planning and forecasting",
      "99.99% uptime SLA guarantee",
    ],
    kpis: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Response Time", value: "<15 min" },
      { label: "Cost Savings", value: "30-40%" },
    ],
    color: "blue",
    gradient: "from-blue-500 via-blue-600 to-[hsl(var(--navy))]",
  },
  {
    icon: Activity,
    title: "System Oversight & Event Reduction",
    slug: "/services/system-oversight-event-reduction",
    tagline: "Transform alert chaos into actionable intelligence",
    overview:
      "Noise-calmed telemetry, expert routing, and correlation that keep executives aligned on true risk signals.",
    outcomes: [
      "Alert noise reduced through correlation",
      "Playbooks tuned to business impact tiers",
      "Weekly reliability briefings for leadership",
      "AI-powered event correlation engine",
      "Sub-2-minute threat detection",
      "95% reduction in false positives",
    ],
    kpis: [
      { label: "Noise Reduction", value: "−82%" },
      { label: "Detection Time", value: "<2 min" },
      { label: "Accuracy", value: "97%" },
    ],
    color: "purple",
    gradient: "from-purple-500 via-purple-600 to-indigo-600",
  },
  {
    icon: Workflow,
    title: "Automated Corrective Actions",
    slug: "/services/automated-corrective-actions",
    tagline: "Self-healing infrastructure that never sleeps",
    overview:
      "Verified automation and self-healing workflows that shrink incident counts and free engineers to focus on delivery.",
    outcomes: [
      "Automation catalog with approvals + guardrails",
      "Self-healing runbooks covering top incidents",
      "Compliance-ready audit trail for every action",
      "65+ production-ready runbooks",
      "95% faster incident resolution",
      "48% reduction in repeat incidents",
    ],
    kpis: [
      { label: "Runbooks", value: "65+" },
      { label: "MTTR Reduction", value: "95%" },
      { label: "Success Rate", value: "99.2%" },
    ],
    color: "emerald",
    gradient: "from-emerald-500 via-emerald-600 to-green-600",
  },
  {
    icon: Gauge,
    title: "Reliability & Performance Engineering",
    slug: "/services/reliability-performance-engineering",
    tagline: "Engineering excellence at scale",
    overview:
      "SLO-backed engineering discipline, architectural reviews, and load assurance delivered alongside your teams.",
    outcomes: [
      "Service level objectives mapped to revenue",
      "Performance baselines enforced pre-release",
      "Reliability debt backlog owned and tracked",
      "100% SLO coverage for critical services",
      "Chaos engineering testing protocols",
      "90% MTTR improvement",
    ],
    kpis: [
      { label: "SLO Coverage", value: "100%" },
      { label: "Uptime", value: "99.99%" },
      { label: "MTTR Trend", value: "↓ 90%" },
    ],
    color: "orange",
    gradient: "from-orange-500 via-orange-600 to-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Security & Identity Assurance",
    slug: "/services/security-identity-assurance",
    tagline: "Zero-trust security, always compliant",
    overview:
      "Identity lifecycle governance, privileged access controls, and operational security rigor embedded in every routine.",
    outcomes: [
      "Just-in-time access flows verified quarterly",
      "Threat detection integrated with ops cadences",
      "Incident tabletop + resilience drills scheduled",
      "Zero-trust architecture implementation",
      "<10-minute threat detection",
      "100% audit success rate",
    ],
    kpis: [
      { label: "Threat Detection", value: "<10 min" },
      { label: "Compliance", value: "99.8%" },
      { label: "Zero Breaches", value: "100%" },
    ],
    color: "red",
    gradient: "from-red-500 via-red-600 to-rose-600",
  },
  {
    icon: BarChart3,
    title: "Cost Efficiency & Capacity Strategy",
    slug: "/services/cost-efficiency-capacity-strategy",
    tagline: "Financial transparency, optimized growth",
    overview:
      "FinOps telemetry, unit economics, and capacity guardrails that keep technology spend predictable and defensible.",
    outcomes: [
      "Spend modeled vs. plan with scenarios",
      "Rightsizing + reservation coverage executed",
      "Capacity buffers linked to demand curves",
      "$50M+ total savings delivered",
      "95% forecast accuracy",
      "35% average cost reduction",
    ],
    kpis: [
      { label: "Cost Reduction", value: "35%" },
      { label: "Forecast", value: "±4%" },
      { label: "ROI", value: "8x" },
    ],
    color: "green",
    gradient: "from-green-500 via-green-600 to-emerald-600",
  },
  {
    icon: Handshake,
    title: "Strategic Technology Partnership",
    slug: "/services/strategic-technology-partnership",
    tagline: "Your trusted technology partner",
    overview:
      "Embedded leadership, executive working sessions, and culture programs that keep reliability aligned to business goals.",
    outcomes: [
      "Quarterly strategy councils with CXO dashboards",
      "Transformation delivery paired with run-state care",
      "Joint hiring + capability planning facilitated",
      "92 Net Promoter Score",
      "3.5 year average engagement",
      "85% multi-year renewals",
    ],
    kpis: [
      { label: "NPS", value: "92" },
      { label: "Satisfaction", value: "100%" },
      { label: "Renewals", value: "85%" },
    ],
    color: "indigo",
    gradient: "from-indigo-500 via-indigo-600 to-purple-600",
  },
  {
    icon: Zap,
    title: "Autonomous Agent Swarm",
    slug: "/services/autonomous-agent-swarm",
    tagline: "AI-driven prototyping, build, and operate",
    overview:
      "A unified agent library that orchestrates Rapid Design, AI-accelerated development, and 24/7 autonomous operations across the entire delivery lifecycle.",
    outcomes: [
      "Seamless handoff between prototypes, MVPs, and operations",
      "Automation-first safeguards detecting, triaging, and remediating incidents",
      "Re-usable AI agents tuned to your stack and compliance mandates",
      "24/7 reliability with predictive runbooks",
      "Accelerated go-to-market 3–5× faster",
      "Cost-effective delivery with live operations oversight",
    ],
    kpis: [
      { label: "MVP Launch", value: "4-8 weeks" },
      { label: "Cost Reduction", value: "60%" },
      { label: "Uptime", value: "99.99%" },
    ],
    color: "fuchsia",
    gradient: "from-fuchsia-500 via-pink-600 to-rose-600",
  },
];

export default function Services() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "HiTechLogic",
    },
    serviceType: "Managed Infrastructure Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Infrastructure Management Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.overview,
        },
      })),
    },
  };

  return (
    <>
      <SEO
        title="Cloud Services: Security, DevOps, FinOps & Consulting | HiTechLogic"
        description="Comprehensive cloud solutions including cybersecurity, DevOps automation, cloud infrastructure & FinOps, and strategic consulting. Reduce costs 50%, improve MTTR 75%, achieve 99.99% uptime."
        keywords="cloud security, devops automation, cloud finops, kubernetes, zero-trust security, soc 2 compliance, cloud migration, infrastructure as code, vulnerability management, cost optimization, managed services"
        canonical="https://hitechlogic.com/services"
        schema={schema}
      />
      <Layout>
        {/* Hero Section - Enhanced */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white pt-32 pb-24">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#2e6bff08_1px,transparent_1px),linear-gradient(to_bottom,#2e6bff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

          {/* Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--accent-blue))]/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--navy))]/5 rounded-full blur-3xl animate-pulse-slower" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[hsl(var(--accent-blue))]/30 bg-gradient-to-r from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.4em] text-[hsl(var(--accent-blue))] mb-8 shadow-lg shadow-[hsl(var(--accent-blue))]/10 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default">
                <Sparkles className="h-4 w-4" />
                <span>Seven Service Pillars</span>
                <Sparkles className="h-4 w-4" />
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[hsl(var(--navy))] mb-8 tracking-tight font-['Inter']">
                Enterprise-Grade
                <br />
                <span className="bg-gradient-to-r from-[hsl(var(--accent-blue))] via-blue-600 to-[hsl(var(--navy))] bg-clip-text text-transparent">
                  Managed Services
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-slate-600 mb-4 leading-relaxed font-medium max-w-4xl mx-auto">
                Comprehensive infrastructure reliability, security, and operational excellence
              </p>
              <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-3xl mx-auto">
                Transform technology from a cost center to a strategic advantage through our seven integrated service pillars
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-5">
                <Button
                  variant="hero"
                  size="xl"
                  asChild
                  className="shadow-[0_20px_60px_-20px_rgba(46,107,255,0.9)] hover:shadow-[0_30px_70px_-20px_rgba(46,107,255,1)] hover:scale-105 transition-all duration-300 group"
                >
                  <Link to="/contact" className="flex items-center gap-3">
                    <Target className="h-5 w-5" />
                    <span>Request Strategy Consultation</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2 duration-300" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  asChild
                  className="hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-[hsl(var(--accent-blue))]/20 hover:border-[hsl(var(--accent-blue))]/40"
                >
                  <Link to="/demo" className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    <span>View Platform Demo</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Enterprise Stats Grid */}
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Server, label: "Infrastructure Value", value: "$2B+", color: "from-blue-500 to-blue-600" },
                { icon: Clock, label: "Average Response", value: "<15min", color: "from-emerald-500 to-emerald-600" },
                { icon: Users, label: "Client Retention", value: "98%", color: "from-purple-500 to-purple-600" },
                { icon: Award, label: "Industry Experience", value: "15+yr", color: "from-orange-500 to-orange-600" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-white/60 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                  <div className="relative">
                    <div className="flex justify-center mb-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                        <stat.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--accent-blue))] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-sm font-bold text-slate-600 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Services Showcase */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[hsl(var(--accent-blue))]/30 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.4em] text-[hsl(var(--accent-blue))] shadow-sm">
                <Sparkles className="h-4 w-4" />
                Service Pillars
                <Sparkles className="h-4 w-4" />
              </div>
              <h2 className="mt-6 text-4xl font-black text-[hsl(var(--navy))] sm:text-5xl lg:text-6xl">
                Strategic Services That Keep Your Infrastructure Competitive
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Each service pillar is delivered by our seasoned technologists, aligning reliability, automation, security, and financial governance to your business outcomes.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.55)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_80px_-25px_rgba(15,23,42,0.55)] backdrop-blur"
                >
                  <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${service.gradient} opacity-0 transition-all duration-500 group-hover:opacity-10`} />
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{service.title}</h3>
                      <p className="text-sm text-slate-500">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">{service.overview}</p>
                  <div className="mt-5 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-500">
                    {service.kpis.map((kpi) => (
                      <div key={kpi.label} className="flex flex-col">
                        <span className="text-[0.6rem]">{kpi.label}</span>
                        <span className="text-sm font-bold text-[hsl(var(--accent-blue))]">{kpi.value}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-slate-600">
                    {service.outcomes.slice(0, 3).map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-6 rounded-full bg-[hsl(var(--accent-blue))]/70" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="w-full justify-between border-[hsl(var(--accent-blue))]/50 text-[hsl(var(--navy))] hover:border-[hsl(var(--accent-blue))]"
                    >
                      <Link to={service.slug} className="flex w-full items-center justify-between text-sm font-semibold">
                        <span>Explore service</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & CTA Hub */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--accent-blue))]/95 via-slate-900 to-[hsl(var(--navy))] text-white py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff10,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-white/70">Always-on Support</p>
            <h2 className="text-4xl font-black sm:text-5xl lg:text-6xl">
              Ready When You Are
            </h2>
            <p className="max-w-3xl text-lg text-white/80">
              Request a strategy call, schedule a callback, ring our operations center, or message us any time. HiTechLogic stays on watch 24/7 to keep your services reliable.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Request Strategy Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:contact@hitechlogic.com?subject=Callback%20Request" className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Request a Callback
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:+18884483244" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Us Anytime
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="mailto:contact@hitechlogic.com?subject=Message%20HiTechLogic" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Message Us 24/7
                </a>
              </Button>
            </div>
            <p className="text-sm text-white/70">
              Or reach our command center directly at <span className="font-semibold text-white">+1 (888) 448-3244</span>
            </p>
          </div>
        </section>

      </Layout>
    </>
  );
}
