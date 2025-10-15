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
  const teamMembers = [{
    name: "Carlos Silva",
    role: "Fundador & CEO",
    bio: "Músico e desenvolvedor com mais de 10 anos de experiência na indústria musical brasileira.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Ana Oliveira",
    role: "Diretora de Tecnologia",
    bio: "Especialista em desenvolvimento de produtos digitais para o mercado de entretenimento.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Roberto Mendes",
    role: "Diretor de Parcerias",
    bio: "Ex-executivo de grandes gravadoras, especialista em negócios da indústria musical.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Juliana Costa",
    role: "Designer de Produto",
    bio: "Especialista em UX/UI com foco em experiências digitais para músicos e fãs.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Lucas Santos",
    role: "Desenvolvedor Full Stack",
    bio: "Engenheiro de software apaixonado por música e novas tecnologias.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Mariana Alves",
    role: "Growth Specialist",
    bio: "Especialista em marketing digital para artistas independentes.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Paulo Ferreira",
    role: "Analista de Dados",
    bio: "Especialista em análise de dados e métricas para a indústria musical.",
    imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Fernanda Lima",
    role: "Gestora de Comunidade",
    bio: "Responsável pelo relacionamento com artistas e fãs na plataforma.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Ricardo Gomes",
    role: "Diretor Financeiro",
    bio: "Especialista em modelos de negócio e estratégias financeiras para startups.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
  }, {
    name: "Camila Torres",
    role: "Especialista em Conteúdo",
    bio: "Jornalista especializada em música independente e novas tendências.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3"
  }];

  // Show only 6 members initially, all if showAllTeam is true
  const displayedMembers = showAllTeam ? teamMembers : teamMembers.slice(0, 6);
  return <main className="max-w-full mx-auto">
      {/* Hero Section - Quem Somos */}
      <section className="relative min-h-[60vh] flex items-center justify-center mb-16 bg-gradient-to-br from-[#1A1A1A] to-yeon-dark-bg overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FF3C27_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-yeon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yeon-purple/5 rounded-full blur-3xl"></div>
        
        <div className="container py-16 relative z-10 px-[64px] rounded-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent text-4xl font-semibold">{t('about.whoWeAreTitle')}</span>
            </h1>
            <p className="w-full max-w-3xl mx-auto text-lg md:text-xl text-white/70 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              {t('about.whoWeAre1')}
            </p>
            <p className="w-full max-w-3xl mx-auto text-lg md:text-xl text-white/70 mt-4 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              {t('about.whoWeAre2')}
            </p>
          </div>
          
          {/* Mission and Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Mission Card */}
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              
              <CardHeader>
                <CardTitle className="text-2xl text-yeon-purple flex items-center">
                  
                  {t('about.missionTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 relative z-10 text-white/90">
                  {t('about.mission')}
                </p>
              </CardContent>
            </Card>
            
            {/* Vision Card */}
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              
              <CardHeader>
                <CardTitle className="text-2xl text-yeon-purple flex items-center">
                  
                  {t('about.visionTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 relative z-10 text-white/90">
                  {t('about.vision')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* What We Do Section - Styled similar to Quem Somos */}
      <section className="relative min-h-[60vh] flex items-center justify-center mb-16 bg-gradient-to-br from-[#1A1A1A] to-yeon-dark-bg overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FF3C27_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="absolute top-0 left-0 w-64 h-64 bg-yeon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-yeon-purple/5 rounded-full blur-3xl"></div>
        
        <div className="container py-16 relative z-10 px-[64px] rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent text-4xl font-semibold">{t('about.whatWeDoTitle')}</span>
            </h2>
            <p className="w-full max-w-3xl mx-auto text-lg md:text-xl text-white/70 animate-fade-in">
              {t('about.whatWeDo')}
            </p>
          </div>
          
          {/* What We Do Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <CardHeader>
                <CardTitle className="text-2xl text-yeon-purple flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Capturar e engajar fãs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 relative z-10 text-white/90">
                  {t('about.whatWeDo1')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <CardHeader>
                <CardTitle className="text-2xl text-yeon-purple flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Monetizar diretamente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 relative z-10 text-white/90">
                  {t('about.whatWeDo2')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <CardHeader>
                <CardTitle className="text-2xl text-yeon-purple flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Analisar e Crescer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 relative z-10 text-white/90">
                  {t('about.whatWeDo3')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <CardHeader>
                <CardTitle className="text-2xl text-yeon-purple flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Conectar-se a comunidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 relative z-10 text-white/90">
                  {t('about.whatWeDo4')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Community Section - REMOVIDA */}
      
      {/* Nosso Time Section - Com imagens reais */}
      <section className="relative min-h-[60vh] flex items-center justify-center mb-16 bg-gradient-to-br from-yeon-dark-bg to-[#1A1A1A] overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FF3C27_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-yeon-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yeon-purple/5 rounded-full blur-3xl"></div>
        
        <div className="container py-16 relative z-10 px-4 md:px-[64px] rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent text-4xl font-semibold">Nosso Time</span>
            </h2>
            <p className="w-full max-w-3xl mx-auto text-lg md:text-xl text-white/70 animate-fade-in">
              Conheça as pessoas apaixonadas que estão construindo o futuro da música independente no Brasil
            </p>
          </div>
          
          {/* Team Members Grid - Com imagens reais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {displayedMembers.map((member, index) => <div key={member.name} className="relative h-[400px] rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300 animate-fade-in shadow-lg" style={{
            animationDelay: `${0.1 * (index % 6)}s`
          }}>
                {/* Full size image background */}
                <div className="absolute inset-0 bg-cover bg-center w-full h-full" style={{
              backgroundImage: `url(${member.imageUrl})`
            }}>
                </div>
                
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Glassmorphic info box at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-black/30 border-t border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-yeon-purple font-medium mb-2">{member.role}</p>
                  <p className="text-white/80 text-sm">{member.bio}</p>
                </div>
              </div>)}
          </div>
          
          {/* See More / See Less Button */}
          {teamMembers.length > 6 && <div className="flex justify-center mt-10">
              <Button variant="outline" className="border-yeon-purple text-yeon-purple hover:bg-yeon-purple/10" onClick={() => setShowAllTeam(!showAllTeam)}>
                {showAllTeam ? "Ver menos" : "Ver mais"}
              </Button>
            </div>}
        </div>
      </section>
      
      {/* Join Us Section - CTA */}
      <section className="container px-4 py-16 bg-gradient-to-br from-[#1A1A1A] to-yeon-dark-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-yeon-purple">{t('about.joinTitle')}</h2>
          
          <Card className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 hover:border-yeon-purple/50 transition-all duration-300 shadow-lg">
            <CardContent className="pt-6">
              <p className="mb-4 text-lg">
                {t('about.join1')}
              </p>
              <p className="mb-8 text-lg">
                {t('about.join2')}
              </p>
              <p className="text-center font-semibold text-yeon-purple text-xl mt-8">
                {t('about.join3')}
              </p>
            </CardContent>
          </Card>
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
        
        <link rel="canonical" href="https://yeon-music.com/about" />
      </Helmet>
      <PageLayout>
        <AboutContent />
      </PageLayout>
    </>;
};
export default About;