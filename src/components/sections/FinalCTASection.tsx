"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden flex flex-col justify-center px-6 lg:px-8">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 -right-[20%] md:-right-[10%] lg:-right-40 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-80 blur-2xl -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2">
        <div className="flex flex-col items-start text-left">
          <h2 className="text-5xl md:text-[4rem] lg:text-[4.5rem] font-display font-bold text-[#111827] mb-6 leading-[1.05] tracking-tight">
            Ready to <br />
            Transform <br />
            Your <span className="text-[#3b82f6]">Workforce</span> <br />
            Operations?
          </h2>
          <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-md leading-relaxed font-medium">
            Join thousands of companies using TalentOps to build a more efficient, engaged, and productive workforce.
          </p>
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-[15px] font-bold rounded-xl bg-[#3b82f6] hover:bg-blue-600 text-white transition-all whitespace-nowrap shadow-md">
              Book a Demo <ArrowRight strokeWidth={2} className="ml-2 w-4 h-4 shrink-0" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-[15px] font-bold rounded-xl bg-white text-[#3b82f6] border border-[#3b82f6] hover:bg-blue-50 transition-all whitespace-nowrap">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
