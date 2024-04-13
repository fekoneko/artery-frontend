import { useQuery } from '@tanstack/react-query';
import ProductsList from '../Products/ProductsList';
import { useUser } from '../../lib/auth';
import { useMemo } from 'react';
import { getCompanyProducts } from '../../lib/api';

interface CompanyProductsProps {
  maxCount?: number;
}
const CompanyProducts = ({ maxCount }: CompanyProductsProps) => {
  const user = useUser({ retry: 1, retryDelay: 100 });

  const companyProductsQuery = useQuery({
    queryKey: ['companyProducts'],
    queryFn: () => {
      if (!user.data) return undefined;
      return getCompanyProducts(user.data.id);
    },
    refetchOnMount: true,
  });

  const displayedCompanyProducts = useMemo(
    () => companyProductsQuery.data?.slice(0, maxCount),
    [companyProductsQuery.data, maxCount],
  );

  return <ProductsList products={displayedCompanyProducts ?? []} />;
};
export default CompanyProducts;
