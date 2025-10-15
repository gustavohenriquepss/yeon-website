import React from 'react';

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
    },
    {
      quote: "O kanban integrado facilitou demais a comunicação com minha equipe. Todos sabem exatamente o que fazer.",
      name: "Beatriz Lima",
      role: "Manager de Selo"
    },
    {
      quote: "Finalmente uma ferramenta que entende o processo criativo e os prazos da indústria musical.",
      name: "Pedro Oliveira",
      role: "Produtor Executivo"
    }
  ];

  return (
    <section className="py-20 bg-yeon-dark-bg">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg"
            >
              <p className="text-white/90 text-base md:text-lg mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-white/70 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;