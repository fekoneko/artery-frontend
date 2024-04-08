import { useParams } from 'react-router-dom'
import { goods } from '../FakeGoods/GoodsFakeList';
import GoodItem from './GoodItem';
const GoodPage = () => {
  const params = useParams<{id: string}>();
  console.log(params, goods[params.id-1])
  return (
    <div className='container mx-auto'>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <a href="">
            <img src={goods[params.id-1].img} alt="Product Image" className="w-full" />
          </a>
        </div>
        <div className="col-span-1">
          <h1 className="text-3xl font-bold">{goods[params.id-1].name}</h1>
          <p className="text-gray-500">{goods[params.id-1].price} RUB</p>
          <p className="text-gray-700">{goods[params.id-1].desc}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add to Cart</button>
        </div>
      </div>
    </div>
    
  )
}

export default GoodPage