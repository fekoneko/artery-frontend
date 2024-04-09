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
      className="rounded-xlhover:border-emerald-400 flex size-full flex-col items-center gap-2 border-slate-600 pb-3 hover:bg-slate-700/20"
    >
      <div className="relative mb-2.5 flex h-48 w-full items-center justify-center overflow-hidden rounded-lg">
        <img
          src={good.imageUrl}
          alt={'Изображение: ' + good?.name}
          className="z-10 max-h-full max-w-full transition-transform duration-300 [:hover>div>&]:scale-110"
        />

        <div className="absolute flex size-full items-center justify-center">
          <img src={good.imageUrl} className="w-full scale-125 blur-lg" />
          <div className="absolute size-full bg-slate-600/30 [:hover>div>div>&]:bg-teal-700/30" />
        </div>
      </div>

      <div className="flex grow flex-col gap-2">
        <h2 className="text-xl font-semibold">{good.name}</h2>
        <p className="relative max-h-36 overflow-hidden [mask:linear-gradient(white_7rem,transparent_9rem)]">
          {good.description}
        </p>
      </div>
      <p className="font-bold text-emerald-500">{good.price} ₽</p>
    </ActionButton>
  );
};

export default GoodCard;
