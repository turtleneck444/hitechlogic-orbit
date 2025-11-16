import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Server, Cloud, Network, HardDrive, Cpu, Activity, Clock, Shield, CheckCircle2, ArrowRight, Zap, TrendingUp, AlertCircle, Award, Users, BarChart, Phone, Mail, Calendar, Star, GitBranch } from "lucide-react";

const capabilities = [
  {
    icon: Clock,
    title: "24/7 Infrastructure Oversight",
    description: "Round-the-clock monitoring and management of your cloud and on-premise infrastructure with dedicated operations teams.",
    highlight: "Never sleep mode",
  },
  {
    icon: Cloud,
    title: "Multi-Cloud Management",
    description: "Unified operations across AWS, Azure, GCP, and hybrid environments with consistent governance and tooling.",
    highlight: "All clouds, one team",
  },
  {
    icon: TrendingUp,
    title: "Capacity Planning & Forecasting",
    description: "Proactive capacity analysis, growth forecasting, and resource optimization to prevent bottlenecks before they occur.",
    highlight: "Future-proof growth",
  },
  {
    icon: Shield,
    title: "Change & Release Coordination",
    description: "Structured change management with documented windows, rollback procedures, and minimal business disruption.",
    highlight: "Zero-risk deployments",
  },
  {
    icon: Network,
    title: "Network Operations",
    description: "Complete network lifecycle management including configuration, optimization, security, and performance tuning.",
    highlight: "Lightning-fast networks",
  },
  {
    icon: HardDrive,
    title: "Storage & Data Management",
    description: "Strategic storage provisioning, lifecycle management, backup orchestration, and disaster recovery readiness.",
    highlight: "Data safety guaranteed",
  },
];

const benefits = [
  "Eliminate infrastructure downtime with proactive monitoring and rapid incident response",
  "Reduce operational costs through intelligent resource optimization and right-sizing",
  "Scale confidently with capacity forecasting and automated provisioning workflows",
  "Maintain compliance with documented change controls and audit-ready processes",
  "Accelerate innovation by offloading day-to-day infrastructure management to experts",
  "Gain visibility with real-time dashboards, capacity reports, and executive summaries",
];

const deliverables = [
  {
    title: "Daily Operations",
    items: ["24/7 infrastructure monitoring", "Incident detection and escalation", "Performance baselining", "Resource utilization tracking"],
  },
  {
    title: "Weekly Deliverables",
    items: ["Capacity trend reports", "Change window summaries", "Incident retrospectives", "Cost optimization recommendations"],
  },
  {
    title: "Monthly Reviews",
    items: ["Infrastructure health scorecards", "Capacity planning forecasts", "Compliance and audit reports", "Strategic optimization roadmaps"],
  },
  {
    title: "Quarterly Planning",
    items: ["Technology refresh assessments", "Architecture evolution planning", "Disaster recovery testing", "Executive strategy sessions"],
  },
];

const useCases = [
  {
    title: "Enterprise Cloud Migration",
    description: "Seamlessly transition from on-premise to cloud infrastructure with zero-downtime migrations, validation testing, and optimized configurations.",
    icon: Cloud,
    industry: "All Industries",
  },
  {
    title: "Hybrid Infrastructure Management",
    description: "Maintain unified operations across cloud and on-premise environments with consistent monitoring, security, and governance frameworks.",
    icon: Server,
    industry: "Financial Services",
  },
  {
    title: "High-Availability Systems",
    description: "Design and operate mission-critical infrastructure with automated failover, geo-redundancy, and continuous availability guarantees.",
    icon: Zap,
    industry: "Healthcare & E-commerce",
  },
  {
    title: "Regulatory Compliance",
    description: "Ensure infrastructure meets industry standards (SOC 2, HIPAA, PCI-DSS) with continuous compliance monitoring and documentation.",
    icon: Shield,
    industry: "Healthcare & Finance",
  },
];

const metrics = [
  { label: "Uptime SLA", value: "99.99%", icon: Activity },
  { label: "Mean Time to Resolution", value: "<15 min", icon: Clock },
  { label: "Change Success Rate", value: "99.7%", icon: CheckCircle2 },
  { label: "Capacity Forecast Accuracy", value: "95%+", icon: TrendingUp },
];

