import React, { useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Yeon mudou completamente minha organização. Agora não perco mais nenhum prazo e meus lançamentos saem no tempo certo.",
      name: "Marina Silva",
      role: "Artista Independente"
    },
    {
      quote: "Consigo gerenciar 5 artistas simultaneamente sem perder o controle. A visibilidade do roadmap é perfeita.",
      name: "Carlos Mendes",
      role: "Manager Musical"
    },
    {
      quote: "A melhor ferramenta para planejar releases. Simples, intuitiva e completa.",
      name: "Juliana Costa",
      role: "Produtora Musical"
    },
    {
      quote: "Desde que comecei a usar Yeon, meus lançamentos ficaram muito mais profissionais e organizados.",
      name: "Rafael Santos",
      role: "Artista Independente"
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

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

        {/* Carousel */}
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/1">
                <div className="p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                  {/* Quote icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Quote className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-center mb-8">
                    <p className="text-foreground text-xl md:text-2xl leading-relaxed font-medium">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 border-border/50 bg-card/50 hover:bg-card hover:border-border" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-10 w-10 border-border/50 bg-card/50 hover:bg-card hover:border-border" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;