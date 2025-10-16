import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import heroDashboard from '@/assets/hero-dashboard.png';
import heroDashboardMobile from '@/assets/hero-dashboard-mobile.png';

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
        <Badge className="bg-white/10 text-white/70 hover:bg-white/15 border-white/20 text-sm mb-6 animate-fade-in">
          Aprovado por +50 artistas e profissionais da música
        </Badge>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 animate-fade-in tracking-tight max-w-6xl text-white">
          Planeje seus lançamentos sem estresse com <span className="text-yeon-purple">apenas um clique</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto mb-10 animate-fade-in">
          Centralize tarefas, prazos e entregas em um só lugar. A Yeon transforma o jeito de lançar músicae cada etapa do seu projeto ganha estrutura, visibilidade e ritmo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in">
          <Button variant="outline" size="lg" className="border-border hover:bg-white/10 px-8 py-6 text-lg" asChild>
            <RouterLink to="/auth">
              Entrar
            </RouterLink>
          </Button>
          
          <Button size="lg" className="bg-yeon-purple hover:bg-yeon-dark-purple text-white font-medium px-8 py-6 text-lg" asChild>
            <RouterLink to="/auth">
              Cadastre-se
            </RouterLink>
          </Button>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-6xl mx-auto animate-fade-in">
          <img 
            src={heroDashboard} 
            alt="Yeon Dashboard - Gerencie seus lançamentos musicais"
            className="w-full h-auto rounded-lg hidden md:block"
          />
          <img 
            src={heroDashboardMobile} 
            alt="Yeon Dashboard Mobile - Gerencie seus lançamentos musicais"
            className="w-full h-auto rounded-lg md:hidden"
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