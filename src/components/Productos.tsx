import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductModal } from "./ProductModal";
import productoImg from "@/assets/producto.png";
import imgPergamino from "@/assets/PRODUCTOS/CAFEPERGAMINOSECO.png";
import imgOroVerde from "@/assets/PRODUCTOS/CAFEOROVERDE.png";
import imgTostado from "@/assets/PRODUCTOS/CAFETOSTADO(ACTUALIZADO).png";
import imgTostadoMolido from "@/assets/PRODUCTOS/CAFETOSTADOYMOLIDO.png";

const products = [
  {
    name: "Café Pergamino",
    description: "Café producido por los socios manejado con buenas prácticas agrícolas y procesos de calidad en cosecha y post cosecha.",
    image: imgPergamino,
    price: "Según bolsa de valores",
    unit: "por quintal",
    features: [
      "Cuidadosamente seleccionado y procesado",
      "Cafés de procesos limpios",
      "Fermentación aeróbica y anaeróbica"
    ],
    badge: "Exportación",
    technicalDetails: [
      { label: "Denominación", value: "Café Pergamino Seco" },
      { label: "Variedades", value: "Geysha, Caturra, Catuaí, Catimor, Obata rojo" },
      { label: "Altitud", value: "1,500 – 1,800 msnm" },
      { label: "Origen", value: "Felipe Pinglo Alva, Luyando, Huánuco – Perú" },
      { label: "Proceso", value: "Cosecha selectiva, fermentación controlada, secado solar, humedad 10-12%" },
      { label: "Características", value: "Granos uniformes, limpios, sin defectos primarios visibles" },
      { label: "Presentación", value: "Sacos de polipropileno de 50 kg" },
      { label: "Vida Útil", value: "6 a 12 meses en condiciones óptimas" }
    ]
  },
  {
    name: "Café Oro Verde",
    description: "Grano de alta calidad listo para el proceso de tostado, es el resultado del trabajo cuidadoso de nuestros productores.",
    image: imgOroVerde,
    price: "Según bolsa de valores",
    unit: "por quintal",
    features: [
      "Seleccionado por defectos primarios",
      "Granulometría uniforme",
      "Humedad adecuada para tostado"
    ],
    badge: "Premium",
    technicalDetails: [
      { label: "Denominación", value: "Café Oro Verde" },
      { label: "Variedades", value: "Geysha, Caturra, Catuaí, Catimor, Obata rojo" },
      { label: "Altitud", value: "1,500 – 1,800 msnm" },
      { label: "Proceso", value: "Trilla mecánica, clasificación por tamaño y densidad, selección de defectos" },
      { label: "Humedad", value: "10 % – 12 %" },
      { label: "Perfil Sensorial", value: "Limpio, floral, frutal, dulce natural, acidez brillante" },
      { label: "Presentación", value: "Sacos de yute o polipropileno de 50 kg" },
      { label: "Rendimiento", value: "78 % – 82 % (de pergamino a oro verde)" }
    ]
  },
  {
    name: "Café Tostado 1KG",
    description: "Ideal para consumo local y comercialización. Café de especialidad con notas excepcionales.",
    image: imgTostado,
    price: "S/. 55.00",
    unit: "por 1kg",
    features: [
      "Café de especialidad 80-85 puntos",
      "Variedades Catuaí, Caturra y Geisha",
      "Tostado artesanal"
    ],
    badge: "Popular",
    technicalDetails: [
      { label: "Denominación", value: "Café Tostado en Grano" },
      { label: "Nivel de Tostado", value: "Medio / Medio oscuro (artesanal y controlado)" },
      { label: "Perfil Sensorial", value: "Aroma floral/frutal, notas a jazmín y chocolate suave, cuerpo sedoso" },
      { label: "Materia Prima", value: "Café oro verde seleccionado (humedad 10-12%)" },
      { label: "Empaque", value: "Bolsa trilaminada con válvula desgasificadora" },
      { label: "Vida Útil", value: "6 a 8 meses cerrado" },
      { label: "Uso Recomendado", value: "Consumo doméstico, cafeterías, restaurantes" }
    ]
  },
  {
    name: "Café Tostado y Molido 1KG",
    description: "Presentación lista para venta directa al consumidor, ideal para ferias y puntos de comercio local.",
    image: imgTostadoMolido,
    price: "S/. 60.00",
    unit: "por 1kg",
    features: [
      "Café de especialidad 80-85 puntos",
      "Variedades Catuaí, Caturra y Geisha",
      "Listo para preparar"
    ],
    badge: "Artesanal",
    technicalDetails: [
      { label: "Denominación", value: "Café Tostado y Molido" },
      { label: "Tipos de Molienda", value: "Gruesa (Prensa), Media (Filtro), Fina (Espresso)" },
      { label: "Nivel de Tostado", value: "Medio / Medio oscuro" },
      { label: "Perfil Sensorial", value: "Dulce balanceado, jazmín, frutas tropicales, chocolate suave" },
      { label: "Materia Prima", value: "Café oro verde seleccionado" },
      { label: "Empaque", value: "Bolsa trilaminada con válvula desgasificadora" },
      { label: "Vida Útil", value: "6 meses (consumir en 30 días una vez abierto)" },
      { label: "Uso Recomendado", value: "Métodos de filtro, italiana, prensa francesa, espresso" }
    ]
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
    <section id="productos" className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 reveal">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto gap-4 sm:gap-6 lg:gap-8 reveal-stagger">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-muted/20 p-6 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-2 py-1 sm:px-3 rounded-full bg-leaf-light text-cream text-xs font-semibold shadow-soft">
                    {product.badge}
                  </span>
                </div>

                {/* Removed Price Section */}
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
