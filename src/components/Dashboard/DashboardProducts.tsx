import { useQuery } from '@tanstack/react-query';
import ProductsList from '../Products/ProductsList';
import { useUser } from '../../lib/auth';
import { useEffect } from 'react';
import { products } from '../../assets/productsMock/products';

const DashboardProducts = () => {
  const user = useUser({ retry: 1, retryDelay: 100 });

  const companyProductsQuery = useQuery({ queryKey: ['companyProducts'], queryFn: () => products });

  useEffect(() => {
    if (user.data) companyProductsQuery.refetch();
  }, [user.data, companyProductsQuery]);

  return <ProductsList products={companyProductsQuery.data ?? []} />;
};
export default DashboardProducts;
