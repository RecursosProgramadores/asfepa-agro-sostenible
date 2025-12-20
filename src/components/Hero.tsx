import { Mountain, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee-mountains.jpg";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Plantaciones de café en las alturas de Huánuco - Perú"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/70 via-coffee-dark/50 to-coffee-dark/80" />
      </div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute top-40 left-10 opacity-20 animate-float hidden md:block">
        <Leaf className="w-16 h-16 text-leaf-light" />
      </div>
      <div className="absolute bottom-40 right-16 opacity-15 animate-float delay-300 hidden md:block">
        <Mountain className="w-24 h-24 text-cream" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-tight mb-4 sm:mb-6 animate-fade-up">
            Café con
            <span className="block text-leaf-light">Propósito</span>
          </h1>

          {/* Brand */}
          <div className="mb-4 sm:mb-6 animate-fade-up delay-100">
            <span className="font-heading text-xl sm:text-2xl md:text-3xl text-cream/90">
              Marca <strong className="text-leaf-light">APARY</strong>
            </span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 mb-6 sm:mb-8 animate-fade-up delay-150">
            <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-leaf-light" />
            <span className="text-cream text-xs sm:text-sm font-medium">
              Agricultura Sostenible desde 2024
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-up delay-200 px-2">
            Somos la Asociación Agrosostenible del centro poblado de Felipe Pinglo Alva - Luyando. 
            Cultivamos café de especialidad en las alturas de Huánuco - Perú.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#productos">
                Nuestros Productos
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#historia">
                Conoce Nuestra Historia
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-cream/20 animate-fade-up delay-400">
            <div className="text-center">
              <div className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-cream mb-1">
                2024
              </div>
              <div className="text-cream/70 text-xs sm:text-sm lg:text-base">
                Año de Fundación
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-leaf-light mb-1">
                85+
              </div>
              <div className="text-cream/70 text-xs sm:text-sm lg:text-base">
                Puntos SCA
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-cream mb-1">
                100%
              </div>
              <div className="text-cream/70 text-xs sm:text-sm lg:text-base">
                Sostenible
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
