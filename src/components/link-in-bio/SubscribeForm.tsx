
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mail } from 'lucide-react';
import { mockEmailService } from '@/services/mockEmailService';
import { useToast } from '@/hooks/use-toast';

interface SubscribeFormProps {
  artistSlug: string;
  primaryColor: string;
  textColor: string;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ artistSlug, primaryColor, textColor }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, insira seu email.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await mockEmailService.subscribe(artistSlug, email);
      
      if (result.success) {
        toast({
          title: "Sucesso!",
          description: result.message,
        });
        setEmail('');
      } else {
        toast({
          title: "Erro",
          description: result.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao processar sua inscrição.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 p-4 rounded-lg border" style={{ borderColor: `${primaryColor}30`, backgroundColor: `${primaryColor}10` }}>
      <div className="text-center mb-3">
        <mail className="h-5 w-5 mx-auto mb-2" style={{ color: primaryColor }} />
        <h3 className="font-medium text-sm" style={{ color: textColor }}>
          Receba Atualizações
        </h3>
        <p className="text-xs opacity-70">
          Seja o primeiro a saber sobre novos lançamentos e shows
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-sm"
          style={{ 
            borderColor: `${primaryColor}50`,
            backgroundColor: 'rgba(255, 255, 255, 0.9)'
          }}
        />
        <Button 
          type="submit" 
          className="w-full text-white"
          size="sm"
          disabled={isLoading}
          style={{ backgroundColor: primaryColor }}
        >
          {isLoading ? 'Inscrevendo...' : 'Inscrever-se'}
        </Button>
      </form>
    </div>
  );
};

export default SubscribeForm;
