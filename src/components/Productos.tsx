import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import coffeePergamino from "@/assets/coffee-pergamino.jpg";
import coffeeOro from "@/assets/coffee-oro.jpg";
import coffeeTostado from "@/assets/coffee-tostado.jpg";
import coffeeSpecialty from "@/assets/coffee-specialty.jpg";

const products = [
  {
    name: "Café Pergamino",
    description: "Café verde con su capa de pergamino intacta, ideal para exportación y tostadores especializados.",
    image: coffeePergamino,
    price: "S/. 12.00",
    unit: "por kg",
    features: ["Secado natural al sol", "Humedad controlada 11-12%", "Selección manual"],
    badge: "Exportación",
  },
  {
    name: "Café Oro",
    description: "Granos verdes descascarillados, listos para el proceso de tostado artesanal o industrial.",
    image: coffeeOro,
    price: "S/. 18.00",
    unit: "por kg",
    features: ["100% Arábica", "Sin defectos", "Calibre uniforme"],
    badge: "Popular",
  },
  {
    name: "Café Tostado",
    description: "Tostado artesanal que resalta las notas de chocolate, caramelo y frutos del bosque.",
    image: coffeeTostado,
    price: "S/. 35.00",
    unit: "por 250g",
    features: ["Tostado medio", "Notas de chocolate", "Empaque hermético"],
    badge: "Artesanal",
  },
  {
    name: "Café de Especialidad",
    description: "Nuestro café premium con puntaje superior a 84 puntos, perfecto para paladares exigentes.",
    image: coffeeSpecialty,
    price: "S/. 55.00",
    unit: "por 250g",
    features: ["84+ puntos SCA", "Microlote", "Trazabilidad completa"],
    badge: "Premium",
  },
];

export const Productos = () => {
  return (
    <section id="productos" className="section-padding bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestros Productos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Café de las Alturas del Perú
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ofrecemos diferentes presentaciones de nuestro café, desde el grano verde 
            hasta el café tostado listo para disfrutar. Cada producto refleja nuestra 
            dedicación a la calidad y sostenibilidad.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-leaf-light text-cream text-xs font-semibold shadow-soft">
                    {product.badge}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <span className="font-heading text-2xl font-bold text-cream">
                    {product.price}
                  </span>
                  <span className="text-cream/80 text-sm ml-1">
                    {product.unit}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-leaf-light flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full">
                  Consultar
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Interesado en compras al por mayor o exportación?
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="#contacto">
              Solicitar Cotización
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
