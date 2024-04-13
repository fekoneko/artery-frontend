import { useContext, useEffect, useMemo, useState } from 'react';
import ChangeOrderDestinationForm from '../../components/Forms/OrderForm';
import CompanyMap from '../../components/Map/CompanyMap';
import OrderPrice from '../../components/Order/OrderPrice';
import CartContext, { CartItem } from '../../contexts/CartContext';
import { useQuery } from '@tanstack/react-query';
import { getAllPoints, getRoutes } from '../../lib/api';
import { useUser } from '../../lib/auth';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../../components/common/ActionButton';
import { MapPoint } from '../../@types/global';

const OrderPage = () => {
  const navigate = useNavigate();
  const user = useUser();
  const { cart } = useContext(CartContext);
  const [criterea, setCriterea] = useState<'length' | 'time' | 'cost'>('cost');
  const [startPoint, setStartPoint] = useState<MapPoint>();

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
        companyIds.map((id) => getRoutes(user.data.id, id, criterea)),
      );
      return results.flat();
    },
  });

  const allPointsQuery = useQuery({
    queryKey: ['allPoints'],
    queryFn: getAllPoints,
    refetchOnMount: true,
  });

  useEffect(() => {
    pathsQuery.refetch();
  }, [user.data, criterea, pathsQuery]);

  const chosenPath = pathsQuery.data?.find((path) => path[0] === startPoint?.id);

  return (
    <main className="flex size-full flex-col overflow-y-scroll pl-[12%] pr-[calc(12%-0.5rem)]">
      <OrderPrice />
      <div>
        <CompanyMap companyIds={companyIds} paths={chosenPath ? [chosenPath] : pathsQuery.data} />
      </div>
      <button
        onClick={() =>
          setCriterea((prev) => (prev === 'cost' ? 'length' : prev === 'length' ? 'time' : 'cost'))
        }
      >
        {criterea === 'cost'
          ? 'наиболее дешёвый'
          : criterea === 'length'
            ? 'наиболее короткий'
            : 'наиболее быстрый'}
      </button>
      <div className="flex gap-2">
        {pathsQuery.data?.map((path, index) => {
          const currentPathStartPoint = allPointsQuery.data?.find((point) => point.id === path[0]);
          return (
            <button key={index} onClick={() => setStartPoint(currentPathStartPoint)}>
              Со склада в пункте {currentPathStartPoint?.name}
            </button>
          );
        })}
      </div>
      <ChangeOrderDestinationForm />
      {pathsQuery.data && cart && (
        <ActionButton onClick={() => navigate(`/payment?s=${startPoint?.id}&p=${cart[0].id}`)}>
          Перейти к оплате
        </ActionButton>
      )}
    </main>
  );
};

export default OrderPage;
