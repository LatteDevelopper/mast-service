
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Консультация",
      description: "Бесплатная консультация и выезд специалиста для оценки объекта"
    },
    {
      number: "02",
      title: "Смета",
      description: "Составление детальной сметы и согласование всех работ"
    },
    {
      number: "03",
      title: "Договор",
      description: "Заключение договора с фиксированной стоимостью и сроками"
    },
    {
      number: "04",
      title: "Ремонт",
      description: "Выполнение работ согласно утвержденному графику"
    },
    {
      number: "05",
      title: "Контроль",
      description: "Регулярные отчеты о ходе работ и контроль качества"
    },
    {
      number: "06",
      title: "Сдача объекта",
      description: "Уборка помещения и подписание акта выполненных работ"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Как мы работаем</h2>
          <p className="text-green-600 max-w-2xl mx-auto">
            Прозрачный процесс работы и постоянная коммуникация с клиентом на всех этапах
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-green-200 group-hover:text-green-300 transition-colors">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-green-600">{step.description}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-green-400 mt-4 group-hover:translate-x-2 transition-transform" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
