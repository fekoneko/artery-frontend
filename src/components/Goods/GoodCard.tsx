import { useNavigate } from 'react-router-dom';
import { Good } from '../../@types/global';
import ActionButton from '../common/ActionButton';

interface GoodCardProps {
  good: Good;
}
const GoodCard = ({ good }: GoodCardProps) => {
  const navigate = useNavigate();

  return (
    <ActionButton
      onClick={() => navigate(`/good/${good.id}`)}
      className="flex size-full flex-col items-center gap-4 rounded-xl bg-slate-700/20 hover:border-emerald-400 hover:bg-slate-700/20"
    >
      <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-lg">
        <img
          src={good.imageUrl}
          alt={'Изображение: ' + good?.name}
          className="z-10 max-h-full max-w-full"
        />

        <div className="absolute flex size-full items-center justify-center">
          <img src={good.imageUrl} className="w-full blur-lg [transform:scale(1.3)]" />
          <div className="absolute size-full bg-slate-600/30" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">{good.name}</h2>
        <p className="">{good.description}</p>
        <p className="text-red-400">{good.price} RUB</p>
      </div>
    </ActionButton>
  );
};

export default GoodCard;
