import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Workflow, Zap, PlayCircle, RefreshCw, Shield, GitBranch, CheckCircle2, ArrowRight, Code, FileText, Clock, Target, Award, Phone, Mail, Calendar, TrendingUp, Activity } from "lucide-react";

const capabilities = [
  {
    icon: Code,
    title: "Codified Runbook Library",
    description: "Comprehensive library of pre-built, tested runbooks covering common operational scenarios with version control and audit trails.",
    highlight: "65+ runbooks",
  },
  {
    icon: PlayCircle,
    title: "Self-Healing Workflows",
    description: "Intelligent automation that detects issues and executes corrective actions automatically with built-in safety guardrails.",
    highlight: "Auto-remediation",
  },
  {
    icon: Shield,
    title: "Approval & Governance",
    description: "Multi-tier approval workflows with role-based access controls ensuring automation executes safely and compliantly.",
    highlight: "Enterprise-grade",
  },
  {
    icon: GitBranch,
    title: "Conditional Logic & Branching",
    description: "Sophisticated decision trees that adapt actions based on system state, environment variables, and runtime conditions.",
    highlight: "Smart decisions",
  },
  {
    icon: RefreshCw,
    title: "Automatic Rollback",
    description: "Built-in rollback mechanisms that detect failures and automatically restore systems to known-good states.",
    highlight: "Zero-risk",
  },
  {
    icon: FileText,
    title: "Complete Audit Logging",
    description: "Detailed execution logs capturing every action, decision, and outcome for compliance and troubleshooting.",
    highlight: "Full traceability",
  },
];

const benefits = [
  "Resolve 70% of common incidents automatically without human intervention",
  "Reduce mean time to resolution from hours to minutes with instant execution",
  "Eliminate repetitive manual tasks and free teams to focus on strategic work",
  "Ensure consistent execution of procedures regardless of time or team availability",
  "Minimize human error with tested, validated automation workflows",
  "Maintain compliance with auditable, approved automation procedures",
];

const metrics = [
  { label: "Automation Success Rate", value: "99.2%", icon: Target },
  { label: "Runbook Library", value: "65+", icon: FileText },
  { label: "Avg. Resolution Time", value: "<5 min", icon: Clock },
  { label: "Manual Effort Saved", value: "70%", icon: TrendingUp },
];

const automationJourney = [
  {
    phase: "Assessment",
    description: "Identify repetitive tasks and automation opportunities",
    duration: "Week 1-2",
    icon: FileText,
  },
  {
    phase: "Development",
    description: "Build & test runbooks with safety controls",
    duration: "Week 3-6",
    icon: Code,
  },
  {
    phase: "Deployment",
    description: "Staged rollout with monitoring and validation",
    duration: "Week 7-8",
    icon: PlayCircle,
  },
  {
    phase: "Optimization",
    description: "Refine & expand coverage continuously",
    duration: "Ongoing",
    icon: RefreshCw,
  },
];

const useCases = [
  {
    title: "Disk Space Management",
    description: "Automatically detect low disk space, clear temporary files, archive logs, and expand volumes before capacity issues impact services.",
    icon: RefreshCw,
    industry: "All Industries",
  },
  {
    title: "Service Recovery",
    description: "Detect failed services, attempt graceful restart, validate recovery, and escalate to humans only if automated recovery fails.",
    icon: Zap,
    industry: "SaaS & E-commerce",
  },
  {
    title: "Performance Remediation",
    description: "Identify performance degradation, execute optimization procedures, clear caches, and restart troubled components automatically.",
    icon: Target,
    industry: "Enterprise IT",
  },
  {
    title: "Security Response",
    description: "Detect security events, isolate affected systems, collect forensic data, and initiate containment procedures within seconds.",
    icon: Shield,
    industry: "Financial Services",
  },
];

