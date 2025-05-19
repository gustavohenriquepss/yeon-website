
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import StreamingCalculator from '@/components/StreamingCalculator';
import CTASection from '@/components/CTASection';
import Logo from '@/components/Logo';
import SocialLinks from '@/components/SocialLinks';
import MobileMenu from '@/components/MobileMenu';
import NavigationHeader from '@/components/NavigationHeader';
import PageLayout from '@/components/PageLayout';

const IndexContent: React.FC = () => {
  const { t } = useLanguage();
  return <>
      <main className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t('tagline')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('intro')}
          </p>
        </div>

        <StreamingCalculator />
        
        <CTASection />
      </main>
    </>;
};

const Index: React.FC = () => {
  return <PageLayout>
      <IndexContent />
    </PageLayout>;
};

export default Index;
