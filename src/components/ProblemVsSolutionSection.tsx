import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const ProblemVsSolutionSection = () => {
  const problems = [
    {
      text: "I'm spending $500+ a month on SEO and AI is still not suggesting my products.",
    },
    {
      text: "How do I get more traffic from AI??",
    },
    {
      text: "I dont want to spend hours learning all this when I can be growing my business",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Your Problem vs Our Solution
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left column - Problems */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl border bg-card border-border italic text-lg"
              >
                <span className="text-2xl mr-2">"</span>
                <p className="text-foreground inline">
                  {problem.text}
                </p>
                <span className="text-2xl ml-2">"</span>
              </motion.div>
            ))}
          </div>

          {/* Right column - Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white flex flex-col"
          >
            <div className="flex justify-center mb-8">
              <div className="bg-blue-100 rounded-2xl p-4">
                <img src={logo} alt="EcomTraffic.ai" className="h-12" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              AI Discoverability Solution
            </h3>

            <div className="space-y-4 flex-1">
              <div>
                <h4 className="font-semibold mb-2 text-white">Comprehensive Audit</h4>
                <p className="text-blue-100 text-sm">
                  We analyze your catalog, content, and feeds for LLM readiness across all major AI platforms
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-white">Strategic Implementation</h4>
                <p className="text-blue-100 text-sm">
                  Configure UCP, optimize feeds, and implement LLMs.txt for Gemini, ChatGPT, Copilot, and Perplexity
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-white">Measurable Results</h4>
                <p className="text-blue-100 text-sm">
                  Track AI-driven traffic and revenue with monthly audits and optimization reports
                </p>
              </div>
            </div>

            <p className="text-blue-100 text-center text-sm mt-6 pt-6 border-t border-blue-400">
              No tech expertise required. We handle everything so you can focus on growing your business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemVsSolutionSection;
