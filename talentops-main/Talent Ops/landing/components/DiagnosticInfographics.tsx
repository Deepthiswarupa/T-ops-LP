import React from 'react';

// Common wrapper for all infographics to ensure they fit perfectly
const InfographicWrapper = ({ children, gradient }: { children: React.ReactNode, gradient: string }) => (
  <div className="w-full h-full relative flex items-center justify-center p-4 overflow-hidden" style={{ background: '#0B1120' }}>
    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: gradient }}></div>
    {/* Grid Background */}
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      backgroundSize: '20px 20px'
    }}></div>
    {children}
  </div>
);

export const BurnoutInfographic = () => (
  <InfographicWrapper gradient="radial-gradient(circle at center, rgba(255,77,77,0.4) 0%, transparent 70%)">
    <div className="relative z-10 w-full max-w-[300px] bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 shadow-2xl">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">AI Risk Assessment</span>
        <span className="text-[9px] font-mono text-red-400 px-2 py-0.5 rounded-full bg-red-400/10 border border-red-400/20">LIVE</span>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-300">Consecutive Overtime</span>
          <span className="text-red-400 font-bold">&gt;15 hrs</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-300">PTO Taken (6mo)</span>
          <span className="text-orange-400 font-bold">0 days</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-300">Sentiment Score</span>
          <div className="flex items-center gap-1 text-orange-400 font-bold">
            Dropping
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-slate-950 rounded-lg p-2 flex items-center justify-between border border-red-500/30">
        <span className="text-[10px] text-slate-400 font-medium">Burnout Probability</span>
        <span className="text-sm text-red-500 font-black animate-pulse">92% CRITICAL</span>
      </div>
    </div>
  </InfographicWrapper>
);

export const AccountabilityInfographic = () => (
  <InfographicWrapper gradient="radial-gradient(circle at center, rgba(245,158,11,0.4) 0%, transparent 70%)">
    <div className="relative z-10 w-full max-w-[320px] flex gap-3">
      {/* Left Panel */}
      <div className="flex-1 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-3 shadow-2xl flex flex-col justify-center">
        <span className="text-[9px] font-mono text-slate-400 tracking-wider mb-2">SPRINT STATUS</span>
        <div className="flex items-end gap-2 mb-1">
          <span className="text-2xl font-black text-amber-500 leading-none">34</span>
          <span className="text-xs text-slate-400 mb-0.5">Overdue</span>
        </div>
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
          <div className="h-full bg-amber-500 w-[65%]"></div>
        </div>
        <div className="flex justify-between text-[8px] text-slate-500 font-mono">
          <span>COMPLETED: 12</span>
          <span>TOTAL: 46</span>
        </div>
      </div>
      
      {/* Right Panel */}
      <div className="w-[130px] bg-amber-500/10 backdrop-blur-md border border-amber-500/30 rounded-xl p-3 shadow-2xl flex flex-col justify-between">
        <div>
          <svg className="w-5 h-5 text-amber-500 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span className="text-[9px] font-mono text-amber-400 font-bold block mb-1">BOTTLENECK</span>
        </div>
        <div className="text-xs text-white font-medium leading-tight">
          Design Team pending approval
        </div>
      </div>
    </div>
  </InfographicWrapper>
);

export const CapacityInfographic = () => (
  <InfographicWrapper gradient="radial-gradient(circle at center, rgba(139,92,246,0.4) 0%, transparent 70%)">
    <div className="relative z-10 w-full max-w-[300px] bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 shadow-2xl">
      <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase block mb-3">Team Utilization Metrics</span>
      
      <div className="space-y-3">
        {/* Row 1 */}
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-white font-medium">Engineering</span>
            <span className="text-red-400 font-bold">125%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-visible relative">
            <div className="absolute top-0 left-0 h-full bg-violet-500 rounded-l-full w-[80%]"></div>
            <div className="absolute top-0 left-[80%] h-full bg-red-500 rounded-r-full w-[25%] shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
          </div>
        </div>
        
        {/* Row 2 */}
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-slate-300">Product</span>
            <span className="text-emerald-400">85%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[85%]"></div>
          </div>
        </div>
        
        {/* Row 3 */}
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-slate-300">Marketing</span>
            <span className="text-emerald-400">70%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[70%]"></div>
          </div>
        </div>
      </div>
    </div>
  </InfographicWrapper>
);

