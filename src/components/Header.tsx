import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoApary from "@/assets/logo-apary.png";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Productos", href: "/productos" },
  { label: "Contacto", href: "/contacto" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Header state: transparent only on home at top AND menu closed
  const headerActive = (!isHomePage || isScrolled) || isOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        headerActive
          ? "bg-white shadow-elevated py-2"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${headerActive ? 'h-12 sm:h-14' : 'h-16 sm:h-20'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
            <img 
              src={logoApary} 
              alt="APARY - Café Sostenible" 
              className={`transition-all duration-500 object-contain h-auto ${
                headerActive ? "w-32 sm:w-40" : "w-40 sm:w-56"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-1 ${
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-black hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <Button variant="default" size="sm" className="ml-4 shadow-soft" asChild>
              <Link to="/contacto">Contáctanos</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-black bg-black/5 hover:bg-black/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
        style={{ top: headerActive ? (window.innerWidth < 640 ? '64px' : '72px') : '80px' }}
      >
        <nav className="h-full overflow-y-auto py-12 px-6 flex flex-col gap-6">
          {navItems.map((item, index) => (
            <div key={item.label} className="space-y-4">
              <Link
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-heading font-bold transition-all duration-500 transform flex items-center justify-between ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                } ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            </div>
          ))}
          
          <Button 
            variant="default" 
            size="lg" 
            className={`mt-4 w-full transition-all duration-500 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${navItems.length * 50 + 200}ms` }}
            asChild
          >
            <Link to="/contacto" onClick={() => setIsOpen(false)}>
              Contáctanos Ahora
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};
