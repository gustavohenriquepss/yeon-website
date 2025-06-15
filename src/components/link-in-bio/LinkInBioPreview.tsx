
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Play, Calendar, MapPin, Music } from 'lucide-react';
import { useLinkInBioStore } from './useLinkInBioStore';
import SubscribeForm from './SubscribeForm';

const LinkInBioPreview: React.FC = () => {
  const { profile, socialLinks, musicReleases, media, events, customLinks, theme } = useLinkInBioStore();

  const photos = media.filter(item => item.type === 'image');
  const videos = media.filter(item => item.type === 'video');

  const getCardClassName = () => {
    const baseClass = "overflow-hidden border-0";
    switch (theme.cardStyle) {
      case 'square':
        return `${baseClass} rounded-none`;
      case 'minimal':
        return `${baseClass} rounded-sm shadow-sm`;
      default:
        return `${baseClass} rounded-xl`;
    }
  };

  const getFontClassName = () => {
    switch (theme.fontStyle) {
      case 'classic':
        return 'font-serif';
      case 'bold':
        return 'font-bold';
      default:
        return 'font-sans';
    }
  };

  const containerStyle = {
    background: theme.backgroundColor,
    color: theme.textColor,
  };

  const layoutClass = theme.layout === 'left-aligned' ? 'text-left' : 'text-center';

  return (
    <div className="max-w-md mx-auto">
      <Card className={getCardClassName()} style={containerStyle}>
        <CardContent className={`p-6 ${getFontClassName()}`}>
          {/* Profile Section */}
          <div className={`${layoutClass} mb-6`}>
            <div className={`w-24 h-24 ${theme.layout === 'left-aligned' ? 'mr-auto' : 'mx-auto'} mb-4 rounded-full flex items-center justify-center`}
                 style={{ background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.primaryColor}dd)` }}>
              {profile.avatar ? (
                <img 
                  src={profile.avatar} 
                  alt={profile.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-white text-2xl font-bold">
                  {profile.name.charAt(0)}
                </span>
              )}
            </div>
            <h2 className="text-xl font-semibold mb-1" style={{ color: theme.textColor }}>
              {profile.name}
            </h2>
            <p className="mb-2 opacity-80">{profile.genre}</p>
            <p className="text-sm opacity-70">{profile.bio}</p>
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="mb-6">
              <div className={`flex flex-wrap gap-2 ${theme.layout === 'left-aligned' ? 'justify-start' : 'justify-center'}`}>
                {socialLinks.map((link, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    size="sm" 
                    asChild
                    style={{ 
                      borderColor: `${theme.primaryColor}50`,
                      color: theme.textColor 
                    }}
                    className="hover:bg-opacity-10"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.platform}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Music Releases */}
          {musicReleases.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-3" style={{ color: theme.textColor }}>
                Últimos Lançamentos
              </h3>
              <div className="space-y-3">
                {musicReleases.map((release, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg border"
                    style={{ 
                      borderColor: `${theme.primaryColor}30`,
                      backgroundColor: `${theme.primaryColor}10` 
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.primaryColor}dd)` }}
                    >
                      {release.cover ? (
                        <img 
                          src={release.cover} 
                          alt={release.title}
                          className="w-full h-full rounded object-cover"
                        />
                      ) : (
                        <Music className="h-6 w-6 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm" style={{ color: theme.textColor }}>
                        {release.title}
                      </p>
                      <p className="text-xs opacity-70">{release.type}</p>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={release.streamingUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4" style={{ color: theme.primaryColor }} />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tabs for Photos, Videos, and Events */}
          {(photos.length > 0 || videos.length > 0 || events.length > 0) && (
            <div className="mb-6">
              <Tabs defaultValue="photos" className="w-full">
                <TabsList 
                  className="grid w-full grid-cols-3"
                  style={{ backgroundColor: `${theme.primaryColor}20` }}
                >
                  <TabsTrigger 
                    value="photos"
                    style={{ color: theme.textColor }}
                  >
                    Fotos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="videos"
                    style={{ color: theme.textColor }}
                  >
                    Vídeos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="events"
                    style={{ color: theme.textColor }}
                  >
                    Shows
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="photos" className="mt-4">
                  {photos.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2">
                      {photos.slice(0, 4).map((photo, index) => (
                        <AspectRatio key={index} ratio={1}>
                          <div className="w-full h-full bg-muted rounded-lg overflow-hidden">
                            <img 
                              src={photo.url} 
                              alt={photo.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                        </AspectRatio>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground text-sm py-8">Nenhuma foto adicionada</p>
                  )}
                </TabsContent>
                
                <TabsContent value="videos" className="mt-4">
                  {videos.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2">
                      {videos.slice(0, 4).map((video, index) => (
                        <AspectRatio key={index} ratio={1}>
                          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg overflow-hidden flex items-center justify-center relative group cursor-pointer">
                            <div className="absolute inset-0 bg-black opacity-20"></div>
                            <Play className="h-8 w-8 text-white z-10 group-hover:scale-110 transition-transform duration-200" />
                            <div className="absolute bottom-2 left-2 right-2 z-10">
                              <p className="text-white text-xs font-medium truncate">{video.title}</p>
                            </div>
                          </div>
                        </AspectRatio>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground text-sm py-8">Nenhum vídeo adicionado</p>
                  )}
                </TabsContent>
                
                <TabsContent value="events" className="mt-4">
                  {events.length > 0 ? (
                    <div className="space-y-2">
                      {events.map((event, index) => (
                        <div 
                          key={index} 
                          className="p-3 rounded-lg border"
                          style={{ 
                            borderColor: `${theme.primaryColor}30`,
                            backgroundColor: `${theme.primaryColor}10` 
                          }}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium text-sm" style={{ color: theme.textColor }}>
                                {event.name}
                              </p>
                              <div className="flex items-center gap-1 text-xs opacity-70 mt-1">
                                <Calendar className="h-3 w-3" />
                                {event.date}
                              </div>
                              <div className="flex items-center gap-1 text-xs opacity-70">
                                <MapPin className="h-3 w-3" />
                                {event.venue}
                              </div>
                            </div>
                            {event.ticketUrl && (
                              <Button 
                                size="sm" 
                                variant="outline" 
                                asChild
                                style={{ 
                                  borderColor: theme.primaryColor,
                                  color: theme.primaryColor 
                                }}
                              >
                                <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                                  Ingressos
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground text-sm py-8">Nenhum show agendado</p>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Custom Links */}
          {customLinks.length > 0 && (
            <div className="mb-6 space-y-2">
              {customLinks.map((link, index) => (
                <Button 
                  key={index} 
                  className="w-full" 
                  variant="outline" 
                  asChild
                  style={{ 
                    borderColor: `${theme.primaryColor}50`,
                    color: theme.textColor,
                    backgroundColor: `${theme.primaryColor}10`
                  }}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              ))}
            </div>
          )}

          {/* Subscribe Form */}
          <SubscribeForm
            artistSlug={profile.slug}
            primaryColor={theme.primaryColor}
            textColor={theme.textColor}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkInBioPreview;
