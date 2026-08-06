"use client";
import React from "react";
import { motion } from "framer-motion";

export function VisionSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-primary-900 text-center text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary-200 font-semibold text-sm mb-8 border border-white/20 uppercase tracking-wider">
            Our Vision
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-10 leading-[1.1] tracking-tight">
            Building the future of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-400">
              Workforce Operations
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-primary-100/80 leading-relaxed font-medium bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-sm max-w-3xl">
            "Our vision is to build an intelligent workforce operating system that enables organizations to manage people, automate operations, and create exceptional employee experiences through innovation and technology."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
