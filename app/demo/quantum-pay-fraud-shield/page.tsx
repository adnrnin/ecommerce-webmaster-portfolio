"use client";

import React, { useState, useMemo } from "react";
import { DemoHeader } from "@/components/DemoHeader";
import {
  Lock,
  ShieldCheck,
  ShieldAlert,
  CreditCard,
  Zap,
  Globe,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Terminal,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function QuantumPayDemo() {
  const [currency, setCurrency] = useState<"USD" | "EUR" | "GBP" | "JPY" | "CAD">("USD");
  const [cardNumber, setCardNumber] = useState("4242 •••• •••• 4242");
  const [cvc, setCvc] = useState("321");
  const [expiry, setExpiry] = useState("12/28");

  // Fraud risk simulation sliders
  const [ipRisk, setIpRisk] = useState(10); // 0-40
  const [velocityRisk, setVelocityRisk] = useState(5); // 0-30
  const [deviceEntropyRisk, setDeviceEntropyRisk] = useState(5); // 0-30
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState<"idle" | "frictionless" | "challenge_3ds" | "blocked">("idle");

  const currencies = {
    USD: { symbol: "$", rate: 1.0, baseAmount: 1250 },
    EUR: { symbol: "€", rate: 0.92, baseAmount: 1150 },
    GBP: { symbol: "£", rate: 0.78, baseAmount: 975 },
    JPY: { symbol: "¥", rate: 154.5, baseAmount: 193125 },
    CAD: { symbol: "C$", rate: 1.36, baseAmount: 1700 },
  };

  // Compute calculated risk score
  const computedRiskScore = useMemo(() => {
    return Math.min(100, Math.max(0, ipRisk + velocityRisk + deviceEntropyRisk));
  }, [ipRisk, velocityRisk, deviceEntropyRisk]);

  const riskStatus = useMemo(() => {
    if (computedRiskScore < 35) {
      return {
        level: "CLEAN / ULTRA-LOW RISK",
        color: "text-emerald-400",
        badge: "bg-emerald-950/80 border-emerald-500/40 text-emerald-300",
        action: "Frictionless Exemption (Zero 3DS Friction)",
      };
    } else if (computedRiskScore <= 65) {
      return {
        level: "MODERATE / STEP-UP REQUIRED",
        color: "text-amber-400",
        badge: "bg-amber-950/80 border-amber-500/40 text-amber-300",
        action: "Dynamic 3D Secure 2.0 Biometric Challenge",
      };
    } else {
      return {
        level: "CRITICAL / FRAUD DETECTED",
        color: "text-rose-400",
        badge: "bg-rose-950/80 border-rose-500/40 text-rose-300",
        action: "Intercepted & Blocked at Edge (0% Chargeback Risk)",
      };
    }
  }, [computedRiskScore]);

  const handleAuthorize = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (computedRiskScore < 35) {
        setPaymentResult("frictionless");
      } else if (computedRiskScore <= 65) {
        setPaymentResult("challenge_3ds");
      } else {
        setPaymentResult("blocked");
      }
    }, 1100);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Shared Demo Top Header */}
      <DemoHeader
        title="Quantum Pay & Fraud Shield"
        category="Custom Global Checkout & Edge Fraud Defense (Stripe Radar + Cloudflare Workers)"
        metricBadge="99.98% Clean Rate | < 95ms Edge Latency"
        githubUrl="https://github.com/niallmuk/quantum-pay-fraud-shield"
      />

      {/* Sub-Header: Global FX & Multi-Currency Engine */}
      <div className="bg-[#0b101c] border-b border-slate-800 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <span>Multi-Currency FX Settlement Engine</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono">
                42 Supported Currencies
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Dynamic pricing with automated foreign exchange margin locking</p>
          </div>
        </div>

        {/* Currency Switcher Buttons */}
        <div className="flex items-center space-x-1.5 bg-[#070a13] p-1 rounded-xl border border-slate-800">
          {(["USD", "EUR", "GBP", "JPY", "CAD"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                currency === c
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Main Simulator Grid */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Payment Sheet */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#090d16] border border-slate-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-sm font-bold text-white">Encrypted Edge Payment Sheet</h3>
                </div>
                <span className="text-[10px] font-mono text-slate-500">PCI DSS Level 1</span>
              </div>

              {/* Authorized Amount */}
              <div className="bg-[#0e1422] border border-slate-800 rounded-xl p-4 flex justify-between items-baseline">
                <div>
                  <div className="text-xs text-slate-400">Invoice #QP-8492</div>
                  <div className="text-2xl font-extrabold font-mono text-white mt-0.5">
                    {currencies[currency].symbol}
                    {currencies[currency].baseAmount.toLocaleString()}
                  </div>
                </div>
                <div className="text-right text-xs font-mono text-slate-400">
                  <span>FX Lock: </span>
                  <span className="text-cyan-400 font-bold">{currencies[currency].rate} rate</span>
                </div>
              </div>

              {/* Card Inputs */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Card Number (Luhn Verified)
                  </label>
                  <div className="bg-[#060911] border border-slate-700 rounded-lg px-3.5 py-2.5 flex items-center justify-between text-xs font-mono text-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="px-1.5 py-0.5 rounded bg-indigo-600 text-white font-bold text-[9px]">
                        VISA
                      </div>
                      <span>{cardNumber}</span>
                    </div>
                    <span className="text-emerald-400 text-[10px]">Valid</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Expiration</label>
                    <div className="bg-[#060911] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs font-mono text-slate-200">
                      {expiry}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">Security CVC</label>
                    <div className="bg-[#060911] border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs font-mono text-slate-200 flex justify-between">
                      <span>•••</span>
                      <span className="text-slate-500 text-[10px]">Encrypted</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit / Authorize Button */}
              <button
                onClick={handleAuthorize}
                disabled={isProcessing}
                className="w-full py-3.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-glow-cyan flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Evaluating 24 Edge Heuristics (&lt; 95ms)...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Authorize & Route Payment ({currencies[currency].symbol}{currencies[currency].baseAmount.toLocaleString()})</span>
                  </>
                )}
              </button>

              {/* Payment Outcome Result Simulation */}
              {paymentResult !== "idle" && (
                <div
                  className={`p-4 rounded-xl border text-xs font-mono animate-in fade-in ${
                    paymentResult === "frictionless"
                      ? "bg-emerald-950/70 border-emerald-500/40 text-emerald-300"
                      : paymentResult === "challenge_3ds"
                      ? "bg-amber-950/70 border-amber-500/40 text-amber-300"
                      : "bg-rose-950/70 border-rose-500/40 text-rose-300"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-1">
                    {paymentResult === "frictionless" && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    {paymentResult === "challenge_3ds" && <AlertTriangle className="w-4 h-4 text-amber-400" />}
                    {paymentResult === "blocked" && <ShieldAlert className="w-4 h-4 text-rose-400" />}
                    <span>
                      {paymentResult === "frictionless" && "Transaction Cleared (0ms Delay)"}
                      {paymentResult === "challenge_3ds" && "Step-Up 3DS 2.0 Biometrics Triggered"}
                      {paymentResult === "blocked" && "Transaction Intercepted & Denied"}
                    </span>
                  </div>
                  <p className="text-[11px] opacity-90">
                    {paymentResult === "frictionless" &&
                      "Risk score fell within safe threshold (<35). Frictionless exemption applied, saving customer checkout drop-off."}
                    {paymentResult === "challenge_3ds" &&
                      "Moderate anomaly detected (score 35-65). Dispatched biometric step-up push notification to cardholder's mobile banking app."}
                    {paymentResult === "blocked" &&
                      "High-risk flags exceeded critical threshold (>65). Discarded payment intent prior to gateway settlement, eliminating chargeback fees."}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Edge Fraud Risk Simulator Controls */}
          <div className="lg:col-span-6 space-y-6">
            {/* Risk Gauge Card */}
            <div className="bg-[#090d16] border border-slate-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white">Live Edge Radar Scoring Engine</h3>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${riskStatus.badge}`}>
                  {riskStatus.level}
                </span>
              </div>

              {/* Meter Gauge */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline font-mono text-xs">
                  <span className="text-slate-400">Composite Risk Score:</span>
                  <span className={`text-2xl font-extrabold ${riskStatus.color}`}>
                    {computedRiskScore} <span className="text-xs text-slate-500 font-normal">/ 100</span>
                  </span>
                </div>

                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${computedRiskScore}%` }}
                    className={`h-full transition-all duration-300 rounded-full ${
                      computedRiskScore < 35
                        ? "bg-emerald-400"
                        : computedRiskScore <= 65
                        ? "bg-amber-400"
                        : "bg-rose-500"
                    }`}
                  />
                </div>

                <div className="flex justify-between text-[10px] text-slate-500 font-mono pt-1">
                  <span>0 (Frictionless Fast-Track)</span>
                  <span>35 (3DS Threshold)</span>
                  <span>65 (Auto-Block)</span>
                </div>
              </div>

              {/* Action Decision Pill */}
              <div className="bg-[#0e1422] border border-slate-800 rounded-xl p-3 text-xs font-mono flex items-center justify-between">
                <span className="text-slate-400">Automated Routing Action:</span>
                <span className={`font-bold ${riskStatus.color}`}>{riskStatus.action}</span>
              </div>

              {/* Interactive Factor Sliders */}
              <div className="pt-2 space-y-4">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  Simulate Fraud Risk Signals (Adjust Sliders):
                </div>

                {/* Factor 1: IP Geolocation & Proxy */}
                <div className="space-y-1.5 bg-[#070b13] p-3 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">IP Reputation & Geolocation:</span>
                    <span className="text-cyan-400 font-bold">+{ipRisk} pts</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={ipRisk}
                    onChange={(e) => setIpRisk(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>Residential Fiber (Clean)</span>
                    <span>Datacenter / TOR Exit Node</span>
                  </div>
                </div>

                {/* Factor 2: Velocity Anomaly */}
                <div className="space-y-1.5 bg-[#070b13] p-3 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Checkout Velocity & Card Testing:</span>
                    <span className="text-cyan-400 font-bold">+{velocityRisk} pts</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={velocityRisk}
                    onChange={(e) => setVelocityRisk(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>Single Human Attempt</span>
                    <span>High-Frequency Script / Bot</span>
                  </div>
                </div>

                {/* Factor 3: Device Fingerprint Entropy */}
                <div className="space-y-1.5 bg-[#070b13] p-3 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Browser & Hardware Entropy:</span>
                    <span className="text-cyan-400 font-bold">+{deviceEntropyRisk} pts</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={deviceEntropyRisk}
                    onChange={(e) => setDeviceEntropyRisk(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>Known Mobile Device</span>
                    <span>Spoofed User-Agent Headless</span>
                  </div>
                </div>
              </div>

              {/* Edge Telemetry Log Box */}
              <div className="bg-[#05080f] border border-slate-800 rounded-xl p-3 text-[10px] font-mono text-slate-400 space-y-1">
                <div className="text-cyan-400 flex items-center gap-1.5 font-bold mb-1">
                  <Terminal className="w-3.5 h-3.5" />
                  Cloudflare Worker Telemetry (Frankfurt FRA Node):
                </div>
                <div>[00:00:012] TLS 1.3 handshake negotiated via Edge Worker</div>
                <div>[00:00:039] WebCrypto canvas hash computed (Consistency: 99.4%)</div>
                <div>[00:00:068] Stripe Radar rule evaluation matrix executed</div>
                <div className="text-emerald-400">[00:00:094] Edge latency: 94ms | Zero chargeback exposure</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
