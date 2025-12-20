import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
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
      `¡Hola! Me interesa adquirir:\n\n` +
      `📦 Producto: ${product.name}\n` +
      `💰 Precio: ${product.price} ${product.unit}\n` +
      `🔢 Cantidad: ${quantity}\n\n` +
      `Por favor, quisiera más información para realizar mi pedido.`
    );
    
    window.open(`https://wa.me/51930572244?text=${message}`, "_blank");
    onClose();
    setQuantity(1);
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">{product.name}</DialogTitle>
          <DialogDescription>
            {product.price} {product.unit}
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          <label className="block text-sm font-medium text-foreground mb-3">
            Cantidad
          </label>
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handleDecrement}
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="font-heading text-3xl font-bold text-foreground w-16 text-center">
              {quantity}
            </span>
            <Button variant="outline" size="icon" onClick={handleIncrement}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleWhatsAppOrder} className="gap-2">
            <ShoppingBag className="w-4 h-4" />
            Enviar Pedido por WhatsApp
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
