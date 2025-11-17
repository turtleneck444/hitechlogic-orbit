import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { useState, useEffect } from "react";

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
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Cycle through cards every 2.5 seconds with subtle heartbeat animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % heroRealTimeCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 texture-hologram">
      {/* BackgroundPaths Animation */}
      <div className="absolute inset-0 z-[0] rotate-180">
        <BackgroundPaths />
      </div>

      {/* Premium Background Texture Layer - Enhanced Visibility */}
      <div className="absolute inset-0 z-[0] texture-neural-net opacity-80"></div>
      <div className="absolute inset-0 z-[0] texture-data-flow opacity-30"></div>

      {/* Enhanced Gradient Overlays for Depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-radial from-cyan-50/20 via-transparent to-purple-50/20 animate-pulse" style={{animationDuration: '6s'}}></div>
      <div className="absolute inset-0 z-[1] bg-gradient-conic from-transparent via-blue-50/10 to-transparent animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>

      {/* Subtle Geometric Shapes - Minimal Animation */}
      <div className="absolute top-16 right-8 z-[1] w-20 h-20 border border-[hsl(var(--accent-blue))]/10 rounded-lg rotate-12 opacity-20"></div>
      <div className="absolute bottom-20 left-12 z-[1] w-16 h-16 border border-[hsl(var(--signal-purple))]/8 rounded-full opacity-15"></div>

      {/* Advanced Premium Lighting System - Soft Lighting Only */}
      <div className="absolute top-0 left-0 w-full h-full z-[4] pointer-events-none">
        {/* Primary Light Rays */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-[hsl(var(--accent-blue))]/3 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-32 w-80 h-80 bg-gradient-radial from-[hsl(var(--signal-purple))]/4 via-transparent to-transparent rounded-full blur-3xl"></div>

        {/* Secondary Ambient Lights */}
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-radial from-blue-500/2 via-transparent to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-radial from-purple-500/3 to-transparent rounded-full blur-xl"></div>

        {/* Dynamic Light Streaks */}
        <div className="absolute top-32 left-60 w-px h-24 bg-gradient-to-b from-[hsl(var(--accent-blue))]/15 to-transparent"></div>
        <div className="absolute bottom-48 right-80 w-px h-32 bg-gradient-to-t from-[hsl(var(--signal-purple))]/20 to-transparent"></div>
      </div>

      {/* Premium Glass Effects Overlay */}
      <div className="absolute inset-0 z-[6] bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-[1px]"></div>

      {/* 15% White Overlay - Reduced Opacity for Better Background Visibility */}
      <div className="absolute inset-0 z-[7] bg-white/15 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_2fr] lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="relative">
            {/* Enhanced White Glow Protection Layers */}
            <div className="absolute -inset-8 bg-white/80 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -inset-12 bg-white/60 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -inset-20 bg-white/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -inset-24 bg-white/20 rounded-full blur-[200px] pointer-events-none" />

            {/* Content with relative positioning */}
            <div className="relative">
            {/* Sophisticated Corporate Headline */}
            <div className="relative mb-4">
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-semibold leading-none md:leading-snug text-[hsl(var(--navy))] relative font-['Inter']
                     drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-l-4 border-l-[hsl(var(--accent-blue))]/40 pl-6">
                <span className="text-[hsl(var(--navy))] block">We Engineer</span>{" "}
                <span className="block"><span className="whitespace-nowrap"><span className="text-[hsl(var(--accent-blue))]">Your</span> <span className="text-[hsl(var(--navy))]">Competitive</span></span></span>{" "}
                <span className="text-[hsl(var(--accent-blue))] block">Advantage</span>
              </h1>

              {/* Subtle radial glow for depth */}
              <div className="absolute -inset-8 bg-gradient-radial from-[hsl(var(--accent-blue))]/3 via-transparent to-transparent rounded-full blur-2xl opacity-40 -z-10"></div>
            </div>

            {/* Subheadline with Enhanced Value Propositions - Perfect Responsive Wrapping */}
            <p className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed max-w-2xl font-light">
              Achieve operational excellence with{" "}
              <span className="whitespace-nowrap font-bold text-[hsl(var(--accent-blue))]">intelligent automation</span> and{" "}
              <span className="whitespace-nowrap font-bold text-[hsl(var(--accent-blue))]">AI-powered</span> managed services that deliver{" "}
              <span className="whitespace-nowrap font-bold text-slate-800">50% cost savings</span>,{" "}
              <span className="whitespace-nowrap font-bold text-slate-800">75% faster incident resolution</span>, and{" "}
              <span className="whitespace-nowrap font-bold text-slate-800">complete operational autonomy</span>.
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
            {/* Subtle Professional Lighting */}
            <div className="absolute -inset-8 bg-gradient-to-br from-slate-100/40 to-slate-200/20 rounded-[1.5rem] blur-[40px] opacity-60" />

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

            {/* Professional Modern Card */}
            <div className="relative bg-gradient-to-br from-white/95 to-slate-50/90 backdrop-blur-2xl border border-slate-200/60 rounded-3xl shadow-xl overflow-hidden">
              {/* Clean Subtle Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-slate-200/40 via-slate-100/20 to-slate-200/40">
                <div className="absolute inset-px rounded-[23px] bg-white"></div>
              </div>

              {/* Clean Progress Line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200/80 to-transparent"></div>

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

                {/* Clean Professional Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {heroRealTimeCards.map((card, index) => {
                    const isActive = index === activeCardIndex;
                    return (
                      <div key={card.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="text-center space-y-2">
                          <div className={`text-2xl font-bold leading-none transition-colors duration-1000 ${isActive ? 'text-[hsl(var(--accent-blue))]' : 'text-gray-900'}`}>
                            {card.value}
                          </div>
                          <div className={`text-xs uppercase tracking-wider font-semibold transition-colors duration-1000 ${isActive ? 'text-[hsl(var(--signal-purple))]' : 'text-slate-600'}`}>
                            {card.label}
                          </div>
                          <div className={`text-xs leading-relaxed transition-colors duration-1000 ${isActive ? 'text-slate-700' : 'text-slate-500'}`}>
                            {card.detail}
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
