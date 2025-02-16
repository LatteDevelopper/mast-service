
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building, Paintbrush, Wrench, Timer } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Комплексный ремонт",
    description: "Полная реновация помещений под ключ с учетом всех ваших пожеланий"
  },
  {
    icon: Paintbrush,
    title: "Отделочные работы",
    description: "Профессиональная отделка стен, потолков и полов с гарантией качества"
  },
  {
    icon: Wrench,
    title: "Инженерные работы",
    description: "Монтаж и замена коммуникаций, электрики и сантехники"
  },
  {
    icon: Timer,
    title: "Точные сроки",
    description: "Соблюдаем установленные сроки и держим вас в курсе всех этапов работы"
  }
];

export const Services = () => {
  return (
    <section className="section-padding bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Наши услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Предоставляем полный спектр услуг по ремонту и отделке помещений
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
