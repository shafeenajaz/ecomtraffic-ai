import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              "NO COMMITMENT",
              "NO AGENCY MARKUP",
              "CANCEL ANYTIME",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold text-primary-foreground/70 uppercase tracking-wider border border-primary-foreground/20 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Find Out How Much Organic Revenue Your Shopify Store{" "}
            <span className="text-cyan">Is Currently Losing</span>
          </h2>

          <p className="text-lg text-primary-foreground/70 mb-10 leading-relaxed max-w-3xl mx-auto">
            We analyze your store's AI visibility, product page SEO readiness, and competitive positioning. Show your CEO where the opportunity lies — and how much revenue you're missing on every single day.
          </p>

          <a href="https://ecomtrafficai.odoo.com/appointment/1">
            <Button className="bg-cyan hover:bg-cyan/90 text-navy rounded-full px-6 py-3 flex items-center gap-2 font-semibold mx-auto">
              Get My Free AI Traffic Audit <ArrowRight className="w-4 h-4" />
            </Button>
          </a>

          <p className="mt-6 text-sm text-primary-foreground/60">
            Free Discoverability Audit • Results in 24 hours • No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
