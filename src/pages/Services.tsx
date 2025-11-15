import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ITOperationsAnimation } from "@/components/services/ITOperationsAnimation";
import { serviceCategories } from "@/data/services";
import {
  Activity,
  BarChart3,
  Gauge,
  Handshake,
  Server,
  ShieldCheck,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  Clock,
  Award,
  Sparkles,
  Target,
  Users,
  Globe,
  Code,
  Cloud,
  Briefcase,
  ChevronRight,
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
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[hsl(var(--navy))] mb-8 tracking-tight">
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

        {/* Service Categories - Axiom-Aligned Taxonomy */}
        <section className="section-space bg-white relative">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-[hsl(var(--accent-blue))]/20 mb-6">
                <Sparkles className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
                <span className="text-sm font-bold text-[hsl(var(--navy))]">Comprehensive Service Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--navy))] mb-6">
                Four Core Service Categories
              </h2>
              <p className="text-lg text-slate-600">
                From cybersecurity to cloud operations, our comprehensive service portfolio covers every aspect of modern IT infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => {
                const categoryIcons: Record<string, React.ElementType> = {
                  ShieldCheck,
                  Code,
                  Cloud,
                  Briefcase,
                };
                const CategoryIcon = categoryIcons[category.icon] || ShieldCheck;

                const gradients = [
                  "from-red-500 to-rose-600",
                  "from-purple-500 to-indigo-600",
                  "from-blue-500 to-cyan-600",
                  "from-green-500 to-emerald-600",
                ];

                return (
                  <Card
                    key={category.id}
                    className="group relative p-8 hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-[hsl(var(--accent-blue))]/40 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                    <div className="relative">
                      {/* Category Icon and Title */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[index]} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                          <CategoryIcon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-2 group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Services List */}
                      <div className="space-y-3 mb-6">
                        {category.services.slice(0, 3).map((service) => (
                          <div
                            key={service.id}
                            className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-[hsl(var(--accent-blue))]/30 transition-all duration-200 group/item"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-blue))] flex-shrink-0" />
                            <span className="text-sm font-semibold text-slate-700 group-hover/item:text-[hsl(var(--navy))]">
                              {service.name}
                            </span>
                          </div>
                        ))}
                        {category.services.length > 3 && (
                          <div className="flex items-center gap-2 text-sm font-semibold text-[hsl(var(--accent-blue))] pl-3">
                            <span>+ {category.services.length - 3} more services</span>
                          </div>
                        )}
                      </div>

                      {/* View All Link */}
                      <div className="flex items-center justify-between pt-6 border-t-2 border-slate-100">
                        <span className="text-sm font-bold text-[hsl(var(--accent-blue))] uppercase tracking-wide">
                          View All Services
                        </span>
                        <ChevronRight className="h-5 w-5 text-[hsl(var(--accent-blue))] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Live IT Operations Visualization - NEW ADVANCED SECTION */}
        <section className="section-space bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent-blue))]/10 border border-[hsl(var(--accent-blue))]/20 text-[hsl(var(--accent-blue))] font-bold text-xs uppercase tracking-wider mb-6">
                <Activity className="h-4 w-4 animate-pulse" />
                Live System Visualization
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-[hsl(var(--navy))] mb-6">
                Your Infrastructure
                <br />
                <span className="bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] bg-clip-text text-transparent">
                  Always Protected, Always Optimized
                </span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Watch our intelligent managed services platform in action—monitoring, protecting, and
                optimizing your entire IT infrastructure 24/7/365
              </p>
            </div>

            {/* Animated IT Operations Visualization */}
            <div className="mb-12">
              <ITOperationsAnimation />
            </div>

            {/* Feature Grid Below Animation */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Zap,
                  title: "Real-Time Automation",
                  description: "Self-healing systems detect and resolve issues before they impact your business",
                  stat: "95% faster resolution"
                },
                {
                  icon: ShieldCheck,
                  title: "Continuous Protection",
                  description: "Advanced threat detection and zero-trust security monitoring every second",
                  stat: "100% uptime SLA"
                },
                {
                  icon: TrendingUp,
                  title: "Intelligent Optimization",
                  description: "AI-powered insights constantly improve performance and reduce costs",
                  stat: "35% cost savings"
                },
              ].map((feature) => (
                <Card key={feature.title} className="p-8 bg-white/80 backdrop-blur-sm border-2 border-white/60 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:from-[hsl(var(--accent-blue))]/20 group-hover:to-[hsl(var(--navy))]/10 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-2">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-3">{feature.description}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-bold text-green-700">{feature.stat}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Grid - Enhanced Professional Cards */}
        <section className="section-space bg-white relative">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-block px-4 py-2 rounded-full bg-[hsl(var(--accent-blue))]/10 border border-[hsl(var(--accent-blue))]/20 text-[hsl(var(--accent-blue))] font-bold text-xs uppercase tracking-wider mb-6">
                Comprehensive Coverage
              </span>
              <h2 className="mt-4 text-5xl md:text-6xl font-black text-[hsl(var(--navy))] mb-6">
                Seven Pillars of
                <br />
                <span className="text-[hsl(var(--accent-blue))]">Operational Excellence</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Each service integrates seamlessly with your operations, providing measurable outcomes and executive-level visibility
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  to={service.slug}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="relative h-full p-8 transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(46,107,255,0.4)] hover:-translate-y-3 border-2 border-slate-100 hover:border-[hsl(var(--accent-blue))]/40 overflow-hidden bg-gradient-to-br from-white to-slate-50/30">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-0 blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />

                    {/* Icon with Enhanced Animation */}
                    <div className="relative mb-6">
                      <div className={`absolute -inset-2 bg-gradient-to-br ${service.gradient} opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
                      <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <service.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-2xl font-black text-[hsl(var(--navy))] mb-3 group-hover:text-[hsl(var(--accent-blue))] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm font-bold text-[hsl(var(--accent-blue))] mb-4 uppercase tracking-wide">
                        {service.tagline}
                      </p>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {service.overview}
                      </p>

                      {/* KPIs with Enhanced Styling */}
                      <div className="space-y-3 mb-6">
                        {service.kpis.map((kpi, kpiIndex) => (
                          <div
                            key={kpi.label}
                            className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-50/50 border border-slate-100 group-hover:from-[hsl(var(--accent-blue))]/5 group-hover:to-transparent group-hover:border-[hsl(var(--accent-blue))]/20 transition-all duration-300"
                            style={{ transitionDelay: `${kpiIndex * 50}ms` }}
                          >
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                              {kpi.label}
                            </span>
                            <span className="text-xl font-black text-[hsl(var(--navy))] group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                              {kpi.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA with Enhanced Animation */}
                      <div className="flex items-center justify-between pt-6 border-t-2 border-slate-100 group-hover:border-[hsl(var(--accent-blue))]/20 transition-colors">
                        <span className="text-sm font-bold text-[hsl(var(--accent-blue))] uppercase tracking-wide">
                          Explore Service
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--accent-blue))]/10 group-hover:bg-[hsl(var(--accent-blue))] transition-all duration-300">
                          <ArrowRight className="h-5 w-5 text-[hsl(var(--accent-blue))] group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Breakdown - Enhanced */}
        <section className="section-space bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-block px-4 py-2 rounded-full bg-white border-2 border-[hsl(var(--accent-blue))]/20 text-[hsl(var(--accent-blue))] font-bold text-xs uppercase tracking-wider mb-6 shadow-lg">
                Deep Dive
              </span>
              <h2 className="mt-4 text-5xl md:text-6xl font-black text-[hsl(var(--navy))] mb-6">
                Detailed Service
                <br />
                <span className="text-[hsl(var(--accent-blue))]">Capabilities</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Every service includes dedicated playbooks, measurable KPIs, and executive-level reporting
              </p>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <Card
                  key={service.slug}
                  className="group p-10 hover:shadow-[0_20px_60px_-20px_rgba(46,107,255,0.3)] transition-all duration-500 border-2 border-white/80 hover:border-[hsl(var(--accent-blue))]/30 bg-white/80 backdrop-blur-sm"
                >
                  <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
                    {/* Left Column */}
                    <div>
                      <div className="flex items-start gap-5 mb-6">
                        <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300`}>
                          <service.icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl md:text-4xl font-black text-[hsl(var(--navy))] mb-2 group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-base font-bold text-[hsl(var(--accent-blue))] uppercase tracking-wide">
                            {service.tagline}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        {service.overview}
                      </p>
                      <Button
                        asChild
                        size="lg"
                        className={`rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r ${service.gradient} border-0`}
                      >
                        <Link to={service.slug} className="flex items-center gap-3 group/btn">
                          <span>View Full Details</span>
                          <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                        </Link>
                      </Button>
                    </div>

                    {/* Right Column */}
                    <div className="bg-gradient-to-br from-slate-50/50 to-white/50 rounded-2xl p-8 border-2 border-slate-100">
                      <h4 className="text-sm font-black uppercase tracking-widest text-[hsl(var(--navy))] mb-6 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                        Key Capabilities & Outcomes
                      </h4>
                      <ul className="space-y-4">
                        {service.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-4 group/item">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 group-hover/item:bg-green-200 transition-colors mt-0.5">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="text-slate-700 leading-relaxed font-medium group-hover/item:text-[hsl(var(--navy))] transition-colors">
                              {outcome}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose HiTechLogic - Enhanced */}
        <section className="section-space bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-block px-4 py-2 rounded-full bg-[hsl(var(--accent-blue))]/10 border border-[hsl(var(--accent-blue))]/20 text-[hsl(var(--accent-blue))] font-bold text-xs uppercase tracking-wider mb-6">
                The HiTechLogic Difference
              </span>
              <h2 className="mt-4 text-5xl md:text-6xl font-black text-[hsl(var(--navy))] mb-6">
                Enterprise-Grade Reliability
                <br />
                <span className="text-[hsl(var(--accent-blue))]">Startup-Level Agility</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Rapid Onboarding",
                  description: "Get started in 2-4 weeks with progressive coverage expansion and minimal disruption to your operations.",
                  gradient: "from-yellow-500 to-orange-600",
                },
                {
                  icon: Award,
                  title: "Proven Track Record",
                  description: "$2B+ infrastructure under management with 98% client retention and 15+ years of enterprise experience.",
                  gradient: "from-purple-500 to-indigo-600",
                },
                {
                  icon: TrendingUp,
                  title: "Measurable Outcomes",
                  description: "Executive dashboards, quarterly business reviews, and KPI-driven improvements tied to your business goals.",
                  gradient: "from-green-500 to-emerald-600",
                },
              ].map((feature) => (
                <Card
                  key={feature.title}
                  className="group relative p-10 text-center hover:shadow-[0_20px_60px_-20px_rgba(46,107,255,0.4)] transition-all duration-500 hover:-translate-y-3 border-2 border-slate-100 hover:border-[hsl(var(--accent-blue))]/40 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                  <div className="relative">
                    <div className="flex justify-center mb-6">
                      <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <feature.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-[hsl(var(--navy))] mb-4 group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Enhanced */}
        <section className="section-space bg-gradient-to-br from-[hsl(var(--navy))] via-slate-900 to-[hsl(var(--navy))]/90 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(46,107,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(46,107,255,0.1),transparent_50%)]" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8 shadow-2xl">
              <Award className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
              <span className="text-sm font-bold uppercase tracking-wider">Trusted by Fortune 500 Companies</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Ready to Transform Your
              <br />
              <span className="bg-gradient-to-r from-[hsl(var(--accent-blue))] via-blue-400 to-white bg-clip-text text-transparent">
                Infrastructure Operations?
              </span>
            </h2>

            <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss which service pillars align with your immediate needs and long-term strategic goals
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Button
                variant="secondary"
                size="xl"
                asChild
                className="bg-white text-[hsl(var(--navy))] hover:bg-blue-50 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.8)] hover:shadow-[0_30px_70px_-15px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 border-0 font-bold"
              >
                <Link to="/contact" className="flex items-center gap-3 group">
                  <Target className="h-5 w-5" />
                  <span>Schedule Strategy Session</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                asChild
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 font-bold"
              >
                <Link to="/demo" className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <span>View Platform Demo</span>
                </Link>
              </Button>
            </div>

            {/* Guarantee Section */}
            <div className="pt-12 border-t-2 border-white/20">
              <p className="text-blue-200 text-lg font-bold mb-6 uppercase tracking-wider">
                Get Started Risk-Free with Our 30-Day Satisfaction Guarantee
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { icon: CheckCircle2, text: "No Long-Term Contracts" },
                  { icon: CheckCircle2, text: "Cancel Anytime" },
                  { icon: CheckCircle2, text: "Money-Back Guarantee" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-white group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 border-2 border-green-400 group-hover:bg-green-500/30 transition-all">
                      <item.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <span className="text-base font-bold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