const process = [
  {
    step: "1",
    title: "Discovery & Assessment",
    description: "Comprehensive infrastructure audit, identify optimization opportunities, and establish baselines.",
    duration: "Week 1-2",
  },
  {
    step: "2",
    title: "Onboarding & Integration",
    description: "Deploy monitoring tools, integrate with existing systems, and establish communication protocols.",
    duration: "Week 3-4",
  },
  {
    step: "3",
    title: "Steady-State Operations",
    description: "24/7 monitoring, proactive optimization, capacity planning, and regular reporting.",
    duration: "Ongoing",
  },
  {
    step: "4",
    title: "Continuous Improvement",
    description: "Quarterly strategic reviews, technology evolution, and maturity progression.",
    duration: "Quarterly",
  },
];

const comparison = [
  {
    feature: "24/7 Monitoring",
    inHouse: "Limited to business hours or on-call",
    hitechlogic: "Always-on dedicated operations team",
  },
  {
    feature: "Expertise Depth",
    inHouse: "Generalist engineers",
    hitechlogic: "Certified specialists across all platforms",
  },
  {
    feature: "Response Time",
    inHouse: "30-60 minutes average",
    hitechlogic: "<15 minutes guaranteed",
  },
  {
    feature: "Cost Structure",
    inHouse: "$250K+ annual per engineer",
    hitechlogic: "Fraction of in-house cost",
  },
  {
    feature: "Tooling & Automation",
    inHouse: "Build and maintain yourself",
    hitechlogic: "Enterprise-grade included",
  },
  {
    feature: "Scalability",
    inHouse: "Slow hiring and training",
    hitechlogic: "Instant team scaling",
  },
];

const faqs = [
  {
    question: "How quickly can you onboard our infrastructure?",
    answer: "Most clients are fully onboarded within 2-4 weeks. We start with critical systems and expand coverage progressively to minimize risk and ensure smooth integration.",
  },
  {
    question: "What cloud platforms do you support?",
    answer: "We support all major cloud platforms including AWS, Azure, GCP, Oracle Cloud, and IBM Cloud, as well as hybrid and multi-cloud architectures.",
  },
  {
    question: "Can you manage our on-premise infrastructure too?",
    answer: "Absolutely. We specialize in hybrid environments and can manage your on-premise data centers alongside your cloud infrastructure with unified tooling and processes.",
  },
  {
    question: "How do you handle emergency situations?",
    answer: "Our 24/7 operations center responds to critical incidents within minutes. We have documented escalation procedures, automated runbooks, and direct communication channels for urgent issues.",
  },
  {
    question: "What if we want to transition to in-house management later?",
    answer: "We design our engagements to build your internal capabilities through knowledge transfer, documentation, and training. Many clients start with us and gradually transition to a hybrid model.",
  },
];

const trustIndicators = [
  { label: "Years of Experience", value: "15+" },
  { label: "Infrastructure Managed", value: "$2B+" },
  { label: "Client Retention Rate", value: "98%" },
  { label: "Certified Engineers", value: "200+" },
];

