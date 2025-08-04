import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envio
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      // Aqui você adicionaria a lógica real de newsletter
    }, 1000);
  };

  return (
    <section className="py-20 bg-yeon-dark-bg">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-yeon-purple/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-yeon-purple" />
          </div>
          
          <h2 className="text-3xl font-semibold mb-4">
            Fique por dentro das melhores práticas de release
          </h2>
          <p className="text-white/70 mb-8">
            Receba dicas exclusivas, estratégias e atualizações da plataforma
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-yeon-purple hover:bg-yeon-dark-purple"
            >
              {isLoading ? 'Enviando...' : 'Quero Receber'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;