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
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Content */}
      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 animate-fade-in tracking-tight max-w-5xl">
          <span className="text-foreground">Planeje seus lançamentos </span>
          <span className="text-yeon-purple">com precisão e sem estresse</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in">
          Yeon ajuda artistas independentes a botar ritmo nos seus lançamentos com cronogramas claros e metas inteligentes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in">
          <Button size="lg" className="bg-yeon-purple hover:bg-yeon-dark-purple text-white font-medium px-8 py-6 text-lg" asChild>
            <RouterLink to="/release-planner">
              Comece Grátis
            </RouterLink>
          </Button>
          
          <Button variant="outline" size="lg" className="border-border hover:bg-accent px-8 py-6 text-lg" onClick={scrollToNextSection}>
            Veja Como Funciona
          </Button>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-6xl mx-auto animate-fade-in rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/lovable-uploads/81539f4f-c548-4030-92a8-20349de875ba.png" 
            alt="Yeon Release Planner Interface"
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce cursor-pointer" onClick={scrollToNextSection}>
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;