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
    <section className="py-24 bg-transparent/5 overflow-hidden relative" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Actionable Insights at Your Fingertips</h2>
          <p className="text-lg text-slate-400">
            Make data-driven decisions with Pricing and comprehensive reporting.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="bg-transparent rounded-3xl shadow-2xl border border-white/10 p-6 md:p-8"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Chart */}
            <div className="lg:col-span-2 bg-transparent/5 rounded-2xl p-6 border border-white/5">
              <h3 className="font-bold text-white mb-6">Workforce Growth vs Cost</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0a84eb" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#0a84eb" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    />
                    <Area type="monotone" dataKey="cost" stroke="#0a84eb" strokeWidth={3} fillOpacity={1} fill="url(#colorCost)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {/* Small Chart 1 */}
              <div className="bg-transparent/5 rounded-2xl p-6 border border-white/5 h-full">
                <h3 className="font-bold text-white mb-6">Attendance Rate</h3>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.slice(-4)}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <Bar dataKey="employees" fill="#22d3ee" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Status List */}
              <div className="bg-transparent/5 rounded-2xl p-6 border border-white/5 h-full flex flex-col justify-between">
                <h3 className="font-bold text-white mb-4">Pending Approvals</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200" />
                        <div>
                          <div className="text-sm font-medium text-white">Leave Request</div>
                          <div className="text-xs text-slate-400">2 days ago</div>
                        </div>
                      </div>
                      <div className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-1 rounded-full">Pending</div>
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
