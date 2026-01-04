import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const roles = [{
  value: 'artista',
  label: 'Artista'
}, {
  value: 'label-manager',
  label: 'Label Manager'
}, {
  value: 'produtor',
  label: 'Produtor'
}, {
  value: 'designer',
  label: 'Designer'
}, {
  value: 'ar',
  label: 'A&R'
}, {
  value: 'fotografo',
  label: 'Fotógrafo'
}, {
  value: 'videomaker',
  label: 'Videomaker'
}, {
  value: 'outro',
  label: 'Outro'
}];
const WaitlistModal: React.FC<WaitlistModalProps> = ({
  open,
  onOpenChange
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, insira seu nome.",
        variant: "destructive"
      });
      return;
    }
    if (!isValidEmail(email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      return;
    }
    if (!role) {
      toast({
        title: "Papel obrigatório",
        description: "Por favor, selecione seu papel na música.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({ name: name.trim(), email: email.trim().toLowerCase(), role });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Email já cadastrado",
            description: "Este email já está na nossa lista VIP.",
            variant: "destructive"
          });
        } else {
          throw error;
        }
        setIsLoading(false);
        return;
      }

      toast({
        title: "Você está na lista! 🎉",
        description: "Entraremos em contato em breve com novidades exclusivas."
      });
      setName('');
      setEmail('');
      setRole('');
      onOpenChange(false);
    } catch (error) {
      console.error('Waitlist error:', error);
      toast({
        title: "Erro ao cadastrar",
        description: "Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader className="text-center">
          
          <DialogTitle className="text-2xl font-semibold text-center">
            Entre na Lista VIP
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Estamos liberando o acesso em ondas para garantir a melhor experiência. Deixe seu e-mail e nos diga qual é o seu papel na música para priorizarmos seu acesso.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input type="text" placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} className="bg-background border-border" />
          <Input type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} className="bg-background border-border" />
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Qual é o seu papel na música?" />
            </SelectTrigger>
            <SelectContent>
              {roles.map(r => <SelectItem key={r.value} value={r.value}>
                  {r.label}
                </SelectItem>)}
            </SelectContent>
          </Select>
          <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-white">
            {isLoading ? 'Entrando...' : 'Garantir minha vaga'}
          </Button>
        </form>
        
        <p className="text-xs text-center text-muted-foreground mt-2">Não vamos te enviar spam. A gente promete.</p>
      </DialogContent>
    </Dialog>;
};
export default WaitlistModal;