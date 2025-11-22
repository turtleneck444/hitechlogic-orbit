import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import {
  Code2,
  Cpu,
  Database,
  Monitor,
  ArrowRight,
  CheckCircle2,
  Clock,
  Rocket,
  TrendingUp,
  Zap,
  Settings,
  Wrench,
  Play,
  Award,
  Target,
} from "lucide-react";

export default function BuildLaunch() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "HiTechLogic",
    },
    serviceType: "AI-Accelerated Development",
    name: "Build & Launch Production MVPs",
    description: "Sprint-based development that turns validated concepts into working MVPs using AI-assisted coding, reusable components, and enterprise scaffolding with production-ready infrastructure.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "AI-accelerated MVP development from validated concept to production launch",
    },
  };

  const capabilities = [
    {
      title: "AI-Assisted Development",
      description: "Machine learning powered code generation, pattern recognition, and intelligent suggestions accelerate development by 3-5x",
      capabilities: ["Automated code generation", "Pattern-based development", "Smart component reuse", "Intelligent refactoring"],
      icon: Cpu,
    },
    {
      title: "Enterprise-Grade Architecture",
      description: "Production-ready infrastructure with scalability, security, and reliability built-in from the foundation",
      capabilities: ["Microservices architecture", "Auto-scaling deployment", "Enterprise security", "Performance optimization"],
      icon: Database,
    },
    {
      title: "DevOps & Automation",
      description: "Fully automated CI/CD pipelines, testing frameworks, and deployment processes that rival Fortune 500 operations",
      capabilities: ["Automated CI/CD", "Infrastructure as Code", "Automated testing", "Blue-green deployments"],
      icon: Settings,
    },
  ];

  const deliverables = [
    {
      title: "Production-Ready MVP",
      description: "Complete application with enterprise architecture, security, and scalability baked in",
      items: ["Working application", "Source code repository", "Production deployment", "User documentation"],
      timeline: "Rapid delivery",
    },
    {
      title: "Automated Infrastructure",
      description: "CI/CD pipelines, monitoring, logging, and automated scaling ready for enterprise use",
      items: ["Automated deployments", "Monitoring dashboards", "Logging systems", "Scaling configurations"],
      timeline: "Included",
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing suite with automated regression tests and performance benchmarking",
      items: ["Unit test suites", "Integration tests", "Performance testing", "Security scanning"],
      timeline: "Integrated",
    },
  ];

  return (
    <>
      <SEO
        title="AI-Accelerated MVP Development & Launch | HiTechLogic"
        description="Turn validated concepts into production MVPs in weeks with AI-assisted development, enterprise architecture, and automated deployment. 3-5x faster than traditional development."
        keywords="MVP development, AI coding assistance, rapid deployment, production launch, startup development, prototype to product"
        canonical="https://hitechlogic.com/services/rapid-prototyping/steps/build-launch"
        schema={schema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--deep-navy))] via-[hsl(var(--graphite))] to-[hsl(var(--deep-navy))]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzM5yZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                <Code2 className="h-7 w-7 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">Phase 02</span>
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-balance max-w-5xl">
              Build & Launch
              <span className="text-[hsl(var(--accent-blue))]/80 block sm:inline"> Production MVPs</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed">
              Transform validated concepts into production-ready MVPs using AI-accelerated development.
              Launch enterprise-grade applications in weeks instead of months, with scalability,
              security, and automation built into every component.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-slate-50 shadow-2xl border-white">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Rocket className="h-5 w-5" />
                  <span>Launch Your MVP</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="text-white border-white/30 hover:bg-white/10 hover:border-white/50">
                <Link to="#capabilities">
                  <Zap className="h-5 w-5 mr-2" />
                  See AI Acceleration
                </Link>
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: "Development Speed", value: "3-5x faster", icon: Rocket },
                { label: "Time to Launch", value: "4-8 weeks", icon: Clock },
                { label: "Production Ready", value: "100%", icon: CheckCircle2 },
                { label: "Enterprise Scale", value: "Built-in", icon: TrendingUp },
              ].map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/5 p-4 md:p-5 text-center shadow-lg shadow-black/10">
                  <div className="flex justify-center mb-2">
                    <metric.icon className="h-5 w-5 md:h-6 md:w-6 text-[hsl(var(--accent-blue))]" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{metric.value}</div>
                  <div className="mt-1 text-xs md:text-sm font-medium text-white/70">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes It Different */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">Traditional vs. AI-Accelerated</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                  Ship something tangible while you still own the idea
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Traditional development treats prototypes like experiments. Our AI-accelerated approach
                  delivers production-ready MVPs that can scale to millions of users from day one,
                  skipping the costly rebuild phase that kills most startups.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "Production architecture from day one, not experimental code",
                    "AI-assisted development reduces coding time by 60%",
                    "Enterprise scalability built into every component",
                    "Launch-ready within weeks, not months",
                  ].map((fact) => (
                    <div key={fact} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                      <p className="text-slate-700">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="eyebrow text-[hsl(var(--accent-blue))]">The AI advantage</span>
                <h2 className="mt-4 text-4xl font-bold text-[hsl(var(--navy))]">
                  Intelligent automation meets expert craftsmanship
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Our AI systems handle repetitive coding tasks while our human experts focus on
                  complex architecture decisions. This hybrid approach delivers enterprise-quality
                  applications at startup speed, with perfect reliability and unbounded scalability.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "AI handles code generation while humans guide architecture",
                    "Enterprise patterns automatically applied to every component",
                    "Security and compliance built into the development process",
                    "Automated testing and deployment pipelines included",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-[hsl(var(--accent-blue))] shrink-0 mt-0.5" />
                      <p className="text-slate-700 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact" className="flex items-center gap-2 group">
                      <span>See AI Acceleration in Action</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">AI-powered development platform</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Enterprise-grade capabilities for startup speed
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Blend human expertise with AI automation to deliver production-ready applications
                that scale like enterprise platforms while launching in weeks like true startups.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
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

        {/* Process Timeline */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Accelerated development cycle</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                From concept to launch in record time
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Our sprint-based approach combines parallel development streams with continuous
                integration, delivering working software every two weeks while maintaining
                enterprise quality standards.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  week: "Weeks 1-2",
                  title: "Architecture & Foundation",
                  description: "Design scalable architecture, set up infrastructure, establish development environment and CI/CD pipelines",
                  color: "from-[hsl(var(--accent-blue))]/80 to-[hsl(var(--navy))]/60",
                },
                {
                  week: "Weeks 3-4",
                  title: "Core Development",
                  description: "Build core functionality using AI-assisted coding with human oversight for complex architectural decisions",
                  color: "from-[hsl(var(--navy))]/60 to-[hsl(var(--graphite))]/70",
                },
                {
                  week: "Weeks 5-6",
                  title: "Integration & Testing",
                  description: "Integrate all components, comprehensive testing, security validation, and performance optimization",
                  color: "from-[hsl(var(--graphite))]/70 to-[hsl(var(--navy))]/80",
                },
                {
                  week: "Weeks 7-8",
                  title: "Launch & Scale",
                  description: "Production deployment, monitoring setup, scalability configuration, and go-live support",
                  color: "from-[hsl(var(--navy))]/80 to-[hsl(var(--accent-blue))]/80",
                },
              ].map((phase, index) => (
                <Card key={phase.week} className="p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group border-0 shadow-lg">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${phase.color} text-white text-xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {index + 1}
                  </div>
                  <div className="text-lg font-bold text-[hsl(var(--accent-blue))] mb-2">{phase.week}</div>
                  <h3 className="text-lg font-bold text-[hsl(var(--navy))] mb-3">{phase.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{phase.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Complete product package</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Everything needed for market success
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Receive a complete, launch-ready product package that includes everything
                needed to operate at scale from day one.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {deliverables.map((deliverable, index) => (
                <Card key={deliverable.title} className="p-8 border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-7 w-7 text-[hsl(var(--accent-blue))]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-2">{deliverable.title}</h3>
                      <div className="text-sm text-[hsl(var(--accent-blue))] font-semibold mb-3">{deliverable.timeline}</div>
                      <p className="text-slate-600 mb-6 leading-relaxed">{deliverable.description}</p>
                      <ul className="space-y-2">
                        {deliverable.items.map((item) => (
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

        {/* Success Metrics */}
        <section className="section-space bg-white">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-[hsl(var(--accent-blue))]">Proven acceleration</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[hsl(var(--navy))]">
                Launch faster, launch better, launch bigger
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Our AI-accelerated development has consistently delivered enterprise-quality MVPs
                in record time with superior performance and scalability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  metric: "4-8 weeks",
                  label: "Average Time to Launch",
                  description: "From concept to production deployment",
                },
                {
                  metric: "3-5x faster",
                  label: "Development Acceleration",
                  description: "Compared to traditional development",
                },
                {
                  metric: "99.9%",
                  label: "Uptime SLA",
                  description: "Production reliability built-in",
                },
                {
                  metric: "Scalable to 100K+",
                  label: "Users from Day One",
                  description: "Enterprise-grade architecture",
                },
              ].map((result, index) => (
                <Card key={result.label} className="p-6 text-center border-2 hover:border-[hsl(var(--accent-blue))]/30 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                  <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--accent-blue))] mb-2">{result.metric}</div>
                  <div className="text-lg font-semibold text-[hsl(var(--navy))] mb-2">{result.label}</div>
                  <div className="text-sm text-slate-600">{result.description}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="section-space bg-slate-50">
          <div className="mx-auto w-full max-w-6xl px-6">
            <Card className="p-8 border-2 border-[hsl(var(--accent-blue))]/30 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-transparent">
              <div className="text-center max-w-3xl mx-auto">
                <Award className="h-12 w-12 text-[hsl(var(--accent-blue))] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-[hsl(var(--navy))] mb-4">AI-Accelerated Development Success</h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Our AI-accelerated development approach enables rapid deployment of enterprise-grade
                  applications. We deliver production-ready MVPs with scalable architecture, automated
                  infrastructure, and comprehensive quality assurance in record time.
                </p>
                <div className="flex justify-center gap-12 text-sm">
                  <div>
                    <div className="font-bold text-[hsl(var(--accent-blue))] text-2xl">4-8 weeks</div>
                    <div className="text-slate-600">Development time</div>
                  </div>
                  <ArrowRight className="h-6 w-6 text-[hsl(var(--accent-blue))] self-center" />
                  <div>
                    <div className="font-bold text-[hsl(var(--accent-blue))] text-2xl">Production Ready</div>
                    <div className="text-slate-600">Enterprise scale</div>
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
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-semibold">Launch Acceleration</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Turn Your Idea Into a Launch-Ready Product
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Skip the experimental prototype phase and launch a production-ready MVP with
              enterprise-grade reliability. Our AI-accelerated development delivers what
              traditional agencies can't: speed, quality, and scale from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="secondary" size="xl" asChild className="bg-white text-[hsl(var(--navy))] hover:bg-slate-50 shadow-2xl hover:scale-105 transition-all">
                <Link to="/contact" className="flex items-center gap-2 group">
                  <Monitor className="h-5 w-5" />
                  <span>Start Your MVP Development</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/services/rapid-prototyping/steps/operate" className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  <span>Next: Operate & Scale</span>
                </Link>
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-slate-300 text-sm mb-4">MVP launch package includes full production infrastructure and support</p>
              <div className="flex justify-center gap-8 text-sm text-white/80">
                <div>
                  <div className="font-medium text-white">Development Method</div>
                  <div>AI-assisted + Expert oversight</div>
                </div>
                <div>
                  <div className="font-medium text-white">Architecture</div>
                  <div>Enterprise production-ready</div>
                </div>
                <div>
                  <div className="font-medium text-white">Launch Guarantee</div>
                  <div>Live in 4-8 weeks</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}
