"use client";
import React, { useState } from "react";
import { Clock, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ActionableInsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const chartData = [
    { month: "Jan", cost: 2400, top: 45 },
    { month: "Feb", cost: 2500, top: 43 },
    { month: "Mar", cost: 2600, top: 40 },
    { month: "Apr", cost: 2800, top: 34 },
    { month: "May", cost: 3000, top: 26 },
    { month: "Jun", cost: 3200, top: 20 },
    { month: "Jul", cost: 3400, top: 15 },
  ];

  return (
    <section id="pricing" className="py-32 bg-[#FAFAFC] border-b border-slate-100 overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-100/40 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-bold uppercase tracking-widest">
            DATA-DRIVEN DECISIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Actionable Insights at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Your Fingertips</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Stop guessing and start optimizing. Get real-time, comprehensive reporting on your workforce performance, costs, and operational bottlenecks.
          </p>
        </div>

        {/* Premium Dashboard Frame */}
        <div className="bg-slate-900 rounded-[2.5rem] p-3 md:p-5 shadow-2xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
          <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-inner">
            
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Performance Overview</h3>
                  <p className="text-sm text-slate-500">Real-time metrics for Q3</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <Button variant="outline" className="rounded-full text-slate-600 font-medium">Export Report</Button>
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md">
                  View Full Dashboard <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Left large chart */}
              <div className="lg:col-span-2 bg-slate-50/50 border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col group">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Workforce Growth vs Cost</h4>
                    <p className="text-xs text-slate-500 font-medium">+14.5% compared to last quarter</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-600 uppercase"><div className="w-2 h-2 rounded-full bg-emerald-400"></div> Growth</span>
                  </div>
                </div>
                
                <div className="flex-1 relative min-h-[280px] w-full flex items-end">
                  {/* Y Axis labels */}
                  <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[11px] text-slate-400 font-semibold">
                    <span>3400</span>
                    <span>2550</span>
                    <span>1700</span>
                    <span>850</span>
                    <span>0</span>
                  </div>
                  
                  {/* Chart Area */}
                  <div className="ml-12 w-full h-full relative border-b border-slate-200" onMouseLeave={() => setHoveredIndex(null)}>
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                      <div className="border-b border-dashed border-slate-200 w-full h-0 opacity-50"></div>
                      <div className="border-b border-dashed border-slate-200 w-full h-0 opacity-50"></div>
                      <div className="border-b border-dashed border-slate-200 w-full h-0 opacity-50"></div>
                      <div className="border-b border-dashed border-slate-200 w-full h-0 opacity-50"></div>
                      <div className="border-b-2 border-slate-200 w-full h-0"></div>
                    </div>
                    
                    {/* Gradient fill */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 top-8 opacity-50 bg-gradient-to-t from-emerald-100 to-emerald-400/20 group-hover:opacity-70 transition-opacity duration-500"
                      style={{ clipPath: "polygon(0% 40%, 30% 35%, 60% 20%, 100% 10%, 100% 100%, 0% 100%)" }}
                    />
                    {/* Line */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M 0 45 C 30 40, 60 25, 100 15" fill="none" stroke="#10b981" strokeWidth="3" vectorEffect="non-scaling-stroke" className="drop-shadow-md" />
                    </svg>

                    {/* Interactive tooltips */}
                    {chartData.map((data, i) => {
                      const leftPos = `${(i / (chartData.length - 1)) * 100}%`;
                      return (
                        <div 
                          key={i} 
                          className="absolute top-0 bottom-0 z-20 flex flex-col items-center justify-start cursor-crosshair group/tooltip"
                          style={{ left: leftPos, transform: "translateX(-50%)", width: "10%" }}
                          onMouseEnter={() => setHoveredIndex(i)}
                        >
                          <div 
                            className={`absolute bottom-0 flex flex-col items-center w-full transition-all duration-300 ${hoveredIndex === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                            style={{ top: `${data.top}%` }}
                          >
                            <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full border-[3px] border-white relative z-10 shadow-md flex-shrink-0"></div>
                            <div className="w-0.5 h-full bg-gradient-to-b from-emerald-400 to-transparent opacity-50"></div>
                            
                            {/* Tooltip box */}
                            <div className={`absolute top-6 ${i > 4 ? 'right-4' : 'left-4'} bg-slate-900 rounded-xl p-3 shadow-2xl min-w-[110px] border border-slate-700 z-30 pointer-events-none`}>
                              <div className="text-slate-300 font-bold text-xs mb-1 uppercase tracking-wider">{data.month} 2024</div>
                              <div className="text-emerald-400 font-bold text-sm">Cost: ${data.cost}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* X Axis labels */}
                <div className="ml-12 mt-4 flex justify-between text-[11px] text-slate-500 font-bold uppercase">
                  {chartData.map((d, i) => <span key={i}>{d.month}</span>)}
                </div>
              </div>

              {/* Right side charts */}
              <div className="flex flex-col gap-8">
                
                {/* Top right: Bar chart */}
                <div className="bg-slate-50/50 border border-slate-200 rounded-3xl p-8 shadow-sm group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="font-bold text-slate-800 text-base">Attendance Rate</h3>
                      <p className="text-xs text-slate-500 font-medium mt-1">Last 4 months</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="flex items-end justify-between h-36 border-b border-slate-200 pb-2 relative">
                     <div className="absolute top-4 left-0 right-0 border-b border-dashed border-slate-200 z-0"></div>
                     <div className="absolute top-16 left-0 right-0 border-b border-dashed border-slate-200 z-0"></div>
                     
                     <div className="w-12 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-xl relative z-10 group-hover:scale-y-105 transition-transform origin-bottom" style={{ height: "60%" }}></div>
                     <div className="w-12 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-xl relative z-10 group-hover:scale-y-105 transition-transform origin-bottom delay-75" style={{ height: "65%" }}></div>
                     <div className="w-12 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-xl relative z-10 group-hover:scale-y-105 transition-transform origin-bottom delay-100" style={{ height: "75%" }}></div>
                     <div className="w-12 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-xl relative z-10 group-hover:scale-y-105 transition-transform origin-bottom delay-150" style={{ height: "85%" }}></div>
                  </div>
                  <div className="flex justify-between mt-4 text-[11px] text-slate-500 font-bold uppercase px-3">
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                  </div>
                </div>

                {/* Bottom right: Pending Approvals */}
                <div className="bg-slate-50/50 border border-slate-200 rounded-3xl p-6 shadow-sm flex-1">
                  <h3 className="font-bold text-slate-800 mb-5 text-base px-2">Pending Approvals</h3>
                  <div className="flex flex-col gap-2.5">
                    {[
                      { type: "Leave Request", time: "2 hours ago", status: "Urgent", color: "text-rose-600", bg: "bg-rose-100" },
                      { type: "Expense Report", time: "5 hours ago", status: "Pending", color: "text-amber-600", bg: "bg-amber-100" },
                      { type: "Timesheet", time: "1 day ago", status: "Pending", color: "text-amber-600", bg: "bg-amber-100" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer group">
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors flex items-center justify-center text-slate-500">
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800">{item.type}</div>
                            <div className="text-[11px] font-medium text-slate-500">{item.time}</div>
                          </div>
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${item.color} ${item.bg} px-2.5 py-1 rounded-md`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
