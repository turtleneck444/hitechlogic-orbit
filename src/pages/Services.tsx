import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ServiceCatalogSection } from "@/components/home/ServiceCatalogSection";
import { coreServices } from "@/data/coreServices";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Gauge,
  Handshake,
  Server,
  ShieldCheck,
  Workflow,
  Sparkles,
  Target,
  Clock,
  Zap,
  Award,
  Shield,
  TrendingUp,
  Rocket,
} from "lucide-react";

export default function Services() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hitechlogic.com/#organization",
    "name": "HiTechLogic",
    "url": "https://hitechlogic.com",
    "logo": "https://hitechlogic.com/logo.png",
    "description": "Enterprise-grade AI-powered infrastructure reliability, automation, and managed operations. Reduce alert noise by 80-90%, accelerate MTTR by 85%, and achieve 99.99% uptime.",
    "foundingDate": "2015",
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
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://hitechlogic.com/services/#service",
    "name": "Enterprise Infrastructure Management & Cloud Operations Services",
    "description": "Complete managed infrastructure services delivering 99.99% uptime, 40% cost reduction, and operational excellence. AI-powered automation, 24/7 expert support, DevOps reliability, and cloud security for enterprises.",
    "provider": {
      "@id": "https://hitechlogic.com/#organization"
    },
    "serviceType": "Managed Infrastructure Services",
    "category": "IT Services",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HiTechLogic Service Portfolio",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Infrastructure Reliability Engineering",
            "description": "24/7 SRE services with 99.99% uptime guarantees and intelligent automation"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FinOps & Cost Optimization",
            "description": "Reduce cloud costs by 50% with AI-driven resource optimization and governance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Operations Center",
            "description": "Zero-trust security with automated threat detection and compliance management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DevOps Automation",
            "description": "615+ automated runbooks with 99.9% success rate reducing manual intervention by 85%"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Alert Noise Reduction",
            "description": "Reduce monitoring alerts by 80-90% with intelligent correlation and automated triage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MTTR Acceleration",
            "description": "Sub-15 minute incident response with automated remediation and intelligent escalation"
          }
        }
      ]
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
          "name": "Fortune 500 Financial Institution"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "HiTechLogic's managed services transformed our infrastructure operations. We achieved 99.99% uptime and reduced operational costs by 48% within 6 months."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "Global E-commerce Platform"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "The automated remediation and intelligent monitoring reduced our MTTR from hours to minutes. Exceptional service and measurable results."
      }
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://hitechlogic.com/services/#webpage",
    "url": "https://hitechlogic.com/services",
    "name": "Managed IT Services for Enterprise Cloud Infrastructure & Reliability | HiTechLogic",
    "description": "Complete managed infrastructure services delivering 99.99% uptime, 40% cost reduction, and operational excellence. AI-powered automation, 24/7 expert support, DevOps reliability, and cloud security for enterprises.",
    "inLanguage": "en-US",
    "isPartOf": {
      "@id": "https://hitechlogic.com/#website"
    },
    "about": {
      "@id": "https://hitechlogic.com/#organization"
    },
    "mainEntity": {
      "@id": "https://hitechlogic.com/services/#service"
    },
    "breadcrumb": {
      "@id": "https://hitechlogic.com/services/#breadcrumb"
    }
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
        "name": "Services",
        "item": "https://hitechlogic.com/services"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of infrastructure services does HiTechLogic provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HiTechLogic provides comprehensive managed infrastructure services including: Infrastructure Reliability Engineering (24/7 SRE), FinOps & Cost Optimization (50% cost reduction), Security Operations Center (zero-trust security), DevOps Automation (615+ runbooks), Alert Noise Reduction (80-90% reduction), and MTTR Acceleration (sub-15 minute response)."
        }
      },
      {
        "@type": "Question",
        "name": "How does HiTechLogic ensure 99.99% uptime for enterprise clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HiTechLogic ensures 99.99% uptime through AI-powered automation, intelligent monitoring, automated remediation, 24/7 expert support, and proactive infrastructure management. Our systems use predictive analytics to prevent issues before they impact operations."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does HiTechLogic serve with managed services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HiTechLogic serves enterprise organizations across all major industries including financial services, healthcare, technology, e-commerce, manufacturing, government, and regulated industries. Our solutions are industry-agnostic and can be customized for specific regulatory and operational requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can clients expect to see results from HiTechLogic services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most enterprise clients see measurable improvements within 30 days. Critical improvements like alert noise reduction (80-90%) and MTTR acceleration (85%) are typically achieved within the first month. Full cost optimization and operational excellence benefits are realized within 3-6 months."
        }
      },
      {
        "@type": "Question",
        "name": "Does HiTechLogic integrate with existing enterprise tools and processes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, HiTechLogic integrates seamlessly with existing enterprise stacks. We work with AWS, Azure, Google Cloud, Kubernetes, Datadog, Splunk, and virtually all major enterprise tools. Our approach enhances existing investments rather than requiring replacements."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Managed IT Services for Enterprise Cloud Infrastructure & Reliability | HiTechLogic"
        description="Complete managed infrastructure services delivering 99.99% uptime, 40% cost reduction, and operational excellence. AI-powered automation, 24/7 expert support, DevOps reliability, and cloud security for enterprises."
        keywords="managed infrastructure services, cloud operations, DevOps automation, site reliability engineering, cloud security, FinOps, enterprise IT services, managed services, cloud infrastructure, infrastructure automation, reliability engineering"
        canonical="https://hitechlogic.com/services"
        schema={[organizationSchema, serviceSchema, webpageSchema, breadcrumbSchema, faqSchema]}
      />
      <Layout>
        {/* Hero Section - Matching Detailed Service Pages */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Rocket className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Enterprise Services</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Enterprise Infrastructure Management
              <span className="text-[hsl(var(--accent-blue))] block sm:inline"> & Cloud Operations Services</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">
              Comprehensive managed IT services delivering 99.99% uptime, 40% cost reduction, and operational excellence.
              DevOps automation, cloud infrastructure management, and reliability engineering for modern enterprises.
            </p>

            <div className="mt-10">
              <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(139,92,246,0.8)] hover:shadow-[0_25px_45px_-12px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Target className="h-5 w-5" />
                  <span>Transform Operations</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Uptime SLA", value: "99.99%", icon: Shield },
                { label: "Cost Reduction", value: "40%", icon: BarChart3 },
                { label: "Alert Reduction", value: "82%", icon: Activity },
                { label: "Services Offered", value: String(coreServices.length), icon: Award },
              ].map((metric, index) => (
                <div key={metric.label} className="text-center group">
                  <div className="flex justify-center mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-white/5 group-hover:from-[hsl(var(--accent-blue))]/20 group-hover:to-white/10 transition-all duration-300">
                      <metric.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{metric.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCatalogSection services={coreServices} anchorId="services-catalog" />

        {/* Enterprise Results */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Proven Impact</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Measurable Enterprise Results
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Delivering operational excellence with guaranteed 99.99% uptime and measurable impact
                across reliability, cost optimization, and innovation acceleration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "Operational Excellence",
                  results: [
                    { metric: "99.99%", subtext: "Uptime SLA", description: "Consistent availability" },
                    { metric: "↓90sec", subtext: "Incident Response", description: "Average detection time" },
                    { metric: "85%", subtext: "Faster Resolution", description: "MTTR improvement" },
                  ]
                },
                {
                  category: "Cost Optimization",
                  results: [
                    { metric: "40%", subtext: "Average Savings", description: "Infrastructure costs" },
                    { metric: "48%", subtext: "Efficiency Gains", description: "Resource optimization" },
                    { metric: "35%", subtext: "Operational Costs", description: "Reduced overhead" },
                  ]
                },
                {
                  category: "Innovation Acceleration",
                  results: [
                    { metric: "3-5x", subtext: "Development Speed", description: "Faster delivery" },
                    { metric: "95%", subtext: "Automation Rate", description: "Workflow coverage" },
                    { metric: "90%", subtext: "MTTR Reduction", description: "Issue resolution" },
                  ]
                },
                {
                  category: "Security & Compliance",
                  results: [
                    { metric: "100%", subtext: "Compliance Rate", description: "Regulatory standards" },
                    { metric: "99.9%", subtext: "Security Score", description: "Threat prevention" },
                    { metric: "0", subtext: "Security Breaches", description: "Proven track record" },
                  ]
                }
              ].map((category) => (
                <Card key={category.category} className="p-6 bg-white border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all group">
                  <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-6 text-center">{category.category}</h3>
                  <div className="space-y-4">
                    {category.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-black text-[hsl(var(--accent-blue))] mb-1 group-hover:scale-110 transition-transform">{result.metric}</div>
                        <div className="text-sm font-bold text-slate-700 mb-1">{result.subtext}</div>
                        <div className="text-xs text-slate-600">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose HiTechLogic */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Our Approach</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Why Choose HiTechLogic
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Enterprise-grade infrastructure management with proven results,
                AI-powered automation, and 24/7 expert support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Automation",
                  description: "615+ automated runbooks with 99.9% success rate reducing manual intervention by 85%",
                  icon: Workflow,
                },
                {
                  title: "24/7 Expert Support",
                  description: "Dedicated teams with deep expertise ensuring sub-15-minute incident response times",
                  icon: Clock,
                },
                {
                  title: "Proven Results",
                  description: "99.99% uptime SLA with 40% cost reduction and 90% MTTR improvement",
                  icon: TrendingUp,
                },
              ].map((feature) => (
                <Card key={feature.title} className="p-8 border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-space bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))]">
          <div className="mx-auto w-full max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Schedule a consultation to discuss how our 8 core services can deliver
              operational excellence for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-slate-50">
                <Link to="/contact" className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  <span>Schedule Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-2 border-white text-white hover:bg-white/10">
                <Link to="/industries">View Industry Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
