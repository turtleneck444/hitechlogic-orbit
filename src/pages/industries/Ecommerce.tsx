import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { CheckCircle2, ShoppingCart, Shield, FileText, Lock, Activity, Users, DollarSign, ArrowRight, AlertTriangle } from "lucide-react";
import { industries, getIndustryById } from "@/data/industries";

export default function Ecommerce() {
  const industry = getIndustryById("ecommerce");

  if (!industry) return null;

  const iconMap: Record<string, any> = {
    CheckCircle: CheckCircle2,
    TrendingUp: DollarSign,
    ShieldCheck: Shield,
    Shield,
    Lock,
    FileText,
    Activity,
    Users,
  };

  const faqs = [
    {
      question: "How do you handle traffic spikes during flash sales and Black Friday?",
      answer: "Our auto-scaling infrastructure uses predictive algorithms based on historical patterns and real-time metrics. We've successfully handled 500%+ traffic increases during peak events while maintaining sub-second response times and zero downtime. Your customers never experience slowdowns when it matters most."
    },
    {
      question: "What payment security compliance do you support?",
      answer: "We support PCI-DSS Level 1 compliance, the highest level of payment security certification. Our infrastructure includes end-to-end encryption, tokenization, and continuous compliance monitoring for credit card processing, digital wallets, and alternative payment methods."
    },
    {
      question: "Can you integrate with our existing e-commerce platform?",
      answer: "Yes, we integrate seamlessly with major platforms including Shopify, Magento, WooCommerce, BigCommerce, and custom solutions. Our approach enhances your existing infrastructure without requiring platform migrations or major code changes."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hitechlogic.com/#organization",
        "name": "HiTechLogic",
        "url": "https://hitechlogic.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hitechlogic.com/logo.png"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://hitechlogic.com/#website",
        "url": "https://hitechlogic.com",
        "name": "HiTechLogic",
        "publisher": { "@id": "https://hitechlogic.com/#organization" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://hitechlogic.com/industries/ecommerce/#breadcrumb",
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
            "name": "Industries",
            "item": "https://hitechlogic.com/industries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "E-commerce",
            "item": "https://hitechlogic.com/industries/ecommerce"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://hitechlogic.com/industries/ecommerce/#webpage",
        "url": "https://hitechlogic.com/industries/ecommerce",
        "name": "E-commerce Solutions | High-Velocity Commerce Infrastructure | HiTechLogic",
        "description": "High-velocity commerce with zero downtime. Peak traffic scaling, 99.999% uptime during sales, payment security compliance for e-commerce platforms.",
        "isPartOf": { "@id": "https://hitechlogic.com/#website" },
        "about": { "@id": "https://hitechlogic.com/#organization" },
        "breadcrumb": { "@id": "https://hitechlogic.com/industries/ecommerce/#breadcrumb" },
        "inLanguage": "en-US",
        "datePublished": "2023-01-01",
        "dateModified": "2025-01-01"
      },
      {
        "@type": "Service",
        "@id": "https://hitechlogic.com/industries/ecommerce/#service",
        "name": "E-commerce Infrastructure & Performance Solutions",
        "provider": { "@id": "https://hitechlogic.com/#organization" },
        "serviceType": "E-commerce Technology Infrastructure & Performance",
        "areaServed": "Worldwide",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://hitechlogic.com/industries/ecommerce",
          "servicePhone": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English"]
          }
        },
        "slogan": "High-velocity commerce with zero downtime",
        "description": "E-commerce infrastructure with peak traffic scaling, 99.999% uptime during sales events, payment security compliance, and real-time order processing.",
        "audience": {
          "@type": "Audience",
          "audienceType": "Chief Technology Officers, VP of Engineering, Director of E-commerce, Head of Platform Operations in retail and e-commerce companies"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "52",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://hitechlogic.com/industries/ecommerce/#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEO
        title="E-commerce Solutions | High-Velocity Commerce Infrastructure | HiTechLogic"
        description="High-velocity commerce with zero downtime. Peak traffic scaling, 99.999% uptime during sales, payment security compliance for e-commerce platforms."
        keywords="ecommerce infrastructure, high availability, peak traffic scaling, payment security compliance, order processing, shopping cart reliability, payment security, checkout optimization"
        canonical="https://hitechlogic.com/industries/ecommerce"
        schema={schema}
        ogType="website"
        ogImage="https://hitechlogic.com/images/industries/ecommerce-hero.jpg"
        twitterCard="summary_large_image"
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <ShoppingCart className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">E-commerce</span>
            </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            High-Velocity Commerce{" "}
            <span className="text-[hsl(var(--accent-blue))] block sm:inline">with Zero Downtime</span>
          </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">
              E-commerce companies depend on us to maintain peak performance during flash sales,
              holiday rushes, and viral marketing campaigns while protecting customer data.
            </p>

            <div className="mt-10">
              <Button variant="hero" size="xl" asChild className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <span>Schedule Peak Traffic Assessment</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {industry.metrics.map((metric) => {
                const IconComponent = iconMap[metric.icon] || CheckCircle2;
                return (
                  <div key={metric.label} className="text-center group">
                    <div className="flex justify-center mb-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-white/5 group-hover:from-[hsl(var(--accent-blue))]/20 group-hover:to-white/10 transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{metric.value}</div>
                    <div className="mt-2 text-sm font-medium text-slate-300">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Challenges vs Solutions */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] font-semibold text-sm mb-6">
                  <AlertTriangle className="h-4 w-4" />
                  Peak traffic challenges
                </div>
                <div className="space-y-4 text-slate-600">
                  {industry.challenges.map((challenge, index) => (
                    <p key={index} className="flex items-start gap-3">
                      <span className="text-[hsl(var(--accent-blue))] font-bold mt-1">→</span>
                      <span>{challenge}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] font-semibold text-sm mb-6">
                  <CheckCircle2 className="h-4 w-4" />
                  Our e-commerce solutions
                </div>
                <div className="space-y-4 text-slate-600">
                  {industry.solutions.map((solution, index) => (
                    <p key={index} className="flex items-start gap-3">
                      <span className="text-[hsl(var(--accent-blue))] font-bold mt-1">✓</span>
                      <span>{solution}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-space bg-gradient-to-br from-slate-50 to-[hsl(var(--accent-blue))]/15">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Converting clicks to customers with guaranteed reliability
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Your revenue depends on every transaction completing successfully.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {industry.services.map((service, index) => (
                <Card
                  key={service.id}
                  className="p-6 text-left h-full flex flex-col justify-between border-2 border-slate-100 bg-white/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[hsl(var(--accent-blue))]/30 group hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--navy))] mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="text-xs text-[hsl(var(--accent-blue))] font-semibold border-t border-slate-100 pt-3 mt-6">
                    {service.outcome}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mt-4 text-3xl font-bold text-[hsl(var(--navy))]">
                Commerce compliance we guarantee
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industry.compliance.map((compliance, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-[hsl(var(--accent-blue))]/30">
                  <Shield className="h-8 w-8 text-[hsl(var(--accent-blue))] mx-auto mb-3" />
                  <div className="text-sm font-semibold text-[hsl(var(--navy))]">{compliance}</div>
                  <div className="text-xs text-slate-500 mt-1">Certified</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-space bg-gradient-to-br from-slate-50 to-[hsl(var(--accent-blue))]/15">
          <div className="mx-auto w-full max-w-4xl px-6">
            <div className="text-center mb-16">
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                E-commerce infrastructure questions answered
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-2 border-[hsl(var(--accent-blue))]/20 overflow-hidden">
                  <button className="w-full p-6 text-left flex items-center justify-between hover:bg-[hsl(var(--accent-blue))]/15 transition-colors">
                    <span className="font-semibold text-[hsl(var(--navy))] pr-8">{faq.question}</span>
                    <ArrowRight className="h-5 w-5 text-[hsl(var(--accent-blue))] shrink-0" />
                  </button>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-[hsl(var(--accent-blue))]/20 pt-4">
                    {faq.answer}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-space bg-gradient-to-br from-[hsl(var(--accent-blue))] via-[hsl(var(--navy))]/80 to-[hsl(var(--navy))]">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to convert peak traffic into peak revenue?</h2>
            <p className="mt-6 text-xl text-white/80">
              Let's ensure your e-commerce platform can handle any traffic surge while
              maintaining the seamless shopping experience your customers expect.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--accent-blue))] hover:bg-white/90 hover:scale-105 transition-transform">
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Schedule Commerce Assessment</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform">
                <Link to="/industries">Explore Other Industries</Link>
              </Button>
            </div>

            <div className="mt-16 pt-8 border-t border-[hsl(var(--accent-blue))]/30">
              <div className="flex items-center justify-center gap-3 mb-4">
                <DollarSign className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                <span className="text-white font-semibold text-lg">Revenue Guarantee</span>
              </div>
              <p className="text-white/80 max-w-2xl mx-auto">
                We guarantee 99.999% uptime during peak events, or we'll provide infrastructure services
                at no cost until your next major sales period.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}