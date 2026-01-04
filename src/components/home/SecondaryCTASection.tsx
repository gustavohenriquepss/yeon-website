import React from 'react';
import { Button } from '@/components/ui/button';
import { useWaitlist } from '@/context/WaitlistContext';

const SecondaryCTASection: React.FC = () => {
  const { openWaitlist } = useWaitlist();
  
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
          
          <Button 
            size="lg" 
            className="bg-yeon-purple hover:bg-yeon-dark-purple text-white font-medium px-8 py-6 text-lg"
            onClick={openWaitlist}
          >
            Entrar na Lista VIP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecondaryCTASection;