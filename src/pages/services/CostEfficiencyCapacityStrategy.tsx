import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { BarChart3, DollarSign, TrendingDown, PieChart, Target, Settings, CheckCircle2, ArrowRight, LineChart, Zap, Calculator, TrendingUp, AlertCircle, Shield, ChevronDown, Award, Users } from "lucide-react";
import { useState } from "react";

const capabilities = [
  {
    icon: PieChart,
    title: "Cloud Cost Attribution & Tagging",
    description: "Comprehensive cost allocation with automated tagging strategies, chargeback models, and department-level visibility.",
  },
  {
    icon: TrendingDown,
    title: "Right-Sizing & Optimization",
    description: "Continuous analysis of resource utilization with right-sizing recommendations and automated optimization playbooks.",
  },
  {
    icon: LineChart,
    title: "Spend Forecasting & Budgeting",
    description: "Predictive cost modeling aligned with growth plans, budget tracking, and variance analysis with early warning alerts.",
  },
  {
    icon: Zap,
    title: "Reserved Instance & Savings Plans",
    description: "Strategic commitment planning for AWS, Azure, and GCP with coverage optimization and renewal management.",
  },
  {
    icon: Target,
    title: "Capacity Planning & Buffers",
    description: "Growth forecasting with appropriate capacity buffers to prevent performance issues while optimizing costs.",
  },
  {
    icon: Calculator,
    title: "FinOps Practice Establishment",
    description: "Build internal FinOps capabilities with training, governance frameworks, and cost accountability culture.",
  },
];

const benefits = [
  "Reduce cloud spend by 30-50% through systematic optimization and waste elimination",
  "Gain complete cost transparency with department-level attribution and chargeback",
  "Prevent budget overruns with accurate forecasting and proactive alerting",
  "Optimize commitment purchases (RIs/Savings Plans) for maximum discount capture",
  "Align capacity planning with business growth while maintaining cost efficiency",
  "Build financial accountability with FinOps practices and cost-aware engineering culture",
];

const useCases = [
  {
    title: "Cloud Cost Runaway Prevention",
    description: "Detect and prevent cost overruns with real-time anomaly detection, automatic alerting, and immediate remediation workflows.",
    savings: "30-40%",
    icon: TrendingDown,
  },
  {
    title: "Multi-Cloud Cost Optimization",
    description: "Optimize spending across AWS, Azure, and GCP with unified visibility, cross-platform right-sizing, and commitment coordination.",
    savings: "25-35%",
    icon: PieChart,
  },
  {
    title: "Rapid Growth Cost Management",
    description: "Support hypergrowth while maintaining cost efficiency through proactive capacity planning and scaling optimization.",
    savings: "20-30%",
    icon: TrendingUp,
  },
  {
    title: "Finance Partner Alignment",
    description: "Build trusted partnership with finance through accurate forecasting, transparent reporting, and budget accountability.",
    savings: "ROI Focused",
    icon: DollarSign,
  },
];

const metrics = [
  { label: "FinOps Experience", value: "12+", icon: Award },
  { label: "Avg. Savings", value: "35%", icon: TrendingDown },
  { label: "Forecast Accuracy", value: "95%+", icon: Target },
  { label: "Clients Served", value: "200+", icon: Users },
];

const finOpsJourney = [
  {
    step: "1",
    title: "Cost Discovery & Baseline",
    description: "Comprehensive cost analysis across all cloud platforms, identify waste patterns, establish current spend baseline, and set optimization targets.",
    duration: "Week 1-2",
  },
  {
    step: "2",
    title: "Quick Wins & Attribution",
    description: "Implement immediate cost reductions (orphaned resources, right-sizing), deploy cost tagging strategy, and establish chargeback models.",
    duration: "Week 3-6",
  },
  {
    step: "3",
    title: "Strategic Optimization",
    description: "Analyze commitment opportunities (RIs/Savings Plans), implement automated optimization policies, and build forecasting models.",
    duration: "Week 7-12",
  },
  {
    step: "4",
    title: "Continuous FinOps",
    description: "Weekly cost reviews, monthly forecasting updates, quarterly planning cycles, and ongoing optimization initiatives based on usage patterns.",
    duration: "Ongoing",
  },
];

