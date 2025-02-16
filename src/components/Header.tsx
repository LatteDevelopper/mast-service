
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button 
          onClick={scrollToTop} 
          className="text-lg font-medium text-primary hover:text-primary-light transition-colors"
        >
          MastService
        </button>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection("services")} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Услуги
          </button>
          <button 
            onClick={() => scrollToSection("portfolio")} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Портфолио
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Контакты
          </button>
        </nav>

        <div className="flex items-center">
          <a href="tel:+79529000370" className="hidden md:flex items-center gap-2 text-sm font-medium text-primary">
            <Phone size={18} />
            +7 (952) 900 03-70
          </a>
        </div>
      </div>
    </header>
  );
};
