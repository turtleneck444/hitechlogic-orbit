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
    <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Advanced AI Agent Network Animation */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Central AI Core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Primary AI Node */}
            <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] rounded-full animate-pulse shadow-2xl shadow-[hsl(var(--accent-blue))]/50 animate-ai-pulse">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/20 to-transparent animate-ai-spin"></div>
            </div>

            {/* Orbiting Worker Nodes */}
            <div
              className="absolute w-4 h-4 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full animate-ai-orbit-1 shadow-lg shadow-emerald-400/50"
              style={{marginLeft: '80px', marginTop: '20px'}}
            ></div>
            <div
              className="absolute w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ai-orbit-2 shadow-md shadow-yellow-400/50"
              style={{marginLeft: '-90px', marginTop: '10px'}}
            ></div>
            <div
              className="absolute w-5 h-5 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-ai-orbit-3 shadow-l shadow-purple-400/50"
              style={{marginLeft: '40px', marginTop: '-100px'}}
            ></div>
            <div
              className="absolute w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-ai-orbit-4 shadow-lg shadow-cyan-400/50"
              style={{marginLeft: '10px', marginTop: '100px'}}
            ></div>
            <div
              className="absolute w-3 h-3 bg-gradient-to-br from-rose-400 to-red-500 rounded-full animate-ai-orbit-5 shadow-md shadow-rose-400/50"
              style={{marginLeft: '-40px', marginTop: '-80px'}}
            ></div>

            {/* Connecting Data Streams */}
            <svg className="absolute inset-0 w-32 h-32" viewBox="0 0 128 128">
              {/* Pulsing connecting lines */}
              <line x1="64" y1="64" x2="90" y2="78" stroke="hsl(var(--accent-blue))" strokeWidth="2" strokeOpacity="0.6" className="animate-ai-connect-1">
                <animate attributeName="stroke-opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="64" y1="64" x2="34" y2="78" stroke="hsl(var(--signal-purple))" strokeWidth="2" strokeOpacity="0.6" className="animate-ai-connect-2">
                <animate attributeName="stroke-opacity" values="0;0.7;0" dur="2.5s" repeatCount="indefinite" />
              </line>
              <line x1="64" y1="64" x2="76" y2="22" stroke="hsl(var(--accent-blue))" strokeWidth="2" strokeOpacity="0.6" className="animate-ai-connect-3">
                <animate attributeName="stroke-opacity" values="0;0.9;0" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="64" y1="64" x2="78" y2="106" stroke="hsl(var(--signal-purple))" strokeWidth="2" strokeOpacity="0.6" className="animate-ai-connect-4">
                <animate attributeName="stroke-opacity" values="0;0.5;0" dur="3.5s" repeatCount="indefinite" />
              </line>
              <line x1="64" y1="64" x2="38.4" y2="29.6" stroke="hsl(var(--accent-blue))" strokeWidth="2" strokeOpacity="0.6" className="animate-ai-connect-5">
                <animate attributeName="stroke-opacity" values="0;0.6;0" dur="2.8s" repeatCount="indefinite" />
              </line>
            </svg>

            {/* Floating Data Packets */}
            <div className="absolute w-2 h-2 bg-white rounded-full shadow-sm animate-ai-packet-1 opacity-80" style={{marginLeft: '95px', marginTop: '25px'}}></div>
            <div className="absolute w-2 h-2 bg-[hsl(var(--accent-blue))] rounded-full shadow-sm animate-ai-packet-2 opacity-80" style={{marginLeft: '-105px', marginTop: '15px'}}></div>
            <div className="absolute w-2 h-2 bg-[hsl(var(--signal-purple))] rounded-full shadow-sm animate-ai-packet-3 opacity-80" style={{marginLeft: '55px', marginTop: '-115px'}}></div>
          </div>
        </div>

        {/* Additional AI Nodes in Background */}
        <div className="absolute top-24 left-24 w-2 h-2 bg-[hsl(var(--accent-blue))]/60 rounded-full animate-ai-floating-1 shadow-sm"></div>
        <div className="absolute top-1/4 right-32 w-3 h-3 bg-gradient-to-br from-[hsl(var(--signal-purple))] to-purple-400 rounded-full animate-ai-floating-2 shadow-md opacity-70"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-ai-floating-3 shadow-sm"></div>
        <div className="absolute top-1/3 left-1/3 w-2.5 h-2.5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ai-floating-4 shadow-sm opacity-80"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-ai-floating-5 shadow-sm"></div>
        <div className="absolute top-2/3 left-1/6 w-2 h-2 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-ai-floating-6 shadow-sm opacity-70"></div>

        {/* Neural Network Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <defs>
            <linearGradient id="aiGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: 'hsl(var(--accent-blue))', stopOpacity: '0.4'}} />
              <stop offset="100%" style={{stopColor: 'hsl(var(--signal-purple))', stopOpacity: '0.8'}} />
            </linearGradient>
            <linearGradient id="aiGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: 'hsl(var(--signal-purple))', stopOpacity: '0.5'}} />
              <stop offset="100%" style={{stopColor: 'hsl(var(--accent-blue))', stopOpacity: '0.7'}} />
            </linearGradient>
            <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{stopColor: 'hsl(var(--accent-blue))', stopOpacity: '0.1'}} />
              <stop offset="100%" style={{stopColor: 'transparent', stopOpacity: '0'}} />
            </radialGradient>
          </defs>

          {/* Animated connecting paths */}
          <path d="M100,200 Q300,100 500,150" stroke="url(#aiGradient1)" strokeWidth="1" fill="none" className="animate-ai-connection-1">
            <animate attributeName="stroke-opacity" values="0;0.6;0" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M150,100 Q400,300 600,200" stroke="url(#aiGradient2)" strokeWidth="1" fill="none" className="animate-ai-connection-2">
            <animate attributeName="stroke-opacity" values="0;0.5;0" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M50,400 Q250,350 450,400" stroke="url(#aiGradient1)" strokeWidth="1" fill="none" className="animate-ai-connection-3">
            <animate attributeName="stroke-opacity" values="0;0.7;0" dur="10s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Pulsing background orbs */}
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-gradient-radial from-[hsl(var(--accent-blue))]/8 via-transparent to-transparent rounded-full blur-3xl animate-ai-background-1 opacity-30"></div>
        <div className="absolute bottom-20 left-1/5 w-80 h-80 bg-gradient-radial from-[hsl(var(--signal-purple))]/6 via-transparent to-transparent rounded-full blur-3xl animate-ai-background-2 opacity-25"></div>

        {/* Ambient particle effect */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white rounded-full opacity-20 animate-ai-particle-${i + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content Overlay with Darkened Background */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-br from-black/20 via-black/10 to-black/20 backdrop-blur-[0.5px] pointer-events-none" />

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
            <p className="text-lg md:text-xl text-slate-200 mb-6 leading-relaxed max-w-2xl font-light">
              Achieve operational excellence with{" "}
              <span className="font-bold text-[hsl(var(--accent-blue))]">intelligent automation</span> and{" "}
              <span className="font-bold text-[hsl(var(--accent-blue))]">AI-powered</span> managed services that deliver{" "}
              <span className="font-bold text-white">50% cost savings</span>,{" "}
              <span className="font-bold text-white">75% faster incident resolution</span>, and{" "}
              <span className="font-bold text-white">complete operational autonomy</span>.
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
