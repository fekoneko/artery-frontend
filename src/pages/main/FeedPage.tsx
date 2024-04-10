import GoodsList from '../../components/Goods/GoodsList';
import GoodCategorySelector from '../../components/Goods/GoodsCategorySelector';
import { goods } from '../../assets/goodsMock/goods';

const FeedPage = () => {
  return (
    <main className="flex size-full gap-4 overflow-hidden pl-[12vw]">
      <GoodCategorySelector />
      <GoodsList goods={goods} />
    </main>
  );
};
export default FeedPage;
