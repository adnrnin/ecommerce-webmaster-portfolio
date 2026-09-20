"use client";

import React, { useState } from "react";
import { ContactFormData } from "@/types";
import { Send, Check, Copy, Mail, MessageSquare, ShieldCheck, Sparkles, AlertCircle, ArrowUpRight } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    companyOrWebsite: "",
    scope: ["Headless Migration"],
    budget: "$10k - $25k",
    projectDetails: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTelegram, setCopiedTelegram] = useState(false);

  const availableScopes = [
    "Headless Migration",
    "Custom Storefront",
    "Payment Gateway Integration",
    "Performance Audit",
    "Multi-Vendor Marketplace",
    "DTC Subscription Engine",
  ];

  const budgetTiers = [
    "$5k - $10k",
    "$10k - $25k",
    "$25k - $50k",
    "$50k+",
  ];

  const toggleScope = (scope: string) => {
    setFormData((prev) => {
      const exists = prev.scope.includes(scope);
      if (exists) {
        if (prev.scope.length === 1) return prev; // Keep at least one
        return { ...prev, scope: prev.scope.filter((s) => s !== scope) };
      } else {
        return { ...prev, scope: [...prev.scope, scope] };
      }
    });
  };

  const handleCopy = (type: "email" | "telegram", text: string) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedTelegram(true);
      setTimeout(() => setCopiedTelegram(false), 2000);
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!formData.email.trim()) {
      errs.email = "Please provide your business email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = "Please briefly describe your project goals or bottlenecks.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080b11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                INITIATE PROJECT DISCOVERY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let’s Engineer Your Next High-Impact Storefront
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                Whether you need a full headless replatforming, custom checkout integration, 
                or a ruthless performance overhaul, let’s talk numbers and architecture.
              </p>
            </div>

            {/* Quick Direct Copy Buttons */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Instant Direct Channels:
              </div>

              {/* Email Copy Box */}
              <div className="bg-[#0b101c] border border-slate-800 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">DIRECT INBOX</div>
                    <div className="text-xs font-mono font-bold text-slate-200">
                      niall@ecommerce-architect.dev
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("email", "niall@ecommerce-architect.dev")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    copiedEmail
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                  }`}
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* Telegram Copy Box */}
              <div className="bg-[#0b101c] border border-slate-800 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">TELEGRAM DIRECT</div>
                    <div className="text-xs font-mono font-bold text-slate-200">
                      @niall_ecommerce
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("telegram", "@niall_ecommerce")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    copiedTelegram
                      ? "bg-cyan-600 text-white"
                      : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                  }`}
                >
                  {copiedTelegram ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedTelegram ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* SLA / Commitments */}
            <div className="bg-[#090d16] border border-slate-800/80 rounded-xl p-4 space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300 font-semibold font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Senior Engineering Commitments:
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Response within 12 business hours guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Direct senior architectural review, no sales intermediaries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Strict Non-Disclosure Agreement (NDA) supported upfront</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Scope & Budget Selector + Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-emerald-400 font-semibold">{formData.fullName}</span>. 
                    I have logged your scope:{" "}
                    <span className="text-white font-mono">{formData.scope.join(", ")}</span>{" "}
                    under the <span className="text-emerald-400 font-mono">{formData.budget}</span> tier. 
                    I will reply to <span className="text-white font-mono">{formData.email}</span> within 12 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        companyOrWebsite: "",
                        scope: ["Headless Migration"],
                        budget: "$10k - $25k",
                        projectDetails: "",
                      });
                    }}
                    className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Scope Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      1. Select Project Scope (Multi-Select)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableScopes.map((scopeItem) => {
                        const isSelected = formData.scope.includes(scopeItem);
                        return (
                          <button
                            type="button"
                            key={scopeItem}
                            onClick={() => toggleScope(scopeItem)}
                            className={`p-2.5 rounded-lg text-left text-xs font-medium border transition-all ${
                              isSelected
                                ? "bg-emerald-500/15 border-emerald-500 text-emerald-300"
                                : "bg-[#0b101c] border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="line-clamp-1">{scopeItem}</span>
                              {isSelected && <Check className="w-3 h-3 text-emerald-400 shrink-0 ml-1" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      2. Estimated Project Investment
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetTiers.map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setFormData({ ...formData, budget: tier })}
                          className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold border text-center transition-all ${
                            formData.budget === tier
                              ? "bg-emerald-500/15 border-emerald-500 text-emerald-300"
                              : "bg-[#0b101c] border-slate-800 text-slate-400 hover:border-slate-700"
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full bg-[#0b101c] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. marcus@brand.com"
                        className="w-full bg-[#0b101c] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Storefront URL or Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyOrWebsite}
                      onChange={(e) => setFormData({ ...formData, companyOrWebsite: e.target.value })}
                      placeholder="e.g. brandstore.com or Stealth DTC"
                      className="w-full bg-[#0b101c] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Objective & Timeline *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Share details regarding your current e-commerce platform, monthly order volume, target delivery date, or primary conversion pain points..."
                      className="w-full bg-[#0b101c] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                    {errors.projectDetails && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.projectDetails}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-glow-emerald hover:shadow-glow-emerald-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Project Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
