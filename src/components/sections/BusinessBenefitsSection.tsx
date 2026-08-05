"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, TrendingUp, Search, Smile, BarChart } from "lucide-react";

export function BusinessBenefitsSection() {
  const benefits = [
    { icon: Clock, title: "Reduce administrative effort", color: "text-blue-400 bg-blue-500/20" },
    { icon: TrendingUp, title: "Improve workforce productivity", color: "text-green-400 bg-green-500/20" },
    { icon: Search, title: "Increase operational transparency", color: "text-amber-400 bg-amber-500/20" },
    { icon: Smile, title: "Enhance employee engagement", color: "text-rose-400 bg-rose-500/20" },
    { icon: BarChart, title: "Support business growth with scalable HR operations", color: "text-purple-400 bg-purple-500/20" },
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="resources">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Designed to Improve Workforce Performance
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            TalentOps isn't just about managing records. It's about optimizing your operations so your teams can focus on what they do best.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", bounce: 0.4 }}
              className="flex items-center gap-4 bg-transparent/5 p-6 rounded-xl border border-white/10 shadow-sm"
            >
              <div className={`w-12 h-12 rounded-lg ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <div className="font-semibold text-white text-lg">{benefit.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
