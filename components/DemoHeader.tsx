"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Sparkles, ShieldCheck, Layers, Terminal } from "lucide-react";

interface DemoHeaderProps {
  title: string;
  category: string;
  metricBadge: string;
  githubUrl?: string;
  architectureDetailsUrl?: string;
}

export const DemoHeader: React.FC<DemoHeaderProps> = ({
  title,
  category,
  metricBadge,
  githubUrl = "https://github.com/niallmuk",
  architectureDetailsUrl = "/#case-studies",
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#070a11]/90 backdrop-blur-md border-b border-slate-800/90 shadow-lg px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Back Link & Title */}
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Portfolio</span>
          </Link>

          <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold text-white tracking-tight">{title}</h1>
              <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                LIVE DEMO PROTOTYPE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">{category}</p>
          </div>
        </div>

        {/* Center/Right: Metrics & Actions */}
        <div className="flex items-center space-x-2.5">
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b101c] border border-slate-800 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>{metricBadge}</span>
          </div>

          <Link
            href={architectureDetailsUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 transition-colors font-medium"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Architecture Deep Dive</span>
            <span className="sm:hidden">Specs</span>
          </Link>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-glow-emerald transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub Code</span>
              <span className="sm:hidden">Code</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};
