"use client";

import React, { useEffect } from "react";
import { CaseStudy } from "@/types";
import { X, ExternalLink, Github, CheckCircle2, Cpu, ShieldCheck, ArrowRight, Layers, Sparkles } from "lucide-react";

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (caseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#090d16] border border-slate-700/80 rounded-2xl shadow-2xl shadow-emerald-950/20 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="bg-[#0e1424] px-6 py-4 border-b border-slate-800 flex items-center justify-between sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                CASE STUDY DEEP DIVE
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400">{caseStudy.client}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
              {caseStudy.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Key Metric Banner */}
          <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/30 border border-emerald-500/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 uppercase font-mono">PRIMARY OUTCOME</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                {caseStudy.heroMetric.value}
              </div>
              <div className="text-xs text-slate-200 font-semibold">{caseStudy.heroMetric.label}</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {caseStudy.metrics.map((m, i) => (
                <div key={i} className="bg-[#0b101c] p-2 rounded border border-slate-800">
                  <div className="text-slate-400 text-[10px]">{m.label}</div>
                  <div className="text-slate-100 font-mono font-bold">{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0d1322] border border-slate-800/90 rounded-xl p-4">
              <h4 className="text-xs font-mono uppercase text-rose-400 font-bold mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                The Architectural Bottleneck
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="bg-[#0d1322] border border-slate-800/90 rounded-xl p-4">
              <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                The Engineered Solution
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architectural Blueprint Highlights */}
          <div className="bg-[#0b101c] border border-slate-800 rounded-xl p-4">
            <h4 className="text-xs font-mono uppercase text-indigo-400 font-bold mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-indigo-400" />
              Technical Architecture Highlights
            </h4>
            <div className="space-y-2">
              {caseStudy.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-[#0b101c] border border-slate-800 rounded-xl p-4">
            <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Business Impact & Verified Results
            </h4>
            <div className="space-y-2">
              {caseStudy.keyAchievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block mb-2">
              Tools & Technologies Deployed
            </span>
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.techStack.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#0e1424] px-6 py-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-20">
          <div className="flex items-center space-x-3">
            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Inspect Repo</span>
              </a>
            )}
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Environment</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-glow-emerald transition-colors"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};
