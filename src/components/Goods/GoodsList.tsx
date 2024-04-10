
import GoodCard from './GoodCard';

const GoodsList = ({goods}) => {
  return (
    <div className="overflow-y-scroll pr-[calc(12vw-0.5rem)]">
      <div className="grid grid-cols-3 gap-4 py-4">
        {goods.map((good) => (
          <GoodCard key={good.id} good={good}></GoodCard>
        ))}
      </div>
    </div>
  );
};

export default GoodsList;
