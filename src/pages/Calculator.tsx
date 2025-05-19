
import React from 'react';
import StreamingCalculator from '@/components/StreamingCalculator';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';

const CalculatorContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{t('nav.calculator')}</h1>
      <StreamingCalculator />
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
