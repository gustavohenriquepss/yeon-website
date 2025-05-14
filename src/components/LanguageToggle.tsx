
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'en' | 'pt');
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[100px] bg-yeon-card-bg/80 border-none focus:ring-yeon-purple">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <SelectValue placeholder="Language" />
        </div>
      </SelectTrigger>
      <SelectContent className="bg-yeon-card-bg border-yeon-purple">
        <SelectItem value="en" className="text-white hover:text-white hover:bg-yeon-purple/20">
          English
        </SelectItem>
        <SelectItem value="pt" className="text-white hover:text-white hover:bg-yeon-purple/20">
          Português
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageToggle;
