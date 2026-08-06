"use client";
import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-100 mb-6">Why Businesses Choose TalentOps</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            See how TalentOps compares to traditional, disconnected HR systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Traditional Systems */}
          <div className="bg-[#111] rounded-3xl p-8 md:p-10 border border-slate-800 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-200 mb-8">Traditional HR Systems</h3>
            <ul className="space-y-6">
              {[
                "Multiple disconnected tools",
                "Manual processes",
                "Limited visibility",
                "Complex workflows",
                "Difficult scaling"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-400 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TalentOps */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="bg-gradient-to-br from-orange-900/20 to-[#111] border border-orange-500/20 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/20 blur-[80px] rounded-full" />
            
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#d47f63] flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">T</span>
              </div>
              TalentOps
            </h3>
            <ul className="space-y-6 relative z-10">
              {[
                "One unified platform",
                "Modern employee experience",
                "Operational efficiency",
                "Cloud-first architecture",
                "Reliable, secure, and scalable",
                "Built for growing organizations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#d47f63] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
