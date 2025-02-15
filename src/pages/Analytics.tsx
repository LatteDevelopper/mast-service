
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

interface AnalyticsData {
  date: string;
  visitors: number;
  details: number;
  calls: number;
}

const mockData: AnalyticsData[] = Array.from({ length: 7 }, (_, i) => ({
  date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
  visitors: Math.floor(Math.random() * 100) + 50,
  details: Math.floor(Math.random() * 30) + 10,
  calls: Math.floor(Math.random() * 15) + 5,
}));

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

  useEffect(() => {
    // Increment visitors count on page load
    const newVisitorsCount = totalVisitors + 1;
    setTotalVisitors(newVisitorsCount);
    localStorage.setItem("totalVisitors", newVisitorsCount.toString());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Аналитика MastService</h1>
          <p className="text-muted-foreground">Статистика посещений и конверсий</p>
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
            <CardTitle>Динамика посещений</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="visitors" 
                    stroke="#8884d8" 
                    name="Посетители"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="details" 
                    stroke="#82ca9d" 
                    name="Клики 'Подробнее'"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="calls" 
                    stroke="#ffc658" 
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