export default function CostEfficiencyCapacityStrategy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can I see cost savings after starting?",
      answer: "You'll see immediate savings within the first 2 weeks from 'quick wins' like deleting orphaned volumes, shutting down idle resources, and rightsizing obviously oversized instances. These typically deliver 10-15% savings. The bulk of savings (another 20-25%) comes from strategic optimizations in weeks 4-12, including reserved instance purchases, architectural changes, and automated policies. Full 35% average savings is achieved within 6 months.",
    },
    {
      question: "How accurate is your cost forecasting?",
      answer: "Our forecasts achieve 95%+ accuracy for 3-month horizons and 90%+ for 12-month planning. We build forecasting models based on your actual usage patterns, growth metrics, and seasonal trends. Models are updated monthly with actuals and recalibrated quarterly. For high-growth companies or major architectural changes, we provide range forecasts (best/likely/worst case) rather than point estimates.",
    },
    {
      question: "Can you optimize costs without impacting performance?",
      answer: "Absolutely. Our right-sizing recommendations are based on actual utilization data, not arbitrary cuts. We maintain appropriate buffers for performance and growth. Recommendations are tested in non-production first, rolled out gradually, and monitored for performance impact. We also identify optimizations that improve both cost AND performance (like switching to newer instance types with better price/performance ratios).",
    },
    {
      question: "How do you handle cost allocation across teams?",
      answer: "We implement comprehensive tagging strategies that automatically tag resources with team, project, environment, and cost center metadata. This enables chargeback reports showing exactly what each team spends. We can implement showback (informational) or chargeback (actual billing) models. For shared services, we use allocation rules based on usage metrics. Finance teams love the transparency this provides.",
    },
    {
      question: "What's the ROI of FinOps consulting vs. doing it ourselves?",
      answer: "Our typical engagement costs $80K-120K annually and delivers $500K-1M+ in savings for organizations spending $2M-5M/year on cloud. That's 5-10x ROI in year one, and savings compound annually. DIY FinOps requires hiring specialized talent ($150K-200K per person), purchasing tools ($50K-100K), and has a 6-12 month learning curve. Our approach delivers faster results with less overhead.",
    },
    {
      question: "Do savings continue after the initial optimization?",
      answer: "Yes. Our ongoing FinOps service maintains savings through continuous optimization. Usage patterns change, new services launch, pricing evolves, and organizations grow. We monitor for new waste, adjust commitment strategies, update forecasts, and implement new optimization opportunities. Clients typically see additional 5-10% savings annually through continuous improvement, plus avoiding new waste that would otherwise accumulate.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://hitechlogic.com/services/cost-efficiency-capacity-strategy#service",
        name: "Cost Efficiency & Capacity Strategy",
        provider: {
          "@type": "Organization",
          name: "HiTechLogic",
          "@id": "https://hitechlogic.com/#organization"
        },
        serviceType: "FinOps & Cloud Cost Optimization",
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://hitechlogic.com/services/cost-efficiency-capacity-strategy",
          servicePhone: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["English"]
          }
        },
        slogan: "Financial Transparency, Optimized Growth",
        description: "Strategic FinOps with complete cost visibility, predictive forecasting at 95% accuracy, and continuous optimization reducing cloud spend by 35% average. $50M+ total savings delivered with 8x average ROI and capacity planning linked to demand curves.",
        offers: {
          "@type": "Offer",
          category: "FinOps & Cost Optimization",
          itemOffered: {
            "@type": "Service",
            name: "Cost Efficiency & Capacity Strategy",
            description: "Comprehensive FinOps services including cost optimization, spend forecasting, capacity planning, commitment management, and unit economics analysis. Reduce cloud costs by 30-50% while maintaining performance."
          }
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "FinOps & Optimization Services",
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
          audienceType: "CFOs, VPs of Finance, Engineering Directors, Cloud Architects, FinOps Teams"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "112",
          bestRating: "5",
          worstRating: "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://hitechlogic.com/services/cost-efficiency-capacity-strategy#faq",
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
        "@id": "https://hitechlogic.com/services/cost-efficiency-capacity-strategy#breadcrumb",
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
            name: "Cost Efficiency & Capacity Strategy",
            item: "https://hitechlogic.com/services/cost-efficiency-capacity-strategy"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Cost Efficiency & Capacity Strategy | FinOps & Cloud Cost Optimization | HiTechLogic"
        description="Reduce cloud costs by 35% with expert FinOps services. $50M+ savings delivered, 95% forecast accuracy, 8x ROI. Complete cost visibility, rightsizing, commitment management, and capacity planning for AWS, Azure, GCP."
        keywords="FinOps, cloud cost optimization, AWS cost reduction, Azure cost savings, GCP optimization, cloud financial management, cost forecasting, capacity planning, reserved instances, cloud economics, unit economics"
        canonical="https://hitechlogic.com/services/cost-efficiency-capacity-strategy"
        schema={schema}
        ogType="website"
        ogImage="https://hitechlogic.com/images/services/finops-optimization-og.jpg"
        twitterCard="summary_large_image"
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="animate-[fade-in_0.5s_ease-out]">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-white/15">
                <TrendingUp className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Core Operations Discipline</span>
            </div>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-[fade-in_0.6s_ease-out_0.1s_both]">
            Cost Efficiency & <span className="text-[hsl(var(--accent-blue))]">Capacity Strategy</span>
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed animate-[fade-in_0.7s_ease-out_0.2s_both]">
            Financial observability and optimization programs that keep spend predictable and accountable.
            <span className="block mt-3 font-semibold text-white">40-60% cloud spend reduction through transparency</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-in_0.8s_ease-out_0.3s_both]">
            <Button size="lg" asChild className="bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/90 text-white shadow-[0_20px_45px_-20px_rgba(46,107,255,0.8)] hover:shadow-[0_25px_50px_-12px_rgba(46,107,255,0.9)] hover:scale-105 transition-all duration-300">
              <Link to="/contact" className="flex items-center gap-2 group">
                <span>Request Assessment</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              <Link to="/demo" className="flex items-center gap-2 group">
                <span>Calculate Savings</span>
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
      <section className="bg-gradient-to-r from-[hsl(var(--navy))] to-slate-900 py-8">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400">$50M+</div>
              <div className="mt-1 text-sm text-slate-300">Total Savings Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">35%</div>
              <div className="mt-1 text-sm text-slate-300">Average Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">95%</div>
              <div className="mt-1 text-sm text-slate-300">Forecast Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">8x</div>
              <div className="mt-1 text-sm text-slate-300">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-6">
                <AlertCircle className="h-4 w-4" />
                The Challenge
              </div>
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6">
                Cloud costs spiraling out of control
              </h2>
              <div className="space-y-4 text-slate-600">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>30% of cloud spend wasted on idle resources and oversized instances</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Finance shocked by monthly bills with no visibility into drivers</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Forecasts are wildly inaccurate, budgets consistently exceeded</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>No accountability - teams provision without cost awareness</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Optimization opportunities go unidentified and unaddressed</span>
                </p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-6">
                <CheckCircle2 className="h-4 w-4" />
                Our FinOps Approach
              </div>
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6">
                Financial discipline meets technical excellence
              </h2>
              <div className="space-y-4 text-slate-600">
                <p className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>35% average savings through systematic waste elimination</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Complete transparency with department/team-level cost attribution</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>95%+ forecast accuracy for confident budget planning</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Cost-aware culture with automated governance and alerts</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>Continuous optimization that compounds savings annually</span>
                </p>
              </div>
              <div className="mt-8">
                <Button variant="primary" size="lg" asChild className="bg-green-600 hover:bg-green-700">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Get Free Cost Audit</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Cost Impact */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-green-50/30">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-green-600">Real impact</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              From wasteful to optimized
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              See how systematic FinOps practices transform cloud spending and financial predictability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-red-200 bg-gradient-to-br from-red-50/50 to-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-xs mb-4">
                BEFORE
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">$500K</div>
                  <div className="text-sm text-slate-600">Monthly Cloud Spend</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">30%</div>
                  <div className="text-sm text-slate-600">Wasted on Idle Resources</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">±40%</div>
                  <div className="text-sm text-slate-600">Forecast Variance</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">0%</div>
                  <div className="text-sm text-slate-600">Cost Visibility by Team</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50/50 to-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs mb-4">
                AFTER
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">$325K</div>
                  <div className="text-sm text-slate-600">Monthly Cloud Spend</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">&lt;5%</div>
                  <div className="text-sm text-slate-600">Waste Remaining</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">±5%</div>
                  <div className="text-sm text-slate-600">Forecast Variance</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600">Full Cost Attribution</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block p-6 bg-green-100 rounded-xl">
              <div className="text-sm font-semibold text-green-700 mb-1">Annual Savings</div>
              <div className="text-5xl font-bold text-green-600">$2.1M</div>
              <div className="text-sm text-green-700 mt-1">35% cost reduction</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="primary" size="lg" asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/case-studies">See Savings Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FinOps Journey Timeline */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-green-600">Implementation process</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Your FinOps transformation journey
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              A systematic approach to reducing waste and building cost accountability.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-green-300 to-green-200" />

            <div className="space-y-12">
              {finOpsJourney.map((phase, index) => (
                <div key={phase.step} className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {index % 2 === 0 ? (
                    <>
                      <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50/50 to-white hover:shadow-xl transition-all md:ml-auto">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white font-bold text-xl shadow-lg">
                            {phase.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{phase.title}</h3>
                            <span className="text-sm text-green-600 font-semibold">{phase.duration}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                      </Card>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <Card className="p-8 border-2 border-green-200 bg-gradient-to-br from-green-50/50 to-white hover:shadow-xl transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white font-bold text-xl shadow-lg">
                            {phase.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{phase.title}</h3>
                            <span className="text-sm text-green-600 font-semibold">{phase.duration}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                      </Card>
                    </>
                  )}
                  {/* Center Circle */}
                  <div className="hidden md:block absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-lg z-10" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Start FinOps Journey</span>
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
            <span className="eyebrow text-green-600">Why choose us</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              HiTechLogic FinOps vs. DIY Cost Management
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[hsl(var(--navy))] to-slate-900">
                  <th className="p-4 text-left text-white font-semibold">Aspect</th>
                  <th className="p-4 text-center text-white font-semibold">HiTechLogic FinOps</th>
                  <th className="p-4 text-center text-slate-400 font-semibold">DIY Approach</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Time to Savings</td>
                  <td className="p-4 text-center">
                    <div className="text-green-600 font-bold">2 weeks</div>
                    <div className="text-xs text-slate-500">Quick wins immediate</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">3-6 months</div>
                    <div className="text-xs text-slate-500">Learning curve</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Average Savings</td>
                  <td className="p-4 text-center">
                    <div className="text-green-600 font-bold">30-50%</div>
                    <div className="text-xs text-slate-500">Systematic optimization</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">10-20%</div>
                    <div className="text-xs text-slate-500">Basic rightsizing</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Forecast Accuracy</td>
                  <td className="p-4 text-center">
                    <div className="text-green-600 font-bold">95%+</div>
                    <div className="text-xs text-slate-500">Advanced modeling</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">70-80%</div>
                    <div className="text-xs text-slate-500">Basic extrapolation</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Annual Cost</td>
                  <td className="p-4 text-center">
                    <div className="text-green-600 font-bold">$80K-120K</div>
                    <div className="text-xs text-slate-500">All-in service</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">$200K-300K</div>
                    <div className="text-xs text-slate-500">Staff + tools</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Expertise Level</td>
                  <td className="p-4 text-center">
                    <div className="text-green-600 font-bold">Senior FinOps</div>
                    <div className="text-xs text-slate-500">12+ years experience</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Variable</div>
                    <div className="text-xs text-slate-500">Hard to hire</div>
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Ongoing Optimization</td>
                  <td className="p-4 text-center">
                    <div className="text-green-600 font-bold">Continuous</div>
                    <div className="text-xs text-slate-500">5-10% annual gains</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Ad-hoc</div>
                    <div className="text-xs text-slate-500">Waste accumulates</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Button variant="primary" size="lg" asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/pricing">View FinOps Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-green-600">Core capabilities</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Complete FinOps practice
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              From cost attribution to capacity forecasting, we manage every aspect of cloud financial operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card
                key={capability.title}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-green-300 group hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 group-hover:from-green-500/20 group-hover:to-green-600/10 transition-all">
                  <capability.icon className="h-6 w-6 text-green-600" />
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
              <span className="eyebrow text-green-600">Business value</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Turn cloud spend into competitive advantage</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Efficient cloud operations free up budget for innovation, improve unit economics,
                and build trust with finance partners.
              </p>
              <div className="mt-8">
                <Button variant="primary" size="lg" asChild className="bg-green-600 hover:bg-green-700">
                  <Link to="/demo" className="flex items-center gap-2">
                    <span>Calculate Your ROI</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50/50 to-transparent hover:from-green-50 transition-all hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
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
            <span className="eyebrow text-green-600">Common scenarios</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">FinOps for every growth stage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="p-8 border-2 hover:border-green-300 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 group-hover:from-green-500/20 group-hover:to-green-600/10 transition-all">
                    <useCase.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{useCase.title}</h3>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">{useCase.savings}</span>
                    </div>
                    <p className="mt-2 text-slate-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/case-studies">View Savings Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-green-50/30">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="eyebrow text-green-600">Common questions</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
              Everything you need to know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-green-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-green-50/50 transition-colors"
                >
                  <span className="font-semibold text-[hsl(var(--navy))] pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-green-600 shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-green-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Have more FinOps questions?</p>
            <Button variant="outline" size="lg" asChild className="border-green-600 text-green-600 hover:bg-green-50">
              <Link to="/contact">Talk to FinOps Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-space bg-gradient-to-br from-green-600 to-[hsl(var(--navy))]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to optimize cloud costs?</h2>
          <p className="mt-6 text-xl text-green-100">
            Let's conduct a comprehensive cost assessment, identify optimization opportunities,
            and build a FinOps practice that delivers continuous savings and perfect forecasts.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="xl" asChild className="bg-white text-green-600 hover:bg-green-50 hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Schedule Cost Assessment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>

          {/* Risk-Free Guarantee */}
          <div className="mt-16 pt-8 border-t border-green-400/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-green-200" />
              <span className="text-green-100 font-semibold text-lg">Savings Guarantee</span>
            </div>
            <p className="text-green-100/90 max-w-2xl mx-auto">
              If we don't identify at least 20% savings opportunities within your first 30 days,
              we'll provide a full refund. Average client saves 35%—guaranteed results or your money back.
            </p>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
}
