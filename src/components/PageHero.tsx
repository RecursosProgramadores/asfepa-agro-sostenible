import homeApary from "@/assets/homeapary.jpeg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-end justify-start overflow-hidden mt-16 sm:mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage || homeApary} 
          alt={title} 
          className="w-full h-full object-cover animate-scale-in object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 sm:pb-16 lg:pb-24">
        <div className="animate-fade-up max-w-4xl">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-cream mb-3 sm:mb-6 tracking-tight drop-shadow-lg leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-cream text-base sm:text-lg md:text-xl lg:text-2xl font-body drop-shadow-md leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="mt-4 sm:mt-8 w-16 sm:w-24 h-1 sm:h-1.5 bg-primary rounded-full shadow-lg" />
        </div>
      </div>
    </section>
  );
};
