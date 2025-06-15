
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Plus, Upload } from 'lucide-react';
import { useLinkInBioStore } from './useLinkInBioStore';

const releaseTypes = ['Single', 'EP', 'Album', 'Remix', 'Live'];

const MusicSection: React.FC = () => {
  const { musicReleases, addMusicRelease, removeMusicRelease } = useLinkInBioStore();
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const handleAddRelease = () => {
    if (newTitle && newType && newUrl) {
      addMusicRelease({ 
        title: newTitle, 
        type: newType, 
        streamingUrl: newUrl 
      });
      setNewTitle('');
      setNewType('');
      setNewUrl('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {musicReleases.map((release, index) => (
          <div key={index} className="flex items-center gap-2 p-3 border rounded-lg">
            <div className="flex-1">
              <p className="font-medium text-sm">{release.title}</p>
              <p className="text-xs text-muted-foreground">{release.type}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => removeMusicRelease(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="space-y-3 pt-4 border-t">
        <Label>Adicionar Lançamento</Label>
        
        <div>
          <Label htmlFor="release-title">Título</Label>
          <Input
            id="release-title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Nome da música/album"
          />
        </div>

        <div>
          <Label htmlFor="release-type">Tipo</Label>
          <Select value={newType} onValueChange={setNewType}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de lançamento" />
            </SelectTrigger>
            <SelectContent>
              {releaseTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="streaming-url">Link de Streaming</Label>
          <Input
            id="streaming-url"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="URL do Spotify, Apple Music, etc."
          />
        </div>

        <div>
          <Label>Capa do Lançamento</Label>
          <Button variant="outline" className="w-full mt-2">
            <Upload className="h-4 w-4 mr-2" />
            Enviar Capa
          </Button>
        </div>
        
        <Button onClick={handleAddRelease} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Lançamento
        </Button>
      </div>
    </div>
  );
};

export default MusicSection;
