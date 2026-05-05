import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Send, Coffee, ArrowRight } from "lucide-react";

export const CTAModerno = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80" 
          alt="Granos de café frescos" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-coffee-dark rounded-[2.5rem] p-8 md:p-16 shadow-elevated relative overflow-hidden group">
          {/* Decorative shapes */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-700" />
          
          <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cream text-sm">
                <Coffee className="w-4 h-4 text-leaf-light" />
                <span>¿Listo para probar la excelencia?</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream leading-tight">
                Lleva el sabor de <br />
                <span className="text-leaf-light">Huánuco a tu hogar</span>
              </h2>
              <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
                Únete a nuestra misión de sostenibilidad. Cada taza de café ASFEPA apoya a familias productoras y protege nuestra biodiversidad.
              </p>
            </div>
            
            <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Button size="xl" className="w-full group shadow-glow" asChild>
                <Link to="/contacto" className="flex items-center justify-center gap-3">
                  Contactar Ahora
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="w-full border-cream/20 text-cream hover:bg-white/5" asChild>
                <Link to="/productos" className="flex items-center justify-center gap-3 group">
                  Ver Catálogo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
