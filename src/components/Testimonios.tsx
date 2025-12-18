import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María Elena García",
    role: "Cafetería Aroma Lima",
    content: "El café de ASFEPA ha transformado nuestra oferta. Nuestros clientes notan inmediatamente la diferencia en calidad y frescura. El mejor café peruano que hemos probado.",
    rating: 5,
  },
  {
    name: "Roberto Mendoza",
    role: "Importador Internacional",
    content: "Trabajar con ASFEPA ha sido excepcional. Su compromiso con la calidad y la trazabilidad nos da confianza total. El café de especialidad es simplemente extraordinario.",
    rating: 5,
  },
  {
    name: "Ana Lucía Torres",
    role: "Barista Profesional",
    content: "Como barista, valoro profundamente el trabajo de ASFEPA. Sus granos tienen notas complejas y un perfil único que hace que cada taza sea una experiencia memorable.",
    rating: 5,
  },
];

export const Testimonios = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-leaf-dark to-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cream/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cream/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cream/10 text-cream text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-cream/80 text-lg leading-relaxed">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Conoce las experiencias de quienes ya confían en ASFEPA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-cream/10 hover:bg-cream/15 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-cream/30" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cream text-cream" />
                ))}
              </div>

              {/* Content */}
              <p className="text-cream/90 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-cream/10 pt-4">
                <p className="font-heading font-semibold text-cream">
                  {testimonial.name}
                </p>
                <p className="text-cream/60 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
