
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Guarantee } from "@/components/Guarantee";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Guarantee />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
