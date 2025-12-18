import { Target, Eye, Heart, Star, Leaf, Shield, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Star,
    title: "Calidad",
    description: "Excelencia en cada grano que producimos",
  },
  {
    icon: Heart,
    title: "Tradición",
    description: "Honramos las prácticas ancestrales de cultivo",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Cuidamos la tierra para las generaciones futuras",
  },
  {
    icon: Shield,
    title: "Compromiso",
    description: "Dedicación total con nuestros productores",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Mejora continua en todos nuestros procesos",
  },
];

export const MisionVision = () => {
  return (
    <section id="mision" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-leaf-light/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Nuestro Propósito
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Misión, Visión y Valores
          </h2>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div className="group relative bg-card rounded-2xl p-8 lg:p-10 shadow-soft hover:shadow-elevated transition-all duration-300 card-hover overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-leaf-dark/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-leaf-dark to-leaf-light flex items-center justify-center mb-6 shadow-soft group-hover:shadow-glow transition-all duration-300">
                <Target className="w-7 h-7 text-cream" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Nuestra Misión
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Producir y comercializar café de alta calidad de manera sostenible, 
                garantizando precios justos para nuestros productores y promoviendo 
                el desarrollo integral de las comunidades cafetaleras del distrito 
                de Felipe Pinglo Alva.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-card rounded-2xl p-8 lg:p-10 shadow-soft hover:shadow-elevated transition-all duration-300 card-hover overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-coffee-dark flex items-center justify-center mb-6 shadow-soft group-hover:shadow-elevated transition-all duration-300">
                <Eye className="w-7 h-7 text-cream" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Nuestra Visión
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ser reconocidos como la asociación cafetalera líder de la región, 
                posicionando la marca ASFEPA como sinónimo de calidad, sostenibilidad 
                y comercio justo a nivel nacional e internacional para el año 2030.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
            Nuestros Valores
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group text-center p-6 rounded-2xl bg-card hover:bg-muted transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
