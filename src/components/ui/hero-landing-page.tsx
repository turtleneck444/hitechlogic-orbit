'use client'

import { useEffect, useState } from "react"
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import { Link } from "react-router-dom"

export function TuringLanding() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-800 overflow-x-hidden relative">
      {/* Subtle white gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-transparent opacity-50" />
      </div>

      {/* Spline 3D Background - Spectacular Full-View Enterprise-Level 3D Graphics */}
      <div className="absolute inset-0 z-[0] pointer-events-none overflow-hidden">
        <video
          className="hero-video absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          style={{ filter: 'brightness(0.3)' }}
        >
          <source
            src="https://mybycketvercelprojecttest.s3.sa-east-1.amazonaws.com/animation-bg.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 90% White Overlay */}
      <div className="absolute inset-0 z-[1] bg-white/90 pointer-events-none"></div>

      {/* Main Content */}
      <main className="main min-h-screen pt-[200px] pb-20 relative z-[2]">
        <div className="content-wrapper max-w-[1400px] mx-auto px-4 md:px-8 flex justify-between items-end relative">
          {/* Left Content */}
          <div className="max-w-[800px]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 tracking-tight text-[hsl(var(--navy))] relative">
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
            <p className="text-lg md:text-xl text-slate-700 mb-12 leading-relaxed max-w-2xl font-light">
              Achieve operational excellence with{" "}
              <span className="font-bold text-[hsl(var(--accent-blue))]">intelligent automation</span> and{" "}
              <span className="font-bold text-[hsl(var(--accent-blue))]">AI-powered</span> managed services that deliver{" "}
              <span className="font-bold text-slate-800">50% cost savings</span>,{" "}
              <span className="font-bold text-slate-800">75% faster incident resolution</span>, and{" "}
              <span className="font-bold text-slate-800">complete operational autonomy</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button className="group/cta relative shadow-2xl hover:shadow-[hsl(var(--accent-blue))]/40 transition-all transform hover:scale-105 bg-gradient-to-r from-[hsl(var(--accent-blue))] to-[hsl(var(--signal-purple))] hover:from-[hsl(var(--accent-blue))]/90 hover:to-[hsl(var(--signal-purple))]/90 text-white py-3.5 px-7 rounded-md text-base font-medium">
                <Link to="/contact" className="flex items-center gap-2.5">
                  <span className="relative z-10">Request Strategy Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </button>
              <button className="bg-transparent text-slate-700 hover:text-[hsl(var(--accent-blue))] py-3.5 px-7 text-base font-medium transition-colors duration-200">
                <Link to="/services">Review Services</Link>
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex gap-20 items-end hidden md:flex">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light leading-none mb-3 text-[hsl(var(--accent-blue))]">-85%</div>
              <div className="text-base text-slate-600 font-normal">Alert Volume Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light leading-none mb-3 text-[hsl(var(--accent-blue))]">4.5x</div>
              <div className="text-base text-slate-600 font-normal">MTTR Improvement</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
