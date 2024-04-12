import { useNavigate } from 'react-router-dom';
import { formFieldData } from '../../components/Order/OrderCityForm';
import OrderPrice from '../../components/Order/OrderPrice';
import Form from '../../components/Forms/Form';



const OrderPage = () => {
  const navigate = useNavigate();

  return (
    <main className="mt-4 flex flex-col items-center justify-center gap-3">
      Order page
      <h2>Заказ будет доставлен через: </h2>
      <OrderPrice />
      
      <Form formFieldData={formFieldData} submitTitle='Confirm order' onSubmit={() => navigate('/payment')} />
      {/* <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => navigate('/payment')}
      >
        Confirm order
      </button> */}
    </main>
  );
};

export default OrderPage;
