import { goods } from "../FakeGoods/GoodsFakeList"
import GoodItem from "./GoodItem"
const GoodsList = () => {
  return (
    <div className="grid ml-10 gap-3 grid-cols-3 justify-items-center">
        {goods.map(good => 
            <GoodItem key={good.id}  >{[good.id, good.name, good.desc, good.price, good.img]}</GoodItem>
        )}
    </div>
  )
}

export default GoodsList