import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PrePricingCTA: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-yeon-purple/20 to-yeon-dark-purple/20 rounded-2xl p-8 md:p-12 border border-yeon-purple/20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Fazer um lançamento não precisa ser um caos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Seu projeto merece mais que planilhas, mensagens no Whatsapp e anotações soltas por aí. 
            A Yeon ajuda você a acompanhar cada etapa do lançamento musical — prazos, tarefas, 
            arquivos e entregas — em um só lugar.
          </p>
          <Button 
            size="lg" 
            className="bg-yeon-purple hover:bg-yeon-dark-purple text-white font-medium px-8 py-6 text-lg"
            asChild
          >
            <Link to="/release-planner">
              Comece Agora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PrePricingCTA;
