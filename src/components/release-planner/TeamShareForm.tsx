
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Send, Check, Copy, Users, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ProjectDetails {
  projectName: string;
  releaseType: string;
  releaseDate: string;
  genre: string;
  goals: string;
  teamMembers: Array<{
    name: string;
    email: string;
    role: string;
  }>;
}

interface TeamShareFormProps {
  projectDetails: ProjectDetails;
}

const shareSchema = z.object({
  subject: z.string().min(1, "Assunto é obrigatório"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  selectedMembers: z.array(z.string()).min(1, "Selecione pelo menos um membro")
});

type ShareFormData = z.infer<typeof shareSchema>;

const TeamShareForm: React.FC<TeamShareFormProps> = ({ projectDetails }) => {
  const [isSharing, setIsSharing] = useState(false);
  const [sharedSuccessfully, setSharedSuccessfully] = useState(false);
  const { toast } = useToast();

  const form = useForm<ShareFormData>({
    resolver: zodResolver(shareSchema),
    defaultValues: {
      subject: `Plano de Lançamento: ${projectDetails.projectName}`,
      message: `Olá!

Criamos um plano estruturado para o lançamento do nosso projeto "${projectDetails.projectName}".

📅 Data de Lançamento: ${format(new Date(projectDetails.releaseDate), 'dd/MM/yyyy', { locale: ptBR })}
🎵 Tipo: ${projectDetails.releaseType}
🎭 Gênero: ${projectDetails.genre}

O plano inclui todas as tarefas organizadas por fases, com prazos e responsabilidades definidas. Vamos trabalhar juntos para fazer este lançamento ser um sucesso!

Confira seu cronograma e responsabilidades no plano anexo.

Vamos fazer acontecer! 🚀`,
      selectedMembers: projectDetails.teamMembers.map((_, index) => index.toString())
    }
  });

  const selectedMembers = form.watch('selectedMembers');

  const handleShare = async (data: ShareFormData) => {
    setIsSharing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSharing(false);
    setSharedSuccessfully(true);
    
    toast({
      title: "Plano compartilhado!",
      description: `Enviado para ${data.selectedMembers.length} membro(s) da equipe.`,
    });
  };

  const copyPlanLink = () => {
    const planUrl = `${window.location.origin}/release-plan/${encodeURIComponent(projectDetails.projectName)}`;
    navigator.clipboard.writeText(planUrl);
    
    toast({
      title: "Link copiado!",
      description: "Link do plano copiado para a área de transferência.",
    });
  };

  const generateEmailContent = () => {
    const subject = encodeURIComponent(form.getValues('subject'));
    const body = encodeURIComponent(form.getValues('message'));
    const recipients = selectedMembers
      .map(index => projectDetails.teamMembers[parseInt(index)].email)
      .join(',');
    
    return `mailto:${recipients}?subject=${subject}&body=${body}`;
  };

  if (sharedSuccessfully) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Plano Compartilhado com Sucesso!</h3>
          <p className="text-muted-foreground mb-6">
            Todos os membros da equipe receberam o plano de lançamento por email.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={copyPlanLink} variant="outline">
              <Copy className="h-4 w-4 mr-2" />
              Copiar Link do Plano
            </Button>
            <Button onClick={() => window.location.reload()} className="bg-yeon-purple hover:bg-yeon-dark-purple">
              <Calendar className="h-4 w-4 mr-2" />
              Criar Novo Plano
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleShare)} className="space-y-6">
        {/* Team Members Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Selecionar Membros da Equipe
            </CardTitle>
            <CardDescription>
              Escolha quem receberá o plano de lançamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="selectedMembers"
              render={() => (
                <FormItem>
                  <div className="grid gap-3">
                    {projectDetails.teamMembers.map((member, index) => (
                      <FormField
                        key={index}
                        control={form.control}
                        name="selectedMembers"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(index.toString())}
                                onCheckedChange={(checked) => {
                                  const updatedValue = checked
                                    ? [...(field.value || []), index.toString()]
                                    : (field.value || []).filter((value) => value !== index.toString());
                                  field.onChange(updatedValue);
                                }}
                              />
                            </FormControl>
                            <div className="flex-1 flex items-center justify-between">
                              <div>
                                <FormLabel className="font-medium">{member.name}</FormLabel>
                                <p className="text-sm text-muted-foreground">{member.email}</p>
                              </div>
                              <Badge variant="outline">{member.role}</Badge>
                            </div>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Email Customization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Personalizar Email
            </CardTitle>
            <CardDescription>
              Customize a mensagem que será enviada para sua equipe
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assunto</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field}
                      className="min-h-[200px]"
                      placeholder="Escreva uma mensagem para sua equipe..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={copyPlanLink}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copiar Link
              </Button>
              
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => window.open(generateEmailContent(), '_blank')}
                >
                  Abrir no Email
                </Button>
                
                <Button 
                  type="submit" 
                  disabled={isSharing || selectedMembers.length === 0}
                  className="bg-yeon-purple hover:bg-yeon-dark-purple"
                >
                  {isSharing ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Plano ({selectedMembers.length})
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Resumo do Projeto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Projeto:</span> {projectDetails.projectName}
              </div>
              <div>
                <span className="font-medium">Tipo:</span> {projectDetails.releaseType}
              </div>
              <div>
                <span className="font-medium">Gênero:</span> {projectDetails.genre}
              </div>
              <div>
                <span className="font-medium">Lançamento:</span> {format(new Date(projectDetails.releaseDate), 'dd/MM/yyyy', { locale: ptBR })}
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export default TeamShareForm;
