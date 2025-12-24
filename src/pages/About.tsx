import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, UserPlus, Sparkles, Kanban } from 'lucide-react';
import { LayoutDashboardAnimated, ChartColumnIncreasingIcon, UsersAnimated, type LayoutDashboardAnimatedHandle, type ChartColumnIncreasingIconHandle, type UsersAnimatedHandle } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import lucasAndrade from '@/assets/lucas-andrade.jpeg';
import heroAbout from '@/assets/hero-about.jpg';
import gustavoPadeiro from '@/assets/gustavo-padeiro.jpg';
import arthurSena from '@/assets/arthur-sena.jpeg';

type AnimatedIconHandle = LayoutDashboardAnimatedHandle | ChartColumnIncreasingIconHandle | UsersAnimatedHandle;
type AnimatedIconComponent = typeof LayoutDashboardAnimated | typeof ChartColumnIncreasingIcon | typeof UsersAnimated;

const AnimatedBenefitsCards: React.FC = () => {
  const iconRefs = useRef<(AnimatedIconHandle | null)[]>([]);
  
  const benefits: Array<{
    title: string;
    description: string;
    Icon: AnimatedIconComponent;
  }> = [{
    title: "Gestão",
    description: "Acompanhe todas as etapas e o progresso das tarefas de todos os seus lançamentos",
    Icon: LayoutDashboardAnimated
  }, {
    title: "Insights",
    description: "Visualize o ritmo do seu trabalho e identifique gargalos antes que eles virem problemas.",
    Icon: ChartColumnIncreasingIcon
  }, {
    title: "Colaboração",
    description: "Mantenha toda a sua equipe alinhada em cada etapa de todos os projetos",
    Icon: UsersAnimated
  }];

  const handleMouseEnter = (index: number) => {
    iconRefs.current[index]?.startAnimation();
  };

  const handleMouseLeave = (index: number) => {
    iconRefs.current[index]?.stopAnimation();
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
      {benefits.map((benefit, index) => {
        const { Icon } = benefit;
        return (
          <Card 
            key={index} 
            className="border-0 bg-card overflow-hidden transition-all duration-300 hover:bg-gradient-to-br hover:from-card hover:to-white/5"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <CardContent className="p-6 text-left">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-muted">
                <Icon 
                  ref={(el) => { iconRefs.current[index] = el; }} 
                  size={24} 
                  className="text-foreground" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

const AboutContent: React.FC = () => {
  const {
    t
  } = useLanguage();

  // Team members data
  const teamMembers = [{
    name: "Arthur Sena",
    role: "Engenheiro de Software",
    imageUrl: arthurSena,
    bio: "Transforma ideias em código limpo e funcional. Apaixonado por criar experiências digitais que conectam artistas ao mundo."
  }, {
    name: "Gustavo Padeiro",
    role: "Designer de Produto",
    imageUrl: gustavoPadeiro,
    bio: "Cria interfaces intuitivas e belas que fazem a diferença. Acredita que bom design é invisível, mas impactante."
  }, {
    name: "Lucas Andrade",
    role: "Engenheiro de Software",
    imageUrl: lucasAndrade,
    bio: "Especialista em arquitetura de sistemas escaláveis. Músico nas horas vagas que entende a dor do artista independente."
  }];
  return <main className="bg-yeon-dark-bg">
      {/* Hero Section - Quem Somos */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          {/* Large Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-16 md:mb-24">
            Botamos Ritmo<span className="text-primary">.</span>
          </h1>
          
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start">
            {/* Left - Label */}
            <div className="md:col-span-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full border border-foreground/30 flex items-center justify-center text-xs">+</span>
              <span className="text-sm font-medium">Sobre nós</span>
            </div>
            
            {/* Center - Main Paragraph */}
            <div className="md:col-span-6">
              <p className="text-xl md:text-2xl leading-relaxed">
                <span className="font-semibold">Somos um time de artistas independentes apaixonados que entendem bem a correria artística.</span>{' '}
                <span className="text-muted-foreground">
                  Ajudamos outros artistas a se organizarem, fazerem sua música ser ouvida e realizarem seus sonhos.
                </span>
              </p>
            </div>
            
            {/* Right - Supporting Text */}
            <div className="md:col-span-4 md:text-right">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs md:ml-auto">
                A Yeon foi criada para os sonhadores que realizam. Somos a plataforma, os parceiros e as pessoas por trás da próxima geração de artistas independentes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hero Image */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="w-full overflow-hidden rounded-2xl">
          <img 
            src={heroAbout} 
            alt="Artistas trabalhando em estúdio" 
            className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
          />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-yeon-dark-bg">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              {t('about.whatWeDoTitle')}
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-white/70">
              Yeon é a ferramenta definitiva para planejar e lançar músicas. Mais que um checklist, é um guia prático com estratégias testadas para campanhas eficazes, crescimento de fãs e lançamentos de sucesso.
            </p>
          </div>
          
          <AnimatedBenefitsCards />

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Setup Automático</h3>
                <p className="text-muted-foreground">
                  Crie seu plano de lançamento em minutos: basta preencher informações básicas do projeto e nossa IA personaliza um roadmap completo pra você.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <UserPlus className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Acesso de Colaborador</h3>
                <p className="text-muted-foreground">
                  Convide fotógrafos, produtores e equipe pro projeto, delegue tarefas e tenha tudo sincronizado em tempo real.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Planejador com IA</h3>
                <p className="text-muted-foreground">
                  Dúvida sobre uma etapa? Converse direto com a IA pra ajustar prazos, sugerir ideias ou entender melhor cada tarefa.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Kanban className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Kanban Visual</h3>
                <p className="text-muted-foreground">
                  Visualize o andamento de cada fase, mova tarefas entre colunas e saiba exatamente o que tá pendente, em andamento ou concluído.
                </p>
              </div>
            </div>
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
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                  Feita por artistas,{' '}
                  <span className="text-muted-foreground">para artistas.</span>
                </h2>
              </div>
              
              {/* Collaboration Quote */}
              <div className="pt-8 max-w-lg">
                <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">Young Entrepreneurs of Noise</p>
                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="font-semibold">Somos artistas independentes e amantes da música</span>{' '}
                  <span className="text-muted-foreground">
                    construindo o futuro do Music Marketing no Brasil.
                  </span>
                </p>
              </div>
              
              {/* Mission CTA */}
              <div className="space-y-4 py-[33px] px-0 pb-0 pt-[48px]">
                <h3 className="text-lg font-semibold">Vamo botar ritmo?</h3>
                <p className="text-muted-foreground max-w-sm">Comece a usar a plataforma, é de graça, pra sempre.</p>
                <Button variant="secondary" size="lg">
                  Começar agora
                </Button>
              </div>
            </div>
            
            {/* Right Column - Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teamMembers.slice(0, 2).map(member => (
                <div 
                  key={member.name} 
                  className="relative group overflow-hidden rounded-2xl cursor-pointer"
                  onClick={(e) => {
                    if (window.innerWidth < 640) {
                      e.currentTarget.classList.toggle('active');
                    }
                  }}
                >
                  <div className="aspect-[3/4] w-full">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className={`w-full h-full object-cover transition-all duration-500 ${member.name === 'Gustavo Padeiro' ? 'scale-150 object-[40%_top] group-hover:scale-150 group-hover:blur-sm group-[.active]:scale-150 group-[.active]:blur-sm' : 'group-hover:scale-105 group-hover:blur-sm group-[.active]:scale-105 group-[.active]:blur-sm'}`}
                    />
                  </div>
                  
                  {/* Overlay with info - darker on hover/active */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/30 group-[.active]:from-black/90 group-[.active]:via-black/50 group-[.active]:to-black/30" />
                  
                  {/* Plus icon */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-lg font-light">+</span>
                  </div>
                  
                  {/* Role badge */}
                  <div className="absolute top-4 right-4 text-right">
                    <p className="text-xs font-medium text-white/90">{member.role}</p>
                    <p className="text-xs text-white/60">na yeon®</p>
                  </div>
                  
                  {/* Name and Bio */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight transition-transform duration-300 group-hover:-translate-y-2 group-[.active]:-translate-y-2">
                      {member.name.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}
                    </h3>
                    {/* Bio - appears on hover/tap */}
                    <p className="text-sm text-white/80 mt-2 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 group-[.active]:max-h-20 group-[.active]:opacity-100 line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Empty slot */}
              <div className="hidden sm:block aspect-[3/4]" />
              
              {/* Lucas Andrade - moved to 4th position */}
              {teamMembers[2] && (
                <div 
                  className="relative group overflow-hidden rounded-2xl cursor-pointer"
                  onClick={(e) => {
                    if (window.innerWidth < 640) {
                      e.currentTarget.classList.toggle('active');
                    }
                  }}
                >
                  <div className="aspect-[3/4] w-full">
                    <img 
                      src={teamMembers[2].imageUrl} 
                      alt={teamMembers[2].name} 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm group-[.active]:scale-105 group-[.active]:blur-sm" 
                    />
                  </div>
                  
                  {/* Overlay with info - darker on hover/active */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/30 group-[.active]:from-black/90 group-[.active]:via-black/50 group-[.active]:to-black/30" />
                  
                  {/* Plus icon */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-lg font-light">+</span>
                  </div>
                  
                  {/* Role badge */}
                  <div className="absolute top-4 right-4 text-right">
                    <p className="text-xs font-medium text-white/90">{teamMembers[2].role}</p>
                    <p className="text-xs text-white/60">na yeon®</p>
                  </div>
                  
                  {/* Name and Bio */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight transition-transform duration-300 group-hover:-translate-y-2 group-[.active]:-translate-y-2">
                      {teamMembers[2].name.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}
                    </h3>
                    {/* Bio - appears on hover/tap */}
                    <p className="text-sm text-white/80 mt-2 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 group-[.active]:max-h-20 group-[.active]:opacity-100 line-clamp-3">
                      {teamMembers[2].bio}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Manifesto Section */}
      <section className="py-16 bg-yeon-dark-bg">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl font-semibold">
              A indústria não foi feita para todos — então estamos construindo algo novo.
            </p>
            <p className="text-base md:text-lg text-white/80">
              Acreditamos que acesso, propriedade e suporte não devem ser reservados para poucos.
            </p>
            <p className="text-base md:text-lg text-white/80">
              Conhecemos a correria. Conhecemos a dor. E sabemos que, com a orientação, a tecnologia e a equipe certas por trás de você, esse sonho é possível.
            </p>
            <p className="text-base md:text-lg text-white/80">
              Não estamos aqui para jogar.
            </p>
            <p className="text-lg md:text-xl font-semibold">
              Estamos aqui para reescrever as regras.
            </p>
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