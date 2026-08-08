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
    <section className="py-24 bg-blue-950 border-b-[16px] border-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-500 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-blue-100">
              Everything you need to know about the product and billing.
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg shadow-blue-900/20 hover:shadow-xl transition-shadow"
            >
              <button
                suppressHydrationWarning
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-semibold text-lg pr-8 transition-colors ${openIndex === i ? 'text-blue-600' : 'text-slate-900'}`}>{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                  <ChevronDown className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    openIndex === i && "rotate-180"
                  )} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed pt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
