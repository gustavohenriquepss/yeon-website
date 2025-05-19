
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('value-proposition');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: '50% 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-yeon-dark-bg/80 via-yeon-dark-bg/80 to-yeon-dark-bg"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 animate-fade-in tracking-tight">
          <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text">LIBERTE SEU </span>
          <span className="text-yeon-purple">POTENCIAL DE ARTISTA</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in">
          Gerencie sua carreira musical, distribua seu trabalho globalmente e maximize seus ganhos em uma única plataforma.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-yeon-purple hover:bg-yeon-dark-purple text-white font-medium px-8 py-6 text-lg"
            asChild
          >
            <RouterLink to="/calculator">
              Comece Agora
            </RouterLink>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
            onClick={scrollToNextSection}
          >
            Saiba Mais
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
