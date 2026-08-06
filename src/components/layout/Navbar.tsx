"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["Platform", "Solutions", "Features", "Pricing", "Resources", "Contact"];

  return (
    <header className="absolute top-0 inset-x-0 z-50 pt-6">
      <div className="mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between rounded-full bg-transparent py-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e68a6d] to-[#c26243] flex items-center justify-center shadow-lg shadow-orange-500/20">
              <span className="text-white font-bold text-xl leading-none">T</span>
            </div>
            <span className="font-bold text-xl text-white tracking-tight">TalentOps</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d47f63] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Book a Demo</a>
            <Button className="rounded-full bg-[#d47f63] text-white hover:bg-[#c26243] shadow-lg shadow-orange-500/30 transition-all border-0">Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white hover:text-orange-400 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl transition-all duration-300 origin-top",
        mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
      )}>
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="text-lg font-medium text-slate-300 hover:text-orange-400 transition-colors py-2 border-b border-slate-800/50" onClick={() => setMobileMenuOpen(false)}>
            {link}
          </a>
        ))}
        <div className="flex flex-col gap-3 mt-4 pt-4">
          <Button variant="outline" className="w-full justify-center rounded-xl border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">Book a Demo</Button>
          <Button className="w-full justify-center rounded-xl bg-[#d47f63] text-white hover:bg-[#c26243] border-0">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
