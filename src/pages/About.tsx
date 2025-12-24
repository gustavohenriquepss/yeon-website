import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, LayoutDashboard, BarChart3, Lightbulb, UserPlus, Sparkles, Kanban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const AboutContent: React.FC = () => {
  const {
    t
  } = useLanguage();

  // Team members data
  const teamMembers = [{
    name: "Arthur Sena",
    role: "Engenheiro de Software",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Gustavo Padeiro",
    role: "Designer de Produto",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Lucas Andrade",
    role: "Engenheiro de Software",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
  }];
  return <main className="bg-yeon-dark-bg">
      {/* Hero Section - Quem Somos */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
              {t('about.whoWeAreTitle')}
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-white/70 mb-4">
              Somos uma equipe de artistas independentes apaixonados que entendem bem as dificuldades da jornada artística. Ajudamos outros artistas a se organizarem e lançarem faixas de sucesso que façam sua música ser ouvida e expandam seus negócios e realizem seus sonhos.
            </p>
          </div>
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
          
          {/* Main Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
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
            
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
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
            
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
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
          </div>

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
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                  Os rostos por trás{' '}
                  <span className="text-muted-foreground">dos projetos.</span>
                </h2>
              </div>
              
              {/* Mission CTA */}
              <div className="space-y-4 pt-8 py-0">
                <h3 className="text-lg font-semibold">Faça parte da nossa missão</h3>
                <p className="text-muted-foreground max-w-sm">
                  Se você quer criar e colaborar, adoraríamos ouvir de você.
                </p>
                <Button variant="outline" className="rounded-full px-6 group">
                  Entre em contato
                  <span className="ml-2 inline-block w-2 h-2 rounded-full bg-foreground group-hover:bg-primary transition-colors" />
                </Button>
              </div>
              
              {/* Collaboration Quote */}
              <div className="pt-8 max-w-lg">
              <p className="text-lg md:text-xl leading-relaxed">
                  Somos <span className="font-semibold">artistas e amantes da música</span>{' '}
                  <span className="text-muted-foreground">
                    especialistas em produto e tecnologia construindo o futuro da indústria musical no Brasil.
                  </span>
                </p>
              </div>
            </div>
            
            {/* Right Column - Team Grid */}
            <div className="grid grid-cols-2 gap-4">
              {teamMembers.map((member, index) => <div key={member.name} className={`relative group overflow-hidden rounded-2xl ${index === 0 ? 'row-span-1' : ''}`}>
                  <div className="aspect-[3/4] w-full">
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  
                  {/* Overlay with info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Plus icon */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-lg font-light">+</span>
                  </div>
                  
                  {/* Role badge */}
                  <div className="absolute top-4 right-4 text-right">
                    <p className="text-xs font-medium text-white/90">{member.role}</p>
                    <p className="text-xs text-white/60">na yeon®</p>
                  </div>
                  
                  {/* Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                      {member.name.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}
                    </h3>
                  </div>
                </div>)}
              
              {/* Empty placeholder card for visual balance */}
              <div className="relative overflow-hidden rounded-2xl bg-muted/50 aspect-[3/4] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-light text-muted-foreground">+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Em breve</p>
                </div>
              </div>
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