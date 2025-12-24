import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ScrollReveal } from '@/components/ui/scroll-reveal';

import testimonialMarina from "@/assets/testimonial-marina.jpg";
import testimonialCarlos from "@/assets/testimonial-carlos.jpg";
import testimonialJuliana from "@/assets/testimonial-juliana.jpg";
import testimonialRafael from "@/assets/testimonial-rafael.jpg";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Yeon mudou completamente minha organização. Agora não perco mais nenhum prazo e meus lançamentos saem no tempo certo.",
      name: "Mtzyn",
      role: "Artista Independente",
      image: testimonialMarina
    },
    {
      quote: "Consigo gerenciar meus artistas simultaneamente sem perder o controle. A visibilidade do roadmap é perfeita.",
      name: "Isaac Tomé",
      role: "Label Manager",
      image: testimonialCarlos
    },
    {
      quote: "A melhor ferramenta para planejar releases. Simples, intuitiva e completa.",
      name: "Maui",
      role: "Artista Independente",
      image: testimonialJuliana
    },
    {
      quote: "Desde que comecei a usar Yeon, meus lançamentos ficaram muito mais profissionais e organizados.",
      name: "Joazz",
      role: "Artista Independente",
      image: testimonialRafael
    }
  ];

  const [api, setApi] = React.useState<any>(null);
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Quem usa a Yeon, não volta para as planilhas.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground">
              Junte-se a centenas de artistas e gestores que profissionalizaram suas carreiras e transformaram o caos em consistência.
            </p>
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <ScrollReveal delay={0.2}>
          <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin.current]}
          setApi={setApi}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/1">
                <div className="p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                  {/* Quote text */}
                  <blockquote className="text-center mb-8">
                    <p className="text-foreground text-xl md:text-2xl leading-relaxed font-medium">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="text-center">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => api?.scrollPrev()}
              className="h-10 w-10 rounded-full border border-border/50 bg-card/50 hover:bg-card hover:border-border flex items-center justify-center transition-colors"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-6 bg-primary'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={() => api?.scrollNext()}
              className="h-10 w-10 rounded-full border border-border/50 bg-card/50 hover:bg-card hover:border-border flex items-center justify-center transition-colors"
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
            </div>
          </Carousel>
        </ScrollReveal>
        </div>
      </section>
  );
};

export default TestimonialsSection;