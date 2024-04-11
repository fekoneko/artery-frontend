import { useNavigate } from "react-router-dom"
import OrderCity from "../../components/Order/OrderCity"
import OrderPrice from "../../components/Order/OrderPrice"

const OrderPage = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center gap-3">
        Order page
      <OrderPrice />
      <OrderCity />
      Заказ будет доставлен через: 
      

      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700" onClick={() => navigate('/payment')}>Confirm order</button>
    </div>
  )
}

export default OrderPage