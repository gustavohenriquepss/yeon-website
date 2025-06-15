
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calendar, CheckSquare, Edit } from 'lucide-react';
import { format } from 'date-fns';
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

interface ProjectOverviewProps {
  projectDetails: ProjectDetails;
  completionPercentage: number;
  onEdit: () => void;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  projectDetails,
  completionPercentage,
  onEdit
}) => {
  const releaseDate = new Date(projectDetails.releaseDate);

  return (
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
              <span className="text-sm text-muted-foreground">{completionPercentage}%</span>
            </div>
            <Progress value={completionPercentage} className="h-2" />
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
  );
};

export default ProjectOverview;
