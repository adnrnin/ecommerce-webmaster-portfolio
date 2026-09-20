import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { TechStack } from "@/components/TechStack";
import { PerformanceBento } from "@/components/PerformanceBento";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080b11] text-slate-100 flex flex-col relative">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="flex-grow">
        {/* 1. Hero with Value Prop & KPI Stats Ticker */}
        <Hero />

        {/* 2. Featured E-Commerce Case Studies with Procedural UI Mockups */}
        <CaseStudies />

        {/* 3. E-Commerce Architecture & Tech Stack Showcase */}
        <TechStack />

        {/* 4. Performance Bento Grid */}
        <PerformanceBento />

        {/* 5. Contact & Scoped Project Inquiry */}
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
