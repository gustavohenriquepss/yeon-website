import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRightIcon } from 'lucide-react';

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
      
      {/* What We Do Section */}
      <section className="container px-4 py-16 bg-yeon-dark-bg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-yeon-purple">{t('about.whatWeDoTitle')}</h2>
          <p className="max-w-3xl mx-auto text-lg text-white/70">
            {t('about.whatWeDo')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-[#2A2A2A] border border-white/10 hover:border-yeon-purple/30 transition-all duration-300 hover:transform hover:scale-[1.01] shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-yeon-purple flex items-center">
                Capturar e engajar fãs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">{t('about.whatWeDo1')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2A2A2A] border border-white/10 hover:border-yeon-purple/30 transition-all duration-300 hover:transform hover:scale-[1.01] shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-yeon-purple flex items-center">
                Monetizar diretamente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">{t('about.whatWeDo2')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2A2A2A] border border-white/10 hover:border-yeon-purple/30 transition-all duration-300 hover:transform hover:scale-[1.01] shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-yeon-purple flex items-center">
                Analisar e Crescer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">{t('about.whatWeDo3')}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#2A2A2A] border border-white/10 hover:border-yeon-purple/30 transition-all duration-300 hover:transform hover:scale-[1.01] shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-yeon-purple flex items-center">
                Conectar-se a comunidade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">{t('about.whatWeDo4')}</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Why We Exist Section */}
      <section className="container px-4 py-16 bg-gradient-to-b from-yeon-dark-bg to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-yeon-purple text-center">{t('about.whyWeExistTitle')}</h2>
          
          <Card className="bg-[#2A2A2A]/90 backdrop-blur-sm border border-white/10 hover:border-yeon-purple/30 transition-all duration-300 shadow-lg mb-8">
            <CardContent className="pt-6">
              <p className="mb-6 text-lg">
                {t('about.whyWeExist1')}
              </p>
              <p className="text-lg">
                {t('about.whyWeExist2')}
              </p>
            </CardContent>
          </Card>
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
