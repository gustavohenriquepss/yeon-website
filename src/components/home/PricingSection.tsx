import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';
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
}
const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const plans: PricingPlan[] = [{
    name: "Starter",
    price: "Grátis",
    description: "Grátis para sempre. Sem pegadinhas.",
    features: [{
      text: "Crie até 3 projetos"
    }, {
      text: "Até 3 colaboradores por projeto"
    }, {
      text: "Participe de projetos ilimitados"
    }, {
      text: "Suporte por email"
    }],
    ctaText: "Criar conta"
  }, {
    name: "Premium",
    price: isAnnual ? "R$25" : "R$30",
    period: "/mês",
    description: "Para artistas que levam a sério",
    features: [{
      text: "Projetos ilimitados",
      highlight: true
    }, {
      text: "Colaboradores ilimitados",
      highlight: true
    }, {
      text: "Acesso a comunidade VIP",
      highlight: true
    }, {
      text: "Suporte prioritário 24h"
    }, {
      text: "Acesso antecipado a novidades"
    }],
    ctaText: "Testar Premium grátis",
    popular: true
  }];
  return <section className="py-24 bg-yeon-dark-bg relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-yeon-purple/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="container px-4 relative z-10">
        <ScrollReveal>
          
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
            <button onClick={() => setIsAnnual(!isAnnual)} className="relative inline-flex h-7 w-14 items-center rounded-full bg-white/10 border border-white/10 transition-all duration-300 hover:border-white/20">
              <motion.span layout transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }} className={`inline-block h-5 w-5 rounded-full transition-colors ${isAnnual ? 'bg-yeon-purple ml-8' : 'bg-white/60 ml-1'}`} />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium transition-all duration-300 ${isAnnual ? 'text-white' : 'text-white/40'}`}>
                Anual
              </span>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">Economize R$60</span>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Starter Card */}
          <ScrollReveal delay={0.2}>
            <motion.div whileHover={{
            y: -4
          }} transition={{
            duration: 0.2
          }} className="h-full">
              <div className="relative h-full rounded-3xl bg-white/[0.03] border border-white/[0.06] p-8 lg:p-10 flex flex-col backdrop-blur-sm">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-white/70" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{plans[0].name}</h3>
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-bold text-white/90 tracking-tight">
                      {plans[0].price}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm">{plans[0].description}</p>
                </div>
                
                {/* Features */}
                <div className="space-y-4 mb-10 flex-1">
                  {plans[0].features.map((feature, idx) => <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-white/50" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-white/60">{feature.text}</span>
                    </div>)}
                </div>
                
                {/* CTA */}
                <Button variant="outline" className="w-full py-6 text-sm font-medium bg-transparent border-white/10 text-white/80 hover:bg-white/5 hover:border-white/20 hover:text-white transition-all duration-300">
                  {plans[0].ctaText}
                </Button>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Pro Card */}
          <ScrollReveal delay={0.3}>
            <motion.div whileHover={{
            y: -4
          }} transition={{
            duration: 0.2
          }} className="h-full">
              <div className="relative h-full rounded-3xl overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-yeon-purple via-yeon-purple/30 to-transparent opacity-50" />
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-b from-white/[0.06] to-yeon-dark-bg" />
                
                {/* Content */}
                <div className="relative p-8 lg:p-10 flex flex-col h-full">
                  {/* Popular badge */}
                  <div className="absolute top-6 right-6">
                    <div className="px-3 py-1.5 rounded-full text-xs font-medium text-white bg-black/[0.29]">
                      7 dias grátis
                    </div>
                  </div>
                  
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-yeon-purple/20 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-yeon-purple" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{plans[1].name}</h3>
                    </div>
                    
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-5xl font-bold text-white tracking-tight">
                        {plans[1].price}
                      </span>
                      <span className="text-white/40 text-lg">{plans[1].period}</span>
                    </div>
                    {isAnnual && <p className="text-white/40 text-sm mb-1">Cobrado anualmente (R$300/ano)</p>}
                    <p className="text-white/50 text-sm">{plans[1].description}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-10 flex-1">
                    {plans[1].features.map((feature, idx) => <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-yeon-purple/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-yeon-purple" strokeWidth={3} />
                        </div>
                        <span className={`text-sm ${feature.highlight ? 'text-white font-medium' : 'text-white/70'}`}>
                          {feature.text}
                        </span>
                      </div>)}
                  </div>
                  
                  {/* CTA */}
                  <Button className="w-full py-6 text-sm font-semibold bg-yeon-purple hover:bg-yeon-dark-purple text-white transition-all duration-300">
                    {plans[1].ctaText}
                  </Button>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
        
        {/* Trust badge */}
        <ScrollReveal delay={0.4}>
          <p className="text-center text-white/30 text-sm mt-12">Pagamento seguro via Creem • Cancele a qualquer momento</p>
        </ScrollReveal>
      </div>
    </section>;
};
export default PricingSection;