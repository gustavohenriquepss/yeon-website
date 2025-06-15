
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ExternalLink, Play, Calendar, MapPin, Music } from 'lucide-react';
import { useLinkInBioStore } from './useLinkInBioStore';

const LinkInBioPreview: React.FC = () => {
  const { profile, socialLinks, musicReleases, media, events, customLinks } = useLinkInBioStore();

  return (
    <div className="max-w-md mx-auto">
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          {/* Profile Section */}
          <div className="text-center mb-6">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-yeon-purple to-purple-600 flex items-center justify-center">
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
            <h2 className="text-xl font-semibold mb-1">{profile.name}</h2>
            <p className="text-muted-foreground mb-2">{profile.genre}</p>
            <p className="text-sm text-muted-foreground">{profile.bio}</p>
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {socialLinks.map((link, index) => (
                  <Button key={index} variant="outline" size="sm" asChild>
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
              <h3 className="font-medium mb-3">Últimos Lançamentos</h3>
              <div className="space-y-3">
                {musicReleases.map((release, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                    <div className="w-12 h-12 bg-gradient-to-br from-yeon-purple to-purple-600 rounded flex items-center justify-center">
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
                      <p className="font-medium text-sm">{release.title}</p>
                      <p className="text-xs text-muted-foreground">{release.type}</p>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={release.streamingUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Media Gallery */}
          {media.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-3">Galeria</h3>
              <div className="grid grid-cols-2 gap-2">
                {media.slice(0, 4).map((item, index) => (
                  <AspectRatio key={index} ratio={1}>
                    <div className="w-full h-full bg-muted rounded-lg overflow-hidden">
                      {item.type === 'image' ? (
                        <img 
                          src={item.url} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-yeon-purple to-purple-600 flex items-center justify-center">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      )}
                    </div>
                  </AspectRatio>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Events */}
          {events.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-3">Próximos Shows</h3>
              <div className="space-y-2">
                {events.map((event, index) => (
                  <div key={index} className="p-3 rounded-lg border">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-sm">{event.name}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                          <Calendar className="h-3 w-3" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {event.venue}
                        </div>
                      </div>
                      {event.ticketUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                            Ingressos
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Custom Links */}
          {customLinks.length > 0 && (
            <div className="space-y-2">
              {customLinks.map((link, index) => (
                <Button key={index} className="w-full" variant="outline" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkInBioPreview;
