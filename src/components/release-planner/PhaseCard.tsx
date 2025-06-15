
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import TaskItem from './TaskItem';

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

interface Phase {
  id: string;
  title: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface PhaseCardProps {
  phase: Phase;
  tasks: Task[];
  teamMembers: TeamMember[];
  onToggleTask: (taskId: string) => void;
  onAssignMember: (taskId: string, memberName: string) => void;
}

const PhaseCard: React.FC<PhaseCardProps> = ({
  phase,
  tasks,
  teamMembers,
  onToggleTask,
  onAssignMember
}) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const phaseProgress = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <phase.icon className="h-5 w-5" />
            {phase.title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {completedTasks}/{tasks.length}
            </span>
            <div className="w-20">
              <Progress value={phaseProgress} className="h-2" />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              teamMembers={teamMembers}
              onToggleTask={onToggleTask}
              onAssignMember={onAssignMember}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PhaseCard;
