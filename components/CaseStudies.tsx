"use client";

import React, { useState } from "react";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudy } from "@/types";
import { CaseStudyModal } from "./CaseStudyModal";
import { AuraStorefrontMockup } from "./mockups/AuraStorefrontMockup";
import { ApexMarketplaceMockup } from "./mockups/ApexMarketplaceMockup";
import { NovaSubscriptionMockup } from "./mockups/NovaSubscriptionMockup";
import { QuantumPayMockup } from "./mockups/QuantumPayMockup";
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

export const CaseStudies: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const renderMockup = (mockupType: string) => {
    switch (mockupType) {
      case "aura":
        return <AuraStorefrontMockup />;
      case "apex":
        return <ApexMarketplaceMockup />;
      case "nova":
        return <NovaSubscriptionMockup />;
      case "quantum":
        return <QuantumPayMockup />;
      default:
        return null;
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-[#080b11] relative">
      {/* Visual Accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            PROVEN HIGH-IMPACT DELIVERABLES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured E-Commerce Case Studies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            In-depth architectural breakdowns of custom headless storefronts, multi-vendor marketplaces, 
            subscription recurring engines, and fraud-resilient global checkouts.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="glass-panel rounded-2xl border border-slate-800/90 overflow-hidden shadow-xl"
            >
              <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Info Column */}
                <div className="lg:col-span-6 space-y-5">
                  {/* Category and Client */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300">
                      {study.category}
                    </span>
                    <span className="text-slate-500 text-xs">•</span>
                    <span className="text-slate-400 text-xs font-medium">{study.client}</span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {study.title}
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      {study.tagline}
                    </p>
                  </div>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 border-y border-slate-800/80">
                    {study.metrics.slice(0, 3).map((metric, mIdx) => (
                      <div key={mIdx} className="bg-[#0b101c] p-2.5 rounded-lg border border-slate-800/70">
                        <div className="text-xs text-slate-400">{metric.label}</div>
                        <div className="text-lg font-extrabold text-emerald-400 font-mono mt-0.5">
                          {metric.value}
                        </div>
                        {metric.subtext && (
                          <div className="text-[10px] text-slate-500">{metric.subtext}</div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Solution Highlights */}
                  <div className="space-y-2 text-xs text-slate-300">
                    {study.architectureHighlights.slice(0, 2).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {study.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedCaseStudy(study)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-glow-emerald hover:shadow-glow-emerald-lg transition-all"
                    >
                      <span>View Deep Dive</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {study.githubUrl && (
                      <a
                        href={study.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub Repo</span>
                      </a>
                    )}

                    {study.liveUrl && (
                      <Link
                        href={study.liveUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Live Demo</span>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Mockup Column (Procedural CSS/SVG Mockups) */}
                <div className="lg:col-span-6 w-full flex justify-center">
                  <div className="w-full max-w-xl transition-transform duration-300 hover:scale-[1.01]">
                    {renderMockup(study.mockupType)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
