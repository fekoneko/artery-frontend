import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../lib/api';

const OrderPrice = () => {
  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    refetchOnMount: true,
  });

  const products = productsQuery.data;
  if (!products) return null;

  let totalprice = 0;
  const items = JSON.parse(localStorage.getItem('cart') ?? '[]');

  for (let i = 0; i < items.length; i++) {
    const item = products.find((product) => product.id == items[i].id);
    if (!item) continue;
    totalprice += item.price * items[i].quantity;
  }
  localStorage.setItem('price', `${totalprice}`);
  return <p>Цена заказа: {totalprice} RUB</p>;
};

export default OrderPrice;
