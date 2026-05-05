import homeApary from "@/assets/homeapary.jpeg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={homeApary} 
          alt={title} 
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-up">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-4 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-cream/80 text-lg sm:text-xl max-w-2xl mx-auto font-body">
              {subtitle}
            </p>
          )}
          <div className="mt-6 w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </div>
      </div>
    </section>
  );
};
