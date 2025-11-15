import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BarChart3, Cloud, Zap, CheckCircle2, TrendingUp, Lock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export function XOPS360Integration() {
  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--navy))] via-slate-900 to-[hsl(var(--navy))]/90 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(46,107,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(46,107,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
            <Shield className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
            <span className="text-sm font-bold uppercase tracking-wide">Powered by Axiom.io</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            World-Class Platform,
            <br />
            <span className="bg-gradient-to-r from-[hsl(var(--accent-blue))] via-blue-400 to-white bg-clip-text text-transparent">
              Enterprise-Grade Results
            </span>
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            HiTechLogic is backed by Axiom.io's XOPS360 platform—delivering AI-powered cloud operations, FinOps automation, and zero-trust security at global scale
          </p>
        </div>

        {/* Platform Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: BarChart3,
              title: "FinOps Automation",
              description: "AI agents optimize cloud spend in real-time, automatically rightsizing resources and eliminating waste",
              metric: "50% cost reduction",
              color: "from-blue-500 to-cyan-600",
            },
            {
              icon: Shield,
              title: "Zero-Trust Security",
              description: "Enterprise-grade threat detection and automated response protecting against real-time attacks",
              metric: "100% compliance",
              color: "from-red-500 to-rose-600",
            },
            {
              icon: Cloud,
              title: "Multi-Cloud Ops",
              description: "Unified observability and control across AWS, Azure, GCP with automated policy enforcement",
              metric: "99.99% uptime",
              color: "from-purple-500 to-indigo-600",
            },
            {
              icon: Zap,
              title: "AI-Powered Automation",
              description: "Self-healing infrastructure with intelligent runbooks resolving incidents before impact",
              metric: "90% auto-resolution",
              color: "from-green-500 to-emerald-600",
            },
          ].map((capability) => (
            <Card
              key={capability.title}
              className="group relative p-6 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-[hsl(var(--accent-blue))]/60 hover:bg-white/15 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`} />

              <div className="relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 mb-4`}>
                  <capability.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[hsl(var(--accent-blue))] transition-colors">
                  {capability.title}
                </h3>

                <p className="text-sm text-blue-100 mb-4 leading-relaxed">
                  {capability.description}
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-400/40">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-bold text-green-400">{capability.metric}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left: Key Benefits */}
          <Card className="p-8 bg-white/10 backdrop-blur-md border-2 border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-[hsl(var(--accent-blue))]" />
              Platform Advantages
            </h3>
            <div className="space-y-4">
              {[
                "Global infrastructure with presence in 50+ AWS/Azure regions",
                "AI agents handling 1M+ automated decisions daily",
                "Real-time cost analytics across $2B+ cloud infrastructure",
                "Integrated compliance framework (SOC 2, ISO 27001, HIPAA, PCI-DSS)",
                "Enterprise SLAs with 99.99% uptime guarantee",
                "24/7 NOC/SOC operations with <15-minute response time",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(var(--accent-blue))] flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Right: ROI Impact */}
          <Card className="p-8 bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-md border-2 border-[hsl(var(--accent-blue))]/40">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-green-400" />
              Measurable Business Impact
            </h3>
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                <div className="text-4xl font-black bg-gradient-to-r from-[hsl(var(--accent-blue))] to-blue-400 bg-clip-text text-transparent mb-2">
                  $50M+
                </div>
                <p className="text-blue-100 font-semibold">Total client savings delivered</p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  8x ROI
                </div>
                <p className="text-blue-100 font-semibold">Average return on investment</p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  90 Days
                </div>
                <p className="text-blue-100 font-semibold">Time to measurable results</p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-blue-200 mb-6 text-lg">
            Experience the power of HiTechLogic backed by Axiom.io's enterprise platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="xl"
              asChild
              className="bg-white text-[hsl(var(--navy))] hover:bg-blue-50 shadow-2xl hover:shadow-[0_30px_70px_-15px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact" className="group flex items-center gap-3">
                <Lock className="h-5 w-5" />
                <span>Schedule Platform Demo</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <Link to="/services" className="flex items-center gap-2">
                <Cloud className="h-5 w-5" />
                <span>Explore Solutions</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
