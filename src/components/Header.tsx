import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoApary from "@/assets/logo-apary.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Historia", href: "#historia" },
  { label: "Misión", href: "#mision" },
  { label: "Productos", href: "#productos" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft"
          : "bg-primary/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 sm:gap-3 group">
            <img 
              src={logoApary} 
              alt="APARY - Café Sostenible" 
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow-soft group-hover:shadow-glow transition-all duration-300 object-cover"
            />
            <div className="flex flex-col">
              <span className={`font-heading text-base sm:text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-cream'}`}>
                APARY
              </span>
              <span className={`text-[10px] sm:text-xs font-body transition-colors duration-300 ${isScrolled ? 'text-muted-foreground' : 'text-cream/80'}`}>
                Café Sostenible
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-primary/10 ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-cream hover:text-cream/80"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button variant={isScrolled ? "default" : "hero"} size="sm" className="ml-4">
              Contáctanos
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? "text-foreground bg-muted/50" 
                : "text-cream bg-cream/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-card shadow-elevated transition-all duration-300 overflow-hidden border-t border-border ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors text-sm border-b border-border/50 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <Button variant="default" className="mt-3 w-full">
            Contáctanos
          </Button>
        </nav>
      </div>
    </header>
  );
};
