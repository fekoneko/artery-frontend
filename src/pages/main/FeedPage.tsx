import GoodsList from '../../components/Goods/GoodsList';
import GoodCategorySelector from '../../components/Goods/GoodsCategorySelector';

const FeedPage = () => {
  return (
    <main className="size-full overflow-y-scroll px-[12%]">
      <GoodCategorySelector />
      <GoodsList />
    </main>
  );
};
export default FeedPage;
