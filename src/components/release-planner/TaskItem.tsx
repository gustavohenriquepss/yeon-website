
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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

interface TaskItemProps {
  task: Task;
  teamMembers: TeamMember[];
  onToggleTask: (taskId: string) => void;
  onAssignMember: (taskId: string, memberName: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  teamMembers,
  onToggleTask,
  onAssignMember
}) => {
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

  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-lg border ${
        task.completed ? 'bg-muted/50' : 'bg-background'
      }`}
    >
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onToggleTask(task.id)}
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
            value={task.assignedTo || "unassigned"} 
            onValueChange={(value) => onAssignMember(task.id, value)}
          >
            <SelectTrigger className="w-48 h-8">
              <SelectValue placeholder="Atribuir membro" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="unassigned">Não atribuído</SelectItem>
              {teamMembers.map((member, index) => (
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
  );
};

export default TaskItem;
