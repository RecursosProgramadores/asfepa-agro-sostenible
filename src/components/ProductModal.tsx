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
      <DialogContent className="w-[calc(100%-2rem)] max-w-md mx-auto rounded-xl sm:rounded-lg p-4 sm:p-6">
        <DialogHeader className="text-center sm:text-left space-y-2">
          <DialogTitle className="font-heading text-lg sm:text-xl text-foreground">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-primary font-semibold">
            {product.price} {product.unit}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 sm:py-6">
          <label className="block text-sm font-medium text-foreground mb-3 text-center">
            Selecciona la cantidad
          </label>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            >
              <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <span className="font-heading text-2xl sm:text-3xl font-bold text-foreground w-14 sm:w-16 text-center">
              {quantity}
            </span>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleIncrement}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>

        <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3">
          <Button 
            variant="outline" 
            onClick={onClose} 
            className="w-full sm:w-auto"
          >
            Cancelar
          </Button>
          <Button 
            onClick={handleWhatsAppOrder} 
            className="w-full sm:w-auto gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm sm:text-base">Enviar por WhatsApp</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
