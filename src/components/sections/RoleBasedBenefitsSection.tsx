"use client";
import React from "react";
import { motion } from "framer-motion";
import { UserCircle, Briefcase, Users } from "lucide-react";

export function RoleBasedBenefitsSection() {
  const roles = [
    {
      id: "employees",
      icon: UserCircle,
      title: "For Employees",
      color: "text-emerald-400 bg-emerald-900/20",
      borderColor: "border-emerald-500/50",
      dotColor: "bg-emerald-500",
      features: [
        "Self-service portal",
        "Attendance tracking",
        "Leave requests",
        "Payslip access",
        "Company policies",
        "Internal communication",
        "Personal profile management"
      ]
    },
    {
      id: "hr",
      icon: Briefcase,
      title: "For HR Teams",
      color: "text-purple-400 bg-purple-900/20",
      borderColor: "border-purple-500/50",
      dotColor: "bg-purple-500",
      features: [
        "Employee administration",
        "Attendance monitoring",
        "Leave approvals",
        "Payroll management",
        "Workforce reporting",
        "Compliance support",
        "Organization management"
      ]
    },
    {
      id: "managers",
      icon: Users,
      title: "For Managers",
      color: "text-amber-400 bg-amber-900/20",
      borderColor: "border-amber-500/50",
      dotColor: "bg-amber-500",
      features: [
        "Team visibility",
        "Performance reviews",
        "Attendance insights",
        "Team collaboration",
        "Organizational communication",
        "Workforce planning"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-100 mb-6">How TalentOps Helps</h2>
          <p className="text-lg text-slate-400 font-medium">
            A unified platform that delivers value to everyone in your organization, tailored to their specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, type: "spring", bounce: 0.4 }}
              className={`bg-[#111] rounded-3xl p-8 shadow-xl border ${role.borderColor} hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className={`w-14 h-14 rounded-xl ${role.color} flex items-center justify-center mb-6`}>
                <role.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-200 mb-6">{role.title}</h3>
              <ul className="space-y-4">
                {role.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-400 font-medium">
                    <div className={`w-1.5 h-1.5 rounded-full ${role.dotColor}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
