import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { Users, MousePointer, PhoneCall, Mail } from "lucide-react";

// Функция для получения данных за последние 7 дней
const getLastWeekData = () => {
  const data = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toLocaleDateString();
    
    // Получаем данные из localStorage для каждого дня
    const visitorKey = `visitors_${dateStr}`;
    const detailsKey = `details_${dateStr}`;
    const callsKey = `calls_${dateStr}`;
    
    data.push({
      date: dateStr,
      visitors: parseInt(localStorage.getItem(visitorKey) || "0"),
      details: parseInt(localStorage.getItem(detailsKey) || "0"),
      calls: parseInt(localStorage.getItem(callsKey) || "0"),
    });
  }
  return data;
};

const StatCard = ({ title, value, icon: Icon, description }: {
  title: string;
  value: number;
  icon: any;
  description: string;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const Analytics = () => {
  const [totalVisitors, setTotalVisitors] = useState(() => 
    parseInt(localStorage.getItem("totalVisitors") || "0")
  );
  const [detailsClicks, setDetailsClicks] = useState(() => 
    parseInt(localStorage.getItem("detailsClicks") || "0")
  );
  const [contactRequests, setContactRequests] = useState(() => 
    parseInt(localStorage.getItem("contactRequests") || "0")
  );
  const [chartData, setChartData] = useState(getLastWeekData());

  useEffect(() => {
    // Сохраняем посещение для текущего дня
    const today = new Date().toLocaleDateString();
    const visitorKey = `visitors_${today}`;
    const currentDayVisitors = parseInt(localStorage.getItem(visitorKey) || "0");
    localStorage.setItem(visitorKey, (currentDayVisitors + 1).toString());
    
    // Обновляем общее количество посещений
    const newVisitorsCount = totalVisitors + 1;
    setTotalVisitors(newVisitorsCount);
    localStorage.setItem("totalVisitors", newVisitorsCount.toString());
    
    // Обновляем данные графика
    setChartData(getLastWeekData());
  }, []);

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-green-800">Аналитика MastService</h1>
          <p className="text-green-600">Статистика посещений и конверсий</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Всего посетителей"
            value={totalVisitors}
            icon={Users}
            description="Общее количество посещений"
          />
          <StatCard
            title="Клики 'Подробнее'"
            value={detailsClicks}
            icon={MousePointer}
            description="Переходы к деталям услуг"
          />
          <StatCard
            title="Заявки на звонок"
            value={contactRequests}
            icon={PhoneCall}
            description="Количество заявок на обратный звонок"
          />
          <StatCard
            title="Конверсия"
            value={Math.round((contactRequests / totalVisitors) * 100) || 0}
            icon={Mail}
            description="Процент конверсии в заявки"
          />
        </div>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-green-800">Динамика посещений</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="visitors" 
                    stroke="#059669" 
                    name="Посетители"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="details" 
                    stroke="#065f46" 
                    name="Клики 'Подробнее'"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="calls" 
                    stroke="#047857" 
                    name="Заявки"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
