
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

    // Here we would typically send this data to a backend
    const formData = new FormData(e.currentTarget);
    const lead = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
    };

    // For now, we'll just log the lead data
    console.log("New lead:", lead);
    
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
    <section className="section-padding" id="contact">
      <Card className="max-w-xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Оставить заявку</CardTitle>
          <CardDescription>
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
                className="transition-all"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="phone"
                type="tel"
                placeholder="Телефон"
                required
                className="transition-all"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                className="transition-all"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Ваше сообщение"
                className="min-h-[100px] transition-all"
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Отправка..." : "Отправить заявку"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
