import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Instagram } from 'lucide-react';

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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
          
          {/* Redes Sociais */}
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/somosyeon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/ehobrilho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
          </div>
          
          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <a href="/termos-de-uso" className="text-white/70 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <Link to="/contato" className="text-white/70 hover:text-white transition-colors">
              Contato
            </Link>
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
