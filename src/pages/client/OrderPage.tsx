import { useContext, useEffect, useMemo, useState } from 'react';
import OrderForm from '../../components/Forms/OrderForm';
import CompanyMap from '../../components/Map/CompanyMap';
import OrderPrice from '../../components/Order/OrderPrice';
import CartContext, { CartItem } from '../../contexts/CartContext';
import { useQuery } from '@tanstack/react-query';
import { getRoutes } from '../../lib/api';
import { useUser } from '../../lib/auth';
import { TransportType } from '../../@types/global';

const OrderPage = () => {
  const user = useUser();
  const { cart } = useContext(CartContext);
  const [transportType, setTransportType] = useState<TransportType>('car');

  const itemsGroupedByCompany = useMemo(
    () =>
      // I'm so sorry
      cart?.reduce((groups, item) => {
        const group = (groups as any)[(item as any).companyId] ?? [];
        group.push(item);
        return Array.isArray(groups) ? [...groups, group] : [group];
      }, {}) as CartItem[][] | undefined,
    [cart],
  );

  const companyIds = useMemo(
    () => (itemsGroupedByCompany ? itemsGroupedByCompany.map((group) => group[0].id) : []),
    [itemsGroupedByCompany],
  );

  const pathsQuery = useQuery({
    queryKey: ['paths'],
    queryFn: async () => {
      if (!user.data) return [];
      const results = await Promise.all(
        companyIds.map((id) => getRoutes(user.data.id, id, transportType)),
      );
      return results.flat();
    },
  });

  useEffect(() => {
    pathsQuery.refetch();
  }, [user.data, transportType, pathsQuery]);

  return (
    <main className="flex size-full flex-col overflow-y-scroll pl-[12%] pr-[calc(12%-0.5rem)]">
      <p>Заказ будет доставлен через: </p>
      <OrderPrice />
      <div>
        <CompanyMap companyIds={companyIds} />
      </div>
      <OrderForm />
    </main>
  );
};

export default OrderPage;
