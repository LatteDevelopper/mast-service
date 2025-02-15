
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const lead = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
    };

    // Track contact request
    const currentRequests = parseInt(localStorage.getItem("contactRequests") || "0");
    localStorage.setItem("contactRequests", (currentRequests + 1).toString());

    // Save lead data
    const savedLeads = localStorage.getItem("leads");
    const leads = savedLeads ? JSON.parse(savedLeads) : [];
    leads.push(lead);
    localStorage.setItem("leads", JSON.stringify(leads));

    // Track for current day
    const today = new Date().toLocaleDateString();
    const callsKey = `calls_${today}`;
    const currentDayCalls = parseInt(localStorage.getItem(callsKey) || "0");
    localStorage.setItem(callsKey, (currentDayCalls + 1).toString());
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section-padding bg-gradient-to-b from-green-50 to-white" id="contact">
      <Card className="max-w-xl mx-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-green-800">Оставить заявку</CardTitle>
          <CardDescription className="text-green-600">
            Заполните форму, и мы свяжемся с вами для консультации
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                name="name"
                placeholder="Ваше имя"
                required
                className="rounded-xl transition-all focus:ring-green-500"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="phone"
                type="tel"
                placeholder="Телефон"
                required
                className="rounded-xl transition-all focus:ring-green-500"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                className="rounded-xl transition-all focus:ring-green-500"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Ваше сообщение"
                className="min-h-[100px] rounded-xl transition-all focus:ring-green-500"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full rounded-xl bg-green-600 hover:bg-green-700 transition-colors" 
              disabled={loading}
            >
              {loading ? "Отправка..." : "Отправить заявку"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
