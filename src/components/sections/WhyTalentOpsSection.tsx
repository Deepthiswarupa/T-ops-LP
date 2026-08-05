"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Workflow, HeartPulse, Activity, ShieldCheck, TrendingUp } from "lucide-react";

export function WhyTalentOpsSection() {
  const features = [
    {
      icon: Users,
      title: "Centralized Workforce Management",
      description: "Manage employees, teams, departments, and organizational structure from one platform.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Workflow,
      title: "Automation That Eliminates Manual Work",
      description: "Automate attendance, leave approvals, payroll workflows, and routine HR operations.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: HeartPulse,
      title: "Better Employee Experience",
      description: "Give employees a modern self-service portal with transparency and easy access to information.",
      color: "bg-rose-100 text-rose-600"
    },
    {
      icon: Activity,
      title: "Real-Time Workforce Visibility",
      description: "Access live dashboards, attendance insights, workforce trends, and operational metrics instantly.",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: ShieldCheck,
      title: "Secure and Scalable Cloud Platform",
      description: "Enterprise-grade security, role-based access control, cloud reliability, and scalability for growing organizations.",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Faster HR Decision-Making",
      description: "Use reports and analytics to make smarter workforce and operational decisions.",
      color: "bg-brand-100 text-brand-400"
    }
  ];

  return (
    <section className="py-24 bg-transparent relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-transparent/5/50 -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why TalentOps?</h2>
          <p className="text-lg text-slate-400">
            We've completely reimagined how HR software should work. Fast, intuitive, and designed to save you hours every week.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-transparent/5 rounded-2xl p-8 border border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
