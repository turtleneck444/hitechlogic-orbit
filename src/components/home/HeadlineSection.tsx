'use client';
import React from 'react';
import { WavePath } from "@/components/ui/wave-path";
import { cn } from '@/lib/utils';

export function HeadlineSection() {
  return (
    <section className="relative w-full bg-white pt-14 md:pt-18 pb-20 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
          'bg-[radial-gradient(ellipse_at_center,hsl(var(--accent-blue)/.08),transparent_50%)]',
          'blur-[40px]',
        )}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 max-w-[1400px]">
        <WavePath className="mb-8 text-[hsl(var(--accent-blue))] mx-auto" />
        <div className="flex w-full flex-col items-center text-center gap-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-[1200px] 2xl:max-w-[1300px] px-0 sm:px-4 mx-auto">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--navy))]/5 border border-[hsl(var(--accent-blue))]/20">
                <svg className="h-5 w-5 text-[hsl(var(--accent-blue))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Operational Excellence
              </p>
            </div>
            <p className="w-full text-balance text-2xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold text-[hsl(var(--navy))] leading-[1.25]">
              Technology environments built for{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--accent-blue))] bg-clip-text text-transparent">
                stability, clarity, and confidence
              </span>
              . We manage the complexity so your teams can focus on innovation.
            </p>
          </div>

          {/* Stats Row */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[1200px] 2xl:max-w-[1300px] mx-auto">
            <div className="group relative overflow-hidden rounded-xl border border-[hsl(var(--accent-blue))]/15 bg-gradient-to-br from-white to-slate-50/50 p-6 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-[hsl(var(--accent-blue))]/10 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[hsl(var(--accent-blue))]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative">
                <p className="text-4xl font-bold bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--accent-blue))] bg-clip-text text-transparent mb-2">
                  99.9%
                </p>
                <p className="text-sm font-semibold text-slate-600">
                  Uptime Guarantee
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-[hsl(var(--accent-blue))]/15 bg-gradient-to-br from-white to-slate-50/50 p-6 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-[hsl(var(--accent-blue))]/10 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[hsl(var(--accent-blue))]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative">
                <p className="text-4xl font-bold bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--accent-blue))] bg-clip-text text-transparent mb-2">
                  24/7
                </p>
                <p className="text-sm font-semibold text-slate-600">
                  Expert Support
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-[hsl(var(--accent-blue))]/15 bg-gradient-to-br from-white to-slate-50/50 p-6 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-[hsl(var(--accent-blue))]/10 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[hsl(var(--accent-blue))]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative">
                <p className="text-4xl font-bold bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--accent-blue))] bg-clip-text text-transparent mb-2">
                  85%
                </p>
                <p className="text-sm font-semibold text-slate-600">
                  Alert Reduction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
