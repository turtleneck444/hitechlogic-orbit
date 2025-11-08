import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Activity, Bell, BellOff, Filter, TrendingDown, Brain, AlertTriangle, CheckCircle2, ArrowRight, BarChart, Zap, Clock, Award, Phone, Mail, Calendar, Target, LineChart } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Intelligent Event Correlation",
    description: "Advanced ML-powered correlation engine that groups related alerts and identifies root causes automatically.",
    highlight: "AI-powered insights",
  },
  {
    icon: Filter,
    title: "Adaptive Noise Filtering",
    description: "Dynamic filtering rules that learn from your environment and suppress non-actionable alerts while escalating critical events.",
    highlight: "Smart filtering",
  },
  {
    icon: TrendingDown,
    title: "Alert Fatigue Reduction",
    description: "Systematic reduction of alert volume through pattern analysis, deduplication, and intelligent suppression.",
    highlight: "82% noise reduction",
  },
  {
    icon: BarChart,
    title: "Event Pattern Analysis",
    description: "Continuous analysis of event patterns to identify recurring issues and opportunities for automation.",
    highlight: "Pattern detection",
  },
  {
    icon: Clock,
    title: "Predictive Monitoring",
    description: "Proactive detection of issues before they impact users through predictive analytics and trend analysis.",
    highlight: "Predict problems",
  },
  {
    icon: Zap,
    title: "Smart Escalation",
    description: "Context-aware escalation paths that route critical events to the right teams with full diagnostic context.",
    highlight: "Instant escalation",
  },
];

const benefits = [
  "Reduce alert noise by 82% on average through intelligent correlation and filtering",
  "Eliminate alert fatigue and improve team focus on genuine critical issues",
  "Accelerate incident response with pre-correlated events and root cause analysis",
  "Prevent recurring issues through systematic pattern identification and remediation",
  "Improve system visibility without overwhelming teams with unnecessary alerts",
  "Maintain compliance with audit-ready event logs and escalation trails",
];

const metrics = [
  { label: "Noise Reduction", value: "82%", icon: TrendingDown },
  { label: "Mean Time to Detect", value: "<2 min", icon: Clock },
  { label: "False Positive Rate", value: "<1%", icon: Target },
  { label: "Correlation Accuracy", value: "97%", icon: Brain },
];

const beforeAfter = [
  {
    metric: "Daily Alerts",
    before: "12,000+",
    after: "680",
    improvement: "95% reduction",
  },
  {
    metric: "On-Call Interruptions",
    before: "45/day",
    after: "3/day",
    improvement: "93% reduction",
  },
  {
    metric: "Time to Root Cause",
    before: "45 min",
    after: "4 min",
    improvement: "91% faster",
  },
  {
    metric: "False Positives",
    before: "78%",
    after: "<1%",
    improvement: "99% improvement",
  },
];

const process = [
  {
    step: "1",
    title: "Baseline Assessment",
    description: "Analyze current alert volume, categorize noise sources, and identify quick wins for immediate relief.",
    duration: "Week 1",
  },
  {
    step: "2",
    title: "Correlation Engine Setup",
    description: "Deploy intelligent correlation rules, configure ML models, and establish escalation hierarchies.",
    duration: "Week 2-3",
  },
  {
    step: "3",
    title: "Noise Reduction",
    description: "Systematic suppression of false positives, pattern-based filtering, and alert deduplication.",
    duration: "Week 4-6",
  },
  {
    step: "4",
    title: "Continuous Optimization",
    description: "Ongoing tuning, new pattern detection, and progressive noise reduction through machine learning.",
    duration: "Ongoing",
  },
];

const useCases = [
  {
    title: "Alert Storm Management",
    description: "Automatically detect and manage alert storms by correlating hundreds of related events into single, actionable incidents with root cause analysis.",
    icon: AlertTriangle,
    industry: "All Industries",
  },
  {
    title: "Multi-System Correlation",
    description: "Connect events across distributed systems, cloud platforms, and applications to provide unified incident views and faster resolution.",
    icon: Activity,
    industry: "Enterprise IT",
  },
  {
    title: "SLA-Critical Services",
    description: "Ensure high-priority services receive immediate attention while filtering noise from less critical systems through priority-based routing.",
    icon: CheckCircle2,
    industry: "E-commerce & SaaS",
  },
  {
    title: "Legacy System Integration",
    description: "Modernize monitoring for legacy applications with intelligent event normalization, enrichment, and correlation capabilities.",
    icon: Filter,
    industry: "Financial Services",
  },
];

