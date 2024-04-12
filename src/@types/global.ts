export interface Client {
  who: 'client';
  surname: string;
  name: string;
  patronymic?: string;
  phone: string;
  email: string;
  password: string;
  image?: string;
  city: number;
}

export interface Order {
  id: number
  city_start: string
  city_end: string
  statuses: string
}

export interface Company {
  who: 'company';
  image?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  description?: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ProductCategory {
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

export type TransportType = 'car' | 'railway' | 'air' | 'sea' | 'river';

export interface MapRoad {
  id: number;
  startId: number;
  endId: number;
  time: number;
  cost: number;
  distance: number;
  transportType: TransportType;
}
