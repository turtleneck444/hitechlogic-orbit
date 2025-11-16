import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { CheckCircle2, TrendingUp, Shield, FileText, Lock, Activity, DollarSign, ArrowRight, AlertTriangle, Banknote, Users } from "lucide-react";
import { useState } from "react";
import { industries, getIndustryById } from "@/data/industries";

export default function FinancialServices() {
  const industry = getIndustryById("financial-services");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!industry) return null;

  const iconMap: Record<string, any> = {
    CheckCircle: CheckCircle2,
    TrendingUp,
    ShieldCheck: Shield,
    Shield,
    Lock,
    FileText,
    Activity,
    Users,
  };

  const transformationJourney = [
    {
      step: "1",
      title: "Compliance Assessment & Risk Analysis",
      description: "Complete audit of current security controls, regulatory compliance status, and risk exposure across all financial operations.",
      duration: "Week 1-2",
    },
    {
      step: "2",
      title: "Security Infrastructure Implementation",
      description: "Deploy zero-trust architecture, identity governance, and continuous monitoring across all financial systems.",
      duration: "Week 3-8",
    },
    {
      step: "3",
      title: "Operational Reliability & Performance",
      description: "Implement 99.999% availability infrastructure, automated failover, and real-time performance monitoring.",
      duration: "Week 9-16",
    },
    {
      step: "4",
      title: "Continuous Compliance & Optimization",
      description: "Automated compliance reporting, proactive threat monitoring, and continuous optimization for regulatory requirements.",
      duration: "Ongoing",
    },
  ];

  const faqs = [
    {
      question: "How do you ensure 99.999% uptime for financial transaction systems?",
      answer: "We implement multi-region active-active architectures with automated failover, real-time monitoring, and predictive scaling. Our infrastructure uses redundant systems across multiple availability zones with automated recovery procedures that complete within seconds. We maintain comprehensive testing protocols including chaos engineering to ensure reliability under extreme conditions.",
    },
    {
      question: "What compliance frameworks do you support for financial institutions?",
      answer: "We support all major financial compliance frameworks including SOC 2 Type II, PCI DSS, GLBA, FFIEC, ISO 27001, GDPR, and HIPAA. Our automated compliance systems continuously monitor control effectiveness, generate audit trails, and provide real-time reporting. We maintain certified auditors and can help with regulatory examinations and certifications.",
    },
    {
      question: "How do you protect sensitive financial data and customer information?",
      answer: "We implement defense-in-depth security with zero-trust architecture, end-to-end encryption, and behavioral anomaly detection. Data is encrypted at rest and in transit, access is continuously verified, and all privileged actions are monitored. We maintain detailed audit logs for forensic analysis and provide incident response capabilities for breach containment within minutes.",
    },
    {
      question: "Can you handle legacy system modernization without disrupting operations?",
      answer: "Yes, we excel at legacy modernization through phased migration strategies. We create detailed migration plans, implement gradual cutover processes, and maintain parallel operations during transition. Our approach minimizes risk through comprehensive testing, rollback capabilities, and continuous monitoring. We can modernize systems while maintaining 100% uptime and compliance.",
    },
    {
      question: "What are your fraud detection and prevention capabilities?",
      answer: "Our AI-powered fraud detection analyzes transaction patterns, user behavior, and geographic data in real-time. We correlate multiple data sources to identify suspicious activities within milliseconds and can implement automated blocking and alerting. Our systems learn from historical fraud patterns and adapt to emerging threats while maintaining very low false-positive rates.",
    },
    {
      question: "How do you support financial reporting and audit requirements?",
      answer: "We provide immutable audit trails, automated compliance reporting, and real-time monitoring dashboards. Our systems generate SOC 2 reports, maintain detailed transaction logs, and support regulatory filings. We offer audit support services and can help prepare for examinations with comprehensive documentation and evidence collection.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://hitechlogic.com/industries/financial-services#service",
        name: "Financial Services Infrastructure & Compliance Solutions",
        provider: {
          "@type": "Organization",
          name: "HiTechLogic",
          "@id": "https://hitechlogic.com/#organization"
        },
        serviceType: "Financial Technology Infrastructure & Regulatory Compliance",
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://hitechlogic.com/industries/financial-services",
          servicePhone: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["English"]
          }
        },
        slogan: "Compliance, security, and availability for financial operations",
        description: "Financial services infrastructure with 99.999% uptime SLA, zero breaches, 100% audit success, and fraud prevention for SOC 2, PCI DSS, GLBA, FFIEC compliance. Zero-trust security for banking and fintech operations.",
        offers: {
          "@type": "Offer",
          category: "Financial Services Technology Solutions",
          itemOffered: {
            "@type": "Service",
            name: "Financial Services Infrastructure Reliability",
            description: "Enterprise-grade infrastructure, regulatory compliance automation, and security for banks, fintech companies, and financial institutions."
          }
        },
        audience: {
          "@type": "Audience",
          audienceType: "Chief Information Security Officers, Chief Compliance Officers, Chief Technology Officers, VP of Risk, Director of Operations in financial services"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "41",
          bestRating: "5",
          worstRating: "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://hitechlogic.com/industries/financial-services#faq",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEO
        title="Financial Services Solutions | Banking Infrastructure & Compliance | HiTechLogic"
        description="Compliance, security, and availability for financial operations. 99.999% uptime SLA, zero breaches, SOC 2/PCI DSS compliance automation for banks and fintech."
        keywords="financial services infrastructure, banking technology, fintech operations, SOC 2 compliance, PCI DSS, GLBA compliance, financial security, fraud prevention, regulatory compliance, banking infrastructure"
        canonical="https://hitechlogic.com/industries/financial-services"
        schema={schema}
        ogType="website"
        ogImage="https://hitechlogic.com/images/industries/finance-hero.jpg"
        twitterCard="summary_large_image"
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-[hsl(var(--navy))]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="animate-[fade-in_0.5s_ease-out]">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <span className="eyebrow text-blue-400">Financial Services</span>
            </div>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-[fade-in_0.6s_ease-out_0.1s_both]">
            Compliance, security,<br />
            <span className="text-blue-400">and availability</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed animate-[fade-in_0.7s_ease-out_0.2s_both]">
            Banks, fintech companies, and financial institutions rely on us to maintain regulatory compliance,
            ensure system security, and deliver the 99.999% uptime their customers expect.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-in_0.8s_ease-out_0.3s_both]">
            <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(59,130,246,0.8)] hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Schedule Compliance Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white hover:text-slate-900 hover:scale-105 transition-all">
              <Link to="/demo">View Risk Platform Demo</Link>
            </Button>
          </div>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-[fade-in_0.9s_ease-out_0.4s_both]">
            {industry.metrics.map((metric) => {
              const IconComponent = iconMap[metric.icon] || CheckCircle2;
              return (
                <div key={metric.label} className="text-center group hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center mb-2">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-400">{metric.value}</div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-6">
                <AlertTriangle className="h-4 w-4" />
                Regulatory compliance challenges
              </div>
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6">
                Financial operations demand perfection
              </h2>
              <div className="space-y-4 text-slate-600">
                {industry.challenges.map((challenge, index) => (
                  <p key={index} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">→</span>
                    <span>{challenge}</span>
                  </p>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
                <CheckCircle2 className="h-4 w-4" />
                Our financial solutions
              </div>
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6">
                Regulatory compliance and absolute security
              </h2>
              <div className="space-y-4 text-slate-600">
                {industry.solutions.map((solution, index) => (
                  <p key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span>{solution}</span>
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="primary" size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Get Compliance Assessment</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-blue-600">Implementation roadmap</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              From compliant to continuously compliant
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              A regulatory-focused approach to building financial-grade infrastructure.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200" />

            <div className="space-y-12">
              {transformationJourney.map((phase, index) => (
                <div key={phase.step} className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {index % 2 === 0 ? (
                    <>
                      <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 to-white hover:shadow-xl transition-all md:ml-auto">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-xl shadow-lg">
                            {phase.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{phase.title}</h3>
                            <span className="text-sm text-blue-600 font-semibold">{phase.duration}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                      </Card>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <Card className="p-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 to-white hover:shadow-xl transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-xl shadow-lg">
                            {phase.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{phase.title}</h3>
                            <span className="text-sm text-blue-600 font-semibold">{phase.duration}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                      </Card>
                    </>
                  )}
                  {/* Center Circle */}
                  <div className="hidden md:block absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-lg z-10" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Start Compliance Journey</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-blue-600">Service integration</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Comprehensive financial services solutions
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Our seven service pillars provide the complete infrastructure foundation for financial operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.services.map((service, index) => (
              <Card
                key={service.id}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 group hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <h3 className="text-lg font-semibold text-[hsl(var(--navy))] mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="text-xs text-blue-600 font-semibold border-t border-slate-100 pt-3">
                  {service.outcome}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow text-blue-600">Ideal for</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Financial decision-makers</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Whether you're a traditional bank, fintech startup, or financial services provider,
                our solutions ensure regulatory compliance and operational excellence.
              </p>
            </div>
            <div className="space-y-3">
              {industry.audience.map((role, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <Users className="h-5 w-5 text-blue-600 shrink-0" />
                  <span className="text-slate-700 font-medium">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-blue-600">Regulatory standards</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Comprehensive financial compliance frameworks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industry.compliance.map((compliance, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-blue-300">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-sm font-semibold text-[hsl(var(--navy))]">{compliance}</div>
                <div className="text-xs text-slate-500 mt-1">Certified</div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/case-studies">View Financial Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="eyebrow text-blue-600">Compliance questions</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
              Everything you need to know about our financial solutions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-blue-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors"
                >
                  <span className="font-semibold text-[hsl(var(--navy))] pr-8">{faq.question}</span>
                  <ArrowRight
                    className={`h-5 w-5 text-blue-600 shrink-0 transition-transform ${openFaq === index ? 'rotate-90' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-blue-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Have more compliance questions?</p>
            <Button variant="outline" size="lg" asChild className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link to="/contact">Connect with Compliance Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-space bg-gradient-to-br from-blue-600 to-[hsl(var(--navy))]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to achieve financial-grade reliability?</h2>
          <p className="mt-6 text-xl text-blue-100">
            Let's assess your current compliance posture and implement the infrastructure foundation
            that regulatory examiners and customers expect from financial institutions.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="xl" asChild className="bg-white text-blue-600 hover:bg-white/90 hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Schedule Risk Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform">
              <Link to="/industries">Explore Other Industries</Link>
            </Button>
          </div>

          {/* Guarantee */}
          <div className="mt-16 pt-8 border-t border-blue-400/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-blue-200" />
              <span className="text-blue-100 font-semibold text-lg">Financial Guarantee</span>
            </div>
            <p className="text-blue-100/90 max-w-2xl mx-auto">
              We guarantee 99.999% uptime and zero security breaches, or we'll provide financial services
              at no cost until you achieve your compliance and reliability objectives.
            </p>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
