"use client";

import React, { useState } from "react";
import { ShieldCheck, ShieldAlert, Globe, CreditCard, Lock, Zap, CheckCircle2, ChevronRight } from "lucide-react";

export const QuantumPayMockup: React.FC = () => {
  const [currency, setCurrency] = useState("USD");
  const [cardNumber, setCardNumber] = useState("•••• •••• •••• 4242");
  const [riskScore, setRiskScore] = useState(12); // low risk

  const currencies: Record<string, { symbol: string; rate: string; total: string }> = {
    USD: { symbol: "$", rate: "1.000", total: "1,240.00" },
    EUR: { symbol: "€", rate: "0.924", total: "1,145.76" },
    GBP: { symbol: "£", rate: "0.781", total: "968.44" },
    JPY: { symbol: "¥", rate: "154.2", total: "191,208" },
  };

  return (
    <div className="w-full bg-[#080c16] rounded-xl border border-slate-800 overflow-hidden shadow-2xl text-xs font-sans select-none">
      {/* Top Header with Multi-Currency & Edge Worker Info */}
      <div className="bg-[#0e1424] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-md bg-cyan-500/20 text-cyan-400">
            <Lock className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-slate-200 font-semibold text-xs flex items-center gap-1.5">
              <span>Quantum Global Checkout Engine</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.2 rounded border border-cyan-800 font-mono">
                Cloudflare Edge KV
              </span>
            </div>
          </div>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center space-x-1.5 bg-slate-900 border border-slate-800 p-0.5 rounded-lg">
          {Object.keys(currencies).map((curr) => (
            <button
              key={curr}
              onClick={() => setCurrency(curr)}
              className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                currency === curr
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {curr}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-3.5">
        {/* Left: Interactive Checkout Form */}
        <div className="md:col-span-6 space-y-2.5">
          <div className="bg-[#0c121e] border border-slate-800 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-300 font-semibold text-[11px] flex items-center gap-1">
                <CreditCard className="w-3.5 h-3.5 text-cyan-400" /> Card Information
              </span>
              <span className="text-[10px] text-slate-500 font-mono">PCI DSS Level 1</span>
            </div>

            {/* Card input field */}
            <div className="bg-[#070a12] border border-slate-700/80 rounded px-2.5 py-2 flex items-center justify-between text-[11px] font-mono text-slate-300">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-3.5 bg-indigo-600/80 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">
                  VISA
                </div>
                <span>{cardNumber}</span>
              </div>
              <span className="text-slate-500">12/28</span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-[#070a12] border border-slate-700/80 rounded px-2.5 py-1.5 text-[11px] font-mono text-slate-300 flex justify-between">
                <span className="text-slate-500">CVC:</span>
                <span>•••</span>
              </div>
              <div className="bg-[#070a12] border border-slate-700/80 rounded px-2.5 py-1.5 text-[11px] font-mono text-slate-300 flex justify-between">
                <span className="text-slate-500">Postal:</span>
                <span>EC1A 1BB</span>
              </div>
            </div>

            {/* Total Due with Real-time FX */}
            <div className="mt-3 pt-2 border-t border-slate-800 flex justify-between items-baseline">
              <span className="text-slate-400 text-[11px]">Authorized Total</span>
              <div className="text-right">
                <span className="text-base font-bold font-mono text-slate-100">
                  {currencies[currency].symbol}{currencies[currency].total}
                </span>
                <div className="text-[9px] text-slate-500 font-mono">
                  FX Locked (Rate: {currencies[currency].rate})
                </div>
              </div>
            </div>
          </div>

          <button className="w-full py-2 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all text-xs">
            <Lock className="w-3.5 h-3.5" /> Authorize & Settle Immediately
          </button>
        </div>

        {/* Right: Real-time Stripe Radar & Edge Telemetry */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-2.5">
          <div className="bg-[#0b111d] border border-slate-800 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-200 font-semibold text-[11px] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Edge Radar Pre-Scoring
              </span>
              <span className="text-[9px] bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.2 rounded font-mono">
                99.98% Clean
              </span>
            </div>

            {/* Risk Gauge Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-slate-400">Risk Score:</span>
                <span className="text-emerald-400 font-bold">{riskScore} / 100 (Safe)</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden flex">
                <div style={{ width: `${riskScore}%` }} className="bg-emerald-400 h-full rounded-full transition-all" />
              </div>
              <div className="flex justify-between text-[8px] text-slate-500 font-mono pt-0.5">
                <span>0 (Frictionless)</span>
                <span>65 (3DS Challenge)</span>
                <span>100 (Blocked)</span>
              </div>
            </div>

            {/* Edge Worker Signal Checks */}
            <div className="mt-3 space-y-1 text-[10px] border-t border-slate-800/80 pt-2 font-mono">
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> IP / ASN Reputation
                </span>
                <span className="text-emerald-400">Residential (Clean)</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Behavioral Biometrics
                </span>
                <span className="text-emerald-400">Human Velocity OK</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 3D Secure 2.0 Fallback
                </span>
                <span className="text-cyan-400">Frictionless Exemption</span>
              </div>
            </div>
          </div>

          <div className="bg-[#070b13] border border-slate-800 rounded p-2 text-[10px] text-slate-400 flex items-center justify-between">
            <span className="font-mono flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" /> Cloudflare Edge: 68ms Latency
            </span>
            <span className="text-slate-300 font-mono">-65% False Declines</span>
          </div>
        </div>
      </div>
    </div>
  );
};
