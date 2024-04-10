import { useParams } from 'react-router-dom';
import { goods } from '../../assets/goodsMock/goods';
import ActionButton from '../../components/common/ActionButton';

const GoodPage = () => {
  const params = useParams<{ id: string }>();
  const good = params.id ? goods[+params.id - 1] : undefined;
  const onClick = () => {
    localStorage.setItem(`id ${good?.id}`, `${good?.id}`);
  }
  return (
    <main className="flex size-full overflow-y-scroll pl-[12%] pr-[calc(12%-0.5rem)]">
      <div className="flex-col  gap-2 pt-4">
        <div className="grid grid-cols-[3fr_4fr] gap-6">
          <div className="relative flex size-full h-[50dvh] items-center justify-center overflow-hidden rounded-xl">
            <img
              src={good?.imageUrl}
              alt={'Изображение: ' + good?.name}
              className="z-10 max-h-full max-w-full"
            />
            <div className="absolute flex size-full items-center justify-center">
              <img src={good?.imageUrl} className="w-full blur-xl [transform:scale(1.3)]" />
              <div className="absolute size-full bg-slate-600/30" />
            </div>
          </div>

          <div>
            <h1 className="text-[2.4rem] font-bold text-slate-300">{good?.name}</h1>
            <p>{good?.price} RUB</p>
            <p>{good?.description}</p>
            <ActionButton  onClick={() => onClick()}>В корзину</ActionButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GoodPage;
