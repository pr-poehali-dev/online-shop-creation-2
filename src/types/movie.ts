export interface Movie {
  id: number;
  title: string;
  originalTitle?: string;
  year: number;
  duration: number; // в минутах
  rating: number;
  imdbRating?: number;
  genre: string[];
  country: string;
  director: string;
  actors: string[];
  description: string;
  poster: string;
  backdrop?: string;
  trailer?: string;
  quality: "CAM" | "HD" | "FullHD" | "4K";
  isNew?: boolean;
  isTop?: boolean;
  viewCount?: number;
}

export interface MovieCategory {
  id: string;
  name: string;
  slug: string;
}
