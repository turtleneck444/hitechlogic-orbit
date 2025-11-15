import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, TrendingDown, LineChart, BarChart3, Zap, Award, Clock, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundPaths } from "@/components/ui/background-paths";

export function Hero() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const toggleFeature = (feature: string) => {
    setExpandedFeature(expandedFeature === feature ? null : feature);
  };

  return (
    <section className="relative flex items-center overflow-hidden bg-white">
      {/* Animated Background Paths from 21st.dev */}
      <div className="absolute inset-0 z-0 opacity-100">
        <BackgroundPaths />
      </div>

      {/* White Overlay to Soften Background Paths */}
      <div className="absolute inset-0 z-[1] bg-white/60 pointer-events-none" />

      {/* Additional Visual Elements */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-blue-50/30 via-transparent to-blue-50/20 pointer-events-none" />

      {/* Floating Orbs for Visual Interest */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[hsl(var(--accent-blue))]/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[hsl(var(--signal-purple))]/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="relative">
            {/* White Glow Protection Layer */}
            <div className="absolute -inset-12 bg-white/60 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -inset-16 bg-white/40 rounded-full blur-[100px] pointer-events-none" />

            {/* Content with relative positioning */}
            <div className="relative">
            {/* Badge with Animation */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-[hsl(var(--accent-blue))]/30 bg-gradient-to-r from-blue-50 to-indigo-50/50 mb-5 shadow-lg shadow-[hsl(var(--accent-blue))]/10 hover:shadow-xl hover:shadow-[hsl(var(--accent-blue))]/20 transition-all duration-300 group/badge">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent-blue))] animate-pulse" />
              <span className="text-sm font-bold text-[hsl(var(--navy))] tracking-wide">AI-Powered Cloud Operations & FinOps</span>
              <Zap className="h-4 w-4 text-[hsl(var(--accent-blue))] group-hover/badge:rotate-12 transition-transform" />
            </div>

            {/* MSP Heritage Sub-headline */}
            <p className="text-base md:text-lg font-semibold text-[hsl(var(--accent-blue))] mb-4 tracking-wide">
              Enterprise-Grade Managed Services Powered by Autonomous Agents
            </p>
            <p className="text-sm text-slate-600 mb-4 max-w-2xl">
              24/7 MSP operations with AI-driven automation—managing your infrastructure, security, and compliance so you can focus on innovation.
            </p>

            {/* Main Headline with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-5 leading-[1.15] text-[hsl(var(--navy))]">
              <span className="inline-block hover:scale-105 transition-transform duration-300">We</span>{" "}
              <span className="inline-block hover:scale-105 transition-transform duration-300">Engineer</span>{" "}
              <span className="inline-block hover:scale-105 transition-transform duration-300">Your</span>{" "}
              <span className="relative inline-block group/confidence hover:scale-105 transition-transform duration-300 text-[hsl(var(--accent-blue))]">
                Competitive Advantage
                <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--accent-blue))]/20 to-[hsl(var(--signal-purple))]/20 blur-xl group-hover/confidence:blur-2xl transition-all duration-300 -z-10" />
              </span>
            </h1>

            {/* Subheadline with Better Typography */}
            <p className="text-xl md:text-2xl text-slate-700 mb-6 leading-relaxed max-w-2xl font-light">
              Slash cloud costs by <span className="font-bold text-[hsl(var(--accent-blue))]">50%</span>, reduce MTTR by <span className="font-bold text-[hsl(var(--accent-blue))]">75%</span>, and automate operations with AI-powered FinOps, security, and reliability engineering.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                <span className="text-sm font-semibold text-slate-700">Fortune 500 Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                <span className="text-sm font-semibold text-slate-700">24/7 Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                <span className="text-sm font-semibold text-slate-700">SOC 2 Certified</span>
              </div>
            </div>

            {/* CTA Buttons with Enhanced Design */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                variant="primary"
                size="xl"
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
                size="xl"
                asChild
                className="group/outline border-2 border-[hsl(var(--accent-blue))]/30 hover:border-[hsl(var(--accent-blue))] hover:bg-blue-50 transition-all"
              >
                <Link to="/services">
                  Review Services
                  <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover/outline:opacity-100 group-hover/outline:translate-x-1 transition-all" />
                </Link>
              </Button>
            </div>

            {/* Enhanced Testimonial Quote */}
            <div className="relative group/quote p-4 rounded-xl bg-gradient-to-br from-white to-blue-50/30 border-2 border-slate-200/60 hover:border-[hsl(var(--accent-blue))]/30 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/0 to-[hsl(var(--accent-blue))]/0 group-hover/quote:from-[hsl(var(--accent-blue))]/5 group-hover/quote:to-transparent rounded-xl transition-all duration-300" />
              <div className="relative flex items-start space-x-3">
                <div className="flex-shrink-0 p-2 rounded-lg bg-[hsl(var(--accent-blue))]/10">
                  <BarChart3 className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700 leading-relaxed">
                    "We improve the stability, efficiency, and reliability of your technology environment through structured operational evolution."
                  </p>
                  <p className="text-xs text-slate-500 mt-1.5 font-semibold">— HiTechLogic Promise</p>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Right Column - Enhanced Executive Card */}
          <div className="relative lg:pl-8">
            {/* Enhanced Dynamic Glow Effects */}
            <div className="absolute -inset-8 bg-gradient-to-r from-[hsl(var(--accent-blue))]/20 via-[hsl(var(--signal-purple))]/20 to-[hsl(var(--accent-blue))]/20 rounded-[2.5rem] blur-3xl opacity-60 animate-pulse-slow" />
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-[2rem] blur-2xl opacity-40" />

            {/* Main Card - Premium Interactive Version */}
            <div className="group relative bg-gradient-to-br from-white via-blue-50/50 to-white backdrop-blur-3xl rounded-[1.75rem] shadow-[0_20px_70px_-15px_rgba(46,107,255,0.25),0_8px_16px_-8px_rgba(0,0,0,0.1)] border-2 border-white/60 p-6 lg:p-7 hover:shadow-[0_30px_90px_-15px_rgba(46,107,255,0.35),0_10px_20px_-8px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-1 hover:scale-[1.02] overflow-hidden">
              {/* Animated Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-blue-50/40 rounded-[1.75rem] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tl from-[hsl(var(--accent-blue))]/10 via-transparent to-[hsl(var(--signal-purple))]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[1.75rem] pointer-events-none" />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer" />
              </div>

              {/* Header with Icon Badge */}
              <div className="relative mb-5">
                <div className="mb-3">
                  <h3 className="text-xl lg:text-2xl font-black bg-gradient-to-r from-[hsl(var(--navy))] via-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent tracking-tight animate-gradient bg-[length:200%_auto]">
                    EXECUTIVE ASSURANCE
                  </h3>
                  <div className="flex items-center space-x-1.5 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent-blue))] animate-pulse" />
                    <p className="text-xs text-[hsl(var(--accent-blue))] font-semibold uppercase tracking-wide">Real-time Intelligence</p>
                  </div>
                </div>
                <p className="relative text-slate-700 text-sm leading-relaxed font-medium">
                  Enterprise-grade governance with <span className="text-[hsl(var(--accent-blue))] font-semibold">24/7 visibility</span> and predictive insights
                </p>
              </div>

              {/* Interactive Feature Cards */}
              <div className="relative space-y-2.5 mb-4">
                {/* Risk Reduction */}
                <div
                  className={`group/feature relative rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/30 border border-[hsl(var(--accent-blue))]/20 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden ${
                    expandedFeature === 'risk' ? 'shadow-xl border-[hsl(var(--accent-blue))]/60' : ''
                  }`}
                  onClick={() => toggleFeature('risk')}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 ${
                    expandedFeature === 'risk'
                      ? 'from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--signal-purple))]/10'
                      : 'from-[hsl(var(--accent-blue))]/0 to-[hsl(var(--accent-blue))]/0 group-hover/feature:from-[hsl(var(--accent-blue))]/5 group-hover/feature:to-[hsl(var(--signal-purple))]/5'
                  }`} />

                  <div className="relative p-3">
                    <div className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-white border border-[hsl(var(--accent-blue))]/20 flex items-center justify-center transition-all duration-300 ${
                        expandedFeature === 'risk' ? 'scale-110 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--signal-purple))]/10' : ''
                      }`}>
                        <ShieldCheck className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-bold text-[hsl(var(--navy))] mb-1">Risk Reduction</h4>
                          <ChevronDown className={`h-5 w-5 text-[hsl(var(--accent-blue))] transition-transform duration-300 ${
                            expandedFeature === 'risk' ? 'rotate-180' : ''
                          }`} />
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">Proactive threat detection with 24/7 monitoring and automated response protocols</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3 w-full bg-slate-200/60 rounded-full h-1.5 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] rounded-full transition-all duration-1000" style={{width: expandedFeature === 'risk' ? '95%' : '85%'}} />
                    </div>

                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedFeature === 'risk' ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-3 pt-3 border-t border-[hsl(var(--accent-blue))]/20">
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-blue))] mt-1.5 flex-shrink-0" />
                          <p className="text-xs text-slate-700 leading-relaxed"><span className="font-semibold">Continuous Monitoring:</span> Real-time surveillance of your entire infrastructure with AI-powered anomaly detection</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-blue))] mt-1.5 flex-shrink-0" />
                          <p className="text-xs text-slate-700 leading-relaxed"><span className="font-semibold">Automated Response:</span> Intelligent incident response workflows that neutralize threats before they impact operations</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-blue))] mt-1.5 flex-shrink-0" />
                          <p className="text-xs text-slate-700 leading-relaxed"><span className="font-semibold">Predictive Analytics:</span> Machine learning models forecast potential risks 3-6 months ahead</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-blue))] mt-1.5 flex-shrink-0" />
                          <p className="text-xs text-slate-700 leading-relaxed"><span className="font-semibold">Compliance Tracking:</span> Automated audits ensuring SOC 2, ISO 27001, and GDPR compliance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operational Clarity */}
                <div
                  className={`group/feature relative rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/30 border border-[hsl(var(--accent-blue))]/20 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden ${
                    expandedFeature === 'clarity' ? 'shadow-xl border-[hsl(var(--accent-blue))]/60' : ''
                  }`}
                  onClick={() => toggleFeature('clarity')}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 ${
                    expandedFeature === 'clarity'
                      ? 'from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--signal-purple))]/10'
                      : 'from-[hsl(var(--accent-blue))]/0 to-[hsl(var(--accent-blue))]/0 group-hover/feature:from-[hsl(var(--accent-blue))]/5 group-hover/feature:to-[hsl(var(--signal-purple))]/5'
                  }`} />

                  <div className="relative p-3">
                    <div className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-white border border-[hsl(var(--accent-blue))]/20 flex items-center justify-center transition-all duration-300 ${
                        expandedFeature === 'clarity' ? 'scale-110 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--signal-purple))]/10' : ''
                      }`}>
                        <LineChart className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-bold text-[hsl(var(--navy))] mb-1">Operational Clarity</h4>
                          <ChevronDown className={`h-5 w-5 text-[hsl(var(--accent-blue))] transition-transform duration-300 ${
                            expandedFeature === 'clarity' ? 'rotate-180' : ''
                          }`} />
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">Real-time visibility into system health and performance metrics across infrastructure</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3 w-full bg-slate-200/60 rounded-full h-1.5 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] rounded-full transition-all duration-1000" style={{width: expandedFeature === 'clarity' ? '98%' : '92%'}} />
                    </div>

                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedFeature === 'clarity' ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-3 pt-3 border-t border-[hsl(var(--accent-blue))]/20">
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-blue))] mt-1.5 flex-shrink-0" />
                          <p className="text-xs text-slate-700 leading-relaxed"><span className="font-semibold">Unified Dashboard:</span> Single pane of glass for all systems, applications, and infrastructure metrics</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-blue))] mt-1.5 flex-shrink-0" />
                          <p className="text-xs text-slate-700 leading-relaxed"><span className="font-semibold">Performance Tracking:</span> Real-time monitoring of response times, throughput, and resource utilization</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-blue))] mt-1.5 flex-shrink-0" />
                          <p className="text-xs text-slate-700 leading-relaxed"><span className="font-semibold">Dependency Mapping:</span> Visualize service relationships and understand impact of changes across your stack</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-blue))] mt-1.5 flex-shrink-0" />
                          <p className="text-xs text-slate-700 leading-relaxed"><span className="font-semibold">Executive Reporting:</span> Automated weekly summaries with actionable insights for leadership</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Measured Progress */}
                <div
                  className={`group/feature relative rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/30 border border-[hsl(var(--accent-blue))]/20 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden ${
                    expandedFeature === 'progress' ? 'shadow-xl border-[hsl(var(--accent-blue))]/60' : ''
                  }`}
                  onClick={() => toggleFeature('progress')}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 ${
                    expandedFeature === 'progress'
                      ? 'from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--signal-purple))]/10'
                      : 'from-[hsl(var(--accent-blue))]/0 to-[hsl(var(--accent-blue))]/0 group-hover/feature:from-[hsl(var(--accent-blue))]/5 group-hover/feature:to-[hsl(var(--signal-purple))]/5'
                  }`} />

                  <div className="relative p-3">
                    <div className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-white border border-[hsl(var(--accent-blue))]/20 flex items-center justify-center transition-all duration-300 ${
                        expandedFeature === 'progress' ? 'scale-110 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--signal-purple))]/10' : ''
                      }`}>
                        <TrendingDown className="h-4 w-4 text-[hsl(var(--accent-blue))]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-bold text-[hsl(var(--navy))] mb-1">Measured Progress</h4>
                          <ChevronDown className={`h-5 w-5 text-[hsl(var(--accent-blue))] transition-transform duration-300 ${
                            expandedFeature === 'progress' ? 'rotate-180' : ''
                          }`} />
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">Data-driven insights with quarterly reviews and continuous improvement cycles</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3 w-full bg-slate-200/60 rounded-full h-1.5 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] rounded-full transition-all duration-1000" style={{width: expandedFeature === 'progress' ? '88%' : '78%'}} />
                    </div>

                    {/* Expanded Content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedFeature === 'progress' ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-3 pt-3 border-t border-[hsl(var(--accent-blue))]/20">
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-blue))] mt-1.5 flex-shrink-0" />
                          <p className="text-xs text-slate-700 leading-relaxed"><span className="font-semibold">KPI Tracking:</span> Custom metrics aligned with your business objectives and success criteria</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-blue))] mt-1.5 flex-shrink-0" />
                          <p className="text-xs text-slate-700 leading-relaxed"><span className="font-semibold">Quarterly Business Reviews:</span> Strategic planning sessions with data-backed recommendations</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-blue))] mt-1.5 flex-shrink-0" />
                          <p className="text-xs text-slate-700 leading-relaxed"><span className="font-semibold">ROI Analysis:</span> Quantifiable impact on efficiency, reliability, and cost optimization</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent-blue))] mt-1.5 flex-shrink-0" />
                          <p className="text-xs text-slate-700 leading-relaxed"><span className="font-semibold">Continuous Improvement:</span> Iterative enhancements based on performance data and emerging best practices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Metrics Grid */}
              <div className="relative grid grid-cols-3 gap-2.5 pt-5 mt-5 border-t-2 border-gradient-to-r from-slate-200/80 via-[hsl(var(--accent-blue))]/20 to-slate-200/80">
                <div className="group/metric relative overflow-hidden p-3.5 rounded-xl bg-gradient-to-br from-white via-blue-50/40 to-white border border-[hsl(var(--accent-blue))]/20 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-lg hover:shadow-[hsl(var(--accent-blue))]/10 transition-all duration-500 cursor-pointer hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-[hsl(var(--signal-purple))]/5 opacity-0 group-hover/metric:opacity-100 rounded-xl transition-all duration-500" />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-1.5">
                      <div className="text-3xl lg:text-4xl font-black bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent group-hover/metric:scale-105 transition-transform">50%</div>
                      <div className="p-1.5 rounded-lg bg-[hsl(var(--accent-blue))]/10 group-hover/metric:bg-[hsl(var(--accent-blue))]/20 transition-colors">
                        <TrendingDown className="h-4 w-4 text-[hsl(var(--accent-blue))] group-hover/metric:scale-110 group-hover/metric:-rotate-12 transition-all" />
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-600 uppercase tracking-wider font-bold group-hover/metric:text-[hsl(var(--accent-blue))] transition-colors">Cloud Cost Savings</div>
                  </div>
                </div>

                <div className="group/metric relative overflow-hidden p-3.5 rounded-xl bg-gradient-to-br from-white via-blue-50/40 to-white border border-[hsl(var(--accent-blue))]/20 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-lg hover:shadow-[hsl(var(--accent-blue))]/10 transition-all duration-500 cursor-pointer hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-[hsl(var(--signal-purple))]/5 opacity-0 group-hover/metric:opacity-100 rounded-xl transition-all duration-500" />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[hsl(var(--signal-purple))]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-1.5">
                      <div className="text-3xl lg:text-4xl font-black bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent group-hover/metric:scale-105 transition-transform">90%</div>
                      <div className="p-1.5 rounded-lg bg-[hsl(var(--signal-purple))]/10 group-hover/metric:bg-[hsl(var(--signal-purple))]/20 transition-colors">
                        <BarChart3 className="h-4 w-4 text-[hsl(var(--signal-purple))] group-hover/metric:scale-110 group-hover/metric:rotate-12 transition-all" />
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-600 uppercase tracking-wider font-bold group-hover/metric:text-[hsl(var(--signal-purple))] transition-colors">Alert Noise Reduced</div>
                  </div>
                </div>

                <div className="group/metric relative overflow-hidden p-3.5 rounded-xl bg-gradient-to-br from-white via-blue-50/40 to-white border border-[hsl(var(--accent-blue))]/20 hover:border-[hsl(var(--accent-blue))]/40 hover:shadow-lg hover:shadow-[hsl(var(--accent-blue))]/10 transition-all duration-500 cursor-pointer hover:-translate-y-0.5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent-blue))]/5 to-[hsl(var(--signal-purple))]/5 opacity-0 group-hover/metric:opacity-100 rounded-xl transition-all duration-500" />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-1.5">
                      <div className="text-3xl lg:text-4xl font-black bg-gradient-to-br from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] bg-clip-text text-transparent group-hover/metric:scale-105 transition-transform">75%</div>
                      <div className="p-1.5 rounded-lg bg-green-500/10 group-hover/metric:bg-green-500/20 transition-colors">
                        <ShieldCheck className="h-4 w-4 text-green-600 group-hover/metric:scale-110 group-hover/metric:rotate-12 transition-all" />
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-600 uppercase tracking-wider font-bold group-hover/metric:text-green-600 transition-colors">Faster MTTR</div>
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
