import ProductsList from '../../components/Products/ProductsList';
import ProductCategorySelector from '../../components/Products/ProductsCategorySelector';
import { products } from '../../assets/productsMock/products';

const FeedPage = () => {
  return (
    <main className="grid size-full grid-cols-[1fr_5fr] gap-4 pl-[12vw]">
      <ProductCategorySelector />
      <ProductsList product={products} />
    </main>
  );
};
export default FeedPage;
