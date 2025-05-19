
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRightIcon } from 'lucide-react';

const AboutContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">{t('nav.about')}</h1>
      
      {/* Quem Somos Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-[#2A2A2A]/80 to-[#2A2A2A] p-8 rounded-xl border border-white/10 mb-8">
          <h2 className="text-3xl font-semibold mb-6 text-yeon-purple">{t('about.whoWeAreTitle')}</h2>
          
          <p className="mb-6 text-lg">
            {t('about.whoWeAre1')}
          </p>
          <p className="mb-8 text-lg">
            {t('about.whoWeAre2')}
          </p>
          
          {/* Mission and Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission Card */}
            <Card className="bg-[#2A2A2A] border border-white/10 hover:border-yeon-purple transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yeon-purple/10 rounded-bl-full"></div>
              <CardHeader>
                <CardTitle className="text-2xl text-yeon-purple flex items-center">
                  <ChevronRightIcon className="mr-2 h-5 w-5" />
                  {t('about.missionTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 relative z-10">
                  {t('about.mission')}
                </p>
              </CardContent>
            </Card>
            
            {/* Vision Card */}
            <Card className="bg-[#2A2A2A] border border-white/10 hover:border-yeon-purple transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yeon-purple/10 rounded-bl-full"></div>
              <CardHeader>
                <CardTitle className="text-2xl text-yeon-purple flex items-center">
                  <ChevronRightIcon className="mr-2 h-5 w-5" />
                  {t('about.visionTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 relative z-10">
                  {t('about.vision')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <div className="space-y-8">
        {/* What We Do */}
        <Card className="bg-[#2A2A2A] border border-white/10 hover:border-yeon-purple/50 transition-all duration-300">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-yeon-purple">{t('about.whatWeDoTitle')}</h2>
            <p className="mb-4">
              {t('about.whatWeDo')}
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li className="animate-fade-in">{t('about.whatWeDo1')}</li>
              <li className="animate-fade-in" style={{animationDelay: '0.1s'}}>{t('about.whatWeDo2')}</li>
              <li className="animate-fade-in" style={{animationDelay: '0.2s'}}>{t('about.whatWeDo3')}</li>
              <li className="animate-fade-in" style={{animationDelay: '0.3s'}}>{t('about.whatWeDo4')}</li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Why We Exist */}
        <Card className="bg-[#2A2A2A] border border-white/10 hover:border-yeon-purple/50 transition-all duration-300">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-yeon-purple">{t('about.whyWeExistTitle')}</h2>
            <p className="mb-4">
              {t('about.whyWeExist1')}
            </p>
            <p className="mb-4">
              {t('about.whyWeExist2')}
            </p>
          </CardContent>
        </Card>
        
        {/* Our Community */}
        <Card className="bg-[#2A2A2A] border border-white/10 hover:border-yeon-purple/50 transition-all duration-300">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-yeon-purple">{t('about.communityTitle')}</h2>
            <p className="mb-4">
              {t('about.community1')}
            </p>
            <p className="mb-4">
              {t('about.community2')}
            </p>
          </CardContent>
        </Card>
        
        {/* Join Us */}
        <Card className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-white/10 hover:border-yeon-purple/50 transition-all duration-300">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-yeon-purple">{t('about.joinTitle')}</h2>
            <p className="mb-4">
              {t('about.join1')}
            </p>
            <p className="mb-4">
              {t('about.join2')}
            </p>
            <p className="text-center font-semibold text-yeon-purple text-lg mt-6">
              {t('about.join3')}
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>Sobre a Yeon Music | Plataforma para Artistas Independentes</title>
        <meta name="description" content="A Yeon Music é dedicada a ajudar artistas a entender e maximizar seu potencial de receita com streaming. Conheça nossa missão e visão." />
        <link rel="canonical" href="https://yeon-music.com/about" />
      </Helmet>
      <PageLayout>
        <AboutContent />
      </PageLayout>
    </>
  );
};

export default About;
