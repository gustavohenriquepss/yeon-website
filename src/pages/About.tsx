
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutContent: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [showAllTeam, setShowAllTeam] = useState(false);
  
  // Team members data - 10 members total
  const teamMembers = [
    {
      name: "Carlos Silva",
      role: "Fundador & CEO",
      bio: "Músico e desenvolvedor com mais de 10 anos de experiência na indústria musical brasileira.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3" 
    },
    {
      name: "Ana Oliveira",
      role: "Diretora de Tecnologia",
      bio: "Especialista em desenvolvimento de produtos digitais para o mercado de entretenimento.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Roberto Mendes",
      role: "Diretor de Parcerias",
      bio: "Ex-executivo de grandes gravadoras, especialista em negócios da indústria musical.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Juliana Costa",
      role: "Designer de Produto",
      bio: "Especialista em UX/UI com foco em experiências digitais para músicos e fãs.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Lucas Santos",
      role: "Desenvolvedor Full Stack",
      bio: "Engenheiro de software apaixonado por música e novas tecnologias.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Mariana Alves",
      role: "Growth Specialist",
      bio: "Especialista em marketing digital para artistas independentes.",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Paulo Ferreira",
      role: "Analista de Dados",
      bio: "Especialista em análise de dados e métricas para a indústria musical.",
      imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Fernanda Lima",
      role: "Gestora de Comunidade",
      bio: "Responsável pelo relacionamento com artistas e fãs na plataforma.",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Ricardo Gomes",
      role: "Diretor Financeiro",
      bio: "Especialista em modelos de negócio e estratégias financeiras para startups.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Camila Torres",
      role: "Especialista em Conteúdo",
      bio: "Jornalista especializada em música independente e novas tendências.",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];
  
  // Show only 6 members initially, all if showAllTeam is true
  const displayedMembers = showAllTeam ? teamMembers : teamMembers.slice(0, 6);
  
  return <main className="bg-yeon-dark-bg">
      {/* Hero Section - Quem Somos */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
              {t('about.whoWeAreTitle')}
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-white/70 mb-4">
              {t('about.whoWeAre1')}
            </p>
            <p className="max-w-3xl mx-auto text-lg text-white/70">
              {t('about.whoWeAre2')}
            </p>
          </div>
          
          {/* Mission and Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mission Card */}
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold">
                  {t('about.missionTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  {t('about.mission')}
                </p>
              </CardContent>
            </Card>
            
            {/* Vision Card */}
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold">
                  {t('about.visionTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  {t('about.vision')}
                </p>
              </CardContent>
            </Card>
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
              {t('about.whatWeDo')}
            </p>
          </div>
          
          {/* What We Do Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Capturar e engajar fãs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  {t('about.whatWeDo1')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Monetizar diretamente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  {t('about.whatWeDo2')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Analisar e Crescer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  {t('about.whatWeDo3')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Conectar-se a comunidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm md:text-base">
                  {t('about.whatWeDo4')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Community Section - REMOVIDA */}
      
      {/* Nosso Time Section */}
      <section className="py-20 bg-yeon-dark-bg">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Nosso Time
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-white/70">
              Conheça as pessoas apaixonadas que estão construindo o futuro da música independente no Brasil
            </p>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {displayedMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-yeon-purple font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* See More / See Less Button */}
          {teamMembers.length > 6 && (
            <div className="flex justify-center mt-10">
              <Button 
                variant="outline" 
                className="border-yeon-purple text-yeon-purple hover:bg-yeon-purple/10"
                onClick={() => setShowAllTeam(!showAllTeam)}
              >
                {showAllTeam ? "Ver menos" : "Ver mais"}
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Join Us Section - CTA */}
      <section className="py-20 bg-yeon-dark-bg">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">{t('about.joinTitle')}</h2>
            
            <Card className="border-0 bg-card overflow-hidden">
              <CardContent className="p-8">
                <p className="text-muted-foreground text-base md:text-lg mb-4">
                  {t('about.join1')}
                </p>
                <p className="text-muted-foreground text-base md:text-lg mb-8">
                  {t('about.join2')}
                </p>
                <p className="font-semibold text-yeon-purple text-xl">
                  {t('about.join3')}
                </p>
              </CardContent>
            </Card>
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
