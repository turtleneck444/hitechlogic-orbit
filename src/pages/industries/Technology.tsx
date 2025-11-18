import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { CheckCircle2, TrendingUp, Zap, Shield, Code, Users, Activity, Globe, ArrowRight, AlertTriangle, Cpu, Database, Network, Star } from "lucide-react";
import { useState } from "react";
import { industries, getIndustryById } from "@/data/industries";

export default function Technology() {
  const industry = getIndustryById("technology");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!industry) return null;

  const iconMap: Record<string, any> = {
    CheckCircle: CheckCircle2,
    TrendingUp,
    Zap,
    Shield,
    Users,
    Activity,
    Globe,
    Star,
  };

  const transformationJourney = [
    {
      step: "1",
      title: "Assessment & Planning",
      description: "Evaluate current infrastructure, identify reliability gaps, and create a transformation roadmap aligned with development velocity goals.",
      duration: "Week 1-2",
    },
    {
      step: "2",
      title: "Infrastructure Modernization",
      description: "Implement cloud-native infrastructure with containerization, microservices support, and automated deployment pipelines.",
      duration: "Week 3-8",
    },
    {
      step: "3",
      title: "Observability & Automation",
      description: "Deploy comprehensive monitoring, implement automated CI/CD processes, and establish proactive incident management.",
      duration: "Week 9-16",
    },
    {
      step: "4",
      title: "Optimization & Scale",
      description: "Fine-tune performance, optimize costs, and implement continuous improvement processes that support rapid scaling.",
      duration: "Ongoing",
    },
  ];

  const faqs = [
    {
      question: "How do you support rapid deployment cycles without compromising reliability?",
      answer: "We implement blue-green deployments, canary releases, and comprehensive automated testing. Our CI/CD pipelines include security scanning, performance validation, and automated rollbacks. This enables daily deployments while maintaining 99.99% uptime across multiple environments including development, staging, and production.",
    },
    {
      question: "Can you scale during exponential growth phases without service degradation?",
      answer: "Yes. Our auto-scaling infrastructure uses predictive algorithms based on historical patterns, real-time metrics, and business indicators. During growth phases, we've successfully handled 300% year-over-year user growth while maintaining sub-second response times and zero downtime. Our infrastructure anticipates demand rather than reacting to it.",
    },
    {
      question: "How do you manage complex microservices architectures?",
      answer: "We provide unified observability across all services with distributed tracing, service mesh implementation, and automated dependency mapping. Our platform correlates events across microservices, predicts cascading failures, and implements circuit breakers. This gives you a single pane of glass for managing complexity while maintaining reliability.",
    },
    {
      question: "What happens to our existing development workflows?",
      answer: "We integrate seamlessly with your existing tools and workflows. Whether you're using GitHub, GitLab, Jenkins, or another CI/CD platform, we enhance what you have rather than forcing replacements. Our expertise complements your team's capabilities, allowing developers to focus on innovation while we handle the infrastructure complexity.",
    },
    {
      question: "How do you ensure security in high-velocity development environments?",
      answer: "Security is built into every stage of development through DevSecOps practices. Automated SAST/DAST scanning, container image security, infrastructure-as-code security validation, and continuous compliance monitoring. We implement zero-trust principles by default, ensuring security scales with your development velocity rather than slowing it down.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://hitechlogic.com/industries/technology#service",
        name: "Technology & Software Development Solutions",
        provider: {
          "@type": "Organization",
          name: "HiTechLogic",
          "@id": "https://hitechlogic.com/#organization"
        },
        serviceType: "Infrastructure Reliability for Technology Companies",
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://hitechlogic.com/industries/technology",
          servicePhone: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["English"]
          }
        },
        slogan: "Accelerate innovation without sacrificing reliability",
        description: "Infrastructure reliability solutions for technology companies enabling 99.99% uptime, rapid deployment at 20x/day frequency, 90% MTTR reduction, and zero security incidents across complex microservices architectures.",
        offers: {
          "@type": "Offer",
          category: "Technology Sector Solutions",
          itemOffered: {
            "@type": "Service",
            name: "Technology Infrastructure Reliability",
            description: "Enterprise-grade infrastructure operations, cloud management, automation, and security for technology companies scaling rapidly."
          }
        },
        audience: {
          "@type": "Audience",
          audienceType: "Chief Technology Officers, Chief Information Officers, VP of Engineering, VP of Infrastructure, DevOps Directors in technology companies"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "47",
          bestRating: "5",
          worstRating: "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://hitechlogic.com/industries/technology#faq",
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
        title="Technology & Software Development Solutions | Infrastructure Reliability | HiTechLogic"
        description="Accelerate innovation without sacrificing reliability. 99.99% uptime infrastructure, 20x daily deployments, automated scaling for technology companies."
        keywords="technology infrastructure, software development, DevOps reliability, microservices architecture, cloud-native development, CI/CD automation, infrastructure as code, container orchestration"
        canonical="https://hitechlogic.com/industries/technology"
        schema={schema}
        ogType="website"
        ogImage="https://hitechlogic.com/images/industries/tech-hero.jpg"
        twitterCard="summary_large_image"
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="animate-[fade-in_0.5s_ease-out]">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Code className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
              </div>
              <span className="eyebrow text-white/90">Technology & Software Development</span>
            </div>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-[fade-in_0.6s_ease-out_0.1s_both]">
            Accelerate innovation<br />
            <span className="text-[hsl(var(--accent-blue))]">without sacrificing reliability</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed animate-[fade-in_0.7s_ease-out_0.2s_both]">
            Technology companies depend on infrastructure that enables rapid iteration and seamless scaling.
            We provide the reliability layer that keeps your development velocity high while ensuring customer trust.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-in_0.8s_ease-out_0.3s_both]">
            <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(139,92,246,0.8)] hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Discuss Your Tech Stack</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-[fade-in_0.9s_ease-out_0.4s_both]">
            {industry.metrics.map((metric) => {
              const IconComponent = iconMap[metric.icon] || CheckCircle2;
              return (
                <div key={metric.label} className="text-center group hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center mb-2">
                    <IconComponent className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-blue))]">{metric.value}</div>
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-700 font-semibold text-sm mb-6">
                <AlertTriangle className="h-4 w-4" />
                Development velocity challenges
              </div>
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6">
                Innovation can't wait for infrastructure
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-sm mb-6">
                <CheckCircle2 className="h-4 w-4" />
                Our technology solutions
              </div>
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6">
                Reliable infrastructure that scales with innovation
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
                    <span>Get Technology Assessment</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-[hsl(var(--accent-blue))]/15">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Implementation roadmap</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              From constrained to unlimited scalability
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              A systematic approach to building infrastructure that supports your innovation velocity.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--accent-blue))]/30 via-[hsl(var(--accent-blue))]/40 to-[hsl(var(--accent-blue))]/30" />

            <div className="space-y-12">
              {transformationJourney.map((phase, index) => (
                <div key={phase.step} className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {index % 2 === 0 ? (
                    <>
                      <Card className="p-8 border-2 border-[hsl(var(--accent-blue))]/30 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-white hover:shadow-xl transition-all md:ml-auto">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-blue))]/70 text-white font-bold text-xl shadow-lg">
                            {phase.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{phase.title}</h3>
                            <span className="text-sm text-[hsl(var(--accent-blue))] font-semibold">{phase.duration}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                      </Card>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <Card className="p-8 border-2 border-[hsl(var(--accent-blue))]/30 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-white hover:shadow-xl transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-blue))]/70 text-white font-bold text-xl shadow-lg">
                            {phase.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{phase.title}</h3>
                            <span className="text-sm text-[hsl(var(--accent-blue))] font-semibold">{phase.duration}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                      </Card>
                    </>
                  )}
                  {/* Center Circle */}
                  <div className="hidden md:block absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[hsl(var(--accent-blue))] border-4 border-white shadow-lg z-10" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" asChild className="bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/90">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Start Your Journey</span>
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
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Service integration</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Specialized services for technology companies
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Our seven service pillars work together to create technology infrastructure that accelerates innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.services.map((service, index) => (
                <Card
                  key={service.id}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/30 group hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <h3 className="text-lg font-semibold text-[hsl(var(--navy))] mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="text-xs text-[hsl(var(--accent-blue))] font-semibold border-t border-slate-100 pt-3">
                  {service.outcome}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-[hsl(var(--accent-blue))]/15">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Ideal for</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Technology leaders</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Whether you're scaling a startup, managing rapid growth, or leading enterprise transformation,
                our solutions are designed for technology decision-makers who need reliability at scale.
              </p>
            </div>
            <div className="space-y-3">
              {industry.audience.map((role, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--accent-blue))]/20 to-transparent hover:from-[hsl(var(--accent-blue))]/30 transition-all hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <Users className="h-5 w-5 text-[hsl(var(--accent-blue))] shrink-0" />
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
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Standards & compliance</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Built for enterprise technology environments
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

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" asChild className="bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/90">
              <Link to="/case-studies">View Technology Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-[hsl(var(--accent-blue))]/15">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Technical questions</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
              Everything you need to know about our technology solutions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-[hsl(var(--accent-blue))]/20 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[hsl(var(--accent-blue))]/15 transition-colors"
                >
                  <span className="font-semibold text-[hsl(var(--navy))] pr-8">{faq.question}</span>
                  <ArrowRight
                    className={`h-5 w-5 text-[hsl(var(--accent-blue))] shrink-0 transition-transform ${openFaq === index ? 'rotate-90' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-[hsl(var(--accent-blue))]/20 pt-4">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Have more technical questions?</p>
            <Button variant="outline" size="lg" asChild className="border-[hsl(var(--accent-blue))] text-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/10">
              <Link to="/contact">Connect with Engineering Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-space bg-gradient-to-br from-[hsl(var(--accent-blue))] via-[hsl(var(--navy))]/80 to-[hsl(var(--navy))]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to accelerate your technology innovation?</h2>
          <p className="mt-6 text-xl text-white/80">
            Let's assess your current infrastructure and build a plan for reliable scaling that supports
            your development velocity without compromise.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--accent-blue))] hover:bg-white/90 hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Schedule Technology Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform">
              <Link to="/industries">Explore Other Industries</Link>
            </Button>
          </div>

          {/* Success Guarantee */}
          <div className="mt-16 pt-8 border-t border-[hsl(var(--accent-blue))]/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
              <span className="text-white font-semibold text-lg">Velocity Guarantee</span>
            </div>
            <p className="text-white/80 max-w-2xl mx-auto">
              We guarantee your deployment frequency will increase by 3x within 90 days, or we'll provide
              infrastructure services at no cost until you achieve your reliability goals.
            </p>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
