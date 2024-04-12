import { useQuery } from '@tanstack/react-query';
import ProductsList from '../Products/ProductsList';
import { useUser } from '../../lib/auth';
import { useEffect, useMemo } from 'react';
import { products } from '../../assets/productsMock/products';

interface CompanyProductsProps {
  maxCount?: number;
}
const CompanyProducts = ({ maxCount }: CompanyProductsProps) => {
  const user = useUser({ retry: 1, retryDelay: 100 });

  const companyProductsQuery = useQuery({ queryKey: ['companyProducts'], queryFn: () => products });
  const displayedCompanyProducts = useMemo(
    () => companyProductsQuery.data?.slice(0, maxCount),
    [companyProductsQuery.data, maxCount],
  );

  useEffect(() => {
    if (user.data) companyProductsQuery.refetch();
  }, [user.data, companyProductsQuery]);

  return <ProductsList products={displayedCompanyProducts ?? []} />;
};
export default CompanyProducts;
