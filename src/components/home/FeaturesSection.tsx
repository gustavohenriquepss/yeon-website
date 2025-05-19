
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FeatureItemProps {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  imagePosition: 'left' | 'right';
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  image,
  ctaText,
  ctaLink,
  imagePosition
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center gap-8 py-12",
      imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
    )}>
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg w-full object-cover max-h-[400px]"
        />
      </div>
      
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-white/70 mb-6 text-lg">{description}</p>
        <Button asChild variant="outline" className="border-yeon-purple text-yeon-purple hover:bg-yeon-purple hover:text-white">
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      title: "Calculadora de Ganhos Detalhada",
      description: "Compare seus ganhos potenciais em todas as plataformas de streaming e descubra onde sua música gera mais receita. Nossa calculadora fornece dados precisos e atualizados para que você tome decisões estratégicas.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Calcule Agora",
      ctaLink: "/calculator",
      imagePosition: 'left' as const
    },
    {
      title: "Distribuição Multi-Plataforma",
      description: "Publique sua música em todas as plataformas de streaming com apenas alguns cliques. Gerenciamos todo o processo técnico para que você possa focar no que realmente importa: criar música incrível.",
      image: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Saiba Mais",
      ctaLink: "/about",
      imagePosition: 'right' as const
    },
    {
      title: "Análise de Desempenho em Tempo Real",
      description: "Acompanhe o desempenho da sua música com estatísticas detalhadas e insights acionáveis. Entenda seu público, monitore seus ganhos e identifique oportunidades de crescimento.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Experimente",
      ctaLink: "/calculator",
      imagePosition: 'left' as const
    }
  ];

  return (
    <section className="py-20 bg-yeon-darker-bg">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Ferramentas Poderosas para Artistas Ambiciosos
        </h2>
        
        <div className="flex flex-col gap-16">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
