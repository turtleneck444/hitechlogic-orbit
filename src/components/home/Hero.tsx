import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, TrendingDown, LineChart, BarChart3, Zap, Award, Clock, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundPaths } from "@/components/ui/background-paths";

const heroRealTimeCards = [
  {
    value: "-85%",
    label: "Alert Volume",
    detail: "Squelched through intelligent noise reduction",
    accent: "from-blue-50/90 via-slate-50 to-white/90"
  },
  {
    value: "4.5x",
    label: "MTTR Improvement",
    detail: "Automated remediation accelerates recovery",
    accent: "from-sky-50/100 via-white/70 to-white/90"
  },
  {
    value: "32%",
    label: "Cost Stability",
    detail: "FinOps governance keeps budgets predictable",
    accent: "from-emerald-50/90 via-white/70 to-white/90"
  },
  {
    value: "99.98%",
    label: "Availability",
    detail: "Enterprise SLA clarity for every service",
    accent: "from-violet-50/90 via-white/70 to-white/90"
  },
];

export function Hero() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const toggleFeature = (feature: string) => {
    setExpandedFeature(expandedFeature === feature ? null : feature);
  };

  return (
    <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Corporate Enhanced Background Layers */}
      <div className="absolute inset-0 z-0 opacity-40">
        <BackgroundPaths />
      </div>

      {/* Sophisticated Overlay System */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-white/85 via-white/70 to-blue-50/40 backdrop-blur-[1px] pointer-events-none" />

      {/* Premium Depth Gradient */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-white/20 to-slate-100/30 pointer-events-none" />

      {/* Advanced Floating Elements */}
      <div className="absolute top-16 right-24 w-80 h-80 bg-gradient-to-r from-[hsl(var(--accent-blue))]/8 via-[hsl(var(--signal-purple))]/5 to-transparent rounded-full blur-[100px] animate-pulse-slow opacity-60" />
      <div className="absolute bottom-16 left-16 w-[600px] h-[600px] bg-gradient-to-br from-[hsl(var(--signal-purple))]/6 via-transparent to-[hsl(var(--accent-blue))]/8 rounded-full blur-[120px] animate-pulse-slow opacity-50" style={{animationDelay: '0.5s'}} />

      {/* Premium Corporate Grid Pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(46,107,255,0.4) 1px, transparent 0),
            linear-gradient(90deg, rgba(46,107,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(46,107,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 60px 60px, 120px 120px'
        }} />
      </div>

      {/* Powerful Brand Authority Statements */}
      <div className="absolute top-8 left-8 z-[3] hidden lg:flex flex-col gap-3">
        {/* Proven Track Record Statement */}
        <div className="flex items-start gap-3 px-5 py-3 rounded-[1rem] bg-gradient-to-r from-white/95 via-white to-slate-50/90 backdrop-blur-xl shadow-2xl border border-white/80 ring-1 ring-slate-300/20 max-w-xs">
          <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full animate-pulse shadow-lg mt-0.5" />
          <div className="min-w-0">
            <p className="text-sm font-black text-[hsl(var(--navy))] leading-tight mb-1">INDUSTRY-PROVEN INFRASTRUCTURE</p>
            <p className="text-xs text-slate-700 leading-tight">Delivering mission-critical operations for enterprise clients worldwide</p>
          </div>
        </div>

        {/* Innovation Leadership Statement */}
        <div className="flex items-start gap-3 px-5 py-3 rounded-[1rem] bg-gradient-to-r from-white/95 via-white to-slate-50/90 backdrop-blur-xl shadow-2xl border border-white/80 ring-1 ring-slate-300/20 max-w-xs">
          <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] rounded-full animate-pulse shadow-lg mt-0.5" style={{animationDelay: '0.4s'}} />
          <div className="min-w-0">
            <p className="text-sm font-black text-[hsl(var(--navy))] leading-tight mb-1">AI-POWERED OPERATIONAL EXCELLENCE</p>
            <p className="text-xs text-slate-700 leading-tight">Advanced automation frameworks designed for enterprise scale</p>
          </div>
        </div>

        {/* Security & Trust Statement */}
        <div className="flex items-start gap-3 px-5 py-3 rounded-[1rem] bg-gradient-to-r from-white/95 via-white to-slate-50/90 backdrop-blur-xl shadow-2xl border border-white/80 ring-1 ring-slate-300/20 max-w-xs">
          <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-emerald-600 to-slate-700 rounded-full animate-pulse shadow-lg mt-0.5" style={{animationDelay: '0.8s'}} />
          <div className="min-w-0">
            <p className="text-sm font-black text-[hsl(var(--navy))] leading-tight mb-1">ENTERPRISE-GRADE SECURITY</p>
            <p className="text-xs text-slate-700 leading-tight">Built-in compliance and risk management at every operational layer</p>
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="relative">
            {/* White Glow Protection Layer */}
            <div className="absolute -inset-12 bg-white/60 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -inset-16 bg-white/40 rounded-full blur-[100px] pointer-events-none" />

            {/* Content with relative positioning */}
            <div className="relative">
            {/* Corporate Premium Headline */}
            <div className="relative mb-6">
              {/* Premium Corporate Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] text-[hsl(var(--navy))] tracking-tight relative">
                {/* Elegant accent line above headline */}
                <div className="absolute -top-4 left-0 w-24 h-0.5 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))]"></div>

                <span className="inline-block transition-all duration-300 hover:scale-105 hover:text-[hsl(var(--navy))]/80">We</span>{" "}
                <span className="inline-block transition-all duration-300 hover:scale-105 hover:text-[hsl(var(--navy))]/80">Engineer</span>{" "}
                <span className="inline-block transition-all duration-300 hover:scale-105 hover:text-[hsl(var(--accent-blue))] relative">
                  Your{" "}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--accent-blue))]/10 via-[hsl(var(--signal-purple))]/10 to-[hsl(var(--navy))]/5 blur-xl -z-10 opacity-60"></div>
                </span>
                <span className="relative inline-block group">
                  Competitive Advantage
                  {/* Premium corporate underline accent */}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--accent-blue))] via-[hsl(var(--signal-purple))] to-[hsl(var(--navy))] opacity-70 transition-all duration-300 group-hover:h-1.5"></div>
                  {/* Elegant glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[hsl(var(--accent-blue))]/15 via-[hsl(var(--signal-purple))]/15 to-[hsl(var(--navy))]/10 blur-2xl -z-10 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                </span>
              </h1>

              {/* Sophisticated accent elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-[hsl(var(--accent-blue))]/5 to-transparent rounded-full blur-3xl opacity-40 -z-10"></div>
            </div>

            {/* Subheadline with Enhanced Value Propositions - Perfect Responsive Wrapping */}
            <p className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed max-w-2xl font-light">
              Achieve operational excellence with{" "}
              <span className="font-bold text-[hsl(var(--accent-blue))]">intelligent automation</span> and{" "}
              <span className="font-bold text-[hsl(var(--accent-blue))]">AI-powered</span> managed services that deliver{" "}
              <span className="font-bold text-[hsl(var(--accent-blue))]">50% cost savings</span>,{" "}
              <span className="font-bold text-[hsl(var(--accent-blue))]">75% faster incident resolution</span>, and{" "}
              <span className="font-bold text-[hsl(var(--accent-blue))]">complete operational autonomy</span>.
            </p>

            {/* CTA Buttons with Enhanced Design */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button
                variant="primary"
                size="lg"
                asChild
                className="group/cta relative shadow-2xl hover:shadow-[hsl(var(--accent-blue))]/40 transition-all transform hover:scale-105 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] hover:from-[hsl(var(--accent-blue))]/90 hover:to-[hsl(var(--signal-purple))]/90"
              >
                <Link to="/contact">
                  <span className="relative z-10">Request Strategy Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover/cta:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-white/20 blur opacity-0 group-hover/cta:opacity-100 transition-opacity" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group/outline border-2 border-[hsl(var(--accent-blue))]/30 hover:border-[hsl(var(--accent-blue))] hover:bg-blue-50 transition-all"
              >
                <Link to="/services">
                  Review Services
                  <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover/outline:opacity-100 group-hover/outline:translate-x-1 transition-all" />
                </Link>
              </Button>
            </div>

            </div>
          </div>

          {/* Right Column - Ultra-Premium Corporate Card */}
          <div className="relative lg:pl-4">
            {/* Sophisticated Multi-Layer Glow Effects */}
            <div className="absolute -inset-12 bg-gradient-radial from-[hsl(var(--accent-blue))]/15 via-[hsl(var(--signal-purple))]/10 to-transparent rounded-[3rem] blur-[60px] opacity-70 animate-pulse-slow" />
            <div className="absolute -inset-8 bg-gradient-to-r from-[hsl(var(--accent-blue))]/20 via-[hsl(var(--signal-purple))]/15 to-[hsl(var(--accent-blue))]/20 rounded-[2.5rem] blur-[40px] opacity-50" />
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/8 via-slate-300/6 to-indigo-400/8 rounded-[2rem] blur-[25px] opacity-30" />

            {/* Enterprise Credibility Markers */}
            <div className="absolute -top-4 -right-4 z-[2] hidden lg:flex flex-col gap-1">
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-white/60 shadow-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-slate-700 tracking-wider uppercase">Advanced Security</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-white/60 shadow-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full animate-pulse" style={{animationDelay: '0.25s'}} />
                <span className="text-[10px] font-bold text-slate-700 tracking-wider uppercase">Enterprise Scale</span>
              </div>
            </div>

            {/* Main Card - Ultra-Premium Corporate Version */}
            <div className="group relative bg-gradient-to-br from-white/95 via-white to-blue-50/60 backdrop-blur-xl rounded-[2rem] shadow-[0_32px_100px_-20px_rgba(46,107,255,0.4),0_16px_40px_-12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.8)] border border-white/70 p-6 lg:p-7 hover:shadow-[0_40px_120px_-20px_rgba(46,107,255,0.6),0_20px_50px_-12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-800 hover:-translate-y-2 hover:scale-[1.03] overflow-hidden">
              {/* Animated Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-blue-50/40 rounded-[1.75rem] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tl from-[hsl(var(--accent-blue))]/10 via-transparent to-[hsl(var(--signal-purple))]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[1.75rem] pointer-events-none" />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer" />
              </div>

              {/* Ultra-Compact Header */}
              <div className="relative mb-3">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg lg:text-xl font-black bg-gradient-to-r from-[hsl(var(--navy))] via-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent tracking-tight">
                    EXECUTIVE ASSURANCE
                  </h3>
                  <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-[hsl(var(--accent-blue))]/15 to-[hsl(var(--signal-purple))]/15 border border-[hsl(var(--accent-blue))]/30">
                    <div className="w-1 h-1 rounded-full bg-[hsl(var(--accent-blue))] animate-pulse" />
                    <p className="text-xs text-[hsl(var(--accent-blue))] font-bold uppercase tracking-wide">Real-time Intelligence</p>
                  </div>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Enterprise-grade governance with <span className="text-[hsl(var(--accent-blue))] font-bold">24/7 visibility</span> and predictive insights
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-5 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2">
                {heroRealTimeCards.map((card) => (
                  <div
                    key={card.label}
                    className="relative overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/90 p-4 text-slate-700 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_25px_65px_-30px_rgba(15,23,42,0.55)]"
                  >
                    <div className={`absolute inset-x-0 bottom-3 h-0.5 rounded-full bg-gradient-to-r ${card.accent} opacity-80`} />
                    <div className="relative space-y-1">
                      <div className="text-2xl font-black text-[hsl(var(--accent-blue))] leading-none">{card.value}</div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400">{card.label}</div>
                      <p className="text-[11px] text-slate-500 leading-snug">{card.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ultra-Compact Interactive Features */}
              <div className="space-y-1.5 mb-3">
                {/* Risk Reduction */}
                <div
                  className={`group/feature relative rounded-lg bg-gradient-to-br from-slate-50 to-blue-50/40 border border-[hsl(var(--accent-blue))]/30 hover:border-[hsl(var(--accent-blue))]/50 hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden ${
                    expandedFeature === 'risk' ? 'shadow-xl border-[hsl(var(--accent-blue))]/70 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-[hsl(var(--signal-purple))]/5' : ''
                  }`}
                  onClick={() => toggleFeature('risk')}
                >
                  <div className="relative p-2">
                    <div className="flex items-center space-x-2">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-[hsl(var(--accent-blue))]/20 to-[hsl(var(--accent-blue))]/10 border border-[hsl(var(--accent-blue))]/40 flex items-center justify-center transition-all duration-300 ${
                        expandedFeature === 'risk' ? 'scale-110 bg-gradient-to-br from-[hsl(var(--accent-blue))]/30 to-[hsl(var(--signal-purple))]/20' : 'group-hover/feature:scale-105'
                      }`}>
                        <ShieldCheck className="h-3 w-3 text-[hsl(var(--accent-blue))]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-black text-[hsl(var(--navy))]">Risk Reduction</h4>
                          <ChevronDown className={`h-3.5 w-3.5 text-[hsl(var(--accent-blue))] transition-transform duration-300 ${
                            expandedFeature === 'risk' ? 'rotate-180' : ''
                          }`} />
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">Proactive threat detection with automated response protocols</p>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedFeature === 'risk' ? 'max-h-24 opacity-100 mt-1.5' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-1.5 border-t border-[hsl(var(--accent-blue))]/30">
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div className="text-slate-700"><span className="font-bold text-[hsl(var(--accent-blue))]">Real-time surveillance</span> with AI detection</div>
                          <div className="text-slate-700"><span className="font-bold text-[hsl(var(--accent-blue))]">Automated workflows</span> neutralize threats</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operational Clarity */}
                <div
                  className={`group/feature relative rounded-lg bg-gradient-to-br from-slate-50 to-blue-50/40 border border-[hsl(var(--accent-blue))]/30 hover:border-[hsl(var(--accent-blue))]/50 hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden ${
                    expandedFeature === 'clarity' ? 'shadow-xl border-[hsl(var(--accent-blue))]/70 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-[hsl(var(--signal-purple))]/5' : ''
                  }`}
                  onClick={() => toggleFeature('clarity')}
                >
                  <div className="relative p-2">
                    <div className="flex items-center space-x-2">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-[hsl(var(--accent-blue))]/20 to-[hsl(var(--accent-blue))]/10 border border-[hsl(var(--accent-blue))]/40 flex items-center justify-center transition-all duration-300 ${
                        expandedFeature === 'clarity' ? 'scale-110 bg-gradient-to-br from-[hsl(var(--accent-blue))]/30 to-[hsl(var(--signal-purple))]/20' : 'group-hover/feature:scale-105'
                      }`}>
                        <LineChart className="h-3 w-3 text-[hsl(var(--accent-blue))]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-black text-[hsl(var(--navy))]">Operational Clarity</h4>
                          <ChevronDown className={`h-3.5 w-3.5 text-[hsl(var(--accent-blue))] transition-transform duration-300 ${
                            expandedFeature === 'clarity' ? 'rotate-180' : ''
                          }`} />
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">Unified dashboard for system health and performance</p>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedFeature === 'clarity' ? 'max-h-24 opacity-100 mt-1.5' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-1.5 border-t border-[hsl(var(--accent-blue))]/30">
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div className="text-slate-700"><span className="font-bold text-[hsl(var(--accent-blue))]">Single pane of glass</span> for all systems</div>
                          <div className="text-slate-700"><span className="font-bold text-[hsl(var(--accent-blue))]">Executive reporting</span> with insights</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Measured Progress */}
                <div
                  className={`group/feature relative rounded-lg bg-gradient-to-br from-slate-50 to-blue-50/40 border border-[hsl(var(--accent-blue))]/30 hover:border-[hsl(var(--accent-blue))]/50 hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden ${
                    expandedFeature === 'progress' ? 'shadow-xl border-[hsl(var(--accent-blue))]/70 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-[hsl(var(--signal-purple))]/5' : ''
                  }`}
                  onClick={() => toggleFeature('progress')}
                >
                  <div className="relative p-2">
                    <div className="flex items-center space-x-2">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-[hsl(var(--accent-blue))]/20 to-[hsl(var(--accent-blue))]/10 border border-[hsl(var(--accent-blue))]/40 flex items-center justify-center transition-all duration-300 ${
                        expandedFeature === 'progress' ? 'scale-110 bg-gradient-to-br from-[hsl(var(--accent-blue))]/30 to-[hsl(var(--signal-purple))]/20' : 'group-hover/feature:scale-105'
                      }`}>
                        <TrendingDown className="h-3 w-3 text-[hsl(var(--accent-blue))]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-black text-[hsl(var(--navy))]">Measured Progress</h4>
                          <ChevronDown className={`h-3.5 w-3.5 text-[hsl(var(--accent-blue))] transition-transform duration-300 ${
                            expandedFeature === 'progress' ? 'rotate-180' : ''
                          }`} />
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">Data-driven insights with quarterly reviews and continuous improvement</p>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedFeature === 'progress' ? 'max-h-24 opacity-100 mt-1.5' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-1.5 border-t border-[hsl(var(--accent-blue))]/30">
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div className="text-slate-700"><span className="font-bold text-[hsl(var(--accent-blue))]">KPI tracking</span> aligned with objectives</div>
                          <div className="text-slate-700"><span className="font-bold text-[hsl(var(--accent-blue))]">ROI analysis</span> and optimization</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
