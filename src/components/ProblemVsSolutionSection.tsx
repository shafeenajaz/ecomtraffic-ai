import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ProblemVsSolutionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Search Is Changing <span className="text-cyan">Fast</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left column - Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl border border-border bg-white/50"
          >
            <h3 className="text-2xl font-bold text-muted-foreground mb-6">Old Way</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-muted-foreground text-lg">●</span>
                <span className="text-muted-foreground">People will Google for suggestions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground text-lg">●</span>
                <span className="text-muted-foreground">Check Reddit for people's opinions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground text-lg">●</span>
                <span className="text-muted-foreground">The First few results would get 90%+ of the traffic</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Investing in SEO would get you huge returns.
            </p>
          </motion.div>

          {/* Right column - New Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl border-2 border-cyan bg-white"
          >
            <h3 className="text-2xl font-bold text-cyan mb-6">New Way</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <span className="text-cyan text-lg">●</span>
                <span className="text-foreground">800m+ people rely on ChatGPT weekly.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan text-lg">●</span>
                <span className="text-foreground">Over 54% of Google searches now have AI overviews, with this number growing weekly.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan text-lg">●</span>
                <span className="text-foreground">The average AI lead spends $49 vs Average Google lead spends $9 (Study by Onely)</span>
              </li>
            </ul>
            <p className="text-foreground mb-6">
              Investing in AI Visibility should be top of mind for every ecommerce business.
            </p>
            <a href="https://ecomtrafficai.odoo.com/appointment/1" className="w-full block">
              <Button className="w-full bg-cyan hover:bg-cyan/90 text-white rounded-full font-semibold">
                Schedule AI Visibility Audit →
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemVsSolutionSection;
