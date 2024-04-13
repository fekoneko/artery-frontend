import { useQuery } from '@tanstack/react-query';
import { MapPoint } from '../../@types/global';
import { removeCompanyPoint } from '../../lib/api';
import { useUser } from '../../lib/auth';

const CompanyStoragesList = () => {
  const user = useUser();
  const companyPointsQuery = useQuery<MapPoint[]>({ queryKey: ['companyPoints'] });

  if (!user.data) return null;

  return (
    <div>
      <ul>
        {companyPointsQuery.data?.map((point) => (
          <li key={point.id} className="flex justify-between">
            <p>{point.name}</p>
            <p>{point.isStorage ? 'Склад' : 'Пункт выдачи'}</p>
            <button
              onClick={() => {
                removeCompanyPoint(user.data.id, point.id);
                setTimeout(() => companyPointsQuery.refetch(), 100);
              }}
            >
              Удалить склад
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CompanyStoragesList;
