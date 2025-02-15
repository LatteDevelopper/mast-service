
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    const currentClicks = parseInt(localStorage.getItem("detailsClicks") || "0");
    localStorage.setItem("detailsClicks", (currentClicks + 1).toString());
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center section-padding text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-6 slide-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary mb-4">
          <Building2 size={18} />
          <span className="text-sm font-medium">MastService - Ваш надёжный партнёр</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Профессиональный ремонт и отделка квартир
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Создаём уютные и современные интерьеры с безупречным качеством и вниманием к деталям. 
          Более 10 лет опыта в сфере ремонта и отделки помещений.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="group" onClick={handleDetailsClick}>
            Получить консультацию
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate("/analytics")}
          >
            Аналитика
          </Button>
        </div>
      </div>
    </div>
  );
};
