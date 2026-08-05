"use client";
import React from "react";
import { 
  Users, CalendarClock, PlaneTakeoff, CircleDollarSign, 
  Target, Network, MessageSquare, CalendarDays, 
  LifeBuoy, BarChart3, Shield 
} from "lucide-react";

export function CoreFeaturesSection() {
  const features = [
    { icon: Users, title: "Employee Management", desc: "Digital employee records, documents, and assets." },
    { icon: CalendarClock, title: "Attendance & Timecards", desc: "Automated tracking, shifts, and biometric integrations." },
    { icon: PlaneTakeoff, title: "Leave Management", desc: "Custom policies, approval workflows, and balances." },
    { icon: CircleDollarSign, title: "Payroll & Payslips", desc: "Automated calculations, taxes, and self-serve payslips." },
    { icon: Target, title: "Performance Reviews", desc: "Goals, 360 feedback, and continuous appraisals." },
    { icon: Network, title: "Organization Hierarchy", desc: "Dynamic org charts and reporting lines." },
    { icon: MessageSquare, title: "Internal Messaging", desc: "Team announcements and direct communication." },
    { icon: CalendarDays, title: "Calendar & Events", desc: "Holidays, work anniversaries, and company events." },
    { icon: LifeBuoy, title: "Helpdesk", desc: "Internal ticketing system for HR requests." },
    { icon: BarChart3, title: "Reports & Analytics", desc: "Deep insights into headcount, turnover, and costs." },
    { icon: Shield, title: "Security & Roles", desc: "Granular access controls and data encryption." },
  ];

  return (
    <section id="features" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Everything You Need. Nothing You Don't.</h2>
          <p className="text-lg text-slate-400">
            A complete suite of tools to manage your workforce seamlessly. Explore our comprehensive feature set.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-900/80 border-brand-800 text-accent-400 flex items-center justify-center shrink-0 shadow-sm">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
