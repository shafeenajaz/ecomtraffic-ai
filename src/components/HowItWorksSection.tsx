import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Store Analysis",
    description: "We audit your store, products, and content. We see how you stack up against your competitors.",
  },
  {
    number: "2",
    title: "Revenue-First Strategy",
    description: "We map high-intent queries where searchers want to buy from brands like yours.",
  },
  {
    number: "3",
    title: "Execute & Optimise",
    description: "Product pages, internal linking, schema. Weekly optimizations. Revenue reported daily.",
  },
  {
    number: "4",
    title: "Revenue Reporting",
    description: "Monthly reports showing your AI visibility, traffic from AI sources, and revenue attributed.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
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
              The Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Autonomous. Accountable. <span className="text-cyan">Always On.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            You get a full organic revenue system running in the background — no project management, no freelancer coordination, no guesswork.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[55%] w-[calc(100%-30px)] h-0.5 bg-gradient-to-r from-cyan to-cyan/30" />
              )}

              {/* Step Circle */}
              <div className="relative z-10 mb-6">
                <div className="w-14 h-14 rounded-full bg-cyan text-navy font-bold text-lg flex items-center justify-center mx-auto shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <h3 className="text-lg font-semibold text-navy mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
