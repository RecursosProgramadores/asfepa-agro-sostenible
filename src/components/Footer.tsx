import { Leaf, Heart, ArrowUp } from "lucide-react";

const footerLinks = {
  empresa: [
    { label: "Historia", href: "#historia" },
    { label: "Misión y Visión", href: "#mision" },
    { label: "Valores", href: "#mision" },
    { label: "Equipo", href: "#galeria" },
  ],
  productos: [
    { label: "Café Pergamino", href: "#productos" },
    { label: "Café Oro", href: "#productos" },
    { label: "Café Tostado", href: "#productos" },
    { label: "Café de Especialidad", href: "#productos" },
  ],
  soporte: [
    { label: "Contacto", href: "#contacto" },
    { label: "Preguntas Frecuentes", href: "#" },
    { label: "Envíos", href: "#" },
    { label: "Exportación", href: "#contacto" },
  ],
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-coffee-dark text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#inicio" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-leaf-dark to-leaf-light flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                <Leaf className="w-6 h-6 text-cream" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-cream">
                  ASFEPA
                </span>
                <span className="text-xs text-cream/70">
                  Café Sostenible
                </span>
              </div>
            </a>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Asociación Agrosostenible de Felipe Pinglo Alva. Cultivamos café 
              con pasión, tradición y respeto por la naturaleza.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-heading font-semibold text-cream mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-cream text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Productos */}
          <div>
            <h4 className="font-heading font-semibold text-cream mb-4">
              Productos
            </h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-cream text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="font-heading font-semibold text-cream mb-4">
              Soporte
            </h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-cream text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-cream/60 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} ASFEPA. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-cream/60 text-sm">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-cherry fill-cherry" />
              <span>en Perú</span>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5 text-cream" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
