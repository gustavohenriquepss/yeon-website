import React from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import gustavoPadeiro from '@/assets/gustavo-padeiro.jpg';

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "Email deve ter menos de 255 caracteres" }),
  message: z.string().trim().min(1, { message: "Mensagem é obrigatória" }).max(1000, { message: "Mensagem deve ter menos de 1000 caracteres" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
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
        <main className="min-h-screen bg-background">
          <div className="container px-4 max-w-7xl mx-auto py-16 md:py-24">
            {/* Header */}
            <ScrollReveal>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground mb-16">
                Entre em<br />contato.
              </h1>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column - Info */}
              <div className="space-y-12">
                <ScrollReveal delay={0.1}>
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-md">
                    <span className="text-foreground font-medium">Tem um projeto em mente?</span>{' '}
                    Entre em contato e vamos discutir a melhor forma de seguir em frente.
                  </p>
                </ScrollReveal>

                {/* Team Member */}
                <ScrollReveal delay={0.2}>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={gustavoPadeiro} alt="Gustavo Padeiro" />
                      <AvatarFallback>GP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">Gustavo Padeiro</p>
                      <p className="text-sm text-muted-foreground">Líder do time</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column - Form */}
              <div className="space-y-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <ScrollReveal delay={0.15}>
                    <div className="space-y-1">
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="Seu nome *"
                        className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 text-lg placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                      )}
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <div className="space-y-1">
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="Email *"
                        className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 text-lg placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.25}>
                    <div className="space-y-1">
                      <Textarea
                        id="message"
                        {...register('message')}
                        placeholder="Sua mensagem"
                        rows={4}
                        className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 text-lg placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:border-foreground transition-colors resize-none min-h-[120px]"
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3}>
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-6 py-5 text-sm font-medium inline-flex items-center gap-3"
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar'}
                        <span className="w-2 h-2 rounded-full bg-background" />
                      </Button>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.35}>
                    <p className="text-sm text-muted-foreground">
                      Ao enviar, você concorda com nossos{' '}
                      <Link to="/termos" className="text-foreground underline hover:no-underline">
                        Termos
                      </Link>{' '}
                      e{' '}
                      <Link to="/termos" className="text-foreground underline hover:no-underline">
                        Política de Privacidade
                      </Link>.
                    </p>
                  </ScrollReveal>
                </form>

                {/* Divider */}
                <ScrollReveal delay={0.4}>
                  <div className="py-8">
                    <Plus className="w-5 h-5 text-muted-foreground/50" />
                  </div>
                </ScrollReveal>

                {/* Contact Info */}
                <ScrollReveal delay={0.45}>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                    <a 
                      href="mailto:contato@yeon.live" 
                      className="text-foreground text-2xl md:text-3xl font-medium underline underline-offset-4 hover:no-underline inline-flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      contato@yeon.live
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </main>
      </PageLayout>
    </>
  );
};

export default Contact;
