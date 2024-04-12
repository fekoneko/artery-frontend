import { MapPoint, MapRoad } from '../../@types/global';

export const mapPoints: MapPoint[] = [
  { id: 1, name: 'Bryansk', x: 10, y: 10, isStorage: true },
  { id: 2, name: 'Obninsk', x: 50, y: 40, isStorage: false },
  { id: 3, name: 'Moscow', x: 75, y: 20, isStorage: true },
  { id: 4, name: 'Tver', x: 69, y: 65, isStorage: true },
  { id: 5, name: 'Tokyo', x: 140, y: 60, isStorage: true },
  { id: 6, name: 'Muhosransk', x: 180, y: 85, isStorage: false },
  { id: 7, name: 'Krasnodar', x: 160, y: 35, isStorage: false },
  { id: 8, name: 'New York', x: 110, y: 80, isStorage: false },
];

export const mapRoads: MapRoad[] = [
  { id: 1, startId: 1, endId: 2, time: 12, cost: 100, distance: 300, transportType: 'car' },
  { id: 2, startId: 2, endId: 3, time: 12, cost: 150, distance: 200, transportType: 'railway' },
  { id: 3, startId: 3, endId: 4, time: 24, cost: 50, distance: 300, transportType: 'car' },
  { id: 4, startId: 3, endId: 5, time: 24, cost: 250, distance: 400, transportType: 'sea' },
  { id: 5, startId: 3, endId: 7, time: 16, cost: 300, distance: 400, transportType: 'car' },
  { id: 6, startId: 5, endId: 8, time: 10, cost: 500, distance: 200, transportType: 'railway' },
  { id: 7, startId: 4, endId: 7, time: 48, cost: 350, distance: 500, transportType: 'car' },
  { id: 8, startId: 1, endId: 3, time: 18, cost: 150, distance: 300, transportType: 'river' },
  { id: 9, startId: 3, endId: 8, time: 2, cost: 350, distance: 400, transportType: 'air' },
  { id: 10, startId: 4, endId: 8, time: 48, cost: 300, distance: 300, transportType: 'car' },
];

export const mapPath: number[] = [1, 2, 3, 5];
