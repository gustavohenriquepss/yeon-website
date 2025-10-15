import React from 'react';
import { Clock, Target, CheckCircle } from 'lucide-react';
const ValuePropositionSection: React.FC = () => {
  return <section id="value-proposition" className="py-20 bg-yeon-darker-bg">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Por que Yeon?
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-8">Yeon é a ferramenta definitiva para planejar e lançar músicas. Mais que um checklist, é um guia prático com estratégias testadas para campanhas eficazes, crescimento de fãs e lançamentos de sucesso.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yeon-purple/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-yeon-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Otimização de Tempo</h3>
              <p className="text-white/70">
                Elimine retrabalho e organize todas as tarefas em um só lugar
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yeon-purple/20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-yeon-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visibilidade Completa</h3>
              <p className="text-white/70">
                Acompanhe o progresso em tempo real com roadmap integrado
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yeon-purple/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-yeon-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Redução de Erros</h3>
              <p className="text-white/70">
                Nunca perca um prazo com notificações automáticas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ValuePropositionSection;