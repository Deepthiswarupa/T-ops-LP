"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-brand-900/20 -z-10" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-800/20 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-700/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="max-w-4xl flex flex-col items-center"
          >
            {/* Pill removed per request */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
              One Intelligent Platform to{" "}
              <br />
              <span className="text-brand-400">Manage, Engage, and</span>{" "}
              <span className="text-accent-500">Grow</span>{" "}
              Your Workforce
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              TalentOps brings together employee management, attendance, leave, payroll, performance, communication, and workforce operations into one modern cloud platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8">Book a Demo</Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8">Get Started</Button>
            </div>
            {/* Trust indicators removed per request */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
