export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Good {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface GoodCategory {
  id: number;
  name: string;
}

export interface MapLandscapeArea {
  points: { x: number; y: number }[];
  color: string;
}

export interface MapLandscape {
  width: number;
  height: number;
  areas: MapLandscapeArea[];
}

export interface MapPoint {
  id: number;
  name: string;
  x: number;
  y: number;
  isStorage?: boolean;
}

export interface MapRoad {
  id: number;
  startId: number;
  endId: number;
  cost: number;
  distance: number;
}
