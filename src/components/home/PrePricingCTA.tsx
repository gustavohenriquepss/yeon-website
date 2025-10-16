import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ctaTools from '@/assets/cta-tools.png';

const PrePricingCTA: React.FC = () => {
  return <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center bg-card rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden">
          <img 
            src={ctaTools} 
            alt="Tools" 
            className="absolute bottom-0 left-0 w-80 md:w-96 opacity-30 pointer-events-none"
          />
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 relative z-10">
            Fazer um lançamento não precisa ser um caos
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-zinc-50 relative z-10">
            Seu projeto merece mais que planilhas, mensagens no Whatsapp e anotações soltas por aí. Com a Yeon, você tem uma estrutura real pra planejar e executar lançamentos sem perder prazos, tarefas ou oportunidades.
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