"use client";

import React, { useState } from "react";
import { techCategories } from "@/data/techStack";
import { Layout, CreditCard, Server, ShoppingBag, BarChart3, CheckCircle2, Cpu, ArrowUpRight, Layers } from "lucide-react";

export const TechStack: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("frontend");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-4 h-4" />;
      case "CreditCard":
        return <CreditCard className="w-4 h-4" />;
      case "Server":
        return <Server className="w-4 h-4" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-4 h-4" />;
      case "BarChart3":
        return <BarChart3 className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const activeCategory = techCategories.find((cat) => cat.id === activeCategoryId) || techCategories[0];

  return (
    <section id="stack" className="py-20 bg-[#070a10] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            ENGINEERED COMMERCE ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            E-Commerce Architecture & Tech Stack Showcase
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Every layer of the e-commerce stack is chosen for sub-second execution, bulletproof payment reliability, and elastic scale.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {techCategories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-emerald-500/15 border-emerald-500 text-emerald-300 shadow-sm"
                    : "bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                <span className={isActive ? "text-emerald-400" : "text-slate-400"}>
                  {getCategoryIcon(cat.iconName)}
                </span>
                <span>{cat.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  isActive ? "bg-emerald-950 text-emerald-300" : "bg-slate-800 text-slate-400"
                }`}>
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description Banner */}
        <div className="bg-[#0b101c] border border-slate-800/90 rounded-xl p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-semibold">
              DOMAIN FOCUS: {activeCategory.title}
            </span>
            <p className="text-slate-300 text-sm mt-0.5">
              {activeCategory.description}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Zero-Downtime Pipeline</span>
          </div>
        </div>

        {/* Cards Grid for Selected Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-xl p-5 border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      {item.role}
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 whitespace-nowrap">
                    {item.badge}
                  </span>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {item.metricsOrHighlight && (
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 text-[11px] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Key Impact:
                  </span>
                  <span className="text-emerald-400 font-bold">
                    {item.metricsOrHighlight}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
