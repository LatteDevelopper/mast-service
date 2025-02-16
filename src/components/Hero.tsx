
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, MessageCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Hero = () => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    const currentClicks = parseInt(localStorage.getItem("detailsClicks") || "0");
    localStorage.setItem("detailsClicks", (currentClicks + 1).toString());
    
    const today = new Date().toLocaleDateString();
    const detailsKey = `details_${today}`;
    const currentDayClicks = parseInt(localStorage.getItem(detailsKey) || "0");
    localStorage.setItem(detailsKey, (currentDayClicks + 1).toString());

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
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 via-white to-secondary/30 animate-gradient" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-12 -top-12 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -left-12 -bottom-12 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-light rounded-full blur-2xl opacity-20 animate-pulse delay-300" />
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8 slide-in relative">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-secondary text-primary mb-4 hover:bg-secondary/80 transition-all duration-300 backdrop-blur-sm shadow-lg">
          <Sparkles size={20} className="animate-pulse text-primary" />
          <span className="text-sm font-medium">MastService - Ваш надёжный партнёр</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary">
          Профессиональный ремонт и отделка квартир
        </h1>
        
        <p className="text-lg md:text-xl text-primary-dark/90 max-w-2xl mx-auto animate-fade-in delay-200 leading-relaxed">
          Создаём уютные и современные интерьеры с безупречным качеством и вниманием к деталям. 
          Более 5 лет опыта в сфере ремонта и отделки помещений в Новосибирске.
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap animate-fade-in delay-300">
          <div className="flex items-center gap-3 text-primary hover:text-primary-light transition-all duration-300 p-3 rounded-xl hover:bg-secondary/80 backdrop-blur-sm">
            <Building2 className="w-6 h-6" />
            <span className="font-medium">5 лет на рынке</span>
          </div>
          <div className="flex items-center gap-3 text-primary hover:text-primary-light transition-all duration-300 p-3 rounded-xl hover:bg-secondary/80 backdrop-blur-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium">Работаем в Новосибирске</span>
          </div>
        </div>
        
        <div className="pt-6 animate-fade-in delay-400">
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary-dark transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-full px-8"
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
