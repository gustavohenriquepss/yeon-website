
import React from 'react';
import FeatureItem, { FeatureItemProps } from './FeatureItem';

const ArtistFeatures: React.FC = () => {
  const artistFeatures: (Omit<FeatureItemProps, 'size'> & { tag?: string })[] = [
    {
      title: "Financiamento Direto",
      description: "Arrecade fundos para seus projetos direto dos seus fãs. Sem burocracias, sem intermediários — só você e quem acredita no seu som."
    },
    {
      title: "Dados que Importam",
      description: "Entenda exatamente onde sua música está funcionando, quem está ouvindo e como otimizar seus lançamentos para máximo impacto."
    },
    {
      title: "Calculadora Realista",
      description: "Descubra quanto vale cada stream e onde sua música rende mais. Chega de mistério sobre seus ganhos."
    },
    {
      title: "Estratégia Inteligente",
      description: "Planeje lançamentos com IA que entende o mercado musical brasileiro e maximiza suas chances de sucesso.",
      tag: "com IA"
    },
    {
      title: "Marketing que Funciona",
      description: "Ferramentas práticas para promover sua música sem precisar ser expert em marketing digital. Foco na música, não na burocracia."
    },
    {
      title: "Seu Catálogo, Suas Regras",
      description: "Gerencie toda sua música em um lugar só e venda direto para quem importa: seus fãs."
    },
    {
      title: "Acesso a Playlists",
      description: "Conecte-se diretamente com curadores que podem levar sua música para o próximo nível. Oportunidades reais, não só promessas."
    },
    {
      title: "Contratos Descomplicados",
      description: "Colabore sem dor de cabeça. Dividir royalties e gerenciar parcerias nunca foi tão simples."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {artistFeatures.map((feature, index) => (
        <FeatureItem 
          key={index} 
          {...feature} 
          size={index === 0 || index === 3 ? 'large' : 'small'}
        />
      ))}
    </div>
  );
};

export default ArtistFeatures;
