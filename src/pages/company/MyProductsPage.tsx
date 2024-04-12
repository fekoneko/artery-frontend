import { useNavigate } from 'react-router-dom';
import CompanyProducts from '../../components/Dashboard/ComapnyProducts';

const MyProductsPage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex size-full flex-col overflow-x-hidden overflow-y-scroll py-4 pl-[12%] pr-[calc(12vw-0.5rem)]">
      <button onClick={() => navigate('/product/add')}>Добавить товар</button>
      <section className="mr-[-12vw]">
        <CompanyProducts />
      </section>
    </main>
  );
};
export default MyProductsPage;
