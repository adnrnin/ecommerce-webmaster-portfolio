"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, ArrowUpRight, Menu, X, Sparkles, Terminal, Shield } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Case Studies", href: "#case-studies" },
    { label: "Architecture & Stack", href: "#stack" },
    { label: "Performance", href: "#performance" },
    { label: "Metrics & SLA", href: "#metrics" },
    { label: "Inquiry", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080b11]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-indigo-600 p-[1px] shadow-glow-emerald">
              <div className="w-full h-full bg-[#090d16] rounded-lg flex items-center justify-center group-hover:bg-transparent transition-colors">
                <ShoppingBag className="w-4 h-4 text-emerald-400 group-hover:text-slate-950 transition-colors" />
              </div>
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                <span>NIALL V.</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded">
                  E-COM ARCHITECT
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Senior Webmaster & Commerce Engineer</p>
            </div>
          </a>

          {/* Desktop Live Availability Badge */}
          <div className="hidden lg:flex items-center bg-[#0d1320] border border-slate-800/90 rounded-full px-3.5 py-1 text-xs text-slate-300">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-medium text-[11px]">
              Available for high-impact E-com projects
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2.5 py-1.5 rounded-md hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* High-Contrast CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-glow-emerald hover:shadow-glow-emerald-lg transition-all"
            >
              <span>Hire Me / Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080b11]/98 border-b border-slate-800 px-4 pt-3 pb-5 space-y-3 mt-2 backdrop-blur-xl">
          <div className="flex items-center bg-[#0d1320] border border-slate-800 rounded-lg p-2 text-xs text-slate-300">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for high-impact E-com projects</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-lg bg-emerald-500 text-slate-950 shadow-glow-emerald"
          >
            <span>Hire Me / Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
};
