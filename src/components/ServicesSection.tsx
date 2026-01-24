import { motion } from "framer-motion";
import { ShoppingCart, Store, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: ShoppingCart,
    title: "AI Discoverability & Data Readiness",
    description: "Structure product data, content, and policies so LLMs can read to them support you in AI searchers.",
  },
  {
    icon: Store,
    title: "AI Commerce Integrations",
    description: "Implementation of native and third-party integrations that enable products to be purchased in AI environments to increase your sales without them ever visiting your site.",
  },
  {
    icon: TrendingUp,
    title: "Generative Engine Optimization",
    description: "Monthly optimization cycles to ensure increased suggestions, traffic and sales from AI.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What You Get With The <span className="text-cyan">AI Ecommerce Enablement Studio</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-cyan/10 transition-colors">
                  <pillar.icon className="w-6 h-6 text-cyan" />
                </div>
                <span className="text-cyan font-semibold text-xs uppercase tracking-wider">
                  PILLAR #{index + 1}
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-4 text-navy">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
