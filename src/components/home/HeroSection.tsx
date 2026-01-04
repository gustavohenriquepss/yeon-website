import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import heroDashboard from '@/assets/hero-dashboard.png';
import heroDashboardMobile from '@/assets/hero-dashboard-mobile.png';
import mtzyn from '@/assets/artists/mtzyn.png';
import maui from '@/assets/artists/maui.jpg';
import joazz from '@/assets/artists/joazz.jpg';

const HeroSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('value-proposition');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center text-center px-[20px]">
        <ScrollReveal delay={0}>
          <Badge className="bg-white/10 text-white/70 hover:bg-white/15 border-white/20 text-sm mb-6 px-[16px] py-[8px] flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-white/20 bg-muted overflow-hidden">
                <img src={mtzyn} alt="Mtzyn" className="w-full h-full object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-white/20 bg-muted overflow-hidden">
                <img src={maui} alt="Maui" className="w-full h-full object-cover" />
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-white/20 bg-muted overflow-hidden">
                <img src={joazz} alt="Joazz" className="w-full h-full object-cover" />
              </div>
            </div>
            +100 artistas pré-cadastrados
          </Badge>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 tracking-tight max-w-6xl text-white">
            Planeje seus lançamentos sem estresse <span className="text-secondary-foreground">em segundos</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto mb-10">A plataforma de gestão musical que automatiza prazos, alinha sua equipe e garante que cada música chegue ao topo</p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="outline" size="lg" className="border-border hover:bg-white/10 px-8 py-6 text-lg" asChild>
              <Link to="/auth">Entrar</Link>
            </Button>
            
            <Button size="lg" className="bg-yeon-purple hover:bg-yeon-dark-purple text-white font-medium px-8 py-6 text-lg" asChild>
              <Link to="/auth">Cadastre-se</Link>
            </Button>
          </div>
        </ScrollReveal>

        {/* Hero Image */}
        <ScrollReveal delay={0.4} className="w-full max-w-6xl mx-auto">
          <img src={heroDashboard} alt="Yeon Dashboard - Gerencie seus lançamentos musicais" className="w-full h-auto rounded-lg hidden md:block" />
          <img src={heroDashboardMobile} alt="Yeon Dashboard Mobile - Gerencie seus lançamentos musicais" className="w-full h-auto rounded-lg md:hidden" />
        </ScrollReveal>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce cursor-pointer" onClick={scrollToNextSection}>
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>;
};
export default HeroSection;