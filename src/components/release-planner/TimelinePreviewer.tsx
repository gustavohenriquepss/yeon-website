
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Edit, Share, Calendar, CheckSquare, Clock, Users, User } from 'lucide-react';
import { format, subWeeks, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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

interface TimelinePreviewerProps {
  projectDetails: ProjectDetails;
  onEdit: () => void;
  onNext: () => void;
}

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  phase: 'pre-production' | 'production' | 'marketing' | 'release';
  assignedTo?: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}

const TimelinePreviewer: React.FC<TimelinePreviewerProps> = ({ 
  projectDetails, 
  onEdit, 
  onNext 
}) => {
  const releaseDate = new Date(projectDetails.releaseDate);
  
  // Generate timeline based on release date
  const generateTasks = (): Task[] => {
    const tasks: Task[] = [
      // Pre-Production (12-8 weeks before)
      {
        id: '1',
        title: 'Finalizar composições',
        description: 'Completar letras e melodias de todas as faixas',
        dueDate: format(subWeeks(releaseDate, 12), 'yyyy-MM-dd'),
        phase: 'pre-production',
        priority: 'high',
        completed: false,
        assignedTo: ''
      },
      {
        id: '2',
        title: 'Criar pré-produção',
        description: 'Gravar demos e definir arranjos',
        dueDate: format(subWeeks(releaseDate, 10), 'yyyy-MM-dd'),
        phase: 'pre-production',
        priority: 'high',
        completed: false,
        assignedTo: ''
      },
      {
        id: '3',
        title: 'Contratar equipe',
        description: 'Definir produtor, estúdio e músicos',
        dueDate: format(subWeeks(releaseDate, 9), 'yyyy-MM-dd'),
        phase: 'pre-production',
        priority: 'medium',
        completed: false,
        assignedTo: ''
      },

      // Production (8-6 weeks before)
      {
        id: '4',
        title: 'Gravação',
        description: 'Gravar todas as faixas no estúdio',
        dueDate: format(subWeeks(releaseDate, 8), 'yyyy-MM-dd'),
        phase: 'production',
        priority: 'high',
        completed: false,
        assignedTo: ''
      },
      {
        id: '5',
        title: 'Mixagem',
        description: 'Mixar todas as faixas',
        dueDate: format(subWeeks(releaseDate, 7), 'yyyy-MM-dd'),
        phase: 'production',
        priority: 'high',
        completed: false,
        assignedTo: ''
      },
      {
        id: '6',
        title: 'Masterização',
        description: 'Masterizar o projeto final',
        dueDate: format(subWeeks(releaseDate, 6), 'yyyy-MM-dd'),
        phase: 'production',
        priority: 'high',
        completed: false,
        assignedTo: ''
      },

      // Marketing (6-1 weeks before)
      {
        id: '7',
        title: 'Criar arte visual',
        description: 'Desenvolver capa, arte promocional e identidade visual',
        dueDate: format(subWeeks(releaseDate, 6), 'yyyy-MM-dd'),
        phase: 'marketing',
        priority: 'medium',
        completed: false,
        assignedTo: ''
      },
      {
        id: '8',
        title: 'Fotografias promocionais',
        description: 'Sessão de fotos para divulgação',
        dueDate: format(subWeeks(releaseDate, 5), 'yyyy-MM-dd'),
        phase: 'marketing',
        priority: 'medium',
        completed: false,
        assignedTo: ''
      },
      {
        id: '9',
        title: 'Enviar para distribuição',
        description: 'Upload para plataformas digitais',
        dueDate: format(subWeeks(releaseDate, 4), 'yyyy-MM-dd'),
        phase: 'marketing',
        priority: 'high',
        completed: false,
        assignedTo: ''
      },
      {
        id: '10',
        title: 'Campanha de pré-save',
        description: 'Configurar e promover pré-save nas plataformas',
        dueDate: format(subWeeks(releaseDate, 3), 'yyyy-MM-dd'),
        phase: 'marketing',
        priority: 'medium',
        completed: false,
        assignedTo: ''
      },
      {
        id: '11',
        title: 'Contato com imprensa',
        description: 'Enviar release para blogs e veículos especializados',
        dueDate: format(subWeeks(releaseDate, 2), 'yyyy-MM-dd'),
        phase: 'marketing',
        priority: 'medium',
        completed: false,
        assignedTo: ''
      },

      // Release (week of release)
      {
        id: '12',
        title: 'Lançamento oficial',
        description: 'Música disponível em todas as plataformas',
        dueDate: projectDetails.releaseDate,
        phase: 'release',
        priority: 'high',
        completed: false,
        assignedTo: ''
      },
      {
        id: '13',
        title: 'Divulgação intensiva',
        description: 'Postagens em redes sociais e engajamento',
        dueDate: projectDetails.releaseDate,
        phase: 'release',
        priority: 'high',
        completed: false,
        assignedTo: ''
      },
      {
        id: '14',
        title: 'Acompanhar métricas',
        description: 'Monitorar streams, downloads e engajamento',
        dueDate: format(addDays(releaseDate, 1), 'yyyy-MM-dd'),
        phase: 'release',
        priority: 'medium',
        completed: false,
        assignedTo: ''
      }
    ];

    return tasks;
  };

  const [tasks, setTasks] = useState<Task[]>(generateTasks());

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const assignMember = (taskId: string, memberName: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, assignedTo: memberName } : task
    ));
  };

  const phases = [
    { 
      id: 'pre-production', 
      title: 'Pré-Produção', 
      color: 'bg-blue-500',
      icon: Edit
    },
    { 
      id: 'production', 
      title: 'Produção', 
      color: 'bg-green-500',
      icon: Calendar
    },
    { 
      id: 'marketing', 
      title: 'Marketing', 
      color: 'bg-yellow-500',
      icon: Users
    },
    { 
      id: 'release', 
      title: 'Lançamento', 
      color: 'bg-purple-500',
      icon: Share
    }
  ];

  const getTasksByPhase = (phase: string) => 
    tasks.filter(task => task.phase === phase);

  const getCompletionPercentage = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    return Math.round((completedTasks / tasks.length) * 100);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  const getAssignedMember = (memberName: string) => {
    return projectDetails.teamMembers.find(member => member.name === memberName);
  };

  return (
    <div className="space-y-6">
      {/* Project Overview */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {projectDetails.projectName}
              </CardTitle>
              <CardDescription>
                {projectDetails.releaseType} • {projectDetails.genre} • 
                Lançamento: {format(releaseDate, 'dd/MM/yyyy', { locale: ptBR })}
              </CardDescription>
            </div>
            <Button variant="outline" onClick={onEdit}>
              <Edit className="h-4 w-4 mr-2" />
              Editar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Progresso Geral</span>
                <span className="text-sm text-muted-foreground">{getCompletionPercentage()}%</span>
              </div>
              <Progress value={getCompletionPercentage()} className="h-2" />
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Objetivos:</h4>
              <div className="space-y-1">
                {projectDetails.goals.map((goal, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckSquare className="h-4 w-4 text-yeon-purple" />
                    <span className="text-sm text-muted-foreground">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Equipe ({projectDetails.teamMembers.length} membros):</h4>
              <div className="flex flex-wrap gap-2">
                {projectDetails.teamMembers.map((member, index) => (
                  <Badge key={index} variant="outline">
                    {member.name} ({member.role})
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline by Phases */}
      <div className="grid gap-6">
        {phases.map((phase) => {
          const phaseTasks = getTasksByPhase(phase.id);
          const completedInPhase = phaseTasks.filter(task => task.completed).length;
          const phaseProgress = phaseTasks.length > 0 ? Math.round((completedInPhase / phaseTasks.length) * 100) : 0;

          return (
            <Card key={phase.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <phase.icon className="h-5 w-5" />
                    {phase.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {completedInPhase}/{phaseTasks.length}
                    </span>
                    <div className="w-20">
                      <Progress value={phaseProgress} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {phaseTasks.map((task) => (
                    <div
                      key={task.id}
                      className={`flex items-start gap-3 p-3 rounded-lg border ${
                        task.completed ? 'bg-muted/50' : 'bg-background'
                      }`}
                    >
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleTask(task.id)}
                        className="mt-1"
                      />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {task.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                              {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {format(new Date(task.dueDate), 'dd/MM', { locale: ptBR })}
                            </div>
                          </div>
                        </div>
                        <p className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : 'text-muted-foreground'}`}>
                          {task.description}
                        </p>
                        
                        {/* Team Member Assignment */}
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <Select 
                            value={task.assignedTo} 
                            onValueChange={(value) => assignMember(task.id, value)}
                          >
                            <SelectTrigger className="w-48 h-8">
                              <SelectValue placeholder="Atribuir membro" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="">Não atribuído</SelectItem>
                              {projectDetails.teamMembers.map((member, index) => (
                                <SelectItem key={index} value={member.name}>
                                  {member.name} - {member.role}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {task.assignedTo && getAssignedMember(task.assignedTo) && (
                            <Badge variant="outline" className="text-xs">
                              {getAssignedMember(task.assignedTo)?.role}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onEdit}>
          <Edit className="h-4 w-4 mr-2" />
          Voltar e Editar
        </Button>
        <Button onClick={onNext} className="bg-yeon-purple hover:bg-yeon-dark-purple">
          <Share className="h-4 w-4 mr-2" />
          Compartilhar com Equipe
        </Button>
      </div>
    </div>
  );
};

export default TimelinePreviewer;
