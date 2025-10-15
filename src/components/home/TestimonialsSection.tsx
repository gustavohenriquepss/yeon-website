import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
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

  return (
    <section className="py-20 bg-yeon-dark-bg">
      <div className="container px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-8 rounded-lg text-center">
                  <p className="text-white/90 text-lg md:text-xl mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                    <p className="text-white/70">{testimonial.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;