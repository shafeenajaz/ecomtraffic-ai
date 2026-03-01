import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemVsSolutionSection from "@/components/ProblemVsSolutionSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResultsSection from "@/components/ResultsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemVsSolutionSection />
        <ProblemSection />
        <ServicesSection />
        <HowItWorksSection />
        <ResultsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
