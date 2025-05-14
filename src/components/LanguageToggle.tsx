
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (checked: boolean) => {
    setLanguage(checked ? 'pt' : 'en');
  };

  return (
    <div className="flex items-center gap-2 p-1 rounded-lg">
      <span className={`text-sm ${language === 'en' ? 'font-medium text-yeon-purple' : 'text-muted-foreground'}`}>EN</span>
      <Switch 
        checked={language === 'pt'}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-yeon-purple"
        aria-label="Toggle language"
      />
      <span className={`text-sm ${language === 'pt' ? 'font-medium text-yeon-purple' : 'text-muted-foreground'}`}>PT</span>
    </div>
  );
};

export default LanguageToggle;
