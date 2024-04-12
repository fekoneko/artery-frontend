import { mapTerrain } from '../../assets/map';
import { mapPath, mapPoints, mapRoads } from '../../assets/mapMock/map';
import OrderForm from '../../components/Forms/OrderForm';
import MapView from '../../components/Map/MapView';
import OrderPrice from '../../components/Order/OrderPrice';

const OrderPage = () => {
  return (
    <main className="size-full overflow-y-scroll pl-[12%] pr-[calc(12%-0.5rem)]">
      Order page
      <p>Заказ будет доставлен через: </p>
      <OrderPrice />
      <div>
        <MapView terrain={mapTerrain} points={mapPoints} roads={mapRoads} path={mapPath} />
      </div>
      <OrderForm />
    </main>
  );
};

export default OrderPage;