const comparison = [
  {
    feature: "Incident Resolution",
    manual: "Manual execution, 2-4 hours average",
    automated: "Automatic execution, <5 minutes",
  },
  {
    feature: "Consistency",
    manual: "Varies by engineer and time",
    automated: "Identical execution every time",
  },
  {
    feature: "Availability",
    manual: "Limited to business hours/on-call",
    automated: "24/7/365 instant response",
  },
  {
    feature: "Error Rate",
    manual: "Human error in 15-20% of cases",
    automated: "99.2% success rate",
  },
  {
    feature: "Documentation",
    manual: "Manual notes, often incomplete",
    automated: "Complete audit trail automatically",
  },
  {
    feature: "Scalability",
    manual: "Limited by team size",
    automated: "Unlimited parallel execution",
  },
];

const faqs = [
  {
    question: "How do you ensure automation doesn't cause more problems than it solves?",
    answer: "Every runbook includes built-in safety checks, validation steps, and automatic rollback capabilities. We use a staged deployment approach with extensive testing in non-production environments first. Additionally, all automation has approval workflows and can be disabled instantly if needed.",
  },
  {
    question: "What happens if an automated action fails?",
    answer: "Runbooks include failure detection and automatic rollback to restore the previous state. Failed executions trigger immediate alerts to the operations team with full diagnostic context. We maintain detailed logs of every action for troubleshooting.",
  },
  {
    question: "Can automation handle complex scenarios that require judgment calls?",
    answer: "Yes. Our runbooks use conditional logic and decision trees to handle complex scenarios. For situations requiring human judgment, automation collects relevant data and escalates with recommendations, significantly accelerating decision-making.",
  },
  {
    question: "How long does it take to build a custom runbook?",
    answer: "Simple runbooks (disk cleanup, service restart) can be developed in 1-2 days. Complex multi-system workflows typically take 1-2 weeks including testing. We have 65+ pre-built runbooks that can be customized quickly.",
  },
  {
    question: "What if our systems change after runbooks are deployed?",
    answer: "Runbooks are version-controlled and maintained continuously. We monitor for environmental changes and update automation accordingly. You receive notifications of any updates with the option to review before deployment.",
  },
];

const trustIndicators = [
  { label: "Runbooks Executed", value: "1M+" },
  { label: "Success Rate", value: "99.2%" },
  { label: "Hours Saved Monthly", value: "500+" },
  { label: "Incident Prevention", value: "85%" },
];

const beforeAfter = [
  {
    metric: "Incident Resolution",
    before: "2-4 hours",
    after: "3-5 minutes",
    improvement: "95% faster",
  },
  {
    metric: "After-Hours Escalations",
    before: "40/month",
    after: "3/month",
    improvement: "93% reduction",
  },
  {
    metric: "Human Error Rate",
    before: "18%",
    after: "<1%",
    improvement: "17x better",
  },
  {
    metric: "Team Productivity",
    before: "60% reactive",
    after: "80% proactive",
    improvement: "2x improvement",
  },
];

