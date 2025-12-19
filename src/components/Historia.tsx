import { Users, Calendar, Award, Heart, Handshake, Building2 } from "lucide-react";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const timelineItems = [
  {
    year: "2024",
    title: "Fundación de ASFEPA",
    description: "El 25 de marzo del 2024, pequeños productores de Felipe Pinglo Alva se unieron para crear la Asociación Agrosostenible, motivados por mejorar sus condiciones de vida y fortalecer la producción agrícola.",
    icon: Users,
  },
  {
    year: "2024",
    title: "Visión Colectiva",
    description: "Profesionales visitaron la zona reconociendo el potencial productivo y la calidad de los productos, inspirando a los productores a organizarse formalmente.",
    icon: Award,
  },
  {
    year: "2024",
    title: "Alianzas Estratégicas",
    description: "ASFEPA estableció convenios de cooperación con DEVIDA, AGROBANCO y la ONG ECOSELVA, accediendo a asistencia técnica, financiamiento y capacitaciones.",
    icon: Handshake,
  },
  {
    year: "2024",
    title: "Articulación Institucional",
    description: "Trabajo coordinado con gobiernos locales y regional, participando en espacios de diálogo y planificación para impulsar el desarrollo productivo y social.",
    icon: Building2,
  },
];

export const Historia = () => {
  return (
    <section id="historia" className="section-padding bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestra Historia
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            De Felipe Pinglo Alva al Mundo
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            ASFEPA nació como una iniciativa colectiva impulsada por pequeños productores, 
            motivados por el deseo de mejorar las condiciones de vida, fortalecer la producción 
            agrícola y promover un modelo de desarrollo sostenible y responsable.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Story Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={coffeeBeans}
                alt="Granos de café artesanal ASFEPA"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/40 to-transparent" />
            </div>
            
            {/* Story Text */}
            <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-soft">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Nuestra Motivación
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Durante años, las familias agricultoras trabajaron de forma independiente, enfrentando 
                dificultades como la falta de asistencia técnica especializada, la limitada articulación 
                al mercado, bajos precios en la venta de sus productos y escasa capacidad para acceder 
                a proyectos o programas de financiamiento.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Con la necesidad de tener mejores y mayores accesos a comercializar de manera colectiva, 
                donde pudieran trabajar como grupo de socios y apuntar como conjunto colectivo, los 
                productores tomaron la decisión de formar una asociación basada en la unidad, solidaridad, 
                sostenibilidad y calidad productiva.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Desde su creación, ASFEPA ha centrado su labor en fortalecer las capacidades técnicas 
                y organizativas de sus socios, promoviendo una producción responsable y sostenible, 
                orientada al mercado y enfocada principalmente en el cultivo de café de calidad y 
                especialidad bajo la marca <strong className="text-primary">APARY</strong>.
              </p>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-leaf-light/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Timeline */}
          <div className="order-1 lg:order-2 space-y-8">
            {timelineItems.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                className="relative flex gap-4 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Line */}
                {index < timelineItems.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-border" />
                )}
                
                {/* Icon */}
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-leaf-dark to-leaf-light flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="w-5 h-5 text-cream" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-heading text-2xl font-bold text-primary">
                      {item.year}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
