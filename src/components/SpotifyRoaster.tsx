
import React, { useState } from 'react';
import { Spotify, CornerDownLeft } from 'lucide-react';
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
        const mockRoasts = [
          "Seu gosto musical é tão básico que o algoritmo do Spotify deve achar que você é um bot.",
          "Aquela playlist de indie? Aposto que você só ouve as primeiras 30 segundos de cada música antes de pular.",
          "Vejo que você curte rock alternativo. Muito alternativo mesmo, alternativo a ter bom gosto.",
          "Seus artistas favoritos formam o Mount Rushmore da mediocridade musical.",
          "Sua playlist de treino parece a trilha sonora de uma propaganda de shampoo dos anos 90.",
          "Você ouviu tanto pop mainstream que o Spotify já deve estar tentando te vender ingressos para shows há 3 anos.",
          "Sua 'descoberta da semana' é basicamente o que todo mundo já estava ouvindo há 6 meses.",
          "Sua playlist lo-fi para estudar poderia ser usada como tratamento para insônia.",
          "Seu top artistas são tão previsíveis que até minha avó conseguiria adivinhar.",
          "Seu perfil musical grita 'personalidade de papelão' mais alto que os graves do seu rap favorito."
        ];
        
        const randomRoast = mockRoasts[Math.floor(Math.random() * mockRoasts.length)];
        setRoast(randomRoast);
        setLoading(false);
        toast.success("Seu perfil do Spotify foi fritado! 🔥");
      }, 2000);
    } catch (err) {
      console.error('Error roasting Spotify profile:', err);
      setError('Ocorreu um erro ao fritar seu perfil. Tente novamente.');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-6">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 rounded-full bg-green-600 flex items-center justify-center mb-4">
            <Spotify className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Frite meu Spotify</h2>
          <p className="text-muted-foreground max-w-md">
            Compartilhe seu perfil do Spotify e nossa IA vai fritar seu gosto musical sem dó.
            É diversão garantida (ou pelo menos tentamos).
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Cole o link do seu perfil</CardTitle>
            <CardDescription>
              Copie o link do seu perfil do Spotify e cole abaixo para receber uma análise nada amigável do seu gosto musical.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Input 
                  type="text" 
                  placeholder="https://open.spotify.com/user/seu_usuario" 
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
                <Spotify className="h-5 w-5 text-green-500" />
                Sua fritada está pronta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium italic">{roast}</p>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              É só uma brincadeira! Cada gosto musical é único e válido. 💚
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SpotifyRoaster;
