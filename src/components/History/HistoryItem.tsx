import { orders } from '../../assets/OrdersMock/orders';

const HistoryItem = () => {
  return (
    <div className="flex flex-col flex-wrap content-center gap-1">
      {orders.map((order) => (
        <div className="" key={order.id}>
          <p className="text-xl text-red-300">
            {' '}
            {order.city_start} - {order.city_end}{' '}
          </p>
          <span className="text-orange-500"> {order.statuses}</span>
        </div>
      ))}
    </div>
  );
};

export default HistoryItem;
