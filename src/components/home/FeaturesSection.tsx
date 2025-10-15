import React from 'react';
import projectSetupImg from '@/assets/feature-project-setup.jpg';
import collaborationImg from '@/assets/feature-collaboration.jpg';
import aiAssistantImg from '@/assets/feature-ai-assistant.jpg';
import resourceLibraryImg from '@/assets/feature-resource-library.jpg';

const FeatureItem: React.FC<{
  image: string;
  title: string;
  description: string;
}> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col space-y-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
      <div className="w-full h-40 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      image: projectSetupImg,
      title: "Setup de Projetos Integrado",
      description: "Comece um novo lançamento em segundos com cronogramas e marcos já estruturados para projetos musicais."
    },
    {
      image: collaborationImg,
      title: "Acesso de Colaborador",
      description: "Convide seu produtor, gerente, A&R ou designer — todos ficam sincronizados sem tanto vai e volta."
    },
    {
      image: aiAssistantImg,
      title: "Assistente de IA",
      description: "Faça perguntas, consiga orientação e deixe a IA ajudar você a continuar no caminho certo para terminar no ritmo."
    },
    {
      image: resourceLibraryImg,
      title: "Biblioteca de Recursos",
      description: "Faça upload de capas, mixes e recursos promocionais diretamente, sem precisar vasculhar e-mails, drives ou grupos no Whatsapp."
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;