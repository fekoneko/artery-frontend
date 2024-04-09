import { MapLandscapeArea } from '../../@types/global';

interface MapLandscapeAreaViewProps {
  area: MapLandscapeArea;
}
const MapLandscapeAreaView = ({ area }: MapLandscapeAreaViewProps) => {
  const pointsString = area.points.map((point) => point.x + ',' + point.y).join(' ');
  return <polygon points={pointsString} fill={area.color} />;
};
export default MapLandscapeAreaView;
