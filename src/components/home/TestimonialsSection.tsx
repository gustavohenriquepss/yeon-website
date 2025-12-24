import React, { useEffect } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  highlight?: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Yeon mudou completamente minha organização. Agora não perco mais nenhum prazo e meus lançamentos saem no tempo certo.",
      name: "Marina Silva",
      role: "Artista Independente",
      highlight: "não perco mais nenhum prazo"
    },
    {
      quote: "Consigo gerenciar 5 artistas simultaneamente sem perder o controle. A visibilidade do roadmap é perfeita.",
      name: "Carlos Mendes",
      role: "Manager Musical",
      highlight: "5 artistas simultaneamente"
    },
    {
      quote: "A melhor ferramenta para planejar releases. Simples, intuitiva e completa.",
      name: "Juliana Costa",
      role: "Produtora Musical",
      highlight: "Simples, intuitiva e completa"
    },
    {
      quote: "Desde que comecei a usar Yeon, meus lançamentos ficaram muito mais profissionais e organizados.",
      name: "Rafael Santos",
      role: "Artista Independente",
      highlight: "muito mais profissionais"
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-yeon-dark-bg to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Quem usa a Yeon, não volta para as planilhas.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Junte-se a centenas de artistas e gestores que profissionalizaram suas carreiras e transformaram o caos em consistência.
          </p>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border transition-all duration-500 ${
                index === activeIndex
                  ? 'bg-primary/10 border-primary/30 scale-[1.02] shadow-lg shadow-primary/10'
                  : 'bg-card/50 border-border/50 hover:bg-card/80 hover:border-border'
              }`}
            >
              {/* Quote icon */}
              <div className={`mb-4 transition-colors duration-300 ${
                index === activeIndex ? 'text-primary' : 'text-muted-foreground/30'
              }`}>
                <Quote className="w-8 h-8" />
              </div>

              {/* Quote text */}
              <p className="text-foreground/90 text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="mt-auto">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300 ${
                    index === activeIndex
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Active indicator */}
              {index === activeIndex && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full -mb-0.5" />
              )}
            </div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-foreground/90 text-base leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-6 bg-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;