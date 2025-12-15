export type ExperienceType = 'hike' | 'cultural' | 'natural' | 'attraction' | 'camping-and-safari';
export type Difficulty = 'easy' | 'moderate' | 'hard' | 'extreme';

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Photo {
  url: string;
  caption: string;
  isHero?: boolean;
  width?: number;
  height?: number;
}

export interface Experience {
    id: string;
    countyCode: number;
    countyName: string;
    name: string;
    type: ExperienceType;
    coordinates: Coordinates;
    visitDate: string;
    description: string;
    personalNote?: string;
    photos: Photo[];
    tags: string[];
  }