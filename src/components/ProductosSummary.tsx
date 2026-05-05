import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import productoImg from "@/assets/producto.png";

const featuredProducts = [
  {
    id: 1,
    name: "Café de Especialidad - Alturas",
    description: "Notas frutales y un cuerpo balanceado, cultivado a más de 1800 msnm.",
    image: productoImg,
    price: "S/ 35.00"
  },
  {
    id: 2,
    name: "Café Tostado Artesanal",
    description: "Tostado medio que resalta la dulzura natural del grano huánuqueno.",
    image: productoImg,
    price: "S/ 28.00"
  },
  {
    id: 3,
    name: "Café Oro Seleccionado",
    description: "Grano verde de exportación, seleccionado manualmente para máxima pureza.",
    image: productoImg,
    price: "S/ 45.00"
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
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
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
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-primary font-bold text-lg">{product.price}</span>
                  <Button size="sm" variant="outline" asChild>
                    <Link to="/productos">Detalles</Link>
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
