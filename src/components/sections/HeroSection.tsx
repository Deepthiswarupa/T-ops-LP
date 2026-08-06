import React from "react";
import { ArrowRight, BrainCircuit, Play, Cloud, ShieldCheck, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section id="product" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center border-b border-slate-100 bg-white">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-[0.3]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-purple-400/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-emerald-400/10 blur-[120px]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center justify-center">
          
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[11px] md:text-xs font-bold tracking-wide text-blue-600 bg-blue-50/80 rounded-full border border-blue-200 shadow-sm backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
          AI-POWERED WORKFORCE PLATFORM
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight mb-8 w-full text-slate-900 max-w-5xl mx-auto">
          One Intelligent Platform to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            Manage, Engage, and Grow
          </span>{' '}
          Your Workforce
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          TalentOps brings together employee management, attendance, leave, payroll, performance, and communication into one modern cloud platform.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20">
          <button className="group relative h-14 px-8 text-base font-bold rounded-full bg-blue-600 text-white overflow-hidden shadow-xl shadow-blue-600/20 transition-all hover:scale-105 hover:shadow-blue-600/30 flex items-center justify-center gap-2">
            <span className="relative z-10 flex items-center gap-2">
              Book a Demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group h-14 px-8 text-base font-bold rounded-full bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm transition-all hover:scale-105 flex items-center justify-center gap-2">
            <Play className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
            Watch Video
          </button>
        </div>
        
      </div>
    </section>
  );
}
