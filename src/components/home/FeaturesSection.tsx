
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureItemProps {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  size?: 'small' | 'large';
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  image,
  ctaText,
  ctaLink,
  size = 'small'
}) => {
  return (
    <Card className={cn(
      "overflow-hidden group relative h-full border-0 rounded-xl bg-secondary/50 transition-all duration-300 hover:bg-secondary/80",
      size === 'large' ? 'md:col-span-2' : ''
    )}>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-30 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />
      </div>
      
      <CardContent className="relative z-10 flex flex-col h-full p-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-white/70 mb-auto text-sm md:text-base">{description}</p>
        <Button asChild variant="outline" className="mt-4 self-start border-yeon-purple text-yeon-purple hover:bg-yeon-purple hover:text-white">
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </CardContent>
    </Card>
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
      size: 'large' as const
    },
    {
      title: "Distribuição Multi-Plataforma",
      description: "Publique sua música em todas as plataformas de streaming com apenas alguns cliques. Gerenciamos todo o processo técnico para que você possa focar no que realmente importa: criar música incrível.",
      image: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Saiba Mais",
      ctaLink: "/about",
      size: 'small' as const
    },
    {
      title: "Análise de Desempenho em Tempo Real",
      description: "Acompanhe o desempenho da sua música com estatísticas detalhadas e insights acionáveis. Entenda seu público, monitore seus ganhos e identifique oportunidades de crescimento.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Experimente",
      ctaLink: "/calculator",
      size: 'small' as const
    },
    {
      title: "Marketing Digital Integrado",
      description: "Ferramentas para promover sua música nas redes sociais e plataformas digitais de forma estratégica e eficiente.",
      image: "https://images.unsplash.com/photo-1516900557549-41557d405adf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ctaText: "Explorar",
      ctaLink: "/about",
      size: 'small' as const
    }
  ];

  return (
    <section className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Ferramentas Poderosas para Artistas Ambiciosos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
