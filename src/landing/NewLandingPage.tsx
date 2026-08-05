import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoreFeaturesSection } from "@/components/sections/CoreFeaturesSection";
import { RoleBasedBenefitsSection } from "@/components/sections/RoleBasedBenefitsSection";
import { BusinessBenefitsSection } from "@/components/sections/BusinessBenefitsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { DashboardShowcaseSection } from "@/components/sections/DashboardShowcaseSection";

export function NewLandingPage() {
  return (
    <div className="min-h-screen bg-brand-950 text-white font-sans antialiased selection:bg-brand-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <RoleBasedBenefitsSection />
        <CoreFeaturesSection />
        <DashboardShowcaseSection />
        <BusinessBenefitsSection />
        <ComparisonSection />
        <FinalCTASection />
        <VisionSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
