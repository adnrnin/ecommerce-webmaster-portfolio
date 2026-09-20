"use client";

import React from "react";
import { ShoppingBag, Github, Twitter, Linkedin, ArrowUp, ShieldCheck, Terminal } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05080e] border-t border-slate-900 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand Info */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-white font-bold text-sm tracking-tight">NIALL V.</div>
              <p className="text-[11px] text-slate-400">
                Principal Frontend & Senior E-Commerce Architect
              </p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#case-studies" className="hover:text-emerald-400 transition-colors">
              Case Studies
            </a>
            <a href="#stack" className="hover:text-emerald-400 transition-colors">
              Architecture & Stack
            </a>
            <a href="#performance" className="hover:text-emerald-400 transition-colors">
              Performance Bento
            </a>
            <a href="#metrics" className="hover:text-emerald-400 transition-colors">
              Verified Metrics
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              Inquiry Form
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1.5 transition-colors"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar: Telemetry & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center space-x-2 font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Operational SLA: 99.99% • Edge Node: Global Fast-Path</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <div className="text-slate-400 font-mono">
            © {new Date().getFullYear()} Niall V. All rights reserved. Zero-config Vercel build.
          </div>
        </div>
      </div>
    </footer>
  );
};
