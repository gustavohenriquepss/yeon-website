
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { useLinkInBioStore } from './useLinkInBioStore';

const ProfileSection: React.FC = () => {
  const { profile, updateProfile } = useLinkInBioStore();

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="artist-name">Nome Artístico</Label>
        <Input
          id="artist-name"
          value={profile.name}
          onChange={(e) => updateProfile({ name: e.target.value })}
          placeholder="Seu nome artístico"
        />
      </div>
      
      <div>
        <Label htmlFor="genre">Gênero Musical</Label>
        <Input
          id="genre"
          value={profile.genre}
          onChange={(e) => updateProfile({ genre: e.target.value })}
          placeholder="Ex: Pop, Rock, Hip-Hop"
        />
      </div>
      
      <div>
        <Label htmlFor="bio">Biografia</Label>
        <Textarea
          id="bio"
          value={profile.bio}
          onChange={(e) => updateProfile({ bio: e.target.value })}
          placeholder="Conte um pouco sobre você e sua música..."
          rows={3}
        />
      </div>
      
      <div>
        <Label htmlFor="avatar">Foto de Perfil</Label>
        <div className="flex items-center gap-3 mt-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Enviar Foto
          </Button>
          <span className="text-sm text-muted-foreground">
            Recomendado: 400x400px
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
