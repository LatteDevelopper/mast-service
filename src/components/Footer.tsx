
import { Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
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
    <footer className="bg-primary-dark text-white rounded-t-3xl">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <button 
              onClick={scrollToTop}
              className="text-lg font-bold mb-4 hover:text-primary-light transition-colors"
            >
              MastService
            </button>
            <p className="text-secondary text-sm">
              Профессиональный ремонт и отделка помещений в Новосибирске с гарантией качества
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+79529000370" className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
                <Phone size={18} />
                <span>+7 (952) 900 03-70</span>
              </a>
              <a href="mailto:MastServiceBusiness@outlook.com" className="flex items-center gap-2 text-secondary hover:text-white transition-colors">
                <Mail size={18} />
                <span>MastServiceBusiness@outlook.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/mast.service" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-white transition-colors flex items-center gap-2"
              >
                <Instagram size={24} />
                <span>@mast.service</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-light/20 mt-8 pt-8 text-center text-sm text-secondary">
          <p>© {new Date().getFullYear()} MastService. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
