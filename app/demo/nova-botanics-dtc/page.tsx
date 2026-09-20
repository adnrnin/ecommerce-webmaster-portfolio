"use client";

import React, { useState } from "react";
import { DemoHeader } from "@/components/DemoHeader";
import {
  Repeat,
  Calendar,
  ShieldCheck,
  Check,
  Sparkles,
  RefreshCw,
  ArrowRight,
  Clock,
  Package,
  Plus,
  Trash2,
  Bell,
  CheckCircle2,
  Zap,
} from "lucide-react";

export default function NovaBotanicsDemo() {
  const [cadence, setCadence] = useState<"30" | "60" | "90">("30");
  const [flavor, setFlavor] = useState("Forest Mint Focus");
  const [isSkipped, setIsSkipped] = useState(false);
  const [addedUpsells, setAddedUpsells] = useState<string[]>([]);
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  const flavorProfiles: Record<string, { desc: string; ingredients: string; color: string }> = {
    "Forest Mint Focus": {
      desc: "Crisp organic peppermint infused with Lion's Mane & Cordyceps for sustained cognitive clarity.",
      ingredients: "Organic Peppermint, Lion's Mane 1000mg, Cordyceps 500mg, L-Theanine",
      color: "from-emerald-900/30 to-slate-900",
    },
    "Wild Berry Immuno-Boost": {
      desc: "Tart elderberry and acai packed with Reishi & Chaga to support immune vitality and cellular recovery.",
      ingredients: "Elderberry Extract, Reishi 800mg, Chaga 600mg, Vitamin C (Acerola)",
      color: "from-rose-900/30 to-slate-900",
    },
    "Golden Citrus Calm": {
      desc: "Soothing yuzu and turmeric coupled with Ashwagandha KSM-66 to neutralize cortisol spikes.",
      ingredients: "Yuzu Extract, Ashwagandha 600mg, Turmeric Curcumin, Black Pepper",
      color: "from-amber-900/30 to-slate-900",
    },
  };

  const cadencePricing = {
    "30": { price: 54.4, retail: 68.0, label: "Every 30 Days", badge: "Most Popular • 20% Off" },
    "60": { price: 102.0, retail: 136.0, label: "Every 60 Days", badge: "25% Bulk Discount" },
    "90": { price: 148.0, retail: 204.0, label: "Every 90 Days", badge: "Max Savings • 27% Off" },
  };

  const upsellOptions = [
    { id: "travel-pack", name: "Pocket Travel Sachet (7-Pack)", price: 14.0, desc: "Single-serve travel packs" },
    { id: "dropper", name: "Concentrated Adaptogen Dropper", price: 19.0, desc: "High-potency micro-boost" },
  ];

  const toggleUpsell = (id: string) => {
    if (addedUpsells.includes(id)) {
      setAddedUpsells(addedUpsells.filter((u) => u !== id));
      triggerNotice("Removed item from next delivery.");
    } else {
      setAddedUpsells([...addedUpsells, id]);
      triggerNotice("✓ Added 1-click item to upcoming shipment!");
    }
  };

  const triggerNotice = (msg: string) => {
    setNotificationMsg(msg);
    setTimeout(() => setNotificationMsg(null), 3000);
  };

  const currentBasePrice = cadencePricing[cadence].price;
  const currentUpsellsTotal = addedUpsells.reduce((acc, id) => {
    const item = upsellOptions.find((u) => u.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const totalUpcomingCharge = currentBasePrice + currentUpsellsTotal;

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Shared Demo Top Header */}
      <DemoHeader
        title="Nova Botanics DTC"
        category="High-Volume DTC Subscription Engine (Stripe Billing + Webhooks)"
        metricBadge="+28% Retention | 1-Click Self-Service"
      />

      {/* Subscriber Top Status Strip */}
      <div className="bg-[#0c121e] border-b border-slate-800 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
            <Repeat className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <span>Marcus Vance</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono">
                VIP SUBSCRIBER #SUB-8921
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Next billing managed via Stripe Billing Customer Portal</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-xs font-mono">
          <div className="text-right">
            <div className="text-slate-400 text-[10px]">Lifetime VIP Savings</div>
            <div className="text-emerald-400 font-bold">$348.80</div>
          </div>
          <div className="h-6 w-[1px] bg-slate-800" />
          <div className="text-right">
            <div className="text-slate-400 text-[10px]">Subscriber Cohort</div>
            <div className="text-slate-200 font-bold">14 Months Active</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {notificationMsg && (
          <div className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-4 py-2.5 rounded-xl text-xs font-mono flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{notificationMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Active Subscription & Delivery Schedule */}
          <div className="lg:col-span-7 space-y-6">
            {/* Active Subscription Card */}
            <div className={`bg-gradient-to-br ${flavorProfiles[flavor].color} border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden shadow-xl`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold bg-slate-900/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  ACTIVE RECURRING PROTOCOL
                </span>
                <span className="text-xs font-mono text-emerald-300 font-semibold">
                  {cadencePricing[cadence].badge}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-1">
                Daily Focus Adaptogen Complex
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xl mb-4">
                {flavorProfiles[flavor].desc}
              </p>

              <div className="bg-[#090d16]/90 border border-slate-800 rounded-xl p-3 text-xs font-mono text-slate-400 mb-4">
                <strong className="text-slate-200">Active Formula Actives:</strong> {flavorProfiles[flavor].ingredients}
              </div>

              {/* Delivery Schedule Banner */}
              <div className="bg-[#080c14] border border-slate-800/90 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Next Scheduled Shipment:</div>
                    <div className="text-sm font-bold text-white">
                      {isSkipped ? (
                        <span className="text-amber-400">Paused (Resumes Nov 14, 2026)</span>
                      ) : (
                        <span>October 14, 2026</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsSkipped(!isSkipped);
                      triggerNotice(isSkipped ? "Resumed regular shipment schedule." : "Skipped October shipment with zero penalty.");
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      isSkipped
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                        : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
                    }`}
                  >
                    {isSkipped ? "Resume Shipment" : "Skip Shipment"}
                  </button>

                  <button
                    onClick={() => triggerNotice("✓ Expedited order: Processing dispatch within 2 hours!")}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-glow-emerald"
                  >
                    Ship Today
                  </button>
                </div>
              </div>
            </div>

            {/* Flavor Swapper Module */}
            <div className="bg-[#090d16] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                  Self-Serve Formula Swapping (1-Click)
                </h3>
                <span className="text-xs text-emerald-400 font-mono">Zero Fee</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.keys(flavorProfiles).map((fName) => (
                  <button
                    key={fName}
                    onClick={() => {
                      setFlavor(fName);
                      triggerNotice(`✓ Swapped formula to ${fName}`);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      flavor === fName
                        ? "bg-emerald-500/15 border-emerald-500 text-emerald-300 shadow-sm"
                        : "bg-[#0d1320] border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-1 flex items-center justify-between">
                      <span>{fName}</span>
                      {flavor === fName && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                    <p className="text-[10px] text-slate-400 line-clamp-2">
                      {flavorProfiles[fName].desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Cadence Selection Box */}
            <div className="bg-[#090d16] border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                Delivery Cadence Switcher
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {(["30", "60", "90"] as const).map((days) => (
                  <button
                    key={days}
                    onClick={() => {
                      setCadence(days);
                      triggerNotice(`✓ Updated cadence to ${cadencePricing[days].label}`);
                    }}
                    className={`p-3.5 rounded-xl border text-center transition-all ${
                      cadence === days
                        ? "bg-emerald-500/15 border-emerald-500 text-emerald-300 shadow-sm"
                        : "bg-[#0d1320] border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{cadencePricing[days].label}</div>
                    <div className="text-sm font-extrabold font-mono text-emerald-400 mt-1">
                      ${cadencePricing[days].price.toFixed(2)}
                    </div>
                    <div className="text-[10px] text-slate-500 line-through">
                      ${cadencePricing[days].retail.toFixed(2)}
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 block mt-1">
                      {cadencePricing[days].badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 1-Click Upsells & Subscription Invoice Summary */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1-Click Frictionless Upsell Add-ons */}
            <div className="bg-[#090d16] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                  Add 1-Click Subscriber Add-Ons
                </h3>
                <span className="text-[10px] font-mono text-emerald-400">Zero Added Shipping</span>
              </div>

              <div className="space-y-3">
                {upsellOptions.map((opt) => {
                  const isAdded = addedUpsells.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      className="bg-[#0e1422] border border-slate-800/80 rounded-xl p-3.5 flex items-center justify-between gap-3"
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{opt.name}</div>
                        <div className="text-[11px] text-slate-400">{opt.desc}</div>
                        <div className="text-xs font-mono font-bold text-emerald-400 mt-0.5">
                          +${opt.price.toFixed(2)} / delivery
                        </div>
                      </div>

                      <button
                        onClick={() => toggleUpsell(opt.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                          isAdded
                            ? "bg-emerald-600 text-white shadow-sm"
                            : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Added
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" /> Add
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Upcoming Billing Breakdown Card */}
            <div className="bg-[#090d16] border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                Upcoming Recurring Charge Summary
              </h3>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-300">
                  <span>Daily Adaptogen ({flavor})</span>
                  <span>${currentBasePrice.toFixed(2)}</span>
                </div>

                {addedUpsells.map((uId) => {
                  const item = upsellOptions.find((o) => o.id === uId);
                  if (!item) return null;
                  return (
                    <div key={uId} className="flex justify-between text-emerald-400">
                      <span>+ {item.name}</span>
                      <span>+${item.price.toFixed(2)}</span>
                    </div>
                  );
                })}

                <div className="flex justify-between text-slate-400">
                  <span>Expedited Courier Freight</span>
                  <span className="text-emerald-400 font-bold">FREE ($0.00)</span>
                </div>

                <div className="pt-3 border-t border-slate-800 flex justify-between text-base font-bold text-white">
                  <span>Total Scheduled Charge:</span>
                  <span className="text-emerald-400 font-mono">${totalUpcomingCharge.toFixed(2)}</span>
                </div>
              </div>

              {/* Stripe Dunning Status Badge */}
              <div className="bg-[#070b13] border border-slate-800 rounded-xl p-3 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Stripe Smart Dunning: Active
                </div>
                <p className="text-[10px] text-slate-500">
                  Automated smart retries enabled with fallback payment method pre-authorized.
                </p>
              </div>

              <button
                onClick={() => triggerNotice("Webhook dispatched: Synchronized with Stripe Billing API.")}
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-glow-emerald flex items-center justify-center gap-2 transition-all"
              >
                <Zap className="w-4 h-4" />
                <span>Synchronize Subscription Updates</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
