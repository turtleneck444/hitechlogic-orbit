import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  Activity,
  BarChart3,
  Gauge,
  Handshake,
  Server,
  ShieldCheck,
  Workflow,
  ArrowRight,
  Sparkles,
  Target,
  Globe,
  Phone,
  MessageCircle,
  Clock,
  Zap,
  Users,
  Award,
  Shield,
  CheckCircle2,
  Cloud,
  Mail,
  Calendar,
  AlertTriangle,
  BookOpen,
  TrendingUp,
  RefreshCw,
  Lightbulb,
} from "lucide-react";

export default function AutomatedCorrectiveActions() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "HiTechLogic",
    },
    serviceType: "Automated System Remediation",
    name: "Automated Corrective Actions",
    description: "AI-powered infrastructure automation and self-healing workflows that minimize incident recovery time and reduce operational overhead.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Custom automated remediation implementation with guaranteed reduction in MTTR",
    },
  };

  return (
    <>
      <SEO
        title="Automated Corrective Actions & Self-Healing Infrastructure | HiTechLogic"
        description="Reduce incident recovery time by 95% with AI-powered automated remediation, self-healing workflows, and intelligent incident response. Industry-leading operational efficiency."
        keywords="automated remediation, self-healing infrastructure, incident response automation, runbooks, workflow automation, AI operations, MTTR reduction"
        canonical="https://hitechlogic.com/services/automated-corrective-actions"
        schema={schema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Workflow className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Service Overview</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Automated Corrective Actions
              <span className="text-[hsl(var(--accent-blue))] block sm:inline"> & Self-Healing</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl leading-relaxed">
              Transform your operating model with AI-powered automation and self-healing workflows.
              Reduce incident recovery time by 95% while your teams focus on strategic innovation rather than firefighting.
            </p>

            <div className="mt-10">
              <Button variant="hero" size="xl" asChild className="shadow-[0_20px_45px_-20px_rgba(139,92,246,0.8)] hover:shadow-[0_25px_45px_-12px_rgba(139,92,246,0.9)] hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Target className="h-5 w-5" />
                  <span>Explore Automation Solutions</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "MTTR Reduction", value: "95%", icon: TrendingUp },
                { label: "Incident Response", value: "<2 min", icon: Zap },
                { label: "Automation Rate", value: "99.2%", icon: RefreshCw },
                { label: "Cost Reduction", value: "48%", icon: BarChart3 },
              ].map((metric, index) => (
                <div key={metric.label} className="text-center group">
                  <div className="flex justify-center mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-white/5 group-hover:from-[hsl(var(--accent-blue))]/20 group-hover:to-white/10 transition-all duration-300">
                      <metric.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">{metric.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What It Solves */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">The challenge</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                  Operations trapped in manual firefighting cycles
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Traditional IT operations spend 70% of their time on routine remediation and firefighting.
                  Manual processes create inconsistent outcomes, extended downtimes, and frustrated engineers
                  who can't focus on business-critical innovation.
                </p>
                <div className="mt-6 p-6 bg-slate-50 border-l-4 border-slate-300 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-slate-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Operational Inefficiency</div>
                      <div className="text-sm text-slate-700 mt-1">
                        Average time to resolve critical incidents: 15-30 minutes. Cost per incident: $5,400.
                        Teams stuck in reactive maintenance cycles instead of strategic growth.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">Our solution</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                  AI-powered self-healing infrastructure
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Deploy intelligent automated remediation that learns from every incident and continuously
                  improves. Your infrastructure self-corrects problems before they impact business operations.
                </p>
                <div className="mt-6 p-6 bg-blue-50 border-l-4 border-[hsl(var(--accent-blue))]/30 rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Intelligent Automation</div>
                      <div className="text-sm text-slate-700 mt-1">
                        Systems that automatically diagnose issues, apply remediation, and learn from each
                        incident, reducing recovery time to under 2 minutes consistently.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact" className="flex items-center gap-2 group">
                      <span>Schedule Technical Assessment</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Intelligent automation workflow</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                From alert to resolution in minutes
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Our AI-driven platform continuously monitors your infrastructure, instantly detects anomalies,
                and applies the most appropriate remediation without human intervention.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Real-Time Monitoring",
                  description: "Continuous telemetry collection from all infrastructure components with AI-powered anomaly detection.",
                  icon: Activity,
                },
                {
                  step: "2",
                  title: "Smart Diagnosis",
                  description: "Machine learning analyzes patterns and correlates data to identify root causes instantly.",
                  icon: TrendingUp,
                },
                {
                  step: "3",
                  title: "Automated Remediation",
                  description: "Pre-built runbooks execute with full audit trails and rollback capabilities if needed.",
                  icon: Zap,
                },
                {
                  step: "4",
                  title: "Continuous Learning",
                  description: "Each incident improves future responses through machine learning model refinement.",
                  icon: Lightbulb,
                },
              ].map((step, index) => (
                <Card key={step.step} className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--navy))] text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {step.step}
                    </div>
                    <div className="flex justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--accent-blue))]/10 group-hover:bg-[hsl(var(--accent-blue))]/20 transition-all">
                        <step.icon className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Comprehensive automation</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Enterprise-grade remediation capabilities
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Deployed across infrastructure, applications, databases, and cloud services with guaranteed
                SLAs and zero-downtime execution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Infrastructure Automation",
                  items: ["Server recovery", "Load balancer failover", "Network reconfiguration", "Storage remediation", "Instance scaling"],
                  icon: Server,
                },
                {
                  title: "Application Healing",
                  items: ["Container restart", "Service mesh recovery", "Database failover", "Cache warming", "API circuit breaking"],
                  icon: Cloud,
                },
                {
                  title: "Performance Optimization",
                  items: ["Resource allocation", "Memory management", "Queue processing", "Background job recovery", "Load shedding"],
                  icon: TrendingUp,
                },
                {
                  title: "Security Remediation",
                  items: ["Vulnerability patching", "Access control adjustment", "Threat containment", "Log analysis", "Compliance correction"],
                  icon: ShieldCheck,
                },
                {
                  title: "Database Recovery",
                  items: ["Connection pooling", "Transaction recovery", "Index optimization", "Query timeout handling", "Replication repair"],
                  icon: Activity,
                },
                {
                  title: "Custom Runbooks",
                  items: ["Business-specific workflows", "Third-party integration", "Legacy system recovery", "Multi-step remediation", "Conditional logic"],
                  icon: BookOpen,
                },
              ].map((capability, index) => (
                <Card key={capability.title} className="p-6 border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[hsl(var(--navy))] mb-4">{capability.title}</h3>
                      <ul className="space-y-2">
                        {capability.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-blue))] shrink-0" />
                            {item}
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
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Measurable results</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Transform operational efficiency
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Proven results across hundreds of deployments with guaranteed performance improvements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  metric: "615",
                  label: "Production Runbooks",
                  description: "Comprehensive automation library covering all critical systems",
                },
                {
                  metric: "95%",
                  label: "MTTR Reduction",
                  description: "Average incident resolution time dropped from 30min to 1.5min",
                },
                {
                  metric: "99.9%",
                  label: "Automation Success Rate",
                  description: "Consistent successful automated remediation execution",
                },
                {
                  metric: "$2.1M",
                  label: "Annual Cost Savings",
                  description: "Eliminated manual incident response and overtime costs",
                },
              ].map((result, index) => (
                <Card key={result.label} className="p-6 text-center border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-blue))] mb-2">{result.metric}</div>
                  <div className="text-lg font-semibold text-[hsl(var(--navy))] mb-2">{result.label}</div>
                  <div className="text-sm text-slate-600">{result.description}</div>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Operational Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">24/7 Zero-Touch Recovery</div>
                      <div className="text-slate-600">Automated remediation works around the clock without human intervention</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Predictable Incident Response</div>
                      <div className="text-slate-600">Consistent, auditable remediation processes with guaranteed recovery times</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Intelligent Optimization</div>
                      <div className="text-slate-600">AI learning improves remediation success rates and reduces false positives</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Business Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <TrendingUp className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Free Development Teams</div>
                      <div className="text-slate-600">Engineering teams can focus on innovation instead of operational firefighting</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <TrendingUp className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Improved Customer Experience</div>
                      <div className="text-slate-600">Faster incident resolution improves application uptime and user satisfaction</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all hover:translate-x-2 duration-300 group">
                    <TrendingUp className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Revenue Protection</div>
                      <div className="text-slate-600">Automated recovery protects revenue streams during critical business hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <Card className="p-8 border-2 border-[hsl(var(--accent-blue))]/20 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-transparent">
              <div className="text-center max-w-3xl mx-auto">
                <Award className="h-12 w-12 text-[hsl(var(--accent-blue))] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-4">Real-World Success: Enterprise Financial Services</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Deployed automated corrective actions across critical infrastructure, achieving 99.9% uptime
                  and reducing incident resolution time from 45 minutes to 1.2 minutes on average. During peak
                  business periods, automated recovery prevented significant revenue impact.
                </p>
                <div className="flex justify-center gap-12 text-sm">
                  <div>
                    <div className="font-bold text-[hsl(var(--accent-blue))] text-2xl">45 min</div>
                    <div className="text-slate-600">Before (manual response)</div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-[hsl(var(--accent-blue))] self-center" />
                  <div>
                    <div className="font-bold text-[hsl(var(--accent-blue))] text-2xl">1.2 min</div>
                    <div className="text-slate-600">After (auto-remediation)</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-space bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--navy))]/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff10,transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Target className="h-4 w-4" />
              <span className="text-sm font-semibold">Ready for Automation?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Operations with Intelligent Automation
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join leading organizations that have automated their critical operations. Experience the
              freedom of systems that fix themselves and teams that focus on innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-blue-50 shadow-2xl hover:scale-105 transition-all">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Technical Demo</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/case-studies" className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span>View Success Stories</span>
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-blue-200 text-sm mb-4">Free 30-day pilot program available</p>
              <div className="flex justify-center gap-8 text-sm text-white/80">
                <div>
                  <div className="font-medium text-white">Deployment Time</div>
                  <div>2-4 weeks</div>
                </div>
                <div>
                  <div className="font-medium text-white">Success Guarantee</div>
                  <div>99% automation rate</div>
                </div>
                <div>
                  <div className="font-medium text-white">24/7 Monitoring</div>
                  <div>Always active</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}
