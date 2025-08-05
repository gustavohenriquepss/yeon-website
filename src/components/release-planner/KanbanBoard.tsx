import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Clock, User } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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

interface TeamMember {
  name: string;
  email: string;
  role: string;
}

interface KanbanBoardProps {
  tasks: Task[];
  teamMembers: TeamMember[];
  onToggleTask: (taskId: string) => void;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({
  tasks,
  teamMembers,
  onToggleTask
}) => {
  const phases = [
    { 
      id: 'pre-production', 
      title: 'Pré-Produção', 
      color: 'border-l-blue-500'
    },
    { 
      id: 'production', 
      title: 'Produção', 
      color: 'border-l-green-500'
    },
    { 
      id: 'marketing', 
      title: 'Marketing', 
      color: 'border-l-yellow-500'
    },
    { 
      id: 'release', 
      title: 'Lançamento', 
      color: 'border-l-purple-500'
    }
  ];

  const getTasksByPhase = (phase: string) => 
    tasks.filter(task => task.phase === phase);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  const getAssignedMember = (memberName: string) => {
    return teamMembers.find(member => member.name === memberName);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const TaskCard = ({ task }: { task: Task }) => {
    const assignedMember = task.assignedTo ? getAssignedMember(task.assignedTo) : null;

    return (
      <Card className={`mb-3 border-l-4 ${phases.find(p => p.id === task.phase)?.color} ${
        task.completed ? 'opacity-60 bg-muted/30' : ''
      }`}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-2">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => onToggleTask(task.id)}
                className="mt-1"
              />
              <div className="flex-1">
                <h4 className={`font-medium text-sm leading-tight ${
                  task.completed ? 'line-through text-muted-foreground' : ''
                }`}>
                  {task.title}
                </h4>
              </div>
            </div>
            <Badge variant={getPriorityColor(task.priority)} className="text-xs">
              {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className={`text-xs mb-3 ${
            task.completed ? 'line-through text-muted-foreground' : 'text-muted-foreground'
          }`}>
            {task.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {format(new Date(task.dueDate), 'dd/MM', { locale: ptBR })}
            </div>
            
            {assignedMember ? (
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs">
                    {getInitials(assignedMember.name)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">{assignedMember.role}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <User className="h-3 w-3" />
                <span>Não atribuído</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {phases.map((phase) => {
        const phaseTasks = getTasksByPhase(phase.id);
        const completedTasks = phaseTasks.filter(task => task.completed).length;
        
        return (
          <div key={phase.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm">{phase.title}</h3>
              <Badge variant="outline" className="text-xs">
                {completedTasks}/{phaseTasks.length}
              </Badge>
            </div>
            
            <div className="space-y-3 min-h-[400px]">
              {phaseTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;