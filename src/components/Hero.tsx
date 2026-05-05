import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/homeapary.jpeg";

export const Hero = () => {
  return (
    <>
      <section
        id="inicio"
        className="relative h-[85vh] flex items-start justify-center overflow-hidden pt-[15vh]"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Plantaciones de café en las alturas de Huánuco - Perú"
            className="w-full h-full object-cover animate-scale-in"
          />
          {/* Subtle gradient only at the bottom to ensure title readability without darkening the logo area */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content - Only the main phrase */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-tight mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] animate-fade-up">
              Café con
              <span className="block text-[#125B32] drop-shadow-[0_1px_5px_rgba(255,255,255,0.5)]">Propósito</span>
            </h1>
            <div className="animate-fade-up delay-200">
              <span className="font-heading text-2xl sm:text-3xl text-black tracking-[0.2em] uppercase font-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                Marca <strong className="text-[#125B32]">APARY</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Stats Section - Directly below the image */}
      <section className="bg-white py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:divide-x divide-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">2024</div>
              <div className="text-primary font-bold text-sm uppercase tracking-widest">Fundación</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">85+</div>
              <div className="text-foreground font-bold text-sm uppercase tracking-widest">Puntos SCA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">100%</div>
              <div className="text-primary font-bold text-sm uppercase tracking-widest">Sostenible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Details Section */}
      <section className="bg-background py-16 sm:py-20 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            
            {/* Description & Badge */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-bold uppercase tracking-wider">
                  Agricultura Sostenible desde 2024
                </span>
              </div>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
                Somos la Asociación Agrosostenible del centro poblado de Felipe Pinglo Alva - Luyando. 
                Cultivamos café de especialidad con pasión y tradición en las alturas de Huánuco - Perú.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="w-full sm:w-auto shadow-glow" asChild>
                <Link to="/productos">Ver Catálogo de Productos</Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto border-2" asChild>
                <Link to="/nosotros">Nuestra Historia</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
