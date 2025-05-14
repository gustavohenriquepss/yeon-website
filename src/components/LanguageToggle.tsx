
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex p-1 rounded-lg bg-secondary">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        className={`px-3 text-sm ${language === 'en' ? 'bg-yeon-purple text-secondary' : 'text-foreground'}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant={language === 'pt' ? 'default' : 'ghost'}
        size="sm"
        className={`px-3 text-sm ${language === 'pt' ? 'bg-yeon-purple text-secondary' : 'text-foreground'}`}
        onClick={() => setLanguage('pt')}
      >
        PT-BR
      </Button>
    </div>
  );
};

export default LanguageToggle;
