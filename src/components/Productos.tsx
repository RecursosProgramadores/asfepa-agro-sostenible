import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductModal } from "./ProductModal";
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
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="productos" className="section-padding bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestros Productos
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            Café de Especialidad APARY
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Ofrecemos diferentes presentaciones de nuestro café, desde el grano pergamino 
            hasta el café tostado y molido listo para disfrutar.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-2 py-1 sm:px-3 rounded-full bg-leaf-light text-cream text-xs font-semibold shadow-soft">
                    {product.badge}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <span className="font-heading text-lg sm:text-xl font-bold text-cream">
                    {product.price}
                  </span>
                  <span className="text-cream/80 text-xs sm:text-sm ml-1">
                    {product.unit}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-leaf-light flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="default" 
                  className="w-full gap-2"
                  onClick={() => handleOpenModal(product)}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Adquirir
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 lg:mt-12">
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            ¿Interesado en compras al por mayor o exportación?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://wa.me/51930572244?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n%20al%20por%20mayor" target="_blank" rel="noopener noreferrer">
              Solicitar Cotización
            </a>
          </Button>
        </div>
      </div>

      <ProductModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
};
