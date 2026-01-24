import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Target, Wrench, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analysis",
    description: "We research and analyze your AI positioning in the marketplace by researching you and your competitors.",
  },
  {
    number: "02",
    icon: Target,
    title: "Goals",
    description: "We find the most searched prompts and create a plan on how to get you to the top of results for these prompts.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Technical Audits",
    description: "We fix all the technical reasons why you're not showing up in AI Results. This will instantly unlock some traffic for you.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Execution",
    description: "We update your content on all your products and website and build virtual noise around your brand so that you get the top results on these AI searches.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Optimization",
    description: "We constantly monitor and update your assets to ensure you stay at the top of these prompts, and work on getting you to the top of other prompts too.",
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            How It <span className="text-cyan">Works</span>
          </h2>
        </motion.div>

        {/* Numbers row */}
        <div className="flex justify-center gap-6 md:gap-12 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => (
            <motion.button
              key={step.number}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveStep(index)}
              className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 font-bold text-lg ${
                activeStep === index
                  ? 'bg-cyan text-navy shadow-lg scale-110'
                  : 'bg-cyan/30 text-primary-foreground hover:bg-cyan/50 cursor-pointer'
              }`}
            >
              {step.number}
            </motion.button>
          ))}
        </div>

        {/* Active Step Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-navy-light/50 border border-primary-foreground/10">
              <div className="w-16 h-16 rounded-xl bg-cyan/10 flex items-center justify-center mb-6">
                {steps[activeStep].icon &&
                  (() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon className="w-8 h-8 text-cyan" />;
                  })()
                }
              </div>
              <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed text-lg">
                {steps[activeStep].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorksSection;
