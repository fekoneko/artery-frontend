import { useQuery } from '@tanstack/react-query';
import { mapTerrain } from '../../assets/map';
import MapView from '../../components/Map/MapView';
import { getAllPoints } from '../../lib/api';

const PickPointsPage = () => {
  const allPointsQuery = useQuery({
    queryKey: ['allPoints'],
    queryFn: getAllPoints,
    refetchOnMount: true,
  });

  return (
    <main className="flex size-full flex-col items-center gap-4 px-[12%] py-4">
      <h1 className="text-3xl font-semibold">Пункты выдачи</h1>
      <div className="grow">
        <MapView terrain={mapTerrain} points={allPointsQuery.data} />
      </div>
    </main>
  );
};
export default PickPointsPage;
