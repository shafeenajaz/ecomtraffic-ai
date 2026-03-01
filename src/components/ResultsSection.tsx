import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const results = [
  {
    category: "Skincare / Beauty DTC",
    stat: "+252%",
    metric: "Search Visibility",
    description: "Shifted from invisible to top 3 AI recommendations for 40+ related queries.",
    timeline: "6 months",
    size: "$1.2M annual revenue",
  },
  {
    category: "DTC Apparel",
    stat: "13x",
    metric: "AI Search Visibility",
    description: "Programmatic SEO targeting lower competition questions. Built 3x the product content.",
    timeline: "4 months",
    size: "$2.4M annual revenue",
  },
  {
    category: "Home Goods / D2C",
    stat: "+82%",
    metric: "Organic Revenue",
    description: "Collection page SEO + internal linking. Organic became their 2nd channel within AI searches.",
    timeline: "5 months",
    size: "$3.5M annual revenue",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
            <span className="text-xs font-semibold text-cyan uppercase tracking-wider">
              Client Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Happens When Shopify Stores <span className="text-cyan">Get AI-Optimised</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real outcomes from real DTC brands. Measured in the metrics that matter: traffic and revenue.
          </p>
        </motion.div>

        {/* Results Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <motion.div
              key={result.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-8 hover:border-cyan/30 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider">
                {result.category}
              </span>

              <div className="my-6">
                <div className="text-4xl md:text-5xl font-bold text-cyan mb-2">
                  {result.stat}
                </div>
                <div className="text-lg font-semibold text-navy">
                  {result.metric}
                </div>
              </div>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                {result.description}
              </p>

              <div className="border-t border-border/50 pt-6 space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Timeline:</span> {result.timeline}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Brand Size:</span> {result.size}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a href="https://ecomtrafficai.odoo.com/appointment/1">
            <Button className="bg-navy hover:bg-navy/90 text-white rounded-full px-6 py-3 flex items-center gap-2 font-semibold mx-auto">
              Get My Free AI Traffic Audit <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
