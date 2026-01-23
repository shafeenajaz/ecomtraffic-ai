import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="EcomTraffic.ai" className="h-6 md:h-8" />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            Services
          </a>
          <a href="#how-it-works" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            How It Works
          </a>
          <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors font-medium">
            About
          </a>
        </nav>

        <Button variant="hero" size="default">
          Get Started
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
