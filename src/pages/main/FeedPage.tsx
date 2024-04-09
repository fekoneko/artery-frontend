import GoodsList from '../../components/Goods/GoodsList';
import GoodCategorySelector from '../../components/Goods/GoodsCategorySelector';

const FeedPage = () => {
  return (
    <main className="flex size-full gap-4 overflow-hidden pl-[12vw]">
      <GoodCategorySelector />
      <GoodsList />
    </main>
  );
};
export default FeedPage;
