
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink,
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle 
} from '@/components/ui/navigation-menu';
import { Home, Info, GalleryHorizontal, Calculator, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import MobileMenu from '@/components/MobileMenu';
import Logo from '@/components/Logo';
import SocialLinks from '@/components/SocialLinks';

const NavigationHeader: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { name: t('nav.home'), href: '/', icon: <Home className="h-4 w-4 mr-2" /> },
    { name: t('nav.about'), href: '/about', icon: <Info className="h-4 w-4 mr-2" /> },
    { name: t('nav.gallery'), href: '/gallery', icon: <GalleryHorizontal className="h-4 w-4 mr-2" /> },
    { name: t('nav.calculator'), href: '/calculator', icon: <Calculator className="h-4 w-4 mr-2" /> },
    { name: t('nav.artists'), href: '/artists', icon: <Users className="h-4 w-4 mr-2" /> },
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
                        "flex items-center",
                        isActive(item.href) && "bg-accent/50"
                      )}
                    >
                      {item.icon}
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
          
          {/* Language toggle visible on desktop */}
          <div className="hidden md:block">
            <LanguageToggle />
          </div>
          
          {/* Mobile menu button */}
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
