"use client";

import React, { useState } from "react";
import { Building2, ArrowUpRight, DollarSign, Database, RefreshCw, CheckCircle2, ShieldAlert } from "lucide-react";

export const ApexMarketplaceMockup: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState("North Ridge Gear");
  const [isSyncing, setIsSyncing] = useState(false);

  const triggerSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 1200);
  };

  return (
    <div className="w-full bg-[#090d16] rounded-xl border border-slate-800 overflow-hidden shadow-2xl text-xs font-sans select-none">
      {/* Marketplace Header */}
      <div className="bg-[#0e1422] px-4 py-2.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Building2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-slate-200 font-semibold text-xs flex items-center gap-1.5">
              <span>Apex Vendor Orchestrator</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 bg-indigo-950 text-indigo-300 rounded border border-indigo-800">
                MedusaJS v2
              </span>
            </div>
            <p className="text-[10px] text-slate-400">Multi-Vendor Settlement & Inventory Ledger</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={triggerSync}
            className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 flex items-center gap-1.5 text-[11px] transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${isSyncing ? "animate-spin text-emerald-400" : "text-slate-400"}`} />
            {isSyncing ? "Locking Redis..." : "Live Inventory Sync"}
          </button>
          <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded font-mono font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            120k+ Orders/Mo
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3.5">
        {/* Automated Split-Payout Card (Stripe Connect) */}
        <div className="bg-[#0d1320] border border-slate-800/90 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-emerald-500/20 text-emerald-400">
                <DollarSign className="w-3.5 h-3.5" />
              </div>
              <span className="text-slate-200 font-semibold text-xs">
                Real-Time Stripe Connect Split Ledger
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Auto-Settled
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800/80 text-center">
            <div>
              <div className="text-[10px] text-slate-400">Customer Paid</div>
              <div className="text-sm font-bold font-mono text-slate-100">$4,250.00</div>
              <div className="text-[9px] text-slate-500">Gross B2B Order #8921</div>
            </div>
            <div>
              <div className="text-[10px] text-indigo-400">Vendor Net (85%)</div>
              <div className="text-sm font-bold font-mono text-indigo-300">$3,612.50</div>
              <div className="text-[9px] text-indigo-400/70">Dispatched to North Ridge</div>
            </div>
            <div>
              <div className="text-[10px] text-emerald-400">Platform Take (15%)</div>
              <div className="text-sm font-bold font-mono text-emerald-300">$637.50</div>
              <div className="text-[9px] text-emerald-400/70">Retained platform fee</div>
            </div>
          </div>

          <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between">
            <span className="font-mono text-slate-500">Stripe Transfer: tr_1Nq9x2KpL092</span>
            <span className="text-slate-300 flex items-center gap-1 font-mono">
              <Database className="w-2.5 h-2.5 text-indigo-400" /> Postgres ACID Commit: 14ms
            </span>
          </div>
        </div>

        {/* Live Multi-Vendor Inventory Pipeline Table */}
        <div className="bg-[#0a0e17] border border-slate-800 rounded-lg overflow-hidden">
          <div className="px-3 py-1.5 bg-[#0e1422] border-b border-slate-800 flex justify-between items-center text-[11px]">
            <span className="font-semibold text-slate-300">Distributed Inventory Mutex (Redis)</span>
            <span className="text-slate-500 font-mono text-[10px]">Active Vendors: 48</span>
          </div>

          <div className="divide-y divide-slate-800/60">
            {[
              { sku: "TAC-VEST-GEN3", stock: 840, vendor: "North Ridge", b2bTier: "Tier 3 ($142.00)", status: "Locked / Synced" },
              { sku: "OPTIC-RED-DOT-X", stock: 125, vendor: "Vanguard Tactical", b2bTier: "Tier 2 ($210.00)", status: "Locked / Synced" },
              { sku: "BALLISTIC-PACK-45L", stock: 512, vendor: "Sierra Logistics", b2bTier: "Tier 1 ($95.00)", status: "Locked / Synced" },
            ].map((row, idx) => (
              <div key={idx} className="px-3 py-2 flex items-center justify-between text-[11px] hover:bg-slate-900/50">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-slate-200 font-medium">{row.sku}</span>
                  <span className="text-slate-500 text-[10px]">({row.vendor})</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 font-mono">
                    {row.b2bTier}
                  </span>
                  <span className="text-emerald-400 font-mono font-semibold">
                    {row.stock} in stock
                  </span>
                  <span className="text-[9px] text-emerald-400/80 bg-emerald-950/40 border border-emerald-900 px-1.5 py-0.2 rounded font-mono">
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic B2B Wholesale Tier Selector */}
        <div className="flex items-center justify-between pt-0.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400">Wholesale Volume Discounting:</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800 font-mono">
              Tier 3: 500+ Units (-35%)
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Zero Inventory Collisions
          </span>
        </div>
      </div>
    </div>
  );
};
