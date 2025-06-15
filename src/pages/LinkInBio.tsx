
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '@/components/PageLayout';
import LinkInBioBuilder from '@/components/link-in-bio/LinkInBioBuilder';
import LinkInBioPreview from '@/components/link-in-bio/LinkInBioPreview';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Edit, Save, Globe } from 'lucide-react';
import { useLinkInBioStore } from '@/components/link-in-bio/useLinkInBioStore';
import { useToast } from '@/hooks/use-toast';

const LinkInBio: React.FC = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const { isPublished, togglePublish } = useLinkInBioStore();
  const { toast } = useToast();

  const handlePublish = () => {
    togglePublish();
    toast({
      title: isPublished ? "Página despublicada" : "Página publicada!",
      description: isPublished 
        ? "Sua página não está mais visível publicamente." 
        : "Sua página agora está disponível para compartilhar!",
    });
  };

  const handleSave = () => {
    // In a real app, this would save to a database
    toast({
      title: "Alterações salvas",
      description: "Suas alterações foram salvas com sucesso.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Link in Bio | Yeon Music</title>
        <meta 
          name="description" 
          content="Crie sua página de link in bio personalizada para centralizar todas suas redes sociais, músicas e conteúdo em um só lugar." 
        />
        <link rel="canonical" href="https://yeon-music.com/link-in-bio" />
      </Helmet>
      <PageLayout>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-medium mb-3">
              Link in Bio
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Crie sua página personalizada para centralizar todos seus links, músicas e conteúdo
            </p>
            
            <div className="flex justify-center items-center gap-3 flex-wrap">
              <div className="flex gap-2">
                <Button
                  variant={!isPreviewMode ? "default" : "outline"}
                  onClick={() => setIsPreviewMode(false)}
                  className="flex items-center gap-2"
                >
                  <Edit className="h-4 w-4" />
                  Editar
                </Button>
                <Button
                  variant={isPreviewMode ? "default" : "outline"}
                  onClick={() => setIsPreviewMode(true)}
                  className="flex items-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  Visualizar
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={handleSave}
                  className="flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Salvar
                </Button>
                <Button
                  variant={isPublished ? "destructive" : "default"}
                  onClick={handlePublish}
                  className="flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" />
                  {isPublished ? "Despublicar" : "Publicar"}
                </Button>
              </div>
              
              {isPublished && (
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                  Publicado
                </Badge>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {!isPreviewMode && (
              <div className="order-2 lg:order-1">
                <LinkInBioBuilder />
              </div>
            )}
            <div className={`${isPreviewMode ? 'col-span-2 max-w-md mx-auto' : 'order-1 lg:order-2'}`}>
              <LinkInBioPreview />
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default LinkInBio;
