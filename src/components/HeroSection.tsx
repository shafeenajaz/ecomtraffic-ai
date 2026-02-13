import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const aiPlatforms = ["ChatGPT", "Perplexity", "Gemini", "Copilot"];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aiPlatforms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-cyan/10 via-cyan/5 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan" />
            <span className="text-sm font-medium text-navy">AI Ecommerce Enablement Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-red-700">Ecommerce Stores</span> Are Seeing A <br />
            Surge In Traffic From{" "}
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="gradient-text"
                >
                  {aiPlatforms[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed first-letter:capitalize"
          >
            Get Your Products Suggested By Major AI Language Models To Get Access To 800M+ Weekly Users
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://ecomtrafficai.odoo.com/appointment/1" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                Schedule AI-Visibility Audit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-12 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-6">Making Your Products Visible Across Major AI Platforms</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              <span className="text-xl font-semibold text-navy">Gemini</span>
              <span className="text-xl font-semibold text-navy">ChatGPT</span>
              <span className="text-xl font-semibold text-navy">Copilot</span>
              <span className="text-xl font-semibold text-navy">Perplexity</span>
              <span className="text-xl font-semibold text-navy">AI Mode</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
