import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
    { label: "Agency Partners", href: "#agency-partners" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        <a href="/" className="flex items-center">
          <img src={logo} alt="EcomTraffic.ai" className="h-6 md:h-8" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a href="https://ecomtrafficai.odoo.com/appointment/1">
          <Button
            className="bg-navy hover:bg-navy/90 text-white rounded-full px-6 py-2 flex items-center gap-2 text-sm font-semibold"
          >
            Free AI Traffic Audit <ArrowRight className="w-4 h-4" />
          </Button>
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
