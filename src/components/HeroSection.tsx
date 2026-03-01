import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-cyan/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-6"
            >
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider">
                For Shopify DTC Brands Doing $500K-$10M
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Your Shopify Store Should Be{" "}
              <span className="text-cyan font-bold">Generating Revenue</span> From AI Search —
              Not Missing It
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              We give your organic & AI search revenue — optimizing your product pages, collection pages, and brand for Google, ChatGPT, Perplexity, and Gemini. Fully managed. No agency markup. Revenue reported monthly.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a href="https://ecomtrafficai.odoo.com/appointment/1">
                <Button className="bg-navy hover:bg-navy/90 text-white rounded-full px-6 py-3 flex items-center gap-2 font-semibold">
                  Get Your Free AI Traffic Audit <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="#results" className="flex items-center gap-2 text-cyan font-semibold hover:opacity-80 transition-opacity">
                See Client Results <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="border-t border-border/50 pt-8 grid grid-cols-3 gap-4"
            >
              <div>
                <div className="text-2xl font-bold text-navy">30</div>
                <p className="text-xs text-muted-foreground">Days to first ranking signals</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan">6-23x</div>
                <p className="text-xs text-muted-foreground">ROI vs paid ads</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy">$0</div>
                <p className="text-xs text-muted-foreground">Agency markup, month-to-month</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - AI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-card rounded-2xl border-2 border-border p-6 shadow-xl">
              <div className="bg-navy rounded-xl p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-cyan rounded-full"></div>
                  <span className="text-sm font-semibold">ChatGPT</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-white/70">You:</p>
                    <p className="text-sm">Where can I find premium eco-friendly athletic wear?</p>
                  </div>
                  <div className="bg-cyan/10 border border-cyan/20 rounded-lg p-3">
                    <p className="text-sm text-white/70 mb-2">ChatGPT:</p>
                    <p className="text-sm">
                      <span className="text-cyan font-semibold">Your Brand</span> offers high-quality sustainable activewear with excellent customer reviews...
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                YOUR PRODUCTS VISIBLE ACROSS ALL AI PLATFORMS
              </div>
              <div className="mt-4 flex justify-center gap-3 flex-wrap">
                <span className="text-xs font-semibold text-foreground/60">ChatGPT</span>
                <span className="text-xs font-semibold text-foreground/60">Perplexity</span>
                <span className="text-xs font-semibold text-foreground/60">Gemini</span>
                <span className="text-xs font-semibold text-foreground/60">Google AI Overviews</span>
                <span className="text-xs font-semibold text-foreground/60">Copilot</span>
                <span className="text-xs font-semibold text-foreground/60">Google Search</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
