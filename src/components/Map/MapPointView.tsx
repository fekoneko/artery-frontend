import { SVGProps } from 'react';
import { MapPoint } from '../../@types/global';

interface MapPointViewProps {
  point: MapPoint;
}
const MapPointView = ({ point, ...groupProps }: MapPointViewProps & SVGProps<SVGGElement>) => {
  return (
    <g {...groupProps}>
      <circle
        cx={point.x}
        cy={point.y}
        r={point.isStorage ? '0.15rem' : '0.12rem'}
        className={
          'transition-colors [:hover>&]:fill-white' +
          (point.isStorage ? ' fill-emerald-400' : ' fill-sky-400')
        }
      />
      <circle
        cx={point.x}
        cy={point.y}
        r={point.isStorage ? '0.09rem' : '0.06rem'}
        className={point.isStorage ? 'fill-emerald-500' : 'fill-sky-500'}
      />
      <text
        x={point.x}
        y={point.y + 7.5}
        textAnchor="middle"
        className="fill-teal-100/50 text-[0.27rem] transition-colors [:hover>&]:fill-white"
      >
        {point.name}
      </text>
    </g>
  );
};
export default MapPointView;
