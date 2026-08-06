"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar 
} from "recharts";

export function DashboardShowcaseSection() {
  const data = [
    { name: "Jan", employees: 400, cost: 2400 },
    { name: "Feb", employees: 410, cost: 2500 },
    { name: "Mar", employees: 425, cost: 2600 },
    { name: "Apr", employees: 450, cost: 2800 },
    { name: "May", employees: 480, cost: 3000 },
    { name: "Jun", employees: 510, cost: 3200 },
    { name: "Jul", employees: 530, cost: 3300 },
  ];

  return (
    <section className="py-24 bg-[#050505] overflow-hidden relative" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-100 mb-6">Actionable Insights at Your Fingertips</h2>
          <p className="text-lg text-slate-400 font-medium">
            Make data-driven decisions with Pricing and comprehensive reporting.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="bg-[#111] rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-800 p-6 md:p-8"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Chart */}
            <div className="lg:col-span-2 bg-[#1a1a1a] rounded-2xl p-6 border border-slate-800">
              <h3 className="font-bold text-slate-200 mb-6">Workforce Growth vs Cost</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: '1px solid #333', backgroundColor: '#111', color: '#f1f5f9', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }}
                    />
                    <Area type="monotone" dataKey="cost" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCost)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {/* Small Chart 1 */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-slate-800 h-full">
                <h3 className="font-bold text-slate-200 mb-6">Attendance Rate</h3>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.slice(-4)}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <Bar dataKey="employees" fill="#a855f7" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Status List */}
              <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-slate-800 h-full flex flex-col justify-between">
                <h3 className="font-bold text-slate-200 mb-4">Pending Approvals</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between bg-[#111] p-3 rounded-xl shadow-sm border border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800" />
                        <div>
                          <div className="text-sm font-semibold text-slate-200">Leave Request</div>
                          <div className="text-xs text-slate-500 font-medium">2 days ago</div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-amber-500 bg-amber-900/20 px-2 py-1 rounded-full">Pending</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
