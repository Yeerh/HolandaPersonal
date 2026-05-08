import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Navbar } from "../components/Navbar";
import { AboutSection } from "../sections/AboutSection";
import { BenefitsSection } from "../sections/BenefitsSection";
import { CTASection } from "../sections/CTASection";
import { Footer } from "../sections/Footer";
import { HeroSection } from "../sections/HeroSection";
import { PricingSection } from "../sections/PricingSection";
import { TransformationSection } from "../sections/TransformationSection";

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TransformationSection />
        <PricingSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
