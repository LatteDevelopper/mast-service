
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export const Guarantee = () => {
  const guarantees = [
    "Официальный договор с фиксированной стоимостью",
    "Гарантия 2 года на все виды работ",
    "Поэтапная оплата после приемки работ",
    "Использование качественных материалов",
    "Соблюдение технологий и СНиПов",
    "Уборка помещения после завершения работ"
  ];

  const handleConsultation = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Наши гарантии</h2>
          <p className="text-green-600 max-w-2xl mx-auto">
            Мы берем на себя полную ответственность за качество выполняемых работ
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto hover:shadow-xl transition-all duration-300">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-green-700">{guarantee}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                onClick={handleConsultation}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-lg font-medium group"
              >
                Получить консультацию
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
