
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from "recharts";
import { Users, MousePointer, PhoneCall, Mail, TrendingUp, ChartPieIcon } from "lucide-react";

const COLORS = ['#059669', '#065f46', '#047857', '#34d399'];

const getLastWeekData = () => {
  const data = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toLocaleDateString();
    
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

const StatCard = ({ title, value, icon: Icon, description, trend }: {
  title: string;
  value: number;
  icon: any;
  description: string;
  trend?: number;
}) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-green-600" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-green-800">{value}</div>
      <div className="flex items-center gap-2">
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && (
          <span className={`text-xs font-medium ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
    </CardContent>
  </Card>
);

interface Lead {
  name: string;
  phone: string;
  email: string;
  message: string;
  timestamp: string;
}

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
  
  const [leads, setLeads] = useState<Lead[]>(() => {
    const savedLeads = localStorage.getItem("leads");
    return savedLeads ? JSON.parse(savedLeads) : [];
  });

  const conversionRate = Math.round((contactRequests / totalVisitors) * 100) || 0;
  const clickThroughRate = Math.round((detailsClicks / totalVisitors) * 100) || 0;

  const pieData = [
    { name: "Посетители", value: totalVisitors },
    { name: "Клики", value: detailsClicks },
    { name: "Заявки", value: contactRequests },
  ];

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const visitorKey = `visitors_${today}`;
    const currentDayVisitors = parseInt(localStorage.getItem(visitorKey) || "0");
    localStorage.setItem(visitorKey, (currentDayVisitors + 1).toString());
    
    const newVisitorsCount = totalVisitors + 1;
    setTotalVisitors(newVisitorsCount);
    localStorage.setItem("totalVisitors", newVisitorsCount.toString());
    
    setChartData(getLastWeekData());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50/30 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="fade-in">
          <h1 className="text-3xl font-bold text-green-800">Аналитика MastService</h1>
          <p className="text-green-600">Статистика посещений и конверсий</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 fade-in">
          <StatCard
            title="Всего посетителей"
            value={totalVisitors}
            icon={Users}
            description="Общее количество посещений"
            trend={5}
          />
          <StatCard
            title="Клики 'Подробнее'"
            value={detailsClicks}
            icon={MousePointer}
            description="Переходы к деталям услуг"
            trend={8}
          />
          <StatCard
            title="Заявки на звонок"
            value={contactRequests}
            icon={PhoneCall}
            description="Количество заявок"
            trend={3}
          />
          <StatCard
            title="Конверсия"
            value={conversionRate}
            icon={TrendingUp}
            description="Процент конверсии в заявки"
            trend={2}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-green-800">Динамика посещений</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="visitors" 
                      stackId="1"
                      stroke="#059669" 
                      fill="#059669"
                      fillOpacity={0.2}
                      name="Посетители"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="details" 
                      stackId="1"
                      stroke="#065f46" 
                      fill="#065f46"
                      fillOpacity={0.2}
                      name="Клики 'Подробнее'"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="calls" 
                      stackId="1"
                      stroke="#047857" 
                      fill="#047857"
                      fillOpacity={0.2}
                      name="Заявки"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-green-800">Распределение активности</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-green-800">Конверсия по дням</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="visitors" name="Посетители" fill="#059669" />
                  <Bar dataKey="details" name="Клики" fill="#065f46" />
                  <Bar dataKey="calls" name="Заявки" fill="#047857" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-green-800">Заявки пользователей</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 text-green-700">Дата</th>
                    <th className="text-left p-4 text-green-700">Имя</th>
                    <th className="text-left p-4 text-green-700">Телефон</th>
                    <th className="text-left p-4 text-green-700">Email</th>
                    <th className="text-left p-4 text-green-700">Сообщение</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => (
                    <tr key={index} className="border-b hover:bg-green-50/50 transition-colors">
                      <td className="p-4">{new Date(lead.timestamp).toLocaleDateString()}</td>
                      <td className="p-4 font-medium">{lead.name}</td>
                      <td className="p-4">{lead.phone}</td>
                      <td className="p-4">{lead.email || "-"}</td>
                      <td className="p-4 text-gray-600">{lead.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
