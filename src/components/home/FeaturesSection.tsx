import React from 'react';
import FeatureItem from './FeatureItem';
import setupIntegradoImg from '@/assets/setup-integrado.png';
import collaborationImg from '@/assets/feature-collaboration.png';
import aiAssistantImg from '@/assets/feature-ai-assistant.jpg';
import resourceLibraryImg from '@/assets/feature-resource-library.jpg';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      image: setupIntegradoImg,
      title: "Setup Automático",
      description: "Comece um novo lançamento em segundos com cronogramas e marcos já estruturados para projetos musicais."
    },
    {
      image: collaborationImg,
      title: "Acesso de Colaborador",
      description: "Convide seu produtor, gerente, A&R ou designer — todos ficam sincronizados sem tanto vai e volta."
    },
    {
      image: aiAssistantImg,
      title: "Planejador com IA",
      description: "Faça perguntas, consiga orientação e deixe a IA ajudar você a continuar no caminho certo para terminar no ritmo.",
      tag: "Em Breve"
    },
    {
      image: resourceLibraryImg,
      title: "Kanban Visual",
      description: "Organize suas tarefas em colunas intuitivas: Não Iniciado, Em Progresso e Concluído. Acompanhe o status de cada etapa do projeto em tempo real."
    }
  ];

  return (
    <section className="py-20 bg-yeon-dark-bg">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Todos os seus lançamentos, um workspace
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Planeje projetos, reúna sua equipe e mantenha todos os registros, ativos, metadados e prazos em um só lugar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              tag={feature.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;