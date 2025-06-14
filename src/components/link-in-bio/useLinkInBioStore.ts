
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
  slug: string;
}

export interface ThemeSettings {
  primaryColor: string;
  backgroundColor: string;
  backgroundImage?: string;
  textColor: string;
  cardStyle: 'rounded' | 'square' | 'minimal';
  layout: 'centered' | 'left-aligned';
  fontStyle: 'modern' | 'classic' | 'bold';
}

interface LinkInBioStore {
  profile: Profile;
  socialLinks: SocialLink[];
  musicReleases: MusicRelease[];
  media: MediaItem[];
  events: Event[];
  customLinks: CustomLink[];
  theme: ThemeSettings;
  isPublished: boolean;
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
  updateTheme: (theme: Partial<ThemeSettings>) => void;
  updateSlug: (slug: string) => void;
  togglePublish: () => void;
  generateSlug: (name: string) => string;
  getPublicUrl: () => string;
}

export const useLinkInBioStore = create<LinkInBioStore>((set, get) => ({
  profile: {
    name: 'Seu Nome Artístico',
    bio: 'Descreva quem você é e sua música aqui...',
    genre: 'Seu Gênero Musical',
    slug: 'seu-nome-artistico',
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
  media: [
    { 
      title: 'Foto do Show', 
      type: 'image', 
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop' 
    },
    { 
      title: 'Bastidores do Estúdio', 
      type: 'video', 
      url: '#' 
    },
    { 
      title: 'Sessão de Fotos', 
      type: 'image', 
      url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop' 
    },
    { 
      title: 'Clipe Oficial', 
      type: 'video', 
      url: '#' 
    },
  ],
  events: [],
  customLinks: [],
  theme: {
    primaryColor: '#8B5CF6',
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff',
    cardStyle: 'rounded',
    layout: 'centered',
    fontStyle: 'modern',
  },
  isPublished: false,
  
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
  
  updateTheme: (newTheme) =>
    set((state) => ({ theme: { ...state.theme, ...newTheme } })),
  
  updateSlug: (slug) =>
    set((state) => ({ profile: { ...state.profile, slug } })),
  
  togglePublish: () =>
    set((state) => ({ isPublished: !state.isPublished })),
  
  generateSlug: (name: string) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  },
  
  getPublicUrl: () => {
    const { profile } = get();
    return `${window.location.origin}/bio/${profile.slug}`;
  },
}));
