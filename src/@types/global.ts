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

export interface MapTerrainArea {
  points: { x: number; y: number }[];
  color: string;
}

export interface MapTerrain {
  width: number;
  height: number;
  areas: MapTerrainArea[];
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
