"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]" id="contact">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[var(--background-image-gradient-mesh)] opacity-10 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50 pointer-events-none" />

      {/* Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[80px]" />

      <div className="max-w-xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-100 mb-2">Contact Sales</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#111]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">First Name</label>
                  <input 
                    suppressHydrationWarning
                    type="text" 
                    placeholder="John" 
                    className="w-full bg-[#0a0a0a] border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-[#111] transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Last Name</label>
                  <input 
                    suppressHydrationWarning
                    type="text" 
                    placeholder="Doe" 
                    className="w-full bg-[#0a0a0a] border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-[#111] transition-all font-medium"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">Work Email</label>
                <input 
                  suppressHydrationWarning
                  type="email" 
                  placeholder="john@company.com" 
                  className="w-full bg-[#0a0a0a] border border-slate-800 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-[#111] transition-all font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">Company Size</label>
                <div className="relative">
                  <select suppressHydrationWarning className="w-full bg-[#0a0a0a] border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-[#111] transition-all appearance-none cursor-pointer font-medium">
                    <option className="bg-[#111] text-slate-200">1-50 employees</option>
                    <option className="bg-[#111] text-slate-200">51-200 employees</option>
                    <option className="bg-[#111] text-slate-200">201-1000 employees</option>
                    <option className="bg-[#111] text-slate-200">1000+ employees</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-[#d47f63] hover:bg-[#c26243] text-white font-bold rounded-xl py-6 mt-4 group shadow-md shadow-orange-500/20 border-0">
                Send Request
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-center text-slate-500 font-medium mt-4">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
