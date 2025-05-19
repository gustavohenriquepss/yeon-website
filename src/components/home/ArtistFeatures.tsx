
import React from 'react';
import { 
  ArrowDown, 
  Activity, 
  Calculator, 
  Calendar, 
  Megaphone, 
  Book, 
  Music, 
  FileText 
} from 'lucide-react';
import FeatureItem, { FeatureItemProps } from './FeatureItem';

const ArtistFeatures: React.FC = () => {
  const artistFeatures: Omit<FeatureItemProps, 'size'>[] = [
    {
      title: "Ferramentas de Financiamento Coletivo",
      description: "Arrecade fundos para seus projetos musicais diretamente de seus fãs, oferecendo recompensas exclusivas e mantendo o controle criativo sobre sua música.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Saiba Mais",
      ctaLink: "/about",
      icon: <ArrowDown className="h-6 w-6 text-yeon-purple" />
    },
    {
      title: "Painel Analítico",
      description: "Acompanhe o desempenho da sua música com estatísticas detalhadas, insights sobre seu público e tendências de crescimento em tempo real.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Experimente",
      ctaLink: "/calculator",
      icon: <Activity className="h-6 w-6 text-yeon-purple" />
    },
    {
      title: "Calculadora de Royalties",
      description: "Compare seus ganhos potenciais em todas as plataformas de streaming e descubra onde sua música gera mais receita.",
      image: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Calcule Agora",
      ctaLink: "/calculator",
      icon: <Calculator className="h-6 w-6 text-yeon-purple" />
    },
    {
      title: "Planejador de Lançamentos (com IA)",
      description: "Organize seus lançamentos musicais com nossa ferramenta de planejamento assistida por IA, otimizando datas e estratégias para máximo impacto.",
      image: "https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Planejar",
      ctaLink: "/about",
      icon: <Calendar className="h-6 w-6 text-yeon-purple" />
    },
    {
      title: "Ferramentas de Marketing",
      description: "Promova sua música com ferramentas de marketing integradas para redes sociais e plataformas digitais de forma estratégica e eficiente.",
      image: "https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Explorar",
      ctaLink: "/about",
      icon: <Megaphone className="h-6 w-6 text-yeon-purple" />
    },
    {
      title: "Gestão de Catálogo e Marketplace",
      description: "Gerencie seu catálogo musical com facilidade e venda diretamente aos seus fãs através do nosso marketplace integrado.",
      image: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Gerenciar",
      ctaLink: "/about",
      icon: <Book className="h-6 w-6 text-yeon-purple" />
    },
    {
      title: "Pitching para Playlists",
      description: "Aumente a visibilidade da sua música com ferramentas para submissão direta para curadores de playlists e oportunidades de exposição.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Comece",
      ctaLink: "/about",
      icon: <Music className="h-6 w-6 text-yeon-purple" />
    },
    {
      title: "Contratos e Divisão de Royalties",
      description: "Gerencie contratos, colaborações e divisões de royalties sem complicações, garantindo transparência e precisão nos pagamentos.",
      image: "https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Ver Detalhes",
      ctaLink: "/about",
      icon: <FileText className="h-6 w-6 text-yeon-purple" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {artistFeatures.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </div>
  );
};

export default ArtistFeatures;
