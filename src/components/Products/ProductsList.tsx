import { Product } from '../../@types/global';
import ProductCard from './ProductCard';

interface ProductsListProps {
  product: Product[];
}
const ProductsList = ({ product }: ProductsListProps) => {
  return (
    <div className="overflow-y-scroll pr-[calc(12vw-0.5rem)]">
      <div className="grid grid-cols-3 gap-4 py-4">
        {product.map((good) => (
          <ProductCard key={good.id} product={good}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
