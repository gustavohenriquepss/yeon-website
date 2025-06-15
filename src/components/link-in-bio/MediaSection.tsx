
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Plus, Upload } from 'lucide-react';
import { useLinkInBioStore } from './useLinkInBioStore';

const MediaSection: React.FC = () => {
  const { media, addMediaItem, removeMediaItem } = useLinkInBioStore();
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState<'image' | 'video'>('image');
  const [newUrl, setNewUrl] = useState('');

  const handleAddMedia = () => {
    if (newTitle && newUrl) {
      addMediaItem({ 
        title: newTitle, 
        type: newType, 
        url: newUrl 
      });
      setNewTitle('');
      setNewUrl('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {media.map((item, index) => (
          <div key={index} className="flex items-center gap-2 p-3 border rounded-lg">
            <div className="flex-1">
              <p className="font-medium text-sm">{item.title}</p>
              <p className="text-xs text-muted-foreground capitalize">{item.type}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => removeMediaItem(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="space-y-3 pt-4 border-t">
        <Label>Adicionar Mídia</Label>
        
        <div>
          <Label htmlFor="media-title">Título</Label>
          <Input
            id="media-title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Título da foto/vídeo"
          />
        </div>

        <div>
          <Label htmlFor="media-type">Tipo</Label>
          <Select value={newType} onValueChange={(value: 'image' | 'video') => setNewType(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de mídia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="image">Foto</SelectItem>
              <SelectItem value="video">Vídeo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="media-url">URL da Mídia</Label>
          <Input
            id="media-url"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="URL da imagem ou vídeo"
          />
        </div>

        <div>
          <Button variant="outline" className="w-full">
            <Upload className="h-4 w-4 mr-2" />
            Enviar Arquivo
          </Button>
        </div>
        
        <Button onClick={handleAddMedia} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Mídia
        </Button>
      </div>
    </div>
  );
};

export default MediaSection;
