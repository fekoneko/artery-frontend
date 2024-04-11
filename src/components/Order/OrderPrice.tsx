import { products } from '../../assets/productsMock/products'

const OrderPrice = () => {
  let totalprice = 0
    const items =  JSON.parse(localStorage.getItem('cart') ?? '[]');
    
    for (let i = 0; i< items.length; i++)
        totalprice += products.find((product) => product.id == items[i].id)?.price*items[i].quantity
    localStorage.setItem('price', `${totalprice}`)
  return (
    <div>
        Цена заказа: {totalprice} RUB
    </div>
  )
}

export default OrderPrice