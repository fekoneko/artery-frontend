import { useParams } from 'react-router-dom';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import AddToCartButton from '../../components/Cart/AddToCartButton';
import { isClient, useUser } from '../../lib/auth';
import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../lib/api';

const ProductPage = () => {
  const user = useUser({ retry: 1, retryDelay: 100 });
  const params = useParams<{ id: string }>();

  const productQuery = useQuery({
    queryKey: ['product'],
    queryFn: () => {
      if (!params.id) return undefined;
      return getProduct(+params.id);
    },
    refetchOnMount: true,
  });

  const product = productQuery.data;
  if (!product) return null;

  return (
    <main className="flex size-full overflow-y-scroll pl-[12%] pr-[calc(12%-0.5rem)]">
      <div className="flex-col gap-2 pt-4">
        <div className="grid grid-cols-[3fr_4fr] gap-6">
          <div className="flex flex-col gap-4">
            <MouseParallaxContainer
              globalFactorX={0.8}
              globalFactorY={0.8}
              resetOnLeave
              className="relative flex size-full h-[63dvh] items-center justify-center overflow-hidden rounded-xl"
            >
              <MouseParallaxChild className="z-10">
                <img
                  src={product.image}
                  alt={'Изображение: ' + product.name}
                  className="max-h-full max-w-full transition-transform duration-300 [:hover>*>&]:scale-[1.7]"
                />
              </MouseParallaxChild>

              <div className="absolute flex size-full items-center justify-center">
                <img src={product.image} className="w-full scale-125 blur-xl" />
                <div className="absolute size-full bg-slate-600/30" />
              </div>
            </MouseParallaxContainer>
            {isClient(user.data) && (
              <AddToCartButton productId={product.id} companyId={product.companyId} />
            )}
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-[2.4rem] font-bold text-slate-300">{product.name}</h1>
            <p>{product.price} RUB</p>
            <p>Производитель: {product.companyId}</p>
            <p>{product.description}</p>
            <p>Размер: {product.size}</p>
            <p>Масса: {product.weight}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
