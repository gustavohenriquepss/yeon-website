import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { motion } from 'framer-motion';

interface PlanFeature {
  text: string;
  highlight?: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PlanFeature[];
  ctaText: string;
  popular?: boolean;
  icon: React.ReactNode;
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: "Grátis",
      description: "Comece sua jornada na música independente",
      icon: <Zap className="h-6 w-6" />,
      features: [
        { text: "3 projetos ativos" },
        { text: "Até 3 colaboradores por projeto" },
        { text: "Participe de projetos ilimitados" },
        { text: "Suporte por email" },
      ],
      ctaText: "Começar Grátis"
    },
    {
      name: "Pro",
      price: isAnnual ? "R$25" : "R$30",
      period: "/mês",
      description: "Para artistas que levam a sério",
      icon: <Sparkles className="h-6 w-6" />,
      features: [
        { text: "Projetos ilimitados", highlight: true },
        { text: "Colaboradores ilimitados", highlight: true },
        { text: "Assistente IA dedicado", highlight: true },
        { text: "Suporte prioritário 24h" },
        { text: "Acesso antecipado a novidades" },
      ],
      ctaText: "Começar Trial Grátis",
      popular: true
    }
  ];

  return (
    <section className="py-24 bg-yeon-dark-bg relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-yeon-purple/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="container px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 text-yeon-purple text-sm font-medium tracking-wide uppercase">
              <Sparkles className="h-4 w-4" />
              Preços transparentes
            </span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.05}>
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4">
            Planos que Crescem com Você
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="text-white/60 text-center max-w-xl mx-auto mb-10 text-lg">
            Sem surpresas. Cancele quando quiser.
          </p>
        </ScrollReveal>
        
        {/* Billing toggle */}
        <ScrollReveal delay={0.15}>
          <div className="flex items-center justify-center gap-3 mb-14">
            <span className={`text-sm font-medium transition-all duration-300 ${!isAnnual ? 'text-white' : 'text-white/40'}`}>
              Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-white/10 border border-white/10 transition-all duration-300 hover:border-white/20"
            >
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`inline-block h-5 w-5 rounded-full transition-colors ${isAnnual ? 'bg-yeon-purple ml-8' : 'bg-white/60 ml-1'}`}
              />
            </button>
            <span className={`text-sm font-medium transition-all duration-300 ${isAnnual ? 'text-white' : 'text-white/40'}`}>
              Anual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="ml-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full"
              >
                Economize 17%
              </motion.span>
            )}
          </div>
        </ScrollReveal>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-2xl p-[1px] h-full ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-yeon-purple/50 via-yeon-purple/20 to-transparent' 
                    : 'bg-white/[0.08]'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-yeon-purple to-yeon-dark-purple text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-lg shadow-yeon-purple/30 flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3" />
                      30 dias grátis
                    </div>
                  </div>
                )}
                
                <div className={`rounded-2xl p-8 h-full flex flex-col ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-yeon-card-bg to-yeon-dark-bg' 
                    : 'bg-yeon-card-bg/50'
                }`}>
                  {/* Header */}
                  <div className="mb-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      plan.popular 
                        ? 'bg-yeon-purple/20 text-yeon-purple' 
                        : 'bg-white/10 text-white/70'
                    }`}>
                      {plan.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <p className="text-white/50 text-sm">{plan.description}</p>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-5xl font-bold tracking-tight ${
                        plan.popular ? 'text-white' : 'text-white/90'
                      }`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-white/40 text-lg">{plan.period}</span>
                      )}
                    </div>
                    {plan.popular && isAnnual && (
                      <p className="text-white/40 text-sm mt-2">
                        Cobrado anualmente (R$300/ano)
                      </p>
                    )}
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`rounded-full p-1 flex-shrink-0 mt-0.5 ${
                          plan.popular 
                            ? 'bg-yeon-purple/20 text-yeon-purple' 
                            : 'bg-white/10 text-white/50'
                        }`}>
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </div>
                        <span className={`text-sm ${
                          feature.highlight 
                            ? 'text-white font-medium' 
                            : 'text-white/70'
                        }`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Button 
                    className={`w-full py-6 text-sm font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-yeon-purple hover:bg-yeon-dark-purple text-white shadow-lg shadow-yeon-purple/25 hover:shadow-yeon-purple/40' 
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Trust badge */}
        <ScrollReveal delay={0.4}>
          <p className="text-center text-white/40 text-sm mt-10">
            Pagamento seguro via Stripe • Cancele a qualquer momento
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
