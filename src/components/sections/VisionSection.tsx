"use client";
import React from "react";
import { motion } from "framer-motion";

export function VisionSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-950 text-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-brand-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-accent-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 mix-blend-screen" />
        
        {/* Subtle Particle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-brand-900 text-brand-300 font-bold text-2xl mb-8 border border-brand-800">
            Our Vision
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Building the future of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-brand-400">
              Workforce Operations
            </span>
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Our vision is to build an intelligent workforce operating system that enables organizations to manage people, automate operations, and create exceptional employee experiences through innovation and technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
