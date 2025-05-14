
import React from 'react';
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

  // Flag SVG components
  const USFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none" className="mr-2">
      <rect width="16" height="12" fill="#F0F0F0"/>
      <rect width="16" height="0.923077" fill="#D80027"/>
      <rect y="1.84615" width="16" height="0.923077" fill="#D80027"/>
      <rect y="3.69231" width="16" height="0.923077" fill="#D80027"/>
      <rect y="5.53846" width="16" height="0.923077" fill="#D80027"/>
      <rect y="7.38462" width="16" height="0.923077" fill="#D80027"/>
      <rect y="9.23077" width="16" height="0.923077" fill="#D80027"/>
      <rect y="11.0769" width="16" height="0.923077" fill="#D80027"/>
      <rect width="8" height="6.46154" fill="#2E52B2"/>
      <path d="M1.2 1.07692L1.35294 1.53846H1.83529L1.44118 1.82308L1.59412 2.28462L1.2 2L0.805883 2.28462L0.958824 1.82308L0.564706 1.53846H1.04706L1.2 1.07692Z" fill="#F0F0F0"/>
      <path d="M3.2 1.07692L3.35294 1.53846H3.83529L3.44118 1.82308L3.59412 2.28462L3.2 2L2.80588 2.28462L2.95882 1.82308L2.56471 1.53846H3.04706L3.2 1.07692Z" fill="#F0F0F0"/>
      <path d="M5.2 1.07692L5.35294 1.53846H5.83529L5.44118 1.82308L5.59412 2.28462L5.2 2L4.80588 2.28462L4.95882 1.82308L4.56471 1.53846H5.04706L5.2 1.07692Z" fill="#F0F0F0"/>
      <path d="M7.2 1.07692L7.35294 1.53846H7.83529L7.44118 1.82308L7.59412 2.28462L7.2 2L6.80588 2.28462L6.95882 1.82308L6.56471 1.53846H7.04706L7.2 1.07692Z" fill="#F0F0F0"/>
      <path d="M2.2 1.84615L2.35294 2.30769H2.83529L2.44118 2.59231L2.59412 3.05385L2.2 2.76923L1.80588 3.05385L1.95882 2.59231L1.56471 2.30769H2.04706L2.2 1.84615Z" fill="#F0F0F0"/>
      <path d="M4.2 1.84615L4.35294 2.30769H4.83529L4.44118 2.59231L4.59412 3.05385L4.2 2.76923L3.80588 3.05385L3.95882 2.59231L3.56471 2.30769H4.04706L4.2 1.84615Z" fill="#F0F0F0"/>
      <path d="M6.2 1.84615L6.35294 2.30769H6.83529L6.44118 2.59231L6.59412 3.05385L6.2 2.76923L5.80588 3.05385L5.95882 2.59231L5.56471 2.30769H6.04706L6.2 1.84615Z" fill="#F0F0F0"/>
      <path d="M1.2 2.61538L1.35294 3.07692H1.83529L1.44118 3.36154L1.59412 3.82308L1.2 3.53846L0.805883 3.82308L0.958824 3.36154L0.564706 3.07692H1.04706L1.2 2.61538Z" fill="#F0F0F0"/>
      <path d="M3.2 2.61538L3.35294 3.07692H3.83529L3.44118 3.36154L3.59412 3.82308L3.2 3.53846L2.80588 3.82308L2.95882 3.36154L2.56471 3.07692H3.04706L3.2 2.61538Z" fill="#F0F0F0"/>
      <path d="M5.2 2.61538L5.35294 3.07692H5.83529L5.44118 3.36154L5.59412 3.82308L5.2 3.53846L4.80588 3.82308L4.95882 3.36154L4.56471 3.07692H5.04706L5.2 2.61538Z" fill="#F0F0F0"/>
      <path d="M7.2 2.61538L7.35294 3.07692H7.83529L7.44118 3.36154L7.59412 3.82308L7.2 3.53846L6.80588 3.82308L6.95882 3.36154L6.56471 3.07692H7.04706L7.2 2.61538Z" fill="#F0F0F0"/>
      <path d="M2.2 3.38462L2.35294 3.84615H2.83529L2.44118 4.13077L2.59412 4.59231L2.2 4.30769L1.80588 4.59231L1.95882 4.13077L1.56471 3.84615H2.04706L2.2 3.38462Z" fill="#F0F0F0"/>
      <path d="M4.2 3.38462L4.35294 3.84615H4.83529L4.44118 4.13077L4.59412 4.59231L4.2 4.30769L3.80588 4.59231L3.95882 4.13077L3.56471 3.84615H4.04706L4.2 3.38462Z" fill="#F0F0F0"/>
      <path d="M6.2 3.38462L6.35294 3.84615H6.83529L6.44118 4.13077L6.59412 4.59231L6.2 4.30769L5.80588 4.59231L5.95882 4.13077L5.56471 3.84615H6.04706L6.2 3.38462Z" fill="#F0F0F0"/>
      <path d="M1.2 4.15385L1.35294 4.61538H1.83529L1.44118 4.9L1.59412 5.36154L1.2 5.07692L0.805883 5.36154L0.958824 4.9L0.564706 4.61538H1.04706L1.2 4.15385Z" fill="#F0F0F0"/>
      <path d="M3.2 4.15385L3.35294 4.61538H3.83529L3.44118 4.9L3.59412 5.36154L3.2 5.07692L2.80588 5.36154L2.95882 4.9L2.56471 4.61538H3.04706L3.2 4.15385Z" fill="#F0F0F0"/>
      <path d="M5.2 4.15385L5.35294 4.61538H5.83529L5.44118 4.9L5.59412 5.36154L5.2 5.07692L4.80588 5.36154L4.95882 4.9L4.56471 4.61538H5.04706L5.2 4.15385Z" fill="#F0F0F0"/>
      <path d="M7.2 4.15385L7.35294 4.61538H7.83529L7.44118 4.9L7.59412 5.36154L7.2 5.07692L6.80588 5.36154L6.95882 4.9L4.56471 4.61538H7.04706L7.2 4.15385Z" fill="#F0F0F0"/>
      <path d="M2.2 4.92308L2.35294 5.38462H2.83529L2.44118 5.66923L2.59412 6.13077L2.2 5.84615L1.80588 6.13077L1.95882 5.66923L1.56471 5.38462H2.04706L2.2 4.92308Z" fill="#F0F0F0"/>
      <path d="M4.2 4.92308L4.35294 5.38462H4.83529L4.44118 5.66923L4.59412 6.13077L4.2 5.84615L3.80588 6.13077L3.95882 5.66923L3.56471 5.38462H4.04706L4.2 4.92308Z" fill="#F0F0F0"/>
      <path d="M6.2 4.92308L6.35294 5.38462H6.83529L6.44118 5.66923L6.59412 6.13077L6.2 5.84615L5.80588 6.13077L5.95882 5.66923L5.56471 5.38462H6.04706L6.2 4.92308Z" fill="#F0F0F0"/>
    </svg>
  );

  const BrazilFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none" className="mr-2">
      <rect width="16" height="12" fill="#6DA544"/>
      <path d="M8 2L14 6L8 10L2 6L8 2Z" fill="#FFDA44"/>
      <circle cx="8" cy="6" r="2" fill="#039AD6"/>
      <path d="M6.6 5.7C6.6 5.7 7.4 6.7 8 6.7C8.6 6.7 9.4 5.7 9.4 5.7C9.4 5.7 9.3 7 8 7C6.7 7 6.6 5.7 6.6 5.7Z" fill="white"/>
    </svg>
  );

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[100px] bg-yeon-card-bg/80 border-none focus:ring-gray-500">
        {language === 'en' ? <USFlag /> : <BrazilFlag />}
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-yeon-card-bg border-gray-500">
        <SelectItem value="en" className="text-white hover:text-white hover:bg-gray-700/40">
          <div className="flex items-center">
            <USFlag />
            <span>EN-US</span>
          </div>
        </SelectItem>
        <SelectItem value="pt" className="text-white hover:text-white hover:bg-gray-700/40">
          <div className="flex items-center">
            <BrazilFlag />
            <span>PT-BR</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageToggle;
