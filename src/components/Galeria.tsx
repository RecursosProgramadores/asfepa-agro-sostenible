import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-coffee-mountains.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import coffeePergamino from "@/assets/coffee-pergamino.jpg";
import coffeeOro from "@/assets/coffee-oro.jpg";
import coffeeTostado from "@/assets/coffee-tostado.jpg";
import coffeeSpecialty from "@/assets/coffee-specialty.jpg";

const galleryImages = [
  {
    src: heroImage,
    alt: "Plantaciones de café ASFEPA",
    category: "Plantaciones",
  },
  {
    src: coffeeBeans,
    alt: "Granos de café seleccionados",
    category: "Productos",
  },
  {
    src: coffeePergamino,
    alt: "Café pergamino secándose",
    category: "Proceso",
  },
  {
    src: coffeeOro,
    alt: "Café oro de exportación",
    category: "Productos",
  },
  {
    src: coffeeTostado,
    alt: "Café recién tostado",
    category: "Productos",
  },
  {
    src: coffeeSpecialty,
    alt: "Café de especialidad servido",
    category: "Experiencia",
  },
];

export const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Galería
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestra Historia en Imágenes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Desde nuestras plantaciones en las montañas hasta la taza perfecta, 
            cada imagen cuenta la historia de pasión y dedicación de ASFEPA.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 card-hover ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 ? "aspect-[4/3]" : "aspect-square"}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-coffee-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-leaf-light/90 text-cream text-xs font-medium mb-2">
                    {image.category}
                  </span>
                  <p className="text-cream text-sm font-medium line-clamp-2">
                    {image.alt}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-coffee-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-colors"
            aria-label="Cerrar galería"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 p-3 rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-colors"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 p-3 rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-colors"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            className="max-w-5xl max-h-[80vh] rounded-2xl overflow-hidden shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-cream font-medium mb-1">
              {galleryImages[selectedImage].alt}
            </p>
            <p className="text-cream/60 text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
