
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Share, Calendar, Kanban, Clock } from 'lucide-react';
import { format, subWeeks, addDays } from 'date-fns';
import ProjectOverview from './ProjectOverview';
import PhaseCard from './PhaseCard';
import KanbanBoard from './KanbanBoard';
import TimelineView from './TimelineView';
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
  const [tasks, setTasks] = useState<Task[]>(generateTimelineTasks(projectDetails.releaseDate, projectDetails.teamMembers));
  const [activeView, setActiveView] = useState<string>("kanban");

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

      {/* Views Tabs */}
      <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="kanban" className="flex items-center gap-2">
            <Kanban className="h-4 w-4" />
            Kanban
          </TabsTrigger>
          <TabsTrigger value="timeline" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Cronograma
          </TabsTrigger>
        </TabsList>

        <TabsContent value="kanban" className="mt-6">
          <KanbanBoard
            tasks={tasks}
            teamMembers={projectDetails.teamMembers}
            onToggleTask={toggleTask}
          />
        </TabsContent>

        <TabsContent value="timeline" className="mt-6">
          <TimelineView
            tasks={tasks}
            teamMembers={projectDetails.teamMembers}
            onToggleTask={toggleTask}
            releaseDate={projectDetails.releaseDate}
          />
        </TabsContent>
      </Tabs>

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
