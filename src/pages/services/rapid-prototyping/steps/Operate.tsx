import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  Shield,
  TrendingUp,
  BarChart3,
  Activity,
  DollarSign,
  Target,
  ArrowRight,
  CheckCircle2,
  Clock,
  Monitor,
  Database,
  Cloud,
  Zap,
  Award,
  Settings,
} from "lucide-react";

export default function Operate() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "HiTechLogic",
    },
    serviceType: "Production Operations Management",
    name: "Operate & Elevate",
    description: "Transition to 24/7 reliability with FinOps oversight, continuous improvements, and enterprise-grade operations management.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Production operations management with continuous optimization and scaling support",
    },
  };

  const operationalCapabilities = [
    {
      title: "24/7 Production Monitoring",
      description: "Enterprise-grade monitoring with intelligent alerting, automated incident response, and real-time performance tracking",
      capabilities: ["Real-time monitoring dashboards", "Automated incident detection", "Performance alerting", "SLA compliance tracking"],
      icon: Monitor,
    },
    {
      title: "FinOps & Cost Management",
      description: "Continuous cost optimization with detailed spend analysis, budget forecasting, and automated resource scaling",
      capabilities: ["Resource usage analytics", "Automated cost optimization", "Budget vs. actual reporting", "Scaling recommendations"],
      icon: DollarSign,
    },
    {
      title: "Reliability Engineering",
      description: "Continuous improvement through automated retrospectives, performance optimization, and proactive scaling",
      capabilities: ["Performance monitoring", "Automated scaling", "Chaos engineering", "Incident post-mortems"],
      icon: Shield,
    },
  ];

  const successMetrics = [
    {
      metric: "99.9%",
      label: "Uptime Maintained",
      description: "Enterprise-grade reliability with minimal downtime",
    },
    {
      metric: "35%",
      label: "Cost Reduction",
      description: "Through FinOps optimization and right-sizing",
    },
    {
      metric: "<2 min",
      label: "MTTR Average",
      description: "Mean time to resolution for incidents",
    },
    {
      metric: "85%",
      label: "Operational Efficiency",
      description: "Automating manual processes and workflows",
    },
  ];

  return (
    <>
      <SEO
        title="Production Operations & Scaling Support | HiTechLogic"
        description="24/7 production operations with FinOps oversight, automated scaling, and continuous optimization. Reduce costs 35% while achieving 99.9% uptime."
        keywords="production operations, finops, cost optimization, scalability, 24/7 monitoring, reliability engineering, cloud operations"
        canonical="https://hitechlogic.com/services/rapid-prototyping/steps/operate"
        schema={schema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzM5yZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LTI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Phase 03</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Operate
              <span className="text-[hsl(var(--accent-blue))]/80 block sm:inline"> & Elevate</span>
            </h1>
            <p className="mt-6 text-xl text-slate-200 max-w-3xl leading-relaxed">
              Transform your MVP into a world-class production operation. Experience enterprise-grade
              reliability with FinOps optimization, automated scaling, and continuous improvement
              that grows your business without breaking your budget.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-slate-50 shadow-2xl border-white">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Settings className="h-5 w-5" />
                  <span>Scale Your Operations</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="text-white border-white/30 hover:bg-white/10 hover:border-white/50">
                <Link to="#capabilities">
                  <Target className="h-5 w-5 mr-2" />
                  See Operational Excellence
                </Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Uptime SLA", value: "99.9%", icon: Shield },
                { label: "Cost Savings", value: "35%", icon: DollarSign },
                { label: "Response Time", value: "<2 min", icon: Clock },
                { label: "Automated", value: "85%", icon: Zap },
              ].map((metric, index) => (
                <Card key={metric.label} className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-4 text-center group hover:bg-white/15 transition-all hover:scale-105">
                  <div className="flex justify-center mb-2">
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-xs font-medium text-[hsl(var(--accent-blue))]/80">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* From Launch to Scale */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">MVP to Enterprise</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                  Operate like a platform from day one
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Launching isn't the finish line—it's the starting point. Our operational excellence
                  ensures your product scales gracefully while you focus on acquiring users and
                  growing revenue. Experience enterprise-level operations without enterprise-level costs.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "Production-grade monitoring from launch day",
                    "FinOps oversight prevents cost overruns",
                    "Automated scaling handles traffic spikes",
                    "Enterprise reliability meets startup speed",
                  ].map((fact) => (
                    <div key={fact} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                      <p className="text-slate-700">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">Operational maturity</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                  Continuous evolution, predictable growth
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Our operations team acts as your extended engineering team, handling the
                  infrastructure complexity so your developers can focus on product innovation.
                  Regular optimization sprints and FinOps analysis ensure your costs scale
                  efficiently with your growth.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "Dedicated operations team for your platform",
                    "Weekly performance and cost optimization reviews",
                    "Automated scaling and performance management",
                    "24/7 monitoring with sub-2-minute incident response",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                      <p className="text-slate-700 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact" className="flex items-center gap-2 group">
                      <span>See Enterprise Operations</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Capabilities */}
        <section id="capabilities" className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Enterprise operations platform</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Operate at Fortune 500 scale
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Experience the operational rigor of enterprise IT with the agility of a startup.
                Our platform delivers continuous optimization, cost management, and reliability
                engineering that grows with your business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {operationalCapabilities.map((capability, index) => (
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

        {/* Performance & Cost Benefits */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Measurable operational excellence</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Enterprise performance, startup costs
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Our clients achieve Fortune 500 operational metrics while maintaining the
                lean cost structure needed for startup growth and investment attraction.
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
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Reliability & Performance</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--accent-blue))]/5 to-transparent hover:from-[hsl(var(--accent-blue))]/10 transition-all hover:translate-x-2 duration-300 group">
                    <Shield className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">99.9% Uptime Guarantee</div>
                      <div className="text-slate-600">Enterprise-grade reliability with automated failover and redundancy</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--accent-blue))]/5 to-transparent hover:from-[hsl(var(--accent-blue))]/10 transition-all hover:translate-x-2 duration-300 group">
                    <TrendingUp className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Sub-2-Minute MTTR</div>
                      <div className="text-slate-600">Automated incident detection and remediation with human oversight</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--accent-blue))]/5 to-transparent hover:from-[hsl(var(--accent-blue))]/10 transition-all hover:translate-x-2 duration-300 group">
                    <Monitor className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Real-Time Monitoring</div>
                      <div className="text-slate-600">Comprehensive dashboards with predictive analytics and alerting</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-6">Cost Optimization & Scaling</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--accent-blue))]/5 to-transparent hover:from-[hsl(var(--accent-blue))]/10 transition-all hover:translate-x-2 duration-300 group">
                    <DollarSign className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">35% Cost Reduction</div>
                      <div className="text-slate-600">FinOps-driven optimization and automated resource right-sizing</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--accent-blue))]/5 to-transparent hover:from-[hsl(var(--accent-blue))]/10 transition-all hover:translate-x-2 duration-300 group">
                    <Activity className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Automated Scaling</div>
                      <div className="text-slate-600">Intelligent resource allocation based on demand patterns and forecasts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--accent-blue))]/5 to-transparent hover:from-[hsl(var(--accent-blue))]/10 transition-all hover:translate-x-2 duration-300 group">
                    <BarChart3 className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[hsl(var(--navy))]">Detailed Analytics</div>
                      <div className="text-slate-600">Cost, performance, and usage analytics with actionable optimization recommendations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scale with Confidence */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Growth without growing pains</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Scale from hundreds to millions of users
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Our operations platform is designed to grow with your business. From your first
                100 users to millions, we ensure your infrastructure scales efficiently while
                maintaining the performance and cost-efficiency you need to compete.
              </p>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <Card className="p-8 border-2 border-[hsl(var(--accent-blue))]/30 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-transparent">
              <div className="text-center max-w-3xl mx-auto">
                <Award className="h-12 w-12 text-[hsl(var(--accent-blue))] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-4">Operations That Scale</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Our operational support enables companies to scale efficiently. With automated scaling,
                  cost optimization, and 24/7 monitoring, we support rapid growth while keeping cloud costs
                  significantly below industry averages. Our clients achieve operational excellence that
                  becomes a key differentiator for their business.
                </p>
                <div className="flex justify-center gap-12 text-sm">
                  <div>
                    <div className="font-bold text-[hsl(var(--accent-blue))] text-2xl">10x Growth</div>
                    <div className="text-slate-600">Scalable operations</div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-[hsl(var(--accent-blue))] self-center" />
                  <div>
                    <div className="font-bold text-[hsl(var(--accent-blue))] text-2xl">35% Savings</div>
                    <div className="text-slate-600">Cost optimization</div>
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
              <Shield className="h-4 w-4" />
              <span className="text-sm font-semibold">Operations Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Operate Like an Enterprise, Grow Like a Startup
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Don't let operational complexity slow your growth. Experience enterprise-grade
              reliability, intelligent cost management, and unlimited scalability without
              breaking your runway or hiring an entire DevOps team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-slate-50 shadow-2xl hover:scale-105 transition-all">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Cloud className="h-5 w-5" />
                  <span>Start Enterprise Operations</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/services" className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  <span>Explore All Services</span>
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-slate-300 text-sm mb-4">Free operations assessment • 30-day implementation guarantee • 24/7 support included</p>
              <div className="flex justify-center gap-8 text-sm text-white/80">
                <div>
                  <div className="font-medium text-white">Support Level</div>
                  <div>24/7 Enterprise</div>
                </div>
                <div>
                  <div className="font-medium text-white">Response Time</div>
                  <div>{'<2 minutes'}</div>
                </div>
                <div>
                  <div className="font-medium text-white">Uptime SLA</div>
                  <div>99.9% guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}
