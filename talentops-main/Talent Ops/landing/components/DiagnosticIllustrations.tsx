import React from 'react';

export const BurnoutIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="burnout-grad" x1="200" y1="50" x2="200" y2="150" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF4D4D" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#991B1B" stopOpacity="0.2" />
      </linearGradient>
      <radialGradient id="burnout-glow" cx="200" cy="100" r="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF4D4D" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FF4D4D" stopOpacity="0" />
      </radialGradient>
      <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" />
      </filter>
    </defs>
    
    {/* Background Grid */}
    <path d="M0 50 L400 50 M0 100 L400 100 M0 150 L400 150 M100 0 L100 200 M200 0 L200 200 M300 0 L300 200" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
    
    {/* Network Lines */}
    <path d="M100 100 L200 100 L300 60" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
    <path d="M140 160 L200 100 L260 160" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
    
    {/* Healthy Nodes */}
    <circle cx="100" cy="100" r="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
    <circle cx="300" cy="60" r="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
    <circle cx="140" cy="160" r="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
    <circle cx="260" cy="160" r="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
    
    {/* Burnout Node */}
    <circle cx="200" cy="100" r="40" fill="url(#burnout-glow)" filter="url(#blur)" />
    <circle cx="200" cy="100" r="24" fill="url(#burnout-grad)" stroke="#FF4D4D" strokeWidth="3" />
    <circle cx="200" cy="100" r="32" fill="none" stroke="#FF4D4D" strokeWidth="1" strokeDasharray="6 6">
      <animateTransform attributeName="transform" type="rotate" from="0 200 100" to="360 200 100" dur="4s" repeatCount="indefinite" />
    </circle>
    
    {/* Warning Sparks */}
    <path d="M200 60 L200 50 M240 100 L250 100 M160 100 L150 100" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const AccountabilityIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="card-grad" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000" floodOpacity="0.3" />
      </filter>
    </defs>
    
    {/* Grid */}
    <path d="M0 50 L400 50 M0 100 L400 100 M0 150 L400 150" stroke="rgba(255,255,255,0.03)" />
    
    {/* Aligned Tasks */}
    <g transform="translate(80, 70)" filter="url(#shadow)">
      <rect width="80" height="60" rx="8" fill="url(#card-grad)" stroke="#334155" strokeWidth="1" />
      <rect x="15" y="15" width="30" height="4" rx="2" fill="#475569" />
      <rect x="15" y="25" width="50" height="4" rx="2" fill="#334155" />
      <circle cx="65" cy="45" r="6" fill="#10B981" />
    </g>
    
    <g transform="translate(140, 50)" filter="url(#shadow)">
      <rect width="80" height="60" rx="8" fill="url(#card-grad)" stroke="#334155" strokeWidth="1" />
      <rect x="15" y="15" width="30" height="4" rx="2" fill="#475569" />
      <rect x="15" y="25" width="50" height="4" rx="2" fill="#334155" />
      <circle cx="65" cy="45" r="6" fill="#10B981" />
    </g>
    
    {/* Slipped Task */}
    <g transform="translate(220, 90) rotate(12)" filter="url(#shadow)">
      <rect width="80" height="60" rx="8" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
      <rect x="15" y="15" width="30" height="4" rx="2" fill="#F59E0B" opacity="0.8" />
      <rect x="15" y="25" width="50" height="4" rx="2" fill="#334155" />
      <path d="M60 40 L70 50 M70 40 L60 50" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="30" r="40" fill="#F59E0B" filter="blur(20px)" opacity="0.15" />
    </g>
  </svg>
);

