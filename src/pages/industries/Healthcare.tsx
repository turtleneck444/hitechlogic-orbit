import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Heart, Shield, FileText, Lock, Activity, Users, ArrowRight, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { industries, getIndustryById } from "@/data/industries";

export default function Healthcare() {
  const industry = getIndustryById("healthcare");

  if (!industry) return null;

  const iconMap: Record<string, any> = {
    CheckCircle: CheckCircle2,
    ShieldCheck: Shield,
    Shield,
    Lock,
    FileText,
    Activity,
    Users,
    Heart,
  };

  const faqs = [
    {
      question: "How do you ensure healthcare compliance across our healthcare systems?",
      answer: "We implement comprehensive healthcare compliance automation with continuous monitoring, access controls, and audit trail generation. Our zero-trust architecture ensures patient data protection while maintaining care delivery capabilities. We provide automated compliance reporting and support for regulatory risk assessments and compliance frameworks.",
    },
    {
      question: "What happens during critical patient care moments if systems fail?",
      answer: "Our infrastructure is designed for healthcare's mission-critical requirements. We implement redundant systems with automated failover in under 30 seconds, ensuring continuous availability for EHR systems, clinical decision support, and patient monitoring. Our 24/7 clinical operations support means instant incident response with healthcare domain expertise.",
    },
    {
      question: "Can you integrate with our existing EHR and clinical systems?",
      answer: "Yes, we specialize in healthcare system integration. We work with major EHR platforms (Epic, Cerner, Meditech), HL7 interfaces, FHIR standards, and legacy system modernization. Our approach maintains data integrity while providing unified monitoring and management across your entire healthcare technology ecosystem.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://hitechlogic.com/industries/healthcare#service",
    name: "Healthcare Infrastructure & Compliance Solutions",
    provider: {
      "@type": "Organization",
      name: "HiTechLogic",
      "@id": "https://hitechlogic.com/#organization"
    },
    slogan: "Patient safety and compliance through technology reliability",
    description: "Healthcare infrastructure with regulatory compliance, 99.999% uptime for clinical systems, zero patient data breaches, and patient safety monitoring for hospitals and healthcare providers."
  };

  return (
    <>
      <SEO
        title="Healthcare Solutions | Patient Safety Infrastructure | HiTechLogic"
        description="Patient safety and compliance through technology reliability. Healthcare compliance automation, 99.999% clinical system uptime, zero patient data breaches for hospitals and healthcare organizations."
        keywords="healthcare infrastructure, healthcare compliance, patient safety, clinical systems, electronic health records, patient data protection, healthcare IT, medical technology"
        canonical="https://hitechlogic.com/industries/healthcare"
        schema={schema}
        ogType="website"
        ogImage="https://hitechlogic.com/images/industries/healthcare-hero.jpg"
        twitterCard="summary_large_image"
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Heart className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Healthcare</span>
            </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            Patient Safety Through{" "}
            <span className="text-[hsl(var(--accent-blue))] block sm:inline">Technology Reliability</span>
          </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">
              Healthcare organizations trust us to safeguard patient data, ensure system availability during critical moments,
              and maintain strict regulatory compliance with healthcare standards.
            </p>

            <div className="mt-10">
              <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(139,92,246,0.8)] hover:shadow-[0_25px_45px_-12px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <span>Schedule Healthcare Assessment</span>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6">
                Critical patient care systems cannot afford downtime
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent-blue))]/10 text-[hsl(var(--accent-blue))] font-semibold text-sm mb-6">
                <AlertTriangle className="h-4 w-4" />
                Healthcare reliability challenges
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
                Our healthcare solutions
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
                Comprehensive healthcare infrastructure solutions
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Protecting patient lives through technology you can trust.
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
                Healthcare compliance frameworks we support
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
                Healthcare technology questions answered
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
            <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to prioritize patient safety through technology?</h2>
            <p className="mt-6 text-xl text-white/80">
              Let's ensure your clinical systems, patient data, and care delivery technology
              are as reliable as the healthcare professionals who depend on them.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--accent-blue))] hover:bg-white/90 hover:scale-105 transition-transform">
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Schedule Patient Safety Assessment</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform">
                <Link to="/industries">Explore Other Industries</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
