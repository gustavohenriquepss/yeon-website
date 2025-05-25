
import React from 'react';
import { Globe, DollarSign, Settings } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ValuePropItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValuePropItem: React.FC<ValuePropItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-yeon-card-bg rounded-lg border border-white/5 hover:border-yeon-purple/30 transition-all duration-300 hover:-translate-y-1">
      <div className="p-4 bg-yeon-purple/10 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const ValuePropositionSection: React.FC = () => {
  const { t } = useLanguage();
  
  const valueProps = [
    {
      icon: <Settings className="h-8 w-8 text-yeon-purple" />,
      title: "Gestão Inteligente",
      description: "Ferramentas avançadas para gerenciar sua carreira musical de forma eficiente e profissional."
    },
    {
      icon: <Globe className="h-8 w-8 text-yeon-purple" />,
      title: "Alcance Global",
      description: "Distribua sua música em todas as plataformas principais de streaming ao redor do mundo."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-yeon-purple" />,
      title: "Monetização Direta",
      description: "Maximize seus ganhos com taxas transparentes e pagamentos diretos para sua conta."
    }
  ];

  return (
    <section id="value-proposition" className="py-20 bg-yeon-dark-bg">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <ValuePropItem
              key={index}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
