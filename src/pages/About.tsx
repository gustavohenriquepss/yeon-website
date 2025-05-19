
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';

const AboutContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{t('nav.about')}</h1>
      
      <div className="space-y-8">
        {/* Mission Section */}
        <Card className="bg-[#2A2A2A] border border-white/10">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-yeon-purple">{t('about.missionTitle')}</h2>
            <p className="mb-4">
              {t('about.mission')}
            </p>
          </CardContent>
        </Card>
        
        {/* Vision Section */}
        <Card className="bg-[#2A2A2A] border border-white/10">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-yeon-purple">{t('about.visionTitle')}</h2>
            <p className="mb-4">
              {t('about.vision')}
            </p>
          </CardContent>
        </Card>
        
        {/* Who We Are */}
        <Card className="bg-[#2A2A2A] border border-white/10">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-yeon-purple">{t('about.whoWeAreTitle')}</h2>
            <p className="mb-4">
              {t('about.whoWeAre1')}
            </p>
            <p className="mb-4">
              {t('about.whoWeAre2')}
            </p>
          </CardContent>
        </Card>
        
        {/* What We Do */}
        <Card className="bg-[#2A2A2A] border border-white/10">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4 text-yeon-purple">{t('about.whatWeDoTitle')}</h2>
            <p className="mb-4">
              {t('about.whatWeDo')}
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>{t('about.whatWeDo1')}</li>
              <li>{t('about.whatWeDo2')}</li>
              <li>{t('about.whatWeDo3')}</li>
              <li>{t('about.whatWeDo4')}</li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Why We Exist */}
        <Card className="bg-[#2A2A2A] border border-white/10">
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
        <Card className="bg-[#2A2A2A] border border-white/10">
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
        <Card className="bg-[#2A2A2A] border border-white/10">
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
