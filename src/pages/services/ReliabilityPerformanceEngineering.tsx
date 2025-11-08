import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Gauge, TrendingUp, Target, Clock, AlertCircle, CheckCircle2, ArrowRight, BarChart3, Activity, LineChart, Shield, Zap, Users, Award, ChevronDown } from "lucide-react";
import { useState } from "react";

const capabilities = [
  {
    icon: Target,
    title: "SLO/SLI Definition & Tracking",
    description: "Define meaningful service level objectives and indicators that align with business needs and drive reliability improvements.",
  },
  {
    icon: Clock,
    title: "MTTR/MTBF Optimization",
    description: "Systematically reduce mean time to recovery and extend mean time between failures through targeted engineering initiatives.",
  },
  {
    icon: LineChart,
    title: "Performance Baselining",
    description: "Establish comprehensive performance baselines across all critical services to detect degradation early and measure improvements.",
  },
  {
    icon: Activity,
    title: "Chaos Engineering",
    description: "Proactive failure injection and resilience testing to identify weaknesses before they impact production systems.",
  },
  {
    icon: BarChart3,
    title: "Reliability Analytics",
    description: "Deep-dive analysis of failure patterns, performance trends, and capacity constraints to guide strategic improvements.",
  },
  {
    icon: Shield,
    title: "Resilience Architecture",
    description: "Design and implement fault-tolerant architectures with circuit breakers, bulkheads, and graceful degradation patterns.",
  },
];

const benefits = [
  "Achieve 99.99%+ uptime through systematic reliability engineering practices",
  "Reduce incident impact with 90% faster MTTR through proactive optimization",
  "Prevent performance degradation with continuous baseline monitoring and alerting",
  "Build confidence in system resilience through regular chaos engineering exercises",
  "Align engineering efforts with business goals through clear SLO frameworks",
  "Create culture of reliability ownership with transparent metrics and accountability",
];

const useCases = [
  {
    title: "E-Commerce Platform Reliability",
    description: "Ensure 99.99% uptime during peak shopping seasons with predictive capacity planning, automatic failover, and performance optimization.",
    industry: "Retail",
    icon: Target,
  },
  {
    title: "Financial Services Performance",
    description: "Meet strict latency SLOs for trading platforms with real-time performance monitoring, capacity tuning, and predictive scaling.",
    industry: "Finance",
    icon: Zap,
  },
  {
    title: "SaaS Application Scaling",
    description: "Support 10x growth without degradation through systematic performance testing, architecture evolution, and capacity forecasting.",
    industry: "Technology",
    icon: TrendingUp,
  },
  {
    title: "Healthcare System Resilience",
    description: "Build fault-tolerant healthcare systems that remain operational during component failures with zero patient data loss.",
    industry: "Healthcare",
    icon: Shield,
  },
];

const metrics = [
  { label: "Years Experience", value: "15+", icon: Award },
  { label: "SLOs Managed", value: "1000+", icon: Target },
  { label: "Client Satisfaction", value: "98%", icon: Users },
  { label: "Uptime Achieved", value: "99.99%", icon: TrendingUp },
];

const engineeringProcess = [
  {
    step: "1",
    title: "Baseline Assessment",
    description: "Analyze current reliability metrics, identify gaps in SLO coverage, review incident patterns, and establish performance baselines.",
    duration: "Week 1-2",
  },
  {
    step: "2",
    title: "SLO Framework Design",
    description: "Define service level objectives aligned with business impact, establish error budgets, create measurement systems, and set up monitoring.",
    duration: "Week 3-4",
  },
  {
    step: "3",
    title: "Engineering Initiatives",
    description: "Implement resilience patterns, conduct chaos experiments, optimize performance bottlenecks, and establish automated testing protocols.",
    duration: "Ongoing",
  },
  {
    step: "4",
    title: "Continuous Improvement",
    description: "Monthly reliability reviews, trend analysis, capacity planning updates, and proactive engineering recommendations based on data.",
    duration: "Monthly",
  },
];

