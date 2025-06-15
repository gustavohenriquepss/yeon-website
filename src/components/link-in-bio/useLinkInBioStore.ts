
import { create } from 'zustand';

export interface SocialLink {
  platform: string;
  url: string;
}

export interface MusicRelease {
  title: string;
  type: string;
  cover?: string;
  streamingUrl: string;
}

export interface MediaItem {
  title: string;
  type: 'image' | 'video';
  url: string;
}

export interface Event {
  name: string;
  date: string;
  venue: string;
  ticketUrl?: string;
}

export interface CustomLink {
  title: string;
  url: string;
}

export interface Profile {
  name: string;
  bio: string;
  genre: string;
  avatar?: string;
}

interface LinkInBioStore {
  profile: Profile;
  socialLinks: SocialLink[];
  musicReleases: MusicRelease[];
  media: MediaItem[];
  events: Event[];
  customLinks: CustomLink[];
  updateProfile: (profile: Partial<Profile>) => void;
  addSocialLink: (link: SocialLink) => void;
  removeSocialLink: (index: number) => void;
  addMusicRelease: (release: MusicRelease) => void;
  removeMusicRelease: (index: number) => void;
  addMediaItem: (item: MediaItem) => void;
  removeMediaItem: (index: number) => void;
  addEvent: (event: Event) => void;
  removeEvent: (index: number) => void;
  addCustomLink: (link: CustomLink) => void;
  removeCustomLink: (index: number) => void;
}

export const useLinkInBioStore = create<LinkInBioStore>((set) => ({
  profile: {
    name: 'Seu Nome Artístico',
    bio: 'Descreva quem você é e sua música aqui...',
    genre: 'Seu Gênero Musical',
  },
  socialLinks: [
    { platform: 'Instagram', url: 'https://instagram.com/seuusername' },
    { platform: 'Spotify', url: 'https://open.spotify.com/artist/...' },
  ],
  musicReleases: [
    { 
      title: 'Minha Última Música', 
      type: 'Single', 
      streamingUrl: 'https://open.spotify.com/track/...' 
    },
  ],
  media: [],
  events: [],
  customLinks: [],
  
  updateProfile: (newProfile) =>
    set((state) => ({ profile: { ...state.profile, ...newProfile } })),
  
  addSocialLink: (link) =>
    set((state) => ({ socialLinks: [...state.socialLinks, link] })),
  
  removeSocialLink: (index) =>
    set((state) => ({ socialLinks: state.socialLinks.filter((_, i) => i !== index) })),
  
  addMusicRelease: (release) =>
    set((state) => ({ musicReleases: [...state.musicReleases, release] })),
  
  removeMusicRelease: (index) =>
    set((state) => ({ musicReleases: state.musicReleases.filter((_, i) => i !== index) })),
  
  addMediaItem: (item) =>
    set((state) => ({ media: [...state.media, item] })),
  
  removeMediaItem: (index) =>
    set((state) => ({ media: state.media.filter((_, i) => i !== index) })),
  
  addEvent: (event) =>
    set((state) => ({ events: [...state.events, event] })),
  
  removeEvent: (index) =>
    set((state) => ({ events: state.events.filter((_, i) => i !== index) })),
  
  addCustomLink: (link) =>
    set((state) => ({ customLinks: [...state.customLinks, link] })),
  
  removeCustomLink: (index) =>
    set((state) => ({ customLinks: state.customLinks.filter((_, i) => i !== index) })),
}));
