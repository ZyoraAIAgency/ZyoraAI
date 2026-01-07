import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { WhyZyoraSection } from "@/components/home/WhyZyoraSection";
import { OffersSection } from "@/components/home/OffersSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { ParallaxSection } from "@/components/home/ParallaxSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      <Navbar />
      
      <main>
        <HeroSection />
        
        <ParallaxSection speed={0.3}>
          <ServicesSection />
        </ParallaxSection>
        
        <ParallaxSection speed={0.2} direction="down">
          <HowItWorksSection />
        </ParallaxSection>
        
        <ParallaxSection speed={0.25}>
          <WhyZyoraSection />
        </ParallaxSection>
        
        <ParallaxSection speed={0.2} direction="down">
          <OffersSection />
        </ParallaxSection>
        
        <ParallaxSection speed={0.15}>
          <SocialProofSection />
        </ParallaxSection>
        
        <ParallaxSection speed={0.2}>
          <FAQSection />
        </ParallaxSection>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
