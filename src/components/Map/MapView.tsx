import { MapTerrain, MapPoint, MapRoad } from '../../@types/global';
import MapTerrainAreaView from './MapTerrainAreaView';
import MapPathView from './MapPathView';
import MapPointView from './MapPointView';
import MapRoadView from './MapRoadView';

interface MapViewProps {
  terrain: MapTerrain;
  points: MapPoint[];
  roads: MapRoad[];
  path: number[];
}
const MapView = ({ terrain, points, roads, path }: MapViewProps) => {
  return (
    <svg
      viewBox={`0 0 ${terrain.width} ${terrain.height}`}
      className="size-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {terrain.areas.map((area, index) => (
        <MapTerrainAreaView key={index} area={area} />
      ))}

      {roads.map((road) => (
        <MapRoadView key={road.id} road={road} points={points} />
      ))}

      <MapPathView path={path} points={points} />

      {points.map((point) => (
        <MapPointView key={point.id} point={point} />
      ))}
    </svg>
  );
};
export default MapView;
