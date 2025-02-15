
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">MastService</h3>
            <p className="text-green-100 text-sm">
              Профессиональный ремонт и отделка помещений в Новосибирске с гарантией качества
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+73833214455" className="flex items-center gap-2 text-green-100 hover:text-white">
                <Phone size={18} />
                <span>+7 (383) 321-44-55</span>
              </a>
              <a href="mailto:info@mastservice.ru" className="flex items-center gap-2 text-green-100 hover:text-white">
                <Mail size={18} />
                <span>info@mastservice.ru</span>
              </a>
              <div className="flex items-center gap-2 text-green-100">
                <MapPin size={18} />
                <span>г. Новосибирск, ул. Ленина, 1</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-green-100">
              <li><a href="#" className="hover:text-white">Ремонт квартир</a></li>
              <li><a href="#" className="hover:text-white">Отделочные работы</a></li>
              <li><a href="#" className="hover:text-white">Ремонт офисов</a></li>
              <li><a href="#" className="hover:text-white">Дизайн интерьера</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <a href="#" className="text-green-100 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-green-100 hover:text-white">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-sm text-green-100">
          <p>© {new Date().getFullYear()} MastService. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
