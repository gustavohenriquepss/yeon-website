
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/context/LanguageContext';
import PageLayout from '@/components/PageLayout';

const ArtistsContent: React.FC = () => {
  const { t } = useLanguage();
  
  // Placeholder artist data
  const artists = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    name: `${t('artists.artist')} ${i + 1}`,
    genre: t('artists.genre'),
    image: `/placeholder.svg`,
  }));
  
  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{t('nav.artists')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {artists.map((artist) => (
          <div 
            key={artist.id}
            className="bg-[#2A2A2A] rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all"
          >
            <img 
              src={artist.image} 
              alt={artist.name} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <h3 className="font-medium text-lg">{artist.name}</h3>
              <p className="text-gray-400">{artist.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

const Artists: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Artistas | Yeon Music</title>
        <meta name="description" content="Conheça os artistas em destaque na Yeon Music. Artistas independentes que estão transformando a indústria musical." />
        <link rel="canonical" href="https://yeon-music.com/artists" />
      </Helmet>
      <PageLayout>
        <ArtistsContent />
      </PageLayout>
    </>
  );
};

export default Artists;
