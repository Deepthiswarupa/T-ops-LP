"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-[#050505] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh] z-0">
      {/* Premium Background Elements */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-900/10 rounded-full blur-[120px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="max-w-5xl flex flex-col items-center w-full"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-slate-100 leading-[1.15] mb-8 tracking-tight w-full">
              One Intelligent Platform to<br />
              <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-[#e68a6d] to-orange-400">
                Manage, Engage, and Grow
              </span><br />
              Your Workforce
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-medium">
              TalentOps brings together employee management, attendance, leave, payroll, performance, communication, and workforce operations into one modern cloud platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto mt-4">
              <Button size="lg" className="h-12 md:h-14 px-8 text-base md:text-lg w-full sm:w-auto rounded-full bg-[#d47f63] text-white hover:bg-[#c26243] shadow-[0_0_20px_rgba(212,127,99,0.3)] transition-all duration-300 font-semibold border-0">
                Book a Demo
              </Button>
              <Button variant="outline" size="lg" className="h-12 md:h-14 px-8 text-base md:text-lg w-full sm:w-auto rounded-full border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800/50 bg-transparent transition-all duration-300 font-semibold">
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
