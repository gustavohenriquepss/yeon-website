import React from 'react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';

const SecondaryCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-yeon-purple/20 to-yeon-dark-purple/20">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Planeje seu próximo lançamento agora
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Junte-se aos artistas que já organizam seus releases com precisão e lançam no tempo certo
          </p>
          
          <Button size="lg" className="bg-yeon-purple hover:bg-yeon-dark-purple text-white font-medium px-8 py-6 text-lg" asChild>
            <RouterLink to="/release-planner">
              Experimente Grátis
            </RouterLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecondaryCTASection;