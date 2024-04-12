import { MapTerrain } from '../@types/global';

export const mapTerrain: MapTerrain = {
  width: 200,
  height: 100,
  areas: [
    {
      points: [
        { x: 2, y: 1 },
        { x: 80, y: 10 },
        { x: 120, y: 5 },
        { x: 200, y: 50 },
        { x: 150, y: 100 },
        { x: 60, y: 85 },
        { x: 0, y: 8 },
      ],
      color: '#334455',
    },
    {
      points: [
        { x: 60, y: 25 },
        { x: 123, y: 45 },
        { x: 120, y: 72 },
        { x: 65, y: 75 },
        { x: 40, y: 50 },
      ],
      color: '#3b4c5e',
    },
    {
      points: [
        { x: 130, y: 15 },
        { x: 140, y: 20 },
        { x: 135, y: 35 },
        { x: 110, y: 30 },
      ],
      color: '#3b4c5e',
    },
  ],
};