const comparison = [
  {
    feature: "Alert Volume",
    traditional: "Thousands of alerts daily",
    hitechlogic: "Hundreds of correlated incidents",
  },
  {
    feature: "Root Cause Identification",
    traditional: "Manual investigation required",
    hitechlogic: "Automatic correlation & analysis",
  },
  {
    feature: "False Positive Rate",
    traditional: "60-80% of alerts",
    hitechlogic: "Less than 1% false positives",
  },
  {
    feature: "Alert Fatigue",
    traditional: "Severe team burnout",
    hitechlogic: "Focused on genuine issues",
  },
  {
    feature: "Pattern Detection",
    traditional: "Reactive troubleshooting",
    hitechlogic: "Proactive pattern identification",
  },
  {
    feature: "Time to Detect",
    traditional: "15-30 minutes",
    hitechlogic: "Less than 2 minutes",
  },
];

const faqs = [
  {
    question: "How quickly will we see noise reduction results?",
    answer: "Most clients see 40-50% noise reduction within the first week through quick-win filtering. Full 80%+ reduction is typically achieved within 4-6 weeks as ML models learn your environment.",
  },
  {
    question: "Will important alerts get suppressed by mistake?",
    answer: "No. Our correlation engine uses multi-factor analysis and severity weighting to ensure critical alerts always escalate. We have a <1% false positive rate and maintain audit trails of all suppression decisions.",
  },
  {
    question: "Can this work with our existing monitoring tools?",
    answer: "Yes. We integrate with all major monitoring platforms including Datadog, New Relic, Splunk, PagerDuty, and custom tools through standard APIs and webhooks.",
  },
  {
    question: "What happens during an actual incident?",
    answer: "Our correlation engine groups related alerts, provides root cause analysis, and escalates with full context to the right team immediately. You get one actionable incident instead of hundreds of noise.",
  },
  {
    question: "How do you handle new types of alerts?",
    answer: "Our ML models continuously learn and adapt. New alert patterns are analyzed, categorized, and incorporated into correlation rules automatically with human oversight for validation.",
  },
];

const trustIndicators = [
  { label: "Alert Noise Reduced", value: "95%+" },
  { label: "Client Satisfaction", value: "4.9/5" },
  { label: "Incidents Correlated", value: "10M+" },
  { label: "Detection Speed", value: "<2 min" },
];

