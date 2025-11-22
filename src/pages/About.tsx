import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  Award,
  Users,
  Target,
  Shield,
  Globe,
  Zap,
  TrendingUp,
  Star,
  Heart,
  CheckCircle2,
  Clock,
  ArrowRight,
  Star as StarIcon,
  Moon,
  Sun,
  Map,
  AreaChart,
  BarChart3,
  PieChart,
} from "lucide-react";

export default function About() {
  const companyValues = [
    {
      icon: Shield,
      title: "Enterprise Trust",
      description: "Commitment to 99.99% uptime guarantees and unbreakable reliability in mission-critical operations",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Zero-compromise infrastructure design with automated remediation and intelligent scaling",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Innovation Without Risk",
      description: "Pushing technological boundaries while maintaining absolute operational stability",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Partnership First",
      description: "Strategic alliances with enterprise leaders to transform technology operations",
      color: "from-orange-500 to-red-500"
    }
  ];

  const companyStats = [
    { metric: "10+", label: "Years of Excellence", icon: Award },
    { metric: "500+", label: "Enterprise Clients", icon: Users },
    { metric: "99.99%", label: "Uptime Guarantee", icon: Shield },
    { metric: "50M+", label: "Saved Annually", icon: TrendingUp },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Origins",
      description: "Founded with a vision to transform enterprise infrastructure operations through intelligent automation",
      type: "foundation"
    },
    {
      year: "2017",
      title: "AI-Driven Reliability",
      description: "Launched first-generation AI systems for infrastructure automation and self-healing",
      type: "innovation"
    },
    {
      year: "2019",
      title: "Enterprise Expansion",
      description: "Reached 100 enterprise clients with comprehensive managed services ecosystem",
      type: "growth"
    },
    {
      year: "2021",
      title: "Cloud Excellence",
      description: "Achieved zero-downtime multi-cloud orchestration capabilities",
      type: "achievement"
    },
    {
      year: "2023",
      title: "Service Innovation",
      description: "Launched eight integrated service pillars covering complete infrastructure lifecycle",
      type: "expansion"
    },
    {
      year: "2025",
      title: "Global Leadership",
      description: "Leading infrastructure operations transformation across 500+ enterprises worldwide",
      type: "leadership"
    }
  ];

  const pillars = [
    {
      icon: Shield,
      title: "Zero-Trust Security",
      description: "Embedded security across all infrastructure layers with zero compromise"
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "AI-driven remediation and proactive infrastructure management"
    },
    {
      icon: Globe,
      title: "Multi-Cloud Excellence",
      description: "Unified management across all major cloud platforms and hybrid environments"
    },
    {
      icon: CheckCircle2,
      title: "Operational Perfection",
      description: "Impeccable execution with guaranteed 99.99% uptime across all services"
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hitechlogic.com/#organization",
    "name": "HiTechLogic",
    "alternateName": "HiTechLogic Inc.",
    "description": "Enterprise-grade AI-powered infrastructure reliability, automation, and managed operations. Reduce alert noise by 80-90%, accelerate MTTR by 85%, and achieve 99.99% uptime with intelligent DevOps solutions.",
    "url": "https://hitechlogic.com",
    "logo": "https://hitechlogic.com/logo.png",
    "foundingDate": "2015",
    "founders": [
      {
        "@type": "Person",
        "name": "HiTechLogic Leadership Team",
        "jobTitle": "Executive Leadership"
      }
    ],
    "slogan": "Infrastructure Operations Perfected",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-888-448-3244",
      "contactType": "technical support",
      "email": "support@hitechlogic.com",
      "availableLanguage": ["English"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "Fortune 500 Enterprise Client"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "HiTechLogic transformed our infrastructure operations. We achieved 99.99% uptime and reduced costs by 48% within 6 months. Their expertise is unmatched."
      }
    ],
    "knowsAbout": [
      "Enterprise Infrastructure Management",
      "Site Reliability Engineering",
      "AI-Powered Operations",
      "DevOps Transformation",
      "Cloud Cost Optimization",
      "Infrastructure Automation"
    ],
    "expertise": [
      "Infrastructure Operations",
      "Enterprise IT Management",
      "Reliability Engineering",
      "Operational Excellence",
      "Technology Transformation"
    ],
    "award": [
      "99.99% Uptime SLA Achievement",
      "Industry Leader in Infrastructure Automation",
      "Enterprise Trust Award 2024",
      "Innovation Excellence Award"
    ]
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://hitechlogic.com/about/#aboutpage",
    "url": "https://hitechlogic.com/about",
    "name": "About HiTechLogic | Enterprise Infrastructure Operations Excellence",
    "description": "Transforming enterprise technology operations worldwide. 10+ years of excellence with 99.99% uptime guarantees, AI-driven automation, and zero-compromise infrastructure management.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@id": "https://hitechlogic.com/#website"
    },
    "about": {
      "@id": "https://hitechlogic.com/#organization"
    },
    "mainEntity": {
      "@id": "https://hitechlogic.com/#organization"
    },
    "breadcrumb": {
      "@id": "https://hitechlogic.com/about/#breadcrumb"
    },
    "datePublished": "2015-01-01",
    "dateModified": "2025-01-21"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://hitechlogic.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://hitechlogic.com/about"
      }
    ]
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@id": "https://hitechlogic.com/#organization"
    },
    "dateCreated": "2015",
    "dateModified": "2025"
  };

  return (
    <>
      <SEO
        title="About HiTechLogic | Enterprise Infrastructure & Cloud Operations"
        description="Transforming enterprise technology operations worldwide. 10+ years of excellence with 99.99% uptime guarantees, AI-driven automation, and zero-compromise infrastructure management."
        keywords="enterprise infrastructure, managed services, cloud operations, AI automation, zero trust security, high availability, enterprise solutions, IT transformation, operational excellence"
        canonical="https://hitechlogic.com/about"
        schema={[organizationSchema, aboutPageSchema, breadcrumbSchema, profilePageSchema]}
      />
      <Layout>
        <div className="font-sans">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Award className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">About HiTechLogic</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
              Operational Excellence{" "}
              <span className="text-[hsl(var(--accent-blue))] block sm:inline">Perfected</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">
              Ten years of transforming enterprise technology operations into strategic advantages.
              Where infrastructure becomes invisible, operations become autonomous, and business becomes unstoppable.
            </p>

            <div className="mt-10">
              <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(139,92,246,0.8)] hover:shadow-[0_25px_45px_-12px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Award className="h-5 w-5" />
                  <span>Our Impact</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {companyStats.map((metric, index) => (
                <div key={metric.label} className="text-center group px-4 py-2">
                  <div className="flex justify-center mb-3">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-white/5 group-hover:from-[hsl(var(--accent-blue))]/20 group-hover:to-white/10 transition-all duration-300">
                      <metric.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{metric.metric}</div>
                  <div className="mt-1 md:mt-2 text-xs md:text-sm font-medium text-slate-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-space bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-[hsl(var(--navy))] font-semibold mb-6">
                  <Target className="h-4 w-4" />
                  <span>Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                  Making Infrastructure
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Disappear
                  </span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  We exist to eliminate infrastructure operations as a constraint to business growth.
                  Through intelligent automation, zero-compromise engineering, and relentless optimization,
                  we enable organizations to focus entirely on their mission while we handle the complexity.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
                    <div className="text-sm font-semibold text-slate-700">Uptime SLA</div>
                    <div className="text-xs text-slate-600 mt-1">Guaranteed</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                    <div className="text-sm font-semibold text-slate-700">Enterprises</div>
                    <div className="text-xs text-slate-600 mt-1">Supported</div>
                  </div>
                </div>
              </div>

              <div>
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
                      <Star className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Vision Statement</h3>
                      <p className="text-slate-600">The impossible standard</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white/60 border border-blue-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span className="text-slate-700">Infrastructure operations becoming completely autonomous</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white/60 border border-blue-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span className="text-slate-700">Zero-touch remediation and intelligent scaling</span>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-white/60 border border-blue-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                      <span className="text-slate-700">Enterprise operations free from technical complexity</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <p className="text-sm italic text-slate-600">
                      "We will continue pushing the boundaries of what's possible in enterprise infrastructure
                      until infrastructure operations become as reliable as gravity itself."
                    </p>
                    <div className="text-xs text-blue-600 font-semibold mt-2">- HiTechLogic Mission Statement</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Company Pillars */}
        <section className="section-space bg-slate-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-[hsl(var(--navy))] font-semibold mb-6">
                <Shield className="h-4 w-4" />
                <span>Foundation Principles</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
                Four Pillars of Excellence
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Every service, every solution, every decision at HiTechLogic is guided by these
                foundational principles that have defined our success for a decade.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {companyValues.map((value, index) => (
                <Card key={value.title} className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200 hover:border-slate-300 group">
                  <div className="flex items-start gap-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${value.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        {value.description}
                      </p>

                      {/* Visual indicator */}
                      <div className="w-full h-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
                             style={{ width: '100%', animationDelay: `${index * 0.2}s` }} />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="section-space bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-[hsl(var(--navy))] font-semibold mb-6">
                <TrendingUp className="h-4 w-4" />
                <span>Our Evolution</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
                A Decade of Transformation
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                From founding vision to global leadership, our journey of relentless innovation
                and operational perfection has transformed how enterprises manage technology infrastructure.
              </p>
            </div>

            <div className="relative">
              {/* Central timeline line - hidden on mobile */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-blue-300 to-purple-200 transform -translate-x-px" />

              <div className="space-y-8 lg:space-y-12">
                {timeline.map((item, index) => (
                  <div key={item.year} className="relative flex flex-col items-center">
                    {/* Timeline dot - positioned differently for mobile */}
                    <div className="flex lg:hidden w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-md mb-4"></div>
                    <div className="hidden lg:flex absolute left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-lg transform -translate-x-1/2 items-center justify-center -top-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    {/* Content Card */}
                    <div className="w-full max-w-2xl">
                      <Card className="p-4 md:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-slate-200 hover:border-blue-200 group">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                          <div className="text-xl md:text-2xl font-black text-blue-600">{item.year}</div>
                          <div className="px-2 py-1 md:px-3 md:py-1 rounded-full border border-slate-200 bg-white text-xs font-bold text-[hsl(var(--navy))] w-fit">
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </div>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Operational Perfection Showcase */}
        <section className="section-space bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                Operational Perfection
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                  In Action
                </span>
              </h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Every enterprise we serve becomes part of our legacy of reliability.
                From Fortune 500 banks to healthcare systems and eCommerce platforms,
                our technology has delivered unprecedented operational excellence.
              </p>
            </div>

            {/* Success Showcase Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => (
                <Card key={pillar.title} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:scale-105 text-white text-center group">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                      <pillar.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{pillar.description}</p>
                </Card>
              ))}
            </div>

            {/* Enterprise Impact Stats */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "$50M+ Saved Annually",
                  subtitle: "Across all enterprise clients",
                  description: "Infrastructure costs reduced by 48% through intelligent automation and optimization"
                },
                {
                  icon: Clock,
                  title: "99.99% Uptime Achieved",
                  subtitle: "SLA consistently exceeded",
                  description: "Nine nines reliability across all managed services and infrastructure components"
                },
                {
                  icon: Zap,
                  title: "< 90 seconds MTTR",
                  subtitle: "Incident resolution time",
                  description: "Automated remediation reduces incident impact by 85% compared to manual processes"
                }
              ].map((impact, index) => (
                <div key={impact.title} className="text-center group">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 mb-6 group-hover:bg-white/20 transition-colors">
                    <impact.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{impact.title}</h3>
                  <p className="text-blue-300 font-semibold text-sm mb-4">{impact.subtitle}</p>
                  <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">{impact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-space bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">
                Experience Operational
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Perfection
                </span>
              </h2>

              <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of enterprises that have transformed their operations with HiTechLogic.
                Ten years of proven excellence, guaranteed reliability, and unlimited potential await.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button variant="primary" size="xl" asChild className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact" className="flex items-center gap-3 px-8 py-4 text-lg">
                    <Zap className="h-6 w-6" />
                    <span>Transform Your Operations</span>
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </Button>

                <Button variant="outline" size="xl" asChild className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300">
                  <Link to="/services" className="flex items-center gap-3 px-8 py-4 text-lg">
                    <Shield className="h-6 w-6" />
                    <span>Explore Our Services</span>
                  </Link>
                </Button>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <p className="text-slate-500 text-lg mb-6">The HiTechLogic Promise</p>
                <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>99.99% uptime guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Enterprise compliance guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>24/7 enterprise support team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        </div>
      </Layout>
    </>
  );
}
