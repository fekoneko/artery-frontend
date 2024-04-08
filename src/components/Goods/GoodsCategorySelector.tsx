import { categories } from '../../assets/goodsMock/goodsCategories';
const GoodCategorySelector = () => {
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoodCategorySelector;
