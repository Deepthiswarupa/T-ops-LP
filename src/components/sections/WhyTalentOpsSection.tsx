"use client";
import React from "react";
import { Cloud, Sparkles, Users, Eye, ShieldCheck, BarChart4 } from "lucide-react";

export function WhyTalentOpsSection() {
  const features = [
    {
      icon: Cloud,
      title: "Centralized Workforce Management",
      description: "All employee data, processes, and operations in one unified platform.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      hoverBg: "group-hover:bg-blue-600",
      hoverBorder: "hover:border-blue-200"
    },
    {
      icon: Sparkles,
      title: "Reduced Manual Work Through Automation",
      description: "Automate workflows, approvals, and HR operations to save time.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      hoverBg: "group-hover:bg-purple-600",
      hoverBorder: "hover:border-purple-200"
    },
    {
      icon: Users,
      title: "Better Employee Experience",
      description: "Empower employees with self-service, transparency, and seamless interactions.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      hoverBg: "group-hover:bg-emerald-600",
      hoverBorder: "hover:border-emerald-200"
    },
    {
      icon: Eye,
      title: "Real-time Workforce Visibility",
      description: "Get instant insights into attendance, performance, and workforce trends.",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      hoverBg: "group-hover:bg-amber-600",
      hoverBorder: "hover:border-amber-200"
    },
    {
      icon: ShieldCheck,
      title: "Secure and Scalable Cloud Platform",
      description: "Enterprise-grade security with the scalability your business needs.",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      hoverBg: "group-hover:bg-rose-600",
      hoverBorder: "hover:border-rose-200"
    },
    {
      icon: BarChart4,
      title: "Faster HR Decision-Making",
      description: "Make data-driven decisions with real-time analytics and reports.",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      hoverBg: "group-hover:bg-cyan-600",
      hoverBorder: "hover:border-cyan-200"
    }
  ];

  return (
    <section id="resources" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-600 font-semibold tracking-wider text-lg uppercase mb-3">WHY TALENTOPS</div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-600 mb-6">
            Everything You Need. One Intelligent Platform.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group ${feature.bgColor} rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md ${feature.hoverBorder} transition-all duration-300 text-center flex flex-col items-center`}
            >
              <div className={`w-14 h-14 rounded-full bg-white border border-slate-200 ${feature.hoverBg} group-hover:border-transparent flex items-center justify-center mb-5 ${feature.iconColor} group-hover:text-white transition-colors duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
