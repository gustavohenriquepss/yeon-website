
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Mail, Download } from 'lucide-react';
import { mockEmailService, EmailSubscription } from '@/services/mockEmailService';
import { useLinkInBioStore } from './useLinkInBioStore';
import { useToast } from '@/hooks/use-toast';

const SubscribersSection: React.FC = () => {
  const [subscribers, setSubscribers] = useState<EmailSubscription[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { profile } = useLinkInBioStore();
  const { toast } = useToast();

  const loadSubscribers = async () => {
    setIsLoading(true);
    try {
      const data = await mockEmailService.getSubscriptionsByArtist(profile.slug);
      setSubscribers(data);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível carregar os inscritos.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSubscribers();
  }, [profile.slug]);

  const handleDelete = async (id: string) => {
    try {
      await mockEmailService.deleteSubscription(id);
      setSubscribers(prev => prev.filter(sub => sub.id !== id));
      toast({
        title: "Sucesso",
        description: "Inscrito removido com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível remover o inscrito.",
        variant: "destructive"
      });
    }
  };

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Email,Data de Inscrição\n"
      + subscribers.map(sub => `${sub.email},${new Date(sub.subscribedAt).toLocaleDateString('pt-BR')}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `inscritos_${profile.slug}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return <div className="text-center py-8">Carregando inscritos...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Inscritos na Newsletter</h3>
          <p className="text-sm text-muted-foreground">
            Gerencie os fãs que se inscreveram para receber suas atualizações
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Mail className="h-3 w-3" />
            {subscribers.length} inscritos
          </Badge>
          
          {subscribers.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleExport}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Exportar CSV
            </Button>
          )}
        </div>
      </div>

      {subscribers.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center">
            <Mail className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="font-medium mb-2">Nenhum inscrito ainda</h3>
            <p className="text-sm text-muted-foreground">
              Quando os fãs se inscreverem em sua página, eles aparecerão aqui.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Lista de Inscritos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {subscribers.map((subscriber) => (
                <div
                  key={subscriber.id}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{subscriber.email}</p>
                    <p className="text-sm text-muted-foreground">
                      Inscrito em {new Date(subscriber.subscribedAt).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(subscriber.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SubscribersSection;
