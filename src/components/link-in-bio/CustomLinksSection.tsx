
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Plus } from 'lucide-react';
import { useLinkInBioStore } from './useLinkInBioStore';

const CustomLinksSection: React.FC = () => {
  const { customLinks, addCustomLink, removeCustomLink } = useLinkInBioStore();
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const handleAddLink = () => {
    if (newTitle && newUrl) {
      addCustomLink({ title: newTitle, url: newUrl });
      setNewTitle('');
      setNewUrl('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {customLinks.map((link, index) => (
          <div key={index} className="flex items-center gap-2 p-3 border rounded-lg">
            <div className="flex-1">
              <p className="font-medium text-sm">{link.title}</p>
              <p className="text-xs text-muted-foreground truncate">{link.url}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => removeCustomLink(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="space-y-3 pt-4 border-t">
        <Label>Adicionar Link Personalizado</Label>
        
        <div>
          <Label htmlFor="link-title">Título do Link</Label>
          <Input
            id="link-title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Ex: Meu Site, Loja, Newsletter"
          />
        </div>

        <div>
          <Label htmlFor="link-url">URL</Label>
          <Input
            id="link-url"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="https://..."
          />
        </div>
        
        <Button onClick={handleAddLink} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Link
        </Button>
      </div>
    </div>
  );
};

export default CustomLinksSection;
