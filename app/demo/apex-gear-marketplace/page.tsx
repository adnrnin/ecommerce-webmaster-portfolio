"use client";

import React, { useState } from "react";
import { DemoHeader } from "@/components/DemoHeader";
import {
  Building2,
  DollarSign,
  Database,
  RefreshCw,
  CheckCircle2,
  ShieldCheck,
  Layers,
  ArrowRight,
  TrendingUp,
  Package,
  Users,
  FileText,
  Lock,
  Zap,
} from "lucide-react";

export default function ApexMarketplaceDemo() {
  const [activeRole, setActiveRole] = useState<"buyer" | "vendor">("buyer");
  const [orderQuantity, setOrderQuantity] = useState(120);
  const [paymentTerm, setPaymentTerm] = useState<"net30" | "card">("net30");
  const [isSimulatingSync, setIsSimulatingSync] = useState(false);
  const [flashOrderCount, setFlashOrderCount] = useState(12480);
  const [simulatedOrders, setSimulatedOrders] = useState([
    {
      id: "ORD-9481",
      buyer: "Tactical Response Corp",
      vendor: "North Ridge Gear",
      units: 150,
      total: 21300,
      vendorNet: 18105,
      platformTake: 3195,
      status: "Settled (Instant)",
    },
    {
      id: "ORD-9480",
      buyer: "Sierra Defense Group",
      vendor: "Vanguard Tactical",
      units: 80,
      total: 11360,
      vendorNet: 9656,
      platformTake: 1704,
      status: "Settled (Instant)",
    },
    {
      id: "ORD-9479",
      buyer: "Apex Outfitters UK",
      vendor: "Sierra Logistics",
      units: 40,
      total: 7200,
      vendorNet: 6120,
      platformTake: 1080,
      status: "Settled (Instant)",
    },
  ]);

  // Pricing calculation based on wholesale tiers
  const getUnitPrice = (qty: number) => {
    if (qty >= 200) return 118;
    if (qty >= 50) return 142;
    return 180;
  };

  const unitPrice = getUnitPrice(orderQuantity);
  const retailUnitPrice = 180;
  const grossTotal = unitPrice * orderQuantity;
  const standardTotal = retailUnitPrice * orderQuantity;
  const totalSavings = standardTotal - grossTotal;

  // Vendor Payout Splits (85% vendor / 15% platform)
  const vendorNet = grossTotal * 0.85;
  const platformTake = grossTotal * 0.15;

  const handleSimulateFlashOrder = () => {
    setIsSimulatingSync(true);
    setTimeout(() => {
      setIsSimulatingSync(false);
      setFlashOrderCount((prev) => prev + 1);
      const newOrder = {
        id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
        buyer: "Federal Supply Partner",
        vendor: "North Ridge Gear",
        units: orderQuantity,
        total: grossTotal,
        vendorNet: vendorNet,
        platformTake: platformTake,
        status: "Settled (Instant)",
      };
      setSimulatedOrders([newOrder, ...simulatedOrders.slice(0, 3)]);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Shared Demo Header */}
      <DemoHeader
        title="Apex Gear Marketplace"
        category="Multi-Vendor B2B & B2C Marketplace (MedusaJS + Stripe Connect)"
        metricBadge="120K+ Monthly Orders | Automated Split-Payouts"
        githubUrl="https://github.com/niallmuk/apex-gear-marketplace"
      />

      {/* Role Switcher Toolbar */}
      <div className="bg-[#0b0f19] border-b border-slate-800 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Simulate Persona View:
          </span>
          <div className="flex bg-[#070b13] p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveRole("buyer")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeRole === "buyer"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B Wholesale Buyer</span>
            </button>

            <button
              onClick={() => setActiveRole("vendor")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeRole === "vendor"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <DollarSign className="w-3.5 h-3.5" />
              <span>Vendor Ledger & Stripe Connect</span>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="hidden sm:inline text-slate-400">Medusa Engine:</span>
          <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-semibold">
            v2.4.0 Distributed
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Redis Mutex Active
          </span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {activeRole === "buyer" ? (
          /* ================= BUYER VIEW ================= */
          <div className="space-y-8">
            {/* Buyer Welcome Banner */}
            <div className="bg-gradient-to-r from-indigo-950/40 via-slate-900 to-[#0c121e] border border-indigo-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                  AUTHORIZED COMMERCIAL PROCUREMENT
                </span>
                <h2 className="text-2xl font-bold text-white mt-0.5">
                  Tiered Wholesale Order Engine
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Volume price breaks calculate dynamically in real-time. Net-30 credit terms supported.
                </p>
              </div>

              <div className="bg-[#090d16] border border-slate-800 p-3 rounded-xl flex items-center gap-4 text-xs font-mono">
                <div>
                  <div className="text-slate-500">Procurement Account</div>
                  <div className="text-slate-200 font-bold">Vance Defense Corp</div>
                </div>
                <div className="border-l border-slate-800 pl-4">
                  <div className="text-slate-500">Approved Credit Line</div>
                  <div className="text-emerald-400 font-bold">$250,000.00</div>
                </div>
              </div>
            </div>

            {/* Product Card & Tier Calculator */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left: Product Overview */}
              <div className="lg:col-span-6 bg-[#090d16] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                      SKU: TAC-VEST-G3-PRO
                    </span>
                    <span className="text-emerald-400 text-xs font-mono flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 840 Units Ready to Dispatch
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    Modular Ballistic Loadout Vest (Gen 3)
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Mil-spec 1000D Cordura, quick-release side buckles, compatible with ESAPI plates. 
                    Supplied directly by verified vendor partner: <strong className="text-slate-200">North Ridge Tactical</strong>.
                  </p>

                  {/* Volume Tier Table */}
                  <div className="bg-[#0e1422] border border-slate-800 rounded-xl overflow-hidden mb-6">
                    <div className="px-3.5 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400 flex justify-between">
                      <span>Order Volume Bracket</span>
                      <span>Unit Price</span>
                    </div>
                    <div className="divide-y divide-slate-800/80 text-xs font-mono">
                      <div className={`px-3.5 py-2.5 flex justify-between items-center ${orderQuantity < 50 ? "bg-indigo-950/40 text-indigo-300 font-bold" : "text-slate-400"}`}>
                        <span>Retail Bracket (1 - 49 units)</span>
                        <span>$180.00 / unit</span>
                      </div>
                      <div className={`px-3.5 py-2.5 flex justify-between items-center ${orderQuantity >= 50 && orderQuantity < 200 ? "bg-indigo-950/50 text-emerald-400 font-bold" : "text-slate-400"}`}>
                        <span>Tier 1 Wholesale (50 - 199 units)</span>
                        <span>$142.00 / unit (-21%)</span>
                      </div>
                      <div className={`px-3.5 py-2.5 flex justify-between items-center ${orderQuantity >= 200 ? "bg-indigo-950/60 text-emerald-300 font-bold" : "text-slate-400"}`}>
                        <span>Tier 2 Enterprise (200+ units)</span>
                        <span>$118.00 / unit (-34%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 font-mono flex items-center justify-between pt-2 border-t border-slate-800">
                  <span>Vendor ID: VND-8821 (99.8% on-time fulfillment)</span>
                  <span className="text-indigo-400">Postgres ACID Commit</span>
                </div>
              </div>

              {/* Right: Interactive Order Calculator & Terms */}
              <div className="lg:col-span-6 bg-[#090d16] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-4">
                    Interactive Volume Order Calculator
                  </h4>

                  {/* Quantity Slider & Input */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-medium">Requested Units:</span>
                      <span className="text-lg font-bold font-mono text-white bg-slate-900 px-3 py-1 rounded border border-slate-800">
                        {orderQuantity} units
                      </span>
                    </div>

                    <input
                      type="range"
                      min="10"
                      max="400"
                      step="10"
                      value={orderQuantity}
                      onChange={(e) => setOrderQuantity(Number(e.target.value))}
                      className="w-full accent-indigo-500 cursor-pointer"
                    />

                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>10 units (Retail)</span>
                      <span>50 units (Tier 1)</span>
                      <span>200+ units (Tier 2 Enterprise)</span>
                    </div>
                  </div>

                  {/* Pricing Breakdown Card */}
                  <div className="bg-[#0e1422] border border-slate-800 rounded-xl p-4 space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-slate-400">
                      <span>Active Unit Price:</span>
                      <span className="text-white font-bold">${unitPrice}.00</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Standard MSRP Value:</span>
                      <span className="text-slate-500 line-through">${standardTotal.toLocaleString()}.00</span>
                    </div>
                    {totalSavings > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Wholesale Volume Savings:</span>
                        <span>-${totalSavings.toLocaleString()}.00</span>
                      </div>
                    )}
                    <div className="pt-2 border-t border-slate-800 flex justify-between text-base font-bold text-white">
                      <span>Order Subtotal:</span>
                      <span className="text-indigo-400 font-mono">${grossTotal.toLocaleString()}.00</span>
                    </div>
                  </div>

                  {/* Payment Terms Selector */}
                  <div className="mt-4 space-y-2">
                    <label className="text-xs text-slate-400 font-medium block">Commercial Payment Option:</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setPaymentTerm("net30")}
                        className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all ${
                          paymentTerm === "net30"
                            ? "bg-indigo-600/20 border-indigo-500 text-indigo-300 font-semibold"
                            : "bg-slate-900 border-slate-800 text-slate-400"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Net-30 Invoicing</span>
                        </div>
                        <span className="text-[10px] text-slate-500 mt-1 block">Commercial credit line</span>
                      </button>

                      <button
                        onClick={() => setPaymentTerm("card")}
                        className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all ${
                          paymentTerm === "card"
                            ? "bg-indigo-600/20 border-indigo-500 text-indigo-300 font-semibold"
                            : "bg-slate-900 border-slate-800 text-slate-400"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Instant Card / Wire</span>
                        </div>
                        <span className="text-[10px] text-slate-500 mt-1 block">Immediate clearance</span>
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSimulateFlashOrder}
                  className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-glow-indigo flex items-center justify-center gap-2 transition-all"
                >
                  <Package className="w-4 h-4" />
                  <span>Transmit Purchase Order (${grossTotal.toLocaleString()}.00)</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ================= VENDOR DASHBOARD ================= */
          <div className="space-y-8">
            {/* Vendor Live Header */}
            <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-[#0c121e] border border-emerald-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  STRIPE CONNECT CUSTOM ACCOUNT
                </span>
                <h2 className="text-2xl font-bold text-white mt-0.5">
                  North Ridge Tactical • Payout Ledger
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Automated split-settlements dispatched concurrently upon order confirmation.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleSimulateFlashOrder}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 shadow-glow-emerald transition-all"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSimulatingSync ? "animate-spin" : ""}`} />
                  <span>Simulate Concurrent Order</span>
                </button>
              </div>
            </div>

            {/* Split Settlement Visualizer Box */}
            <div className="bg-[#090d16] border border-slate-800 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-4 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                Live Stripe Connect Settlement Split (Current Order: ${grossTotal.toLocaleString()}.00)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#0e1422] border border-slate-800 p-4 rounded-xl">
                  <div className="text-xs text-slate-400">Total Customer Paid</div>
                  <div className="text-2xl font-extrabold font-mono text-white mt-1">
                    ${grossTotal.toLocaleString()}.00
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Gross commercial charge</p>
                </div>

                <div className="bg-[#0e1422] border border-emerald-500/30 p-4 rounded-xl">
                  <div className="text-xs text-emerald-400 font-semibold">Vendor Net Payout (85%)</div>
                  <div className="text-2xl font-extrabold font-mono text-emerald-400 mt-1">
                    ${vendorNet.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </div>
                  <p className="text-[10px] text-emerald-300/70 mt-1">Direct to North Ridge bank account</p>
                </div>

                <div className="bg-[#0e1422] border border-indigo-500/30 p-4 rounded-xl">
                  <div className="text-xs text-indigo-400 font-semibold">Apex Platform Commission (15%)</div>
                  <div className="text-2xl font-extrabold font-mono text-indigo-300 mt-1">
                    ${platformTake.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </div>
                  <p className="text-[10px] text-indigo-400/70 mt-1">Retained marketplace margin</p>
                </div>
              </div>

              {/* Progress split bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>Vendor Payout Share: 85%</span>
                  <span>Platform Fee: 15%</span>
                </div>
                <div className="w-full bg-indigo-600 h-2.5 rounded-full overflow-hidden flex">
                  <div className="bg-emerald-500 h-full w-[85%]" />
                </div>
              </div>
            </div>

            {/* Live Orders Ledger Table */}
            <div className="bg-[#090d16] border border-slate-800 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-[#0e1422] border-b border-slate-800 flex justify-between items-center">
                <h4 className="text-xs font-mono uppercase font-bold text-slate-200 flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  Real-Time Multi-Vendor Order Stream
                </h4>
                <span className="text-xs font-mono text-slate-400">
                  Total Month Volume: <strong className="text-white">{flashOrderCount.toLocaleString()} orders</strong>
                </span>
              </div>

              <div className="divide-y divide-slate-800/80">
                {simulatedOrders.map((order) => (
                  <div key={order.id} className="p-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 hover:bg-slate-900/40 text-xs font-mono">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{order.id}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-300">{order.buyer}</span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Assigned Partner: <strong className="text-slate-400">{order.vendor}</strong> ({order.units} units)
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-slate-400 text-[10px]">Gross Total</div>
                        <div className="text-white font-bold">${order.total.toLocaleString()}.00</div>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-400 text-[10px]">Vendor Share</div>
                        <div className="text-emerald-400 font-bold">${order.vendorNet.toLocaleString()}.00</div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] font-semibold">
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
