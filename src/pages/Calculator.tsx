
import React from 'react';
import { Helmet } from 'react-helmet';
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
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Calculadora de Streams | Yeon Music</title>
        <meta name="description" content="Calcule seus ganhos potenciais em todas as principais plataformas de streaming como Spotify, Apple Music, Deezer e mais. Entenda quanto vale cada reprodução." />
        <link rel="canonical" href="https://yeon-music.com/calculator" />
        <meta name="keywords" content="calculadora streaming, ganhos spotify, ganhos apple music, receita musical, streaming receita, artista independente" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Calculadora de Streams",
            "description": "${t('intro')}",
            "url": "https://yeon-music.com/calculator",
            "applicationCategory": "UtilityApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "BRL"
            }
          }`}
        </script>
      </Helmet>
      <PageLayout>
        <CalculatorContent />
      </PageLayout>
    </>
  );
};

export default Calculator;
