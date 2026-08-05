import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TestimonialsSection } from '../../components/ui/testimonial-v2';

const results = [
  {
    metric: '40%',
    value: 40,
    suffix: '%',
    label: 'Faster Time to Hire'
  },
  {
    metric: '3x',
    value: 3,
    suffix: 'x',
    label: 'Better Retention Rates'
  },
  {
    metric: '65%',
    value: 65,
    suffix: '%',
    label: 'More Confident Managers'
  },
  {
    metric: '25%',
    value: 25,
    suffix: '%',
    label: 'Higher Team Productivity'
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
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
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
  return (
    <section id="results" className="py-20 bg-white">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[42px] md:text-[48px] lg:text-[52px] mb-6 text-[#1f2937] font-heading font-semibold tracking-tight leading-[1.15]"
          >
            Real Results
          </motion.h2>
          <p className="text-[18px] text-[rgba(31,41,55,0.85)] font-serif leading-[1.7] max-w-[640px] mx-auto">
            What happens when you bring structure to your talent operations.
          </p>
        </div>

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
