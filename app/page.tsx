import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DiagnosticHook from "@/components/DiagnosticHook";
import AudienceSplit from "@/components/AudienceSplit";
import ProblemSection from "@/components/ProblemSection";
import CostOfFailure from "@/components/CostOfFailure";
import WhatWeDo from "@/components/WhatWeDo";
import DiagnosticSection from "@/components/DiagnosticSection";
import PositioningSection from "@/components/PositioningSection";
import WhyFedXaaS from "@/components/WhyFedXaaS";
import CredibilitySection from "@/components/CredibilitySection";
import WaitlistForm from "@/components/WaitlistForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <DiagnosticHook />
        <AudienceSplit />
        <ProblemSection />
        <CostOfFailure />
        <WhatWeDo />
        <DiagnosticSection />
        <PositioningSection />
        <WhyFedXaaS />
        <CredibilitySection />
        <WaitlistForm />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
