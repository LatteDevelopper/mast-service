
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";

export const Hero = () => {
  const handleDetailsClick = () => {
    const currentClicks = parseInt(localStorage.getItem("detailsClicks") || "0");
    localStorage.setItem("detailsClicks", (currentClicks + 1).toString());
    
    // Сохраняем клик для текущего дня
    const today = new Date().toLocaleDateString();
    const detailsKey = `details_${today}`;
    const currentDayClicks = parseInt(localStorage.getItem(detailsKey) || "0");
    localStorage.setItem(detailsKey, (currentDayClicks + 1).toString());
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center section-padding text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-6 slide-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 mb-4">
          <Building2 size={18} />
          <span className="text-sm font-medium">MastService - Ваш надёжный партнёр</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-green-900">
          Профессиональный ремонт и отделка квартир
        </h1>
        
        <p className="text-lg md:text-xl text-green-700 max-w-2xl mx-auto">
          Создаём уютные и современные интерьеры с безупречным качеством и вниманием к деталям. 
          Более 5 лет опыта в сфере ремонта и отделки помещений в Новосибирске.
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap">
          <div className="flex items-center gap-2 text-green-700">
            <Building2 className="w-5 h-5" />
            <span>5 лет на рынке</span>
          </div>
          <div className="flex items-center gap-2 text-green-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Работаем в Новосибирске</span>
          </div>
        </div>
        
        <div className="pt-4">
          <Button 
            size="lg" 
            className="group bg-green-600 hover:bg-green-700" 
            onClick={handleDetailsClick}
          >
            Получить консультацию
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};
