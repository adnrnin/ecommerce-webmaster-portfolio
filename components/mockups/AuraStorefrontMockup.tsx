"use client";

import React, { useState } from "react";
import { ShoppingBag, Zap, Check, ArrowRight, Shield, Star, Heart } from "lucide-react";

export const AuraStorefrontMockup: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="w-full bg-[#0b0f19] rounded-xl border border-slate-800 overflow-hidden shadow-2xl text-xs font-sans select-none">
      {/* Browser Bar */}
      <div className="bg-[#0f1523] px-3.5 py-2.5 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <div className="bg-[#090d16] border border-slate-800 px-3 py-1 rounded-md text-[11px] text-slate-400 font-mono flex items-center space-x-2">
          <span className="text-emerald-400">https://</span>
          <span className="text-slate-200">aura-apparel.com/catalog/merino-overcoat</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center gap-1 bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-medium">
            <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
            0.8s TTFB
          </span>
        </div>
      </div>

      {/* Main Storefront Layout */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left: Product Visual Card (Procedural SVG/CSS) */}
        <div className="md:col-span-6 bg-gradient-to-b from-slate-900 via-[#101726] to-[#090d16] rounded-lg border border-slate-800 p-4 relative flex flex-col justify-between overflow-hidden min-h-[260px]">
          {/* Subtle geometric luxury pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:12px_12px]" />
          
          <div className="flex items-center justify-between z-10">
            <span className="bg-slate-800/90 text-slate-300 text-[10px] font-medium px-2 py-0.5 rounded-full border border-slate-700/50">
              AUTUMN / WINTER 2026
            </span>
            <button className="text-slate-400 hover:text-rose-400 transition-colors p-1 bg-slate-800/40 rounded-full">
              <Heart className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Procedural Fashion Silhouette / Garment Graphic */}
          <div className="my-auto py-2 flex flex-col items-center justify-center relative">
            <div className="w-28 h-36 relative flex items-center justify-center">
              <svg viewBox="0 0 120 150" className="w-full h-full text-slate-700/60 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                {/* Stylized coat silhouette */}
                <path
                  d="M40 20 L25 45 L35 140 L85 140 L95 45 L80 20 L60 30 Z"
                  fill="#182234"
                  stroke="#334155"
                  strokeWidth="2"
                />
                <path
                  d="M60 30 L60 140"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeDasharray="3 2"
                />
                <path
                  d="M40 20 L60 45 L80 20"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="2"
                />
                {/* Lapel folds */}
                <polygon points="40,20 60,45 52,25" fill="#26354a" />
                <polygon points="80,20 60,45 68,25" fill="#26354a" />
              </svg>
              <div className="absolute bottom-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[9px] px-1.5 py-0.5 rounded font-mono font-medium">
                Edge Preloaded
              </div>
            </div>
            <div className="flex gap-1.5 mt-2">
              <div className="w-2 h-2 rounded-full bg-slate-200 ring-2 ring-emerald-500/50" />
              <div className="w-2 h-2 rounded-full bg-slate-600" />
              <div className="w-2 h-2 rounded-full bg-amber-900" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 z-10">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-emerald-400" /> 100% Virgin Merino
            </span>
            <span className="text-emerald-400 font-mono">In Stock (Next-Day)</span>
          </div>
        </div>

        {/* Right: PDP Action & Cart Drawer Simulation */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold">AURA ARCHIVE</span>
              <div className="flex items-center text-amber-400 text-[11px]">
                <Star className="w-3 h-3 fill-amber-400 mr-0.5" />
                <span className="font-bold">4.9</span>
                <span className="text-slate-500 text-[10px] ml-1">(184)</span>
              </div>
            </div>
            <h4 className="text-slate-100 font-bold text-base mt-0.5 leading-tight">
              Merino Minimalist Overcoat
            </h4>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-lg font-extrabold text-slate-100 font-mono">$680.00</span>
              <span className="text-xs text-slate-500 line-through font-mono">$790.00</span>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded font-medium">
                SAVE 14%
              </span>
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <div className="flex justify-between items-center mb-1 text-[11px]">
              <span className="text-slate-400">Select Size</span>
              <span className="text-emerald-400 hover:underline cursor-pointer">TrueFit™ Guide</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {["S", "M", "L", "XL"].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`py-1.5 text-center rounded border font-medium transition-all ${
                    selectedSize === sz
                      ? "bg-emerald-500/15 border-emerald-500 text-emerald-300 shadow-sm"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Instant Cart Drawer Simulation Box */}
          <div className="bg-[#090d16] border border-slate-800/90 rounded-lg p-2.5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                Optimistic Cart State
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">0ms Sync</span>
            </div>
            
            {/* Free shipping progress */}
            <div className="w-full bg-slate-800 rounded-full h-1.5 mb-1.5 overflow-hidden">
              <div className="bg-emerald-500 h-1.5 rounded-full w-full" />
            </div>
            <p className="text-[10px] text-slate-400">
              🎉 Unlocked <span className="text-slate-200 font-semibold">Free Express Courier Delivery</span>
            </p>
          </div>

          {/* Add to Cart & Apple Pay */}
          <div className="space-y-1.5 pt-1">
            <button
              onClick={handleAdd}
              className={`w-full py-2 px-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                isAdded
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-glow-emerald"
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" /> Added Instantly (Optimistic)
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add To Bag • $680.00
                </>
              )}
            </button>

            <button className="w-full py-1.5 px-3 rounded-lg bg-black border border-slate-700 text-white font-medium flex items-center justify-center gap-1.5 hover:bg-slate-900 transition-colors text-[11px]">
              <span>Pay with</span>
              <span className="font-bold text-xs tracking-tight">Pay</span>
              <ArrowRight className="w-3 h-3 ml-1 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
