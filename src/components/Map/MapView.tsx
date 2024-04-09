import { MapLandscape, MapPoint, MapRoad } from '../../@types/global';
import MapLandscapeAreaView from './MapLandscapeAreaView';
import MapPathView from './MapPathView';
import MapPointView from './MapPointView';
import MapRoadView from './MapRoadView';

interface MapViewProps {
  landscape: MapLandscape;
  points: MapPoint[];
  roads: MapRoad[];
  path: number[];
}
const MapView = ({ landscape, points, roads, path }: MapViewProps) => {
  return (
    <svg
      viewBox={`0 0 ${landscape.width} ${landscape.height}`}
      className="size-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {landscape.areas.map((area, index) => (
        <MapLandscapeAreaView key={index} area={area} />
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
