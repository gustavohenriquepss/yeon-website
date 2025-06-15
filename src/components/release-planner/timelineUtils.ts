
import { format, subWeeks, addDays } from 'date-fns';

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

export const generateTimelineTasks = (releaseDate: string): Task[] => {
  const release = new Date(releaseDate);
  
  const tasks: Task[] = [
    // Pre-Production (12-8 weeks before)
    {
      id: '1',
      title: 'Finalizar composições',
      description: 'Completar letras e melodias de todas as faixas',
      dueDate: format(subWeeks(release, 12), 'yyyy-MM-dd'),
      phase: 'pre-production',
      priority: 'high',
      completed: false,
      assignedTo: ''
    },
    {
      id: '2',
      title: 'Criar pré-produção',
      description: 'Gravar demos e definir arranjos',
      dueDate: format(subWeeks(release, 10), 'yyyy-MM-dd'),
      phase: 'pre-production',
      priority: 'high',
      completed: false,
      assignedTo: ''
    },
    {
      id: '3',
      title: 'Contratar equipe',
      description: 'Definir produtor, estúdio e músicos',
      dueDate: format(subWeeks(release, 9), 'yyyy-MM-dd'),
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
      dueDate: format(subWeeks(release, 8), 'yyyy-MM-dd'),
      phase: 'production',
      priority: 'high',
      completed: false,
      assignedTo: ''
    },
    {
      id: '5',
      title: 'Mixagem',
      description: 'Mixar todas as faixas',
      dueDate: format(subWeeks(release, 7), 'yyyy-MM-dd'),
      phase: 'production',
      priority: 'high',
      completed: false,
      assignedTo: ''
    },
    {
      id: '6',
      title: 'Masterização',
      description: 'Masterizar o projeto final',
      dueDate: format(subWeeks(release, 6), 'yyyy-MM-dd'),
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
      dueDate: format(subWeeks(release, 6), 'yyyy-MM-dd'),
      phase: 'marketing',
      priority: 'medium',
      completed: false,
      assignedTo: ''
    },
    {
      id: '8',
      title: 'Fotografias promocionais',
      description: 'Sessão de fotos para divulgação',
      dueDate: format(subWeeks(release, 5), 'yyyy-MM-dd'),
      phase: 'marketing',
      priority: 'medium',
      completed: false,
      assignedTo: ''
    },
    {
      id: '9',
      title: 'Enviar para distribuição',
      description: 'Upload para plataformas digitais',
      dueDate: format(subWeeks(release, 4), 'yyyy-MM-dd'),
      phase: 'marketing',
      priority: 'high',
      completed: false,
      assignedTo: ''
    },
    {
      id: '10',
      title: 'Campanha de pré-save',
      description: 'Configurar e promover pré-save nas plataformas',
      dueDate: format(subWeeks(release, 3), 'yyyy-MM-dd'),
      phase: 'marketing',
      priority: 'medium',
      completed: false,
      assignedTo: ''
    },
    {
      id: '11',
      title: 'Contato com imprensa',
      description: 'Enviar release para blogs e veículos especializados',
      dueDate: format(subWeeks(release, 2), 'yyyy-MM-dd'),
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
      dueDate: releaseDate,
      phase: 'release',
      priority: 'high',
      completed: false,
      assignedTo: ''
    },
    {
      id: '13',
      title: 'Divulgação intensiva',
      description: 'Postagens em redes sociais e engajamento',
      dueDate: releaseDate,
      phase: 'release',
      priority: 'high',
      completed: false,
      assignedTo: ''
    },
    {
      id: '14',
      title: 'Acompanhar métricas',
      description: 'Monitorar streams, downloads e engajamento',
      dueDate: format(addDays(release, 1), 'yyyy-MM-dd'),
      phase: 'release',
      priority: 'medium',
      completed: false,
      assignedTo: ''
    }
  ];

  return tasks;
};
