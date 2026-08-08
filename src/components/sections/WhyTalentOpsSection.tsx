"use client";
import React from "react";
import { User, Clock, Calendar, FileText, Target, Megaphone, ArrowRight } from "lucide-react";

export function WhyTalentOpsSection() {
  const features = [
    {
      id: "employee-management",
      icon: User,
      title: "Employee Management",
      description: "Centralized employee records, organization structure, documents and role-based permissions.",
      bulletPoints: [
        "Secure, unified database for all employee data.",
        "Customizable organization charts.",
        "Automated document management & e-signatures.",
        "Granular role-based access controls."
      ],
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      iconColorDark: "text-blue-300",
      glowBorder: "border-blue-500/30",
      glowShadow: "shadow-blue-500/20",
      hoverShadow: "hover:shadow-blue-500/10",
      bulletColor: "bg-blue-400",
      hoverBg: "hover:bg-blue-50",
      groupHoverText: "group-hover:text-blue-600"
    },
    {
      id: "attendance-tracking",
      icon: Clock,
      title: "Attendance & Time Tracking",
      description: "Track attendance across in-office, remote & field teams with real-time visibility.",
      bulletPoints: [
        "Real-time clock-in with IP & geofencing.",
        "Automated timesheet approval workflows.",
        "Identify absenteeism patterns with reporting.",
        "Integrate with biometric devices."
      ],
      iconBg: "bg-sky-50",
      iconColor: "text-sky-600",
      iconColorDark: "text-sky-300",
      glowBorder: "border-sky-500/30",
      glowShadow: "shadow-sky-500/20",
      hoverShadow: "hover:shadow-sky-500/10",
      bulletColor: "bg-sky-400",
      hoverBg: "hover:bg-sky-50",
      groupHoverText: "group-hover:text-sky-600"
    },
    {
      id: "leave-management",
      icon: Calendar,
      title: "Leave & Holiday Management",
      description: "Automate leave requests, approvals, balances and holiday calendars.",
      bulletPoints: [
        "Self-service portal for time off requests.",
        "Customizable regional leave policies.",
        "Automated multi-level approval workflows.",
        "Integrated team staffing calendars."
      ],
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      iconColorDark: "text-emerald-300",
      glowBorder: "border-emerald-500/30",
      glowShadow: "shadow-emerald-500/20",
      hoverShadow: "hover:shadow-emerald-500/10",
      bulletColor: "bg-emerald-400",
      hoverBg: "hover:bg-emerald-50",
      groupHoverText: "group-hover:text-emerald-600"
    },
    {
      id: "payroll-coordination",
      icon: FileText,
      title: "Payroll Coordination",
      description: "Generate payroll-ready data and reduce manual reconciliation.",
      bulletPoints: [
        "Automated syncing of attendance & leaves.",
        "One-click payroll-ready data exports.",
        "Eliminate manual reconciliation errors.",
        "Secure digital payslip distribution."
      ],
      iconBg: "bg-rose-50",
      iconColor: "text-rose-600",
      iconColorDark: "text-rose-300",
      glowBorder: "border-rose-500/30",
      glowShadow: "shadow-rose-500/20",
      hoverShadow: "hover:shadow-rose-500/10",
      bulletColor: "bg-rose-400",
      hoverBg: "hover:bg-rose-50",
      groupHoverText: "group-hover:text-rose-600"
    },
    {
      id: "performance-management",
      icon: Target,
      title: "Performance & Goal Management",
      description: "Set goals, run reviews, capture feedback and track employee development.",
      bulletPoints: [
        "Set and track company-aligned OKRs.",
        "Conduct 360-degree reviews seamlessly.",
        "Capture continuous peer feedback.",
        "Identify and retain top performers."
      ],
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
      iconColorDark: "text-orange-300",
      glowBorder: "border-orange-500/30",
      glowShadow: "shadow-orange-500/20",
      hoverShadow: "hover:shadow-orange-500/10",
      bulletColor: "bg-orange-400",
      hoverBg: "hover:bg-orange-50",
      groupHoverText: "group-hover:text-orange-600"
    },
    {
      id: "communication",
      icon: Megaphone,
      title: "Communication & Engagement",
      description: "Keep employees informed with announcements, notices and company updates.",
      bulletPoints: [
        "Interactive company announcement boards.",
        "Targeted messaging by department.",
        "Anonymous employee pulse surveys.",
        "Centralized hub for company handbooks."
      ],
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      iconColorDark: "text-purple-300",
      glowBorder: "border-purple-500/30",
      glowShadow: "shadow-purple-500/20",
      hoverShadow: "hover:shadow-purple-500/10",
      bulletColor: "bg-purple-400",
      hoverBg: "hover:bg-purple-50",
      groupHoverText: "group-hover:text-purple-600"
    }
  ];

  return (
    <section id="resources" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] -translate-y-1/2 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] translate-y-1/2 opacity-60 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            Everything you need. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">One intelligent platform.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-medium">
            Replace dozens of fragmented tools with a single, deeply integrated suite designed specifically for modern HR teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {features.map((feature, i) => {
            return (
              <div
                key={i}
                className={`group bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl transition-all duration-500 relative overflow-hidden hover:-translate-y-2 hover:border-slate-700 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] ${feature.hoverShadow} h-[380px] lg:h-[420px]`}
              >
                {/* Default State */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col items-center justify-center text-center transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-translate-y-8 bg-slate-900">
                  <div className={`w-16 h-16 rounded-full bg-slate-800/50 ${feature.iconColorDark} flex items-center justify-center mb-6 border ${feature.glowBorder} shadow-[0_0_15px_rgba(0,0,0,0.5)] ${feature.glowShadow}`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className={`text-xl lg:text-2xl font-bold text-white leading-tight px-4`}>
                    {feature.title}
                  </h3>
                  <div className={`absolute bottom-8 flex items-center gap-2 text-xs font-bold tracking-widest uppercase ${feature.iconColorDark}`}>
                    HOVER TO OPEN <ArrowRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Hover State */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col transition-all duration-500 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-slate-900">
                  <h3 className={`text-xl font-bold text-white mb-5 pb-5 border-b border-slate-800 leading-tight`}>
                    {feature.title}
                  </h3>
                  <ul className="space-y-4 flex-grow overflow-y-auto pr-2">
                    {feature.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${feature.bulletColor}`} />
                        <span className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
