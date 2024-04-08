import { useParams } from 'react-router-dom';
import { goods } from '../../assets/goodsMock/goods';

const GoodPage = () => {
  const params = useParams<{ id: string }>();
  const good = params.id ? goods[+params.id - 1] : undefined;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <a href="">
            <img src={good?.imageUrl} alt="Product Image" className="w-full" />
          </a>
        </div>
        <div className="col-span-1">
          <h1 className="text-3xl font-bold">{good?.name}</h1>
          <p className="text-gray-500">{good?.price} RUB</p>
          <p className="text-gray-700">{good?.description}</p>
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default GoodPage;
