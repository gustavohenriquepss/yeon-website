
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Input } from '@/components/ui/input';

const CTASection: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the newsletter subscription
    console.log('Email submitted:', email);
    setEmail('');
  };
  
  return (
    <div className="mt-16 mb-8 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] p-6 border border-white/5">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-3">{t('ctaTitle')}?</h3>
        <p className="text-muted-foreground mb-6">
          {t('ctaNewDescription')}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="seu@email.com"
            className="max-w-xs"
            required
          />
          <Button 
            type="submit"
            className="bg-yeon-purple hover:bg-yeon-dark-purple text-white font-medium"
          >
            {t('ctaButton')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CTASection;
