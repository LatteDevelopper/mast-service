
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Hero = () => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    // Сохраняем статистику кликов
    const currentClicks = parseInt(localStorage.getItem("detailsClicks") || "0");
    localStorage.setItem("detailsClicks", (currentClicks + 1).toString());
    
    const today = new Date().toLocaleDateString();
    const detailsKey = `details_${today}`;
    const currentDayClicks = parseInt(localStorage.getItem(detailsKey) || "0");
    localStorage.setItem(detailsKey, (currentDayClicks + 1).toString());

    // Показываем уведомление и скроллим к форме
    toast.success("Спасибо за интерес! Мы свяжемся с вами в ближайшее время.", {
      position: "top-center",
    });
    
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center section-padding text-center relative overflow-hidden">
      {/* Анимированный фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-white/80 to-transparent animate-gradient" />
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
      </div>
      
      <div className="max-w-4xl mx-auto space-y-6 slide-in relative">
        {/* Плашка с иконкой */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 mb-4 hover:bg-green-200 transition-colors animate-fade-in">
          <Building2 size={18} className="animate-bounce" />
          <span className="text-sm font-medium">MastService - Ваш надёжный партнёр</span>
        </div>
        
        {/* Заголовок с подчеркиванием */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-green-900 relative">
          Профессиональный ремонт и отделка квартир
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-green-500 rounded animate-width" />
        </h1>
        
        <p className="text-lg md:text-xl text-green-700 max-w-2xl mx-auto animate-fade-in delay-200">
          Создаём уютные и современные интерьеры с безупречным качеством и вниманием к деталям. 
          Более 5 лет опыта в сфере ремонта и отделки помещений в Новосибирске.
        </p>
        
        {/* Преимущества с анимацией */}
        <div className="flex gap-6 justify-center flex-wrap animate-fade-in delay-300">
          <div className="flex items-center gap-2 text-green-700 hover:text-green-600 transition-colors p-2 rounded-lg hover:bg-green-50">
            <Building2 className="w-5 h-5" />
            <span>5 лет на рынке</span>
          </div>
          <div className="flex items-center gap-2 text-green-700 hover:text-green-600 transition-colors p-2 rounded-lg hover:bg-green-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Работаем в Новосибирске</span>
          </div>
        </div>
        
        {/* Кнопка с анимацией */}
        <div className="pt-4 animate-fade-in delay-400">
          <Button 
            size="lg" 
            className="group bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={handleDetailsClick}
          >
            <MessageCircle className="mr-2 h-5 w-5 animate-bounce" />
            Получить консультацию
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};