export default function InfrastructureCloudOperations() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://hitechlogic.com/services/infrastructure-cloud-operations#service",
        name: "Infrastructure & Cloud Operations",
        provider: {
          "@type": "Organization",
          name: "HiTechLogic",
          "@id": "https://hitechlogic.com/#organization"
        },
        serviceType: "Managed Infrastructure Services",
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://hitechlogic.com/services/infrastructure-cloud-operations",
          servicePhone: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["English"]
          }
        },
        slogan: "Always-On Infrastructure, Zero Surprises",
        description: "Enterprise-grade infrastructure management with 24/7 oversight, intelligent capacity planning, and change governance that keeps your systems running at peak performance across AWS, Azure, GCP, and hybrid environments.",
        offers: {
          "@type": "Offer",
          category: "Infrastructure Management",
          itemOffered: {
            "@type": "Service",
            name: "24/7 Infrastructure & Cloud Operations",
            description: "Comprehensive management of cloud and on-premise infrastructure with continuous monitoring, capacity planning, and change governance."
          }
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Infrastructure Operations Services",
          itemListElement: capabilities.map((cap) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: cap.title,
              description: cap.description
            }
          }))
        },
        audience: {
          "@type": "Audience",
          audienceType: "Enterprise Technology Teams, CTOs, VPs of Engineering, Infrastructure Directors"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "156",
          bestRating: "5",
          worstRating: "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://hitechlogic.com/services/infrastructure-cloud-operations#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://hitechlogic.com/services/infrastructure-cloud-operations#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://hitechlogic.com/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://hitechlogic.com/services"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Infrastructure & Cloud Operations",
            item: "https://hitechlogic.com/services/infrastructure-cloud-operations"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Infrastructure & Cloud Operations | 24/7 Managed Services | HiTechLogic"
        description="Enterprise-grade 24/7 infrastructure management across AWS, Azure, GCP & hybrid environments. 99.99% uptime SLA, <15min response time, proactive capacity planning. Transform infrastructure from cost center to strategic asset."
        keywords="infrastructure management, cloud operations, 24/7 monitoring, multi-cloud management, AWS Azure GCP, hybrid infrastructure, capacity planning, change management, infrastructure automation, DevOps managed services, cloud governance"
        canonical="https://hitechlogic.com/services/infrastructure-cloud-operations"
        schema={schema}
        ogType="website"
        ogImage="https://hitechlogic.com/images/services/infrastructure-operations-og.jpg"
        twitterCard="summary_large_image"
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="flex items-center gap-3 mb-6 animate-[fade-in_0.5s_ease-out]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-white/15">
              <Cloud className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
            </div>
            <span className="text-sm font-medium text-white/90 tracking-wide">Core Operations Discipline</span>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-[fade-in_0.6s_ease-out_0.1s_both]">
            Infrastructure & Cloud <span className="text-[hsl(var(--accent-blue))]">Operations</span>
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed animate-[fade-in_0.7s_ease-out_0.2s_both]">
            Hybrid, multi-cloud, and on-prem estates managed with disciplined change, capacity, and lifecycle controls.
            <span className="block mt-3 font-semibold text-white">4 dedicated operational pods ensuring 24/7 excellence</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-in_0.8s_ease-out_0.3s_both]">
            <Button size="lg" asChild className="bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/90 text-white shadow-[0_20px_45px_-20px_rgba(46,107,255,0.8)] hover:shadow-[0_25px_50px_-12px_rgba(46,107,255,0.9)] hover:scale-105 transition-all duration-300">
              <Link to="/contact" className="flex items-center gap-2 group">
                <span>Schedule Consultation</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              <Link to="/demo" className="flex items-center gap-2 group">
                <span>View Case Studies</span>
              </Link>
            </Button>
          </div>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-[fade-in_0.9s_ease-out_0.4s_both]">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 group-hover:bg-white/15 group-hover:border-white/20 transition-all duration-300">
                    <metric.icon className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-blue))] group-hover:scale-110 transition-transform duration-300">{metric.value}</div>
                <div className="mt-2 text-sm font-medium text-white/80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-[hsl(var(--navy))]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator) => (
              <div key={indicator.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{indicator.value}</div>
                <div className="text-sm text-blue-200">{indicator.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow text-[hsl(var(--accent-blue))]">How it works</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Daily stewardship of your environments</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Our Infrastructure & Cloud Operations service provides comprehensive management of your technology
                infrastructure, from on-premise data centers to multi-cloud environments. We handle the complexity
                of modern infrastructure so your teams can focus on innovation.
              </p>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                With dedicated operations teams, advanced automation, and proactive capacity management, we ensure
                your infrastructure is always available, performant, and optimized for your business needs.
              </p>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact" className="flex items-center gap-2 group">
                    <span>See How We Work</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 border-2 border-[hsl(var(--accent-blue))]/20 bg-gradient-to-br from-blue-50/50 to-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Activity className="h-8 w-8 text-[hsl(var(--accent-blue))] mb-3" />
                <div className="text-2xl font-bold text-[hsl(var(--navy))]">24/7</div>
                <div className="text-sm text-slate-600 mt-1">Continuous Monitoring</div>
              </Card>
              <Card className="p-6 border-2 border-[hsl(var(--navy))]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CheckCircle2 className="h-8 w-8 text-[hsl(var(--navy))] mb-3" />
                <div className="text-2xl font-bold text-[hsl(var(--navy))]">99.99%</div>
                <div className="text-sm text-slate-600 mt-1">Uptime Guarantee</div>
              </Card>
              <Card className="p-6 border-2 border-[hsl(var(--navy))]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Cpu className="h-8 w-8 text-[hsl(var(--navy))] mb-3" />
                <div className="text-2xl font-bold text-[hsl(var(--navy))]">Multi-Cloud</div>
                <div className="text-sm text-slate-600 mt-1">AWS, Azure, GCP</div>
              </Card>
              <Card className="p-6 border-2 border-[hsl(var(--accent-blue))]/20 bg-gradient-to-br from-blue-50/50 to-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-[hsl(var(--accent-blue))] mb-3" />
                <div className="text-2xl font-bold text-[hsl(var(--navy))]">95%+</div>
                <div className="text-sm text-slate-600 mt-1">Forecast Accuracy</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-blue-50/20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Our process</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              From onboarding to excellence in 4 weeks
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Our proven methodology gets you from chaos to control quickly and safely.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--accent-blue))]/20 via-[hsl(var(--accent-blue))] to-[hsl(var(--accent-blue))]/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-4 gap-6 relative">
              {process.map((item, index) => (
                <Card key={item.step} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[hsl(var(--accent-blue))]/50 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {item.step}
                    </div>
                    <div className="text-sm font-semibold text-[hsl(var(--accent-blue))] mb-2">{item.duration}</div>
                    <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2 group">
                <span>Start Your Journey Today</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Core capabilities</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Complete infrastructure lifecycle management
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              From initial provisioning to ongoing optimization, we manage every aspect of your infrastructure operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={capability.title} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/30 group relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 text-xs font-semibold text-[hsl(var(--accent-blue))] rounded-bl-lg">
                  {capability.highlight}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:from-[hsl(var(--accent-blue))]/20 group-hover:to-[hsl(var(--navy))]/10 transition-all group-hover:scale-110 duration-300">
                  <capability.icon className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[hsl(var(--navy))]">{capability.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{capability.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Why outsource?</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              HiTechLogic vs. In-House Team
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              See how partnering with us compares to building and maintaining an in-house infrastructure team.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="px-6 py-4 text-left text-sm font-bold text-[hsl(var(--navy))]">Criteria</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">In-House Team</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-[hsl(var(--accent-blue))]">HiTechLogic</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={item.feature} className="border-b border-slate-100 hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[hsl(var(--navy))]">{item.feature}</td>
                      <td className="px-6 py-4 text-slate-600">{item.inHouse}</td>
                      <td className="px-6 py-4 text-[hsl(var(--navy))] font-medium flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                        {item.hitechlogic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2 group">
                <span>Get a Custom Quote</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Business value</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Transform infrastructure from cost center to strategic asset</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Partner with HiTechLogic to eliminate infrastructure headaches and unlock the full potential
                of your technology investments.
              </p>
              <div className="mt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/case-studies" className="flex items-center gap-2 group">
                    <span>Read Success Stories</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                  <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Common scenarios</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Built for complex infrastructure challenges</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={useCase.title} className="p-8 border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{useCase.title}</h3>
                    </div>
                    <p className="text-sm text-[hsl(var(--accent-blue))] font-semibold mb-3">{useCase.industry}</p>
                    <p className="text-slate-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Frequently asked questions</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Everything you need to know</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/30">
                <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">Still have questions?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>Email Us</span>
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Phone className="h-5 w-5" />
                  <span>Schedule a Call</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-space bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--navy))]/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Award className="h-4 w-4" />
            <span className="text-sm font-semibold">Trusted by Fortune 500 Companies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to transform your infrastructure operations?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how our Infrastructure & Cloud Operations service can eliminate downtime,
            reduce costs, and accelerate your innovation velocity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-blue-50 shadow-2xl hover:scale-105 transition-all">
              <Link to="/contact" className="flex items-center gap-2 group">
                <Calendar className="h-5 w-5" />
                <span>Schedule Strategy Session</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/pricing" className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                <span>View Pricing</span>
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-blue-200 text-sm mb-4">Get started risk-free with our 30-day satisfaction guarantee</p>
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm">No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm">Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
