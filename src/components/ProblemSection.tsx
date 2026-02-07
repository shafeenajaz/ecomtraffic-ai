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
    <section id="about" className="py-24 bg-navy relative overflow-hidden" style={{
      backgroundImage: 'url(/problem-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Background pattern overlay */}
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
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            The Problem You're Facing
          </h2>
          <p className="text-xl text-primary-foreground mb-2">
            <span className="text-cyan font-semibold">Your Products Are Completely Invisible To AI</span>
          </p>
          <p className="text-lg text-primary-foreground/70">
            These large language models don't know that you exist. They can't parse your information.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