export const SystemsInfographic = () => (
  <InfographicWrapper gradient="radial-gradient(circle at center, rgba(239,68,68,0.3) 0%, transparent 70%)">
    <div className="relative z-10 w-full max-w-[320px] flex items-center justify-between p-2">
      {/* Workday Node */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-600 flex items-center justify-center shadow-lg z-10 relative">
          <span className="text-white text-xs font-bold font-mono">HRIS</span>
        </div>
        <span className="text-[9px] text-slate-400 font-mono">Workday</span>
      </div>
      
      {/* Broken Connection */}
      <div className="flex-1 flex flex-col items-center relative -mt-4">
        <div className="w-full h-[2px] border-t-2 border-dashed border-red-500/50 absolute top-1/2 -translate-y-1/2 left-0 z-0"></div>
        <div className="bg-red-500/20 border border-red-500 text-red-400 text-[8px] font-mono px-2 py-1 rounded backdrop-blur-md z-10 mt-2 shadow-[0_0_10px_rgba(239,68,68,0.4)]">
          SYNC FAILED
        </div>
      </div>
      
      {/* Slack Node */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-600 flex items-center justify-center shadow-lg z-10 relative">
          <span className="text-white text-xs font-bold font-mono">COMMS</span>
        </div>
        <span className="text-[9px] text-slate-400 font-mono">Slack</span>
      </div>
    </div>
  </InfographicWrapper>
);

export const OverheadInfographic = () => (
  <InfographicWrapper gradient="radial-gradient(circle at center, rgba(6,182,212,0.4) 0%, transparent 70%)">
    <div className="relative z-10 w-full max-w-[280px] bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 shadow-[0_8px_30px_rgba(6,182,212,0.15)]">
      <div className="flex justify-between items-center mb-3 border-b border-slate-800 pb-2">
        <span className="text-[10px] font-mono text-slate-400 tracking-wider">HIDDEN COST CALCULATOR</span>
        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
      
      <div className="space-y-1.5 mb-3">
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">Recruiting Agency Fees</span>
          <span className="text-slate-300 font-mono">$45,000</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">Lost Productivity (Gaps)</span>
          <span className="text-slate-300 font-mono">$124,000</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">Onboarding Dropouts</span>
          <span className="text-slate-300 font-mono">$18,500</span>
        </div>
      </div>
      
      <div className="w-full bg-cyan-950/40 rounded p-2 flex items-center justify-between border border-cyan-500/20">
        <span className="text-[10px] text-cyan-500 font-bold tracking-wider">ANNUAL LEAKAGE</span>
        <span className="text-lg text-cyan-400 font-black font-mono shadow-cyan-400 drop-shadow-md">$187,500</span>
      </div>
    </div>
  </InfographicWrapper>
);

export const PerformanceInfographic = () => (
  <InfographicWrapper gradient="radial-gradient(circle at center, rgba(16,185,129,0.3) 0%, transparent 70%)">
    <div className="relative z-10 w-full max-w-[320px] bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 shadow-2xl">
      <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase block mb-2">Predictive Performance Model</span>
      
      <div className="relative w-full h-[60px] mt-2 border-b border-l border-slate-700 flex items-end">
        {/* Decorative Grid */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-0 opacity-20">
          {[...Array(12)].map((_, i) => <div key={i} className="border-t border-r border-slate-500"></div>)}
        </div>
        
        {/* Line Chart SVG */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,80 L20,70 L40,65 L60,85 L80,30 L100,10" fill="none" stroke="#10B981" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60,85 L80,30 L100,10" fill="none" stroke="#EF4444" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
          
          <circle cx="20" cy="70" r="3" fill="#0F172A" stroke="#10B981" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <circle cx="40" cy="65" r="3" fill="#0F172A" stroke="#10B981" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <circle cx="60" cy="85" r="4" fill="#0F172A" stroke="#EF4444" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <circle cx="80" cy="30" r="4" fill="#0F172A" stroke="#EF4444" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
        
        {/* Tooltip Alert */}
        <div className="absolute right-6 top-0 bg-red-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow-[0_0_10px_rgba(239,68,68,0.5)] transform -translate-y-1/2">
          ▼ REVENUE DROP
        </div>
      </div>
      
      <div className="flex justify-between mt-2 text-[8px] font-mono text-slate-500">
        <span>Q1</span>
        <span>Q2</span>
        <span className="text-red-400 font-bold">PREDICTED Q3</span>
      </div>
    </div>
  </InfographicWrapper>
);
