
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <div className="inline-flex p-1 rounded-lg bg-secondary">
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-1 px-3 text-sm"
      >
        <Globe className="h-4 w-4" />
        <span className={`${language === 'en' ? 'text-yeon-purple font-medium' : ''}`}>EN</span>
        <span className="text-muted-foreground mx-1">/</span>
        <span className={`${language === 'pt' ? 'text-yeon-purple font-medium' : ''}`}>PT</span>
      </Button>
    </div>
  );
};

export default LanguageToggle;
