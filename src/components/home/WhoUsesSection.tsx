import React from 'react';
import { User, Building, Users } from 'lucide-react';

const WhoUsesSection: React.FC = () => {
  const userTypes = [
    {
      icon: <User className="h-8 w-8 text-yeon-purple" />,
      title: "Artistas Independentes",
      description: "Organize seus lançamentos com autonomia total e controle sobre cada etapa do processo."
    },
    {
      icon: <Building className="h-8 w-8 text-yeon-purple" />,
      title: "Selos Pequenos",
      description: "Gerencie múltiplos artistas e releases simultaneamente com visibilidade completa."
    },
    {
      icon: <Users className="h-8 w-8 text-yeon-purple" />,
      title: "Produtores e Managers",
      description: "Coordene equipes e mantenha todos alinhados com os prazos e objetivos do projeto."
    }
  ];

  return (
    <section className="py-20 bg-yeon-darker-bg rounded-lg">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Quem Usa Yeon
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Profissionais da música que precisam de organização e resultados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {userTypes.map((type, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-yeon-purple/20 flex items-center justify-center mx-auto mb-4">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
              <p className="text-white/70">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoUsesSection;