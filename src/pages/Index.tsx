
import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import StreamingCalculator from '@/components/StreamingCalculator';
import CTASection from '@/components/CTASection';
import Logo from '@/components/Logo';
import SocialLinks from '@/components/SocialLinks';

const IndexContent: React.FC = () => {
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen bg-yeon-dark-bg text-white">
      <div className="container px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center gap-6">
            <SocialLinks />
            <LanguageToggle />
          </div>
        </header>

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

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Yeon Music. All rights reserved.</p>
        </footer>
      </div>
    </div>;
};

const Index: React.FC = () => {
  return <LanguageProvider>
      <IndexContent />
    </LanguageProvider>;
};

export default Index;
