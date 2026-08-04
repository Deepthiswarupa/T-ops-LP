import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { TestimonialsSection } from './ui/testimonial-v2';

const results = [
  {
    metric: '40%',
    value: 40,
    suffix: '%',
    label: 'Reduction in Time-to-Hire'
  },
  {
    metric: '3x',
    value: 3,
    suffix: 'x',
    label: 'Improvement in Retention Rates'
  },
  {
    metric: '65%',
    value: 65,
    suffix: '%',
    label: 'Increase in Manager Confidence'
  },
  {
    metric: '25%',
    value: 25,
    suffix: '%',
    label: 'Boost in Team Productivity'
  }
];

function AnimatedNumber({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function MetricCard({ result, index }: { result: typeof results[0]; index: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(18, 18, 18, 0.08)" }}
      className="p-8 bg-gradient-to-br from-[#e3f2fd] to-[#f7f7f9] border border-[#dadada] rounded-xl text-center transition-all"
    >
      <div className="text-5xl md:text-6xl text-[#121212] mb-3 tracking-tight">
        <AnimatedNumber value={result.value} suffix={result.suffix} isInView={isInView} />
      </div>
      <div className="text-[#121212] opacity-70">
        {result.label}
      </div>
    </motion.div>
  );
}

export default function Results() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="results" className="py-32 bg-white">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#121212] tracking-tight">
            What Changes After TalentOps
          </h2>
          <p className="text-xl text-[#121212] opacity-60 max-w-2xl mx-auto">
            Real outcomes from organizations that chose operational clarity.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {results.map((result, index) => (
            <MetricCard key={index} result={result} index={index} />
          ))}
        </div>
      </div>
      
      {/* Testimonials */}
      <TestimonialsSection />
    </section>
  );
}
