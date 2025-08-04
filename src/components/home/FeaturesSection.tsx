import React from 'react';
import { CheckSquare, Calendar, Map, Bell } from 'lucide-react';

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm">
      <div className="w-12 h-12 rounded-lg bg-yeon-purple/20 flex items-center justify-center flex-shrink-0">
        {icon}
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
      icon: <CheckSquare className="h-6 w-6 text-yeon-purple" />,
      title: "Checklist Personalizável",
      description: "Passo a passo completo do seu release, customizado para seu estilo musical"
    },
    {
      icon: <Calendar className="h-6 w-6 text-yeon-purple" />,
      title: "Quadro Kanban",
      description: "Visualize todas as tarefas e prazos em cards organizados por etapa"
    },
    {
      icon: <Map className="h-6 w-6 text-yeon-purple" />,
      title: "Roadmap Integrado",
      description: "Cronograma visual de todas as etapas do lançamento em uma linha do tempo"
    },
    {
      icon: <Bell className="h-6 w-6 text-yeon-purple" />,
      title: "Notificações em Tempo Real",
      description: "Alertas automáticos para que você nunca perca um prazo importante"
    }
  ];

  return (
    <section className="py-20 bg-yeon-dark-bg">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Funcionalidades que Fazem a Diferença
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tudo que você precisa para planejar e executar lançamentos musicais de sucesso
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
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