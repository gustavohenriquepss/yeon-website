import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Clock, User } from 'lucide-react';
import { format, isAfter, isBefore, startOfDay } from 'date-fns';
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

interface TimelineViewProps {
  tasks: Task[];
  teamMembers: TeamMember[];
  onToggleTask: (taskId: string) => void;
  releaseDate: string;
}

const TimelineView: React.FC<TimelineViewProps> = ({
  tasks,
  teamMembers,
  onToggleTask,
  releaseDate
}) => {
  const today = startOfDay(new Date());
  const release = new Date(releaseDate);

  // Sort tasks by due date
  const sortedTasks = [...tasks].sort((a, b) => 
    new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case 'pre-production': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'production': return 'bg-green-100 text-green-800 border-green-200';
      case 'marketing': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'release': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPhaseTitle = (phase: string) => {
    switch (phase) {
      case 'pre-production': return 'Pré-Produção';
      case 'production': return 'Produção';
      case 'marketing': return 'Marketing';
      case 'release': return 'Lançamento';
      default: return phase;
    }
  };

  const getAssignedMember = (memberName: string) => {
    return teamMembers.find(member => member.name === memberName);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const isOverdue = (dueDate: string, completed: boolean) => {
    return !completed && isBefore(new Date(dueDate), today);
  };

  const isUpcoming = (dueDate: string) => {
    const taskDate = new Date(dueDate);
    const threeDaysFromNow = new Date(today);
    threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);
    return isAfter(taskDate, today) && isBefore(taskDate, threeDaysFromNow);
  };

  return (
    <div className="space-y-4">
      {/* Release Date Header */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            <CardTitle className="text-lg">
              Data de Lançamento: {format(release, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </CardTitle>
          </div>
        </CardHeader>
      </Card>

      {/* Timeline */}
      <div className="space-y-3">
        {sortedTasks.map((task, index) => {
          const assignedMember = task.assignedTo ? getAssignedMember(task.assignedTo) : null;
          const taskDate = new Date(task.dueDate);
          const overdue = isOverdue(task.dueDate, task.completed);
          const upcoming = isUpcoming(task.dueDate);

          return (
            <div key={task.id} className="relative">
              {/* Timeline connector */}
              {index < sortedTasks.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border"></div>
              )}
              
              <Card className={`ml-0 ${
                task.completed ? 'opacity-60 bg-muted/30' : 
                overdue ? 'border-red-200 bg-red-50' :
                upcoming ? 'border-blue-200 bg-blue-50' : ''
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    {/* Timeline dot */}
                    <div className={`mt-1 h-3 w-3 rounded-full border-2 ${
                      task.completed ? 'bg-green-500 border-green-500' :
                      overdue ? 'bg-red-500 border-red-500' :
                      upcoming ? 'bg-blue-500 border-blue-500' :
                      'bg-background border-border'
                    }`}></div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <Checkbox
                            checked={task.completed}
                            onCheckedChange={() => onToggleTask(task.id)}
                            className="mt-1"
                          />
                          <div>
                            <h4 className={`font-medium ${
                              task.completed ? 'line-through text-muted-foreground' : ''
                            }`}>
                              {task.title}
                            </h4>
                            <p className={`text-sm mt-1 ${
                              task.completed ? 'line-through text-muted-foreground' : 'text-muted-foreground'
                            }`}>
                              {task.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                            {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
                          </Badge>
                          <Badge className={`text-xs ${getPhaseColor(task.phase)}`}>
                            {getPhaseTitle(task.phase)}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`flex items-center gap-1 text-sm ${
                            overdue ? 'text-red-600 font-medium' :
                            upcoming ? 'text-blue-600 font-medium' :
                            'text-muted-foreground'
                          }`}>
                            <Clock className="h-4 w-4" />
                            {format(taskDate, "dd/MM/yyyy", { locale: ptBR })}
                            {overdue && <span className="text-xs ml-1">(Atrasado)</span>}
                            {upcoming && <span className="text-xs ml-1">(Próximo)</span>}
                          </div>
                        </div>

                        {assignedMember ? (
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback className="text-xs">
                                {getInitials(assignedMember.name)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="text-right">
                              <p className="text-sm font-medium">{assignedMember.name}</p>
                              <p className="text-xs text-muted-foreground">{assignedMember.role}</p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <User className="h-4 w-4" />
                            <span>Não atribuído</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineView;