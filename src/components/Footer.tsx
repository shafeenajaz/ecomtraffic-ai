import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-navy border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src={logo} alt="EcomTraffic.ai" className="h-8 brightness-0 invert" />
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8">
            <a href="#services" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              Services
            </a>
            <a href="#how-it-works" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              How It Works
            </a>
            <a href="#about" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              About
            </a>
            <a href="mailto:hello@ecomtraffic.ai" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              Contact
            </a>
          </nav>
          
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} EcomTraffic.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
