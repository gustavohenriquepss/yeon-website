import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  ctaText: string;
  popular?: boolean;
}

const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Grátis",
      price: "R$0",
      description: "O básico, grátis para sempre!",
      features: [
        { text: "Crie 3 projetos" },
        { text: "Convide até 3 colaboradores" },
        { text: "Participe de projetos ilimitados" },
        { text: "Suporte ao Cliente" },
      ],
      ctaText: "Começar Grátis"
    },
    {
      name: "Pro",
      price: "R$60",
      description: "Tudo no plano Gratuito +",
      features: [
        { text: "Crie projetos ilimitados" },
        { text: "Membros e colaboradores ilimitados para sua equipe" },
        { text: "Participe de projetos ilimitados" },
        { text: "Suporte dedicado 24h" },
        { text: "Converse com um especialista em IA" },
      ],
      ctaText: "Assinar Pro",
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-yeon-dark-bg">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
          Planos que Crescem com Você
        </h2>
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-10">
          Escolha o plano ideal para o seu momento atual. Mude a qualquer momento conforme sua carreira evolui.
        </p>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`bg-yeon-card-bg border-white/5 relative ${plan.popular ? 'md:scale-105 shadow-lg shadow-yeon-purple/10 border-yeon-purple/20 z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yeon-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl md:text-5xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-white/60 ml-1">/mês</span>
                  </div>
                  <p className="text-sm text-white/70 mt-3">{plan.description}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 px-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="rounded-full p-1 text-yeon-purple bg-yeon-purple/10 flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-white/80">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="pt-6">
                <Button 
                  className={`w-full py-6 text-base ${plan.popular ? 'bg-yeon-purple hover:bg-yeon-dark-purple' : 'bg-white/10 hover:bg-white/20'}`}
                >
                  {plan.ctaText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
