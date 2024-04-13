import { useQuery } from '@tanstack/react-query';
import { getClientOrders } from '../../lib/api';
import { useUser } from '../../lib/auth';

const OrdersHistoryPage = () => {
  const user = useUser();

  const ordersQuery = useQuery({
    queryKey: ['orders'],
    queryFn: () => (user.data ? getClientOrders(user.data.id) : undefined),
  });

  const orders = ordersQuery.data;
  if (!orders) return null;

  return (
    <main className="flex size-full flex-col gap-4 overflow-y-scroll pl-[12%] pr-[calc(12%-0.5rem)]">
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
    </main>
  );
};

export default OrdersHistoryPage;
