
import React from 'react';
import { User, Search, Users, Music } from 'lucide-react';
import FeatureItem, { FeatureItemProps } from './FeatureItem';

const FanFeatures: React.FC = () => {
  const fanFeatures: Omit<FeatureItemProps, 'size'>[] = [
    {
      title: "Perfil Completo de Artistas",
      description: "Acesse informações detalhadas sobre seus artistas favoritos, incluindo biografia, discografia, próximos eventos e conteúdo exclusivo.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Explorar Artistas",
      ctaLink: "/artists",
      icon: <User className="h-6 w-6 text-yeon-purple" />
    },
    {
      title: "Busca Inteligente",
      description: "Encontre o artista perfeito para seu evento com nossa ferramenta de busca avançada, filtrando por gênero, localização e disponibilidade.",
      image: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Buscar Artistas",
      ctaLink: "/artists",
      icon: <Search className="h-6 w-6 text-yeon-purple" />
    },
    {
      title: "Financiamento Coletivo e Comunidade",
      description: "Apoie seus artistas favoritos através de financiamento coletivo e participe de uma comunidade vibrante de amantes da música.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Participar",
      ctaLink: "/about",
      icon: <Users className="h-6 w-6 text-yeon-purple" />
    },
    {
      title: "Marketplace Musical",
      description: "Adquira música, mercadorias e experiências exclusivas diretamente dos artistas que você ama, apoiando-os de forma direta.",
      image: "https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Explorar Loja",
      ctaLink: "/about",
      icon: <Music className="h-6 w-6 text-yeon-purple" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {fanFeatures.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </div>
  );
};

export default FanFeatures;
