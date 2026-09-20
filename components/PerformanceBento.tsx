"use client";

import React from "react";
import { bentoPerformanceItems } from "@/data/metrics";
import { Image as ImageIcon, Globe, Code2, CheckCircle2, Zap, Gauge, ArrowRight, ShieldCheck, Flame } from "lucide-react";

export const PerformanceBento: React.FC = () => {
  return (
    <section id="performance" className="py-24 bg-[#070a11] border-t border-slate-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Gauge className="w-3.5 h-3.5" />
            SUB-SECOND COMMERCE ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            E-Commerce Performance Bento Grid
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            E-commerce conversion drops by 7% for every 100ms of latency. Here is how I architect 
            storefronts to load in under 1 second worldwide.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: Image & Media Pipeline (Span 7) */}
          <div className="md:col-span-7 glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/90 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  ASSET OPTIMIZATION
                </span>
                <span className="text-emerald-400 font-mono text-xs font-bold">
                  -78% Payload Size
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-emerald-400" /> Next-Gen Media Transcoding
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Automated AVIF and WebP pipelines with dynamic srcset generation, responsive edge downsampling, and SVG blur-up placeholders to eliminate Cumulative Layout Shift (CLS).
              </p>

              {/* Simulation Visual Graphic */}
              <div className="bg-[#0b101c] border border-slate-800 rounded-xl p-3.5 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                  <span>Format Comparison</span>
                  <span className="text-emerald-400 font-semibold">AVIF / WebP Edge Delivery</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Unoptimized JPEG</span>
                    <span className="text-rose-400 font-bold">2.4 MB (3.8s mobile download)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-rose-500 h-full w-full" />
                  </div>

                  <div className="flex justify-between items-center text-slate-300 pt-1">
                    <span className="text-emerald-300">Next.js Edge AVIF</span>
                    <span className="text-emerald-400 font-bold">142 KB (0.12s edge delivery)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[6%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1 font-mono text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Zero CLS (0.000)
              </span>
              <span className="text-emerald-400 font-mono">Edge Cache TTL: 30 Days</span>
            </div>
          </div>

          {/* Card 2: Edge Middleware & Geo-Routing (Span 5) */}
          <div className="md:col-span-5 glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/90 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                  EDGE ROUTING
                </span>
                <span className="text-cyan-400 font-mono text-xs font-bold">
                  &lt; 15ms Latency
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" /> Edge Middleware
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Executes nearest to the customer worldwide on Vercel & Cloudflare Edge. Resolves geo-IP, matches local currency catalogs, and blocks scrapers before origin execution.
              </p>

              {/* Edge Node Visual Indicator */}
              <div className="bg-[#0b101c] border border-slate-800 rounded-xl p-3 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span className="text-cyan-300">Edge Point of Presence:</span>
                  <span className="text-emerald-400">London (LHR)</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Catalog & FX Currency:</span>
                  <span className="text-white">GBP (£) - Stored in Edge KV</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Bot Verification:</span>
                  <span className="text-emerald-400">Passed (Human Traffic)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono flex items-center justify-between">
              <span>Origin Requests Saved: 84%</span>
              <span className="text-cyan-400">Global Edge PoPs: 310+</span>
            </div>
          </div>

          {/* Card 3: Atomic CSS & Zero Runtime Tax (Span 5) */}
          <div className="md:col-span-5 glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/90 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                  BUNDLE HYGIENE
                </span>
                <span className="text-indigo-400 font-mono text-xs font-bold">
                  &lt; 14KB CSS
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-indigo-400" /> Atomic CSS & Zero Runtime
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Eliminates CSS-in-JS runtime overhead. Tailwind atomic classes are pre-compiled and tree-shaken, keeping the total style payload smaller than a single high-res thumbnail.
              </p>

              <div className="bg-[#0b101c] border border-slate-800 rounded-xl p-3 text-xs font-mono space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Tailwind Gzip Payload:</span>
                  <span className="text-emerald-400 font-bold">11.4 KB</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Style Parse Time:</span>
                  <span className="text-emerald-400 font-bold">&lt; 3ms</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Interaction to Next Paint:</span>
                  <span className="text-indigo-300 font-bold">INP: 24ms</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono flex items-center justify-between">
              <span>Legacy CSS: 420KB</span>
              <span className="text-emerald-400 font-semibold">97% Lighter</span>
            </div>
          </div>

          {/* Card 4: Checkout Anti-Friction Principles (Span 7) */}
          <div className="md:col-span-7 glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/90 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  CRO ARCHITECTURE
                </span>
                <span className="text-emerald-400 font-mono text-xs font-bold">
                  +38% Checkout Rate
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" /> Checkout Anti-Friction Principles
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                Every millisecond and extra input field kills e-commerce conversions. Our checkout architectures replace tedious multi-step hurdles with native biometric payment sheets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="bg-[#0b101c] p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-400 text-[10px]">Express Wallets</div>
                  <div className="text-white font-bold mt-0.5">Apple / Google Pay</div>
                  <div className="text-[10px] text-emerald-400 mt-1">1-Tap Biometric</div>
                </div>
                <div className="bg-[#0b101c] p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-400 text-[10px]">Address Autocomplete</div>
                  <div className="text-white font-bold mt-0.5">Google Places API</div>
                  <div className="text-[10px] text-emerald-400 mt-1">-4 Manual Fields</div>
                </div>
                <div className="bg-[#0b101c] p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-400 text-[10px]">Optimistic State</div>
                  <div className="text-white font-bold mt-0.5">Zustand + Storage</div>
                  <div className="text-[10px] text-emerald-400 mt-1">0 Cart Abandonment</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-300">
              <span>Cart to Payment Completion: &lt; 3.2s</span>
              <span className="text-emerald-400 font-bold">+18% Mobile GMV</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
