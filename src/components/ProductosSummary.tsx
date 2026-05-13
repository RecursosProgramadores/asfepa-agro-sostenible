import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import productoImg from "@/assets/producto.png";

import imgPergamino from "@/assets/PRODUCTOS/CAFEPERGAMINOSECO.png";
import imgOroVerde from "@/assets/PRODUCTOS/CAFEOROVERDE.png";
import imgTostadoMolido from "@/assets/PRODUCTOS/CAFETOSTADOYMOLIDO.png";

const featuredProducts = [
  {
    id: 1,
    name: "Café Tostado y Molido",
    description: "Presentación lista para venta directa al consumidor, ideal para ferias y puntos de comercio local.",
    image: imgTostadoMolido,
  },
  {
    id: 2,
    name: "Café Oro Verde",
    description: "Grano de alta calidad listo para el proceso de tostado, es el resultado del trabajo cuidadoso de nuestros productores.",
    image: imgOroVerde,
  },
  {
    id: 3,
    name: "Café Pergamino Seco",
    description: "Café producido con buenas prácticas agrícolas y procesos de calidad en cosecha y postcosecha.",
    image: imgPergamino,
  }
];

export const ProductosSummary = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nuestra Selección
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Productos Destacados
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Descubre la esencia de nuestra tierra en cada grano. Procesos artesanales para un sabor inigualable.
            </p>
          </div>
          <Button asChild variant="ghost" className="group text-primary font-semibold animate-fade-up delay-100">
            <Link to="/productos" className="flex items-center gap-2">
              Ver todos los productos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted/20 p-6 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-[10px] font-bold text-foreground">TOP VENTAS</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-center mt-auto pt-4">
                  <Button size="sm" variant="default" className="w-full shadow-glow" asChild>
                    <a href={`https://wa.me/51930572244?text=¡Hola APARY!%20Me%20interesa%20adquirir%20el%20producto:%20${encodeURIComponent(product.name)}`} target="_blank" rel="noopener noreferrer">
                      Adquirir por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
