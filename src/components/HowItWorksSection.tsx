import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "AI Discoverability Audit",
    description: "We analyze your catalog, content, and feeds for LLM readiness. Benchmark your visibility against competitors across Gemini, ChatGPT, Perplexity, and Copilot.",
    duration: "Week 1-2",
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description: "Receive a prioritized 90-day implementation roadmap covering data cleanup, content optimization, feed setup, and AI integrations specific to your platform.",
    duration: "Week 2",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Execute UCP configuration, LLMs.txt placement, schema optimization, and feed integrations. Test direct checkout in Gemini and Copilot where applicable.",
    duration: "Weeks 3-8",
  },
  {
    number: "04",
    title: "Track & Optimize",
    description: "Monthly AI visibility audits, A/B testing product data formats, and dashboard reporting showing AI-driven traffic and revenue attribution.",
    duration: "Ongoing",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan font-semibold text-sm uppercase tracking-wider">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology to transform your e-commerce presence for the agentic commerce era.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-cyan/50 to-transparent md:-translate-x-px hidden sm:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number bubble */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-cyan flex items-center justify-center z-10 shadow-glow">
                  <span className="text-lg font-bold text-navy">{step.number}</span>
                </div>
                
                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                    <span className="text-xs font-medium text-cyan">{step.duration}</span>
                    <h3 className="text-xl font-semibold mb-2 text-navy mt-1">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
