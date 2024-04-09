import { MapPoint } from '../../@types/global';

interface MapPathViewProps {
  path: number[];
  points: MapPoint[];
}
const MapPathView = ({ path, points }: MapPathViewProps) => {
  const pointsString = path
    .map((pathPointId) => {
      const pathPoint = points.find((mapPoint) => mapPoint.id === pathPointId);
      if (!pathPoint) return '';
      return pathPoint.x + ',' + pathPoint.y;
    })
    .join(' ');

  return <polyline points={pointsString} className="fill-none stroke-teal-200/50 stroke-[0.9]" />;
};
export default MapPathView;
