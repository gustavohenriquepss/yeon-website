
import React from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import LanguageToggle from '@/components/LanguageToggle';
import SocialLinks from '@/components/SocialLinks';
import { useLanguage } from '@/context/LanguageContext';

const MobileMenu: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <Sheet>
      <SheetTrigger className="md:hidden" aria-label="Menu">
        <Menu className="h-5 w-5 text-white hover:text-yeon-purple transition-colors" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-yeon-dark-bg border-yeon-dark-bg">
        <SheetHeader>
          <SheetTitle className="text-white">{t('menu')}</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex justify-center">
            <LanguageToggle />
          </div>
          <div className="flex justify-center mt-4">
            <SocialLinks />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
