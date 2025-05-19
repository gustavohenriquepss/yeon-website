
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';

const AboutContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{t('nav.about')}</h1>
      <div className="bg-[#2A2A2A] rounded-xl p-6 border border-white/10">
        <p className="mb-4">
          {t('about.description')}
        </p>
        <p className="mb-4">
          {t('about.mission')}
        </p>
        <p>
          {t('about.vision')}
        </p>
      </div>
    </main>
  );
};

const About: React.FC = () => {
  return (
    <PageLayout>
      <AboutContent />
    </PageLayout>
  );
};

export default About;
