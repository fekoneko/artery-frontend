import GoodsList from '../../components/Goods/GoodsList';
import GoodCategorySelector from '../../components/Goods/GoodsCategorySelector';

const FeedPage = () => {
  return (
    <main className="grid size-full grid-cols-[1fr_5fr] gap-4 pl-[12vw]">
      <GoodCategorySelector />
      <GoodsList />
    </main>
  );
};
export default FeedPage;
