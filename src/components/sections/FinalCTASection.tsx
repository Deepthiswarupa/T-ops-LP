"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 bg-slate-900 text-left">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="px-6">
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold text-blue-500 mb-8 leading-tight">
            Ready to Transform Your Workforce Operations?
          </h2>
          <p className="text-slate-300 text-2xl mb-12 max-w-3xl">
            Join thousands of companies using TalentOps to build a more efficient, engaged, and productive workforce.
          </p>
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
            <Button size="lg" className="h-14 w-full sm:w-auto px-8 text-lg font-medium rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 whitespace-nowrap">
              Book a Demo <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 w-full sm:w-auto px-8 text-lg font-medium rounded-xl bg-slate-900 text-white border-slate-700 hover:bg-slate-800 transition-all whitespace-nowrap">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
