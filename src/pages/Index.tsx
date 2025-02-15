
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
