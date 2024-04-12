import { mapTerrain } from '../../assets/map';
import { mapPath, mapPoints, mapRoads } from '../../assets/mapMock/map';
import MapView from '../../components/Map/MapView';

const PickPointsPage = () => {
  return (
    <main className="flex size-full flex-col items-center gap-4 px-[12%] py-4">
      <h1 className="text-3xl font-semibold">Пункты выдачи</h1>
      <div className="grow">
        <MapView terrain={mapTerrain} points={mapPoints} roads={mapRoads} paths={[mapPath]} />
      </div>
    </main>
  );
};
export default PickPointsPage;
