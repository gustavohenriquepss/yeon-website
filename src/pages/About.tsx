
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Rocket, Star } from 'lucide-react';

const AboutContent: React.FC = () => {
  const {
    t
  } = useLanguage();
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
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
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
            
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
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
            
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{animationDelay: '0.3s'}}>
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
            
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
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
      
      {/* Our Community Section */}
      <section className="container px-4 py-16 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-yeon-purple text-center">{t('about.communityTitle')}</h2>
          
          <Card className="bg-[#2A2A2A]/90 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/30 transition-all duration-300 shadow-lg mb-8">
            <CardContent className="pt-6">
              <p className="mb-6 text-lg">
                {t('about.community1')}
              </p>
              <p className="text-lg">
                {t('about.community2')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Nosso Time Section - New Section */}
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
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Team Member 1 */}
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="pt-6 px-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yeon-purple to-yeon-dark-purple mx-auto mb-4"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-center text-yeon-purple">
                  Carlos Silva
                </CardTitle>
                <p className="text-center text-white/60 text-sm">Fundador & CEO</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-white/80">
                  Músico e desenvolvedor com mais de 10 anos de experiência na indústria musical brasileira.
                </p>
              </CardContent>
            </Card>
            
            {/* Team Member 2 */}
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="pt-6 px-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yeon-purple to-yeon-dark-purple mx-auto mb-4"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-center text-yeon-purple">
                  Ana Oliveira
                </CardTitle>
                <p className="text-center text-white/60 text-sm">Diretora de Tecnologia</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-white/80">
                  Especialista em desenvolvimento de produtos digitais para o mercado de entretenimento.
                </p>
              </CardContent>
            </Card>
            
            {/* Team Member 3 */}
            <Card className="bg-[#2A2A2A]/80 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/50 hover:transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="pt-6 px-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yeon-purple to-yeon-dark-purple mx-auto mb-4"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-center text-yeon-purple">
                  Roberto Mendes
                </CardTitle>
                <p className="text-center text-white/60 text-sm">Diretor de Parcerias</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-white/80">
                  Ex-executivo de grandes gravadoras, especialista em negócios da indústria musical.
                </p>
              </CardContent>
            </Card>
          </div>
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
        <meta name="description" content="A Yeon Music é dedicada a ajudar artistas a entender e maximizar seu potencial de receita com streaming. Conheça nossa missão e visão." />
        <link rel="canonical" href="https://yeon-music.com/about" />
      </Helmet>
      <PageLayout>
        <AboutContent />
      </PageLayout>
    </>;
};

export default About;
