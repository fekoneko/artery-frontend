import { goods } from '../../assets/goodsMock/goods';
import GoodCard from './GoodCard';

const GoodsList = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-2">
      {goods.map((good) => (
        <GoodCard key={good.id} good={good}></GoodCard>
      ))}
    </div>
  );
};

export default GoodsList;
