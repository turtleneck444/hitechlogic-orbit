import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Cloud, Shield, FileText, Lock, Activity, Users, Zap, ArrowRight, AlertTriangle } from "lucide-react";
import { industries, getIndustryById } from "@/data/industries";

export default function Saas() {
  const industry = getIndustryById("saas");

  if (!industry) return null;

  const iconMap: Record<string, any> = {
    CheckCircle: CheckCircle2,
    TrendingUp: Zap,
    ShieldCheck: Shield,
    Shield,
    Lock,
    FileText,
    Activity,
    Users,
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SaaS Infrastructure & Enterprise Reliability Solutions",
    provider: {
      "@type": "Organization",
      name: "HiTechLogic",
      "@id": "https://hitechlogic.com/#organization"
    },
    slogan: "Enterprise-grade reliability for SaaS platforms",
    description: "SaaS infrastructure with 99.999% uptime SLA, multi-tenant scaling to 10M+ users, SOC 2 compliance, and enterprise-grade security."
  };

  return (
    <>
      <SEO
        title="SaaS Solutions | Enterprise-Grade Infrastructure & Reliability | HiTechLogic"
        description="Enterprise-grade reliability for SaaS platforms. 99.999% uptime SLA, multi-tenant scaling, SOC 2 compliance for B2B and enterprise SaaS."
        keywords="saas infrastructure, multi-tenant architecture, enterprise reliability, SOC 2 compliance, cloud scaling, saas security, uptime SLAs, enterprise software"
        canonical="https://hitechlogic.com/industries/saas"
        schema={schema}
        ogType="website"
        ogImage="https://hitechlogic.com/images/industries/saas-hero.jpg"
        twitterCard="summary_large_image"
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="animate-[fade-in_0.5s_ease-out]">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-500/25">
                  <Cloud className="h-7 w-7 text-white" />
                </div>
                <span className="eyebrow text-purple-400">SaaS & Cloud Software</span>
              </div>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-[fade-in_0.6s_ease-out_0.1s_both]">
              Enterprise-grade reliability<br />
              <span className="text-purple-400">for SaaS platforms</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed animate-[fade-in_0.7s_ease-out_0.2s_both]">
              SaaS companies rely on our infrastructure reliability to deliver the uptime SLAs
              their enterprise customers expect, while enabling rapid feature development and global scalability.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-[fade-in_0.8s_ease-out_0.3s_both]">
              <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(147,51,234,0.8)] hover:scale-105 transition-transform">
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Schedule Enterprise Assessment</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white hover:text-slate-900 hover:scale-105 transition-all">
                <Link to="/demo">View Multi-Tenant Platform Demo</Link>
              </Button>
            </div>

            {/* Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-[fade-in_0.9s_ease-out_0.4s_both]">
              {industry.metrics.map((metric) => {
                const IconComponent = iconMap[metric.icon] || CheckCircle2;
                return (
                  <div key={metric.label} className="text-center group hover:scale-105 transition-transform">
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-purple-400">{metric.value}</div>
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
                  Enterprise SaaS challenges
                </div>
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-6">
                  <CheckCircle2 className="h-4 w-4" />
                  Our SaaS solutions
                </div>
                <div className="space-y-4 text-slate-600">
                  {industry.solutions.map((solution, index) => (
                    <p key={index} className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold mt-1">✓</span>
                      <span>{solution}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-space bg-gradient-to-br from-slate-50 to-purple-50/30">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Scaling SaaS platforms with enterprise-grade infrastructure
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Your reputation depends on every enterprise customer experiencing flawless service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.services.map((service, index) => (
                <Card
                  key={service.id}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-300 group hover:-translate-y-1"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <h3 className="text-lg font-semibold text-[hsl(var(--navy))] mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="text-xs text-purple-600 font-semibold border-t border-slate-100 pt-3">
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
                Enterprise compliance we guarantee
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {industry.compliance.map((compliance, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-purple-300">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-sm font-semibold text-[hsl(var(--navy))]">{compliance}</div>
                  <div className="text-xs text-slate-500 mt-1">Certified</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-space bg-gradient-to-br from-purple-600 to-violet-600">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to deliver enterprise-grade SaaS reliability?</h2>
            <p className="mt-6 text-xl text-purple-100">
              Let's ensure your platform can scale to millions of users while maintaining
              the reliability and compliance your enterprise customers demand.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="xl" asChild className="bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-transform">
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Schedule SaaS Assessment</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform">
                <Link to="/industries">Explore Other Industries</Link>
              </Button>
            </div>

            <div className="mt-16 pt-8 border-t border-purple-400/30">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Cloud className="h-6 w-6 text-purple-200" />
                <span className="text-purple-100 font-semibold text-lg">Enterprise Guarantee</span>
              </div>
              <p className="text-purple-100/90 max-w-2xl mx-auto">
                We guarantee 99.999% uptime and enterprise-grade performance, or we'll provide cloud infrastructure services
                at no cost until your platform achieves enterprise reliability standards.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
