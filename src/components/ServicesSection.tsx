import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pillars = [
  {
    emoji: "🛍️",
    title: "Product & Collection Page Revenue SEO",
    features: [
      "Product title, description & schema optimization",
      "Collection page SEO — the most overlooked opportunity",
      "Programmatic long-tail pages for every variant",
      "Internal linking architecture for category queries",
      "Rewrite Until It Ranks guarantee",
    ],
  },
  {
    emoji: "🤖",
    title: "AI Shopping Optimisation (GEO)",
    features: [
      "AI-answer-ready product copy with structured data",
      "Schema markup for every product variant",
      "GEO for category & comparison queries",
      "AI Citation Score tracking (what % of queries mention you?)",
      "Auto-updates as LLMs evolve & new platforms emerge",
    ],
  },
  {
    emoji: "📊",
    title: "Revenue Attribution Reporting",
    features: [
      "GA4 + Shopify integration — not guessing",
      "Revenue-per-keyword breakdown by AI source",
      "AI Citation Share dashboard (real-time visibility %)",
      "Monthly revenue report your CEO will love",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
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
              What You Get
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything Your Shopify Store Needs to <span className="text-cyan">Win Organic Revenue</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These integrated systems working in parallel — not just long posts, but the complete organic revenue engine for DTC brands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-cyan/30 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-6">{pillar.emoji}</div>
                <span className="text-cyan font-semibold text-xs uppercase tracking-wider">
                  PILLAR 0{index + 1}
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-6 text-navy">
                  {pillar.title}
                </h3>
                <ul className="space-y-3">
                  {pillar.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex gap-3 text-sm text-foreground/70">
                      <Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
