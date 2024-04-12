import ProductsList from '../../components/Products/ProductsList';
import ProductCategorySelector from '../../components/Products/ProductsCategorySelector';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../lib/api';

const FeedPage = () => {
  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    refetchOnMount: true,
  });

  const products = productsQuery.data;
  if (!products) return null;

  return (
    <main className="grid size-full grid-cols-[1fr_5fr] gap-4 pl-[12vw]">
      <ProductCategorySelector />
      <ProductsList products={products} />
    </main>
  );
};
export default FeedPage;
