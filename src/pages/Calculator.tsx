
import React from 'react';
import StreamingCalculator from '@/components/StreamingCalculator';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';
import CTASection from '@/components/CTASection';

const CalculatorContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
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
  );
};

const Calculator: React.FC = () => {
  return (
    <PageLayout>
      <CalculatorContent />
    </PageLayout>
  );
};

export default Calculator;
