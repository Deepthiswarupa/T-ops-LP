"use client";
import React from "react";
import { Building2, Layers, BrainCircuit, BarChart3, ShieldCheck, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="solutions" className="py-24 bg-white overflow-hidden relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Team collaborating" 
                className="w-full h-[450px] object-cover"
              />
            </div>
            

          </div>

          {/* Right side: Content */}
          <div className="flex flex-col">
            <div className="text-blue-600 font-semibold tracking-wider text-lg uppercase mb-3">
              ABOUT TALENTOPS
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-600 mb-6 leading-tight">
              A Smarter Way to Manage Your People and Operations
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 text-[15px]">
              TalentOps is a Workforce Operations Platform designed to simplify every stage of the employee journey. Instead of using multiple disconnected tools, organizations can manage people, processes, and workforce operations from one secure platform. TalentOps helps businesses improve efficiency, strengthen employee engagement, and make data-driven decisions.
            </p>
            
            {/* 5 Icons Row */}
            <div className="flex w-full justify-between gap-y-6">
              {[
                { icon: Layers, label: "All-in-One\nPlatform" },
                { icon: BrainCircuit, label: "Intelligent\nAutomation" },
                { icon: BarChart3, label: "Real-time\nInsights" },
                { icon: ShieldCheck, label: "Enterprise\nSecure" },
                { icon: TrendingUp, label: "Scalable for\nFuture Growth" },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center max-w-[90px]">
                  <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-3 text-blue-600">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 leading-tight whitespace-pre-line">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
