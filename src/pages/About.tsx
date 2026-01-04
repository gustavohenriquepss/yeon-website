import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, LayoutDashboard, BarChart3, Lightbulb, UserPlus, Sparkles, Kanban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import lucasAndrade from '@/assets/lucas-andrade.jpeg';
import heroAbout from '@/assets/hero-about.jpg';
import gustavoPadeiro from '@/assets/gustavo-padeiro.jpg';
import arthurSena from '@/assets/arthur-sena.jpeg';
const AboutContent: React.FC = () => {
  const {
    t
  } = useLanguage();

  // Team members data
  const teamMembers = [{
    name: "Arthur Sena",
    role: "Engenheiro de Software",
    imageUrl: arthurSena,
    bio: "Engenheiro de Software pela UNB e guitarrista nas horas vagas, com vivência em startups como Geekie e Uber. É viciado em criar playlists no Spotify pra cada ocasião da vida."
  }, {
    name: "Gustavo Padeiro",
    role: "Design Engineer",
    imageUrl: gustavoPadeiro,
    bio: "Artista independente, empreendedor serial e designer com experiência em startups e na indústria musical, buscando simplificar o music business para outros artistas."
  }, {
    name: "Lucas Andrade",
    role: "Engenheiro de Software",
    imageUrl: lucasAndrade,
    bio: "Entusiasta da música e da tecnologia, engenheiro de software pela UFF e especialista em System Design. Nas horas vagas é educador tech."
  }];
  return <main className="bg-yeon-dark-bg">
      {/* Hero Section - Quem Somos */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          {/* Large Title */}
          <ScrollReveal>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-16 md:mb-24">
              Botamos Ritmo<span className="text-primary">.</span>
            </h1>
          </ScrollReveal>
          
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start">
            {/* Left - Label */}
            <ScrollReveal delay={0.1} className="md:col-span-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full border border-foreground/30 flex items-center justify-center text-xs">+</span>
              <span className="text-sm font-medium">Sobre nós</span>
            </ScrollReveal>
            
            {/* Center - Main Paragraph */}
            <ScrollReveal delay={0.2} className="md:col-span-6">
              <p className="text-xl md:text-2xl leading-relaxed">
                <span className="font-semibold">Somos um time de artistas independentes apaixonados que entendem bem a correria artística.</span>{' '}
                <span className="text-muted-foreground">
                  Ajudamos outros artistas a se organizarem, fazerem sua música ser ouvida e realizarem seus sonhos.
                </span>
              </p>
            </ScrollReveal>
            
            {/* Right - Supporting Text */}
            <ScrollReveal delay={0.3} className="md:col-span-4 md:text-right">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs md:ml-auto">
                A Yeon foi criada para os sonhadores que realizam. Somos a plataforma, os parceiros e as pessoas por trás da próxima geração de artistas independentes.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Hero Image */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <ScrollReveal>
          <div className="w-full overflow-hidden rounded-2xl">
            <img src={heroAbout} alt="Artistas trabalhando em estúdio" className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover" />
          </div>
        </ScrollReveal>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-yeon-dark-bg">
        <div className="container px-4">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                {t('about.whatWeDoTitle')}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="max-w-3xl mx-auto text-lg text-white/70">
                Yeon é a ferramenta definitiva para planejar e lançar músicas. Mais que um checklist, é um guia prático com estratégias testadas para campanhas eficazes, crescimento de fãs e lançamentos de sucesso.
              </p>
            </ScrollReveal>
          </div>
          
          {/* Main Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <ScrollReveal delay={0.2}>
              <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                    <LayoutDashboard className="h-5 w-5" />
                    Gestão
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Acompanhe todas as etapas e o progresso das tarefas de todos os seus lançamentos
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Veja exatamente como seu trabalho flui para que você possa se concentrar no que importa e obter mais resultados.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Colaboração
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Mantenha toda a sua equipe alinhada em cada etapa de todos os projetos
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

        </div>
      </section>
      
      {/* Our Community Section - REMOVIDA */}
      
      {/* Nosso Time Section - Redesigned */}
      <section className="bg-muted/30 py-[40px] px-[24px] rounded-md">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-between h-full min-h-[500px]">
              <ScrollReveal>
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                    Feita por artistas,{' '}
                    <span className="text-muted-foreground">para artistas.</span>
                  </h2>
                </div>
              </ScrollReveal>
              
              {/* Collaboration Quote */}
              <ScrollReveal delay={0.1}>
                <div className="pt-8 max-w-lg">
                  <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">Young Entrepreneurs of Noise</p>
                  <p className="text-lg md:text-xl leading-relaxed">
                    <span className="font-semibold">Somos artistas independentes e amantes da música</span>{' '}
                    <span className="text-muted-foreground">
                      construindo o futuro do Music Marketing no Brasil.
                    </span>
                  </p>
                </div>
              </ScrollReveal>
              
              {/* Mission CTA */}
              <ScrollReveal delay={0.2}>
                <div className="space-y-4 py-[33px] px-0 pb-0 pt-[48px]">
                  <h3 className="text-lg font-semibold">Vamo botar ritmo?</h3>
                  <p className="text-muted-foreground max-w-sm">Comece a usar a plataforma, é de graça, pra sempre.</p>
                  <Button variant="secondary" size="lg">
                    Começar agora
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Right Column - Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teamMembers.slice(0, 2).map((member, index) => (
                <ScrollReveal key={member.name} delay={0.1 + index * 0.1}>
                  <div className="relative group overflow-hidden rounded-2xl cursor-pointer" onClick={e => {
                    if (window.innerWidth < 640) {
                      e.currentTarget.classList.toggle('active');
                    }
                  }}>
                    <div className="aspect-[3/4] w-full">
                      <img src={member.imageUrl} alt={member.name} className={`w-full h-full object-cover transition-all duration-500 ${member.name === 'Gustavo Padeiro' ? 'scale-150 object-[40%_top] group-hover:scale-150 group-hover:blur-sm group-[.active]:scale-150 group-[.active]:blur-sm' : 'group-hover:scale-105 group-hover:blur-sm group-[.active]:scale-105 group-[.active]:blur-sm'}`} />
                    </div>
                    
                    {/* Overlay with info - darker on hover/active */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/30 group-[.active]:from-black/90 group-[.active]:via-black/50 group-[.active]:to-black/30" />
                    
                    {/* Plus icon */}
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-lg font-light">+</span>
                    </div>
                    
                    {/* Role badge - hides on hover/active */}
                    <div className="absolute top-4 right-4 text-right transition-opacity duration-300 group-hover:opacity-0 group-[.active]:opacity-0">
                      <p className="text-xs font-medium text-white/90">{member.role}</p>
                      <p className="text-xs text-white/60">na yeon®</p>
                    </div>
                    
                    {/* Name and Bio */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight transition-transform duration-300 group-hover:-translate-y-2 group-[.active]:-translate-y-2">
                        {member.name.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}
                      </h3>
                      {/* Bio - appears on hover/tap */}
                      <p className="text-sm text-white/80 mt-2 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 group-[.active]:max-h-40 group-[.active]:opacity-100">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
              
              {/* Empty slot */}
              <div className="hidden sm:block aspect-[3/4]" />
              
              {/* Lucas Andrade - moved to 4th position */}
              {teamMembers[2] && (
                <ScrollReveal delay={0.3}>
                  <div className="relative group overflow-hidden rounded-2xl cursor-pointer" onClick={e => {
                    if (window.innerWidth < 640) {
                      e.currentTarget.classList.toggle('active');
                    }
                  }}>
                    <div className="aspect-[3/4] w-full">
                      <img src={teamMembers[2].imageUrl} alt={teamMembers[2].name} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm group-[.active]:scale-105 group-[.active]:blur-sm" />
                    </div>
                    
                    {/* Overlay with info - darker on hover/active */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/30 group-[.active]:from-black/90 group-[.active]:via-black/50 group-[.active]:to-black/30" />
                    
                    {/* Plus icon */}
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-lg font-light">+</span>
                    </div>
                    
                    {/* Role badge - hides on hover/active */}
                    <div className="absolute top-4 right-4 text-right transition-opacity duration-300 group-hover:opacity-0 group-[.active]:opacity-0">
                      <p className="text-xs font-medium text-white/90">{teamMembers[2].role}</p>
                      <p className="text-xs text-white/60">na yeon®</p>
                    </div>
                    
                    {/* Name and Bio */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight transition-transform duration-300 group-hover:-translate-y-2 group-[.active]:-translate-y-2">
                        {teamMembers[2].name.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}
                      </h3>
                      {/* Bio - appears on hover/tap */}
                      <p className="text-sm text-white/80 mt-2 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 group-[.active]:max-h-40 group-[.active]:opacity-100">
                        {teamMembers[2].bio}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Manifesto Section */}
      <section className="py-16 bg-yeon-dark-bg">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <ScrollReveal>
              <p className="text-lg md:text-xl font-semibold">
                A indústria musical não foi feita pra todos, então vamos construir algo novo.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base md:text-lg text-white/80">
                Acreditamos que acesso, propriedade e suporte não devem ser reservados para poucos.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg text-white/80">
                Conhecemos a correria. Conhecemos a dor. E sabemos que, com a orientação, a tecnologia e a equipe certas por trás de você, esse sonho é possível.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base md:text-lg text-white/80">
                Não estamos aqui para jogar.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-lg md:text-xl font-semibold">
                Estamos aqui para reescrever as regras.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
    </main>;
};
const About: React.FC = () => {
  const {
    t
  } = useLanguage();
  return <>
      <Helmet>
        <title>Sobre a Yeon Music | Plataforma para Artistas Independentes</title>
        <meta name="description" content="A Yeon Music é dedicada a ajudar artistas a entender e maximizar seu potencial de receita com streaming. Conheça nossa missão e visão." />
        <link rel="canonical" href="https://yeon-music.com/about" />
      </Helmet>
      <PageLayout>
        <AboutContent />
      </PageLayout>
    </>;
};
export default About;