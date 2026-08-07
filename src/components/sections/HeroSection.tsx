import React from "react";
import { ArrowRight, Play, Users, CheckCircle2, ShieldCheck, Zap, LineChart, BarChart3, Activity } from "lucide-react";

export function HeroSection() {
  return (
    <section id="product" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-[0.3]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-purple-400/20 blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
              
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[11px] md:text-xs font-bold tracking-wide text-blue-300 bg-blue-900/40 rounded-full border border-blue-800 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              AI-POWERED WORKFORCE PLATFORM
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight mb-8 w-full text-white">
              One Intelligent Platform to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Manage, Engage,
              </span>{' '}
              and Grow Your Workforce
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium pr-8">
              TalentOps brings together employee management, attendance, leave, payroll, performance, and communication into one modern cloud platform.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
              <button className="group relative h-14 px-8 text-base font-bold rounded-full bg-blue-600 text-white overflow-hidden shadow-xl shadow-blue-600/20 transition-all hover:scale-105 hover:shadow-blue-600/30 flex items-center justify-center gap-2 w-full sm:w-auto">
                <span className="relative z-10 flex items-center gap-2">
                  Book a Demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group h-14 px-8 text-base font-bold rounded-full bg-slate-800 text-white border border-slate-700 hover:border-slate-600 hover:bg-slate-700 shadow-sm transition-all hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
                <Play className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                Watch Video
              </button>
            </div>


          </div>

          {/* Right Column: Visual */}
          <div className="relative h-[650px] w-full flex items-center justify-center hidden lg:flex">
            
            {/* Center Halo/Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[450px] h-[450px] rounded-full border border-white/40 shadow-[0_0_100px_rgba(255,255,255,0.8)] relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-[10px] border-white/20 blur-sm"></div>
                <div className="absolute w-[110%] h-[110%] rounded-full border border-blue-200/50 blur-[2px]"></div>
              </div>
            </div>

            {/* AI Woman Image */}
            <img 
              src="/ai_professional_woman.png" 
              alt="AI Workforce Platform" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] w-auto object-cover object-top z-10 drop-shadow-2xl"
            />

            {/* Floating Cards Container */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              
              {/* Card 1: Top Left - Total Employees */}
              <div className="absolute top-[10%] left-[-10%] bg-white/95 backdrop-blur-md border border-white/80 p-4 rounded-2xl shadow-xl shadow-blue-900/5 animate-bounce-slow flex flex-col gap-2 w-52 pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 mb-1">Total Employees</div>
                    <div className="text-xl font-black text-slate-900">12,845</div>
                    <div className="text-[10px] font-bold text-emerald-500 mt-0.5">+12.5% <span className="text-slate-400 font-medium">from last month</span></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <svg className="w-full h-8 mt-2" preserveAspectRatio="none" viewBox="0 0 100 30">
                  <path d="M 0 25 L 20 20 L 40 28 L 60 15 L 80 18 L 100 5" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
                  <circle cx="20" cy="20" r="1.5" fill="#8b5cf6" />
                  <circle cx="40" cy="28" r="1.5" fill="#8b5cf6" />
                  <circle cx="60" cy="15" r="1.5" fill="#8b5cf6" />
                  <circle cx="80" cy="18" r="1.5" fill="#8b5cf6" />
                  <circle cx="100" cy="5" r="1.5" fill="#8b5cf6" />
                </svg>
              </div>

              {/* Card 2: Middle Left - Attendance Overview */}
              <div className="absolute top-[40%] left-[-15%] bg-white/95 backdrop-blur-md border border-white/80 p-4 rounded-2xl shadow-xl shadow-indigo-900/5 animate-bounce-slow-delayed flex flex-col gap-3 w-56 pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="text-[11px] font-bold text-slate-500">Attendance Overview</div>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4f46e5" strokeWidth="4" strokeDasharray="95, 100" />
                    </svg>
                    <span className="absolute text-sm font-black text-slate-900">95%</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-400">Present Today</div>
                </div>
                <div className="flex items-center justify-between mt-1 text-[9px] font-bold">
                   <div className="text-indigo-600">Present <span className="text-slate-700">11,502</span></div>
                   <div className="text-slate-300">|</div>
                   <div className="text-rose-500">Absent <span className="text-slate-700">568</span></div>
                   <div className="text-slate-300">|</div>
                   <div className="text-slate-500">Leave <span className="text-slate-700">775</span></div>
                </div>
              </div>

              {/* Card 3: Bottom Left - Payroll Processed */}
              <div className="absolute bottom-[10%] left-[-5%] bg-white/95 backdrop-blur-md border border-white/80 p-4 rounded-2xl shadow-xl shadow-blue-900/5 animate-bounce-slow flex items-end justify-between w-52 pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col gap-1">
                  <div className="text-[10px] font-bold text-slate-500">Payroll Processed</div>
                  <div className="text-xl font-black text-slate-900">₹ 8.45 Cr</div>
                  <div className="text-[10px] font-medium text-slate-400">This Month</div>
                </div>
                <div className="flex items-end gap-1 h-10">
                   {[30, 45, 20, 60, 40, 80].map((h, i) => (
                     <div key={i} className="w-1.5 bg-indigo-100 rounded-full relative overflow-hidden h-full">
                       <div className="absolute bottom-0 w-full bg-indigo-300 rounded-full" style={{ height: `${h}%` }}></div>
                     </div>
                   ))}
                </div>
              </div>

              {/* Card 4: Top Right - Performance Score */}
              <div className="absolute top-[12%] right-[-10%] bg-white/95 backdrop-blur-md border border-white/80 p-4 rounded-2xl shadow-xl shadow-emerald-900/5 animate-bounce-slow-delayed flex flex-col gap-2 w-52 pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 mb-1">Performance Score</div>
                    <div className="text-xl font-black text-slate-900">4.7<span className="text-sm font-bold text-slate-400">/5</span></div>
                    <div className="text-[10px] font-bold text-emerald-500 mt-0.5">+0.3 <span className="text-slate-400 font-medium">from last quarter</span></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <svg className="w-full h-8 mt-2" preserveAspectRatio="none" viewBox="0 0 100 30">
                  <path d="M 0 25 L 20 28 L 40 18 L 60 10 L 80 15 L 100 5" fill="none" stroke="#34d399" strokeWidth="1.5" />
                  <circle cx="60" cy="10" r="1.5" fill="#34d399" />
                  <circle cx="100" cy="5" r="1.5" fill="#34d399" />
                </svg>
              </div>

              {/* Card 5: Middle Right - Leave Requests */}
              <div className="absolute top-[42%] right-[-12%] bg-white/95 backdrop-blur-md border border-white/80 p-4 rounded-2xl shadow-xl shadow-amber-900/5 animate-bounce-slow flex justify-between items-center w-48 pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300">
                <div>
                  <div className="text-[11px] font-bold text-slate-500 mb-1">Leave Requests</div>
                  <div className="text-xl font-black text-slate-900">128</div>
                  <div className="text-[9px] font-medium text-slate-400">Pending Requests</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Card 6: Bottom Right - Employee Engagement */}
              <div className="absolute bottom-[15%] right-[-5%] bg-white/95 backdrop-blur-md border border-white/80 p-4 rounded-2xl shadow-xl shadow-emerald-900/5 animate-bounce-slow-delayed flex flex-col gap-2 w-52 pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 mb-1">Employee Engagement</div>
                    <div className="text-xl font-black text-slate-900">92%</div>
                    <div className="text-[9px] font-medium text-slate-400">Engagement Score</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-end gap-1.5 h-8 mt-1">
                   {[20, 30, 45, 60, 50, 70, 85].map((h, i) => (
                     <div key={i} className="w-full bg-emerald-100 rounded-t-sm relative">
                       <div className="absolute bottom-0 w-full bg-emerald-400 rounded-t-sm" style={{ height: `${h}%` }}></div>
                     </div>
                   ))}
                </div>
              </div>

            </div>
          </div>
          
        </div>

        {/* Full-Width Trust Badges (Separate Colored Boxes) */}
        <div className="mt-8 lg:mt-16 pt-8 border-t border-slate-800 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-lg md:text-xl mb-2">
                <Users className="w-5 h-5" /> 10,000+
              </div>
              <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Employees Managed</div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-emerald-500 font-bold text-lg md:text-xl mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg> 250+
              </div>
              <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">HR Teams</div>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-purple-500 font-bold text-lg md:text-xl mb-2">
                <CheckCircle2 className="w-5 h-5" /> 99.9%
              </div>
              <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Platform Uptime</div>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 text-orange-500 font-bold text-lg md:text-xl mb-2">
                <Zap className="w-5 h-5" /> 40%
              </div>
              <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Faster HR Operations</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
