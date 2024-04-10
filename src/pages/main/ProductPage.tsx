import { useParams } from 'react-router-dom';
import { products } from '../../assets/productsMock/products';
import ActionButton from '../../components/common/ActionButton';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';

const GoodPage = () => {
  const params = useParams<{ id: string }>();
  const good = params.id ? products[+params.id - 1] : undefined;

  const addToCard = () => {
    localStorage.setItem(`id ${good?.id}`, `${good?.id}`);
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
                  src={good?.imageUrl}
                  alt={'Изображение: ' + good?.name}
                  className="max-h-full max-w-full transition-transform duration-300 [:hover>*>&]:scale-[1.7]"
                />
              </MouseParallaxChild>

              <div className="absolute flex size-full items-center justify-center">
                <img src={good?.imageUrl} className="w-full scale-125 blur-xl" />
                <div className="absolute size-full bg-slate-600/30" />
              </div>
            </MouseParallaxContainer>
            <ActionButton onClick={addToCard}>В корзину</ActionButton>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-[2.4rem] font-bold text-slate-300">{good?.name}</h1>
            <p>{good?.price} RUB</p>
            <p>{good?.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GoodPage;