export default function SystemOversightEventReduction() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="flex items-center gap-3 mb-6 animate-[fade-in_0.5s_ease-out]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-[hsl(var(--navy))] shadow-lg shadow-purple-500/25 transition-transform duration-300 hover:scale-110">
              <Activity className="h-7 w-7 text-white" />
            </div>
            <span className="eyebrow text-purple-600">System Oversight & Event Reduction</span>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[hsl(var(--navy))] animate-[fade-in_0.6s_ease-out_0.1s_both]">
            Signal Over Noise,<br />
            <span className="text-purple-600">Every Time</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl leading-relaxed animate-[fade-in_0.7s_ease-out_0.2s_both]">
            Intelligent monitoring that reduces alert fatigue by 82%, correlates events automatically,
            and ensures your teams focus on what truly matters.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-in_0.8s_ease-out_0.3s_both]">
            <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(139,92,246,0.8)] hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300">
              <Link to="/contact" className="flex items-center gap-2 group">
                <Calendar className="h-5 w-5" />
                <span>Schedule Free Assessment</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="hover:bg-slate-50 transition-all duration-300">
              <Link to="/contact" className="flex items-center gap-2 group">
                <Phone className="h-5 w-5" />
                <span>Talk to Specialist</span>
              </Link>
            </Button>
          </div>

          {/* Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-[fade-in_0.9s_ease-out_0.4s_both]">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 group-hover:from-purple-500/20 group-hover:to-purple-600/10 transition-all duration-300">
                    <metric.icon className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">{metric.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-[hsl(var(--navy))]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator) => (
              <div key={indicator.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{indicator.value}</div>
                <div className="text-sm text-purple-200">{indicator.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow text-purple-600">The challenge</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Alert fatigue is killing productivity</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Modern systems generate thousands of alerts daily. Most are noise. Critical alerts get lost
                in the chaos. On-call teams burn out. Real incidents are discovered too late.
              </p>
              <div className="mt-6 p-6 bg-red-50 border-l-4 border-red-400 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-red-900">The Cost of Alert Noise</div>
                    <div className="text-sm text-red-800 mt-1">
                      Teams spend 60% of time triaging false positives, miss critical alerts buried in noise,
                      and experience severe burnout from constant interruptions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow text-purple-600">Our solution</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Intelligent signal extraction</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Our System Oversight & Event Reduction service uses advanced correlation algorithms,
                machine learning, and pattern analysis to filter noise, group related events, and
                surface only actionable insights.
              </p>
              <div className="mt-6 p-6 bg-green-50 border-l-4 border-green-400 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-900">Proven Results</div>
                    <div className="text-sm text-green-800 mt-1">
                      82% average noise reduction, sub-2-minute detection times, and happier, more
                      productive on-call teams focused on genuine issues.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact" className="flex items-center gap-2 group">
                    <span>See How It Works</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-purple-600">Real impact</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Transformation by the numbers
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              See the dramatic difference our event reduction capabilities deliver for enterprise clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfter.map((item) => (
              <Card key={item.metric} className="p-6 text-center border-2 hover:border-purple-300 transition-all hover:-translate-y-1 duration-300 group">
                <div className="text-sm font-semibold text-slate-600 mb-4">{item.metric}</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Before</div>
                    <div className="text-2xl font-bold text-red-600">{item.before}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-purple-600 mx-auto rotate-90 group-hover:translate-y-1 transition-transform" />
                  <div>
                    <div className="text-xs text-slate-500 mb-1">After</div>
                    <div className="text-2xl font-bold text-green-600">{item.after}</div>
                  </div>
                </div>
                <div className="mt-4 px-3 py-2 bg-purple-100 rounded-lg">
                  <div className="text-xs font-semibold text-purple-900">{item.improvement}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2 group">
                <span>Get Your Free Noise Assessment</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-purple-600">Our process</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              From noise to clarity in 6 weeks
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Our systematic approach delivers measurable noise reduction quickly and sustainably.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/20 via-purple-600 to-purple-500/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-4 gap-6 relative">
              {process.map((item) => (
                <Card key={item.step} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-500/50 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {item.step}
                    </div>
                    <div className="text-sm font-semibold text-purple-600 mb-2">{item.duration}</div>
                    <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-purple-600">Core capabilities</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Advanced event intelligence
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Powered by machine learning, pattern recognition, and years of operational expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <Card key={capability.title} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-purple-500/10 to-purple-600/5 text-xs font-semibold text-purple-600 rounded-bl-lg">
                  {capability.highlight}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 group-hover:from-purple-500/20 group-hover:to-purple-600/10 transition-all group-hover:scale-110 duration-300">
                  <capability.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[hsl(var(--navy))]">{capability.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{capability.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-purple-600">See the difference</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Traditional Monitoring vs. Intelligent Oversight
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="px-6 py-4 text-left text-sm font-bold text-[hsl(var(--navy))]">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">Traditional Monitoring</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-purple-600">HiTechLogic</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item) => (
                    <tr key={item.feature} className="border-b border-slate-100 hover:bg-purple-50/30 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[hsl(var(--navy))]">{item.feature}</td>
                      <td className="px-6 py-4 text-slate-600">{item.traditional}</td>
                      <td className="px-6 py-4 text-[hsl(var(--navy))] font-medium flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                        {item.hitechlogic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2 group">
                <span>Start Reducing Noise Today</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow text-purple-600">Business value</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Restore sanity to on-call operations</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Stop drowning in alerts and start focusing on innovation. Our intelligent oversight
                transforms monitoring from a burden into a strategic advantage.
              </p>
              <div className="mt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/case-studies" className="flex items-center gap-2 group">
                    <span>Read Success Stories</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-transparent hover:from-purple-50 transition-all hover:translate-x-2 duration-300 group">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-purple-600">Common scenarios</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Built for complex monitoring challenges</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="p-8 border-2 hover:border-purple-300 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-2">{useCase.title}</h3>
                    <p className="text-sm text-purple-600 font-semibold mb-3">{useCase.industry}</p>
                    <p className="text-slate-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-space bg-[hsl(var(--background))]">
        <div className="mx-auto w-full max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="eyebrow text-purple-600">Frequently asked questions</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Everything you need to know</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-300">
                <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">Still have questions?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>Email Us</span>
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Phone className="h-5 w-5" />
                  <span>Schedule a Call</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-space bg-gradient-to-br from-purple-600 to-[hsl(var(--navy))] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Award className="h-4 w-4" />
            <span className="text-sm font-semibold">82% Average Noise Reduction Guaranteed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to eliminate alert fatigue?</h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Let's show you how our intelligent event reduction can transform your monitoring operations
            and restore focus to your teams.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="xl" asChild className="bg-white text-purple-600 hover:bg-purple-50 shadow-2xl hover:scale-105 transition-all">
              <Link to="/contact" className="flex items-center gap-2 group">
                <Calendar className="h-5 w-5" />
                <span>Schedule Strategy Session</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/pricing" className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                <span>View Pricing</span>
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-purple-200 text-sm mb-4">Risk-free 30-day trial with guaranteed noise reduction</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm">No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm">Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
