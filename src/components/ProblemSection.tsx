import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-rose-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-red-100 border border-red-200 mb-6">
            <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
              The Core Problem
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            If AI Can't Read Your Shopify Store,{" "}
            <span className="text-red-600">You're Losing Revenue Every Day</span>
          </h2>

          <p className="text-lg text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            LLMs can't parse unstructured product data. They don't see your categories. They don't understand your competitive positioning — or that you're a better alternative than your competitors. They give your market share to brands they can read.
          </p>

          <a href="https://ecomtrafficai.odoo.com/appointment/1">
            <Button className="bg-navy hover:bg-navy/90 text-white rounded-full px-6 py-3 flex items-center gap-2 font-semibold mx-auto">
              Audit My Store's AI Visibility — Free <ArrowRight className="w-4 h-4" />
            </Button>
          </a>

          <p className="text-sm text-foreground/60 mt-6">
            No commitment. See exactly where you're invisible in 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
