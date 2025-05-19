
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FinalCTASection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yeon-dark-purple via-yeon-dark-bg to-yeon-dark-bg z-0"></div>
      
      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para Transformar sua Carreira Musical?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Junte-se a milhares de artistas que estão expandindo seu alcance e maximizando seus ganhos com a Yeon Music.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-yeon-dark-purple hover:bg-white/90 font-medium px-8 py-6 text-lg"
              asChild
            >
              <Link to="/calculator">
                Comece Grátis
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              asChild
            >
              <Link to="/about">
                Ver Demonstração
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Sem necessidade de cartão de crédito. Comece com um período de teste gratuito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
