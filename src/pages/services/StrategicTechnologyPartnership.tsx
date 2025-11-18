import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Handshake, Users, Target, TrendingUp, Calendar, MessageSquare, CheckCircle2, ArrowRight, BookOpen, Lightbulb, Award, Compass, AlertCircle, Shield, ChevronDown, Building, Clock } from "lucide-react";
import { useState } from "react";

const capabilities = [
  {
    icon: Target,
    title: "Quarterly Strategic Reviews",
    description: "Executive-level planning sessions to align technology initiatives with business objectives and review progress against goals.",
  },
  {
    icon: Users,
    title: "Embedded Reliability Coaching",
    description: "Dedicated coaches work alongside your teams to build reliability practices, mentor engineers, and transfer knowledge.",
  },
  {
    icon: Compass,
    title: "Technology Roadmap Planning",
    description: "Multi-year strategic planning that balances innovation, technical debt, reliability investments, and business priorities.",
  },
  {
    icon: MessageSquare,
    title: "Executive Communications",
    description: "Board-ready presentations, executive summaries, and stakeholder communications that translate technical work into business impact.",
  },
  {
    icon: BookOpen,
    title: "Best Practice Implementation",
    description: "Guided adoption of industry-leading practices for incident management, on-call operations, change management, and more.",
  },
  {
    icon: Award,
    title: "Center of Excellence Development",
    description: "Build internal expertise through training programs, documentation, and establishing reliability centers of excellence.",
  },
];

const benefits = [
  "Align technology investments with strategic business objectives through executive partnership",
  "Build internal reliability capabilities that outlast the engagement",
  "Accelerate cultural transformation with embedded coaching and change management",
  "Gain executive confidence through transparent reporting and strategic insights",
  "Navigate complex technology decisions with experienced strategic guidance",
  "Create sustainable engineering practices that scale with organizational growth",
];

const useCases = [
  {
    title: "Technology Leadership Transition",
    description: "Navigate CTO or VP Engineering transitions with strategic continuity, institutional knowledge preservation, and leadership coaching.",
    stage: "Leadership",
    icon: Users,
  },
  {
    title: "Scale-Up Engineering Maturity",
    description: "Transform startup engineering practices to enterprise-grade reliability as you scale from 10 to 100+ engineers.",
    stage: "Growth",
    icon: TrendingUp,
  },
  {
    title: "Post-Acquisition Integration",
    description: "Harmonize technology stacks, operational practices, and team cultures following M&A with minimal disruption.",
    stage: "M&A",
    icon: Handshake,
  },
  {
    title: "Digital Transformation Enablement",
    description: "Guide legacy enterprises through cloud migration, platform modernization, and operational excellence transformation.",
    stage: "Transformation",
    icon: Compass,
  },
];

const metrics = [
  { label: "Client Success Score", value: "92", icon: Award },
  { label: "Strategic Impact", value: "95%", icon: Target },
  { label: "Engagement Quality", value: "4.8/5", icon: Users },
  { label: "Partnership Value", value: "High", icon: TrendingUp },
];

const partnershipJourney = [
  {
    step: "1",
    title: "Discovery & Alignment",
    description: "Comprehensive assessment of technology organization, strategic objectives, team capabilities, and cultural dynamics. Establish partnership goals and success metrics.",
    duration: "Month 1",
  },
  {
    step: "2",
    title: "Strategic Planning",
    description: "Develop technology roadmap, define OKRs, prioritize initiatives, and create transformation plan. Align with C-suite on strategic direction and investment priorities.",
    duration: "Month 2-3",
  },
  {
    step: "3",
    title: "Embedded Engagement",
    description: "Deploy coaches to work alongside teams, implement best practices, establish operational cadences, and build internal capabilities through hands-on mentorship.",
    duration: "Month 4-12",
  },
  {
    step: "4",
    title: "Strategic Partnership",
    description: "Quarterly strategic reviews, ongoing executive guidance, continuous capability building, and long-term relationship as trusted technology advisor.",
    duration: "Year 2+",
  },
];

export default function StrategicTechnologyPartnership() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes this different from hiring a consultant?",
      answer: "Traditional consultants deliver projects and leave. We build long-term partnerships focused on sustainable capability building. Our coaches work embedded with your teams (not separate), transfer knowledge continuously, and measure success by your independence, not dependency. We succeed when you no longer need us—but clients typically renew for 3+ years because the partnership delivers compounding value.",
    },
    {
      question: "How do you integrate with our existing leadership team?",
      answer: "We operate as an extension of your leadership, not a replacement. Our senior partners work directly with your CTO/VP Engineering on strategic planning. Our coaches collaborate with your engineering managers and ICs. We participate in your existing meetings and processes rather than creating parallel structures. Think of us as the experienced co-founder or technical advisor you wish you had.",
    },
    {
      question: "What does 'embedded coaching' actually mean in practice?",
      answer: "Our coaches spend 2-3 days per week working alongside your teams. They participate in standups, code reviews, incident response, and on-call rotations. They mentor engineers through pair programming and shadowing. They facilitate retrospectives and help implement process improvements. It's hands-on collaboration, not classroom training. Knowledge transfer happens through doing, not decks.",
    },
    {
      question: "Can you help with both technology strategy AND execution?",
      answer: "Absolutely. That's our sweet spot. We combine strategic planning (roadmapping, prioritization, investment decisions) with tactical execution (coaching, implementation, operational improvements). Many clients engage us precisely because they need strategic guidance that's grounded in operational reality. We've been in your shoes and understand the gap between strategy and execution.",
    },
    {
      question: "How do you measure success in a strategic partnership?",
      answer: "We establish clear success metrics during discovery, aligned to your business objectives. Common metrics include: engineering velocity (deployment frequency, lead time), reliability improvements (uptime, MTTR), team health (satisfaction scores, retention), capability maturity (practice adoption, knowledge transfer), and executive confidence (board feedback, strategic alignment). Quarterly reviews track progress and adjust as needed.",
    },
    {
      question: "What happens at the end of the engagement?",
      answer: "Our goal is graduation, not perpetual dependency. We systematically transfer knowledge, document practices, train internal leaders, and build self-sufficiency. Most engagements transition from intensive embedded coaching (years 1-2) to strategic advisory (year 3+) to alumni relationships (ongoing). Many clients graduate to point consultations for major decisions while operating independently day-to-day.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://hitechlogic.com/services/strategic-technology-partnership#service",
        name: "Strategic Technology Partnership",
        provider: {
          "@type": "Organization",
          name: "HiTechLogic",
          "@id": "https://hitechlogic.com/#organization"
        },
        serviceType: "Strategic Technology Advisory & Partnership",
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://hitechlogic.com/services/strategic-technology-partnership",
          servicePhone: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["English"]
          }
        },
        slogan: "Your Trusted Technology Partner",
        description: "Executive-level technology partnership with strategic guidance, embedded coaching, and capability building. 92 NPS, 100% C-suite satisfaction, 3.5 year average engagement length, 85% multi-year renewals. Build sustainable engineering excellence with expert mentorship.",
        offers: {
          "@type": "Offer",
          category: "Strategic Technology Advisory",
          itemOffered: {
            "@type": "Service",
            name: "Strategic Technology Partnership",
            description: "Comprehensive technology partnership including executive advisory, embedded coaching, roadmap planning, capability building, and culture transformation. Long-term partnership focused on sustainable excellence."
          }
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Strategic Advisory Services",
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
          audienceType: "CTOs, VPs of Engineering, Engineering Directors, Technical Executives, C-Suite Leadership"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "88",
          bestRating: "5",
          worstRating: "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://hitechlogic.com/services/strategic-technology-partnership#faq",
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
        "@id": "https://hitechlogic.com/services/strategic-technology-partnership#breadcrumb",
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
            name: "Strategic Technology Partnership",
            item: "https://hitechlogic.com/services/strategic-technology-partnership"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Strategic Technology Partnership | Executive CTO Advisory & Coaching | HiTechLogic"
        description="Transform engineering culture with executive-level technology partnership. 92 NPS, 3.5yr avg engagement, embedded coaching, roadmap planning. Build sustainable excellence with strategic guidance from experienced technology leaders."
        keywords="technology partnership, CTO advisory, engineering coaching, technical leadership, technology strategy, engineering transformation, executive coaching, capability building, engineering excellence, strategic planning"
        canonical="https://hitechlogic.com/services/strategic-technology-partnership"
        schema={schema}
        ogType="website"
        ogImage="https://hitechlogic.com/images/services/strategic-partnership-og.jpg"
        twitterCard="summary_large_image"
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="animate-[fade-in_0.5s_ease-out]">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] shadow-lg shadow-[hsl(var(--accent-blue))]/25">
                <Handshake className="h-7 w-7 text-white" />
              </div>
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Strategic Technology Partnership</span>
            </div>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-[fade-in_0.6s_ease-out_0.1s_both]">
            Your Trusted<br />
            <span className="text-[hsl(var(--accent-blue))]">Technology Partner</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed animate-[fade-in_0.7s_ease-out_0.2s_both]">
            Executive-level partnership with strategic guidance, embedded coaching, and roadmap planning
            that builds sustainable reliability practices and engineering excellence.
          </p>

          <div className="mt-10 animate-[fade-in_0.8s_ease-out_0.3s_both]">
            <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_hsl(var(--accent-blue))] hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Request Partnership Discussion</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-[fade-in_0.9s_ease-out_0.4s_both]">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center group hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-2">
                  <metric.icon className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-blue))]">{metric.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--graphite))] py-8">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[hsl(var(--accent-blue))]">92</div>
              <div className="mt-1 text-sm text-slate-300">Net Promoter Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[hsl(var(--accent-blue))]">100%</div>
              <div className="mt-1 text-sm text-slate-300">C-Suite Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[hsl(var(--accent-blue))]">3.5 yrs</div>
              <div className="mt-1 text-sm text-slate-300">Average Engagement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[hsl(var(--accent-blue))]">85%</div>
              <div className="mt-1 text-sm text-slate-300">Multi-Year Renewals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-6">
                <AlertCircle className="h-4 w-4" />
                The Challenge
              </div>
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6">
                Technology leadership gaps holding you back
              </h2>
              <div className="space-y-4 text-slate-600">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>No clear technology roadmap aligned with business strategy</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Engineering teams lack reliability practices and operational maturity</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Leadership transitions create knowledge loss and strategic uncertainty</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Scaling challenges as organization grows beyond startup phase</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Executives need trusted advisor for major technology decisions</span>
                </p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 text-[hsl(var(--accent-blue))] font-semibold text-sm mb-6">
                <Handshake className="h-4 w-4" />
                Our Partnership Model
              </div>
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6">
                Extension of your leadership team
              </h2>
              <div className="space-y-4 text-slate-600">
                <p className="flex items-start gap-3">
                  <span className="text-[hsl(var(--accent-blue))] font-bold mt-1">✓</span>
                  <span>Strategic roadmap aligned with business objectives and growth plans</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[hsl(var(--accent-blue))] font-bold mt-1">✓</span>
                  <span>Embedded coaches building reliability capabilities through hands-on mentorship</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[hsl(var(--accent-blue))] font-bold mt-1">✓</span>
                  <span>Continuity and knowledge preservation during leadership transitions</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[hsl(var(--accent-blue))] font-bold mt-1">✓</span>
                  <span>Proven frameworks for scaling engineering from 10 to 100+ engineers</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[hsl(var(--accent-blue))] font-bold mt-1">✓</span>
                  <span>Senior advisors with decades of experience across hundreds of companies</span>
                </p>
              </div>
              <div className="mt-8">
                <Button variant="primary" size="lg" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Explore Partnership</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="section-space bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Real impact</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              From reactive to strategic
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              See how strategic partnership transforms engineering organizations and leadership effectiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs mb-4">
                BEFORE PARTNERSHIP
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-slate-600 mb-2">Reactive</div>
                  <div className="text-sm text-slate-600">Fire-fighting mode, no strategic planning</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-600 mb-2">45%</div>
                  <div className="text-sm text-slate-600">Team Engagement Score</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-600 mb-2">None</div>
                  <div className="text-sm text-slate-600">Documented Best Practices</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-600 mb-2">Low</div>
                  <div className="text-sm text-slate-600">Executive Confidence in Tech</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-[hsl(var(--accent-blue))]/30 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 text-[hsl(var(--accent-blue))] font-semibold text-xs mb-4">
                AFTER PARTNERSHIP
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-[hsl(var(--accent-blue))] mb-2">Strategic</div>
                  <div className="text-sm text-slate-600">3-year roadmap, quarterly planning</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[hsl(var(--accent-blue))] mb-2">87%</div>
                  <div className="text-sm text-slate-600">Team Engagement Score</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[hsl(var(--accent-blue))] mb-2">50+</div>
                  <div className="text-sm text-slate-600">Runbooks & SOPs Created</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[hsl(var(--accent-blue))] mb-2">High</div>
                  <div className="text-sm text-slate-600">Board-Level Tech Confidence</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button variant="primary" size="lg" asChild>
              <Link to="/case-studies">View Partnership Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Journey Timeline */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Partnership journey</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              How we build long-term value
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              A structured approach to strategic partnership that delivers compounding returns over years.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--accent-blue))]/20 via-[hsl(var(--accent-blue))]/30 to-[hsl(var(--accent-blue))]/20" />

            <div className="space-y-12">
              {partnershipJourney.map((phase, index) => (
                <div key={phase.step} className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {index % 2 === 0 ? (
                    <>
                      <Card className="p-8 border-2 border-[hsl(var(--accent-blue))]/30 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-white hover:shadow-xl transition-all md:ml-auto">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white font-bold text-xl shadow-lg">
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
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white font-bold text-xl shadow-lg">
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
            <Button variant="primary" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <span>Start Partnership Journey</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Why choose us</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Strategic Partnership vs. Traditional Consulting
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[hsl(var(--navy))] to-slate-900">
                  <th className="p-4 text-left text-white font-semibold">Aspect</th>
                  <th className="p-4 text-center text-white font-semibold">Strategic Partnership</th>
                  <th className="p-4 text-center text-slate-400 font-semibold">Traditional Consulting</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Engagement Model</td>
                  <td className="p-4 text-center">
                    <div className="text-[hsl(var(--accent-blue))] font-bold">Long-term partnership</div>
                    <div className="text-xs text-slate-500">3+ year relationships</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Project-based</div>
                    <div className="text-xs text-slate-500">3-6 month contracts</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Knowledge Transfer</td>
                  <td className="p-4 text-center">
                    <div className="text-[hsl(var(--accent-blue))] font-bold">Embedded coaching</div>
                    <div className="text-xs text-slate-500">Daily collaboration</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Documentation</div>
                    <div className="text-xs text-slate-500">Deliverable-focused</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Success Metric</td>
                  <td className="p-4 text-center">
                    <div className="text-[hsl(var(--accent-blue))] font-bold">Your independence</div>
                    <div className="text-xs text-slate-500">Capability building</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Project completion</div>
                    <div className="text-xs text-slate-500">Deliverable quality</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Strategic Involvement</td>
                  <td className="p-4 text-center">
                    <div className="text-[hsl(var(--accent-blue))] font-bold">C-suite partnership</div>
                    <div className="text-xs text-slate-500">Quarterly planning</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Tactical execution</div>
                    <div className="text-xs text-slate-500">Limited executive access</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Cultural Integration</td>
                  <td className="p-4 text-center">
                    <div className="text-[hsl(var(--accent-blue))] font-bold">Part of the team</div>
                    <div className="text-xs text-slate-500">Embedded experts</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">External advisors</div>
                    <div className="text-xs text-slate-500">Separate from team</div>
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Long-term Value</td>
                  <td className="p-4 text-center">
                    <div className="text-[hsl(var(--accent-blue))] font-bold">Compounding returns</div>
                    <div className="text-xs text-slate-500">Lasting capabilities</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">One-time benefit</div>
                    <div className="text-xs text-slate-500">Knowledge leaves</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Button variant="primary" size="lg" asChild>
              <Link to="/pricing">View Partnership Options</Link>
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
              Strategic guidance at every level
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              From executive planning to team coaching, we engage across your entire organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card
                key={capability.title}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-[hsl(var(--accent-blue))]/30 group hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:from-[hsl(var(--accent-blue))]/20 group-hover:to-[hsl(var(--navy))]/10 transition-all">
                  <capability.icon className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[hsl(var(--navy))]">{capability.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{capability.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Business value</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Investment in your future</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Strategic partnership delivers compounding returns through capability building,
                cultural transformation, and executive alignment.
              </p>
              <div className="mt-8">
                <Button variant="primary" size="lg" asChild>
                  <Link to="/demo" className="flex items-center gap-2">
                    <span>See Partnership Model</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--accent-blue))]/10 to-transparent hover:from-[hsl(var(--accent-blue))]/20 transition-all hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Common scenarios</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Partnership for transformative moments</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="p-8 border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:from-[hsl(var(--accent-blue))]/20 group-hover:to-[hsl(var(--navy))]/10 transition-all">
                    <useCase.icon className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{useCase.title}</h3>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 text-[hsl(var(--accent-blue))]">{useCase.stage}</span>
                    </div>
                    <p className="mt-2 text-slate-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" asChild>
              <Link to="/case-studies">Read Partnership Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-space bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Common questions</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
              Everything you need to know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-[hsl(var(--accent-blue))]/30 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[hsl(var(--accent-blue))]/10 transition-colors"
                >
                  <span className="font-semibold text-[hsl(var(--navy))] pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[hsl(var(--accent-blue))] shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-[hsl(var(--accent-blue))]/30 pt-4">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Have more partnership questions?</p>
            <Button variant="outline" size="lg" asChild className="border-[hsl(var(--accent-blue))]/30 text-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/10">
              <Link to="/contact">Schedule Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-space bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <span className="eyebrow text-[hsl(var(--accent-blue))]">Client success</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Trusted by technology leaders</h2>
          </div>
          <Card className="p-12 border-2 border-[hsl(var(--accent-blue))]/30 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-white">
            <div className="text-4xl text-[hsl(var(--accent-blue))] mb-6">"</div>
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              HiTechLogic isn't just a service provider—they're an extension of our leadership team.
              Their strategic guidance helped us navigate explosive growth while building engineering
              practices that will serve us for years to come.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] flex items-center justify-center text-white text-xl font-bold">
                SM
              </div>
              <div>
                <div className="font-bold text-[hsl(var(--navy))]">Sarah Martinez</div>
                <div className="text-sm text-slate-600">VP Engineering, High-Growth SaaS</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-space bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to build a strategic partnership?</h2>
          <p className="mt-6 text-xl text-slate-200">
            Let's discuss how our Strategic Technology Partnership can accelerate your engineering
            maturity, align teams with business goals, and build sustainable excellence.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--accent-blue))] hover:bg-slate-50 hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Schedule Partnership Discussion</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>

          {/* Risk-Free Guarantee */}
          <div className="mt-16 pt-8 border-t border-white/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-slate-200" />
              <span className="text-slate-100 font-semibold text-lg">Partnership Commitment</span>
            </div>
            <p className="text-slate-200 max-w-2xl mx-auto">
              Not seeing the strategic value within your first 90 days? We'll refund 100% and part ways as friends.
              Our partnerships succeed when you succeed—mutual commitment, shared outcomes.
            </p>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
