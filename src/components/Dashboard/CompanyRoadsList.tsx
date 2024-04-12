import { useQuery } from '@tanstack/react-query';
import { MapRoad } from '../../@types/global';
import { removeCompanyRoad } from '../../lib/api';
import { useUser } from '../../lib/auth';

const CompanyRoadsList = () => {
  const user = useUser();
  const companyRoadsQuery = useQuery<MapRoad[]>({ queryKey: ['companyRoads'] });

  if (!user.data) return null;

  return (
    <div>
      <ul>
        {companyRoadsQuery.data?.map((road) => (
          <li key={road.id} className="flex justify-between">
            <p>
              {road.startId} - {road.endId}
            </p>
            <button
              onClick={() => {
                removeCompanyRoad(user.data.id, road.id);
                setTimeout(() => companyRoadsQuery.refetch(), 100);
              }}
            >
              Удалить путь
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CompanyRoadsList;
