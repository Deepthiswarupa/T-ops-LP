"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, TrendingUp, Search, Smile, BarChart } from "lucide-react";

export function BusinessBenefitsSection() {
  const benefits = [
    { icon: Clock, title: "Reduce administrative effort", bg: "bg-gradient-to-r from-blue-500 to-indigo-600 shadow-blue-500/20", iconColor: "text-white" },
    { icon: TrendingUp, title: "Improve workforce productivity", bg: "bg-gradient-to-r from-emerald-500 to-teal-600 shadow-emerald-500/20", iconColor: "text-white" },
    { icon: Search, title: "Increase operational transparency", bg: "bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-500/20", iconColor: "text-white" },
    { icon: Smile, title: "Enhance employee engagement", bg: "bg-gradient-to-r from-rose-500 to-pink-600 shadow-rose-500/20", iconColor: "text-white" },
    { icon: BarChart, title: "Support business growth with scalable HR operations", bg: "bg-gradient-to-r from-purple-500 to-fuchsia-600 shadow-purple-500/20", iconColor: "text-white" },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="resources">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-100 mb-6 leading-tight">
            Designed to Improve Workforce Performance
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
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
              className={`flex items-center gap-4 ${benefit.bg} p-4 md:p-6 rounded-full border border-white/10 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className={`w-12 h-12 rounded-full bg-black/20 flex items-center justify-center flex-shrink-0 ${benefit.iconColor}`}>
                <benefit.icon className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <div className="font-bold text-white text-lg">{benefit.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
