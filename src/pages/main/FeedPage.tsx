import GoodsList from '../../components/Goods/GoodsList';
import GoodCategorySelector from '../../components/Goods/GoodsCategorySelector';
import { goods } from '../../assets/goodsMock/goods';

const FeedPage = () => {
  return (
    <main className="grid size-full grid-cols-[1fr_5fr] gap-4 pl-[12vw]">
      <GoodCategorySelector />
      <GoodsList goods={goods} />
    </main>
  );
};
export default FeedPage;
