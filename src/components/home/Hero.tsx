import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundPaths } from "@/components/ui/background-paths";

const heroRealTimeCards = [
  {
    value: "85%",
    label: "Fewer Alerts",
    detail: "85% reduction in unnecessary notifications",
    accent: "from-blue-50/90 via-slate-50 to-white/90"
  },
  {
    value: "4.5x",
    label: "Faster Resolution",
    detail: "Issues resolved 4.5 times faster",
    accent: "from-sky-50/100 via-white/70 to-white/90"
  },
  {
    value: "32%",
    label: "Cost Savings",
    detail: "32% lower managed IT costs",
    accent: "from-emerald-50/90 via-white/70 to-white/90"
  },
  {
    value: "99.98%",
    label: "Uptime Guarantee",
    detail: "99.98% system availability SLA",
    accent: "from-violet-50/90 via-white/70 to-white/90"
  },
];

export function Hero() {

  return (
    <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* BackgroundPaths Animation */}
      <div className="absolute inset-0 z-[0]">
        <BackgroundPaths />
      </div>

      {/* Enhanced Gradient Overlays for Depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-radial from-cyan-50/20 via-transparent to-purple-50/20 animate-pulse" style={{animationDuration: '6s'}}></div>
      <div className="absolute inset-0 z-[1] bg-gradient-conic from-transparent via-blue-50/10 to-transparent animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>

      {/* Floating Accent Elements */}
      <div className="absolute top-20 left-10 z-[2] w-2 h-2 bg-[hsl(var(--accent-blue))] rounded-full opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-32 right-16 z-[2] w-1.5 h-1.5 bg-[hsl(var(--signal-purple))] rounded-full opacity-40 animate-float" style={{animationDelay: '2.5s'}}></div>
      <div className="absolute bottom-40 left-1/4 z-[2] w-1 h-1 bg-cyan-400 rounded-full opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-32 right-1/3 z-[2] w-2.5 h-2.5 bg-purple-400 rounded-full opacity-45 animate-float" style={{animationDelay: '0.8s'}}></div>

      {/* Subtle Geometric Shapes */}
      <div className="absolute top-16 right-8 z-[1] w-20 h-20 border border-[hsl(var(--accent-blue))]/10 rounded-lg rotate-12 opacity-30 animate-slow-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-20 left-12 z-[1] w-16 h-16 border border-[hsl(var(--signal-purple))]/8 rounded-full opacity-25 animate-slow-spin-reverse" style={{animationDuration: '25s'}}></div>

      {/* Advanced Premium Lighting System */}
      <div className="absolute top-0 left-0 w-full h-full z-[4] pointer-events-none">
        {/* Primary Light Rays */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-[hsl(var(--accent-blue))]/5 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s'}}></div>
        <div className="absolute bottom-40 right-32 w-80 h-80 bg-gradient-radial from-[hsl(var(--signal-purple))]/6 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '15s', animationDelay: '3s'}}></div>

        {/* Secondary Ambient Lights */}
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-radial from-blue-500/4 via-transparent to-transparent rounded-full blur-2xl animate-pulse" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-radial from-purple-500/5 to-transparent rounded-full blur-xl animate-pulse" style={{animationDuration: '18s', animationDelay: '5s'}}></div>

        {/* Dynamic Light Streaks */}
        <div className="absolute top-32 left-60 w-px h-24 bg-gradient-to-b from-[hsl(var(--accent-blue))]/20 to-transparent animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-48 right-80 w-px h-32 bg-gradient-to-t from-[hsl(var(--signal-purple))]/25 to-transparent animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
      </div>

      {/* World-Class Particle Network */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {/* Primary Particle Cluster */}
        <div className="absolute top-1/4 left-1/4">
          <div className="w-1 h-1 bg-[hsl(var(--accent-blue))] rounded-full opacity-80 animate-float-fast" style={{animationDelay: '0s'}}></div>
          <div className="w-1.5 h-1.5 bg-[hsl(var(--signal-purple))] rounded-full opacity-60 animate-float-fast" style={{animationDelay: '1s', transform: 'translate(40px, 20px)'}}></div>
          <div className="w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-90 animate-float-fast" style={{animationDelay: '2s', transform: 'translate(80px, -10px)'}}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-50 animate-float-fast" style={{animationDelay: '3s', transform: 'translate(20px, 60px)'}}></div>
        </div>

        {/* Secondary Particle Cloud */}
        <div className="absolute bottom-1/3 right-1/3">
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] rounded-full opacity-70 animate-float-slow" style={{animationDelay: '0.5s'}}></div>
          <div className="w-1 h-1 bg-cyan-300 rounded-full opacity-85 animate-float-slow" style={{animationDelay: '1.5s', transform: 'translate(-30px, 40px)'}}></div>
          <div className="w-0.5 h-0.5 bg-purple-300 rounded-full opacity-95 animate-float-slow" style={{animationDelay: '2.5s', transform: 'translate(50px, -20px)'}}></div>
        </div>

        {/* Tertiary Floating Elements */}
        <div className="absolute top-1/3 right-1/4">
          <div className="w-1.5 h-1.5 bg-[hsl(var(--accent-blue))]/60 rounded-full animate-float-medium" style={{animationDelay: '0.8s'}}></div>
          <div className="w-1 h-1 bg-white/30 rounded-full animate-float-medium" style={{animationDelay: '1.8s', transform: 'translate(60px, 30px)'}}></div>
        </div>
      </div>

      {/* Premium Glass Effects Overlay */}
      <div className="absolute inset-0 z-[6] bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-[1px]"></div>

      {/* 40% White Overlay */}
      <div className="absolute inset-0 z-[7] bg-white/40 pointer-events-none"></div>

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
      {/* Premium Corporate Headline - Inter Font */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] text-[hsl(var(--navy))] tracking-tighter relative font-['Inter']">
                {/* Elegant accent line above headline */}
                <div className="absolute -top-4 left-0 w-24 h-0.5 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))]"></div>

                <span className="inline-block text-4xl md:text-6xl lg:text-7xl transition-all duration-300 hover:scale-105 hover:text-[hsl(var(--navy))]/80">We</span>{" "}
                <span className="inline-block text-4xl md:text-6xl lg:text-7xl transition-all duration-300 hover:scale-105 hover:text-[hsl(var(--navy))]/80">Engineer</span>{" "}
                <span className="inline-block text-4xl md:text-6xl lg:text-7xl transition-all duration-300 hover:scale-105 hover:text-[hsl(var(--accent-blue))] relative">
                  Your{" "}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--accent-blue))]/10 via-[hsl(var(--signal-purple))]/10 to-[hsl(var(--navy))]/5 blur-xl -z-10 opacity-60"></div>
                </span>
                <span className="relative inline-block group text-5xl md:text-7xl lg:text-8xl text-[hsl(var(--accent-blue))]">
                  Competitive Advantage
                  {/* Premium Animated Underline */}
                  <div className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-[hsl(var(--accent-blue))] via-[hsl(var(--signal-purple))] to-[hsl(var(--accent-blue))] opacity-90 scale-x-0 origin-left animate-underline-draw"></div>
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

          {/* Right Column - Modern HiTechLogic Intelligence */}
          <div className="relative lg:pl-4">
            {/* Advanced Light Glow Effects - Site Color Matched */}
            <div className="absolute -inset-20 bg-gradient-conic from-[hsl(var(--accent-blue))]/8 via-[hsl(var(--signal-purple))]/10 to-[hsl(var(--accent-blue))]/8 rounded-full blur-[100px] opacity-70 animate-pulse" />
            <div className="absolute -inset-16 bg-gradient-radial from-[hsl(var(--accent-blue))]/10 via-transparent to-[hsl(var(--signal-purple))]/10 rounded-[4rem] blur-[60px] opacity-50" />
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-200/20 to-[hsl(var(--accent-blue))]/20 rounded-[2rem] blur-[30px] opacity-80" />

            {/* Neural Network Overlay */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="neural-network" patternUnits="userSpaceOnUse" width="80" height="80">
                    <circle cx="20" cy="20" r="2" fill="[hsl(var(--accent-blue))]" opacity="0.4">
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="60" r="2" fill="[hsl(var(--signal-purple))]" opacity="0.4">
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" begin="1s" />
                    </circle>
                    <line x1="20" y1="20" x2="60" y2="60" stroke="[hsl(var(--accent-blue))]" strokeWidth="0.5" opacity="0.2">
                      <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
                    </line>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#neural-network)" />
              </svg>
            </div>

            {/* Main Modern Card */}
            <div className="relative bg-gradient-to-br from-white/98 via-slate-50/95 to-white/95 backdrop-blur-3xl border border-[hsl(var(--accent-blue))]/30 rounded-3xl shadow-[0_0_150px_-20px_rgba(46,107,255,0.15)] overflow-hidden">
              {/* Elegant Border */}
              <div className="absolute inset-0 rounded-3xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[hsl(var(--accent-blue))]/15 via-[hsl(var(--signal-purple))]/15 to-[hsl(var(--accent-blue))]/15 animate-pulse">
                  <div className="absolute inset-px rounded-[23px] bg-gradient-to-br from-white/98 to-slate-50/95"></div>
                </div>
              </div>

              {/* Flowing Data Line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--accent-blue))]/60 to-transparent overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--signal-purple))]/40 to-transparent animate-pulse">
                  <div className="absolute -inset-full w-1/3 h-full bg-[hsl(var(--accent-blue))]/60 animate-pulse" style={{animationDelay: '500ms', animationDuration: '2.5s'}}></div>
                </div>
              </div>

              <div className="relative p-5">

                {/* Mission Focus Header */}
                <div className="relative mb-3">
                  {/* Strategic Mission Statement */}
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-1 h-10 bg-gradient-to-b from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] rounded-full opacity-70"></div>
                    <div>
                      <p className="text-sm text-slate-700 leading-relaxed font-medium max-w-md">
                        <span className="text-[hsl(var(--accent-blue))] font-bold">Proven results</span> across{" "}
                        <span className="text-[hsl(var(--signal-purple))] font-bold">enterprise clients</span>:{" "}
                        <span className="text-[hsl(var(--accent-blue))]">intelligent</span>{" "}
                        <span className="text-[hsl(var(--signal-purple))]">automation</span> that delivers{" "}
                        <span className="text-[hsl(var(--accent-blue))] font-semibold">measurable impact</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Compact Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-3"></div>

                {/* Enhanced Modern Analytics Dashboard */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {heroRealTimeCards.map((card, index) => (
                    <div
                      key={card.label}
                      className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-white/95 to-slate-50/90 border-2 border-transparent bg-clip-padding backdrop-blur-2xl hover:border-[hsl(var(--accent-blue))]/30 transition-all duration-700 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-[hsl(var(--accent-blue))]/15"
                    >
                      {/* Dynamic Gradient Border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent-blue))]/20 via-[hsl(var(--signal-purple))]/15 to-[hsl(var(--accent-blue))]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

                      {/* Elegant Inner Shadow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent shadow-inner opacity-50"></div>

                      {/* Advanced Data Points */}
                      <div className="absolute -top-1 -right-1 flex gap-0.5">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${index % 2 === 0 ? 'from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))]' : 'from-[hsl(var(--signal-purple))] to-[hsl(var(--accent-blue))]'} animate-pulse shadow-sm`} style={{animationDelay: '0ms'}}></div>
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${index % 2 === 0 ? 'from-[hsl(var(--signal-purple))] to-[hsl(var(--accent-blue))]' : 'from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))]'} animate-pulse shadow-sm`} style={{animationDelay: '150ms'}}></div>
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${index % 2 === 0 ? 'from-[hsl(var(--accent-blue))] to-white' : 'from-[hsl(var(--signal-purple))] to-white'} animate-pulse shadow-sm`} style={{animationDelay: '300ms'}}></div>
                      </div>

                      <div className="relative p-5 space-y-4">
                        {/* Metric Value with Glow Effect */}
                        <div className="relative">
                          <div className="text-4xl font-mono font-black text-slate-800 leading-none tracking-tight">
                            {card.value.split(/(\d+(?:\.\d+)?)/).filter(part => part !== '').map((part, index) =>
                              /^\d+(?:\.\d+)?$/.test(part) ? (
                                <span key={index} className="text-black font-extrabold">
                                  {part}
                                </span>
                              ) : (
                                <span key={index} className="text-[hsl(var(--accent-blue))] font-extrabold">
                                  {part}
                                </span>
                              )
                            )}
                          </div>
                          <div className="absolute -inset-2 bg-gradient-to-r from-[hsl(var(--accent-blue))]/5 via-[hsl(var(--signal-purple))]/5 to-[hsl(var(--accent-blue))]/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                        </div>

                        {/* Label with Elegant Typography */}
                        <div className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent-blue))] font-bold leading-tight">
                          {card.label}
                        </div>

                        {/* Enhanced Description */}
                        <div className={`text-xs text-slate-500 leading-relaxed font-medium ${card.detail.includes('intelligent') ? 'text-[hsl(var(--signal-purple))] font-semibold' : ''}`}>
                          {card.detail.split(/(\d+)/).filter(part => part !== '').map((part, index) =>
                            /^\d+$/.test(part) ? (
                              <span key={index} className="text-[hsl(var(--accent-blue))] font-bold">
                                {part}
                              </span>
                            ) : (
                              <span key={index}>
                                {part}
                              </span>
                            )
                          )}
                        </div>

                        {/* Advanced Progress Visualization */}
                        <div className="relative mt-6">
                          <div className="w-full bg-gradient-to-r from-slate-200/40 to-slate-300/40 rounded-full h-2 overflow-hidden shadow-inner backdrop-blur-sm border border-slate-200/30">
                            <div className={`h-full rounded-full bg-gradient-to-r from-[hsl(var(--accent-blue))] via-[hsl(var(--signal-purple))] to-[hsl(var(--accent-blue))] transition-all duration-3000 shadow-sm`}
                                 style={{width: `${65 + (index * 12)}%`}}>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse rounded-full"></div>
                            </div>
                          </div>
                          {/* Progress Glow Effect */}
                          <div className={`absolute top-0 h-full rounded-full bg-gradient-to-r from-[hsl(var(--accent-blue))]/20 via-[hsl(var(--signal-purple))]/20 to-[hsl(var(--accent-blue))]/20 blur-sm transition-all duration-3000`} style={{width: `${65 + (index * 12)}%`}}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disclaimer Footer */}
                <div className="mt-3 pt-2 border-t border-slate-200/60">
                  <div className="text-[10px] text-slate-400 italic leading-tight text-center">
                    *Results are estimates and may vary based on client configuration and workload. Actual outcomes depend on specific implementation details.
                  </div>
                </div>

                {/* HiTechLogic Branding Footer */}
                <div className="mt-2 pt-2 border-t border-slate-200/60">
                  <div className="flex justify-end">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[hsl(var(--accent-blue))] tracking-widest">HiTechLogic</span>
                      <div className="w-1.5 h-1.5 bg-[hsl(var(--signal-purple))] rounded-full opacity-80 shadow-sm"></div>
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
