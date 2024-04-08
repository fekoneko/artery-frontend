import { categories } from "../FakeGoods/GoodsCatList"
const Types = () => {
    
  return (
    <div>
       <ul>
        {categories.map(cat => <li key={cat.id}>{cat.name}</li>)}
       </ul>
    </div>
  )
}

export default Types