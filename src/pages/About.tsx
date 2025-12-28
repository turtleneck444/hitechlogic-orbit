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
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  organizationSchema,
  createAboutPageSchema,
  createBreadcrumbSchema,
  createFAQSchema,
  SCHEMA_CONSTANTS
} from "@/lib/schema";

const { SITE_URL } = SCHEMA_CONSTANTS;

export default function About() {
  const companyValues = [
    {
      icon: Shield,
      title: "Enterprise Trust",
      description: "Commitment to 99.99% uptime guarantees and unbreakable reliability in mission-critical operations"
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Zero-compromise infrastructure design with automated remediation and intelligent scaling"
    },
    {
      icon: TrendingUp,
      title: "Innovation Without Risk",
      description: "Pushing technological boundaries while maintaining absolute operational stability"
    },
    {
      icon: Users,
      title: "Partnership First",
      description: "Strategic alliances with enterprise leaders to transform technology operations"
    }
  ];

  const companyStats = [
    { metric: "10+", label: "Years of Excellence" },
    { metric: "500+", label: "Enterprise Clients" },
    { metric: "99.99%", label: "Uptime Guarantee" },
    { metric: "$50M+", label: "Saved Annually" },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Origins",
      description: "Founded with a vision to transform enterprise infrastructure operations through intelligent automation"
    },
    {
      year: "2017",
      title: "AI-Driven Reliability",
      description: "Launched first-generation AI systems for infrastructure automation and self-healing"
    },
    {
      year: "2019",
      title: "Enterprise Expansion",
      description: "Reached 100 enterprise clients with comprehensive managed services ecosystem"
    },
    {
      year: "2021",
      title: "Cloud Excellence",
      description: "Achieved zero-downtime multi-cloud orchestration capabilities"
    },
    {
      year: "2023",
      title: "Service Innovation",
      description: "Launched eight integrated service pillars covering complete infrastructure lifecycle"
    },
    {
      year: "2025",
      title: "Global Leadership",
      description: "Leading infrastructure operations transformation across 500+ enterprises worldwide"
    }
  ];

  // About page specific schema
  const aboutPageSchema = createAboutPageSchema(`${SITE_URL}/about`);

  // Breadcrumb
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "About", url: `${SITE_URL}/about` }
  ]);

  // FAQ schema
  const faqSchema = createFAQSchema([
    {
      question: "How long has HiTechLogic been in business?",
      answer: "HiTechLogic was founded in 2015 and has been transforming enterprise infrastructure operations for over 10 years. We've grown from a small team to serving 500+ enterprise clients worldwide."
    },
    {
      question: "What is HiTechLogic's mission?",
      answer: "Our mission is to eliminate infrastructure operations as a constraint to business growth. Through intelligent automation, zero-compromise engineering, and relentless optimization, we enable organizations to focus entirely on their mission while we handle the complexity."
    },
    {
      question: "What makes HiTechLogic's approach unique?",
      answer: "We combine AI-driven automation with enterprise-grade reliability. Our four pillars—Enterprise Trust, Precision Engineering, Innovation Without Risk, and Partnership First—guide every decision and service we provide."
    }
  ], `${SITE_URL}/about/#faq`);

  // Company timeline schema
  const timelineSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/about/#timeline`,
    "name": "HiTechLogic Company Timeline",
    "description": "A decade of transformation and innovation in enterprise infrastructure operations",
    "itemListElement": timeline.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Event",
        "name": `${item.year}: ${item.title}`,
        "description": item.description,
        "startDate": `${item.year}-01-01`
      }
    }))
  };

  return (
    <>
      <SEO
        title="About HiTechLogic | Enterprise Infrastructure & Cloud Operations"
        description="Transforming enterprise technology operations worldwide. 10+ years of excellence with 99.99% uptime guarantees, AI-driven automation, and zero-compromise infrastructure management."
        keywords="enterprise infrastructure, managed services, cloud operations, AI automation, zero trust security, high availability, enterprise solutions, IT transformation, operational excellence"
        canonical={`${SITE_URL}/about`}
        schema={[organizationSchema, aboutPageSchema, breadcrumbSchema, faqSchema, timelineSchema]}
      />
      <Layout>
        <div className="font-sans">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-white border-b border-slate-200">
            <div className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold text-[hsl(var(--accent-blue))] mb-4 tracking-wide uppercase">
                  About HiTechLogic
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-[hsl(var(--deep-navy))] mb-6">
                  Operational Excellence Perfected
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                  A decade of transforming enterprise technology operations into strategic advantages. Where infrastructure becomes invisible, operations become autonomous, and business becomes unstoppable.
                </p>
                <Button variant="primary" size="lg" asChild className="bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/90">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Key Metrics */}
              <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {companyStats.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--deep-navy))] mb-2">{metric.metric}</div>
                    <div className="text-sm text-slate-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="section-space bg-slate-50">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <div className="text-sm font-semibold text-[hsl(var(--accent-blue))] mb-4 tracking-wide uppercase">
                    Our Mission
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--deep-navy))] mb-6 leading-tight">
                    Making Infrastructure Disappear
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    We eliminate infrastructure operations as a constraint to business growth. Through intelligent automation, zero-compromise engineering, and relentless optimization, we enable organizations to focus entirely on their mission while we handle the complexity.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="p-6 bg-white border border-slate-200 rounded-lg">
                      <div className="text-2xl font-bold text-[hsl(var(--accent-blue))] mb-1">99.99%</div>
                      <div className="text-sm font-medium text-slate-700">Uptime SLA</div>
                      <div className="text-xs text-slate-500 mt-1">Guaranteed</div>
                    </div>
                    <div className="p-6 bg-white border border-slate-200 rounded-lg">
                      <div className="text-2xl font-bold text-[hsl(var(--accent-blue))] mb-1">500+</div>
                      <div className="text-sm font-medium text-slate-700">Enterprises</div>
                      <div className="text-xs text-slate-500 mt-1">Supported</div>
                    </div>
                  </div>
                </div>

                <div>
                  <Card className="p-8 bg-white border border-slate-200">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-[hsl(var(--deep-navy))] mb-2">Vision Statement</h3>
                      <p className="text-slate-600">The impossible standard</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Infrastructure operations becoming completely autonomous</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Zero-touch remediation and intelligent scaling</span>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Enterprise operations free from technical complexity</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <p className="text-sm italic text-slate-600">
                        "We will continue pushing the boundaries of what's possible in enterprise infrastructure until infrastructure operations become as reliable as gravity itself."
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Company Pillars */}
          <section className="section-space bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <div className="text-sm font-semibold text-[hsl(var(--accent-blue))] mb-4 tracking-wide uppercase">
                  Foundation Principles
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--deep-navy))] mb-6 leading-tight">
                  Four Pillars of Excellence
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Every service, solution, and decision at HiTechLogic is guided by these foundational principles that have defined our success for a decade.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {companyValues.map((value) => (
                  <Card key={value.title} className="p-8 bg-white border border-slate-200 hover:border-slate-300 transition-colors">
                    <div className="flex items-start gap-4">
                      <value.icon className="h-6 w-6 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[hsl(var(--deep-navy))] mb-3 leading-tight">
                          {value.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Journey Timeline */}
          <section className="section-space bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <div className="text-sm font-semibold text-[hsl(var(--accent-blue))] mb-4 tracking-wide uppercase">
                  Our Evolution
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--deep-navy))] mb-6 leading-tight">
                  A Decade of Transformation
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  From founding vision to global leadership, our journey of relentless innovation and operational perfection has transformed how enterprises manage technology infrastructure.
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-slate-300" />

                <div className="space-y-8">
                  {timeline.map((item) => (
                    <div key={item.year} className="relative flex gap-8">
                      {/* Year marker */}
                      <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0">
                        <div className="w-4 h-4 rounded-full bg-[hsl(var(--accent-blue))] border-4 border-white shadow-sm" />
                      </div>

                      {/* Content */}
                      <Card className="flex-1 p-6 bg-white border border-slate-200">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="text-xl font-bold text-[hsl(var(--accent-blue))]">{item.year}</div>
                        </div>
                        <h3 className="text-lg font-semibold text-[hsl(var(--deep-navy))] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="section-space bg-white">
            <div className="container mx-auto px-6 max-w-4xl text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-[hsl(var(--deep-navy))] mb-6 leading-tight">
                Experience Operational Perfection
              </h2>

              <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
                Join hundreds of enterprises that have transformed their operations with HiTechLogic. A decade of proven excellence, guaranteed reliability, and unlimited potential await.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button variant="primary" size="lg" asChild className="bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/90">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Transform Your Operations</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button variant="outline" size="lg" asChild className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  <Link to="/services">
                    <span>Explore Our Services</span>
                  </Link>
                </Button>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <p className="text-slate-500 text-sm mb-6 font-medium">The HiTechLogic Promise</p>
                <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
                    <span>99.99% uptime guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
                    <span>Enterprise compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
                    <span>24/7 support team</span>
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
