"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", hasDropdown: false },
    { name: "Solutions", hasDropdown: false },
    { name: "Resources", hasDropdown: false },
    { name: "Company", hasDropdown: false },
    { name: "Pricing", hasDropdown: false },
    { name: "Contact", hasDropdown: false },
  ];

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent bg-white py-4",
      isScrolled ? "shadow-sm border-slate-200" : ""
    )}>
      <div className="mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center shadow-premium">
              <span className="text-white font-display font-bold text-xl leading-none">T</span>
            </div>
            <span className="font-display font-bold text-3xl text-slate-900 tracking-tight">TalentOps</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={`#${link.name.toLowerCase()}`} className="flex items-center gap-1 text-lg font-medium text-black hover:text-primary-600 transition-colors">
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-5 h-5 text-slate-400" />}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#login" className="text-lg font-medium text-black hover:text-primary-600 transition-colors">Log In</a>
            <Button className="rounded-md bg-primary-600 hover:bg-primary-700 text-black font-medium text-lg px-8 h-12 shadow-sm transition-all whitespace-nowrap">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-slate-600 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-lg transition-all duration-300 origin-top",
        mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
      )}>
        {navLinks.map((link) => (
          <a key={link.name} href={`#${link.name.toLowerCase()}`} className="flex items-center justify-between text-lg font-medium text-slate-900 py-2 border-b border-slate-100" onClick={() => setMobileMenuOpen(false)}>
            {link.name}
            {link.hasDropdown && <ChevronDown className="w-5 h-5 text-slate-400" />}
          </a>
        ))}
        <div className="flex flex-col gap-3 mt-2">
          <Button variant="outline" className="w-full justify-center rounded-full text-slate-700 font-medium h-12">Log in</Button>
          <Button className="w-full justify-center rounded-full bg-primary-600 hover:bg-primary-700 text-black font-medium h-12 shadow-premium">Book a Demo</Button>
        </div>
      </div>
    </header>
  );
}
