
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const CTASection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-16 mb-8 rounded-xl bg-gradient-to-br from-yeon-dark-purple/30 to-yeon-card-bg p-6 border border-white/5">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-3">{t('ctaTitle')}</h3>
        <p className="text-muted-foreground mb-6">
          {t('ctaDescription')}
        </p>
        <Button 
          className="bg-yeon-purple hover:bg-yeon-dark-purple text-secondary font-medium"
        >
          {t('ctaButton')}
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
