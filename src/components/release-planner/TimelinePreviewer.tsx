
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Edit, Share, Calendar } from 'lucide-react';
import { format, subWeeks, addDays } from 'date-fns';
import ProjectOverview from './ProjectOverview';
import PhaseCard from './PhaseCard';
import { generateTimelineTasks } from './timelineUtils';

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
  const [tasks, setTasks] = useState<Task[]>(generateTimelineTasks(projectDetails.releaseDate));

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const assignMember = (taskId: string, memberName: string) => {
    const assignedTo = memberName === "unassigned" ? "" : memberName;
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, assignedTo } : task
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
      icon: Calendar
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

  return (
    <div className="space-y-6">
      {/* Project Overview */}
      <ProjectOverview
        projectDetails={projectDetails}
        completionPercentage={getCompletionPercentage()}
        onEdit={onEdit}
      />

      {/* Timeline by Phases */}
      <div className="grid gap-6">
        {phases.map((phase) => {
          const phaseTasks = getTasksByPhase(phase.id);
          
          return (
            <PhaseCard
              key={phase.id}
              phase={phase}
              tasks={phaseTasks}
              teamMembers={projectDetails.teamMembers}
              onToggleTask={toggleTask}
              onAssignMember={assignMember}
            />
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