export default function AutomatedCorrectiveActions() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://hitechlogic.com/services/automated-corrective-actions#service",
        name: "Automated Corrective Actions & Stabilization Workflows",
        provider: {
          "@type": "Organization",
          name: "HiTechLogic",
          "@id": "https://hitechlogic.com/#organization"
        },
        serviceType: "Infrastructure Automation & Self-Healing Systems",
        areaServed: "Worldwide",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://hitechlogic.com/services/automated-corrective-actions",
          servicePhone: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["English"]
          }
        },
        slogan: "Self-Healing Infrastructure That Never Sleeps",
        description: "Verified automation and self-healing workflows that reduce repeat incidents by 48%, shrink MTTR by 95%, and free engineering teams to focus on innovation. 65+ production-ready runbooks with compliance-ready audit trails.",
        offers: {
          "@type": "Offer",
          category: "Infrastructure Automation",
          itemOffered: {
            "@type": "Service",
            name: "Automated Corrective Actions & Self-Healing Workflows",
            description: "Enterprise automation platform with 65+ pre-built runbooks, self-healing capabilities, and compliance-ready audit trails. Reduce incident resolution from hours to minutes."
          }
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Automation & Runbook Services",
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
          audienceType: "Platform Engineering Teams, SRE Leaders, DevOps Directors, Operations Managers"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "128",
          bestRating: "5",
          worstRating: "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://hitechlogic.com/services/automated-corrective-actions#faq",
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
        "@id": "https://hitechlogic.com/services/automated-corrective-actions#breadcrumb",
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
            name: "Automated Corrective Actions",
            item: "https://hitechlogic.com/services/automated-corrective-actions"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Automated Corrective Actions & Self-Healing | Infrastructure Automation | HiTechLogic"
        description="Reduce incident resolution by 95% with self-healing automation. 65+ production runbooks, 99.2% success rate, <4 week playbook SLA. Transform reactive ops to proactive innovation with automated remediation & rollback."
        keywords="infrastructure automation, self-healing systems, automated remediation, runbook automation, incident automation, DevOps automation, workflow automation, IT process automation, automatic rollback, infrastructure orchestration"
        canonical="https://hitechlogic.com/services/automated-corrective-actions"
        schema={schema}
        ogType="website"
        ogImage="https://hitechlogic.com/images/services/automation-og.jpg"
        twitterCard="summary_large_image"
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="flex items-center gap-3 mb-6 animate-[fade-in_0.5s_ease-out]">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-white/15">
              <Zap className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
            </div>
            <span className="text-sm font-medium text-white/90 tracking-wide">Core Operations Discipline</span>
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-[fade-in_0.6s_ease-out_0.1s_both]">
            Automated Corrective <span className="text-[hsl(var(--accent-blue))]">Actions</span>
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed animate-[fade-in_0.7s_ease-out_0.2s_both]">
            Self-healing frameworks that remediate known failure modes before teams are paged during incidents.
            <span className="block mt-3 font-semibold text-white">65+ automated runbooks deployed across enterprise systems</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-in_0.8s_ease-out_0.3s_both]">
            <Button size="lg" asChild className="bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/90 text-white shadow-[0_20px_45px_-20px_rgba(46,107,255,0.8)] hover:shadow-[0_25px_50px_-12px_rgba(46,107,255,0.9)] hover:scale-105 transition-all duration-300">
              <Link to="/contact" className="flex items-center gap-2 group">
                <span>Schedule Workshop</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              <Link to="/demo" className="flex items-center gap-2 group">
                <span>View Case Studies</span>
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
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-[hsl(var(--navy))]">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator) => (
              <div key={indicator.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{indicator.value}</div>
                <div className="text-sm text-emerald-200">{indicator.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow text-emerald-600">The problem</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Repetitive firefighting drains teams</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Your teams are stuck in a loop: the same disk fills up, the same service crashes,
                the same cache needs clearing. Manual execution every single time.
              </p>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Night calls for issues that could be resolved in 30 seconds. Knowledge locked in
                individual heads. Inconsistent execution. Human error. Burnout.
              </p>
            </div>
            <div>
              <span className="eyebrow text-emerald-600">Our approach</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Codify, automate, accelerate</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                We transform tribal knowledge into tested, governed automation. Issues get resolved
                in seconds, not hours. Teams focus on innovation, not repetitive toil.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">70% of incidents resolved automatically</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Resolution time reduced from hours to minutes</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">Zero knowledge silos, full auditability</span>
                </div>
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact" className="flex items-center gap-2 group">
                    <span>See Automation in Action</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Impact */}
      <section className="section-space bg-gradient-to-br from-slate-50 to-emerald-50/30">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-emerald-600">Real impact</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              From manual to automated in 8 weeks
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              See the dramatic transformation automation delivers for engineering teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfter.map((item) => (
              <Card key={item.metric} className="p-6 text-center border-2 hover:border-emerald-300 transition-all hover:-translate-y-1 duration-300 group">
                <div className="text-sm font-semibold text-slate-600 mb-4">{item.metric}</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Manual</div>
                    <div className="text-2xl font-bold text-red-600">{item.before}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-emerald-600 mx-auto rotate-90 group-hover:translate-y-1 transition-transform" />
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Automated</div>
                    <div className="text-2xl font-bold text-green-600">{item.after}</div>
                  </div>
                </div>
                <div className="mt-4 px-3 py-2 bg-emerald-100 rounded-lg">
                  <div className="text-xs font-semibold text-emerald-900">{item.improvement}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="flex items-center gap-2 group">
                <span>Calculate Your ROI</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Automation Journey */}
      <section className="section-space bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow text-emerald-600">Implementation roadmap</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Your automation journey
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Our proven methodology takes you from repetitive manual tasks to intelligent automation.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-600 to-emerald-500/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-4 gap-6 relative">
              {automationJourney.map((phase, index) => (
                <Card key={phase.phase} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-emerald-500/50 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <phase.icon className="h-8 w-8" />
                    </div>
                    <div className="text-sm font-semibold text-emerald-600 mb-2">{phase.duration}</div>
                    <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-3">{phase.phase}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{phase.description}</p>
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
            <span className="eyebrow text-emerald-600">Core capabilities</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Enterprise-grade automation platform
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Built for reliability, governance, and safety with comprehensive audit trails.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <Card key={capability.title} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-emerald-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 text-xs font-semibold text-emerald-600 rounded-bl-lg">
                  {capability.highlight}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 group-hover:from-emerald-500/20 group-hover:to-emerald-600/10 transition-all group-hover:scale-110 duration-300">
                  <capability.icon className="h-6 w-6 text-emerald-600" />
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
            <span className="eyebrow text-emerald-600">See the difference</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
              Manual vs. Automated Operations
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th className="px-6 py-4 text-left text-sm font-bold text-[hsl(var(--navy))]">Feature</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">Manual Process</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-emerald-600">Automated</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item) => (
                    <tr key={item.feature} className="border-b border-slate-100 hover:bg-emerald-50/30 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[hsl(var(--navy))]">{item.feature}</td>
                      <td className="px-6 py-4 text-slate-600">{item.manual}</td>
                      <td className="px-6 py-4 text-[hsl(var(--navy))] font-medium flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                        {item.automated}
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
                <span>Start Automating Today</span>
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
              <span className="eyebrow text-emerald-600">Business value</span>
              <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">From reactive to proactive operations</h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Stop fighting fires and start preventing them. Automated corrective actions transform
                operations from constant reaction to strategic improvement.
              </p>
              <div className="mt-8">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/case-studies" className="flex items-center gap-2 group">
                    <span>Read Case Studies</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50/50 to-transparent hover:from-emerald-50 transition-all hover:translate-x-2 duration-300 group">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
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
            <span className="eyebrow text-emerald-600">Common scenarios</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Real-world automation use cases</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="p-8 border-2 hover:border-emerald-300 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-2">{useCase.title}</h3>
                    <p className="text-sm text-emerald-600 font-semibold mb-3">{useCase.industry}</p>
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
            <span className="eyebrow text-emerald-600">Frequently asked questions</span>
            <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">Everything you need to know</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-emerald-300">
                <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">Ready to discuss your automation needs?</p>
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
      <section className="section-space bg-gradient-to-br from-emerald-600 to-[hsl(var(--navy))] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Award className="h-4 w-4" />
            <span className="text-sm font-semibold">70% of Incidents Automated - Guaranteed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to automate repetitive work?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Let's identify your automation opportunities and build self-healing workflows that
            free your teams to focus on innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="xl" asChild className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-2xl hover:scale-105 transition-all">
              <Link to="/contact" className="flex items-center gap-2 group">
                <Calendar className="h-5 w-5" />
                <span>Schedule Automation Workshop</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/pricing" className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                <span>View Pricing</span>
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-emerald-200 text-sm mb-4">Risk-free 30-day trial with guaranteed automation success</p>
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
    </>
  );
}