export default function ReliabilityPerformanceEngineering() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you determine appropriate SLOs for our services?",
      answer: "We work closely with your business and engineering teams to understand user expectations, business impact, and current performance. SLOs are set based on actual user needs (not arbitrary percentages), cost of downtime, and technical feasibility. We typically start with conservative targets and refine them based on error budget consumption and business feedback.",
    },
    {
      question: "What's the difference between reliability engineering and just monitoring?",
      answer: "Monitoring tells you when things break. Reliability engineering prevents them from breaking in the first place. We combine proactive practices like chaos engineering, performance testing, and architecture reviews with reactive capabilities like incident analysis and MTTR optimization. The goal is to systematically improve system resilience, not just detect failures faster.",
    },
    {
      question: "How does chaos engineering work without risking production outages?",
      answer: "We start with non-production environments and gradually progress to carefully controlled production experiments. Each chaos test has predefined abort conditions, automated rollback procedures, and limited blast radius. We begin with simple tests (like network latency) and advance to complex scenarios only after proving system resilience. Safety is always the priority.",
    },
    {
      question: "Can you help us if we don't have any reliability metrics today?",
      answer: "Absolutely. Many organizations start from zero. We'll first establish basic observability (logging, metrics, tracing), then define meaningful SLIs based on user journeys, implement measurement systems, and create initial SLOs. You'll have actionable reliability metrics within 4-6 weeks and a comprehensive SLO framework within 2-3 months.",
    },
    {
      question: "How do you balance reliability improvements with feature development?",
      answer: "We use error budgets as the mechanism. When services meet their SLOs and have error budget remaining, teams can focus on features. When error budgets are exhausted, reliability becomes the priority. This creates a sustainable balance driven by data, not politics. We also help identify high-ROI reliability improvements that don't require massive engineering investment.",
    },
    {
      question: "What kind of uptime improvements can we realistically expect?",
      answer: "It depends on your starting point. Organizations with <99% uptime often reach 99.9% within 6 months through basic SLO frameworks and incident response improvements. Moving from 99.9% to 99.99% typically takes 12-18 months and requires systematic architecture changes, automation, and culture shifts. We set realistic expectations based on your current state and provide a phased roadmap.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-amber-50/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="animate-[fade-in_0.5s_ease-out]">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-[hsl(var(--navy))] shadow-lg shadow-orange-500/25">
                <Gauge className="h-7 w-7 text-white" />
              </div>
              <span className="eyebrow text-orange-600">Reliability & Performance Engineering</span>
            </div>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[hsl(var(--navy))] animate-[fade-in_0.6s_ease-out_0.1s_both]">
            Engineering Excellence<br />
            <span className="text-orange-600">At Scale</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl leading-relaxed animate-[fade-in_0.7s_ease-out_0.2s_both]">
            Systematic reliability engineering with SLO frameworks, performance optimization,
            chaos engineering, and continuous improvement practices that deliver 99.99%+ uptime.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-in_0.8s_ease-out_0.3s_both]">
            <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(249,115,22,0.8)] hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Request Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="hover:scale-105 transition-transform">
              <Link to="/demo">See Live Demo</Link>
            </Button>
          </div>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-[fade-in_0.9s_ease-out_0.4s_both]">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center group hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-2">
                  <metric.icon className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-orange-600">{metric.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-600">{metric.label}</div>
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
              <div className="text-3xl font-bold text-orange-400">90%</div>
              <div className="mt-1 text-sm text-slate-300">MTTR Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">10K+</div>
              <div className="mt-1 text-sm text-slate-300">SLOs Defined</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">500+</div>
              <div className="mt-1 text-sm text-slate-300">Chaos Tests Run</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">$50M+</div>
              <div className="mt-1 text-sm text-slate-300">Downtime Prevented</div>
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
                Firefighting instead of engineering
              </h2>
              <div className="space-y-4 text-slate-600">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>No clear reliability targets or accountability framework</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Reactive incident response instead of proactive resilience building</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Performance degradation only discovered by angry users</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Unknown failure modes waiting to cause production outages</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>Teams drowning in alerts but missing what matters</span>
                </p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6">
                <CheckCircle2 className="h-4 w-4" />
                Our Approach
              </div>
              <h2 className="text-3xl font-bold text-[hsl(var(--navy))] mb-6">
                Systematic reliability engineering
              </h2>
              <div className="space-y-4 text-slate-600">
                <p className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">✓</span>
                  <span>Clear SLO frameworks that align engineering with business outcomes</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">✓</span>
                  <span>Proactive chaos engineering to find weaknesses before users do</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">✓</span>
                  <span>Comprehensive baselines and continuous monitoring for early detection</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">✓</span>
                  <span>Resilient architecture patterns that gracefully handle failures</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">✓</span>
                  <span>Data-driven improvements based on actual reliability metrics</span>
                </p>
              </div>
              <div className="mt-8">
                <Button variant="default" size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Start Reliability Assessment</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Impact Section */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-orange-50/30">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-orange-600">Real impact</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              From reactive to resilient
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              See how systematic reliability engineering transforms system performance and team productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-red-200 bg-gradient-to-br from-red-50/50 to-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-xs mb-4">
                BEFORE
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">94.5%</div>
                  <div className="text-sm text-slate-600">Average Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">45 min</div>
                  <div className="text-sm text-slate-600">Mean Time to Recovery</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">0</div>
                  <div className="text-sm text-slate-600">Defined SLOs</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-600 mb-2">24</div>
                  <div className="text-sm text-slate-600">Critical Incidents/Month</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-orange-200 bg-gradient-to-br from-orange-50/50 to-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-xs mb-4">
                AFTER
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">99.95%</div>
                  <div className="text-sm text-slate-600">Average Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">4.5 min</div>
                  <div className="text-sm text-slate-600">Mean Time to Recovery</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">47</div>
                  <div className="text-sm text-slate-600">Defined SLOs</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">2</div>
                  <div className="text-sm text-slate-600">Critical Incidents/Month</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button variant="default" size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Engineering Process Timeline */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-orange-600">Our process</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Your reliability transformation journey
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              A systematic approach to building resilient, performant systems that scale with confidence.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200" />

            <div className="space-y-12">
              {engineeringProcess.map((phase, index) => (
                <div key={phase.step} className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {index % 2 === 0 ? (
                    <>
                      <Card className="p-8 border-2 border-orange-200 bg-gradient-to-br from-orange-50/50 to-white hover:shadow-xl transition-all md:ml-auto">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-xl shadow-lg">
                            {phase.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{phase.title}</h3>
                            <span className="text-sm text-orange-600 font-semibold">{phase.duration}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                      </Card>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <Card className="p-8 border-2 border-orange-200 bg-gradient-to-br from-orange-50/50 to-white hover:shadow-xl transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-xl shadow-lg">
                            {phase.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{phase.title}</h3>
                            <span className="text-sm text-orange-600 font-semibold">{phase.duration}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{phase.description}</p>
                      </Card>
                    </>
                  )}
                  {/* Center Circle */}
                  <div className="hidden md:block absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-lg z-10" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="default" size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Start Your Journey</span>
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
            <span className="eyebrow text-orange-600">Why choose us</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              HiTechLogic vs. In-House Reliability Teams
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[hsl(var(--navy))] to-slate-900">
                  <th className="p-4 text-left text-white font-semibold">Feature</th>
                  <th className="p-4 text-center text-white font-semibold">HiTechLogic</th>
                  <th className="p-4 text-center text-slate-400 font-semibold">In-House Team</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Time to Value</td>
                  <td className="p-4 text-center">
                    <div className="text-orange-600 font-bold">2-4 weeks</div>
                    <div className="text-xs text-slate-500">Immediate expertise</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">6-12 months</div>
                    <div className="text-xs text-slate-500">Hiring + ramp-up</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">SRE Expertise Level</td>
                  <td className="p-4 text-center">
                    <div className="text-orange-600 font-bold">Senior (15+ years)</div>
                    <div className="text-xs text-slate-500">Google-trained SREs</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Varies widely</div>
                    <div className="text-xs text-slate-500">Hard to hire/retain</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Annual Cost</td>
                  <td className="p-4 text-center">
                    <div className="text-orange-600 font-bold">$120K-$180K</div>
                    <div className="text-xs text-slate-500">Scalable engagement</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">$250K-$400K</div>
                    <div className="text-xs text-slate-500">Per senior SRE</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Tools & Methodology</td>
                  <td className="p-4 text-center">
                    <div className="text-orange-600 font-bold">Battle-tested</div>
                    <div className="text-xs text-slate-500">Proven frameworks</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Trial and error</div>
                    <div className="text-xs text-slate-500">Learning curve</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Cross-Industry Knowledge</td>
                  <td className="p-4 text-center">
                    <div className="text-orange-600 font-bold">100+ clients</div>
                    <div className="text-xs text-slate-500">Diverse patterns</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Single company</div>
                    <div className="text-xs text-slate-500">Limited exposure</div>
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Scalability</td>
                  <td className="p-4 text-center">
                    <div className="text-orange-600 font-bold">Elastic</div>
                    <div className="text-xs text-slate-500">Scale up/down instantly</div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="text-slate-600">Fixed capacity</div>
                    <div className="text-xs text-slate-500">Hiring constraints</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Button variant="default" size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
              <Link to="/pricing">See Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-orange-600">Core capabilities</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Comprehensive reliability engineering
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              From SLO definition to chaos testing, we cover every aspect of modern reliability engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card
                key={capability.title}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-300 group hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 group-hover:from-orange-500/20 group-hover:to-orange-600/10 transition-all">
                  <capability.icon className="h-6 w-6 text-orange-600" />
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
              <span className="eyebrow text-orange-600">Business value</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">From reactive to resilient</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Stop firefighting and start engineering reliability. Build systems that withstand failures
                gracefully and recover automatically.
              </p>
              <div className="mt-8">
                <Button variant="default" size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link to="/demo" className="flex items-center gap-2">
                    <span>See Platform Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50/50 to-transparent hover:from-orange-50 transition-all hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <CheckCircle2 className="h-6 w-6 text-orange-600 shrink-0 mt-0.5" />
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
            <span className="eyebrow text-orange-600">Common scenarios</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Reliability for mission-critical systems</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="p-8 border-2 hover:border-orange-300 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 group-hover:from-orange-500/20 group-hover:to-orange-600/10 transition-all">
                    <useCase.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[hsl(var(--navy))]">{useCase.title}</h3>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-100 text-orange-700">{useCase.industry}</span>
                    </div>
                    <p className="mt-2 text-slate-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="default" size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
              <Link to="/case-studies">Read Customer Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-orange-50/30">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="eyebrow text-orange-600">Common questions</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
              Everything you need to know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-orange-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50/50 transition-colors"
                >
                  <span className="font-semibold text-[hsl(var(--navy))] pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-orange-600 shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-orange-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <Button variant="outline" size="lg" asChild className="border-orange-600 text-orange-600 hover:bg-orange-50">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-space bg-gradient-to-br from-orange-600 to-[hsl(var(--navy))]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to engineer world-class reliability?</h2>
          <p className="mt-6 text-xl text-orange-100">
            Let's build SLO frameworks, establish performance baselines, and create resilient systems
            that scale with confidence.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="xl" asChild className="bg-white text-orange-600 hover:bg-orange-50 hover:scale-105 transition-transform">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Schedule Strategy Session</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>

          {/* Risk-Free Guarantee */}
          <div className="mt-16 pt-8 border-t border-orange-400/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-orange-200" />
              <span className="text-orange-100 font-semibold text-lg">Risk-Free Guarantee</span>
            </div>
            <p className="text-orange-100/90 max-w-2xl mx-auto">
              Not satisfied with our SLO framework or engineering recommendations within the first 30 days?
              We'll refund 100% of your investment, no questions asked. Your success is our only metric.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
