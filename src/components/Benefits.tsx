
import { Shield, Clock, ThumbsUp, Banknote } from "lucide-react";

export const Benefits = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Почему выбирают нас</h2>
          <p className="text-green-600 max-w-2xl mx-auto">
            Мы гарантируем высокое качество работ и полную прозрачность на всех этапах ремонта
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Гарантия 2 года</h3>
            <p className="text-green-600">На все виды выполненных работ предоставляется официальная гарантия</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in delay-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Точные сроки</h3>
            <p className="text-green-600">Соблюдаем установленные сроки и график выполнения работ</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in delay-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <ThumbsUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Опытные мастера</h3>
            <p className="text-green-600">Команда профессионалов с опытом работы более 5 лет</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in delay-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Banknote className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Честные цены</h3>
            <p className="text-green-600">Прозрачное ценообразование без скрытых платежей</p>
          </div>
        </div>
      </div>
    </section>
  );
};
