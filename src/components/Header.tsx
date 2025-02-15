
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-green-700">
          <span>MastService</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/#services" className="text-sm font-medium text-muted-foreground hover:text-green-700">
            Услуги
          </Link>
          <Link to="/#portfolio" className="text-sm font-medium text-muted-foreground hover:text-green-700">
            Портфолио
          </Link>
          <Link to="/#contact" className="text-sm font-medium text-muted-foreground hover:text-green-700">
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+73833214455" className="hidden md:flex items-center gap-2 text-sm font-medium text-green-700">
            <Phone size={18} />
            +7 (383) 321-44-55
          </a>
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <a href="#contact">Заказать звонок</a>
          </Button>
        </div>
      </div>
    </header>
  );
};
