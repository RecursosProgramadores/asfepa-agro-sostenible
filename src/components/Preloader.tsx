import { useState, useEffect } from "react";
import logoApary from "@/assets/logo-apary.png";

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Wait 2 seconds

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2600); // Allow fade out animation

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#1B1208] transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <img
            src={logoApary}
            alt="APARY Logo"
            className={`w-48 sm:w-64 h-auto object-contain transition-all duration-1000 transform ${
              isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-110 opacity-0 -translate-y-4"
            } animate-float`}
          />
          {/* Pulse Glow Effect */}
          <div className="absolute inset-0 bg-[#81C784]/20 blur-3xl rounded-full scale-150 animate-pulse" />
        </div>

        {/* Loading Progress Bar */}
        <div className="w-32 sm:w-48 h-0.5 bg-white/10 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-[#81C784] animate-loading-bar" />
        </div>
        
        <p className="mt-4 text-[#C7B299] text-[10px] sm:text-xs uppercase tracking-[0.4em] font-medium animate-fade-in">
          Café de Especialidad
        </p>
      </div>
    </div>
  );
};
