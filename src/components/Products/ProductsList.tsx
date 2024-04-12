import { Product } from '../../@types/global';
import ProductCard from './ProductCard';

interface ProductsListProps {
  products: Product[];
}
const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="overflow-y-scroll pr-[calc(12vw-0.5rem)]">
      <div className="grid grid-cols-3 gap-4 py-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
