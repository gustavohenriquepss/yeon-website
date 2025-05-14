
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (checked: boolean) => {
    setLanguage(checked ? 'pt' : 'en');
  };

  return (
    <div className="flex items-center gap-2 px-2 py-1.5 rounded-full bg-yeon-card-bg/80">
      <span className={`text-sm transition-colors ${language === 'en' ? 'font-medium text-white' : 'text-gray-400'}`}>EN</span>
      <Switch 
        checked={language === 'pt'}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-yeon-purple data-[state=unchecked]:bg-muted"
        aria-label="Toggle language"
      />
      <span className={`text-sm transition-colors ${language === 'pt' ? 'font-medium text-white' : 'text-gray-400'}`}>PT</span>
    </div>
  );
};

export default LanguageToggle;