export const CapacityIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="purple-grad" x1="0" y1="0" x2="0" y2="100">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    
    {/* Grid Background */}
    <path d="M0 100 L400 100" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" />
    
    {/* Base fulcrum */}
    <path d="M200 150 L220 180 L180 180 Z" fill="#1E293B" stroke="#475569" strokeWidth="2" />
    
    {/* Tilted Scale Bar */}
    <g transform="rotate(12, 200, 150)">
      <rect x="80" y="146" width="240" height="8" rx="4" fill="#334155" stroke="#475569" strokeWidth="1" />
      
      {/* Light side (Left) */}
      <rect x="100" y="106" width="40" height="40" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="2" />
      <circle cx="120" cy="126" r="8" fill="#10B981" opacity="0.5" />
      
      {/* Heavy side (Right) */}
      <rect x="250" y="66" width="60" height="80" rx="8" fill="url(#purple-grad)" stroke="#8B5CF6" strokeWidth="2" />
      <rect x="250" y="66" width="60" height="80" rx="8" fill="#8B5CF6" opacity="0.1" filter="blur(15px)" />
      
      {/* Heavy warning indicators */}
      <path d="M280 90 L280 120 M270 110 L280 120 L290 110" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export const SystemsIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="system-grad" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
    </defs>
    
    {/* Left System Block */}
    <path d="M80 60 h 80 v 80 h -80 z" fill="url(#system-grad)" stroke="#475569" strokeWidth="2" rx="12" />
    <circle cx="120" cy="100" r="15" fill="#334155" />
    <path d="M160 100 L200 100" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
    
    {/* Right System Block */}
    <path d="M240 60 h 80 v 80 h -80 z" fill="url(#system-grad)" stroke="#475569" strokeWidth="2" rx="12" />
    <circle cx="280" cy="100" r="15" fill="#334155" />
    <path d="M200 100 L240 100" stroke="#475569" strokeWidth="6" strokeLinecap="round" strokeDasharray="4 8" />
    
    {/* Disconnect Warning */}
    <circle cx="200" cy="100" r="30" fill="#EF4444" opacity="0.1" filter="blur(10px)" />
    <path d="M190 90 L210 110 M210 90 L190 110" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
    
    {/* Floating Data Particles (Lost) */}
    <circle cx="180" cy="70" r="3" fill="#EF4444" />
    <circle cx="210" cy="130" r="2" fill="#EF4444" />
    <circle cx="220" cy="80" r="4" fill="#EF4444" />
  </svg>
);

export const OverheadIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cost-grad" x1="0" y1="0" x2="0" y2="100">
        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#0891B2" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    
    {/* Base Platform */}
    <ellipse cx="200" cy="160" rx="100" ry="20" fill="#1E293B" stroke="#475569" strokeWidth="2" />
    
    {/* Healthy Stacks */}
    <g transform="translate(130, 140)">
      <ellipse cx="0" cy="0" rx="20" ry="8" fill="#334155" stroke="#475569" strokeWidth="1" />
      <ellipse cx="0" cy="-10" rx="20" ry="8" fill="#334155" stroke="#475569" strokeWidth="1" />
      <ellipse cx="0" cy="-20" rx="20" ry="8" fill="#334155" stroke="#475569" strokeWidth="1" />
    </g>
    
    <g transform="translate(170, 145)">
      <ellipse cx="0" cy="0" rx="20" ry="8" fill="#334155" stroke="#475569" strokeWidth="1" />
      <ellipse cx="0" cy="-10" rx="20" ry="8" fill="#334155" stroke="#475569" strokeWidth="1" />
    </g>
    
    {/* Overhead Giant Stack / Weight */}
    <g transform="translate(240, 130)">
      <rect x="-30" y="-80" width="60" height="90" rx="8" fill="url(#cost-grad)" stroke="#06B6D4" strokeWidth="2" />
      <path d="M-15 -40 L15 -40" stroke="#fff" strokeWidth="2" opacity="0.5" />
      <path d="M-15 -30 L15 -30" stroke="#fff" strokeWidth="2" opacity="0.5" />
      <circle cx="0" cy="-35" r="40" fill="#06B6D4" filter="blur(20px)" opacity="0.2" />
    </g>
    
    {/* Pressure lines */}
    <path d="M210 170 L270 170" stroke="#06B6D4" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
);

export const PerformanceIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="chart-area" x1="0" y1="0" x2="0" y2="150">
        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    {/* Chart Grid */}
    <path d="M50 40 L350 40 M50 80 L350 80 M50 120 L350 120 M50 160 L350 160" stroke="#1E293B" strokeWidth="1" />
    <path d="M100 40 L100 160 M150 40 L150 160 M200 40 L200 160 M250 40 L250 160 M300 40 L300 160" stroke="#1E293B" strokeWidth="1" />
    
    {/* Data Line & Area */}
    <path d="M50 160 L50 80 L120 60 L190 70 L260 140 L350 150 L350 160 Z" fill="url(#chart-area)" />
    <path d="M50 80 L120 60 L190 70 L260 140 L350 150" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Data Points */}
    <circle cx="120" cy="60" r="5" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
    <circle cx="190" cy="70" r="5" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
    
    {/* Sharp Drop Marker */}
    <circle cx="260" cy="140" r="6" fill="#10B981" filter="blur(4px)" />
    <circle cx="260" cy="140" r="5" fill="#EF4444" stroke="#fff" strokeWidth="2" />
    <circle cx="350" cy="150" r="5" fill="#EF4444" stroke="#fff" strokeWidth="2" />
    
    {/* Warning Arrow */}
    <path d="M260 90 L260 125 M250 115 L260 125 L270 115" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
