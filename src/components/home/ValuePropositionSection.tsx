
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Zap, Users, TrendingUp } from 'lucide-react';

interface ValuePropItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValuePropItem: React.FC<ValuePropItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/30 border border-white/10">
      <div className="w-16 h-16 rounded-full bg-yeon-purple/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
};

const ValuePropositionSection: React.FC = () => {
  const { t } = useLanguage();
  
  const valueProps = [
    {
      icon: <Zap className="h-8 w-8 text-yeon-purple" />,
      title: "Acelere Sua Carreira",
      description: "Não espere pela sorte. Use ferramentas que realmente funcionam para profissionalizar sua música e alcançar novos patamares."
    },
    {
      icon: <Users className="h-8 w-8 text-yeon-purple" />,
      title: "Conecte-se à Cena",
      description: "Faça parte de uma comunidade vibrante de artistas independentes que estão construindo o futuro da música brasileira."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-yeon-purple" />,
      title: "Monetize Seu Som",
      description: "Transforme streams em renda real. Entenda exatamente quanto vale sua música e como maximizar seus ganhos."
    }
  ];

  return (
    <section id="value-proposition" className="py-20 bg-yeon-darker-bg">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Onde Talento Encontra Oportunidade
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Yeon não é mais uma plataforma de música. Somos o trampolim para a nova geração de artistas independentes que estão redefinindo a cena musical brasileira.
          </p>
        </div>
        
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
