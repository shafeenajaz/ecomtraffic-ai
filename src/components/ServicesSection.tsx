import { motion } from "framer-motion";
import { Search, Zap, BarChart3, ShoppingBag, FileCode, RefreshCcw } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "AI Discoverability Audit",
    description: "Comprehensive review of your catalog, content, schema markup, and competitor positioning in LLM responses. Includes a prioritized 90-day roadmap.",
    pillar: "Foundation",
  },
  {
    icon: FileCode,
    title: "Content & Data Optimization",
    description: "Transform product titles, descriptions, attributes, and FAQs for semantic richness and LLM understanding. We make your data AI-friendly.",
    pillar: "Foundation",
  },
  {
    icon: ShoppingBag,
    title: "Shopify UCP Configuration",
    description: "Configure Agentic Storefronts and Universal Commerce Protocol to surface products in Gemini, AI Mode, and Copilot with direct checkout.",
    pillar: "Integration",
  },
  {
    icon: Zap,
    title: "LLMs.txt & Feed Setup",
    description: "Implement LLMs.txt files, Feedonomics integrations, and structured product feeds for BigCommerce and headless platforms.",
    pillar: "Integration",
  },
  {
    icon: BarChart3,
    title: "AI Visibility Tracking",
    description: "Monthly audits across ChatGPT, Gemini, Perplexity, and Copilot. Track brand mentions, position, sentiment, and attribute to AI-driven revenue.",
    pillar: "Optimization",
  },
  {
    icon: RefreshCcw,
    title: "Continuous Optimization",
    description: "A/B testing data formats, updating feeds for new products and promotions, adapting to algorithm changes. Monthly dashboard reporting included.",
    pillar: "Optimization",
  },
];

const pillarColors: Record<string, string> = {
  Foundation: "bg-cyan/20 text-cyan",
  Integration: "bg-emerald-500/20 text-emerald-400",
  Optimization: "bg-amber-500/20 text-amber-400",
};

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
          <span className="text-cyan font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Full-Stack AI Commerce Enablement
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three pillars designed to make your products visible, shoppable, and measurable across every major AI platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-cyan/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-cyan/10 transition-colors">
                    <service.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${pillarColors[service.pillar]}`}>
                    {service.pillar}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-navy">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Platform expertise</p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-navy/60 font-medium">
            <span>Shopify</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>BigCommerce</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Headless / Custom</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
