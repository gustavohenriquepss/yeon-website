import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { useLanguage } from '@/context/LanguageContext';
import { useWaitlist } from '@/context/WaitlistContext';
import MobileMenu from '@/components/MobileMenu';
import Logo from '@/components/Logo';

const NavigationHeader: React.FC = () => {
  const { t } = useLanguage();
  const { openWaitlist } = useWaitlist();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: 'Contato', href: '/contato' }
  ];
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-yeon-dark-bg/80 border-b border-white/10">
      <div className="container px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-medium text-white">
            <Logo />
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map(item => (
                <NavigationMenuItem key={item.href}>
                  <Link to={item.href}>
                    <NavigationMenuLink className={cn(
                      "px-3 py-2 text-sm transition-colors",
                      isActive(item.href) ? "text-white font-medium" : "text-white/70 hover:text-white"
                    )}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Auth button - visible on desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={openWaitlist}
              className="px-6 py-2 bg-primary hover:bg-primary/90 transition-colors font-medium text-zinc-50 rounded-md text-sm"
            >
              Entrar na Lista VIP
            </button>
          </div>
          
          {/* Mobile menu button */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;