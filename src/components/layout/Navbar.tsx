"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Platform", "Solutions", "Features", "Pricing", "Resources", "Contact"];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-brand-950/80 backdrop-blur-md border-b border-white/10 py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center shadow-sm shadow-brand-500/20">
            <span className="text-white font-bold text-xl leading-none">T</span>
          </div>
          <span className="font-bold text-xl text-white tracking-tight">TalentOps</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Book a Demo</a>
          <Button variant="primary">Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-slate-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-transparent border-b border-white/10 p-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-base font-medium text-white" onClick={() => setMobileMenuOpen(false)}>
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/5">
            <Button variant="outline" className="w-full justify-center">Book a Demo</Button>
            <Button variant="primary" className="w-full justify-center">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
}
