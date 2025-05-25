
import React from 'react';
import FeatureItem, { FeatureItemProps } from './FeatureItem';

const FanFeatures: React.FC = () => {
  const fanFeatures: Omit<FeatureItemProps, 'size'>[] = [
    {
      title: "Descubra Antes de Todo Mundo",
      description: "Encontre artistas emergentes que estão moldando o futuro da música brasileira. Seja o primeiro a descobrir o próximo grande nome."
    },
    {
      title: "Busca Inteligente",
      description: "Encontre exatamente o que procura: artistas por gênero, região ou vibe. Perfeito para eventos, colaborações ou simplesmente descobrir música nova."
    },
    {
      title: "Apoie Diretamente",
      description: "Seu dinheiro vai direto para quem faz a música acontecer. Seja parte da jornada dos artistas que você ama."
    },
    {
      title: "Experiências Exclusivas",
      description: "Acesso a conteúdo exclusivo, merchandise limitado e experiências que só existem aqui. Muito além do streaming comum."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {fanFeatures.map((feature, index) => (
        <FeatureItem 
          key={index} 
          {...feature} 
          size={index === 0 || index === 3 ? 'large' : 'small'}
        />
      ))}
    </div>
  );
};

export default FanFeatures;
