import { useParams } from 'react-router-dom';
import { products } from '../../assets/productsMock/products';
import ActionButton from '../../components/common/ActionButton';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';

const ProductPage = () => {
  const params = useParams<{ id: string }>();
  const product = params.id ? products[+params.id - 1] : undefined;
  const { setCart } = useContext(CartContext);

  const addToCard = () => {
    if (!product) return;
    setCart((prev) => {
      if (!prev) return undefined;
      if (prev.findIndex((item) => item.id === product.id) !== -1) return prev;
      return [...prev, { id: product.id, quantity: 1 }];
    });
  };

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
                  src={product?.image}
                  alt={'Изображение: ' + product?.name}
                  className="max-h-full max-w-full transition-transform duration-300 [:hover>*>&]:scale-[1.7]"
                />
              </MouseParallaxChild>

              <div className="absolute flex size-full items-center justify-center">
                <img src={product?.image} className="w-full scale-125 blur-xl" />
                <div className="absolute size-full bg-slate-600/30" />
              </div>
            </MouseParallaxContainer>
            <ActionButton onClick={addToCard}>В корзину</ActionButton>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-[2.4rem] font-bold text-slate-300">{product?.name}</h1>
            <h2>Компания: {product?.company}</h2>
            <p>{product?.price} RUB</p>
            <p>{product?.description}</p>
            <p>Размер/вес: {product?.size}/{product?.weight}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
