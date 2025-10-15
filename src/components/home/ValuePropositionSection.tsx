import React from 'react';
import { LayoutDashboard, Sliders, Users, CheckCircle2 } from 'lucide-react';
const ValuePropositionSection: React.FC = () => {
  return <section id="value-proposition" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Por que Yeon?
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-8">Yeon é a ferramenta definitiva para planejar e lançar músicas. Mais que um checklist, é um guia prático com estratégias testadas para campanhas eficazes, crescimento de fãs e lançamentos de sucesso.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yeon-purple/20 flex items-center justify-center mx-auto mb-4">
                <LayoutDashboard className="h-8 w-8 text-yeon-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gerencie</h3>
              <p className="text-white/70">
                Gerencie facilmente todas as partes do seu lançamento e acompanhe o progresso das tarefas
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yeon-purple/20 flex items-center justify-center mx-auto mb-4">
                <Sliders className="h-8 w-8 text-yeon-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalize</h3>
              <p className="text-white/70">
                Comece com nosso modelo de lançamento padrão do setor e personalize-o para cada lançamento
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yeon-purple/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-yeon-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Colabore</h3>
              <p className="text-white/70">
                Mantenha toda a sua equipe alinhada em cada etapa de todos os projetos
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yeon-purple/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-yeon-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reduza Falhas</h3>
              <p className="text-white/70">
                Nunca perca os prazos com notificações e lembretes automáticos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ValuePropositionSection;