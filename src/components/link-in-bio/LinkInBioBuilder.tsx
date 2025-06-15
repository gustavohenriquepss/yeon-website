
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProfileSection from './ProfileSection';
import SocialLinksSection from './SocialLinksSection';
import MusicSection from './MusicSection';
import MediaSection from './MediaSection';
import EventsSection from './EventsSection';
import CustomLinksSection from './CustomLinksSection';
import { User, Music, Image, Calendar, Link, Instagram } from 'lucide-react';

const LinkInBioBuilder: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalize sua página</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="profile">
              <User className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="social">
              <Instagram className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="music">
              <Music className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="media">
              <Image className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="events">
              <Calendar className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="links">
              <Link className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <ProfileSection />
          </TabsContent>
          
          <TabsContent value="social">
            <SocialLinksSection />
          </TabsContent>
          
          <TabsContent value="music">
            <MusicSection />
          </TabsContent>
          
          <TabsContent value="media">
            <MediaSection />
          </TabsContent>
          
          <TabsContent value="events">
            <EventsSection />
          </TabsContent>
          
          <TabsContent value="links">
            <CustomLinksSection />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LinkInBioBuilder;
