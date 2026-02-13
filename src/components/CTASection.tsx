import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-cyan/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Become <span className="text-cyan">AI-Visible</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Don't let competitors capture this huge chunk of traffic. Whether you're on Shopify, BigCommerce, or a headless platform, we'll make your products discoverable and get you high converting traffic.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://ecomtrafficai.odoo.com/appointment/1" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                Schedule Your Free Audit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Free AI Discoverability Audit • No commitment required
          </p>

          {/* Target market note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground">
              Ideal for growth-oriented e-commerce brands with <span className="font-medium text-foreground">$1M–$50M annual revenue</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
