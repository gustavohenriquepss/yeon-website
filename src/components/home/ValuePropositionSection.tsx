import React, { useState, useRef, useCallback, ComponentType, HTMLAttributes, forwardRef, useImperativeHandle } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutDashboardAnimated, BarChart3Animated, UsersAnimated, type LayoutDashboardAnimatedHandle, type BarChart3AnimatedHandle, type UsersAnimatedHandle } from '@/components/icons';

type AnimatedIconHandle = LayoutDashboardAnimatedHandle | BarChart3AnimatedHandle | UsersAnimatedHandle;
type AnimatedIconComponent = typeof LayoutDashboardAnimated | typeof BarChart3Animated | typeof UsersAnimated;
const ValuePropositionSection: React.FC = () => {
  const iconRefs = useRef<(AnimatedIconHandle | null)[]>([]);
  
  const benefits: Array<{
    title: string;
    description: string;
    Icon: AnimatedIconComponent;
  }> = [{
    title: "Gestão",
    description: "Acompanhe todas as etapas e o progresso das tarefas de todos os seus lançamentos",
    Icon: LayoutDashboardAnimated
  }, {
    title: "Insights",
    description: "Visualize o ritmo do seu trabalho e identifique gargalos antes que eles virem problemas.",
    Icon: BarChart3Animated
  }, {
    title: "Colaboração",
    description: "Mantenha toda a sua equipe alinhada em cada etapa de todos os projetos",
    Icon: UsersAnimated
  }];

  const handleInteractionStart = (index: number) => {
    iconRefs.current[index]?.startAnimation();
  };

  const handleInteractionEnd = (index: number) => {
    iconRefs.current[index]?.stopAnimation();
  };
  return <section id="value-proposition" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16 mx-0 px-[40px] bg-[yeon-dark-bg] bg-secondary py-[40px] rounded-lg">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">A estrutura que seu lançamento merece</h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-8">Mais do que um gerenciador de tarefas, somos o seu parceiro estratégico. Criamos um ambiente onde a criatividade encontra a organização para gerar resultados reais.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => {
            const { Icon } = benefit;
            return (
              <Card 
                key={index} 
                className="border-0 bg-card overflow-hidden transition-all duration-300 hover:bg-gradient-to-br hover:from-card hover:to-white/5 cursor-pointer"
                onMouseEnter={() => handleInteractionStart(index)}
                onMouseLeave={() => handleInteractionEnd(index)}
                onTouchStart={() => handleInteractionStart(index)}
                onTouchEnd={() => handleInteractionEnd(index)}
                onFocus={() => handleInteractionStart(index)}
                onBlur={() => handleInteractionEnd(index)}
                tabIndex={0}
              >
                <CardContent className="p-6 text-left">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-muted">
                    <Icon 
                      ref={(el) => { iconRefs.current[index] = el; }} 
                      size={24} 
                      className="text-foreground" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default ValuePropositionSection;