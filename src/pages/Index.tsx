
import React from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import ValuePropositionSection from '@/components/home/ValuePropositionSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PricingSection from '@/components/home/PricingSection';
import { useLanguage } from '@/context/LanguageContext';

const IndexContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <main>
      <HeroSection />
      <ValuePropositionSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
    </main>
  );
};

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Yeon - Planeje Seus Lançamentos Musicais com Precisão</title>
        <meta name="description" content="O único planner que combina checklist, kanban e roadmap para seu release musical. Organize, acompanhe e lance no tempo certo." />
        <link rel="canonical" href="https://yeon-music.com/" />
      </Helmet>
      <PageLayout>
        <IndexContent />
      </PageLayout>
    </>
  );
};

export default Index;
