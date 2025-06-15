
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Plus } from 'lucide-react';
import { useLinkInBioStore } from './useLinkInBioStore';

const socialPlatforms = [
  'Instagram', 'Spotify', 'Apple Music', 'YouTube', 'TikTok', 
  'SoundCloud', 'Bandcamp', 'Twitter', 'Facebook', 'Deezer'
];

const SocialLinksSection: React.FC = () => {
  const { socialLinks, addSocialLink, removeSocialLink } = useLinkInBioStore();
  const [newPlatform, setNewPlatform] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const handleAddLink = () => {
    if (newPlatform && newUrl) {
      addSocialLink({ platform: newPlatform, url: newUrl });
      setNewPlatform('');
      setNewUrl('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {socialLinks.map((link, index) => (
          <div key={index} className="flex items-center gap-2 p-3 border rounded-lg">
            <div className="flex-1">
              <p className="font-medium text-sm">{link.platform}</p>
              <p className="text-xs text-muted-foreground truncate">{link.url}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => removeSocialLink(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="space-y-3 pt-4 border-t">
        <Label>Adicionar Rede Social</Label>
        <Select value={newPlatform} onValueChange={setNewPlatform}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a plataforma" />
          </SelectTrigger>
          <SelectContent>
            {socialPlatforms.map((platform) => (
              <SelectItem key={platform} value={platform}>
                {platform}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Input
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          placeholder="URL do perfil"
        />
        
        <Button onClick={handleAddLink} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Link
        </Button>
      </div>
    </div>
  );
};

export default SocialLinksSection;
