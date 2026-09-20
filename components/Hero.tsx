"use client";

import React from "react";
import { heroMetrics } from "@/data/metrics";
import { ArrowRight, Calendar, ShieldCheck, Zap, TrendingUp, Gauge, Terminal, CheckCircle2, ChevronRight } from "lucide-react";

export const Hero: React.FC = () => {
  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case "Zap":
        return <Zap className="w-4 h-4 text-emerald-400" />;
      case "Gauge":
        return <Gauge className="w-4 h-4 text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Glows & Mesh Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/5 blur-[90px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill / Terminal Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-6 shadow-inner-glow backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-emerald-300">Enterprise E-Commerce Engineering</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 font-mono text-[11px]">Headless • Stripe • Next.js</span>
          </div>

          {/* Value Prop Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Architecting{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Scalable E-Commerce
            </span>{" "}
            Platforms, High-Conversion Checkouts & Custom Web Engines.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed mb-9">
            I engineer sub-second headless storefronts, frictionless global payment architectures,
            and high-concurrency inventory backends that maximize GMV, eliminate cart abandonment,
            and maintain 99.99% uptime.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
            <a
              href="#case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-glow-emerald hover:shadow-glow-emerald-lg transition-all"
            >
              <span>View E-Com Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
            >
              <Calendar className="w-4 h-4 text-indigo-400" />
              <span>Book a Discovery Call</span>
            </a>
          </div>

          {/* CLI Telemetry / Audit Bar */}
          <div className="max-w-2xl mx-auto bg-[#090d16]/90 border border-slate-800 rounded-lg p-2.5 mb-14 text-left shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1 border-b border-slate-800/80 pb-1.5">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-300">npx lighthouse-ci --audit=storefront --edge</span>
              </div>
              <span className="text-emerald-400 font-semibold">PASS (100/100)</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px] pt-1">
              <div className="bg-[#0e1422] p-1.5 rounded border border-slate-800/80">
                <span className="text-slate-500 text-[10px] block">LCP</span>
                <span className="text-emerald-400 font-bold">0.82s (Grade A)</span>
              </div>
              <div className="bg-[#0e1422] p-1.5 rounded border border-slate-800/80">
                <span className="text-slate-500 text-[10px] block">FID / INP</span>
                <span className="text-emerald-400 font-bold">18ms (Instant)</span>
              </div>
              <div className="bg-[#0e1422] p-1.5 rounded border border-slate-800/80">
                <span className="text-slate-500 text-[10px] block">CLS</span>
                <span className="text-emerald-400 font-bold">0.000 (Zero Shift)</span>
              </div>
              <div className="bg-[#0e1422] p-1.5 rounded border border-slate-800/80">
                <span className="text-slate-500 text-[10px] block">Cart Sync</span>
                <span className="text-emerald-400 font-bold">&lt; 16ms Local</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive KPI Stats Ticker */}
        <div id="metrics" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {heroMetrics.map((metric) => (
            <div
              key={metric.id}
              className="glass-panel glass-panel-hover rounded-xl p-4 sm:p-5 relative group overflow-hidden border border-slate-800/80"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  {getMetricIcon(metric.iconName)}
                </div>
                {metric.change && (
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
                    {metric.change}
                  </span>
                )}
              </div>

              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1">
                {metric.value}
              </div>

              <div className="text-xs font-semibold text-slate-200 mb-1">
                {metric.label}
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
