import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ctaTools from '@/assets/cta-tools.png';

const PrePricingCTA: React.FC = () => {
  return <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-yeon-purple/50 to-yeon-dark-purple/50 rounded-2xl p-8 md:p-12 border border-yeon-purple/20 relative overflow-hidden">
          <img 
            src={ctaTools} 
            alt="Tools" 
            className="absolute bottom-0 left-0 w-64 md:w-80 opacity-30 pointer-events-none"
          />
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 relative z-10">
            Fazer um lançamento não precisa ser um caos
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-zinc-50 relative z-10">
            Seu projeto merece mais que planilhas, mensagens no Whatsapp e anotações soltas por aí. 
            A Yeon ajuda você a acompanhar cada etapa do lançamento musical — prazos, tarefas, 
            arquivos e entregas — em um só lugar.
          </p>
          <Button size="lg" className="bg-yeon-purple hover:bg-yeon-dark-purple text-white font-medium px-8 py-6 text-lg relative z-10" asChild>
            <Link to="/release-planner">
              Comece Agora
            </Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default PrePricingCTA;