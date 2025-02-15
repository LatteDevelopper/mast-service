
import { Card, CardContent } from "./ui/card";

const portfolioItems = [
  {
    id: 1,
    title: "Современная квартира-студия",
    description: "Полный ремонт помещения 45м²",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Ванная комната под ключ",
    description: "Капитальный ремонт санузла",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Кухня в классическом стиле",
    description: "Ремонт и отделка кухни",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Спальня в современном стиле",
    description: "Дизайнерский ремонт спальни",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&auto=format&fit=crop&q=60",
  },
];

export const Portfolio = () => {
  return (
    <section className="section-padding bg-green-50" id="portfolio">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Наши работы</h2>
          <p className="text-green-700 max-w-2xl mx-auto">
            Примеры реализованных проектов по ремонту и отделке помещений в Новосибирске
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-4 text-white">
                      <h3 className="font-medium text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
