
import React, { useState } from 'react';
import { CornerDownLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/sonner';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const SpotifyRoaster: React.FC = () => {
  const [spotifyLink, setSpotifyLink] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [roast, setRoast] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setRoast(null);
    
    if (!spotifyLink.trim()) {
      setError('Por favor, insira um link do Spotify');
      return;
    }

    if (!spotifyLink.includes('spotify.com')) {
      setError('Por favor, insira um link válido do Spotify');
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call with mock responses (in a real implementation, this would call a backend)
      setTimeout(() => {
        const artistRoasts = [
          "Esse artista tem tantos ouvintes mensais quanto eu tenho vontade de acordar cedo na segunda-feira.",
          "Olhando para essas músicas, dá para ver que o talento desse artista é tão raro quanto internet boa em festival.",
          "Com esse branding, parece que o artista tirou todas as ideias de um tutorial do YouTube de 2015.",
          "Se essa discografia fosse um prato, seria arroz branco sem sal. Básico demais.",
          "A originalidade desse artista é tão impressionante quanto um filme da Netflix sobre adolescentes.",
          "As letras são tão profundas que dá para ver o fundo da piscina de cima.",
          "As transições entre as músicas são tão suaves quanto andar de patins numa estrada de terra.",
          "Esse artista tem tanta personalidade musical quanto um robô tentando dançar forró.",
          "A produção dessas músicas parece ter sido feita num iPhone 4 dentro de um banheiro.",
          "Se esse álbum fosse uma cor, seria bege. O bege mais bege que já existiu."
        ];
        
        const randomRoast = artistRoasts[Math.floor(Math.random() * artistRoasts.length)];
        setRoast(randomRoast);
        setLoading(false);
        toast.success("Perfil do artista foi fritado! 🔥");
      }, 2000);
    } catch (err) {
      console.error('Error roasting Spotify profile:', err);
      setError('Ocorreu um erro ao fritar o perfil. Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-6">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/1fd42be2-1964-4cfd-b29b-946c4b596ef3.png" 
              alt="Spotify Logo" 
              className="h-10 w-10"
            />
          </div>
          <h2 className="text-2xl font-bold">Frite meu Spotify</h2>
          <p className="text-muted-foreground max-w-md">
            Compartilhe o perfil de um artista no Spotify e nossa IA vai fritar sem dó.
            É diversão garantida (ou pelo menos tentamos).
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Cole o link do perfil do artista</CardTitle>
            <CardDescription>
              Copie o link de um perfil de artista do Spotify e cole abaixo para receber uma análise nada amigável.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Input 
                  type="text" 
                  placeholder="https://open.spotify.com/artist/..." 
                  value={spotifyLink}
                  onChange={(e) => setSpotifyLink(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" disabled={loading}>
                  {loading ? "Fritando..." : "Fritar"} 
                  {!loading && <CornerDownLeft className="ml-2 h-4 w-4" />}
                </Button>
              </div>
              
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </form>
          </CardContent>
        </Card>

        {roast && (
          <Card className="border-green-600/30 bg-green-600/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/1fd42be2-1964-4cfd-b29b-946c4b596ef3.png" 
                  alt="Spotify Logo" 
                  className="h-5 w-5"
                />
                Sua fritada está pronta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium italic">{roast}</p>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              É só uma brincadeira! Cada artista tem seu valor único. 💚
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SpotifyRoaster;
