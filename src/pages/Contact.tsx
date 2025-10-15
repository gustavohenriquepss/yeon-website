import React from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "Email deve ter menos de 255 caracteres" }),
  phone: z.string().trim().min(1, { message: "Telefone é obrigatório" }).max(20, { message: "Telefone deve ter menos de 20 caracteres" }),
  message: z.string().trim().min(1, { message: "Mensagem é obrigatória" }).max(1000, { message: "Mensagem deve ter menos de 1000 caracteres" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // TODO: Implement email sending via edge function
      console.log('Form data:', data);
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      reset();
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contato - Yeon Music</title>
        <meta name="description" content="Entre em contato com a Yeon. Estamos aqui para ajudar artistas independentes a planejar seus lançamentos musicais." />
        <link rel="canonical" href="https://yeon-music.com/contato" />
      </Helmet>
      <PageLayout>
        <main className="min-h-screen py-20">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
                Entre em Contato
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tem alguma dúvida ou sugestão? Envie sua mensagem e nossa equipe responderá o mais breve possível.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="Seu nome completo"
                    className="bg-background/50 border-white/10"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="seu@email.com"
                    className="bg-background/50 border-white/10"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="(00) 00000-0000"
                    className="bg-background/50 border-white/10"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Conte-nos como podemos ajudar..."
                    rows={6}
                    className="bg-background/50 border-white/10 resize-none"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-yeon-purple hover:bg-yeon-dark-purple text-white font-medium"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-muted-foreground mb-2">Ou envie um email diretamente para:</p>
                <a href="mailto:contato@yeon.live" className="text-yeon-purple hover:text-yeon-dark-purple font-medium">
                  contato@yeon.live
                </a>
              </div>
            </div>
          </div>
        </main>
      </PageLayout>
    </>
  );
};

export default Contact;
