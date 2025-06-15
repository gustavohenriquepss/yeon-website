
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, CheckSquare, Mail, Calendar, Target } from 'lucide-react';
import ProjectDetailsForm from '@/components/release-planner/ProjectDetailsForm';
import TimelinePreviewer from '@/components/release-planner/TimelinePreviewer';
import TeamShareForm from '@/components/release-planner/TeamShareForm';

interface ProjectDetails {
  projectName: string;
  releaseType: string;
  releaseDate: string;
  genre: string;
  goals: string[];
  teamMembers: Array<{
    name: string;
    email: string;
    role: string;
  }>;
}

const ReleasePlanner: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>("details");
  const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(null);

  const steps = [
    { id: "details", title: "Detalhes do Projeto", icon: Target },
    { id: "preview", title: "Visualizar Plano", icon: Calendar },
    { id: "share", title: "Compartilhar", icon: Mail }
  ];

  const features = [
    {
      icon: Clock,
      title: "Timeline Personalizada",
      description: "Cronograma baseado na sua data de lançamento"
    },
    {
      icon: Users,
      title: "Colaboração em Equipe",
      description: "Ferramentas para trabalhar junto com sua equipe"
    },
    {
      icon: CheckSquare,
      title: "Lista de Tarefas Completa",
      description: "Checklist abrangente organizado por fases"
    },
    {
      icon: Mail,
      title: "Compartilhamento por Email",
      description: "Envie o plano para todos os membros da equipe"
    }
  ];

  const bestPractices = [
    "Comece Cedo: Inicie o planejamento pelo menos 12 semanas antes da data pretendida de lançamento.",
    "Seja Realista: Defina metas e prazos alcançáveis que considerem possíveis atrasos.",
    "Comunique-se: Mantenha sua equipe atualizada sobre o progresso e mudanças no cronograma.",
    "Acompanhe o Progresso: Revise e atualize regularmente o status de conclusão das tarefas."
  ];

  const handleProjectSubmit = (details: any) => {
    // Ensure all required fields are present with updated interface
    const completeDetails: ProjectDetails = {
      projectName: details.projectName || '',
      releaseType: details.releaseType || '',
      releaseDate: details.releaseDate || '',
      genre: details.genre || '',
      goals: details.goals || [],
      teamMembers: details.teamMembers || []
    };
    setProjectDetails(completeDetails);
    setActiveStep("preview");
  };

  return (
    <>
      <Helmet>
        <title>Planejador de Lançamento | Yeon Music</title>
        <meta 
          name="description" 
          content="Crie um plano estruturado e profissional para o lançamento da sua música. Organize sua equipe, defina cronogramas e acompanhe o progresso." 
        />
        <link rel="canonical" href="https://yeon-music.com/release-planner" />
      </Helmet>
      
      <PageLayout>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-medium mb-4">
              Planejador de Lançamento
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
              Estruture seu lançamento musical do zero. Organize sua equipe, defina cronogramas 
              e transforme sua música em um lançamento profissional que gera resultados.
            </p>
          </div>

          {/* Features Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-4">
                  <feature.icon className="h-8 w-8 mx-auto text-yeon-purple mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Tool */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Criar Plano de Lançamento
              </CardTitle>
              <CardDescription>
                Siga os três passos simples para criar seu plano personalizado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeStep} onValueChange={setActiveStep} className="w-full">
                <div className="flex justify-center mb-6">
                  <TabsList className="grid grid-cols-3 w-full max-w-2xl">
                    {steps.map((step, index) => (
                      <TabsTrigger 
                        key={step.id} 
                        value={step.id}
                        className="flex items-center gap-2"
                        disabled={step.id === "preview" && !projectDetails}
                      >
                        <step.icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{step.title}</span>
                        <Badge variant="secondary" className="ml-1">{index + 1}</Badge>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <TabsContent value="details" className="mt-6">
                  <ProjectDetailsForm 
                    onSubmit={handleProjectSubmit}
                    initialData={projectDetails}
                  />
                </TabsContent>

                <TabsContent value="preview" className="mt-6">
                  {projectDetails && (
                    <TimelinePreviewer 
                      projectDetails={projectDetails}
                      onEdit={() => setActiveStep("details")}
                      onNext={() => setActiveStep("share")}
                    />
                  )}
                </TabsContent>

                <TabsContent value="share" className="mt-6">
                  {projectDetails && (
                    <TeamShareForm projectDetails={projectDetails} />
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle>Melhores Práticas</CardTitle>
              <CardDescription>
                Dicas para maximizar o sucesso do seu lançamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bestPractices.map((practice, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckSquare className="h-5 w-5 text-yeon-purple mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{practice}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </PageLayout>
    </>
  );
};

export default ReleasePlanner;
