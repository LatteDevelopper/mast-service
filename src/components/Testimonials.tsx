
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Смирнова",
      role: "Владелец квартиры",
      content: "Очень довольна результатом! Ремонт был выполнен качественно и в срок. Команда профессионалов, которые знают свое дело.",
      rating: 5
    },
    {
      name: "Дмитрий Козлов",
      role: "Руководитель компании",
      content: "Обратились для ремонта офиса. Все работы были выполнены оперативно, без лишнего шума и пыли. Результат превзошел ожидания.",
      rating: 5
    },
    {
      name: "Елена Петрова",
      role: "Дизайнер интерьера",
      content: "Как дизайнер, я очень требовательна к качеству работ. MastService полностью оправдал мои ожидания. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Отзывы наших клиентов</h2>
          <p className="text-green-600 max-w-2xl mx-auto">
            Мнение каждого клиента важно для нас и помогает становиться лучше
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-green-700 mb-4">{testimonial.content}</p>
                <div className="mt-4 pt-4 border-t border-green-100">
                  <p className="font-semibold text-green-800">{testimonial.name}</p>
                  <p className="text-sm text-green-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
