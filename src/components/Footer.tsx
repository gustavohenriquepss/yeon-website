
import React from 'react';
import Logo from '@/components/Logo';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div>
            <Logo />
          </div>
          
          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <a href="/termos-de-uso" className="text-white/70 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="mailto:contato@yeon.live" className="text-white/70 hover:text-white transition-colors">
              Contato
            </a>
          </div>
          
          {/* Direitos reservados */}
          <p className="text-white/50 text-xs">
            &copy; {year} Yeon Music. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
