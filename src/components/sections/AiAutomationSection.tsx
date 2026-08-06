"use client";
import React from "react";
import { CheckCircle2, ArrowRight, BrainCircuit, Layers, Zap, Heart, Activity, Shield, TrendingUp } from "lucide-react";

export function AiAutomationSection() {
  const reasons = [
    { title: "One Unified Platform", desc: "Replace multiple HR tools with a single integrated system.", icon: Layers, color: "text-blue-600", bg: "bg-blue-100", border: "group-hover:border-blue-200", shadow: "group-hover:shadow-blue-500/10" },
    { title: "Automation That Saves Time", desc: "Reduce manual work through intelligent workflows and approvals.", icon: Zap, color: "text-amber-600", bg: "bg-amber-100", border: "group-hover:border-amber-200", shadow: "group-hover:shadow-amber-500/10" },
    { title: "Better Employee Experience", desc: "Provide a modern self-service experience employees actually enjoy using.", icon: Heart, color: "text-rose-600", bg: "bg-rose-100", border: "group-hover:border-rose-200", shadow: "group-hover:shadow-rose-500/10" },
    { title: "Real-time Visibility", desc: "Track workforce operations across teams, locations, and departments instantly.", icon: Activity, color: "text-emerald-600", bg: "bg-emerald-100", border: "group-hover:border-emerald-200", shadow: "group-hover:shadow-emerald-500/10" },
    { title: "Enterprise Security", desc: "Built with encryption, access controls, audit logs, and cloud-native security.", icon: Shield, color: "text-indigo-600", bg: "bg-indigo-100", border: "group-hover:border-indigo-200", shadow: "group-hover:shadow-indigo-500/10" },
    { title: "Built to Scale", desc: "Support organizations from start-ups to enterprises with thousands of employees.", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-100", border: "group-hover:border-purple-200", shadow: "group-hover:shadow-purple-500/10" },
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Side: Features */}
          <div className="lg:col-span-1 flex flex-col justify-center">
            <div className="text-blue-600 font-semibold tracking-wider text-lg uppercase mb-8">
              WHY BUSINESSES CHOOSE TALENTOPS
            </div>
            
            <div className="grid md:grid-cols-2 gap-5">
              {reasons.map((reason, i) => (
                <div key={i} className={`group flex gap-4 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${reason.border} ${reason.shadow}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${reason.bg} ${reason.color}`}>
                    <reason.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[15px] mb-1.5 transition-colors group-hover:text-blue-600">{reason.title}</h4>
                    <p className="text-slate-500 text-[13px] leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: AI Card */}
          <div className="bg-[#121421] rounded-2xl p-8 relative overflow-hidden shadow-2xl border border-[#1E2235] flex flex-row items-center">
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative z-10 w-3/5 pr-4 flex flex-col">
              <div className="flex items-center gap-3 mb-6 text-blue-500 font-bold text-xl md:text-2xl">
                <BrainCircuit className="w-7 h-7" />
                AI-Powered Workforce Operations
              </div>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10">
                TalentOps uses AI to automate tasks, detect anomalies, predict trends, and help you build a more productive, engaged, and efficient workforce.
              </p>
              
              <button className="flex items-center gap-2 px-6 py-3 bg-[#3B3654] hover:bg-[#4B4568] text-white text-sm md:text-base font-semibold rounded-xl transition-colors w-max border border-white/5 shadow-sm">
                See AI in Action <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-2/5 z-0 flex items-center justify-end">
                <div className="absolute inset-0 bg-gradient-to-r from-[#121421] via-transparent to-transparent z-10" />
                <img 
                  src="/images/ai_brain_chip.png" 
                  alt="AI Brain" 
                  className="w-[120%] h-auto object-contain relative z-0 pr-8"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
