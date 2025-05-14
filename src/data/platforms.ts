
export interface Platform {
  id: string;
  name: string;
  rate: number; // USD per stream
  logo: string;
  color: string;
}

export const platforms: Platform[] = [
  {
    id: "spotify",
    name: "Spotify",
    rate: 0.003,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png",
    color: "#1DB954"
  },
  {
    id: "apple",
    name: "Apple Music",
    rate: 0.007,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png",
    color: "#fa2d6e"
  },
  {
    id: "youtube",
    name: "YouTube Music",
    rate: 0.002,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/512px-Youtube_Music_icon.svg.png",
    color: "#FF0000"
  },
  {
    id: "deezer",
    name: "Deezer",
    rate: 0.004,
    logo: "https://e-cdns-images.dzcdn.net/images/misc/44c3b19bf3c9f6e56631f2ba9efe1144/134x134-000000-80-0-0.jpg",
    color: "#00C7F2"
  },
  {
    id: "tidal",
    name: "Tidal",
    rate: 0.01,
    logo: "https://tidal.com/img/tidal-beta-logo.svg",
    color: "#000000"
  },
  {
    id: "amazonmusic",
    name: "Amazon Music",
    rate: 0.004,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Amazon_Music_logo.svg/1200px-Amazon_Music_logo.svg.png",
    color: "#00A8E1"
  }
];
