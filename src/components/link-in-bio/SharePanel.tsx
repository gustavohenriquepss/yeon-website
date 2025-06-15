
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Copy, Share, QrCode, ExternalLink, Instagram, Twitter } from 'lucide-react';
import { useLinkInBioStore } from './useLinkInBioStore';
import { useToast } from '@/hooks/use-toast';

const SharePanel: React.FC = () => {
  const { profile, updateSlug, generateSlug, getPublicUrl, isPublished } = useLinkInBioStore();
  const { toast } = useToast();
  const [customSlug, setCustomSlug] = useState(profile.slug);

  const publicUrl = getPublicUrl();

  const handleSlugChange = (newSlug: string) => {
    const cleanSlug = generateSlug(newSlug);
    setCustomSlug(cleanSlug);
    updateSlug(cleanSlug);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Link copiado!",
        description: "O link foi copiado para sua área de transferência.",
      });
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o link.",
        variant: "destructive",
      });
    }
  };

  const shareToSocial = (platform: 'twitter' | 'instagram') => {
    const text = `Confira minha página de links! ${publicUrl}`;
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
    } else if (platform === 'instagram') {
      copyToClipboard(publicUrl);
      toast({
        title: "Link copiado para Instagram",
        description: "Cole o link na sua bio ou stories do Instagram.",
      });
    }
  };

  const generateQRCode = () => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(publicUrl)}`;
    window.open(qrUrl, '_blank');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share className="h-5 w-5" />
          Compartilhar Página
          {isPublished && (
            <Badge variant="secondary" className="bg-green-500/20 text-green-400">
              Publicado
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Custom URL */}
        <div className="space-y-3">
          <Label>URL Personalizada</Label>
          <div className="flex gap-2">
            <div className="flex-1">
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-muted border border-r-0 rounded-l-md text-sm text-muted-foreground">
                  yeon-music.com/bio/
                </span>
                <Input
                  value={customSlug}
                  onChange={(e) => handleSlugChange(e.target.value)}
                  className="rounded-l-none"
                  placeholder="seu-nome-artistico"
                />
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Este será o link único da sua página
          </p>
        </div>

        {/* Generated URL */}
        <div className="space-y-3">
          <Label>Seu Link</Label>
          <div className="flex gap-2">
            <Input
              value={publicUrl}
              readOnly
              className="bg-muted"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard(publicUrl)}
            >
              <Copy className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(publicUrl, '_blank')}
              disabled={!isPublished}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <Label>Ações Rápidas</Label>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              onClick={() => shareToSocial('twitter')}
              className="flex items-center gap-2"
              disabled={!isPublished}
            >
              <Twitter className="h-4 w-4" />
              Twitter
            </Button>
            <Button
              variant="outline"
              onClick={() => shareToSocial('instagram')}
              className="flex items-center gap-2"
              disabled={!isPublished}
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </Button>
          </div>
          <Button
            variant="outline"
            onClick={generateQRCode}
            className="w-full flex items-center gap-2"
            disabled={!isPublished}
          >
            <QrCode className="h-4 w-4" />
            Gerar QR Code
          </Button>
        </div>

        {!isPublished && (
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
            <p className="text-sm text-orange-400">
              <strong>Lembre-se:</strong> Publique sua página para compartilhar o link com seus fãs.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SharePanel;
