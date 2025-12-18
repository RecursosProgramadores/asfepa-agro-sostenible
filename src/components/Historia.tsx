import { Users, Calendar, Award, Heart } from "lucide-react";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const timelineItems = [
  {
    year: "2018",
    title: "Fundación de ASFEPA",
    description: "Un grupo de productores cafeteros del distrito de Felipe Pinglo Alva se unió con el sueño de comercializar su café de manera justa y sostenible.",
    icon: Users,
  },
  {
    year: "2020",
    title: "Primera Exportación",
    description: "Logramos nuestra primera exportación internacional, llevando el sabor único de nuestras montañas al mundo.",
    icon: Award,
  },
  {
    year: "2022",
    title: "Certificación Orgánica",
    description: "Obtuvimos la certificación orgánica, validando nuestro compromiso con prácticas agrícolas sostenibles.",
    icon: Calendar,
  },
  {
    year: "2024",
    title: "Expansión Comunitaria",
    description: "Más de 50 familias productoras ahora forman parte de nuestra asociación, fortaleciendo nuestra comunidad.",
    icon: Heart,
  },
];

export const Historia = () => {
  return (
    <section id="historia" className="section-padding bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestra Historia
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            De las Montañas del Perú al Mundo
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            ASFEPA nació del corazón de productores comprometidos con la tierra y su comunidad. 
            Nuestra historia es un testimonio de perseverancia, tradición y amor por el café.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={coffeeBeans}
                alt="Granos de café artesanal ASFEPA"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/40 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-leaf-light/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Timeline */}
          <div className="order-1 lg:order-2 space-y-8">
            {timelineItems.map((item, index) => (
              <div
                key={item.year}
                className="relative flex gap-4 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Line */}
                {index < timelineItems.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-border" />
                )}
                
                {/* Icon */}
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-leaf-dark to-leaf-light flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="w-5 h-5 text-cream" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-heading text-2xl font-bold text-primary">
                      {item.year}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
