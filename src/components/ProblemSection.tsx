import { motion } from "framer-motion";
import { MessageSquareOff, Database, Users, BarChartHorizontal } from "lucide-react";

const problems = [
  {
    icon: MessageSquareOff,
    title: "Invisible in AI Conversations",
    description: "Gemini, AI Mode, and ChatGPT recommend products from connected retailers. Without proper integrations and structured data, your brand is invisible so users never get suggestions to buy your products.",
  },
  {
    icon: Database,
    title: "Data Isn't AI-Friendly",
    description: "Your store is optimized for keyword search, not semantic understanding. AI need rich multi-layered data to recommend your products confidently. Without this data, they won't know if what you're selling is relevant to the user or not.",
  },
  {
    icon: Users,
    title: "No In-House AI Expertise",
    description: "Understanding UCP, LLMs.txt, data feeds, and multi-channel AI integrations is beyond most marketing teams. This creates hesitation while early adopters gain competitive advantage.",
  },
  {
    icon: BarChartHorizontal,
    title: "No AI Revenue Attribution",
    description: "Most analytics don't properly attribute traffic and revenue to AI sources. Without clear metrics, you can't justify investment in AI visibility.",
  },
];

const ProblemSection = () => {
  return (
    <section id="about" className="py-24 bg-navy relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            The AI Commerce Gap
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Shoppers are beginning journeys in AI tools like Gemini, ChatGPT, and Copilot. They expect to discover and buy products directly within AI conversations.. But over 90% of products are still invisible to AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-6 rounded-2xl bg-navy-light/50 border border-primary-foreground/10 hover:border-cyan/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-5 group-hover:bg-cyan/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-primary-foreground/60 leading-relaxed text-sm">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-cyan text-xl font-bold">
            Brands appearing in AI recommendations see 39% higher click-through rates for brand discovery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
