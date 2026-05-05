import { Heart, ArrowUp, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logoApary from "@/assets/logo-apary.png";

const footerLinks = {
  navegacion: [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Productos", href: "/productos" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Términos y Condiciones", href: "/terminos" },
    { label: "Política de Privacidad", href: "/privacidad" },
  ],
  contacto: [
    { label: "+51 930 572 244", href: "https://wa.me/51930572244" },
    { label: "ventas@aparycafe.com", href: "mailto:ventas@aparycafe.com" },
    { label: "Luyando, Huánuco, Perú", href: "/contacto" },
  ]
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/asfepa", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/asfepa", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/51930572244", label: "WhatsApp" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1B1208] text-[#F5F5F5] relative overflow-hidden pt-20 border-t-4 border-[#81C784]">
      {/* Decorative Texture/Gradient */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/coffee-beans.png')]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Brand & Purpose */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <img 
                src={logoApary} 
                alt="APARY - Café Sostenible" 
                className="w-40 sm:w-48 group-hover:scale-105 transition-all duration-500 object-contain brightness-110"
              />
            </Link>
            <div className="space-y-4">
              <h4 className="font-heading text-2xl font-bold text-[#F5F5F5] tracking-tight">
                APARY <span className="text-[#81C784] block text-sm font-medium uppercase tracking-[0.3em] mt-1">Café Sostenible</span>
              </h4>
              <p className="text-[#C7B299] text-sm leading-relaxed">
                Impulsamos el desarrollo agrosostenible en las alturas de Huánuco, cultivando cafés de especialidad que transforman vidas y protegen nuestro ecosistema.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#81C784] hover:text-[#1B1208] transition-all duration-300 border border-white/10 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navegación Rápida */}
          <div className="lg:pl-12">
            <h4 className="font-heading text-lg font-bold text-[#F5F5F5] mb-8 relative inline-block">
              Navegación
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#81C784]" />
            </h4>
            <ul className="space-y-4">
              {footerLinks.navegacion.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[#C7B299] hover:text-[#81C784] text-sm transition-all flex items-center group font-medium"
                  >
                    <ArrowUp className="w-3 h-3 rotate-90 opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacto & Legal */}
          <div>
            <h4 className="font-heading text-lg font-bold text-[#F5F5F5] mb-8 relative inline-block">
              Contacto y Legal
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-[#81C784]" />
            </h4>
            <div className="space-y-8">
              <ul className="space-y-4">
                {footerLinks.contacto.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[#C7B299] hover:text-[#81C784] text-sm transition-all block font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/5 space-y-4">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block text-[#C7B299]/60 hover:text-[#81C784] text-xs transition-all italic"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Suscripción / CTA */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
            <h4 className="font-heading text-lg font-bold text-[#F5F5F5]">Especialidad en tu Email</h4>
            <p className="text-[#C7B299] text-xs leading-relaxed">
              Únete a nuestra comunidad y recibe noticias sobre nuestras cosechas y ofertas exclusivas.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full bg-[#1B1208] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#81C784] transition-all"
              />
              <button className="w-full bg-[#81C784] text-[#1B1208] font-bold text-xs uppercase tracking-widest py-3 rounded-xl hover:bg-white transition-all shadow-glow">
                Suscribirme
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[#C7B299]/40 text-xs">
            <span>Cultivado con amor en Huánuco, Perú</span>
          </div>
          <p className="text-[#C7B299]/60 text-xs">
            © {new Date().getFullYear()} ASFEPA - Marca APARY. Todos los derechos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[#81C784] text-xs font-bold uppercase tracking-widest hover:text-white transition-all"
          >
            Volver Arriba
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
