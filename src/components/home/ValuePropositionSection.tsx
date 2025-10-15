import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ValuePropositionSection: React.FC = () => {
  const benefits = [
    {
      title: "Gerencie",
      description: "Acompanhe todas as etapas e o progresso das tarefas de todos os seus lançamentos",
      image: "/placeholder.svg" // Substitua pela imagem desejada
    },
    {
      title: "Personalize",
      description: "Comece com o um template testado por +40 profissionais da música e customize pra cada lançamento",
      image: "/placeholder.svg" // Substitua pela imagem desejada
    },
    {
      title: "Colabore",
      description: "Mantenha toda a sua equipe alinhada em cada etapa de todos os projetos",
      image: "/placeholder.svg" // Substitua pela imagem desejada
    }
  ];

  return (
    <section id="value-proposition" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Por que Yeon?
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-8">
            Yeon é a ferramenta definitiva para planejar e lançar músicas. Mais que um checklist, é um guia prático com estratégias testadas para campanhas eficazes, crescimento de fãs e lançamentos de sucesso.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;