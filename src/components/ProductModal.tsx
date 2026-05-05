import { useState } from "react";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    image: string;
    price: string;
    unit: string;
  } | null;
}

export const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleWhatsAppOrder = () => {
    if (!product) return;
    
    const message = encodeURIComponent(
      `¡Hola APARY! ☕\n\n` +
      `Me interesa adquirir el siguiente producto:\n` +
      `--------------------------------\n` +
      `📦 *Producto:* ${product.name}\n` +
      `💰 *Precio:* ${product.price} (${product.unit})\n` +
      `🔢 *Cantidad:* ${quantity}\n` +
      `--------------------------------\n` +
      `Por favor, quisiera coordinar los detalles del pedido y el envío.\n\n` +
      `¡Muchas gracias! 🙌`
    );
    
    window.open(`https://wa.me/51930572244?text=${message}`, "_blank");
    onClose();
    setQuantity(1);
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-background rounded-3xl shadow-elevated">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 lg:h-auto bg-muted/30">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <button 
              onClick={onClose}
              className="absolute top-4 left-4 lg:hidden w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-foreground shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Side */}
          <div className="p-8 lg:p-12 flex flex-col">
            <div className="flex-1 space-y-6">
              <div>
                <span className="text-primary font-bold text-sm tracking-wider uppercase">
                  Detalles del Producto
                </span>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mt-2">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-muted-foreground">{product.unit}</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="h-px bg-border w-full" />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-foreground uppercase tracking-tight">
                  Cantidad a solicitar
                </label>
                <div className="flex items-center gap-6">
                  <div className="flex items-center bg-muted/50 rounded-2xl p-1 border border-border">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleDecrement}
                      disabled={quantity <= 1}
                      className="w-10 h-10 rounded-xl hover:bg-white hover:shadow-sm"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-heading text-xl font-bold text-foreground w-12 text-center">
                      {quantity}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={handleIncrement}
                      className="w-10 h-10 rounded-xl hover:bg-white hover:shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 space-y-3">
              <Button 
                onClick={handleWhatsAppOrder} 
                size="lg"
                className="w-full gap-3 shadow-glow h-14"
              >
                <ShoppingBag className="w-5 h-5" />
                Realizar Pedido por WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={onClose} 
                className="w-full h-14 border-2"
              >
                Cerrar Ventana
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
