
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowDown,
  Activity,
  Calculator,
  Calendar,
  Megaphone,
  Book,
  Music,
  FileText,
  User,
  Search,
  Users
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FeatureItemProps {
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  icon: React.ReactNode;
  size?: 'small' | 'large';
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  image,
  ctaText,
  ctaLink,
  icon,
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
        <div className="p-3 bg-yeon-purple/10 rounded-full mb-3 self-start">
          {icon}
        </div>
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
  
  const artistFeatures = [
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

  const fanFeatures = [
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
    <section className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          Ferramentas Poderosas para Artistas Ambiciosos
        </h2>
        <p className="text-white/70 text-center mb-16 max-w-2xl mx-auto">
          Tudo que você precisa para gerenciar sua carreira musical, maximizar seus ganhos e conectar-se com seu público.
        </p>
        
        <Tabs defaultValue="artists" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-secondary/30 p-1 rounded-full">
              <TabsTrigger 
                value="artists" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-yeon-purple data-[state=active]:text-white"
              >
                Para Artistas
              </TabsTrigger>
              <TabsTrigger 
                value="fans" 
                className="rounded-full px-6 py-2 data-[state=active]:bg-yeon-purple data-[state=active]:text-white"
              >
                Para Fãs e Contratantes
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="artists" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {artistFeatures.map((feature, index) => (
                <FeatureItem
                  key={index}
                  {...feature}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="fans" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fanFeatures.map((feature, index) => (
                <FeatureItem
                  key={index}
                  {...feature}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturesSection;
