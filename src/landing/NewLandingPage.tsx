import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedCompaniesSection } from "@/components/sections/TrustedCompaniesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyTalentOpsSection } from "@/components/sections/WhyTalentOpsSection";
import { DashboardShowcaseSection } from "@/components/sections/DashboardShowcaseSection";
import { RoleBasedBenefitsSection } from "@/components/sections/RoleBasedBenefitsSection";
import { AiAutomationSection } from "@/components/sections/AiAutomationSection";
import { ContactSalesSection } from "@/components/sections/ContactSalesSection";
import { ActionableInsightsSection } from "@/components/sections/ActionableInsightsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export function NewLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <WhyTalentOpsSection />
        <RoleBasedBenefitsSection />
        <AiAutomationSection />
        <ActionableInsightsSection />
        <ContactSalesSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
