"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const faqs = [
    {
      question: "Who is TalentOps for?",
      answer: "TalentOps is designed for startups, SMEs, enterprises, and growing organizations that want to modernize workforce operations."
    },
    {
      question: "How does TalentOps improve HR operations?",
      answer: "It centralizes employee management, automates routine HR workflows, and provides real-time workforce insights."
    },
    {
      question: "Can employees access their own information?",
      answer: "Yes. Employees have secure self-service access to attendance, leave, payroll, documents, policies, and personal information."
    },
    {
      question: "Is TalentOps secure?",
      answer: "Yes. The platform uses enterprise-grade security, encrypted data storage, role-based access control, and cloud infrastructure."
    },
    {
      question: "Can the platform scale as our company grows?",
      answer: "Absolutely. TalentOps is built to support organizations from small teams to large enterprise workforces."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold font-serif text-slate-100 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#111] border border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-700 transition-all duration-300">
              <button
                suppressHydrationWarning
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-slate-200 text-lg">{faq.question}</span>
                <ChevronDown className={cn(
                  "w-5 h-5 text-slate-400 transition-transform duration-300",
                  openIndex === i && "rotate-180"
                )} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 font-medium leading-relaxed border-t border-slate-800 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
