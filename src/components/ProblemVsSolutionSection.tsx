import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ProblemVsSolutionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
            <span className="text-xs font-semibold text-cyan uppercase tracking-wider">
              The Shift Happening Right Now
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Way Buyers Discover Products Has Changed Permanently
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            And most Shopify stores are completely invisible in the new landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column - Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border border-border bg-white/50"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Old Way - Fading Fast
            </div>
            <h3 className="text-xl font-bold text-muted-foreground mb-6">SEO was simple. Google was the only game.</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground line-through">
                <span className="text-lg">●</span>
                <span>Buyers searched directly on Google</span>
              </li>
              <li className="flex gap-3 text-muted-foreground line-through">
                <span className="text-lg">●</span>
                <span>Asked friends and checked Reddit for opinions</span>
              </li>
              <li className="flex gap-3 text-muted-foreground line-through">
                <span className="text-lg">●</span>
                <span>First few ranked links got 90% of traffic</span>
              </li>
              <li className="flex gap-3 text-muted-foreground line-through">
                <span className="text-lg">●</span>
                <span>Investing in SEO guaranteed organic growth</span>
              </li>
            </ul>
          </motion.div>

          {/* Right column - New Reality */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl border-2 border-cyan bg-white"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-cyan/10 text-xs font-semibold text-cyan uppercase tracking-wider mb-6">
              New Reality - Right Now
            </div>
            <h3 className="text-xl font-bold text-cyan mb-6">
              Buyers ask AI. AI asks your competitors. You lose the sale.
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-foreground">
                <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                <span><strong>800M+ users</strong> ask ChatGPT weekly for product recommendations</span>
              </li>
              <li className="flex gap-3 text-foreground">
                <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                <span><strong>Over 54%</strong> of Google searches now trigger an AI Overview before any search results</span>
              </li>
              <li className="flex gap-3 text-foreground">
                <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                <span><strong>The average AI-referred visitor</strong> spends 3x more than a Google visitor</span>
              </li>
              <li className="flex gap-3 text-foreground">
                <Check className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                <span><strong>Brands cited by AI</strong> are capturing the category — not just a ranking</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemVsSolutionSection;
