export interface Client {
  who: 'client';
  id: number;
  surname: string;
  name: string;
  patronymic?: string;
  phone: string;
  email: string;
  password: string;
  image?: string;
  city: number;
}

export type OrderStatus = 'processing' | 'paid' | 'went' | 'arrived' | 'closed' | 'canceled';

export interface Order {
  id: number;
  startPointId: number;
  endPointId: number;
  status: OrderStatus;
}

export interface Company {
  who: 'company';
  id: number;
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
  size: number;
  weight: number;
  companyId: number;
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
  time: string;
  cost: number;
  distance: number;
  transportType: TransportType;
}
