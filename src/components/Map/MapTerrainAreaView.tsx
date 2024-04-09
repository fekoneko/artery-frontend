import { MapTerrainArea } from '../../@types/global';

interface MapTerrainAreaViewProps {
  area: MapTerrainArea;
}
const MapTerrainAreaView = ({ area }: MapTerrainAreaViewProps) => {
  const pointsString = area.points.map((point) => point.x + ',' + point.y).join(' ');
  return <polygon points={pointsString} fill={area.color} />;
};
export default MapTerrainAreaView;
