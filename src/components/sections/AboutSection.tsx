"use client";
import React from "react";
import { motion } from "framer-motion";
import { Network, Server, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="platform" className="py-24 bg-transparent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Workforce Operations Built for Modern Organizations
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              TalentOps is a Workforce Operations Platform designed to simplify every stage of the employee journey. Instead of using multiple disconnected tools, organizations can manage people, processes, and workplace operations from one secure platform. TalentOps helps businesses improve efficiency, strengthen employee engagement, and make data-driven decisions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3 bg-transparent p-6 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400 mb-2">
                  <Network className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-white">Connected System</h4>
                <p className="text-sm text-slate-400">Everything syncs automatically across modules.</p>
              </div>
              <div className="flex flex-col gap-3 bg-transparent p-6 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400 mb-2">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-white">Fast & Responsive</h4>
                <p className="text-sm text-slate-400">Built for speed, optimizing every workflow.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-200 to-accent-200 rounded-full blur-3xl opacity-40" />
              
              {/* Central Hub */}
              <div className="relative w-32 h-32 bg-transparent rounded-full shadow-2xl flex flex-col items-center justify-center z-20 border-4 border-brand-50">
                <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center mb-2">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-sm text-white">TalentOps</span>
              </div>

              {/* Orbiting Modules */}
              {[
                { label: "Payroll", angle: 0 },
                { label: "Leave", angle: 72 },
                { label: "Attendance", angle: 144 },
                { label: "Performance", angle: 216 },
                { label: "Recruiting", angle: 288 },
              ].map((module, i) => {
                const radius = 140;
                const rad = (module.angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                return (
                  <motion.div
                    key={i}
                    className="absolute w-20 h-20 bg-transparent rounded-2xl shadow-lg border border-white/10 flex flex-col items-center justify-center z-10"
                    animate={{
                      x: [x, x + 10, x],
                      y: [y, y + 10, y],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  >
                    <div className="w-2 h-2 bg-brand-400 rounded-full mb-2" />
                    <span className="text-xs font-semibold text-slate-400">{module.label}</span>
                  </motion.div>
                );
              })}
              
              {/* Connecting lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="140" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" className="origin-center animate-[spin_20s_linear_infinite]" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
