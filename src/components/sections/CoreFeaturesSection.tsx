"use client";
import React from "react";
import { 
  Users, CalendarClock, PlaneTakeoff, CircleDollarSign, 
  Target, Network, MessageSquare, CalendarDays, 
  LifeBuoy, BarChart3, Shield 
} from "lucide-react";
import { motion } from "framer-motion";

export function CoreFeaturesSection() {
  const features = [
    { icon: Users, title: "Employee Management", desc: "Digital employee records, documents, and assets.", color: "text-emerald-400 bg-emerald-900/20 group-hover:bg-emerald-500" },
    { icon: CalendarClock, title: "Attendance & Timecards", desc: "Automated tracking, shifts, and biometric integrations.", color: "text-purple-400 bg-purple-900/20 group-hover:bg-purple-500" },
    { icon: PlaneTakeoff, title: "Leave Management", desc: "Custom policies, approval workflows, and balances.", color: "text-amber-400 bg-amber-900/20 group-hover:bg-amber-500" },
    { icon: CircleDollarSign, title: "Payroll & Payslips", desc: "Automated calculations, taxes, and self-serve payslips.", color: "text-blue-400 bg-blue-900/20 group-hover:bg-blue-500" },
    { icon: Target, title: "Performance Reviews", desc: "Goals, 360 feedback, and continuous appraisals.", color: "text-rose-400 bg-rose-900/20 group-hover:bg-rose-500" },
    { icon: Network, title: "Organization Hierarchy", desc: "Dynamic org charts and reporting lines.", color: "text-cyan-400 bg-cyan-900/20 group-hover:bg-cyan-500" },
    { icon: MessageSquare, title: "Internal Messaging", desc: "Team announcements and direct communication.", color: "text-indigo-400 bg-indigo-900/20 group-hover:bg-indigo-500" },
    { icon: CalendarDays, title: "Calendar & Events", desc: "Holidays, work anniversaries, and company events.", color: "text-emerald-400 bg-emerald-900/20 group-hover:bg-emerald-500" },
    { icon: LifeBuoy, title: "Helpdesk", desc: "Internal ticketing system for HR requests.", color: "text-orange-400 bg-orange-900/20 group-hover:bg-orange-500" },
    { icon: BarChart3, title: "Reports & Analytics", desc: "Deep insights into headcount, turnover, and costs.", color: "text-purple-400 bg-purple-900/20 group-hover:bg-purple-500" },
    { icon: Shield, title: "Security & Roles", desc: "Granular access controls and data encryption.", color: "text-blue-400 bg-blue-900/20 group-hover:bg-blue-500" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="features" className="py-24 bg-[#0a0a0a] relative overflow-hidden text-slate-300 z-0">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-serif mb-6 text-slate-100 tracking-tight leading-tight lg:whitespace-nowrap">
              Everything You Need. Nothing You Don't.
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              A complete suite of tools to manage your workforce seamlessly. Explore our comprehensive feature set.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="group relative flex items-start gap-4 p-6 rounded-2xl bg-[#111] shadow-lg border border-slate-800 hover:shadow-xl hover:border-slate-700 transition-all duration-300"
            >
              <div className={`w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:text-white ${feature.color}`}>
                <feature.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              
              <div className="flex flex-col text-left">
                <h4 className="font-bold text-slate-200 mb-1 leading-snug transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
