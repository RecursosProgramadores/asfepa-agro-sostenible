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
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img 
              src={logoApary} 
              alt="APARY - Café Sostenible" 
              className="w-14 h-14 rounded-full shadow-soft group-hover:shadow-glow transition-all duration-300 object-cover"
            />
            <div className="flex flex-col">
              <span className={`font-heading text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-cream'}`}>
                APARY
              </span>
              <span className={`text-xs font-body transition-colors duration-300 ${isScrolled ? 'text-muted-foreground' : 'text-cream/80'}`}>
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
              isScrolled ? "text-foreground" : "text-cream"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md shadow-elevated transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button variant="default" className="mt-4">
            Contáctanos
          </Button>
        </nav>
      </div>
    </header>
  );
};
