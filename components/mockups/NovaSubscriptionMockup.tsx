"use client";

import React, { useState } from "react";
import { Repeat, Calendar, ShieldCheck, Check, Sparkles, RefreshCw, ArrowRight } from "lucide-react";

export const NovaSubscriptionMockup: React.FC = () => {
  const [cadence, setCadence] = useState("30");
  const [flavor, setFlavor] = useState("Forest Mint");
  const [upsellAdded, setUpsellAdded] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  return (
    <div className="w-full bg-[#080d16] rounded-xl border border-slate-800 overflow-hidden shadow-2xl text-xs font-sans select-none">
      {/* Portal Top Bar */}
      <div className="bg-[#0e1626] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400">
            <Repeat className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-slate-200 font-semibold text-xs flex items-center gap-1.5">
              <span>Nova Botanics Subscriber Hub</span>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-800">
                Stripe Billing v3
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded font-mono font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            +28% Retention
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Active Subscription Banner */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-[#0a1120] border border-emerald-500/20 rounded-lg p-3 relative">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-semibold">
                ACTIVE RECURRING PLAN
              </span>
              <h4 className="text-sm font-bold text-slate-100 mt-0.5">
                Daily Focus Adaptogen Formula
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Current selection: <span className="text-emerald-300 font-medium">{flavor}</span> (60-day supply)
              </p>
            </div>
            <div className="text-right">
              <div className="text-base font-bold font-mono text-emerald-400">$54.40</div>
              <div className="text-[10px] text-slate-500 line-through">$68.00/mo</div>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 rounded">20% VIP Lock</span>
            </div>
          </div>

          {/* Predictive Rebill Dates & Next Delivery */}
          <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
            <div className="flex items-center space-x-1.5 text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {isSkipped ? (
                  <span className="text-amber-400">Paused: Next shipment Nov 14, 2026</span>
                ) : (
                  <span>Next shipment: <strong className="text-white">Oct 14, 2026</strong></span>
                )}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsSkipped(!isSkipped)}
                className={`px-2 py-0.5 rounded text-[10px] font-medium border transition-colors ${
                  isSkipped
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                    : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                }`}
              >
                {isSkipped ? "Resume Schedule" : "Skip Shipment"}
              </button>
              <button
                onClick={() => setFlavor(flavor === "Forest Mint" ? "Wild Berry Blend" : "Forest Mint")}
                className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
              >
                Swap Formula
              </button>
            </div>
          </div>
        </div>

        {/* Cadence Selection Chips */}
        <div>
          <div className="text-[11px] text-slate-400 mb-1.5 flex justify-between">
            <span>Delivery Frequency (Self-Service)</span>
            <span className="text-emerald-400 font-mono text-[10px]">Zero churn penalty</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { days: "30", label: "Every 30 Days", popular: true },
              { days: "60", label: "Every 60 Days", popular: false },
              { days: "90", label: "Every 90 Days", popular: false },
            ].map((item) => (
              <button
                key={item.days}
                onClick={() => setCadence(item.days)}
                className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                  cadence === item.days
                    ? "bg-emerald-500/15 border-emerald-500 text-emerald-300"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
              >
                <div className="font-semibold text-[11px]">{item.label}</div>
                {item.popular && (
                  <span className="text-[9px] text-emerald-400 font-mono">Most Popular</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 1-Click Frictionless Upsell Box */}
        <div className="bg-[#0b121e] border border-slate-800 rounded-lg p-2.5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-[10px] font-bold text-emerald-400 font-mono border border-slate-700">
              TRAVEL
            </div>
            <div>
              <div className="text-slate-200 font-medium text-[11px]">Pocket Travel Sachet (7-Pack)</div>
              <div className="text-[10px] text-slate-400 font-mono">Add to next delivery for +$14.00</div>
            </div>
          </div>
          <button
            onClick={() => setUpsellAdded(!upsellAdded)}
            className={`px-3 py-1.5 rounded text-[11px] font-semibold transition-all flex items-center gap-1 ${
              upsellAdded
                ? "bg-emerald-600 text-white"
                : "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-glow-emerald"
            }`}
          >
            {upsellAdded ? (
              <>
                <Check className="w-3 h-3" /> Added (1-Click)
              </>
            ) : (
              <>+ Add 1-Click</>
            )}
          </button>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
          <span className="flex items-center gap-1 font-mono">
            <ShieldCheck className="w-3 h-3 text-emerald-400" /> Stripe Smart Dunning: 0 Failed Re-bills
          </span>
          <span className="text-emerald-400 font-mono">Webhook latency: 42ms</span>
        </div>
      </div>
    </div>
  );
};
