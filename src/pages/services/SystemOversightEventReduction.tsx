import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import WhyDifferentSection from "@/components/sections/WhyDifferentSection";
import {
  Activity,
  TrendingUp,
  BarChart3,
  AlertTriangle,
  Eye,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Award,
  Target,
  Monitor,
  Brain,
  Bell,
} from "lucide-react";

export default function SystemOversightEventReduction() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://hitechlogic.com/services/system-oversight-event-reduction#service",
        name: "System Oversight & Event Reduction",
        description: "Transform alert chaos into actionable intelligence with AI-powered telemetry, expert routing, and correlation that keeps executives aligned on true risk signals.",
        provider: { "@type": "Organization", "@id": "https://hitechlogic.com/#organization", name: "HiTechLogic" },
        serviceType: "Systems Monitoring & Alert Management",
        areaServed: "Worldwide",
        audience: { "@type": "Audience", audienceType: "IT Operations Leaders, SRE Teams, VP Engineering" },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://hitechlogic.com/services/system-oversight-event-reduction",
        },
        offers: {
          "@type": "Offer",
          category: "Alert Management",
          itemOffered: { "@type": "Service", name: "System Oversight & Event Reduction", description: "Intelligent monitoring and alert management service with 82% noise reduction" },
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://hitechlogic.com/services/system-oversight-event-reduction#webpage",
        url: "https://hitechlogic.com/services/system-oversight-event-reduction",
        name: "System Oversight & Event Reduction | HiTechLogic",
        description: "Transform alert chaos into actionable intelligence with AI-powered telemetry, expert routing, and correlation. 82% alert noise reduction.",
        inLanguage: "en-US",
        isPartOf: { "@id": "https://hitechlogic.com/#website" },
        about: { "@id": "https://hitechlogic.com/#organization" },
        datePublished: "2024-01-01",
        dateModified: "2025-02-10",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://hitechlogic.com/services/system-oversight-event-reduction#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hitechlogic.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://hitechlogic.com/services" },
          { "@type": "ListItem", position: 3, name: "System Oversight & Event Reduction", item: "https://hitechlogic.com/services/system-oversight-event-reduction" },
        ],
      },
    ],
  };

  const monitoringCapabilities = [
    {
      title: "AI-Powered Event Correlation",
      description: "Machine learning algorithms analyze patterns across millions of events to identify true issues versus noise",
      capabilities: ["Pattern recognition algorithms", "Event deduplication", "Root cause analysis", "Predictive alerting"],
      icon: Brain,
    },
    {
      title: "Intelligent Alert Routing",
      description: "Smart routing based on severity, business impact, and team expertise to ensure the right people respond",
      capabilities: ["Severity-based escalation", "Expert routing logic", "Business impact scoring", "On-call rotation management"],
      icon: Bell,
    },
    {
      title: "Executive Dashboard",
      description: "Clean, actionable visibility for leadership with trend analysis and risk assessment summaries",
      capabilities: ["Executive KPIs", "Risk trend visualization", "MTTR tracking", "Incident impact analysis"],
      icon: Monitor,
    },
  ];

  const successMetrics = [
    {
      metric: "−82%",
      label: "Alert Noise Reduction",
      description: "Elimination of false positives and irrelevant alerts",
    },
    {
      metric: "<2 min",
      label: "Threat Detection",
      description: "Average time to detect critical system issues",
    },
    {
      metric: "97%",
      label: "Alert Accuracy",
      description: "True positive rate for actionable alerts",
    },
    {
      metric: "65%",
      label: "Incident Response Time",
      description: "Reduction in mean time to resolution",
    },
  ];

  return (
    <>
      <SEO
        title="System Oversight & Event Reduction | HiTechLogic"
        description="Transform alert chaos into actionable intelligence. Reduce alert noise by 82%, detect threats in under 2 minutes with AI-powered monitoring and intelligent correlation."
        keywords="system monitoring, alert management, event correlation, noise reduction, threat detection, incident response, ai monitoring"
        canonical="https://hitechlogic.com/services/system-oversight-event-reduction"
        schema={schema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzM5yZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LTI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Activity className="h-7 w-7 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Intelligent Monitoring</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-balance max-w-5xl">
              System Oversight
              <span className="text-[hsl(var(--accent-blue))] block sm:inline"> & Event Reduction</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">
              Transform alert chaos into actionable intelligence. Our AI-powered telemetry reduces
              noise by 82% while detecting critical issues in under 2 minutes, keeping your team
              focused on what matters most.
            </p>

            <div className="mt-10">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-slate-50 shadow-2xl border-white">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Eye className="h-5 w-5" />
                  <span>Eliminate Alert Chaos</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: "Noise Reduction", value: "−82%", icon: AlertTriangle },
                { label: "Detection Time", value: "<2 min", icon: Clock },
                { label: "Alert Accuracy", value: "97%", icon: Target },
                { label: "MTTR Impact", value: "−65%", icon: TrendingUp },
              ].map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/5 p-4 md:p-5 text-center shadow-lg shadow-black/10">
                  <div className="flex justify-center mb-2">
                    <metric.icon className="h-5 w-5 md:h-6 md:w-6 text-[hsl(var(--accent-blue))]" />
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{metric.value}</div>
                  <div className="mt-1 text-xs md:text-sm font-medium text-white/70">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">Alert fatigue crisis</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                  Monitoring systems drowning in noise
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Modern IT environments generate millions of alerts daily, with 99% being noise or
                  irrelevant information. Teams waste hours investigating false positives while
                  critical issues hide in plain sight, leading to slower response times and
                  frustrated, burned-out engineers.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "Average enterprise receives 1.7M alerts per month",
                    "Only 3% of alerts are actionable (industry average)",
                    "Alert fatigue causes 50% slower incident response",
                    "Teams spend 60%+ time investigating false alarms",
                  ].map((fact) => (
                    <div key={fact} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-slate-400" />
                      </div>
                      <p className="text-slate-700">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">Noise-calmed intelligence</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                  Smart monitoring that surfaces true risk
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  We don't just add more alerts—we dramatically reduce noise while increasing
                  detection accuracy. Our AI identifies patterns, correlates events, and routes
                  only actionable intelligence to the right people at the right time.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "82% reduction in irrelevant alerts and false positives",
                    "Sub-2-minute detection of critical system issues",
                    "97% accuracy rate for actionable intelligence",
                    "Executive dashboards with real business risk insights",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact" className="flex items-center gap-2 group">
                      <span>Stop Alert Overload</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monitoring Capabilities */}
        <section id="capabilities" className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Intelligent monitoring platform</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                AI that keeps executives aligned on risks
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Our platform combines machine learning, expert routing, and executive reporting
                to transform raw telemetry into the strategic intelligence needed to protect
                and grow your business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {monitoringCapabilities.map((capability, index) => (
                <Card key={capability.title} className="p-8 border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-3">{capability.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{capability.description}</p>
                      <ul className="space-y-3">
                        {capability.capabilities.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-blue))] shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Measurable intelligence gains</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                From alert fatigue to strategic oversight
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Stop letting monitoring costs and alert noise drain your resources. Focus your
                team on innovation while gaining unprecedented visibility into your system's health.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {successMetrics.map((metric, index) => (
                <Card key={metric.label} className="p-6 text-center border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-blue))] mb-2">{metric.metric}</div>
                  <div className="text-lg font-semibold text-[hsl(var(--navy))] mb-2">{metric.label}</div>
                  <div className="text-sm text-slate-600">{metric.description}</div>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Operational Efficiency</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <Zap className="h-6 w-6 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Reduced Investigation Time</div>
                      <div className="text-slate-600">Engineers spend 82% less time on false alarms and irrelevant alerts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <Clock className="h-6 w-6 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Faster Incident Response</div>
                      <div className="text-slate-600">Sub-2-minute detection enables proactive resolution before business impact</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <Shield className="h-6 w-6 text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Improved Reliability</div>
                      <div className="text-slate-600">97% alert accuracy reduces missed issues and prevents system failures</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Strategic Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <Monitor className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Executive Visibility</div>
                      <div className="text-slate-600">Clean dashboards with business-relevant risk indicators and trend analysis</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <TrendingUp className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Cost Optimization</div>
                      <div className="text-slate-600">Reduced monitoring overhead and eliminated false alarm investigation costs</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <Target className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--accent-blue))]">Risk Intelligence</div>
                      <div className="text-slate-600">Data-driven insights on system health and strategic risk mitigation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Journey Timeline */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Rapid transformation</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                How we deliver intelligent monitoring success
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                From alert chaos to strategic intelligence, our structured approach ensures your team
                stays focused on innovation while achieving unprecedented system observability.
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--accent-blue))]/20 via-[hsl(var(--accent-blue))]/30 to-[hsl(var(--accent-blue))]/20" />

              <div className="space-y-12">
                {[
                  {
                    step: "1",
                    title: "Environment Assessment & Baseline",
                    description: "Comprehensive analysis of current monitoring setup, alert volumes, incident response patterns, and executive visibility requirements. Establish current-state benchmarks for noise, accuracy, and team efficiency.",
                    duration: "Weeks 1-2",
                    icon: Activity,
                  },
                  {
                    step: "2",
                    title: "AI Correlation Engine Implementation",
                    description: "Deploy and train machine learning algorithms on your specific environment. Implement intelligent alert routing, pattern recognition, and executive dashboard design tailored to your business priorities.",
                    duration: "Weeks 3-4",
                    icon: Brain,
                  },
                  {
                    step: "3",
                    title: "Intelligent Alert System Activation",
                    description: "Launch the correlation engine while running parallel to existing monitoring. Train teams on new alert patterns, response workflows, and executive reporting features with minimal disruption to operations.",
                    duration: "Weeks 5-6",
                    icon: TrendingUp,
                  },
                  {
                    step: "4",
                    title: "Complete Transition & Optimization",
                    description: "Full handover with ongoing monitoring refinement. Fine-tune AI algorithms, optimize alert accuracy, and establish continuous improvement processes for sustained operational intelligence.",
                    duration: "Ongoing",
                    icon: Monitor,
                  },
                ].map((phase, index) => (
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
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2 group">
                  <span>End Alert Chaos</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <Card className="p-8 border-2 border-[hsl(var(--accent-blue))]/20 bg-gradient-to-br from-blue-50/50 to-transparent">
              <div className="text-center max-w-3xl mx-auto">
                <Award className="h-12 w-12 text-[hsl(var(--accent-blue))] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-4">Real-World Impact: From Alert Chaos to Intelligence</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Enterprise organizations regularly face overwhelming alert volumes. With our intelligent monitoring platform,
                  teams achieve immediate results: 82% reduction in alert noise, sub-2-minute threat detection, and 65% faster
                  incident response. Operations teams can now focus on strategic initiatives instead of constant alert triage.
                </p>
                <div className="flex justify-center gap-12 text-sm">
                  <div>
                    <div className="font-bold text-[hsl(var(--accent-blue))] text-2xl">2.3M alerts</div>
                    <div className="text-slate-600">Monthly before</div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-[hsl(var(--accent-blue))] self-center" />
                  <div>
                    <div className="font-bold text-[hsl(var(--accent-blue))] text-2xl">420K alerts</div>
                    <div className="text-slate-600">Monthly after (82% reduction)</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Why HiTechLogic Is Different */}
        <WhyDifferentSection />

        {/* Why customers replace legacy monitoring with HiTechLogic */}
        <section className="section-space bg-gradient-to-br from-slate-50 to-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">4. Why customers replace legacy monitoring with HiTechLogic</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Intelligent Automation vs. Basic Monitoring
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                We don't just monitor - we prevent issues, automate recovery, and continuously optimize
                performance across your entire infrastructure ecosystem.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-slate-200 rounded-2xl shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--navy))]/90 text-white">
                    <th className="px-6 py-4 text-left font-bold text-lg">Capability</th>
                    <th className="px-6 py-4 text-center font-bold text-lg border-l border-slate-300">Legacy Monitoring</th>
                    <th className="px-6 py-4 text-center font-bold text-lg border-l border-slate-300 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--accent-blue))]/90">HiTechLogic</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      capability: "Issue Detection",
                      legacy: "Reactive alerts on symptoms only",
                      hitechlogic: "Predictive anomaly detection with root cause correlation",
                    },
                    {
                      capability: "Response Time",
                      legacy: "15-30 minutes to detect and notify",
                      hitechlogic: "<2 minutes automated remediation",
                    },
                    {
                      capability: "Resolution Method",
                      legacy: "Manual investigation and human intervention",
                      hitechlogic: "Automated runbooks with intelligent decision trees",
                    },
                    {
                      capability: "Learning & Adaptation",
                      legacy: "Static thresholds and fixed alerts",
                      hitechlogic: "AI learns from each incident, continuously improving",
                    },
                    {
                      capability: "Operational Overhead",
                      legacy: "70% of time spent on routine tasks",
                      hitechlogic: "DevOps focus on innovation, not firefighting",
                    },
                    {
                      capability: "Cost Efficiency",
                      legacy: "$5,400 average cost per incident",
                      hitechlogic: "$540 average with 90% cost reduction",
                    },
                    {
                      capability: "Uptime SLA",
                      legacy: "Industry standard 99.9%",
                      hitechlogic: "Guaranteed 99.99% with automated fallbacks",
                    },
                  ].map((row, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30 transition-all duration-300`}>
                      <td className="px-6 py-4 font-semibold text-[hsl(var(--navy))] text-left border-r border-slate-200">
                        {row.capability}
                      </td>
                      <td className="px-6 py-4 text-slate-600 text-center text-sm">
                        {row.legacy}
                      </td>
                      <td className="px-6 py-4 bg-gradient-to-r from-green-50 to-green-100/50 font-semibold text-green-800 text-center text-sm border-l-2 border-green-200">
                        <CheckCircle2 className="h-5 w-5 text-green-600 inline-block mr-2" />
                        {row.hitechlogic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-green-50/50 rounded-2xl p-8 border border-[hsl(var(--accent-blue))]/20">
                <TrendingUp className="h-12 w-12 text-[hsl(var(--accent-blue))] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-4">90% Operational Cost Reduction</h3>
                <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                  Customers consistently report dramatic improvements in both operational efficiency
                  and system reliability when replacing legacy monitoring with HiTechLogic's
                  intelligent automation platform.
                </p>
                <div className="flex justify-center gap-8 text-sm">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[hsl(var(--accent-blue))]">615</div>
                    <div className="text-slate-600">Pre-built runbooks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[hsl(var(--accent-blue))]">99.9%</div>
                    <div className="text-slate-600">Automation success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[hsl(var(--accent-blue))]">$2.1M</div>
                    <div className="text-slate-600">Annual savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-space bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--navy))]/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff10,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Activity className="h-4 w-4" />
              <span className="text-sm font-semibold">Intelligent Oversight</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              End Alert Chaos, Gain Strategic Intelligence
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't let monitoring systems bury your team in noise. Experience 82% reduction in
              irrelevant alerts, 97% accuracy in actionable intelligence, and detection of critical
              issues in under 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-blue-50 shadow-2xl hover:scale-105 transition-all">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Eye className="h-5 w-5" />
                  <span>Assess Monitoring Health</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/services" className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  <span>Explore All Services</span>
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-blue-200 text-sm mb-4">Free monitoring assessment • 2-week pilot program • No long-term commitment</p>
              <div className="flex justify-center gap-8 text-sm text-white/80">
                <div>
                  <div className="font-medium text-white">Implementation Time</div>
                  <div>4-8 weeks</div>
                </div>
                <div>
                  <div className="font-medium text-white">Alert Noise Reduction</div>
                  <div>Up to 82%</div>
                </div>
                <div>
                  <div className="font-medium text-white">Detection Accuracy</div>
                  <div>97%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}
