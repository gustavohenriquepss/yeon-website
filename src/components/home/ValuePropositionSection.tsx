import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutDashboard, Users, BarChart3, LucideIcon } from 'lucide-react';
const ValuePropositionSection: React.FC = () => {
  const benefits: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }> = [{
    title: "Gestão",
    description: "Acompanhe todas as etapas e o progresso das tarefas de todos os seus lançamentos",
    icon: LayoutDashboard
  }, {
    title: "Insights",
    description: "Visualize o ritmo do seu trabalho e identifique gargalos antes que eles virem problemas.",
    icon: BarChart3
  }, {
    title: "Colaboração",
    description: "Mantenha toda a sua equipe alinhada em cada etapa de todos os projetos",
    icon: Users
  }];
  return <section id="value-proposition" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">A estrutura que seu lançamento merece</h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-8">Mais do que um gerenciador de tarefas, somos o seu parceiro estratégico. Criamos um ambiente onde a criatividade encontra a organização para gerar resultados reais.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return <Card key={index} className="border-0 bg-card overflow-hidden hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 text-left">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-muted">
                      <IconComponent className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default ValuePropositionSection;