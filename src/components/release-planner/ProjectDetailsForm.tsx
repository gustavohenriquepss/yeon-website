
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Music, Calendar, Target } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const teamMemberSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  role: z.string().min(1, "Função é obrigatória")
});

const projectSchema = z.object({
  projectName: z.string().min(1, "Nome do projeto é obrigatório"),
  releaseType: z.string().min(1, "Tipo de lançamento é obrigatório"),
  releaseDate: z.string().min(1, "Data de lançamento é obrigatória"),
  genre: z.string().min(1, "Gênero é obrigatório"),
  goals: z.string().min(10, "Descreva seus objetivos com pelo menos 10 caracteres"),
  teamMembers: z.array(teamMemberSchema).min(1, "Adicione pelo menos um membro da equipe")
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface ProjectDetailsFormProps {
  onSubmit: (data: ProjectFormData) => void;
  initialData?: ProjectFormData | null;
}

const ProjectDetailsForm: React.FC<ProjectDetailsFormProps> = ({ onSubmit, initialData }) => {
  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: initialData || {
      projectName: '',
      releaseType: '',
      releaseDate: '',
      genre: '',
      goals: '',
      teamMembers: [{ name: '', email: '', role: '' }]
    }
  });

  const teamMembers = form.watch('teamMembers');

  const addTeamMember = () => {
    const currentMembers = form.getValues('teamMembers');
    form.setValue('teamMembers', [...currentMembers, { name: '', email: '', role: '' }]);
  };

  const removeTeamMember = (index: number) => {
    const currentMembers = form.getValues('teamMembers');
    if (currentMembers.length > 1) {
      form.setValue('teamMembers', currentMembers.filter((_, i) => i !== index));
    }
  };

  const releaseTypes = [
    { value: 'single', label: 'Single' },
    { value: 'ep', label: 'EP (3-6 faixas)' },
    { value: 'album', label: 'Álbum (7+ faixas)' },
    { value: 'mixtape', label: 'Mixtape' }
  ];

  const genres = [
    'Pop', 'Rock', 'Hip Hop', 'R&B', 'Electronic', 'Folk', 'Jazz', 'Classical',
    'Country', 'Reggae', 'Blues', 'Funk', 'Sertanejo', 'MPB', 'Bossa Nova', 'Forró'
  ];

  const roles = [
    'Artista Principal', 'Produtor Musical', 'Gerente', 'Assessor de Imprensa',
    'Social Media', 'Designer', 'Fotógrafo', 'Videomaker', 'Distribuidor'
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Basic Project Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="h-5 w-5" />
              Informações do Projeto
            </CardTitle>
            <CardDescription>
              Dados básicos sobre seu lançamento musical
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Projeto</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Meu Primeiro EP" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="releaseType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Lançamento</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {releaseTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="releaseDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de Lançamento</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gênero Musical</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o gênero" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {genres.map((genre) => (
                          <SelectItem key={genre} value={genre.toLowerCase()}>
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="goals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Objetivos do Lançamento</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Descreva o que você espera alcançar com este lançamento (ex: número de streams, shows, reconhecimento, etc.)"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Equipe do Projeto
            </CardTitle>
            <CardDescription>
              Adicione todos os membros que participarão do lançamento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {teamMembers.map((_, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
                <FormField
                  control={form.control}
                  name={`teamMembers.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`teamMembers.${index}.email`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@exemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`teamMembers.${index}.role`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Função</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role.toLowerCase()}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-end">
                  {teamMembers.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeTeamMember(index)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={addTeamMember}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Membro da Equipe
            </Button>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg" className="bg-yeon-purple hover:bg-yeon-dark-purple">
            <Calendar className="h-4 w-4 mr-2" />
            Gerar Plano de Lançamento
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProjectDetailsForm;
