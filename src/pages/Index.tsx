import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Historia } from "@/components/Historia";
import { MisionVision } from "@/components/MisionVision";
import { Productos } from "@/components/Productos";
import { Galeria } from "@/components/Galeria";
import { Testimonios } from "@/components/Testimonios";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Historia />
      <MisionVision />
      <Productos />
      <Galeria />
      <Testimonios />
      <Contacto />
      <Footer />
    </main>
  );
};

export default Index;
