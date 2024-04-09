import { MapPoint, MapRoad } from '../../@types/global';
import { animated, easings, useSpring } from 'react-spring';

interface MapRoadViewProps {
  road: MapRoad;
  points: MapPoint[];
}
const MapRoadView = ({ road, points }: MapRoadViewProps) => {
  const startPoint = points.find((point) => point.id === road.startId);
  const endPoint = points.find((point) => point.id === road.endId);
  const lineSpring = useSpring({
    from: { strokeDashoffset: 0 },
    to: { strokeDashoffset: -5 },
    config: {
      duration: 2000,
      easing: easings.linear,
    },
    reset: true,
    loop: true,
  });

  if (!startPoint || !endPoint) return null;
  return (
    <animated.line
      x1={startPoint.x}
      y1={startPoint.y}
      x2={endPoint.x}
      y2={endPoint.y}
      strokeDasharray={'3 2'}
      style={lineSpring}
      className="fill-none stroke-teal-200/30 stroke-[0.65]"
    />
  );
};
export default MapRoadView;
