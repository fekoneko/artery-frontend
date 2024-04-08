import { useNavigate } from 'react-router-dom';
import { Good } from '../../@types/global';

interface GoodCardProps {
  good: Good;
}
const GoodCard = ({ good }: GoodCardProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" flex w-44 flex-col items-center rounded-lg bg-blue-600">
        <a href="#">
          <img className="max-h-24 w-44 rounded-t-lg" src={good.imageUrl} />
        </a>
        <div className="p-6 text-center">
          <h4 className="mb-2 text-xl font-medium leading-tight text-orange-400">{good.name}</h4>
          <p className="mb-4 text-base">{good.description}</p>
          <h5 className="text-red-400">{good.price} RUB</h5>
          <button
            className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:bg-red-300 "
            onClick={() => navigate(`/good/${good.id}`)}
          >
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default GoodCard;
