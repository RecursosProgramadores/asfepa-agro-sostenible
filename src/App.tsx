import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import ProductosPage from "./pages/ProductosPage";
import ContactoPage from "./pages/ContactoPage";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import NotFound from "./pages/NotFound";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Preloader } from "@/components/Preloader";
import { useEffect } from "react";

const queryClient = new QueryClient();

const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    // Small timeout to ensure DOM is updated
    const timeoutId = setTimeout(() => {
      const revealElements = document.querySelectorAll(".reveal, .reveal-stagger");
      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <Preloader />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/">
            <ScrollReveal />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/productos" element={<ProductosPage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="/terminos" element={<Terminos />} />
              <Route path="/privacidad" element={<Privacidad />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <WhatsAppButton />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
