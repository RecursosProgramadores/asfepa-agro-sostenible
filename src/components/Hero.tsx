import { ArrowDown, Mountain, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee-mountains.jpg";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Plantaciones de café en las montañas de Perú"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/70 via-coffee-dark/50 to-coffee-dark/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-10 opacity-20 animate-float">
        <Leaf className="w-16 h-16 text-leaf-light" />
      </div>
      <div className="absolute bottom-40 right-16 opacity-15 animate-float delay-300">
        <Mountain className="w-24 h-24 text-cream" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 mb-8 animate-fade-up">
            <Leaf className="w-4 h-4 text-leaf-light" />
            <span className="text-cream text-sm font-medium">
              Agricultura Sostenible desde 2018
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6 animate-fade-up delay-100">
            Café con
            <span className="block text-leaf-light">Propósito</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-cream/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            Somos la Asociación Agrosostenible de Felipe Pinglo Alva. Cultivamos café 
            de especialidad en las alturas del Perú, honrando la tierra y empoderando 
            a nuestras comunidades.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#productos">
                Nuestros Productos
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#historia">
                Conoce Nuestra Historia
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-16 pt-8 border-t border-cream/20 animate-fade-up delay-400">
            <div className="text-center">
              <div className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-1">
                50+
              </div>
              <div className="text-cream/70 text-sm sm:text-base">
                Familias Productoras
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl sm:text-4xl font-bold text-leaf-light mb-1">
                1,800m
              </div>
              <div className="text-cream/70 text-sm sm:text-base">
                Altitud Promedio
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl sm:text-4xl font-bold text-cream mb-1">
                100%
              </div>
              <div className="text-cream/70 text-sm sm:text-base">
                Orgánico
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#historia"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors group"
      >
        <span className="text-sm">Descubre más</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
