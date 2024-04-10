import { useSearchParams } from 'react-router-dom';
import { categories } from '../../assets/productsMock/productsCategories';
import { useEffect, useState } from 'react';

const ProductCategorySelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>();

  useEffect(() => {
    if (selectedCategoryId === undefined) return;

    if (selectedCategoryId === 0) setSearchParams({});
    else setSearchParams({ c: selectedCategoryId.toString() });
  }, [selectedCategoryId, setSearchParams]);

  useEffect(() => {
    if (selectedCategoryId !== undefined) return;

    const searchParamValue = searchParams.get('c');
    if (searchParamValue === null || isNaN(+searchParamValue)) {
      setSelectedCategoryId(0);
      return;
    }
    setSelectedCategoryId(+searchParamValue);
  }, [searchParams, selectedCategoryId, setSelectedCategoryId]);

  return (
    <div className="flex flex-col gap-3 py-4">
      <h2 className="text-center text-xl font-semibold">Категории</h2>

      <ul className="flex flex-col gap-2">
        <li>
          <button
            onClick={() => setSelectedCategoryId(0)}
            className={
              'size-full border-y-0 border-l-[3.5px] border-r-0 border-emerald-500 px-4 text-left' +
              (selectedCategoryId === 0
                ? ' bg-emerald-500 text-white hover:bg-emerald-400 hover:text-white focus:bg-emerald-400'
                : ' hover:bg-slate-700 hover:text-inherit focus:bg-slate-700')
            }
          >
            Все категории
          </button>
        </li>

        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => setSelectedCategoryId(category.id)}
              className={
                'size-full border-y-0 border-l-[3.5px] border-r-0 border-emerald-500 px-4 text-left' +
                (category.id === selectedCategoryId
                  ? ' bg-emerald-500 text-white hover:bg-emerald-400 hover:text-white focus:bg-emerald-400'
                  : ' hover:bg-slate-700 hover:text-inherit focus:bg-slate-700')
              }
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategorySelector;
