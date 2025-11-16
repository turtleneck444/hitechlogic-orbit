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
      {/* Majestic AI Intelligence Orbital - World-Class 3D Graphics */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Layer 0: Subtle Background Mesh */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1920 1080">
            <defs>
              <pattern id="intelligenceMesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <path d="M0,50 L100,50 M50,0 L50,100" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" opacity="0.3" />
                <circle cx="50" cy="50" r="1.5" fill="rgba(147, 51, 234, 0.4)" className="animate-ai-mesh-node">
                  <animate attributeName="r" values="1.5;2;1.5" dur="6s" repeatCount="indefinite" />
                </circle>
              </pattern>
              <radialGradient id="intelligenceGradient" cx="50%" cy="50%" r="60%">
                <stop offset="0%" style={{stopColor: 'rgba(59, 130, 246, 0.1)', stopOpacity: '0.3'}} />
                <stop offset="50%" style={{stopColor: 'rgba(147, 51, 234, 0.05)', stopOpacity: '0.2'}} />
                <stop offset="100%" style={{stopColor: 'rgba(6, 182, 212, 0.02)', stopOpacity: '0.1'}} />
              </radialGradient>
            </defs>
            <rect width="1920" height="1080" fill="url(#intelligenceMesh)" />
            <circle cx="960" cy="540" r="400" fill="url(#intelligenceGradient)" className="animate-ai-mesh-glow" />
          </svg>
        </div>

        {/* Layer 1: Massive Central AI Intelligence Sphere */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-32 h-32">
            {/* Massive Outer Energy Orbs */}
            <div className="absolute -inset-4 w-40 h-40 border-4 border-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 rounded-full animate-ai-mega-ring opacity-30 animate-ai-mega-pulse"></div>
            <div className="absolute -inset-6 w-44 h-44 border-2 border-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-ai-mega-ring-reverse opacity-20"></div>
            <div className="absolute -inset-8 w-48 h-48 border border-gradient-to-r from-purple-400 via-cyan-400 to-emerald-500 rounded-full animate-ai-mega-ring-slow opacity-15"></div>

            {/* Massive Central Intelligence Core */}
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-600 via-cyan-500 to-blue-600 rounded-full shadow-[0_0_100px_rgba(59,130,246,0.9)] animate-ai-mega-core-rotate relative overflow-hidden">
              {/* Multi-layer energy flows */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/60 to-transparent rounded-full animate-ai-mega-core-reverse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-full opacity-90 animate-ai-mega-core-inner"></div>
              <div className="absolute inset-4 bg-white/80 rounded-full animate-ai-mega-bright-core"></div>
              <div className="absolute inset-6 bg-gradient-to-br from-cyan-200 via-purple-200 to-blue-200 rounded-full animate-ai-mega-glow-core"></div>
              <div className="absolute inset-8 bg-gradient-conic from-transparent via-white/30 to-transparent rounded-full animate-ai-mega-inner-ring"></div>

              {/* Intelligence pulse waves */}
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-300 rounded-full animate-ai-mega-pulse-wave-1 shadow-lg shadow-blue-300/70 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-ai-mega-pulse-wave-2 shadow-md shadow-purple-300/60"></div>
              <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-cyan-300 rounded-full animate-ai-mega-pulse-wave-3 shadow-md shadow-cyan-300/60"></div>
              <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ai-mega-pulse-wave-4 shadow-sm shadow-emerald-300/50"></div>
              <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-pink-300 rounded-full animate-ai-mega-pulse-wave-5 shadow-md shadow-pink-300/60"></div>
            </div>

            {/* Massive Intelligence Beam Effect */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gradient-to-b from-blue-400 via-purple-500 via-cyan-400 to-transparent rounded-t-full animate-ai-mega-beam opacity-40 blur-sm"></div>

            {/* Superior Central Label */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-[14px] font-black text-blue-900 bg-gradient-to-b from-white via-blue-50 to-white backdrop-blur-lg px-6 py-3 rounded-3xl border-2 border-blue-200/80 shadow-2xl">
                INTELLIGENT<br />ORCHESTRATOR
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gradient-to-r from-blue-400 via-purple-500 via-cyan-400 to-blue-500 rounded-full blur-[1px]"></div>
              </div>
              <div className="text-[9px] text-blue-800 font-bold mt-3 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl shadow-lg border border-blue-200/60">Central AI Intelligence Hub</div>
            </div>
          </div>
        </div>

        {/* Layer 2: Revolutionary AI Agent Satellites */}
        <div className="absolute top-1/4 left-1/6">
          <div className="relative">
            {/* Analytics AI Satellite - Large Scale */}
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 via-teal-400 to-green-500 rounded-xl shadow-2xl animate-ai-agent-mega-morph-1 relative overflow-hidden border-3 border-green-300/70 transform-gpu">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent rounded-xl animate-ai-agent-inner-revolve"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-green-300 via-emerald-400 to-teal-300 rounded-lg opacity-80 animate-ai-agent-data-pulse"></div>
              <div className="absolute inset-4 bg-white/70 rounded-lg animate-ai-agent-bright-flash"></div>
              <div className="absolute inset-6 bg-gradient-conic from-green-200 via-emerald-200 to-teal-200 rounded-lg animate-ai-agent-analytics-rotate"></div>

              {/* Data visualization bars */}
              <div className="absolute inset-2 flex items-end justify-center space-x-1">
                <div className="w-1 bg-gradient-to-t from-green-400 to-emerald-300 rounded-full animate-ai-agent-bar-1" style={{height: '20px'}}></div>
                <div className="w-1 bg-gradient-to-t from-green-400 to-emerald-300 rounded-full animate-ai-agent-bar-2" style={{height: '35px'}}></div>
                <div className="w-1 bg-gradient-to-t from-green-400 to-emerald-300 rounded-full animate-ai-agent-bar-3" style={{height: '25px'}}></div>
                <div className="w-1 bg-gradient-to-t from-green-400 to-emerald-300 rounded-full animate-ai-agent-bar-4" style={{height: '40px'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/3 right-1/6">
          <div className="relative">
            {/* Operations Monitor Satellite - Professional Scale */}
            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 via-yellow-500 via-red-400 to-orange-500 rounded-xl shadow-2xl animate-ai-agent-mega-morph-2 relative overflow-hidden border-3 border-orange-300/70">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/35 to-transparent rounded-xl animate-ai-agent-monitor-scan"></div>

              {/* Monitoring dashboard */}
              <div className="absolute inset-2">
                <div className="w-full h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60"></div>
                <div className="absolute top-2 left-0 w-2 h-2 bg-green-400 rounded-full animate-ai-agent-status-light"></div>
                <div className="absolute top-2 right-0 w-2 h-2 bg-red-400 rounded-full animate-ai-agent-alert-light"></div>
                <div className="absolute bottom-1 left-1/2 w-2 h-1 bg-white/80 rounded-full animate-ai-agent-progress-bar transform -translate-x-1/2"></div>
              </div>

              {/* Holographic grid */}
              <div className="absolute inset-0 opacity-30">
                <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className={`border border-orange-300/40 ${i === 4 ? 'animate-ai-agent-center-glow' : 'animate-ai-agent-grid-pulse'}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/4 left-1/6">
          <div className="relative">
            {/* Security AI Satellite - Advanced Scale */}
            <div className="w-18 h-18 bg-gradient-to-br from-purple-500 via-pink-500 via-violet-500 to-purple-600 rounded-xl shadow-2xl animate-ai-agent-mega-morph-3 relative overflow-hidden border-3 border-purple-300/70">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent rounded-xl animate-ai-agent-security-shield"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-purple-400 via-pink-400 to-violet-400 rounded-lg opacity-85 animate-ai-agent-threat-pulse"></div>

              {/* Security patterns */}
              <div className="absolute inset-1">
                <div className="w-6 h-6 border-2 border-purple-300/60 rounded-lg rotate-45 animate-ai-agent-security-pattern absolute top-1 right-1"></div>
                <div className="w-4 h-4 border border-pink-300/50 rounded-full animate-ai-agent-threat-detector absolute bottom-1 left-1"></div>
                <div className="w-1 h-1 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full animate-ai-agent-vulnerability-light absolute top-2 left-2"></div>
              </div>

              {/* Protection field visualization */}
              <div className="absolute inset-3 border-2 border-gradient-to-r from-purple-400 via-pink-400 to-violet-400 rounded-lg animate-ai-agent-protection-field opacity-60"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/3 right-1/6">
          <div className="relative">
            {/* Auto-Response Satellite - Dynamic Scale */}
            <div className="w-15 h-15 bg-gradient-to-br from-cyan-400 via-blue-500 via-teal-400 to-cyan-500 rounded-xl shadow-2xl animate-ai-agent-mega-morph-4 relative overflow-hidden border-3 border-cyan-300/70">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/45 to-transparent rounded-xl animate-ai-agent-response-flow"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-cyan-300 via-blue-400 to-teal-300 rounded-lg opacity-80 animate-ai-agent-action-pulse"></div>

              {/* Action buttons/indicators */}
              <div className="absolute inset-2">
                <div className="w-3 h-3 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full animate-ai-agent-response-ready absolute top-0 right-0 shadow-sm"></div>
                <div className="w-2 h-2 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full animate-ai-agent-response-executing absolute bottom-0 left-0 shadow-sm"></div>
                <div className="w-2 h-1 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-ai-agent-response-progress absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
              </div>

              {/* Response flow visualization */}
              <div className="absolute inset-3">
                <div className="w-0.5 h-full bg-gradient-to-b from-cyan-300 via-blue-300 to-teal-300 animate-ai-agent-response-stream absolute left-1"></div>
                <div className="w-1 h-0.5 bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 animate-ai-agent-response-indicator absolute top-1 right-0"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-2/3 right-1/4">
          <div className="relative">
            {/* Cost Optimizer Satellite - Efficient Scale */}
            <div className="w-14 h-14 bg-gradient-to-br from-rose-400 via-pink-400 via-red-400 to-rose-500 rounded-xl shadow-2xl animate-ai-agent-mega-morph-5 relative overflow-hidden border-3 border-rose-300/70">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent rounded-xl animate-ai-agent-cost-balance"></div>

              {/* Optimization metrics */}
              <div className="absolute inset-2">
                <div className="w-full h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 animate-ai-agent-cost-efficiency relative rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ai-agent-cost-savings"></div>
                </div>
                <div className="absolute top-3 w-full text-center">
                  <div className="text-[7px] font-bold text-rose-800">$</div>
                </div>
                <div className="absolute bottom-1 left-1/2 w-1 h-1 bg-emerald-400 rounded-full animate-ai-agent-optimization-pulse -translate-x-1/2"></div>
              </div>

              {/* Resource allocation grid */}
              <div className="absolute inset-1 opacity-40">
                <div className="grid grid-cols-2 gap-1 w-full h-full p-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`border border-rose-300/50 rounded animate-ai-agent-resource-${i + 1}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 3: Intelligent Neural Pathways */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25">
          <defs>
            {/* Enhanced gradients for connections */}
            <linearGradient id="megaConnection1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: 'rgba(34, 197, 94, 0.6)', stopOpacity: '0.8'}} />
              <stop offset="100%" style={{stopColor: 'rgba(20, 184, 166, 0.6)', stopOpacity: '0.9'}} />
            </linearGradient>
            <linearGradient id="megaConnection2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: 'rgba(249, 115, 22, 0.6)', stopOpacity: '0.8'}} />
              <stop offset="100%" style={{stopColor: 'rgba(239, 68, 68, 0.6)', stopOpacity: '0.9'}} />
            </linearGradient>
            <linearGradient id="megaConnection3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'rgba(147, 51, 234, 0.6)', stopOpacity: '0.8'}} />
              <stop offset="100%" style={{stopColor: 'rgba(219, 39, 119, 0.6)', stopOpacity: '0.9'}} />
            </linearGradient>
            <linearGradient id="megaConnection4" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" style={{stopColor: 'rgba(6, 182, 212, 0.6)', stopOpacity: '0.8'}} />
              <stop offset="100%" style={{stopColor: 'rgba(59, 130, 246, 0.6)', stopOpacity: '0.9'}} />
            </linearGradient>
            <linearGradient id="megaConnection5" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0%" style={{stopColor: 'rgba(236, 72, 153, 0.6)', stopOpacity: '0.8'}} />
              <stop offset="100%" style={{stopColor: 'rgba(168, 85, 247, 0.6)', stopOpacity: '0.9'}} />
            </linearGradient>
          </defs>

          {/* Major neural pathways */}
          <path d="M 160,320 Q 480,180 960,540" stroke="url(#megaConnection1)" strokeWidth="2.5" fill="none" className="animate-ai-mega-neural-path-1">
            <animate attributeName="stroke-dashoffset" values="2000;0" dur="15s" repeatCount="indefinite" />
          </path>

          <path d="M 1440,360 Q 1200,150 960,540" stroke="url(#megaConnection2)" strokeWidth="2.5" fill="none" className="animate-ai-mega-neural-path-2">
            <animate attributeName="stroke-dashoffset" values="1600;0" dur="12s" repeatCount="indefinite" />
          </path>

          <path d="M 280,640 Q 480,400 960,540" stroke="url(#megaConnection3)" strokeWidth="2.5" fill="none" className="animate-ai-mega-neural-path-3">
            <animate attributeName="stroke-dashoffset" values="1800;0" dur="18s" repeatCount="indefinite" />
          </path>

          <path d="M 1000,100 Q 960,300 960,540" stroke="url(#megaConnection4)" strokeWidth="2.5" fill="none" className="animate-ai-mega-neural-path-4">
            <animate attributeName="stroke-dashoffset" values="1400;0" dur="14s" repeatCount="indefinite" />
          </path>

          <path d="M 1600,400 Q 1300,500 960,540" stroke="url(#megaConnection5)" strokeWidth="2.5" fill="none" className="animate-ai-mega-neural-path-5">
            <animate attributeName="stroke-dashoffset" values="1900;0" dur="16s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Layer 4: Subtle Content Protection Overlay */}
        <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-white/5 via-transparent to-white/10"></div>
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
              <span className="font-bold text-slate-800">50% cost savings</span>,{" "}
              <span className="font-bold text-slate-800">75% faster incident resolution</span>, and{" "}
              <span className="font-bold text-slate-800">complete operational autonomy</span>.
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
