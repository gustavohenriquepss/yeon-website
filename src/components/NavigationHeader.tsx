
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink,
  NavigationMenuList, 
  navigationMenuTriggerStyle 
} from '@/components/ui/navigation-menu';
import { useLanguage } from '@/context/LanguageContext';
import MobileMenu from '@/components/MobileMenu';
import Logo from '@/components/Logo';
import SocialLinks from '@/components/SocialLinks';

const NavigationHeader: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.gallery'), href: '/gallery' },
    { name: t('nav.calculator'), href: '/calculator' },
    { name: t('nav.artists'), href: '/artists' },
  ];

  return (
    <div className="border-b border-white/10 bg-yeon-dark-bg">
      <div className="container px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-white">
            <Logo />
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link to={item.href}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isActive(item.href) && "bg-accent/50"
                      )}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Social media icons - visible on desktop */}
          <div className="hidden md:block">
            <SocialLinks className="mr-4" />
          </div>
          
          {/* Mobile menu button */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
