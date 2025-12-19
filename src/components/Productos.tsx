import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import coffeePergamino from "@/assets/coffee-pergamino.jpg";
import coffeeOro from "@/assets/coffee-oro.jpg";
import coffeeTostado from "@/assets/coffee-tostado.jpg";
import coffeeSpecialty from "@/assets/coffee-specialty.jpg";

const products = [
  {
    name: "Café Pergamino",
    description: "Café producido por los socios manejado con buenas prácticas agrícolas y procesos de calidad en cosecha y post cosecha.",
    image: coffeePergamino,
    price: "Según bolsa de valores",
    unit: "por quintal",
    features: [
      "Cuidadosamente seleccionado y procesado",
      "Cafés de procesos limpios",
      "Fermentación aeróbica y anaeróbica"
    ],
    badge: "Exportación",
  },
  {
    name: "Café Oro Verde",
    description: "Grano de alta calidad listo para el proceso de tostado, es el resultado del trabajo cuidadoso de nuestros productores.",
    image: coffeeOro,
    price: "Según bolsa de valores",
    unit: "por quintal",
    features: [
      "Seleccionado por defectos primarios",
      "Granulometría uniforme",
      "Humedad adecuada para tostado"
    ],
    badge: "Premium",
  },
  {
    name: "Café Tostado 1KG",
    description: "Ideal para consumo local y comercialización. Café de especialidad con notas excepcionales.",
    image: coffeeTostado,
    price: "S/. 55.00",
    unit: "por 1kg",
    features: [
      "Café de especialidad 80-85 puntos",
      "Variedades Catuaí, Caturra y Geisha",
      "Tostado artesanal"
    ],
    badge: "Popular",
  },
  {
    name: "Café Tostado y Molido 1KG",
    description: "Presentación lista para venta directa al consumidor, ideal para ferias y puntos de comercio local.",
    image: coffeeTostado,
    price: "S/. 60.00",
    unit: "por 1kg",
    features: [
      "Café de especialidad 80-85 puntos",
      "Variedades Catuaí, Caturra y Geisha",
      "Listo para preparar"
    ],
    badge: "Artesanal",
  },
  {
    name: "Café de Especialidad",
    description: "Lotes seleccionados con puntajes superiores orientados a mercados premium, concursos y microlotes.",
    image: coffeeSpecialty,
    price: "Consultar",
    unit: "precio especial",
    features: [
      "Puntajes superiores a 85 SCA",
      "Microlotes seleccionados",
      "Trazabilidad completa"
    ],
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
            Café de Especialidad APARY
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ofrecemos diferentes presentaciones de nuestro café, desde el grano pergamino 
            hasta el café tostado y molido listo para disfrutar. Cada producto refleja nuestra 
            dedicación a la calidad, sostenibilidad y el trabajo de nuestros socios.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  <span className="font-heading text-xl font-bold text-cream">
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

                <Button variant="outline" className="w-full" asChild>
                  <a href="#contacto">Consultar</a>
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
