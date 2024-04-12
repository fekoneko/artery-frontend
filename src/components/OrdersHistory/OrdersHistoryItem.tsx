import { orders } from '../../assets/OrdersMock/orders';

const OrdersHistoryItem = () => {
  return (
    <div className="flex flex-col flex-wrap content-center gap-1">
      {orders.map((order) => (
        <div key={order.id}>
          <p className="text-xl text-red-300">
            {order.startPointId} - {order.endPointId}
          </p>
          <span className="text-orange-500">{order.status}</span>
        </div>
      ))}
    </div>
  );
};

export default OrdersHistoryItem;
