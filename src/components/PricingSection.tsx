import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import { ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$149",
    period: "/month",
    description: "Perfect for testing AI visibility",
    cta: "Get Started",
    featured: false,
    features: [
      "10 product/collection optimisations/month",
      "Technical SEO audit",
      "AI schema setup",
      "Keyword research refresh",
      "Search Console reporting",
      "30-day guarantee",
    ],
  },
  {
    name: "Growth",
    price: "$499",
    period: "/month",
    description: "Most popular for DTC brands",
    cta: "Start Growing",
    featured: true,
    badge: "Most Popular",
    features: [
      "25+ pages optimised/month",
      "Rewrite Until It Ranks guarantee",
      "Shopify revenue attribution",
      "AI Citation Score tracking",
      "Competitor gap analysis",
      "Priority support",
      "Monthly strategy calls",
    ],
  },
  {
    name: "Pro",
    price: "$999",
    period: "/month",
    description: "For ambitious growth-stage brands",
    cta: "Talk to a Strategist",
    featured: false,
    features: [
      "Dedicated strategist",
      "Advanced AI shopping optimisation",
      "Programmatic SEO",
      "Backlink outreach",
      "Custom GA4+Shopify dashboard",
      "Quarterly strategy sessions",
      "Priority 24h support",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
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
              Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Agency-Level Results. <span className="text-cyan">Not Agency Pricing.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Traditional ecommerce SEO agencies charge $1,139-$5,000/month for less sophisticated strategies. We deliver more, cost less, and guarantee results. No long-term contracts.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl border transition-all duration-300 ${
                tier.featured
                  ? "bg-navy border-cyan p-8 text-white shadow-xl scale-105 md:scale-100"
                  : "bg-card border-border p-8 hover:border-cyan/30 hover:shadow-lg"
              }`}
            >
              {tier.badge && (
                <div className="inline-block px-3 py-1 rounded-full bg-cyan/20 text-cyan text-xs font-semibold uppercase tracking-wider mb-4">
                  {tier.badge}
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${tier.featured ? "text-white" : "text-navy"}`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 ${tier.featured ? "text-white/70" : "text-muted-foreground"}`}>
                {tier.description}
              </p>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${tier.featured ? "text-white" : "text-navy"}`}>
                  {tier.price}
                </span>
                <span className={`text-sm ${tier.featured ? "text-white/70" : "text-muted-foreground"}`}>
                  {tier.period}
                </span>
              </div>

              <a href="https://ecomtrafficai.odoo.com/appointment/1" className="w-full block mb-8">
                <Button
                  className={`w-full rounded-full py-3 font-semibold flex items-center justify-center gap-2 ${
                    tier.featured
                      ? "bg-cyan text-navy hover:bg-cyan/90"
                      : "bg-navy text-white hover:bg-navy/90"
                  }`}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <ul className="space-y-3">
                {tier.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className={`flex gap-3 text-sm ${
                      tier.featured ? "text-white/80" : "text-foreground/70"
                    }`}
                  >
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.featured ? "text-cyan" : "text-cyan"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 30-Day Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-cyan/5 border border-cyan/20 rounded-2xl p-8 flex gap-6"
        >
          <div className="flex-shrink-0">
            <Shield className="w-8 h-8 text-cyan" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy mb-2">30-Day Early Results Guarantee</h3>
            <p className="text-foreground/70 leading-relaxed">
              Within 30 days we deliver your AI Visibility Audit — a comprehensive analysis of your rankings in AI searches, competitor analysis, and a full roadmap. If we don't believe we can move the needle, we'll tell you honestly. No commitment required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
